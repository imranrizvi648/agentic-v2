"use client";

import { useEffect, useRef } from "react";

export default function ContactHero() {
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
    const COUNT = 24;
    const buildLines = () =>
      Array.from({ length: COUNT }, (_, i) => {
        const t = i / (COUNT - 1);
        return {
          sx:   W * (0.42 + t * 0.62), sy: 0,
          ex:   W * (-0.08 + t * 0.55), ey: H * (0.82 + t * 0.22),
          cp1x: W * (0.52 + t * 0.32), cp1y: H * (0.06 + t * 0.04),
          cp2x: W * (0.28 + t * 0.28), cp2y: H * (0.52 + t * 0.18),
          alpha: 0.04 + t * 0.07,
          width: 0.4 + t * 0.25,
        };
      });
    let lines = buildLines();
    const roLines = new ResizeObserver(() => { lines = buildLines(); });
    roLines.observe(canvas);

    /* ── Palette ── */
    const PALETTE = [
      [148, 130, 255],
      [98,  94,  255],
      [180, 170, 255],
      [80,  120, 255],
      [200, 190, 255],
      [255, 255, 255],
      [120, 200, 255],
    ];

    /* ── Particle class (identical to AboutSection) ── */
    class P {
      constructor(init) { this.spawn(init); }
      spawn(init = false) {
        this.x    = Math.random() * W;
        this.y    = init ? Math.random() * H : H + 8;
        const speed = Math.random() * 1.8 + 0.6;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
        this.vx   = Math.cos(angle) * speed;
        this.vy   = Math.sin(angle) * speed;
        this.col  = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        this.life  = 1;
        this.decay = Math.random() * 0.006 + 0.003;
        const rnd = Math.random();
        if (rnd < 0.08) {
          this.type = "orb";
          this.r    = Math.random() * 5 + 3;
          this.decay *= 0.4;
          this.pulse = Math.random() * Math.PI * 2;
          this.pulseSpeed = Math.random() * 0.06 + 0.03;
        } else if (rnd < 0.22) {
          this.type = "star";
          this.r    = Math.random() * 2 + 1.2;
          this.rot  = Math.random() * Math.PI;
          this.rotSpeed = (Math.random() - 0.5) * 0.08;
        } else {
          this.type = "dot";
          this.r    = Math.random() * 1.4 + 0.3;
          this.vx  *= 1.4;
          this.vy  *= 1.4;
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

    const particles = Array.from({ length: 130 }, () => new P(true));

    /* ── Connection lines ── */
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
      depth.addColorStop(0,   "rgba(6,5,28,0.3)");
      depth.addColorStop(0.5, "rgba(26,25,77,0)");
      depth.addColorStop(1,   "rgba(10,8,38,0.25)");
      ctx.fillStyle = depth;
      ctx.fillRect(0, 0, W, H);

      const glow = ctx.createRadialGradient(W * 0.9, 0, 0, W * 0.9, 0, W * 0.52);
      glow.addColorStop(0,   "rgba(98,94,255,0.14)");
      glow.addColorStop(0.5, "rgba(98,94,255,0.05)");
      glow.addColorStop(1,   "rgba(98,94,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      drawLinks();
      particles.forEach(p => { p.update(); p.draw(); });

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
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      aria-label="Contact page header"
      className="relative w-full h-[55vh] sm:h-[65vh] md:h-[79vh] bg-[#1a194d] overflow-hidden flex items-center font-sans"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full block"
      />

      {/* Left vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(18,16,60,0.82)] via-[rgba(18,16,60,0.55)] to-transparent"
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[rgba(26,25,77,0.7)] to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-4">
          Contact us
        </h1>
        
        <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-xl">
          Have a project in mind or want to explore how AI can transform your
          business? We&apos;d love to hear from you — let&apos;s build
          something remarkable together.
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.35)] to-transparent z-10 pointer-events-none"
      />
    </section>
  );
}