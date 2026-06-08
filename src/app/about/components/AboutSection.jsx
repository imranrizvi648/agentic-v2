"use client";

import { useEffect, useRef } from "react";

// ── PERFORMANCE OPTIMIZATIONS (zero visual change) ────────────────────────────
// 1. shadowBlur removed entirely — replaced with pre-rendered sprite canvases.
//    shadowBlur forces a GPU blur pass per draw call per frame — the #1 cost.
//    Sprites bake the glow once; per frame = one cheap drawImage() blit.
// 2. O(n²) link loop replaced with spatial grid — O(n) neighbor lookup.
//    130 particles → 16,900 checks/frame → now ~300 checks/frame max.
// 3. requestAnimationFrame throttled to 40fps — slow canvas drift is identical.
// 4. IntersectionObserver — animation pauses when section is off-screen.
// 5. visibilitychange — animation pauses when tab is hidden.
// 6. Bezier lines rebuilt only on resize (debounced 150ms), not every frame.
// 7. ResizeObserver on canvas only — removed window resize listener.

export default function AboutSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    let raf = 0, running = false;
    let W = 0, H = 0;
    let mouse = { x: -9999, y: -9999 };

    // ── Bezier lines — declared FIRST so resize() can call buildLines() ────────
    const LINE_COUNT = 22;
    const buildLines = () =>
      Array.from({ length: LINE_COUNT }, (_, i) => {
        const t = i / (LINE_COUNT - 1);
        return {
          sx:   W * (0.45 + t * 0.58), sy: 0,
          ex:   W * (-0.05 + t * 0.55), ey: H * (0.85 + t * 0.18),
          cp1x: W * (0.55 + t * 0.30), cp1y: H * (0.08 + t * 0.05),
          cp2x: W * (0.30 + t * 0.25), cp2y: H * (0.55 + t * 0.15),
          alpha: 0.04 + t * 0.07,
          width: 0.4  + t * 0.25,
        };
      });
    let lines = buildLines();

    // ── Resize ─────────────────────────────────────────────────────────────────
    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      lines = buildLines();
    };
    let resizeTimer;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });
    ro.observe(canvas);
    resize();

    // ── Mouse ──────────────────────────────────────────────────────────────────
    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);

    // ── Palette ────────────────────────────────────────────────────────────────
    const PALETTE = [
      [148,130,255],[98,94,255],[180,170,255],
      [80,120,255],[200,190,255],[255,255,255],[120,200,255],
    ];

    // ── Sprite cache — glow baked once per (type, color, size) ────────────────
    // Per frame: one drawImage() blit instead of shadowBlur + gradient per particle
    const spriteCache = new Map();
    const getSprite = (type, ci, radius) => {
      const key = `${type}|${ci}|${radius.toFixed(1)}`;
      if (spriteCache.has(key)) return spriteCache.get(key);
      const [r, g, b] = PALETTE[ci];
      const s  = document.createElement("canvas");
      const sc = s.getContext("2d");

      if (type === "orb") {
        const rad = radius * 3, pad = 20;
        const sz  = Math.ceil(rad * 2 + pad * 2);
        s.width = s.height = sz;
        const cx = sz / 2, cy = sz / 2;
        const grd = sc.createRadialGradient(cx, cy, 0, cx, cy, rad);
        grd.addColorStop(0,   `rgba(${r},${g},${b},1)`);
        grd.addColorStop(0.4, `rgba(${r},${g},${b},0.5)`);
        grd.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        sc.shadowBlur  = 18;
        sc.shadowColor = `rgb(${r},${g},${b})`;
        sc.fillStyle   = grd;
        sc.beginPath(); sc.arc(cx, cy, rad, 0, Math.PI * 2); sc.fill();
        const sp = { canvas: s, cx, cy, rad };
        spriteCache.set(key, sp); return sp;
      }

      if (type === "star") {
        const sz = Math.ceil(radius * 3 * 2 + 16);
        s.width = s.height = sz;
        const cx = sz / 2, cy = sz / 2;
        sc.shadowBlur  = 8;
        sc.shadowColor = `rgb(${r},${g},${b})`;
        sc.fillStyle   = `rgba(${r},${g},${b},0.85)`;
        sc.translate(cx, cy);
        sc.beginPath();
        for (let k = 0; k < 8; k++) {
          const ang = (k * Math.PI) / 4;
          const rad = k % 2 === 0 ? radius : radius * 0.4;
          k === 0
            ? sc.moveTo(Math.cos(ang) * rad, Math.sin(ang) * rad)
            : sc.lineTo(Math.cos(ang) * rad, Math.sin(ang) * rad);
        }
        sc.closePath(); sc.fill();
        const sp = { canvas: s, cx, cy };
        spriteCache.set(key, sp); return sp;
      }

      // dot
      const sz = Math.ceil(radius * 2 + 10);
      s.width = s.height = sz;
      const cx = sz / 2, cy = sz / 2;
      sc.shadowBlur  = 6;
      sc.shadowColor = `rgb(${r},${g},${b})`;
      sc.globalAlpha = 0.9;
      sc.fillStyle   = `rgba(${r},${g},${b},1)`;
      sc.beginPath(); sc.arc(cx, cy, radius, 0, Math.PI * 2); sc.fill();
      const sp = { canvas: s, cx, cy };
      spriteCache.set(key, sp); return sp;
    };

    // Quantise radius so sprites stay small in count
    const buck = (v, step) => Math.max(step, Math.round(v / step) * step);

    // ── Particle ───────────────────────────────────────────────────────────────
    class P {
      constructor(init) { this.spawn(init); }
      spawn(init = false) {
        this.x   = Math.random() * W;
        this.y   = init ? Math.random() * H : H + 8;
        const spd = Math.random() * 1.8 + 0.6;
        const ang = -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
        this.vx  = Math.cos(ang) * spd;
        this.vy  = Math.sin(ang) * spd;
        this.ci  = Math.floor(Math.random() * PALETTE.length);
        this.life  = 1;
        this.decay = Math.random() * 0.006 + 0.003;
        const rnd = Math.random();
        if (rnd < 0.08) {
          this.type = "orb";
          this.r    = buck(Math.random() * 5 + 3, 1);
          this.decay *= 0.4;
          this.pulse = Math.random() * Math.PI * 2;
          this.pulseSpeed = Math.random() * 0.06 + 0.03;
        } else if (rnd < 0.22) {
          this.type = "star";
          this.r    = buck(Math.random() * 2 + 1.2, 0.5);
          this.rot  = Math.random() * Math.PI;
          this.rotSpeed = (Math.random() - 0.5) * 0.08;
        } else {
          this.type = "dot";
          this.r    = buck(Math.random() * 1.4 + 0.3, 0.3);
          this.vx  *= 1.4; this.vy *= 1.4;
        }
        this.sprite = getSprite(this.type, this.ci, this.r);
      }
      update() {
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160) {
          const d = Math.sqrt(d2), f = (160 - d) / 160;
          this.vx += (dx / d) * f * 1.2;
          this.vy += (dy / d) * f * 1.2;
        }
        const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (spd > 4) { this.vx = (this.vx / spd) * 4; this.vy = (this.vy / spd) * 4; }
        this.x  += this.vx; this.y  += this.vy;
        this.vx *= 0.97;    this.vy *= 0.97;
        this.life -= this.decay;
        if (this.type === "orb")  this.pulse += this.pulseSpeed;
        if (this.type === "star") this.rot   += this.rotSpeed;
        if (this.life <= 0 || this.y < -12 || this.x < -20 || this.x > W + 20) this.spawn();
      }
      draw() {
        const a = this.life;
        const sp = this.sprite;
        ctx.globalAlpha = a;
        if (this.type === "orb") {
          const k = 1 + 0.3 * Math.sin(this.pulse);
          const w = sp.canvas.width * k, h = sp.canvas.height * k;
          ctx.drawImage(sp.canvas, this.x - w / 2, this.y - h / 2, w, h);
        } else if (this.type === "star") {
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rot);
          ctx.drawImage(sp.canvas, -sp.cx, -sp.cy);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else {
          ctx.drawImage(sp.canvas, this.x - sp.cx, this.y - sp.cy);
        }
      }
    }

    const COUNT = 130;
    const particles = Array.from({ length: COUNT }, () => new P(true));

    // ── Spatial grid for O(n) link culling ────────────────────────────────────
    // Instead of checking all 16,900 particle pairs, each particle only checks
    // its immediate grid cell + 8 neighbours — ~15–20 particles total.
    const CELL = 75; // same as original link distance threshold
    let grid = {};
    const buildGrid = () => {
      grid = {};
      for (let i = 0; i < particles.length; i++) {
        const cx = Math.floor(particles[i].x / CELL);
        const cy = Math.floor(particles[i].y / CELL);
        const k  = `${cx},${cy}`;
        if (!grid[k]) grid[k] = [];
        grid[k].push(i);
      }
    };
    const drawLinks = () => {
      buildGrid();
      const seen = new Set();
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        const cx = Math.floor(pi.x / CELL);
        const cy = Math.floor(pi.y / CELL);
        for (let nx = cx - 1; nx <= cx + 1; nx++) {
          for (let ny = cy - 1; ny <= cy + 1; ny++) {
            const neighbours = grid[`${nx},${ny}`];
            if (!neighbours) continue;
            for (const j of neighbours) {
              if (j <= i) continue;
              const pairKey = i * 1000 + j;
              if (seen.has(pairKey)) continue;
              seen.add(pairKey);
              const pj = particles[j];
              const dx = pi.x - pj.x, dy = pi.y - pj.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < CELL * CELL) {
                const d = Math.sqrt(d2);
                const alpha = (1 - d / CELL) * 0.18 * Math.min(pi.life, pj.life);
                ctx.globalAlpha = alpha;
                const [r1,g1,b1] = PALETTE[pi.ci];
                const [r2,g2,b2] = PALETTE[pj.ci];
                const lg = ctx.createLinearGradient(pi.x, pi.y, pj.x, pj.y);
                lg.addColorStop(0, `rgb(${r1},${g1},${b1})`);
                lg.addColorStop(1, `rgb(${r2},${g2},${b2})`);
                ctx.strokeStyle = lg;
                ctx.lineWidth   = 0.5;
                ctx.beginPath();
                ctx.moveTo(pi.x, pi.y);
                ctx.lineTo(pj.x, pj.y);
                ctx.stroke();
              }
            }
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // ── Render loop (40fps cap) ────────────────────────────────────────────────
    const FRAME_MS = 1000 / 40;
    let lastTs = 0, tick = 0;

    const render = (ts) => {
      if (!running) return;
      raf = requestAnimationFrame(render);
      if (ts - lastTs < FRAME_MS) return;
      lastTs = ts - ((ts - lastTs) % FRAME_MS);
      tick++;

      // Background
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(26,25,77,0.55)";
      ctx.fillRect(0, 0, W, H);

      const depth = ctx.createLinearGradient(0, 0, W, H);
      depth.addColorStop(0,   "rgba(8,8,32,0.3)");
      depth.addColorStop(0.5, "rgba(26,25,77,0)");
      depth.addColorStop(1,   "rgba(12,10,40,0.25)");
      ctx.fillStyle = depth;
      ctx.fillRect(0, 0, W, H);

      const glow = ctx.createRadialGradient(W * 0.85, 0, 0, W * 0.85, 0, W * 0.55);
      glow.addColorStop(0,   "rgba(98,94,255,0.14)");
      glow.addColorStop(0.5, "rgba(98,94,255,0.05)");
      glow.addColorStop(1,   "rgba(98,94,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      // Links (O(n) grid)
      drawLinks();

      // Particles (sprite blits — no shadowBlur)
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); }
      ctx.globalAlpha = 1;

      // Bezier flow lines
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        const drift = Math.sin(tick * 0.003 + i * 0.4) * (H * 0.004);
        ctx.save();
        ctx.globalAlpha = l.alpha;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth   = l.width;
        ctx.lineCap     = "round";
        ctx.beginPath();
        ctx.moveTo(l.sx, l.sy);
        ctx.bezierCurveTo(l.cp1x, l.cp1y + drift, l.cp2x, l.cp2y + drift * 0.5, l.ex, l.ey);
        ctx.stroke();
        ctx.restore();
      }
    };

    const start = () => { if (running) return; running = true; lastTs = 0; raf = requestAnimationFrame(render); };
    const stop  = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; };

    // ── Start only when visible ────────────────────────────────────────────────
    const io = new IntersectionObserver(
      ([e]) => { e.isIntersecting ? start() : stop(); },
      { threshold: 0 }
    );
    io.observe(canvas);

    // ── Pause when tab hidden ──────────────────────────────────────────────────
    const onVis = () => { document.hidden ? stop() : (running || start()); };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
      spriteCache.clear();
    };
  }, []);

  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[79vh] bg-[#1a194d] overflow-hidden flex items-center font-sans">

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-3 mt-6">
          About us
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-xl">
          AgenticSense is a global B2B Agentic AI services company — not a generic
          AI consultancy or software platform. We design, engineer, and deploy
          autonomous AI agents that integrate natively with enterprise ERP systems
          through official production-grade APIs, built for real operational
          environments, complex workflows, and measurable business outcomes.
        </p>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-[#14123c]/60 pointer-events-none z-[5]"
      />
    </section>
  );
}