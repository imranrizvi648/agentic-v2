"use client";

import { useEffect, useRef } from "react";

/**
 * ContactHero.jsx
 * Hero banner for the Contact page.
 * Dark navy (#1a194d) bg + animated flowing white curved lines
 * sweeping from top-right — same visual language as the AboutSection.
 * Drop this above <ContactUs /> in your contact/page.jsx.
 */
export default function ContactHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* ── 24 bezier lines fanning from top-right → bottom-left ── */
    const COUNT = 24;

    const buildLines = () =>
      Array.from({ length: COUNT }, (_, i) => {
        const t = i / (COUNT - 1);
        return {
          sx:   W * (0.42 + t * 0.62),
          sy:   0,
          ex:   W * (-0.08 + t * 0.55),
          ey:   H * (0.82 + t * 0.22),
          cp1x: W * (0.52 + t * 0.32),
          cp1y: H * (0.06 + t * 0.04),
          cp2x: W * (0.28 + t * 0.28),
          cp2y: H * (0.52 + t * 0.18),
          alpha: 0.055 + t * 0.095,
          width: 0.4 + t * 0.35,
        };
      });

    let lines = buildLines();
    const roLines = new ResizeObserver(() => { lines = buildLines(); });
    roLines.observe(canvas);

    let tick = 0;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, W, H);

      /* Base navy */
      ctx.fillStyle = "#1a194d";
      ctx.fillRect(0, 0, W, H);

      /* Depth gradient overlay */
      const depth = ctx.createLinearGradient(0, 0, W, H);
      depth.addColorStop(0,   "rgba(6,5,28,0.5)");
      depth.addColorStop(0.5, "rgba(26,25,77,0)");
      depth.addColorStop(1,   "rgba(10,8,38,0.4)");
      ctx.fillStyle = depth;
      ctx.fillRect(0, 0, W, H);

      /* Subtle brand-violet glow top-right */
      const glow = ctx.createRadialGradient(W * 0.9, 0, 0, W * 0.9, 0, W * 0.52);
      glow.addColorStop(0,   "rgba(98,94,255,0.13)");
      glow.addColorStop(0.5, "rgba(98,94,255,0.05)");
      glow.addColorStop(1,   "rgba(98,94,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      /* Flowing lines */
      lines.forEach((l, i) => {
        const drift = Math.sin(tick * 0.004 + i * 0.38) * (H * 0.006);
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
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      roLines.disconnect();
    };
  }, []);

  return (
    <section
      aria-label="Contact page header"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "38vh",
        background: "#1a194d",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Geist Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      />

      {/* Left vignette so text pops */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(to right, rgba(18,16,60,0.82) 0%, rgba(18,16,60,0.55) 40%, transparent 100%)",
      }} />

      {/* Bottom fade */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: 56,
        background: "linear-gradient(to top, rgba(26,25,77,0.7), transparent)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: "clamp(48px,8vw,88px) clamp(24px,6vw,80px)",
        maxWidth: 680,
      }}>
        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(2.6rem,6vw,4.2rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1.06,
          color: "#ffffff",
          margin: "0 0 14px",
        }}>
          Contact us
        </h1>

        {/* Brand accent bar — same as AboutSection */}
        <div style={{
          width: 44, height: 3, borderRadius: 2,
          background: "#625eff",
          marginBottom: 26,
        }} />

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(0.92rem,1.6vw,1.08rem)",
          fontWeight: 400,
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.6)",
          margin: 0,
          maxWidth: 540,
        }}>
          Have a project in mind or want to explore how AI can transform your
          business? We&apos;d love to hear from you — let&apos;s build
          something remarkable together.
        </p>
      </div>

      {/* Bottom edge accent line */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: 1,
        background: "linear-gradient(to right, transparent, rgba(98,94,255,0.35), transparent)",
        zIndex: 10, pointerEvents: "none",
      }} />
    </section>
  );
}