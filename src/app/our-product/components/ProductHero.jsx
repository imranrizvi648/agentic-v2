// src/components/ProductHero.jsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/*
  Typography aligned with the listing page and detail page:
    - Font: Inter (same stack)
    - Heading: bold, tracking-[-0.03em], period at end
    - Eyebrow badge: uppercase 10px, letter-spacing 0.18em
    - Stat values: bold, tight tracking, tabular
    - Stat labels: 10px semibold uppercase, 0.16em spacing, muted white

  Canvas / particle logic left 100% untouched.
*/

const PALETTE = [
  [148, 130, 255], [98, 94, 255], [180, 170, 255],
  [80, 120, 255], [200, 190, 255], [255, 255, 255], [120, 200, 255],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PRODUCT_STATS = [
  { value: "04", label: "Core Products" },
  { value: "100%", label: "Production Ready" },
  { value: "24/7", label: "Running Agents" },
  { value: "100%", label: "Scalability" },
];

const INTER_FONT =
  "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

export default function ProductHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0, running = false, tick = 0;
    let W = 0, H = 0;
    let mouse = { x: -9999, y: -9999 };

    // ── Bezier lines ──
    const LINE_COUNT = 24;
    const buildLines = () =>
      Array.from({ length: LINE_COUNT }, (_, i) => {
        const t = i / (LINE_COUNT - 1);
        return {
          sx: W * (0.42 + t * 0.62), sy: 0,
          ex: W * (-0.08 + t * 0.55), ey: H * (0.82 + t * 0.22),
          cp1x: W * (0.52 + t * 0.32), cp1y: H * (0.06 + t * 0.04),
          cp2x: W * (0.28 + t * 0.28), cp2y: H * (0.52 + t * 0.18),
          alpha: 0.04 + t * 0.07,
          width: 0.4 + t * 0.25,
        };
      });
    let lines = buildLines();

    // ── Resize (debounced 150ms) ──
    let resizeTimer;
    const doResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      lines = buildLines();
    };
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 150);
    });
    ro.observe(canvas);
    doResize();

    // ── Mouse ──
    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);

    // ── Sprite cache ──
    const cache = new Map();
    const getSprite = (type, ci, radius) => {
      const key = `${type}|${ci}|${radius.toFixed(1)}`;
      if (cache.has(key)) return cache.get(key);
      const [r, g, b] = PALETTE[ci];
      const s = document.createElement("canvas");
      const sc = s.getContext("2d");
      if (!sc) return null;

      if (type === "orb") {
        const rad = radius * 3, pad = 20, sz = Math.ceil(rad * 2 + pad * 2);
        s.width = s.height = sz;
        const cx = sz / 2, cy = sz / 2;
        sc.shadowBlur = 18; sc.shadowColor = `rgb(${r},${g},${b})`;
        const grd = sc.createRadialGradient(cx, cy, 0, cx, cy, rad);
        grd.addColorStop(0, `rgba(${r},${g},${b},1)`);
        grd.addColorStop(0.4, `rgba(${r},${g},${b},0.5)`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        sc.fillStyle = grd;
        sc.beginPath(); sc.arc(cx, cy, rad, 0, Math.PI * 2); sc.fill();
        const sp = { canvas: s, cx, cy }; cache.set(key, sp); return sp;
      }
      if (type === "star") {
        const sz = Math.ceil(radius * 6 + 16);
        s.width = s.height = sz;
        const cx = sz / 2, cy = sz / 2;
        sc.shadowBlur = 8; sc.shadowColor = `rgb(${r},${g},${b})`;
        sc.fillStyle = `rgba(${r},${g},${b},0.85)`;
        sc.translate(cx, cy); sc.beginPath();
        for (let k = 0; k < 8; k++) {
          const ang = (k * Math.PI) / 4, rad = k % 2 === 0 ? radius : radius * 0.4;
          k === 0 ? sc.moveTo(Math.cos(ang) * rad, Math.sin(ang) * rad)
            : sc.lineTo(Math.cos(ang) * rad, Math.sin(ang) * rad);
        }
        sc.closePath(); sc.fill();
        const sp = { canvas: s, cx, cy }; cache.set(key, sp); return sp;
      }
      // dot
      const sz = Math.ceil(radius * 2 + 10);
      s.width = s.height = sz;
      const cx = sz / 2, cy = sz / 2;
      sc.shadowBlur = 6; sc.shadowColor = `rgb(${r},${g},${b})`;
      sc.globalAlpha = 0.9; sc.fillStyle = `rgba(${r},${g},${b},1)`;
      sc.beginPath(); sc.arc(cx, cy, radius, 0, Math.PI * 2); sc.fill();
      const sp = { canvas: s, cx, cy }; cache.set(key, sp); return sp;
    };

    const buck = (v, step) => Math.max(step, Math.round(v / step) * step);

    // ── Particle ──
    class P {
      constructor(init = false) { this.spawn(init); }
      spawn(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : H + 8;
        const spd = Math.random() * 1.8 + 0.6, ang = -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
        this.vx = Math.cos(ang) * spd; this.vy = Math.sin(ang) * spd;
        this.ci = Math.floor(Math.random() * PALETTE.length);
        this.life = 1; this.decay = Math.random() * 0.006 + 0.003;
        const rnd = Math.random();
        if (rnd < 0.08) {
          this.type = "orb"; this.r = buck(Math.random() * 5 + 3, 1);
          this.decay *= 0.4; this.pulse = Math.random() * Math.PI * 2; this.pulseSpeed = Math.random() * 0.06 + 0.03;
        } else if (rnd < 0.22) {
          this.type = "star"; this.r = buck(Math.random() * 2 + 1.2, 0.5);
          this.rot = Math.random() * Math.PI; this.rotSpeed = (Math.random() - 0.5) * 0.08;
        } else {
          this.type = "dot"; this.r = buck(Math.random() * 1.4 + 0.3, 0.3);
          this.vx *= 1.4; this.vy *= 1.4;
        }
        this.sprite = getSprite(this.type, this.ci, this.r);
      }
      update() {
        const dx = this.x - mouse.x, dy = this.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160) { const d = Math.sqrt(d2), f = (160 - d) / 160; this.vx += (dx / d) * f * 1.2; this.vy += (dy / d) * f * 1.2; }
        const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (spd > 4) { this.vx = (this.vx / spd) * 4; this.vy = (this.vy / spd) * 4; }
        this.x += this.vx; this.y += this.vy; this.vx *= 0.97; this.vy *= 0.97;
        this.life -= this.decay;
        if (this.type === "orb" && this.pulse !== undefined && this.pulseSpeed !== undefined) this.pulse += this.pulseSpeed;
        if (this.type === "star" && this.rot !== undefined && this.rotSpeed !== undefined) this.rot += this.rotSpeed;
        if (this.life <= 0 || this.y < -12 || this.x < -20 || this.x > W + 20) this.spawn();
      }
      draw() {
        if (!this.sprite) return;
        const a = this.life, sp = this.sprite;
        ctx.globalAlpha = a;
        if (this.type === "orb" && this.pulse !== undefined) {
          const k = 1 + 0.3 * Math.sin(this.pulse), w = sp.canvas.width * k, h = sp.canvas.height * k;
          ctx.drawImage(sp.canvas, this.x - w / 2, this.y - h / 2, w, h);
        } else if (this.type === "star" && this.rot !== undefined) {
          ctx.translate(this.x, this.y); ctx.rotate(this.rot);
          ctx.drawImage(sp.canvas, -sp.cx, -sp.cy);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else {
          ctx.drawImage(sp.canvas, this.x - sp.cx, this.y - sp.cy);
        }
      }
    }

    const particles = Array.from({ length: 130 }, () => new P(true));

    // ── Spatial grid link culling ──
    const CELL = 75;
    const drawLinks = () => {
      const grid = {};
      for (let i = 0; i < particles.length; i++) {
        const cx = Math.floor(particles[i].x / CELL), cy = Math.floor(particles[i].y / CELL);
        const k = `${cx},${cy}`; (grid[k] = grid[k] || []).push(i);
      }
      const seen = new Set();
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i], cx = Math.floor(pi.x / CELL), cy = Math.floor(pi.y / CELL);
        for (let nx = cx - 1; nx <= cx + 1; nx++) for (let ny = cy - 1; ny <= cy + 1; ny++) {
          const nb = grid[`${nx},${ny}`]; if (!nb) continue;
          for (const j of nb) {
            if (j <= i) continue;
            const pk = i * 1000 + j; if (seen.has(pk)) continue; seen.add(pk);
            const pj = particles[j], dx = pi.x - pj.x, dy = pi.y - pj.y, d2 = dx * dx + dy * dy;
            if (d2 < CELL * CELL) {
              const d = Math.sqrt(d2), alpha = (1 - d / CELL) * 0.18 * Math.min(pi.life, pj.life);
              ctx.globalAlpha = alpha;
              const [r1, g1, b1] = PALETTE[pi.ci], [r2, g2, b2] = PALETTE[pj.ci];
              const lg = ctx.createLinearGradient(pi.x, pi.y, pj.x, pj.y);
              lg.addColorStop(0, `rgb(${r1},${g1},${b1})`); lg.addColorStop(1, `rgb(${r2},${g2},${b2})`);
              ctx.strokeStyle = lg; ctx.lineWidth = 0.5;
              ctx.beginPath(); ctx.moveTo(pi.x, pi.y); ctx.lineTo(pj.x, pj.y); ctx.stroke();
            }
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // ── Render loop (40fps cap) ──
    const FRAME_MS = 1000 / 40;
    let lastTs = 0;
    const render = (ts) => {
      if (!running) return;
      raf = requestAnimationFrame(render);
      if (ts - lastTs < FRAME_MS) return;
      lastTs = ts - ((ts - lastTs) % FRAME_MS);
      tick++;

      ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(26,25,77,0.55)"; ctx.fillRect(0, 0, W, H);

      const depth = ctx.createLinearGradient(0, 0, W, H);
      depth.addColorStop(0, "rgba(6,5,28,0.3)"); depth.addColorStop(0.5, "rgba(26,25,77,0)"); depth.addColorStop(1, "rgba(10,8,38,0.25)");
      ctx.fillStyle = depth; ctx.fillRect(0, 0, W, H);

      const glow = ctx.createRadialGradient(W * 0.9, 0, 0, W * 0.9, 0, W * 0.52);
      glow.addColorStop(0, "rgba(98,94,255,0.14)"); glow.addColorStop(0.5, "rgba(98,94,255,0.05)"); glow.addColorStop(1, "rgba(98,94,255,0)");
      ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);

      drawLinks();
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); }
      ctx.globalAlpha = 1;

      for (let i = 0; i < lines.length; i++) {
        const l = lines[i], drift = Math.sin(tick * 0.004 + i * 0.38) * (H * 0.006);
        ctx.save(); ctx.globalAlpha = l.alpha; ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = l.width; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(l.sx, l.sy);
        ctx.bezierCurveTo(l.cp1x, l.cp1y + drift, l.cp2x, l.cp2y + drift * 0.5, l.ex, l.ey);
        ctx.stroke(); ctx.restore();
      }
    };

    const start = () => { if (running) return; running = true; lastTs = 0; raf = requestAnimationFrame(render); };
    const stop = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; };

    const io = new IntersectionObserver(([e]) => { e.isIntersecting ? start() : stop(); }, { threshold: 0 });
    io.observe(canvas);

    const onVis = () => { document.hidden ? stop() : start(); };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop(); io.disconnect(); ro.disconnect();
      clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
      cache.clear();
    };
  }, []);

  return (
    <section
      aria-label="Our products page header"
      className="relative w-full h-[65vh] sm:h-[72vh] md:h-[82vh] bg-[#1a194d] overflow-hidden flex items-center"
      style={{ fontFamily: INTER_FONT }}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full block" />

      {/* Overlays */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(18,16,60,0.85)] via-[rgba(18,16,60,0.55)] to-transparent" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(26,25,77,0.75)] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">

        {/* Eyebrow badge matches listing page style */}
        

        {/* Headline matches "Our Product Specialities." */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl  font-bold text-white leading-[1.02] tracking-[-0.03em] max-w-3xl mb-6 md:mt-17 "
        >
          Our shipped
          <br className="hidden sm:block" />
          <span className="text-[#8d8aff]"> products.</span>
        </motion.h1>

        {/* Sub-headline refined for readability, no ALL CAPS, matches detail-page tagline weight */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-base sm:text-lg leading-[1.55] text-white/65 font-normal max-w-xl tracking-[-0.005em] mb-14 sm:mb-16"
        >
         Agentic platforms powering outbound pipelines, intelligent automation, and operational intelligence.
        </motion.p>

        {/* Stats tighter typography, cleaner label style */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/10 pt-8 sm:pt-10"
        >
          {PRODUCT_STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col pr-4 sm:pr-10 ${i !== 0 ? "pl-4 sm:pl-10 md:border-l md:border-white/10" : ""} ${i < 2 ? "pb-6 md:pb-0" : ""}`}
            >
              <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white tracking-[-0.03em] leading-none">
                {s.value}
              </span>
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.16em] mt-3 leading-none">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.35)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}