"use client";

import { useEffect, useRef } from "react";

/* ─── Team roles from AGENTICSENSE_PROFILE.pdf ──────────────── */
const ROLES = [
  { label: "Agentic AI Engineers" },
  { label: "Enterprise ERP Architects" },
  { label: "LLM & Reasoning Specialists" },
  { label: "Cloud & DevOps Engineers" },
  { label: "B2B2B Delivery Partners" },
  { label: "AI Governance Consultants" },
  { label: "Data & Integration Experts" },
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
        /* Font loaded via layout.js Inter */

        .about-section *{ box-sizing: border-box; }

        .about-section {
          position: relative;
          font-family: inherit;
          background: #07080f;
          overflow: hidden;
          padding: 80px 5vw;
          min-height: 480px;
        }

        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 65% 80% at 50% 60%, rgba(99,102,241,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 78% 40%, rgba(167,139,250,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 35% 45% at 20% 50%, rgba(56,189,248,0.08) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .about-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.45;
        }

        .about-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-left { display: flex; flex-direction: column; gap: 24px; }

        .about-eyebrow {
          font-size: 0.75rem;
          font-weight: 600;
          color: #818cf8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .about-heading {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #f8fafc;
        }

        .about-body {
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.8;
          color: #94a3b8;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-tagline {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          font-weight: 500;
          color: #f1f5f9;
          line-height: 1.6;
          border-left: 2px solid #4f46e5;
          padding-left: 16px;
        }

        .role-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .role-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #cbd5e1;
          padding: 6px 0;
          transition: transform 0.2s, color 0.2s;
        }
        
        .role-item:hover { 
          color: #ffffff;
          transform: translateX(4px);
        }

        .role-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          background: #818cf8;
          box-shadow: 0 0 8px 1px rgba(129, 140, 248, 0.6);
          transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }

        .role-item:hover .role-dot {
          background: #ffffff;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
          transform: scale(1.2);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-heading { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .about-section { padding: 56px 6vw; }
        }
      `}</style>

      <section className="about-section" aria-label="About AgenticSense">
        <canvas ref={canvasRef} className="about-canvas" aria-hidden="true" />

        <div className="about-grid">
          {/* ── LEFT ── */}
          <div className="about-left">
            <p className="about-eyebrow">Your Partner for Agentic AI Systems</p>
            <h2 className="about-heading">
             Less hype. More intelligence. Real business impact.
            </h2>
           <p className="about-body">
  We help enterprises move beyond traditional AI and automation by building intelligent Agentic AI systems that understand, reason, and act.
  
  <br /><br />
  
  From  AI-powered workflows to complete Agentic AI Systems, we design, build, integrate, and optimize solutions that work with your people, processes, and technology.
</p>
          </div>

          {/* ── RIGHT ── */}
          <div className="about-right">
            <p className="about-tagline">
              Above all, we are autonomous AI execution partners who turn complex
              enterprise challenges into measurable operational value.
            </p>

            <ul className="role-list">
              {ROLES.map((role) => (
                <li key={role.label} className="role-item">
                  <span className="role-dot" aria-hidden="true" />
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