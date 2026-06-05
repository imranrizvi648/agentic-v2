"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
const IconLinkedin = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconTwitter = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
  </svg>
);
const IconGitBranch = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <path d="M18 9a9 9 0 01-9 9"/>
  </svg>
);
const IconArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);
const IconX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ── Team Data ─────────────────────────────────────────────────────────────────
const TEAM = [
  { id:1, name:"Muhammad Zeeshan Taqi", role:"Chief Executive Officer", department:"Leadership", bio:"Visionary leader driving AgenticSense's mission to redefine enterprise AI. 15+ years building technology companies across the Gulf and South Asia.", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80", tags:["Strategy","Enterprise AI","M&A"], social:{linkedin:"#",twitter:"#"} },
  { id:2, name:"Saif Khan", role:"Chief Technology Officer", department:"Engineering", bio:"Architect of our multi-agent AI platform. Previously led engineering at two unicorn-stage SaaS companies. Expert in LangGraph and distributed systems.", image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80", tags:["LangGraph","FastAPI","MLOps"], social:{linkedin:"#",github:"#"} },
  { id:3, name:"Waqas Ali", role:"Senior AI & Full-Stack Developer", department:"Engineering", bio:"Builds enterprise-grade AI automation systems integrating FastAPI, Django, Next.js, and SAP Business One. Core contributor to AITHENTIC A-OS.", image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80", tags:["Agentic AI","SAP B1","Next.js"], social:{linkedin:"#",github:"#"} },
  { id:4, name:"Raza Abbas", role:"AI Research Engineer", department:"Engineering", bio:"Specialises in RAG pipelines, vector search, and fine-tuning production LLMs. Passionate about making AI systems explainable and measurable.", image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80", tags:["RAG","pgvector","Gemini"], social:{linkedin:"#",twitter:"#"} },
  { id:5, name:"Aisha Noor", role:"Head of Product Design", department:"Design", bio:"Transforms complex AI workflows into interfaces humans actually enjoy. Design systems advocate with a background in cognitive psychology.", image:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80", tags:["Design Systems","UX Research","Figma"], social:{linkedin:"#",twitter:"#"} },
  { id:6, name:"Omar Farouq", role:"Enterprise Solutions Architect", department:"Solutions", bio:"Bridges the gap between client business needs and technical delivery. Certified in SAP, Salesforce, and AWS. Fluent in Arabic, English, and Urdu.", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80", tags:["SAP","Salesforce","AWS"], social:{linkedin:"#"} },
  { id:7, name:"Fatima Al-Rashid", role:"Business Development Lead", department:"Growth", bio:"Grows strategic partnerships across the GCC. Former management consultant with deep expertise in digital transformation for financial services.", image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80", tags:["GCC Markets","Partnerships","FinTech"], social:{linkedin:"#",twitter:"#"} },
  { id:8, name:"Daniel Chukwu", role:"Senior Backend Engineer", department:"Engineering", bio:"Keeps our infrastructure resilient at scale. Expert in Celery pipelines, Redis, PostgreSQL, and microservice architecture on AWS.", image:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=80", tags:["Celery","Redis","PostgreSQL"], social:{linkedin:"#",github:"#"} },
];

const DEPARTMENTS = ["All","Leadership","Engineering","Design","Solutions","Growth"];

const DEPT_ACCENT = { Leadership:"bg-amber-400", Engineering:"bg-[#625eff]", Design:"bg-rose-400", Solutions:"bg-emerald-400", Growth:"bg-sky-400" };
const DEPT_TEXT   = { Leadership:"text-amber-500", Engineering:"text-[#625eff]", Design:"text-rose-500", Solutions:"text-emerald-500", Growth:"text-sky-500" };

const STATS = [
  { value:"8+",  label:"Core Team Members" },
  { value:"5",   label:"Departments"       },
  { value:"12+", label:"Countries Served"  },
  { value:"40+", label:"Projects Shipped"  },
];

// ── Animations ────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity:0, y:28 },
  show: (i=0) => ({ opacity:1, y:0, transition:{ delay:i*0.07, duration:0.55, ease:[0.22,1,0.36,1] } }),
};
const modalAnim = {
  hidden: { opacity:0, scale:0.94, y:20 },
  show:   { opacity:1, scale:1,    y:0,  transition:{ duration:0.35, ease:[0.22,1,0.36,1] } },
  exit:   { opacity:0, scale:0.96, y:10, transition:{ duration:0.2 } },
};

// ── Canvas Hero (identical engine to ContactHero) ─────────────────────────────
function TeamHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, W, H;
    let mouse = { x:-999, y:-999 };

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
          width: 0.4  + t * 0.25,
        };
      });
    let lines = buildLines();
    const roLines = new ResizeObserver(() => { lines = buildLines(); });
    roLines.observe(canvas);

    /* ── Palette ── */
    const PALETTE = [
      [148,130,255],
      [98, 94, 255],
      [180,170,255],
      [80, 120,255],
      [200,190,255],
      [255,255,255],
      [120,200,255],
    ];

    /* ── Particle class ── */
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
        const [r,g,b] = this.col;
        const a = this.life;
        ctx.save();
        if (this.type === "orb") {
          const pr = this.r * (1 + 0.3 * Math.sin(this.pulse));
          ctx.globalAlpha = a * 0.6;
          ctx.shadowBlur  = 20;
          ctx.shadowColor = `rgb(${r},${g},${b})`;
          const grd = ctx.createRadialGradient(this.x,this.y,0, this.x,this.y, pr*3);
          grd.addColorStop(0,   `rgba(${r},${g},${b},1)`);
          grd.addColorStop(0.4, `rgba(${r},${g},${b},0.5)`);
          grd.addColorStop(1,   `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(this.x, this.y, pr*3, 0, Math.PI*2);
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
              ? ctx.moveTo(Math.cos(ang)*rad, Math.sin(ang)*rad)
              : ctx.lineTo(Math.cos(ang)*rad, Math.sin(ang)*rad);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.globalAlpha = a * 0.9;
          ctx.shadowBlur  = 6;
          ctx.shadowColor = `rgb(${r},${g},${b})`;
          ctx.fillStyle   = `rgba(${r},${g},${b},1)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const particles = Array.from({ length:130 }, () => new P(true));

    /* ── Connection lines ── */
    const drawLinks = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx*dx + dy*dy;
          if (d2 < 75*75) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d/75) * 0.18 * Math.min(particles[i].life, particles[j].life);
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
      ctx.fillRect(0,0,W,H);

      const depth = ctx.createLinearGradient(0,0,W,H);
      depth.addColorStop(0,   "rgba(6,5,28,0.3)");
      depth.addColorStop(0.5, "rgba(26,25,77,0)");
      depth.addColorStop(1,   "rgba(10,8,38,0.25)");
      ctx.fillStyle = depth;
      ctx.fillRect(0,0,W,H);

      const glow = ctx.createRadialGradient(W*0.9,0,0, W*0.9,0, W*0.52);
      glow.addColorStop(0,   "rgba(98,94,255,0.14)");
      glow.addColorStop(0.5, "rgba(98,94,255,0.05)");
      glow.addColorStop(1,   "rgba(98,94,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0,0,W,H);

      drawLinks();
      particles.forEach(p => { p.update(); p.draw(); });

      lines.forEach((l,i) => {
        const drift = Math.sin(tick*0.004 + i*0.38) * (H*0.006);
        ctx.save();
        ctx.globalAlpha = l.alpha;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth   = l.width;
        ctx.lineCap     = "round";
        ctx.beginPath();
        ctx.moveTo(l.sx, l.sy);
        ctx.bezierCurveTo(l.cp1x, l.cp1y+drift, l.cp2x, l.cp2y+drift*0.5, l.ex, l.ey);
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
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full block"
    />
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
function MemberCard({ member, index, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once:true, margin:"-60px" }}
      custom={index % 4}
      onClick={() => onClick(member)}
      className="group relative cursor-pointer bg-white border border-slate-100 overflow-hidden hover:border-[#625eff]/30 hover:shadow-[0_12px_40px_rgba(98,94,255,0.12)] transition-all duration-500"
    >
      {/* Photo */}
      <div className="relative overflow-hidden aspect-square bg-slate-100">
        <img
          src={member.image} alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a194d]/80 via-[#1a194d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Dept pill */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-sm ${DEPT_TEXT[member.department]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${DEPT_ACCENT[member.department]}`} />
            {member.department}
          </span>
        </div>

        {/* Hover CTA */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest">
            View Profile <IconArrowUpRight size={12} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-extrabold text-[#1a194d] leading-snug mb-0.5 group-hover:text-[#625eff] transition-colors">
          {member.name}
        </h3>
        <p className="text-[11px] text-slate-400 font-semibold mb-3 leading-tight">{member.role}</p>
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map(tag => (
            <span key={tag} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-100 text-slate-400 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function MemberModal({ member, onClose }) {
  if (!member) return null;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
    >
      <div className="absolute inset-0 bg-[#1a194d]/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        variants={modalAnim} initial="hidden" animate="show" exit="exit"
        className="relative z-10 bg-white w-full max-w-2xl overflow-hidden shadow-2xl"
      >
        <div className="h-1 bg-gradient-to-r from-[#1a194d] via-[#625eff] to-[#a095ff]" />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Photo */}
          <div className="relative aspect-square sm:aspect-auto sm:min-h-[340px] bg-slate-100">
            <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a194d]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 ${DEPT_TEXT[member.department]}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${DEPT_ACCENT[member.department]}`} />
                {member.department}
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <button onClick={onClose} className="mb-6 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#1a194d] transition-colors flex items-center justify-center">
                <IconX />
              </button>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a194d] leading-tight mb-1">{member.name}</h2>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${DEPT_TEXT[member.department]}`}>{member.role}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{member.bio}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {member.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-100 text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {member.social.linkedin && (
                <a href={member.social.linkedin} className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1a194d] text-white text-xs font-bold rounded hover:bg-[#625eff] transition-colors">
                  <IconLinkedin /> LinkedIn
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded hover:bg-slate-200 transition-colors">
                  <IconTwitter /> Twitter
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded hover:bg-slate-200 transition-colors">
                  <IconGitBranch /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function OurTeamPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [selected, setSelected]     = useState(null);

  const filtered = activeDept === "All"
    ? TEAM
    : TEAM.filter(m => m.department === activeDept);

  return (
    <main className="bg-white min-h-screen font-sans text-[#1a194d]">

      {/* ── HERO with Canvas ─────────────────────────────────────────────── */}
      <section
        aria-label="Our team page header"
        className="relative w-full h-[65vh] sm:h-[72vh] md:h-[82vh] bg-[#1a194d] overflow-hidden flex items-center font-sans"
      >
        {/* Canvas background — exact ContactHero engine */}
        <TeamHeroCanvas />

        {/* Left vignette */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(18,16,60,0.85)] via-[rgba(18,16,60,0.5)] to-transparent" />

        {/* Bottom fade */}
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(26,25,77,0.75)] to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">

          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#625eff]/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] animate-pulse" />
            <span className="text-[#625eff] text-xs font-bold uppercase tracking-[0.2em]">The People Behind the Work</span>
          </motion.div>

          {/* H1 */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-3xl mb-5">
            Meet the Team <br className="hidden sm:block" />
            Building <span className="text-[#625eff]">AgenticSense</span>.
          </motion.h1>

          {/* Lead */}
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-xl mb-12 sm:mb-16">
            A tight-knit team of engineers, researchers, designers, and strategists obsessed with making enterprise AI actually work in production.
          </motion.p>

          {/* Stats strip */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/10 pt-8 sm:pt-10">
            {STATS.map((s, i) => (
              <div key={s.label}
                className={`flex flex-col pr-4 sm:pr-10 ${i !== 0 ? "pl-4 sm:pl-10 border-l border-white/10" : ""} ${i < 2 ? "pb-6 md:pb-0 mb-0" : ""}`}>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">{s.value}</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#625eff] uppercase tracking-widest mt-1 leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.35)] to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth:"none" }}>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-2 whitespace-nowrap flex-shrink-0">Filter</span>
            {DEPARTMENTS.map(dept => (
              <button key={dept} onClick={() => setActiveDept(dept)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 flex-shrink-0 ${
                  activeDept === dept
                    ? "bg-[#1a194d] text-white shadow-md"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}>
                {dept}
                {dept !== "All" && (
                  <span className="ml-1.5 opacity-50">
                    {TEAM.filter(m => m.department === dept).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept}
            initial={{ opacity:0, y:10 }}
            animate={{ opacity:1, y:0  }}
            exit={  { opacity:0, y:-10 }}
            transition={{ duration:0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {filtered.map((member, i) => (
              <MemberCard key={member.id} member={member} index={i} onClick={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 text-sm">No team members in this department yet.</div>
        )}
      </section>

      {/* ── JOIN US BANNER ───────────────────────────────────────────────── */}
      <section className="bg-[#1a194d] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] animate-pulse" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#625eff]">We're Hiring</p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
                Think you belong here?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-white/60">
                We're always looking for exceptional people. If you're passionate about enterprise AI and want to build things that actually matter, let's talk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            
              <a href="/contact" className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

    </main>
  );
}