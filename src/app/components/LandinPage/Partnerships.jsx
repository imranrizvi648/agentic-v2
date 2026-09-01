"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// ── Industry Partner Data ─────────────────────────────────────────────────
const partnerData = {
  xpace: {
    name: "XPACE Technologies",
    logo: "/homeImages/industryPartners/xpace white logo.png",
    sizeClass: "max-h-12 md:max-h-16",
    description:
      "Delivering cutting-edge enterprise solutions across global markets through our strategic alliance.",
    clients: [
      {
        name: "European Union",
        industry: "Governance",
        project: "AI-Based Psychological Assessment for digital well-being",
      },
      {
        name: "Applied Electronics",
        industry: "Electronics",
        project: "AI-Based Product Quality Control via Multi-Agent",
      },
      {
        name: "BEST Enterprises",
        industry: "Enterprise",
        project: "Confidential / Under NDA",
      },
      {
        name: "CCDC Metrics Research (PVT)",
        industry: "Research",
        project:
          "AI-Based Medical Vitiligo Disease Diagnosis through computer vision and Multi-Agent",
      },
      {
        name: "Global Solution Service",
        industry: "IT Services",
        project: "AI-Based Product Quality Control via Multi-Agent",
      },
      {
        name: "Central Software Company",
        industry: "Software",
        project: "AI-Based FBR Invoice Automation",
      },
    ],
  },
  fanuun: {
    name: "FANUUN BCG",
    logo: "/homeImages/industryPartners/logoFunun.png",
    sizeClass: "max-h-24 md:max-h-32",
    description:
      "Transforming businesses with innovative consulting and operational excellence.",
    clients: [
      {
        name: "Funuun Solutions",
        industry: "AI & Data",
        project: "AI-Based Document Digitization",
      },
    ],
  },
  aithentic: {
    name: "AITHENTIC",
    logo: "/homeImages/industryPartners/Gemini_Generated_Image_qa7eg1qa7eg1qa7e-removebg-preview.png",
    sizeClass: "max-h-8 md:max-h-23",
    isWhite: true,
    description:
      "Driving authentic AI implementation and augmented outcomes for forward-thinking enterprises.",
    clients: [
      {
        name: "BRC Industry",
        industry: "Manufacturing",
        project: "Industrial AI Solutions",
      },
      {
        name: "Abdul Lateef",
        industry: "Commercial",
        project: "Business Operations Enhancement",
      },
      {
        name: "Emirates Driving Center",
        industry: "Automotive",
        project: "Smart Systems Integration",
      },
      {
        name: "SALIC",
        industry: "Agriculture",
        project: "Agri-Tech AI Implementations",
      },
      {
        name: "Crayon",
        industry: "Cloud & Tech",
        project: "Cloud Management Platforms",
      },
    ],
  },
  brb: {
    name: "BRB GROUP",
    logo: "/homeImages/industryPartners/BRB-LOGO.png",
    sizeClass: "max-h-12 md:max-h-17",
    isWhite: false,
    description:
      "Executing large-scale infrastructure and development projects with precision.",
    clients: [
      {
        name: "Document Management",
        industry: "Corporate",
        project: "Enterprise Document Archiving & Management System",
      },
      {
        name: "AI HR System",
        industry: "Human Resources",
        project: "Automated Talent Acquisition & HR System",
      },
      {
        name: "AI IT Management System",
        industry: "Information Technology",
        project: "Intelligent Infrastructure & IT Management System",
      },
      {
        name: "AI Marketing System",
        industry: "Marketing",
        project: "Smart Campaign Automation & AI Marketing Analytics",
      },
    ],
  },
  medics: {
    name: "MEDICS LABORATORIES",
    logo: "/homeImages/industryPartners/codact-white.svg",
    sizeClass: "h-15 md:h-17 w-auto object-contain",
    isWhite: false,
    description:
      "Transforming traditional botanical wisdom into modern certified wellness products through DRAP-approved and cGMP manufacturing standards.",
    clients: [
      {
        name: "Digestive Wellness (Digas)",
        industry: "Healthcare",
        project: "AI-Driven Batch Consistency & Quality Control Management",
      },
      {
        name: "Respiratory Care (Ivy Syrup)",
        industry: "Pharmaceutical",
        project: "Smart Supply Chain Tracking & Automated Inventory Logs",
      },
      {
        name: "Women Care (FC Forte)",
        industry: "Wellness",
        project:
          "Automated Recipe Formulation & Raw Botanical Ingredient Matrix",
      },
      {
        name: "Pediatric Range (Epigro)",
        industry: "Child Care",
        project:
          "Regulatory Compliance Automation & DRAP Documentation Pipeline",
      },
    ],
  },
};

const INDUSTRY_PARTNERS = [
  { id: "xpace" },
  { id: "fanuun" },
  { id: "aithentic" },
  { id: "brb" },
  { id: "medics" },
];

// ── Client Logos (Client Partners tab) ────────────────────────────────────
// 🔧 EDIT KARO: apne 20 real logos yahan daalo.
//   src: '/client-logos/acme.png'  (white/transparent PNG or SVG best rehta hai)
//   Jab tak src null hai, ek placeholder wordmark render hota hai (demo ke liye).
const CLIENT_LOGOS = [
  { id: 1, name: "Acme Corp", src: "/homeImages/clientLogo/logo-1.webp" },
  { id: 2, name: "Vertex", src: "/homeImages/clientLogo/logo-2.webp" },
  { id: 3, name: "NovaBank", src: "/homeImages/clientLogo/logo-3.webp" },
  { id: 4, name: "Helix Health", src: "/homeImages/clientLogo/logo-4.webp" },
  { id: 5, name: "Orbit Retail", src: "/homeImages/clientLogo/logo-5.webp" },
  { id: 6, name: "Quanta", src: "/homeImages/clientLogo/logo-6.webp" },
  { id: 7, name: "Meridian", src: "/homeImages/clientLogo/logo-7.webp" },
  { id: 8, name: "Stratus", src: "/homeImages/clientLogo/logo-8.webp" },
  { id: 9, name: "Ironclad", src: "/homeImages/clientLogo/logo-9.webp" },
  { id: 10, name: "Bluewave", src: "/homeImages/clientLogo/logo-10.webp" },
  { id: 11, name: "Pinnacle", src: "/homeImages/clientLogo/logo-11.webp" },
  { id: 12, name: "Fintra", src: "/homeImages/clientLogo/logo-12.webp" },
  { id: 13, name: "Cedar Group", src: "/homeImages/clientLogo/logo-13.webp" },
  { id: 14, name: "Northgate", src: "/homeImages/clientLogo/logo-14.webp" },
  { id: 15, name: "Lumen Labs", src: "/homeImages/clientLogo/logo-15.webp" },
  { id: 16, name: "Axiom", src: "/homeImages/clientLogo/logo-16.webp" },
  { id: 17, name: "Solaris", src: "/homeImages/clientLogo/logo-17.webp" },
  { id: 18, name: "Cresta", src: "/homeImages/clientLogo/logo-18.webp" },
  { id: 19, name: "Vanguard", src: "/homeImages/clientLogo/logo-19.webp" },
  { id: 20, name: "Eclipse", src: "/homeImages/clientLogo/logo-20.webp" },
  { id: 21, name: "Eclipse", src: "/homeImages/clientLogo/logo-21.webp" },
  { id: 22, name: "Eclipse", src: "/homeImages/clientLogo/logo-22.webp" },
  { id: 23, name: "Eclipse", src: "/homeImages/clientLogo/logo-23.webp" },
  { id: 24, name: "Eclipse", src: "/homeImages/clientLogo/logo-24.webp" },
  { id: 25, name: "Eclipse", src: "/homeImages/clientLogo/logo-25.webp" },
  { id: 26, name: "Eclipse", src: "/homeImages/clientLogo/logo-26.webp" },
  { id: 27, name: "Eclipse", src: "/homeImages/clientLogo/logo-27.webp" },
  { id: 28, name: "Eclipse", src: "/homeImages/clientLogo/logo-28.webp" },
  { id: 29, name: "Eclipse", src: "/homeImages/clientLogo/logo-29.webp" },
  { id: 30, name: "Eclipse", src: "/homeImages/clientLogo/logo-30.webp" },
  { id: 31, name: "Eclipse", src: "/homeImages/clientLogo/logo-31.webp" },
  { id: 32, name: "Eclipse", src: "/homeImages/clientLogo/logo-32.webp" },
  { id: 33, name: "Eclipse", src: "/homeImages/clientLogo/logo-33.webp" },
    { id: 34, name: "Eclipse", src: "/homeImages/clientLogo/logo-34.webp" },
  
];

// ── Helpers ───────────────────────────────────────────────────────────────
function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

// A few placeholder logo "marks" so the demo looks like a real logo wall.
// (These disappear the moment you provide a real `src`.)
function PlaceholderMark({ seed = 0 }) {
  const variant = seed % 6;
  const c = "currentColor";
  switch (variant) {
    case 0:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="2" />
          <circle cx="12" cy="12" r="3.5" fill={c} />
        </svg>
      );
    case 1:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20 12 4l8 16H4Z"
            stroke={c}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 2:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke={c}
            strokeWidth="2"
          />
          <path d="M4 12h16M12 4v16" stroke={c} strokeWidth="1.5" />
        </svg>
      );
    case 3:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3 21 8v8l-9 5-9-5V8l9-5Z"
            stroke={c}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 4:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 19V9l7-5 7 5v10"
            stroke={c}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="13" r="2.5" fill={c} />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12a8 8 0 0 1 16 0"
            stroke={c}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 12a8 8 0 0 1-16 0"
            stroke={c}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      );
  }
}

function LogoTile({ logo }) {
  return (
    <div className="cm-tile group/tile">
      {logo.src ? (
        <img src={logo.src} alt={logo.name} loading="lazy" className="cm-img" />
      ) : (
        <div className="cm-ph">
          <span className="cm-ph-mark">
            <PlaceholderMark seed={logo.id} />
          </span>
          <span className="cm-ph-word">{logo.name}</span>
        </div>
      )}
    </div>
  );
}

function LogoRow({ logos, reverse = false, duration = 46 }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="cm-viewport">
      <div
        className="cm-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((l, i) => (
          <LogoTile key={`${l.id}-${i}`} logo={l} />
        ))}
      </div>
    </div>
  );
}

function LogoMarquee() {
  const rowA = CLIENT_LOGOS.slice(0, 17);
  const rowB = CLIENT_LOGOS.slice(17, 34)
  return (
    <div className="cm-wrap">
      <LogoRow logos={rowA} duration={48} />
      <LogoRow logos={rowB} reverse duration={56} />

      <style>{`
    .cm-wrap { display:flex; flex-direction:column; gap:20px; }
    .cm-viewport {
      overflow:hidden;
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
    }
    .cm-track {
      display:flex; width:max-content;
      animation-name: cm-scroll;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      will-change: transform;
    }
    .cm-viewport:hover .cm-track { animation-play-state: paused; }
    @keyframes cm-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @media (prefers-reduced-motion: reduce) { .cm-track { animation: none; } }

    .cm-tile {
      flex:0 0 auto;
      margin: 0 10px;
      height: 120px;
      min-width: 235px;
      display:flex; align-items:center; justify-content:center;
      padding: 0 22px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 6px;
      /* 'transform' transition yahan se hata di hai */
      transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
    }
    .cm-tile:hover {
      background: rgba(255,255,255,0.09);
      border-color: rgba(255,255,255,0.28);
      /* translateY(-3px) hata diya hai taake card uper na jaye */
      box-shadow: 0 12px 34px rgba(98,94,255,0.16);
    }
    .cm-img {
      max-height: 66px; max-width: 420px; object-fit: contain;
      filter: grayscale(1) brightness(0) invert(1);
      opacity: 0.55; transition: opacity .3s ease, filter .3s ease;
    }
    .cm-tile:hover .cm-img { 
      opacity: 1; 
    }
`}</style>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────
function IndustryClientCard({ client }) {
  return (
    <div
      className="bg-white/5 rounded-xl border border-white/10 p-5 flex items-start gap-4
      hover:border-white/30 hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)]
      transition-all duration-300"
    >
      <div
        className="flex-shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/20
        flex items-center justify-center"
      >
        <span className="text-[11px] font-bold text-white tracking-tight">
          {initials(client.name)}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h4
          className="text-sm font-bold text-white leading-snug truncate"
          title={client.name}
        >
          {client.name}
        </h4>
        <span
          className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-wider
          text-white/90 bg-white/10 border border-white/20 px-2 py-0.5 rounded-full"
        >
          {client.industry}
        </span>
        <p className="mt-2 text-sm text-white/70 leading-[1.6]">
          <span className="font-semibold text-white/90">Project:</span>{" "}
          {client.project}
        </p>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function Partnerships() {
  const [activeTab, setActiveTab] = useState("industry");
  const [activePartner, setActivePartner] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setActivePartner(null);
  };

  const handlePartnerSelect = (id) => {
    if (id === "medics") return;
    setActivePartner(activePartner === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden bg-[#1a194d] py-20 text-white font-sans">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(98,94,255,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">
            Partnerships with Industry Leaders
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-[1.65]">
            Trusted by industry partners and enterprise clients across the GCC,
            South Asia and Europe.
          </p>
        </div>

        {/* ── Tab switcher ───────────────────────────────────────────────── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-3">
            {["industry", "clients"].map((tab) => {
              const isActive = activeTab === tab;
              const isHovered = hoveredTab === tab;
              const label =
                tab === "industry" ? "Industry Partners" : "Client Partners";

              return (
                <button
                  key={tab}
                  onClick={() => handleTabSwitch(tab)}
                  onMouseEnter={() => setHoveredTab(tab)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded
                    font-semibold text-[14px] transition-all duration-300 overflow-hidden cursor-pointer
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#1a194d] to-[#625eff] text-white hover:shadow-lg hover:shadow-[#625eff]/20"
                        : "bg-white/5 border border-white/15 text-white/55 hover:text-white/85 hover:bg-white/10"
                    }`}
                >
                  {isActive && !isHovered && (
                    <>
                      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-white/60 rounded-tl-[2px]" />
                      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-white/60 rounded-br-[2px]" />
                      <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                    </>
                  )}
                  {isActive && isHovered && (
                    <div className="absolute inset-1 pointer-events-none">
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.28 }}
                        className="absolute top-0 left-0 h-[1px] bg-white/70"
                      />
                      <motion.span
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.28 }}
                        className="absolute top-0 left-0 w-[1px] bg-white/70"
                      />
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.28 }}
                        className="absolute bottom-0 right-0 h-[1px] bg-white/70"
                      />
                      <motion.span
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.28 }}
                        className="absolute bottom-0 right-0 w-[1px] bg-white/70"
                      />
                    </div>
                  )}
                  {!isActive && isHovered && (
                    <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            TAB 1 INDUSTRY PARTNERS
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "industry" && (
          <div>
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10
              ${activePartner ? "mb-6" : "mb-0"}`}
            >
              {INDUSTRY_PARTNERS.map(({ id }) => {
                const partner = partnerData[id];
                const active = activePartner === id;
                const isMedics = id === "medics";

                return (
                  <button
                    key={id}
                    onClick={() => handlePartnerSelect(id)}
                    disabled={isMedics}
                    className={`relative rounded p-2 h-32
                      flex flex-col items-center justify-center
                      transition-all duration-300
                      ${
                        isMedics
                          ? "cursor-default opacity-100 bg-white/5 border border-white/10"
                          : "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#152374]"
                      }
                      ${
                        active
                          ? "scale-[1.04] bg-white/15 shadow-[0_8px_32px_rgba(255,255,255,0.1)] border-[1.5px] border-white"
                          : !isMedics &&
                            "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_4px_16px_rgba(255,255,255,0.05)]"
                      }`}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                      className={`object-contain transition-transform duration-300 ${partner.sizeClass} ${
                        isMedics
                          ? "max-w-[150px] md:max-w-[200px]"
                          : "w-auto max-w-[110px] md:max-w-[140px]"
                      } ${partner.isWhite ? "brightness-0 invert" : ""}`}
                    />
                    {active && (
                      <span
                        className="absolute -bottom-[15px] left-1/2 -translate-x-1/2
                        w-0 h-0
                        border-l-[9px] border-l-transparent
                        border-t-[13px] border-t-white
                        border-r-[9px] border-r-transparent"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {activePartner && activePartner !== "medics" && (
              <div
                className="relative bg-white/5 rounded border border-white/10
                shadow-[0_4px_32px_rgba(0,0,0,0.2)] overflow-hidden min-h-[360px] transition-all duration-300"
              >
                <div
                  className="absolute -top-20 -right-20 w-72 h-72 rounded-full
                  bg-white/5 blur-3xl pointer-events-none"
                />
                <div className="relative z-10 p-8 sm:p-10">
                  <div
                    className="flex flex-col sm:flex-row sm:items-start justify-between
                    gap-4 mb-8 pb-6 border-b border-white/10"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-px w-5 bg-white/50" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                          Partner Clients
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-[1.2] tracking-[-0.02em]">
                        {partnerData[activePartner].name}
                      </h3>
                      <p className="mt-1.5 text-sm text-white/70 max-w-lg leading-[1.6]">
                        {partnerData[activePartner].description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partnerData[activePartner].clients.map((client, i) => (
                      <IndustryClientCard key={i} client={client} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            TAB 2 CLIENT PARTNERS  →  animated logo marquee (logos only)
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "clients" && (
          <div className="py-2">
            <LogoMarquee />
          </div>
        )}
      </div>
    </section>
  );
}
