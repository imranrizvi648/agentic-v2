// "use client";
// import React, { useRef, useEffect } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { HiOutlineArrowUpRight } from "react-icons/hi2";

// // ── Particle Canvas clipped inside "AgenticSense" ────────────────────────────
// // PERFORMANCE STRATEGY (zero visual change):
// //  • shadowBlur was the #1 cost — re-runs a full blur pass per draw call per frame.
// //    Each particle "kind" is now PRE-RENDERED ONCE into a tiny sprite canvas
// //    (glow baked in via the same gradient/shadow). Per frame we only drawImage()
// //    the cached sprite — a single GPU blit, no gradients, no shadowBlur, no strokes.
// //  • Sprites are keyed by (kind, palette-index, size-bucket) and memoised.
// //  • Render loop pauses when the footer scrolls out of view (IntersectionObserver).
// //  • Render loop pauses when the tab is hidden.
// //  • Frame-throttled so it never exceeds the visual cadence the design needs.
// function AgenticSenseParticleText() {
//   const wrapRef   = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const wrap   = wrapRef.current;
//     const canvas = canvasRef.current;
//     if (!wrap || !canvas) return;

//     const ctx = canvas.getContext("2d", { alpha: true });
//     let raf = 0;
//     let running = false;
//     let W = 0, H = 0;

//     const getFontSize = () => Math.max(36, window.innerWidth * 0.13);

//     // ── Palette (identical values to original) ────────────────────────────────
//     const PALETTE = [
//       [160,100,255],[130,70,255],[200,140,255],[110,50,220],
//       [255,255,255],[230,215,255],[100,190,255],[255,180,220],
//       [200,130,255],[180,120,255],
//     ];

//     // ── Sprite cache: pre-render each (kind, color, sizeBucket) ONCE ──────────
//     // Visual output is pixel-identical to drawing live, but the expensive
//     // gradient + shadowBlur work happens a handful of times total, not 60×/sec.
//     const spriteCache = new Map();

//     const makeSprite = (kind, ci, radius) => {
//       const key = kind + "|" + ci + "|" + radius.toFixed(1);
//       const cached = spriteCache.get(key);
//       if (cached) return cached;

//       const [r, g, b] = PALETTE[ci];
//       const s = document.createElement("canvas");
//       const sc = s.getContext("2d");

//       if (kind === "orb") {
//         const pr  = radius;
//         const rad = pr * 4;
//         const pad = 24;                         // room for shadowBlur bloom
//         const size = Math.ceil(rad * 2 + pad * 2);
//         s.width = s.height = size;
//         const cx = size / 2, cy = size / 2;
//         // outer bloom (baked gradient + shadow, drawn ONCE here)
//         const grd = sc.createRadialGradient(cx, cy, 0, cx, cy, rad);
//         grd.addColorStop(0,    `rgba(${r},${g},${b},0.9)`);
//         grd.addColorStop(0.25, `rgba(${r},${g},${b},0.55)`);
//         grd.addColorStop(0.6,  `rgba(${r},${g},${b},0.18)`);
//         grd.addColorStop(1,    `rgba(${r},${g},${b},0)`);
//         sc.fillStyle   = grd;
//         sc.shadowBlur  = 22;
//         sc.shadowColor = `rgba(${r},${g},${b},0.8)`;
//         sc.beginPath(); sc.arc(cx, cy, rad, 0, Math.PI * 2); sc.fill();
//         // bright core
//         sc.shadowBlur  = 10;
//         sc.fillStyle   = `rgba(255,255,255,0.85)`;
//         sc.beginPath(); sc.arc(cx, cy, pr * 0.45, 0, Math.PI * 2); sc.fill();
//         const sprite = { canvas: s, cx, cy };
//         spriteCache.set(key, sprite);
//         return sprite;
//       }

//       if (kind === "star") {
//         const arms = radius * 2.8;
//         const pad  = 18;
//         const size = Math.ceil(arms * 2 + pad * 2);
//         s.width = s.height = size;
//         const cx = size / 2, cy = size / 2;
//         sc.translate(cx, cy);
//         sc.shadowBlur  = 14;
//         sc.shadowColor = `rgba(${r},${g},${b},0.9)`;
//         sc.strokeStyle = `rgba(${r},${g},${b},1)`;
//         sc.lineWidth   = radius * 0.7;
//         sc.lineCap     = "round";
//         sc.beginPath(); sc.moveTo(-arms,0); sc.lineTo(arms,0); sc.stroke();
//         sc.beginPath(); sc.moveTo(0,-arms); sc.lineTo(0,arms); sc.stroke();
//         sc.globalAlpha = 0.5;
//         sc.lineWidth  *= 0.5;
//         const a2 = arms * 0.55;
//         sc.beginPath(); sc.moveTo(-a2,-a2); sc.lineTo(a2,a2); sc.stroke();
//         sc.beginPath(); sc.moveTo(a2,-a2); sc.lineTo(-a2,a2); sc.stroke();
//         sc.globalAlpha = 0.95;
//         sc.shadowBlur  = 8;
//         sc.fillStyle   = "rgba(255,255,255,1)";
//         sc.beginPath(); sc.arc(0,0, radius*0.5, 0, Math.PI*2); sc.fill();
//         const sprite = { canvas: s, cx, cy };
//         spriteCache.set(key, sprite);
//         return sprite;
//       }

//       if (kind === "dot") {
//         const pad  = 16;
//         const size = Math.ceil(radius * 2 + pad * 2);
//         s.width = s.height = size;
//         const cx = size / 2, cy = size / 2;
//         sc.shadowBlur  = 12;
//         sc.shadowColor = `rgba(${r},${g},${b},0.85)`;
//         sc.fillStyle   = `rgba(${r},${g},${b},1)`;
//         sc.beginPath(); sc.arc(cx, cy, radius, 0, Math.PI*2); sc.fill();
//         sc.globalAlpha = 0.6;
//         sc.shadowBlur  = 0;
//         sc.fillStyle   = "rgba(255,255,255,1)";
//         sc.beginPath();
//         sc.arc(cx - radius*0.25, cy - radius*0.25, radius*0.38, 0, Math.PI*2);
//         sc.fill();
//         const sprite = { canvas: s, cx, cy };
//         spriteCache.set(key, sprite);
//         return sprite;
//       }

//       // spark
//       const pad  = 10;
//       const size = Math.ceil(radius * 2 + pad * 2);
//       s.width = s.height = size;
//       const cx = size / 2, cy = size / 2;
//       sc.shadowBlur  = 5;
//       sc.shadowColor = `rgba(${r},${g},${b},0.8)`;
//       sc.fillStyle   = `rgba(${r},${g},${b},1)`;
//       sc.beginPath(); sc.arc(cx, cy, radius, 0, Math.PI*2); sc.fill();
//       const sprite = { canvas: s, cx, cy };
//       spriteCache.set(key, sprite);
//       return sprite;
//     };

//     // ── Quantise radius into buckets so the sprite cache stays tiny ───────────
//     const bucket = (v, step) => Math.max(step, Math.round(v / step) * step);

//     // ── Particle: flat fields, no per-frame allocation ────────────────────────
//     class Particle {
//       reset(init = false) {
//         this.x  = Math.random() * W;
//         this.y  = init ? Math.random() * H : H + 6;
//         const spd = Math.random() * 0.5 + 0.12;
//         const ang = -Math.PI / 2 + (Math.random() - 0.5) * 0.65;
//         this.vx   = Math.cos(ang) * spd;
//         this.vy   = Math.sin(ang) * spd;
//         this.wobble      = Math.random() * Math.PI * 2;
//         this.wobbleSpeed = Math.random() * 0.04 + 0.01;
//         this.wobbleAmp   = Math.random() * 0.18 + 0.04;
//         this.ci    = Math.floor(Math.random() * PALETTE.length);
//         this.life  = init ? Math.random() : 1;
//         this.decay = Math.random() * 0.004 + 0.0015;

//         const rnd = Math.random();
//         if (rnd < 0.10) {
//           this.kind = "orb";
//           this.radius = bucket(Math.random() * 5 + 3, 1);
//           this.decay *= 0.30;
//           this.pulse  = Math.random() * Math.PI * 2;
//           this.pulseS = Math.random() * 0.035 + 0.015;
//         } else if (rnd < 0.25) {
//           this.kind = "star";
//           this.radius = bucket(Math.random() * 2.2 + 1, 0.5);
//           this.rot    = Math.random() * Math.PI;
//           this.rotS   = (Math.random() - 0.5) * 0.03;
//         } else if (rnd < 0.45) {
//           this.kind = "dot";
//           this.radius = bucket(Math.random() * 1.8 + 0.8, 0.5);
//         } else {
//           this.kind = "spark";
//           this.radius = bucket(Math.random() * 0.9 + 0.2, 0.3);
//           this.vx *= 1.8; this.vy *= 1.8;
//           this.decay *= 1.4;
//         }
//         // resolve sprite once at spawn (cached thereafter)
//         this.sprite = makeSprite(this.kind, this.ci, this.radius);
//       }
//       constructor(init) { this.reset(init); }

//       update() {
//         this.wobble += this.wobbleSpeed;
//         this.vx += Math.sin(this.wobble) * this.wobbleAmp * 0.01;
//         this.x  += this.vx;
//         this.y  += this.vy;
//         this.life -= this.decay;
//         if (this.kind === "orb")  this.pulse += this.pulseS;
//         if (this.kind === "star") this.rot   += this.rotS;
//         if (this.life <= 0 || this.y < -10 || this.x < -14 || this.x > W + 14) this.reset();
//       }

//       draw(c) {
//         const a = this.life > 0 ? this.life : 0;
//         const sp = this.sprite;
//         c.globalAlpha = a;

//         if (this.kind === "orb") {
//           // pulse via scale — identical look, cheap (drawImage scaled)
//           const k = 1 + 0.28 * Math.sin(this.pulse);
//           const w = sp.canvas.width * k, h = sp.canvas.height * k;
//           c.drawImage(sp.canvas, this.x - w/2, this.y - h/2, w, h);
//         } else if (this.kind === "star") {
//           // rotation via transform
//           c.translate(this.x, this.y);
//           c.rotate(this.rot);
//           c.drawImage(sp.canvas, -sp.cx, -sp.cy);
//           c.setTransform(1, 0, 0, 1, 0, 0);
//         } else {
//           c.drawImage(sp.canvas, this.x - sp.cx, this.y - sp.cy);
//         }
//       }
//     }

//     const COUNT = () => Math.round(W * 0.7);
//     let particles = [];
//     const rebuildParticles = () => {
//       particles = Array.from({ length: COUNT() }, () => new Particle(true));
//     };

//     // ── Offscreen + cached text mask ──────────────────────────────────────────
//     const off    = document.createElement("canvas");
//     const offCtx = off.getContext("2d", { alpha: true });

//     // Text mask + gradient overlay rebuilt only on resize (was every frame).
//     const maskCanvas = document.createElement("canvas");
//     const maskCtx    = maskCanvas.getContext("2d", { alpha: true });
//     const buildMask = () => {
//       maskCanvas.width = W; maskCanvas.height = H;
//       const fs = getFontSize();
//       maskCtx.clearRect(0, 0, W, H);
//       maskCtx.font          = `900 ${fs}px 'Geist Sans', ui-sans-serif, system-ui, sans-serif`;
//       maskCtx.textBaseline  = "top";
//       maskCtx.textAlign     = "center";
//       maskCtx.letterSpacing = `${Math.round(-fs * 0.06)}px`;
//       maskCtx.fillStyle     = "rgba(6,5,36,1)";
//       maskCtx.fillText("AgenticSense", W / 2, H * 0.03);
//     };
//     // Pre-bake the violet depth gradient strip once (clipped to letters at draw)
//     const gradCanvas = document.createElement("canvas");
//     const gradCtx    = gradCanvas.getContext("2d", { alpha: true });
//     const buildGrad = () => {
//       gradCanvas.width = W; gradCanvas.height = H;
//       gradCtx.clearRect(0, 0, W, H);
//       const g = gradCtx.createLinearGradient(0, 0, 0, H);
//       g.addColorStop(0,   "rgba(180,120,255,1)");
//       g.addColorStop(0.5, "rgba(80,40,200,1)");
//       g.addColorStop(1,   "rgba(20,10,80,1)");
//       gradCtx.fillStyle = g;
//       gradCtx.fillRect(0, 0, W, H);
//     };

//     const setup = () => {
//       W = canvas.width  = wrap.offsetWidth;
//       H = canvas.height = Math.round(getFontSize() * 1.14);
//       canvas.style.height = H + "px";
//       off.width = W; off.height = H;
//       buildMask();
//       buildGrad();
//     };

//     // ── Render loop (frame-throttled) ─────────────────────────────────────────
//     const FRAME_MS = 1000 / 40;       // visual cadence cap — slow drift unaffected
//     let lastTs = 0;

//     const render = (ts) => {
//       if (!running) return;
//       raf = requestAnimationFrame(render);
//       if (ts - lastTs < FRAME_MS) return;
//       lastTs = ts;

//       // particles → offscreen
//       offCtx.clearRect(0, 0, W, H);
//       offCtx.save();
//       for (let i = 0; i < particles.length; i++) particles[i].draw(offCtx);
//       offCtx.restore();
//       offCtx.globalAlpha = 1;

//       // composite: mask → particles(atop) → gradient(atop)
//       ctx.clearRect(0, 0, W, H);
//       ctx.globalCompositeOperation = "source-over";
//       ctx.drawImage(maskCanvas, 0, 0);
//       ctx.globalCompositeOperation = "source-atop";
//       ctx.drawImage(off, 0, 0);
//       ctx.globalAlpha = 0.08;
//       ctx.drawImage(gradCanvas, 0, 0);
//       ctx.globalAlpha = 1;
//       ctx.globalCompositeOperation = "source-over";

//       for (let i = 0; i < particles.length; i++) particles[i].update();
//     };

//     const start = () => {
//       if (running) return;
//       running = true;
//       lastTs = 0;
//       raf = requestAnimationFrame(render);
//     };
//     const stop = () => {
//       running = false;
//       if (raf) cancelAnimationFrame(raf);
//       raf = 0;
//     };

//     // ── Init ──────────────────────────────────────────────────────────────────
//     setup();
//     rebuildParticles();

//     // Only animate while visible in viewport (huge idle saving)
//     const io = new IntersectionObserver(
//       ([entry]) => { entry.isIntersecting ? start() : stop(); },
//       { threshold: 0 }
//     );
//     io.observe(wrap);

//     // Pause when tab hidden
//     const onVis = () => { document.hidden ? stop() : start(); };
//     document.addEventListener("visibilitychange", onVis);

//     // Debounced resize
//     let rt;
//     const ro = new ResizeObserver(() => {
//       clearTimeout(rt);
//       rt = setTimeout(() => { setup(); rebuildParticles(); }, 200);
//     });
//     ro.observe(wrap);

//     return () => {
//       stop();
//       io.disconnect();
//       ro.disconnect();
//       clearTimeout(rt);
//       document.removeEventListener("visibilitychange", onVis);
//       spriteCache.clear();
//     };
//   }, []);

//   return (
//     <div ref={wrapRef} className="relative w-full select-none" style={{ lineHeight: 1 }}>
//       <div
//         aria-hidden="true"
//         style={{
//           fontSize: "13vw", fontWeight: 900,
//           letterSpacing: "-0.06em", lineHeight: 1.14,
//           color: "transparent", userSelect: "none", pointerEvents: "none",
//         }}
//       >
//         AgenticSense
//       </div>
//       <canvas
//         ref={canvasRef}
//         aria-hidden="true"
//         style={{ position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none" }}
//       />
//       <span className="sr-only">AgenticSense</span>
//     </div>
//   );
// }

// // ── Footer (memoised — never re-renders, no props) ────────────────────────────
// const QUICK_LINKS = [
//   { name: "ABOUT",    href: "#" }, { name: "WHO WE ARE", href: "#" },
//   { name: "SERVICES", href: "#" }, { name: "PROJECTS",   href: "#" },
//   { name: "BLOG",     href: "#" }, { name: "PRICING",    href: "#" },
// ];
// const SOCIAL_LINKS = [
//   { name: "Twitter / X", icon: <FaXTwitter size={12} />,   href: "#", hoverClass: "group-hover:bg-[#000000]" },
//   { name: "Facebook",    icon: <FaFacebookF size={12} />,  href: "#", hoverClass: "group-hover:bg-[#1877F2]" },
//   { name: "Instagram",   icon: <FaInstagram size={12} />,  href: "#", hoverClass: "group-hover:bg-[#E4405F]" },
//   { name: "Linkedin",    icon: <FaLinkedinIn size={12} />, href: "#", hoverClass: "group-hover:bg-[#0A66C2]" },
//   { name: "YouTube",     icon: <FaYoutube size={12} />,    href: "#", hoverClass: "group-hover:bg-[#FF0000]" },
// ];

// const Footer = React.memo(function Footer() {
//   return (
//     <footer className="bg-[#f3f3f3] pt-12 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-6 md:px-10 font-sans border-t border-gray-200 overflow-hidden">
//       <div className="max-w-7xl mx-auto">

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-10">

//           <div className="space-y-5 sm:space-y-6">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-[#ff4d00] rounded-full" />
//               <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Quick Links</h3>
//             </div>
//             <div className="grid grid-cols-2 gap-2 sm:gap-3">
//               {QUICK_LINKS.map((link, i) => (
//                 <a key={i} href={link.href}
//                   className="flex items-center justify-between bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group">
//                   <span className="text-[9px] sm:text-[10px] font-black text-gray-700 tracking-wider truncate">{link.name}</span>
//                   <div className="flex-shrink-0 bg-[#1e1b4b] p-1 sm:p-1.5 rounded-full text-white">
//                     <HiOutlineArrowUpRight size={10} strokeWidth={2} />
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
//             <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black uppercase">QUINN LINK</h1>
//             <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-xs">
//               Crafting digital experiences with clarity and purpose. Designing visuals that reflect identity and innovation.
//             </p>
//           </div>

//           <div className="space-y-5 sm:space-y-7 sm:col-span-2 md:col-span-1 md:pl-10">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-[#1e1b4b] rounded-full" />
//               <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Contact</h3>
//             </div>
//             <div className="space-y-2 text-gray-700 text-sm font-semibold">
//               <p className="hover:text-[#1e1b4b] cursor-pointer break-all">Email: agntics@studio.com</p>
//               <p>Phone: +(92) 555-0107</p>
//               <p className="text-gray-500 font-medium text-[13px]">4517 Washington Ave. Kentucky 39495</p>
//             </div>
//             <button className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-5 py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all group">
//               <span className="text-xs font-black text-gray-800 uppercase tracking-widest">Contact Us</span>
//               <div className="bg-[#1e1b4b] p-2 rounded-full text-white"><FaPhoneAlt size={10} /></div>
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
//           {SOCIAL_LINKS.map((social, i) => (
//             <a key={i} href={social.href}
//               className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group justify-between">
//               <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">{social.name}</span>
//               <div className={`bg-[#1e1b4b] p-1.5 sm:p-2 rounded-full text-white transition-colors flex items-center justify-center ${social.hoverClass}`}>
//                 {social.icon}
//               </div>
//             </a>
//           ))}
//         </div>

//         <div className="flex flex-col items-center mt-5 mb-2 w-full overflow-hidden">
//           <div className="relative w-full">

//             <AgenticSenseParticleText />

//             <span className="hidden sm:inline absolute bottom-[18%] left-[12%] text-[9px] md:text-[11px] font-bold text-gray-500 uppercase tracking-tighter whitespace-nowrap pointer-events-none z-10">
//               ©2025 AgenticSense Design Studio.
//             </span>
//             <span className="hidden sm:inline absolute bottom-[18%] left-1/2 -translate-x-1/2 text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
//               <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Terms and Conditions</a>
//             </span>
//             <span className="hidden sm:inline absolute bottom-[18%] right-[9%] text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
//               <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
//             </span>

//             <span aria-hidden="true"
//               className="absolute top-0 right-[3%] text-[5vw] font-light leading-none text-gray-400 pointer-events-none select-none">
//               *
//             </span>
//           </div>

//           <div className="sm:hidden flex flex-wrap justify-center gap-4 mt-2 text-[10px] font-bold text-gray-700 uppercase tracking-tight">
//             <span>©2025 AgenticSense.</span>
//             <a href="#" className="hover:text-[#1e1b4b] transition-colors">Terms</a>
//             <a href="#" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// });

// export default Footer;


"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

// ── Lazy-load the heavy canvas ────────────────────────────────────────────────
// • ssr:false  → never server-rendered, not in initial HTML
// • dynamic()  → code-split into its own chunk, downloaded only when this
//                component is actually rendered (i.e. footer reached)
// • loading    → shows the identical transparent-text spacer so layout never
//                shifts (zero CLS) while the chunk loads
const AgenticSenseParticleText = dynamic(
  () => import("./Agenticsenseparticletext"),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full select-none" style={{ lineHeight: 1 }} aria-hidden="true">
        <div
          style={{
            fontSize: "13vw", fontWeight: 900,
            letterSpacing: "-0.06em", lineHeight: 1.14,
            color: "transparent", userSelect: "none", pointerEvents: "none",
          }}
        >
          AgenticSense
        </div>
      </div>
    ),
  }
);

const QUICK_LINKS = [
  { name: "ABOUT",    href: "#" }, { name: "WHO WE ARE", href: "#" },
  { name: "SERVICES", href: "#" }, { name: "PROJECTS",   href: "#" },
  { name: "BLOG",     href: "#" }, { name: "PRICING",    href: "#" },
];
const SOCIAL_LINKS = [
  { name: "Twitter / X", icon: <FaXTwitter size={12} />,   href: "#", hoverClass: "group-hover:bg-[#000000]" },
  { name: "Facebook",    icon: <FaFacebookF size={12} />,  href: "#", hoverClass: "group-hover:bg-[#1877F2]" },
  { name: "Instagram",   icon: <FaInstagram size={12} />,  href: "#", hoverClass: "group-hover:bg-[#E4405F]" },
  { name: "Linkedin",    icon: <FaLinkedinIn size={12} />, href: "#", hoverClass: "group-hover:bg-[#0A66C2]" },
  { name: "YouTube",     icon: <FaYoutube size={12} />,    href: "#", hoverClass: "group-hover:bg-[#FF0000]" },
];

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-12 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-6 md:px-10 font-sans border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-10">

          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff4d00] rounded-full" />
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {QUICK_LINKS.map((link, i) => (
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

          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black uppercase">QUINN LINK</h1>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-xs">
              Crafting digital experiences with clarity and purpose. Designing visuals that reflect identity and innovation.
            </p>
          </div>

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

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {SOCIAL_LINKS.map((social, i) => (
            <a key={i} href={social.href}
              className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group justify-between">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">{social.name}</span>
              <div className={`bg-[#1e1b4b] p-1.5 sm:p-2 rounded-full text-white transition-colors flex items-center justify-center ${social.hoverClass}`}>
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center mt-5 mb-2 w-full overflow-hidden">
          <div className="relative w-full">

            <AgenticSenseParticleText />

            <span className="hidden sm:inline absolute bottom-[18%] left-[24%] text-[9px] md:text-[11px] font-bold text-gray-500 uppercase tracking-tighter whitespace-nowrap pointer-events-none z-10">
              ©2026 AgenticSense Design Studio.
            </span>
            <span className="hidden sm:inline absolute bottom-[18%] left-[56%]  -translate-x-1/2 text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
              <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Terms and Conditions</a>
            </span>
            <span className="hidden sm:inline absolute bottom-[18%] right-[9%] text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
              <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
            </span>

            <span aria-hidden="true"
              className="absolute top-0 right-[3%] text-[5vw] font-light leading-none text-gray-400 pointer-events-none select-none">
              *
            </span>
          </div>

          <div className="sm:hidden flex flex-wrap justify-center gap-4 mt-2 text-[10px] font-bold text-gray-700 uppercase tracking-tight">
            <span>©2026 AgenticSense.</span>
            <a href="#" className="hover:text-[#1e1b4b] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;