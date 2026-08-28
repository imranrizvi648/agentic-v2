"use client";

import { useEffect, useRef } from "react";


export default function AboutSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    let raf = 0, running = false;
    let W = 0, H = 0;

    // ── Bezier lines declared FIRST so resize() can call buildLines() ────────
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
      {/* Content */}
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
  <div className="max-w-4xl">
    <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.02] text-white mb-5">
      About us
    </h2>

    <p className="text-base sm:text-lg lg:text-xl leading-[1.7] tracking-[-0.005em] text-white/60 max-w-3xl">
      AgenticSense is a trusted technology partner helping enterprises harness the power of Artificial Intelligence and Agentic AI. With over 12 years of combined experience in AI and automation, we design and deliver intelligent systems that don't just support businesses  they actively drive them forward.
    </p>
  </div>
</div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-[#14123c]/60 pointer-events-none z-[5]"
      />
    </section>
  );
}