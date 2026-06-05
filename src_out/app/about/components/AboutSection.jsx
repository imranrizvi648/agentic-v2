"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, W, H;
    let mouse = { x: -999, y: -999 };

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -999; mouse.y = -999; };
    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);

    /* ── Bezier lines ── */
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
          width: 0.4 + t * 0.25,
        };
      });
    let lines = buildLines();
    const roLines = new ResizeObserver(() => { lines = buildLines(); });
    roLines.observe(canvas);

    const PALETTE = [
      [148, 130, 255],
      [98,  94,  255],
      [180, 170, 255],
      [80,  120, 255],
      [200, 190, 255],
      [255, 255, 255],
      [120, 200, 255],
    ];

    class P {
      constructor(init) { this.spawn(init); }
      spawn(init = false) {
        this.x   = Math.random() * W;
        this.y   = init ? Math.random() * H : H + 8;
        const speed = Math.random() * 1.8 + 0.6;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
        this.vx  = Math.cos(angle) * speed;
        this.vy  = Math.sin(angle) * speed;
        this.col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        this.life  = 1;
        this.decay = Math.random() * 0.006 + 0.003;
        const rnd = Math.random();
        if (rnd < 0.08) {
          this.type = "orb";
          this.r = Math.random() * 5 + 3;
          this.decay *= 0.4;
          this.pulse = Math.random() * Math.PI * 2;
          this.pulseSpeed = Math.random() * 0.06 + 0.03;
        } else if (rnd < 0.22) {
          this.type = "star";
          this.r = Math.random() * 2 + 1.2;
          this.rot = Math.random() * Math.PI;
          this.rotSpeed = (Math.random() - 0.5) * 0.08;
        } else {
          this.type = "dot";
          this.r = Math.random() * 1.4 + 0.3;
          this.vx *= 1.4;
          this.vy *= 1.4;
        }
      }
      update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160) {
          const d = Math.sqrt(d2);
          const f = (160 - d) / 160;
          this.vx += (dx / d) * f * 1.2;
          this.vy += (dy / d) * f * 1.2;
        }
        const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (spd > 4) { this.vx = (this.vx / spd) * 4; this.vy = (this.vy / spd) * 4; }
        this.x  += this.vx;
        this.y  += this.vy;
        this.vx *= 0.97;
        this.vy *= 0.97;
        this.life -= this.decay;
        if (this.type === "orb")  this.pulse += this.pulseSpeed;
        if (this.type === "star") this.rot   += this.rotSpeed;
        if (this.life <= 0 || this.y < -12 || this.x < -20 || this.x > W + 20) this.spawn();
      }
      draw() {
        const [r, g, b] = this.col;
        const a = this.life;
        ctx.save();
        if (this.type === "orb") {
          const pr = this.r * (1 + 0.3 * Math.sin(this.pulse));
          ctx.globalAlpha = a * 0.6;
          ctx.shadowBlur  = 20;
          ctx.shadowColor = `rgb(${r},${g},${b})`;
          const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pr * 3);
          grd.addColorStop(0,   `rgba(${r},${g},${b},1)`);
          grd.addColorStop(0.4, `rgba(${r},${g},${b},0.5)`);
          grd.addColorStop(1,   `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(this.x, this.y, pr * 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === "star") {
          ctx.globalAlpha = a * 0.85;
          ctx.shadowBlur  = 8;
          ctx.shadowColor = `rgb(${r},${g},${b})`;
          ctx.fillStyle   = `rgba(${r},${g},${b},1)`;
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rot);
          ctx.beginPath();
          const s = this.r;
          for (let k = 0; k < 8; k++) {
            const ang = (k * Math.PI) / 4;
            const rad = k % 2 === 0 ? s : s * 0.4;
            k === 0
              ? ctx.moveTo(Math.cos(ang) * rad, Math.sin(ang) * rad)
              : ctx.lineTo(Math.cos(ang) * rad, Math.sin(ang) * rad);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.globalAlpha = a * 0.9;
          ctx.shadowBlur  = 6;
          ctx.shadowColor = `rgb(${r},${g},${b})`;
          ctx.fillStyle   = `rgba(${r},${g},${b},1)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const COUNT = 130;
    const particles = Array.from({ length: COUNT }, () => new P(true));

    const drawLinks = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 75 * 75) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / 75) * 0.18 * Math.min(particles[i].life, particles[j].life);
            ctx.save();
            ctx.globalAlpha = alpha;
            const [r1,g1,b1] = particles[i].col;
            const [r2,g2,b2] = particles[j].col;
            const lg = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            lg.addColorStop(0, `rgb(${r1},${g1},${b1})`);
            lg.addColorStop(1, `rgb(${r2},${g2},${b2})`);
            ctx.strokeStyle = lg;
            ctx.lineWidth   = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    let tick = 0;
    const draw = () => {
      tick++;
      ctx.globalCompositeOperation = "source-over";
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
      drawLinks();
      particles.forEach(p => { p.update(); p.draw(); });
      lines.forEach((l, i) => {
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
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      roLines.disconnect();
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[79vh] bg-[#1a194d] overflow-hidden flex items-center font-sans">

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white mb-3 mt-6">
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