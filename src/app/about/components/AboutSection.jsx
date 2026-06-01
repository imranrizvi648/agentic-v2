"use client";

import { useEffect, useRef } from "react";

/**
 * AboutSection.jsx
 * Design: Dark navy (#1a194d) bg, flowing white curved lines sweeping
 * from top-right across the section — exact match to reference image.
 * Brand colors: #1a194d (primary) · #625eff (secondary)
 */
export default function AboutSection() {
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

    /* ── Define the flowing lines ──────────────────────────────
       Each line is a cubic bezier.
       They all originate from top-right and sweep down-left,
       fanning out like the reference image.
    ─────────────────────────────────────────────────────────── */
    const LINE_COUNT = 22;

    // Build lines relative to canvas size so they scale
    const buildLines = () =>
      Array.from({ length: LINE_COUNT }, (_, i) => {
        const t = i / (LINE_COUNT - 1); // 0 → 1

        // Start points: spread across top edge, weighted toward right
        const sx = W * (0.45 + t * 0.58);
        const sy = 0;

        // End points: spread across bottom-left area
        const ex = W * (-0.05 + t * 0.55);
        const ey = H * (0.85 + t * 0.18);

        // Control points create the elegant curve
        const cp1x = W * (0.55 + t * 0.30);
        const cp1y = H * (0.08 + t * 0.05);
        const cp2x = W * (0.30 + t * 0.25);
        const cp2y = H * (0.55 + t * 0.15);

        return { sx, sy, ex, ey, cp1x, cp1y, cp2x, cp2y,
          alpha: 0.06 + t * 0.10,   // outer lines slightly more opaque
          width: 0.5 + t * 0.3,
        };
      });

    let lines = buildLines();
    // Rebuild on resize
    const roLines = new ResizeObserver(() => { lines = buildLines(); });
    roLines.observe(canvas);

    /* ── Subtle animation: lines breathe very gently ── */
    let tick = 0;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, W, H);

      // Background — brand primary navy
      ctx.fillStyle = "#1a194d";
      ctx.fillRect(0, 0, W, H);

      // Very subtle top-left → bottom-right depth gradient overlay
      const depthGrad = ctx.createLinearGradient(0, 0, W, H);
      depthGrad.addColorStop(0,   "rgba(8,8,32,0.45)");
      depthGrad.addColorStop(0.5, "rgba(26,25,77,0)");
      depthGrad.addColorStop(1,   "rgba(12,10,40,0.35)");
      ctx.fillStyle = depthGrad;
      ctx.fillRect(0, 0, W, H);

      // Subtle brand-violet glow in top-right origin area
      const glow = ctx.createRadialGradient(W * 0.88, 0, 0, W * 0.88, 0, W * 0.55);
      glow.addColorStop(0,   "rgba(98,94,255,0.10)");
      glow.addColorStop(0.5, "rgba(98,94,255,0.04)");
      glow.addColorStop(1,   "rgba(98,94,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      // Draw the flowing lines
      lines.forEach((l, i) => {
        // Tiny sinusoidal drift per line for liveness
        const drift = Math.sin(tick * 0.004 + i * 0.4) * (H * 0.005);

        ctx.save();
        ctx.globalAlpha = l.alpha;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth   = l.width;
        ctx.lineCap     = "round";

        ctx.beginPath();
        ctx.moveTo(l.sx, l.sy);
        ctx.bezierCurveTo(
          l.cp1x, l.cp1y + drift,
          l.cp2x, l.cp2y + drift * 0.5,
          l.ex,   l.ey
        );
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
      style={{
        position: "relative",
        width: "100%",
        minHeight: "52vh",
        background: "#1a194d",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Geist Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Canvas — flowing lines */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Content — left-aligned, exactly like the image */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 700,
          padding: "clamp(48px,8vw,88px) clamp(24px,6vw,80px)",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
            color: "#ffffff",
            margin: "0 0 14px 0",
          }}
        >
          About us
        </h2>

        {/* Red accent underline — exact detail from image */}
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "#625eff",   // brand violet (image uses red — we use brand color)
            marginBottom: 28,
          }}
        />

        {/* Body copy */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.62)",
            margin: 0,
            maxWidth: 600,
          }}
        >
          AgenticSense is a global team of AI engineers, data scientists, ERP
          consultants, and cloud architects founded by alumni of Big Tech, MIT,
          and Caltech. We help organisations modernise, automate, and grow
          through intelligent technology powered by AI.
        </p>
      </div>

      {/* Bottom edge fade to next section */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 48,
          background: "linear-gradient(to bottom, transparent, rgba(20,18,60,0.6))",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </section>
  );
}