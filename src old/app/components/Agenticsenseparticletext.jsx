"use client";
import React, { useRef, useEffect } from "react";

export default function AgenticSenseParticleText() {
  const wrapRef   = useRef(null);
  const canvasRef = useRef(null);
  const textRef   = useRef(null);

  useEffect(() => {
    const wrap   = wrapRef.current;
    const canvas = canvasRef.current;
    const textEl = textRef.current;
    if (!wrap || !canvas) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    let raf = 0;
    let running = false;
    let W = 0, H = 0;
    let fontSize = 36;   // resolved each setup() to fit the container width

    const TEXT = "AgenticSense";

    // ── Compute the LARGEST font size that fits TEXT within the container ─────
    // This guarantees the full word is always visible on every screen size.
    const measureCtx = document.createElement("canvas").getContext("2d");
    const computeFontSize = (containerW) => {
      // letter-spacing is -0.05em (negative → text is a bit narrower than raw measure)
      // Binary-search the font size so measured width ≈ 96% of container (small margin)
      const target = containerW * 0.96;
      let lo = 20, hi = 800, best = 20;
      for (let i = 0; i < 22; i++) {
        const mid = (lo + hi) / 2;
        measureCtx.font = `900 ${mid}px 'Geist Sans', ui-sans-serif, system-ui, sans-serif`;
        // approximate letter-spacing effect: (chars-1) * -0.05 * fontSize
        const spacing = (TEXT.length - 1) * (-0.05) * mid;
        const w = measureCtx.measureText(TEXT).width + spacing;
        if (w <= target) { best = mid; lo = mid; } else { hi = mid; }
      }
      // Cap so it never gets absurdly huge on ultra-wide monitors
      return Math.min(best, 240);
    };

    const PALETTE = [
      [160,100,255],[130,70,255],[200,140,255],[110,50,220],
      [255,255,255],[230,215,255],[100,190,255],[255,180,220],
      [200,130,255],[180,120,255],
    ];

    const spriteCache = new Map();
    const makeSprite = (kind, ci, radius) => {
      const key = kind + "|" + ci + "|" + radius.toFixed(1);
      const hit = spriteCache.get(key);
      if (hit) return hit;
      const [r, g, b] = PALETTE[ci];
      const s = document.createElement("canvas");
      const sc = s.getContext("2d");

      if (kind === "orb") {
        const pr = radius, rad = pr * 4, pad = 24;
        const size = Math.ceil(rad * 2 + pad * 2);
        s.width = s.height = size;
        const cx = size/2, cy = size/2;
        const grd = sc.createRadialGradient(cx, cy, 0, cx, cy, rad);
        grd.addColorStop(0,    `rgba(${r},${g},${b},0.9)`);
        grd.addColorStop(0.25, `rgba(${r},${g},${b},0.55)`);
        grd.addColorStop(0.6,  `rgba(${r},${g},${b},0.18)`);
        grd.addColorStop(1,    `rgba(${r},${g},${b},0)`);
        sc.fillStyle = grd; sc.shadowBlur = 22; sc.shadowColor = `rgba(${r},${g},${b},0.8)`;
        sc.beginPath(); sc.arc(cx, cy, rad, 0, Math.PI*2); sc.fill();
        sc.shadowBlur = 10; sc.fillStyle = `rgba(255,255,255,0.85)`;
        sc.beginPath(); sc.arc(cx, cy, pr*0.45, 0, Math.PI*2); sc.fill();
        const sp = { canvas: s, cx, cy }; spriteCache.set(key, sp); return sp;
      }
      if (kind === "star") {
        const arms = radius*2.8, pad = 18;
        const size = Math.ceil(arms*2 + pad*2);
        s.width = s.height = size;
        const cx = size/2, cy = size/2;
        sc.translate(cx, cy);
        sc.shadowBlur = 14; sc.shadowColor = `rgba(${r},${g},${b},0.9)`;
        sc.strokeStyle = `rgba(${r},${g},${b},1)`; sc.lineWidth = radius*0.7; sc.lineCap = "round";
        sc.beginPath(); sc.moveTo(-arms,0); sc.lineTo(arms,0); sc.stroke();
        sc.beginPath(); sc.moveTo(0,-arms); sc.lineTo(0,arms); sc.stroke();
        sc.globalAlpha = 0.5; sc.lineWidth *= 0.5;
        const a2 = arms*0.55;
        sc.beginPath(); sc.moveTo(-a2,-a2); sc.lineTo(a2,a2); sc.stroke();
        sc.beginPath(); sc.moveTo(a2,-a2); sc.lineTo(-a2,a2); sc.stroke();
        sc.globalAlpha = 0.95; sc.shadowBlur = 8; sc.fillStyle = "rgba(255,255,255,1)";
        sc.beginPath(); sc.arc(0,0, radius*0.5, 0, Math.PI*2); sc.fill();
        const sp = { canvas: s, cx, cy }; spriteCache.set(key, sp); return sp;
      }
      if (kind === "dot") {
        const pad = 16, size = Math.ceil(radius*2 + pad*2);
        s.width = s.height = size;
        const cx = size/2, cy = size/2;
        sc.shadowBlur = 12; sc.shadowColor = `rgba(${r},${g},${b},0.85)`;
        sc.fillStyle = `rgba(${r},${g},${b},1)`;
        sc.beginPath(); sc.arc(cx, cy, radius, 0, Math.PI*2); sc.fill();
        sc.globalAlpha = 0.6; sc.shadowBlur = 0; sc.fillStyle = "rgba(255,255,255,1)";
        sc.beginPath(); sc.arc(cx - radius*0.25, cy - radius*0.25, radius*0.38, 0, Math.PI*2); sc.fill();
        const sp = { canvas: s, cx, cy }; spriteCache.set(key, sp); return sp;
      }
      const pad = 10, size = Math.ceil(radius*2 + pad*2);
      s.width = s.height = size;
      const cx = size/2, cy = size/2;
      sc.shadowBlur = 5; sc.shadowColor = `rgba(${r},${g},${b},0.8)`;
      sc.fillStyle = `rgba(${r},${g},${b},1)`;
      sc.beginPath(); sc.arc(cx, cy, radius, 0, Math.PI*2); sc.fill();
      const sp = { canvas: s, cx, cy }; spriteCache.set(key, sp); return sp;
    };

    const bucket = (v, step) => Math.max(step, Math.round(v / step) * step);

    class Particle {
      reset(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : H + 6;
        const spd = Math.random() * 0.5 + 0.12;
        const ang = -Math.PI/2 + (Math.random() - 0.5) * 0.65;
        this.vx = Math.cos(ang) * spd;
        this.vy = Math.sin(ang) * spd;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.04 + 0.01;
        this.wobbleAmp = Math.random() * 0.18 + 0.04;
        this.ci = Math.floor(Math.random() * PALETTE.length);
        this.life = init ? Math.random() : 1;
        this.decay = Math.random() * 0.004 + 0.0015;
        const rnd = Math.random();
        if (rnd < 0.10) {
          this.kind = "orb"; this.radius = bucket(Math.random()*5+3, 1);
          this.decay *= 0.30; this.pulse = Math.random()*Math.PI*2; this.pulseS = Math.random()*0.035+0.015;
        } else if (rnd < 0.25) {
          this.kind = "star"; this.radius = bucket(Math.random()*2.2+1, 0.5);
          this.rot = Math.random()*Math.PI; this.rotS = (Math.random()-0.5)*0.03;
        } else if (rnd < 0.45) {
          this.kind = "dot"; this.radius = bucket(Math.random()*1.8+0.8, 0.5);
        } else {
          this.kind = "spark"; this.radius = bucket(Math.random()*0.9+0.2, 0.3);
          this.vx *= 1.8; this.vy *= 1.8; this.decay *= 1.4;
        }
        this.sprite = makeSprite(this.kind, this.ci, this.radius);
      }
      constructor(init) { this.reset(init); }
      update() {
        this.wobble += this.wobbleSpeed;
        this.vx += Math.sin(this.wobble) * this.wobbleAmp * 0.01;
        this.x += this.vx; this.y += this.vy; this.life -= this.decay;
        if (this.kind === "orb") this.pulse += this.pulseS;
        if (this.kind === "star") this.rot += this.rotS;
        if (this.life <= 0 || this.y < -10 || this.x < -14 || this.x > W + 14) this.reset();
      }
      draw(c) {
        const a = this.life > 0 ? this.life : 0;
        const sp = this.sprite;
        c.globalAlpha = a;
        if (this.kind === "orb") {
          const k = 1 + 0.28 * Math.sin(this.pulse);
          const w = sp.canvas.width * k, h = sp.canvas.height * k;
          c.drawImage(sp.canvas, this.x - w/2, this.y - h/2, w, h);
        } else if (this.kind === "star") {
          c.translate(this.x, this.y); c.rotate(this.rot);
          c.drawImage(sp.canvas, -sp.cx, -sp.cy);
          c.setTransform(1,0,0,1,0,0);
        } else {
          c.drawImage(sp.canvas, this.x - sp.cx, this.y - sp.cy);
        }
      }
    }

    const COUNT = () => {
      const base = window.innerWidth < 640 ? 0.45 : 0.7;
      return Math.round(W * base);
    };
    let particles = [];
    const rebuildParticles = () => {
      particles = Array.from({ length: COUNT() }, () => new Particle(true));
    };

    const off = document.createElement("canvas");
    const offCtx = off.getContext("2d", { alpha: true });

    const maskCanvas = document.createElement("canvas");
    const maskCtx = maskCanvas.getContext("2d", { alpha: true });
    const buildMask = () => {
      maskCanvas.width = W; maskCanvas.height = H;
      maskCtx.clearRect(0, 0, W, H);
      maskCtx.font = `900 ${fontSize}px 'Geist Sans', ui-sans-serif, system-ui, sans-serif`;
      maskCtx.textBaseline = "top"; maskCtx.textAlign = "center";
      maskCtx.letterSpacing = `${Math.round(-fontSize * 0.05)}px`;
      maskCtx.fillStyle = "rgba(6,5,36,1)";
      maskCtx.fillText(TEXT, W / 2, H * 0.03);
    };
    const gradCanvas = document.createElement("canvas");
    const gradCtx = gradCanvas.getContext("2d", { alpha: true });
    const buildGrad = () => {
      gradCanvas.width = W; gradCanvas.height = H;
      gradCtx.clearRect(0, 0, W, H);
      const g = gradCtx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0,   "rgba(180,120,255,1)");
      g.addColorStop(0.5, "rgba(80,40,200,1)");
      g.addColorStop(1,   "rgba(20,10,80,1)");
      gradCtx.fillStyle = g; gradCtx.fillRect(0, 0, W, H);
    };

    const setup = () => {
      const containerW = wrap.offsetWidth;
      // Resolve a font size that always fits the full word in the container
      fontSize = computeFontSize(containerW);

      // Sync the visible spacer <div> to the SAME font size so layout height matches
      if (textEl) {
        textEl.style.fontSize = fontSize + "px";
        textEl.style.letterSpacing = "-0.05em";
      }

      W = canvas.width  = containerW;
      H = canvas.height = Math.round(fontSize * 1.14);
      canvas.style.height = H + "px";
      off.width = W; off.height = H;
      buildMask(); buildGrad();
    };

    const composite = () => {
      offCtx.clearRect(0, 0, W, H);
      offCtx.save();
      for (let i = 0; i < particles.length; i++) particles[i].draw(offCtx);
      offCtx.restore();
      offCtx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(maskCanvas, 0, 0);
      ctx.globalCompositeOperation = "source-atop";
      ctx.drawImage(off, 0, 0);
      ctx.globalAlpha = 0.08;
      ctx.drawImage(gradCanvas, 0, 0);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const FRAME_MS = 1000 / 40;
    let lastTs = 0;
    const render = (ts) => {
      if (!running) return;
      raf = requestAnimationFrame(render);
      if (ts - lastTs < FRAME_MS) return;
      lastTs = ts;
      composite();
      for (let i = 0; i < particles.length; i++) particles[i].update();
    };
    const start = () => { if (running || reduceMotion) return; running = true; lastTs = 0; raf = requestAnimationFrame(render); };
    const stop  = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; };

    setup();
    rebuildParticles();

    if (reduceMotion) composite();

    const io = new IntersectionObserver(
      ([e]) => { e.isIntersecting ? start() : stop(); },
      { threshold: 0 }
    );
    io.observe(wrap);

    const onVis = () => { document.hidden ? stop() : start(); };
    document.addEventListener("visibilitychange", onVis);

    let rt;
    const ro = new ResizeObserver(() => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        setup(); rebuildParticles();
        if (reduceMotion) composite();
      }, 200);
    });
    ro.observe(wrap);

    return () => {
      stop(); io.disconnect(); ro.disconnect(); clearTimeout(rt);
      document.removeEventListener("visibilitychange", onVis);
      spriteCache.clear();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full select-none text-center block overflow-hidden" style={{ lineHeight: 1 }}>
      {/* Spacer — font-size set by JS at runtime to fit the container exactly */}
      <div
        ref={textRef}
        aria-hidden="true"
        style={{
          fontSize: "13vw",          // initial guess; JS overrides to fit
          fontWeight: 900,
          letterSpacing: "-0.05em",
          lineHeight: 1.14,
          color: "transparent",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        AgenticSense
      </div>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none" }}
      />
      <span className="sr-only">AgenticSense</span>
    </div>
  );
}