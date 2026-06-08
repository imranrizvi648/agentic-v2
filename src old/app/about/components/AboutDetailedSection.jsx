"use client";

import { useEffect, useRef } from "react";

/* ─── Team roles from AGENTICSENSE_PROFILE.pdf ──────────────── */
const ROLES = [
  { label: "Agentic AI Engineers",          color: "#60a5fa" },
  { label: "Enterprise ERP Architects",     color: "#a78bfa" },
  { label: "LLM & Reasoning Specialists",   color: "#34d399" },
  { label: "Cloud & DevOps Engineers",      color: "#f472b6" },
  { label: "B2B2B Delivery Partners",       color: "#c084fc" },
  { label: "AI Governance Consultants",     color: "#fb923c" },
  { label: "Data & Integration Experts",    color: "#fbbf24" },
];

export default function AboutSection() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Dot {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x     = Math.random() * W;
        this.y     = init ? Math.random() * H : H + 4;
        this.vx    = (Math.random() - 0.5) * 0.3;
        this.vy    = -(Math.random() * 0.4 + 0.1);
        this.r     = Math.random() * 1.4 + 0.4;
        this.life  = 1;
        this.decay = Math.random() * 0.0012 + 0.0006;
        const palette = ["#60a5fa","#a78bfa","#34d399","#f472b6","#c084fc","#fb923c","#fff"];
        this.color = palette[Math.floor(Math.random() * palette.length)];
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < -4) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.life * 0.65;
        ctx.fillStyle   = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur  = 7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 110; i++) particles.push(new Dot());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 85) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 85) * 0.1;
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth   = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      particles.forEach(p => { p.update(); p.draw(); });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Font loaded via layout.js — Geist Sans */

        .about-section *{ box-sizing: border-box; }

        .about-section {
          position: relative;
          font-family: inherit;
          background: #07080f;
          overflow: hidden;
          padding: 72px 5vw;
          min-height: 480px;
        }

        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 65% 80% at 50% 60%, rgba(99,102,241,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 78% 40%, rgba(167,139,250,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 35% 45% at 20% 50%, rgba(56,189,248,0.10) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .about-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.55;
        }

        .about-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0 32px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-left { display: flex; flex-direction: column; gap: 20px; }

        .about-eyebrow {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
        }

        .about-heading {
  font-size: clamp(1.375rem, 3vw, 2.25rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a194d;
}

        .about-body {
          font-size: 0.88rem;
          font-weight: 400;
          line-height: 1.75;
          color: rgba(255,255,255,0.52);
          max-width: 420px;
        }

        .about-timeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          padding-top: 4px;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          min-height: 32px;
          background: linear-gradient(to bottom,
            rgba(99,102,241,0.0),
            rgba(139,92,246,0.7),
            rgba(99,102,241,0.0));
        }

        .timeline-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
          position: relative;
        }
        .timeline-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: inherit;
          opacity: 0.25;
          filter: blur(4px);
        }

        .timeline-top-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 10px 3px rgba(255,255,255,0.6);
          flex-shrink: 0;
          margin-bottom: 2px;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .about-tagline {
          font-size: clamp(0.9rem, 1.4vw, 1.15rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.5;
          margin-bottom: 16px;
          max-width: 320px;
        }

        .role-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          padding: 4px 0;
          transition: color 0.2s;
        }
        .role-item:hover { color: #fff; }

        .role-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .about-diamond {
          position: absolute;
          bottom: 28px;
          right: 32px;
          z-index: 1;
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px 0;
          }
          .about-timeline { flex-direction: row; padding-top: 0; }
          .timeline-line  { width: 32px; min-height: 2px; height: 2px;
            background: linear-gradient(to right, rgba(99,102,241,0), rgba(139,92,246,0.7), rgba(99,102,241,0));
            flex: 1; }
          .about-body { max-width: 100%; }
          .about-tagline { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .about-section { padding: 48px 6vw; }
          .about-heading {
  font-size: clamp(1.375rem, 3vw, 2.25rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a194d;
}
        }
      `}</style>

      <section className="about-section" aria-label="About AgenticSense">

        <canvas ref={canvasRef} className="about-canvas" aria-hidden="true" />

        <span className="about-diamond" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M13 0L16.5 9.5L26 13L16.5 16.5L13 26L9.5 16.5L0 13L9.5 9.5Z" fill="white"/>
          </svg>
        </span>

        <div className="about-grid">

          {/* ── LEFT ── */}
          <div className="about-left">
            <p className="about-eyebrow">Trusted Technology Partner</p>

            <h2 className="about-heading">
              Real AI. Real Enterprise. Tangible Business Outcomes.
            </h2>

            <p className="about-body">
              AgenticSense is a global B2B Agentic AI services company — not a
              generic AI consultancy or software platform. We design, engineer, and
              deploy autonomous AI agents that integrate natively with enterprise ERP
              systems through official production-grade APIs. Every solution is built
              from the ground up for real operational environments, complex workflows,
              and measurable business outcomes. We become your AI Arm — embedded
              intelligence within your organisational structure, operating continuously
              on your behalf and across the clients you serve.
            </p>
          </div>

          {/* ── CENTRE TIMELINE ── */}
          <div className="about-timeline" aria-hidden="true">
            <div className="timeline-top-dot" />
            {ROLES.map((role) => (
              <div
                key={role.label}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1 }}
              >
                <div className="timeline-line" />
                <div
                  className="timeline-dot"
                  style={{ background: role.color, boxShadow: `0 0 8px 2px ${role.color}88` }}
                />
              </div>
            ))}
            <div className="timeline-line" style={{ minHeight: 16 }} />
          </div>

          {/* ── RIGHT ── */}
          <div className="about-right">
            <p className="about-tagline">
              Above all, we are autonomous AI execution partners who turn complex
              enterprise challenges into measurable operational value.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {ROLES.map((role) => (
                <li key={role.label} className="role-item">
                  <span
                    className="role-dot"
                    style={{ background: role.color, boxShadow: `0 0 6px 1px ${role.color}99` }}
                    aria-hidden="true"
                  />
                  {role.label}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}