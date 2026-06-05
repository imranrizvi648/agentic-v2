"use client";
import React, { useRef, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

// ── Particle Canvas clipped inside "AgenticSense" ────────────────────────────
function AgenticSenseParticleText() {
  const wrapRef  = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap   = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    let raf;
    let W = 0, H = 0;

    // ── Font size tracks text-[13vw] exactly ─────────────────────────────────
    const getFontSize = () => Math.max(36, window.innerWidth * 0.13);

    // ── Canvas sizing ─────────────────────────────────────────────────────────
    const setup = () => {
      W = canvas.width  = wrap.offsetWidth;
      H = canvas.height = Math.round(getFontSize() * 1.14);
      canvas.style.height = H + "px";
    };

    // ── Brand palette: vivid violet/indigo/white/gold mix ────────────────────
    // Inspired by the reference screenshot — dense bright glowing particles
    const PALETTE = [
      // core brand indigo/violet
      { r:160, g:100, b:255, type:"violet"  },
      { r:130, g: 70, b:255, type:"indigo"  },
      { r:200, g:140, b:255, type:"lavender"},
      { r:110, g: 50, b:220, type:"deep"    },
      // bright white sparks (look like lens flare in screenshot)
      { r:255, g:255, b:255, type:"white"   },
      { r:230, g:215, b:255, type:"whiteish"},
      // accent cyan-blue shimmer
      { r:100, g:190, b:255, type:"cyan"    },
      // warm gold-pink accent (adds richness)
      { r:255, g:180, b:220, type:"pink"    },
      { r:200, g:130, b:255, type:"rose"    },
      // deep royal for dark body fill contrast
      { r:180, g:120, b:255, type:"mid"     },
    ];

    // ── Particle class ────────────────────────────────────────────────────────
    class Particle {
      reset(init = false) {
        this.x  = Math.random() * W;
        this.y  = init ? Math.random() * H : H + 6;

        // slow drift upward, gentle horizontal wander
        const spd = Math.random() * 0.5 + 0.12;
        const ang = -Math.PI / 2 + (Math.random() - 0.5) * 0.65;
        this.vx   = Math.cos(ang) * spd;
        this.vy   = Math.sin(ang) * spd;

        // slight sinusoidal wander
        this.wobble      = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.04 + 0.01;
        this.wobbleAmp   = Math.random() * 0.18 + 0.04;

        const c  = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        this.r_  = c.r; this.g_ = c.g; this.b_ = c.b;
        this.life  = init ? Math.random() : 1;
        this.decay = Math.random() * 0.004 + 0.0015;

        // particle shape type — 4 distinct variants
        const rnd = Math.random();
        if (rnd < 0.10) {
          // 1. Large glowing orb (10%) — the "bokeh" blobs in the reference
          this.kind   = "orb";
          this.radius = Math.random() * 5 + 3;
          this.decay  *= 0.30;
          this.pulse  = Math.random() * Math.PI * 2;
          this.pulseS = Math.random() * 0.035 + 0.015;
        } else if (rnd < 0.25) {
          // 2. Bright star with 4-point cross flare (15%) — the glitter effect
          this.kind   = "star";
          this.radius = Math.random() * 2.2 + 1;
          this.rot    = Math.random() * Math.PI;
          this.rotS   = (Math.random() - 0.5) * 0.03;
        } else if (rnd < 0.45) {
          // 3. Medium bright dot with inner white highlight (20%)
          this.kind   = "dot";
          this.radius = Math.random() * 1.8 + 0.8;
        } else {
          // 4. Tiny fast spark (55%) — the fine grain texture
          this.kind   = "spark";
          this.radius = Math.random() * 0.9 + 0.2;
          this.vx    *= 1.8;
          this.vy    *= 1.8;
          this.decay  *= 1.4;
        }
      }
      constructor(init) { this.reset(init); }

      update() {
        this.wobble += this.wobbleSpeed;
        this.vx += Math.sin(this.wobble) * this.wobbleAmp * 0.01;
        this.x   += this.vx;
        this.y   += this.vy;
        this.life -= this.decay;
        if (this.kind === "orb")  this.pulse += this.pulseS;
        if (this.kind === "star") this.rot   += this.rotS;
        if (this.life <= 0 || this.y < -10 || this.x < -14 || this.x > W + 14) this.reset();
      }

      draw(c) {
        const a = Math.max(0, this.life);
        c.save();

        if (this.kind === "orb") {
          // outer soft bloom
          const pr  = this.radius * (1 + 0.28 * Math.sin(this.pulse));
          const rad = pr * 4;
          const grd = c.createRadialGradient(this.x,this.y,0, this.x,this.y, rad);
          grd.addColorStop(0,    `rgba(${this.r_},${this.g_},${this.b_},${a * 0.9})`);
          grd.addColorStop(0.25, `rgba(${this.r_},${this.g_},${this.b_},${a * 0.55})`);
          grd.addColorStop(0.6,  `rgba(${this.r_},${this.g_},${this.b_},${a * 0.18})`);
          grd.addColorStop(1,    `rgba(${this.r_},${this.g_},${this.b_},0)`);
          c.fillStyle    = grd;
          c.shadowBlur   = 22;
          c.shadowColor  = `rgba(${this.r_},${this.g_},${this.b_},0.8)`;
          c.globalAlpha  = 1;
          c.beginPath();
          c.arc(this.x, this.y, rad, 0, Math.PI * 2);
          c.fill();
          // bright solid core
          c.shadowBlur   = 10;
          c.fillStyle    = `rgba(255,255,255,${a * 0.85})`;
          c.globalAlpha  = 1;
          c.beginPath();
          c.arc(this.x, this.y, pr * 0.45, 0, Math.PI * 2);
          c.fill();

        } else if (this.kind === "star") {
          // 4-point cross flare — looks like a glitter star
          c.globalAlpha  = a;
          c.shadowBlur   = 14;
          c.shadowColor  = `rgba(${this.r_},${this.g_},${this.b_},0.9)`;
          c.strokeStyle  = `rgba(${this.r_},${this.g_},${this.b_},1)`;
          c.lineWidth    = this.radius * 0.7;
          c.lineCap      = "round";
          const arms = this.radius * 2.8;
          c.save();
          c.translate(this.x, this.y);
          c.rotate(this.rot);
          c.beginPath();
          c.moveTo(-arms, 0); c.lineTo(arms, 0);
          c.stroke();
          c.beginPath();
          c.moveTo(0, -arms); c.lineTo(0, arms);
          c.stroke();
          // 45° secondary arms (shorter)
          c.globalAlpha  = a * 0.5;
          c.lineWidth   *= 0.5;
          const arms2    = arms * 0.55;
          c.beginPath();
          c.moveTo(-arms2, -arms2); c.lineTo(arms2, arms2);
          c.stroke();
          c.beginPath();
          c.moveTo(arms2, -arms2); c.lineTo(-arms2, arms2);
          c.stroke();
          c.restore();
          // bright white center dot
          c.globalAlpha  = a * 0.95;
          c.fillStyle    = "rgba(255,255,255,1)";
          c.shadowBlur   = 8;
          c.beginPath();
          c.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
          c.fill();

        } else if (this.kind === "dot") {
          // coloured dot with white inner specular
          c.globalAlpha  = a * 0.92;
          c.shadowBlur   = 12;
          c.shadowColor  = `rgba(${this.r_},${this.g_},${this.b_},0.85)`;
          c.fillStyle    = `rgba(${this.r_},${this.g_},${this.b_},1)`;
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          c.fill();
          // specular highlight
          c.globalAlpha  = a * 0.6;
          c.shadowBlur   = 0;
          c.fillStyle    = "rgba(255,255,255,1)";
          c.beginPath();
          c.arc(this.x - this.radius * 0.25, this.y - this.radius * 0.25, this.radius * 0.38, 0, Math.PI * 2);
          c.fill();

        } else {
          // tiny spark — just a bright pixel
          c.globalAlpha  = a * 0.88;
          c.shadowBlur   = 5;
          c.shadowColor  = `rgba(${this.r_},${this.g_},${this.b_},0.8)`;
          c.fillStyle    = `rgba(${this.r_},${this.g_},${this.b_},1)`;
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          c.fill();
        }
        c.restore();
      }
    }

    // ── Particle pool — high density matches reference screenshot ─────────────
    const COUNT = () => Math.round(W * 0.7);
    let particles = [];
    const rebuildParticles = () => {
      particles = Array.from({ length: COUNT() }, () => new Particle(true));
    };

    // ── Offscreen canvas ──────────────────────────────────────────────────────
    const off    = document.createElement("canvas");
    const offCtx = off.getContext("2d");
    const syncOff= () => { off.width = W; off.height = H; };

    // ── Main render loop ──────────────────────────────────────────────────────
    const render = () => {
      if (off.width !== W || off.height !== H) syncOff();

      // 1. Draw ALL particles to offscreen (transparent bg)
      offCtx.clearRect(0, 0, W, H);
      particles.forEach(p => p.draw(offCtx));

      // 2. Clear main canvas
      ctx.clearRect(0, 0, W, H);

      // 3. Paint the letter shapes as an opaque mask
      //    Very dark navy — nearly black so particles pop brightly against it
      const fs = getFontSize();
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.font          = `900 ${fs}px 'Geist Sans', ui-sans-serif, system-ui, sans-serif`;
      ctx.textBaseline  = "top";
      ctx.textAlign     = "center";
      ctx.letterSpacing = `${Math.round(-fs * 0.06)}px`;
      // Paint base fill — near-black navy so particles are vivid
      ctx.fillStyle     = "rgba(6, 5, 36, 1)";
      ctx.fillText("AgenticSense", W / 2, H * 0.03);
      ctx.restore();

      // 4. Stamp particles on ONLY inside the letter pixels (source-atop)
      ctx.save();
      ctx.globalCompositeOperation = "source-atop";
      ctx.drawImage(off, 0, 0);
      ctx.restore();

      // 5. Subtle dark-to-violet depth gradient inside letters
      //    makes letters feel "lit from inside"
      ctx.save();
      ctx.globalCompositeOperation = "source-atop";
      ctx.globalAlpha = 0.08;
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0,   "rgba(180,120,255,1)");
      grad.addColorStop(0.5, "rgba(80, 40, 200,1)");
      grad.addColorStop(1,   "rgba(20, 10, 80, 1)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // 6. Update all particles
      particles.forEach(p => p.update());
      raf = requestAnimationFrame(render);
    };

    // ── Init ──────────────────────────────────────────────────────────────────
    setup();
    syncOff();
    rebuildParticles();
    render();

    // ── Resize handler ────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      setup();
      syncOff();
      rebuildParticles();
    });
    ro.observe(wrap);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full select-none" style={{ lineHeight: 1 }}>
      {/* Transparent spacer — holds layout height identical to static text */}
      <div
        aria-hidden="true"
        style={{
          fontSize:      "13vw",
          fontWeight:    900,
          letterSpacing: "-0.06em",
          lineHeight:    1.14,
          color:         "transparent",
          userSelect:    "none",
          pointerEvents: "none",
        }}
      >
        AgenticSense
      </div>

      {/* Canvas overlay — fills exact same bounding box */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position:      "absolute",
          top:           0,
          left:          0,
          width:         "100%",
          pointerEvents: "none",
        }}
      />

      <span className="sr-only">AgenticSense</span>
    </div>
  );
}


// ── Footer ────────────────────────────────────────────────────────────────────
const Footer = () => {
  const quickLinks = [
    { name: "ABOUT",    href: "#" }, { name: "WHO WE ARE", href: "#" },
    { name: "SERVICES", href: "#" }, { name: "PROJECTS",   href: "#" },
    { name: "BLOG",     href: "#" }, { name: "PRICING",    href: "#" },
  ];

  const socialLinks = [
    { name: "Twitter / X", icon: <FaXTwitter size={12} />,   href: "#", hoverClass: "group-hover:bg-[#000000]" },
    { name: "Facebook",    icon: <FaFacebookF size={12} />,  href: "#", hoverClass: "group-hover:bg-[#1877F2]" },
    { name: "Instagram",   icon: <FaInstagram size={12} />,  href: "#", hoverClass: "group-hover:bg-[#E4405F]" },
    { name: "Linkedin",    icon: <FaLinkedinIn size={12} />, href: "#", hoverClass: "group-hover:bg-[#0A66C2]" },
    { name: "YouTube",     icon: <FaYoutube size={12} />,    href: "#", hoverClass: "group-hover:bg-[#FF0000]" },
  ];

  return (
    <footer className="bg-[#f3f3f3] pt-12 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-6 md:px-10 font-sans border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-10">

          {/* Quick Links */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff4d00] rounded-full" />
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {quickLinks.map((link, i) => (
                <a key={i} href={link.href}
                  className="flex items-center justify-between bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group">
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-700 tracking-wider truncate">{link.name}</span>
                  <div className="flex-shrink-0 bg-[#1e1b4b] p-1 sm:p-1.5 rounded-full text-white">
                    <HiOutlineArrowUpRight size={10} strokeWidth={2} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Center brand */}
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black uppercase">QUINN LINK</h1>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-xs">
              Crafting digital experiences with clarity and purpose. Designing visuals that reflect identity and innovation.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-5 sm:space-y-7 sm:col-span-2 md:col-span-1 md:pl-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1e1b4b] rounded-full" />
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Contact</h3>
            </div>
            <div className="space-y-2 text-gray-700 text-sm font-semibold">
              <p className="hover:text-[#1e1b4b] cursor-pointer break-all">Email: agntics@studio.com</p>
              <p>Phone: +(92) 555-0107</p>
              <p className="text-gray-500 font-medium text-[13px]">4517 Washington Ave. Kentucky 39495</p>
            </div>
            <button className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-5 py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all group">
              <span className="text-xs font-black text-gray-800 uppercase tracking-widest">Contact Us</span>
              <div className="bg-[#1e1b4b] p-2 rounded-full text-white"><FaPhoneAlt size={10} /></div>
            </button>
          </div>
        </div>

        {/* Social bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.href}
              className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group justify-between">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">{social.name}</span>
              <div className={`bg-[#1e1b4b] p-1.5 sm:p-2 rounded-full text-white transition-colors flex items-center justify-center ${social.hoverClass}`}>
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* ── Particle brand text ───────────────────────────────────────────── */}
        <div className="flex flex-col items-center mt-5 mb-2 w-full overflow-hidden">
          <div className="relative w-full">

            <AgenticSenseParticleText />

            {/* Sub-labels floating over the text (desktop only) */}
            <span className="hidden sm:inline absolute bottom-[18%] left-[12%] text-[9px] md:text-[11px] font-bold text-gray-500 uppercase tracking-tighter whitespace-nowrap pointer-events-none z-10">
              ©2025 AgenticSense Design Studio.
            </span>
            <span className="hidden sm:inline absolute bottom-[18%] left-1/2 -translate-x-1/2 text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
              <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Terms and Conditions</a>
            </span>
            <span className="hidden sm:inline absolute bottom-[18%] right-[9%] text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
              <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
            </span>

            {/* Decorative asterisk */}
            <span aria-hidden="true"
              className="absolute top-0 right-[3%] text-[5vw] font-light leading-none text-gray-400 pointer-events-none select-none">
              *
            </span>
          </div>

          {/* Mobile legal */}
          <div className="sm:hidden flex flex-wrap justify-center gap-4 mt-2 text-[10px] font-bold text-gray-700 uppercase tracking-tight">
            <span>©2025 AgenticSense.</span>
            <a href="#" className="hover:text-[#1e1b4b] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;