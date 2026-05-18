"use client";

import React from "react";

/* ─── Inline SVG backgrounds — no image deps, always sharp ─── */

const BgAIData = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full">
    <rect width="300" height="400" fill="#050d1a"/>
    <circle cx="150" cy="180" r="130" fill="none" stroke="#1a3a6e" strokeWidth="60" opacity="0.45"/>
    <circle cx="150" cy="180" r="75" fill="none" stroke="#0f2a5a" strokeWidth="38" opacity="0.55"/>
    <ellipse cx="150" cy="180" rx="88" ry="32" fill="none" stroke="#1e4a99" strokeWidth="0.8" opacity="0.7"/>
    <ellipse cx="150" cy="180" rx="52" ry="88" fill="none" stroke="#1e4a99" strokeWidth="0.8" opacity="0.7"/>
    <circle cx="150" cy="180" r="105" fill="none" stroke="#1e4a99" strokeWidth="0.6" opacity="0.45"/>
    {/* Hub */}
    <circle cx="150" cy="180" r="18" fill="#1e5ccc" opacity="0.9"/>
    <circle cx="150" cy="180" r="10" fill="#4a8fff"/>
    {/* Outer nodes */}
    <circle cx="150" cy="72"  r="7" fill="#2563eb" opacity="0.9"/>
    <circle cx="240" cy="128" r="5" fill="#3b82f6" opacity="0.8"/>
    <circle cx="240" cy="232" r="7" fill="#1d4ed8" opacity="0.9"/>
    <circle cx="150" cy="288" r="5" fill="#3b82f6" opacity="0.7"/>
    <circle cx="60"  cy="232" r="7" fill="#2563eb" opacity="0.9"/>
    <circle cx="60"  cy="128" r="5" fill="#60a5fa" opacity="0.8"/>
    <circle cx="238" cy="180" r="5" fill="#93c5fd" opacity="0.6"/>
    <circle cx="62"  cy="180" r="5" fill="#93c5fd" opacity="0.6"/>
    {/* Spokes */}
    <line x1="150" y1="162" x2="150" y2="79"  stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/>
    <line x1="162" y1="170" x2="233" y2="133" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/>
    <line x1="162" y1="190" x2="233" y2="227" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/>
    <line x1="150" y1="198" x2="150" y2="281" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/>
    <line x1="138" y1="190" x2="67"  y2="227" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/>
    <line x1="138" y1="170" x2="67"  y2="133" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/>
    <line x1="168" y1="180" x2="233" y2="180" stroke="#60a5fa" strokeWidth="0.6" opacity="0.4"/>
    <line x1="132" y1="180" x2="67"  y2="180" stroke="#60a5fa" strokeWidth="0.6" opacity="0.4"/>
    {/* Secondary small nodes */}
    <circle cx="200" cy="100" r="3.5" fill="#60a5fa" opacity="0.7"/>
    <circle cx="100" cy="100" r="3.5" fill="#60a5fa" opacity="0.7"/>
    <circle cx="270" cy="178" r="3"   fill="#93c5fd" opacity="0.5"/>
    <circle cx="30"  cy="178" r="3"   fill="#93c5fd" opacity="0.5"/>
    {/* Particles */}
    <circle cx="105" cy="230" r="2" fill="#3b82f6" opacity="0.4"/>
    <circle cx="205" cy="240" r="1.5" fill="#60a5fa" opacity="0.35"/>
    <circle cx="250" cy="155" r="2"   fill="#3b82f6" opacity="0.3"/>
    <circle cx="50"  cy="155" r="1.5" fill="#60a5fa" opacity="0.3"/>
    {/* Binary decoration */}
    <text x="14"  y="44"  fontSize="8" fill="#1e4a99" opacity="0.45" fontFamily="monospace">10110101</text>
    <text x="185" y="370" fontSize="8" fill="#1e4a99" opacity="0.45" fontFamily="monospace">01001101</text>
    <text x="215" y="36"  fontSize="8" fill="#1e4a99" opacity="0.35" fontFamily="monospace">11010</text>
    <text x="14"  y="350" fontSize="8" fill="#1e4a99" opacity="0.35" fontFamily="monospace">100101</text>
    {/* Bottom bars */}
    <rect x="16" y="355" width="30" height="2" fill="#1e4a99" opacity="0.5" rx="1"/>
    <rect x="50" y="352" width="20" height="2" fill="#2563eb" opacity="0.4" rx="1"/>
    <rect x="74" y="358" width="14" height="2" fill="#1e4a99" opacity="0.3" rx="1"/>
  </svg>
);

const BgAutomation = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full">
    {/* bg = darkened brand primary */}
    <rect width="300" height="400" fill="#0a0914"/>
    {/* Grid — brand primary tint */}
    {[40,80,120,160,200,240,280,320,360].map(y => (
      <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#1a194d" strokeWidth="0.6"/>
    ))}
    {[50,100,150,200,250].map(x => (
      <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#1a194d" strokeWidth="0.6"/>
    ))}
    {/* Large gear — brand secondary #625eff */}
    <circle cx="150" cy="185" r="58" fill="none" stroke="#3d2fb0" strokeWidth="13" opacity="0.7"/>
    <circle cx="150" cy="185" r="26" fill="#1a194d" stroke="#625eff" strokeWidth="2"/>
    <circle cx="150" cy="185" r="11" fill="#625eff"/>
    {/* Teeth */}
    <rect x="143" y="113" width="14" height="19" fill="#3d2fb0" opacity="0.9" rx="2"/>
    <rect x="143" y="239" width="14" height="19" fill="#3d2fb0" opacity="0.9" rx="2"/>
    <rect x="86"  y="178" width="19" height="14" fill="#3d2fb0" opacity="0.9" rx="2"/>
    <rect x="195" y="178" width="19" height="14" fill="#3d2fb0" opacity="0.9" rx="2"/>
    <rect x="106" y="127" width="14" height="19" rx="2" fill="#3d2fb0" opacity="0.85" transform="rotate(-45 113 136)"/>
    <rect x="180" y="127" width="14" height="19" rx="2" fill="#3d2fb0" opacity="0.85" transform="rotate(45 187 136)"/>
    <rect x="106" y="220" width="14" height="19" rx="2" fill="#3d2fb0" opacity="0.85" transform="rotate(45 113 229)"/>
    <rect x="180" y="220" width="14" height="19" rx="2" fill="#3d2fb0" opacity="0.85" transform="rotate(-45 187 229)"/>
    {/* Top-right small gear */}
    <circle cx="236" cy="92" r="28" fill="none" stroke="#625eff" strokeWidth="8" opacity="0.6"/>
    <circle cx="236" cy="92" r="13" fill="#1a194d" stroke="#625eff" strokeWidth="1.5"/>
    <circle cx="236" cy="92" r="5.5" fill="#a095ff" opacity="0.8"/>
    <rect x="229" y="58"  width="13" height="11" fill="#4b3ec4" opacity="0.8" rx="1"/>
    <rect x="229" y="115" width="13" height="11" fill="#4b3ec4" opacity="0.8" rx="1"/>
    <rect x="213" y="86"  width="11" height="13" fill="#4b3ec4" opacity="0.8" rx="1"/>
    <rect x="252" y="86"  width="11" height="13" fill="#4b3ec4" opacity="0.8" rx="1"/>
    {/* Shaft between gears */}
    <rect x="193" y="120" width="8" height="28" fill="#4b3ec4" opacity="0.6" rx="2" transform="rotate(40 197 134)"/>
    {/* Bottom-left small gear */}
    <circle cx="72" cy="295" r="24" fill="none" stroke="#625eff" strokeWidth="7" opacity="0.5"/>
    <circle cx="72" cy="295" r="11" fill="#1a194d" stroke="#625eff" strokeWidth="1.2"/>
    <circle cx="72" cy="295" r="4.5" fill="#a095ff" opacity="0.7"/>
    <rect x="66" y="267" width="13" height="10" fill="#4b3ec4" opacity="0.7" rx="1"/>
    <rect x="66" y="313" width="13" height="10" fill="#4b3ec4" opacity="0.7" rx="1"/>
    <rect x="47" y="289" width="10" height="13" fill="#4b3ec4" opacity="0.7" rx="1"/>
    <rect x="89" y="289" width="10" height="13" fill="#4b3ec4" opacity="0.7" rx="1"/>
    {/* Pulse rings */}
    <circle cx="150" cy="185" r="44" fill="none" stroke="#625eff" strokeWidth="0.6" opacity="0.25"/>
    <circle cx="150" cy="185" r="72" fill="none" stroke="#3d2fb0" strokeWidth="0.6" opacity="0.15"/>
  </svg>
);

const BgStrategic = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full">
    <rect width="300" height="400" fill="#0c0a1e"/>
    {/* Hex grid rows */}
    {[
      [80,20],[140,20],[200,20],[260,20],
      [20,54],[80,54],[140,54],[200,54],[260,54],
      [80,88],[140,88],[200,88],[260,88],
      [20,122],[80,122],[140,122],[200,122],[260,122],
      [80,156],[140,156],[200,156],[260,156],
      [20,190],[80,190],[140,190],[200,190],[260,190],
      [80,224],[140,224],[200,224],[260,224],
      [20,258],[80,258],[140,258],[200,258],[260,258],
      [80,292],[140,292],[200,292],[260,292],
      [20,326],[80,326],[140,326],[200,326],
    ].map(([cx,cy], i) => {
      const isFocus = (cx===140 && cy===190);
      const isNear  = (Math.abs(cx-140)<70 && Math.abs(cy-190)<70 && !isFocus);
      return (
        <polygon key={i}
          points={`${cx},${cy} ${cx+30},${cy+17} ${cx+30},${cy+51} ${cx},${cy+68} ${cx-30},${cy+51} ${cx-30},${cy+17}`}
          fill={isFocus ? "#1e1b4b" : "none"}
          stroke={isFocus ? "#4f46e5" : isNear ? "#3730a3" : "#2d1f6e"}
          strokeWidth={isFocus ? 1.2 : 0.7}
          opacity={isFocus ? 0.85 : isNear ? 0.65 : 0.45}
        />
      );
    })}
    {/* Trend line inside center hex */}
    <polyline points="120,244 130,228 142,212 154,196 166,182"
      fill="none" stroke="#818cf8" strokeWidth="2.2" opacity="0.9"
      strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="120" cy="244" r="3.5" fill="#6366f1"/>
    <circle cx="130" cy="228" r="3.5" fill="#6366f1"/>
    <circle cx="142" cy="212" r="3.5" fill="#818cf8"/>
    <circle cx="154" cy="196" r="3.5" fill="#818cf8"/>
    <circle cx="166" cy="182" r="5"   fill="#a5b4fc"/>
    {/* Target rings */}
    <circle cx="166" cy="182" r="11" fill="none" stroke="#a5b4fc" strokeWidth="1" opacity="0.55"/>
    <circle cx="166" cy="182" r="20" fill="none" stroke="#6366f1"  strokeWidth="0.7" opacity="0.3"/>
    {/* Strategic dots */}
    <circle cx="80"  cy="156" r="3.5" fill="#4f46e5" opacity="0.65"/>
    <circle cx="200" cy="156" r="3.5" fill="#4f46e5" opacity="0.65"/>
    <circle cx="200" cy="224" r="3.5" fill="#6366f1" opacity="0.55"/>
    <circle cx="80"  cy="224" r="3.5" fill="#6366f1" opacity="0.55"/>
    <circle cx="140" cy="122" r="4.5" fill="#818cf8" opacity="0.75"/>
    <circle cx="140" cy="292" r="4"   fill="#818cf8" opacity="0.55"/>
    {/* Connecting lines */}
    <line x1="80"  y1="156" x2="140" y2="122" stroke="#4f46e5" strokeWidth="0.8" opacity="0.4"/>
    <line x1="200" y1="156" x2="140" y2="122" stroke="#4f46e5" strokeWidth="0.8" opacity="0.4"/>
    <line x1="80"  y1="224" x2="140" y2="292" stroke="#4f46e5" strokeWidth="0.8" opacity="0.3"/>
    <line x1="200" y1="224" x2="140" y2="292" stroke="#4f46e5" strokeWidth="0.8" opacity="0.3"/>
  </svg>
);

const BgConversational = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full">
    {/* bg = darkened brand primary */}
    <rect width="300" height="400" fill="#080714"/>
    {/* Brand purple glow */}
    <circle cx="150" cy="220" r="180" fill="#1a194d" opacity="0.55"/>
    <circle cx="150" cy="220" r="110" fill="#2b2980" opacity="0.3"/>
    {/* Sound wave arcs — brand secondary shades */}
    <path d="M8,200   Q79,88  150,200 Q221,312 292,200" fill="none" stroke="#1a194d" strokeWidth="0.7" opacity="0.35"/>
    <path d="M28,200  Q89,108 150,200 Q211,292 272,200" fill="none" stroke="#2e2a8a" strokeWidth="0.8" opacity="0.45"/>
    <path d="M55,200  Q102,130 150,200 Q198,270 245,200" fill="none" stroke="#4338ca" strokeWidth="1"   opacity="0.5"/>
    <path d="M80,200  Q115,150 150,200 Q185,250 220,200" fill="none" stroke="#4f46e5" strokeWidth="1.2" opacity="0.6"/>
    <path d="M108,200 Q129,168 150,200 Q171,232 192,200" fill="none" stroke="#625eff" strokeWidth="1.6" opacity="0.75"/>
    <path d="M122,200 Q136,180 150,200 Q164,220 178,200" fill="none" stroke="#a095ff" strokeWidth="2.2" opacity="0.9"/>
    {/* Microphone — brand colors */}
    <rect x="136" y="174" width="28" height="40" rx="14" fill="#1a194d" stroke="#625eff" strokeWidth="1.5"/>
    <rect x="140" y="178" width="20" height="32" rx="10" fill="#3d2fb0" opacity="0.9"/>
    <path d="M150,214 L150,228 M138,228 L162,228" fill="none" stroke="#a095ff" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Chat bubble left */}
    <rect x="22" y="82" width="118" height="36" rx="10" fill="#1a194d" opacity="0.75"/>
    <polygon points="32,118 22,132 52,118" fill="#1a194d" opacity="0.75"/>
    <circle cx="50"  cy="100" r="4" fill="#a095ff" opacity="0.75"/>
    <circle cx="65"  cy="100" r="4" fill="#a095ff" opacity="0.75"/>
    <circle cx="80"  cy="100" r="4" fill="#a095ff" opacity="0.75"/>
    <rect x="94" y="95" width="34" height="8" rx="4" fill="#625eff" opacity="0.55"/>
    {/* Chat bubble right */}
    <rect x="162" y="112" width="112" height="32" rx="9" fill="#1a194d" opacity="0.6"/>
    <polygon points="265,144 278,154 258,144" fill="#1a194d" opacity="0.6"/>
    <rect x="172" y="121" width="65" height="7" rx="3.5" fill="#625eff" opacity="0.5"/>
    <rect x="172" y="131" width="44" height="7" rx="3.5" fill="#4b3ec4" opacity="0.4"/>
    {/* Waveform bars — brand secondary shades */}
    <rect x="22" y="318" width="5" height="24" rx="2.5" fill="#3d2fb0" opacity="0.65"/>
    <rect x="31" y="312" width="5" height="32" rx="2.5" fill="#625eff" opacity="0.75"/>
    <rect x="40" y="323" width="5" height="18" rx="2.5" fill="#4b3ec4" opacity="0.55"/>
    <rect x="49" y="308" width="5" height="36" rx="2.5" fill="#625eff" opacity="0.8"/>
    <rect x="58" y="316" width="5" height="28" rx="2.5" fill="#4b3ec4" opacity="0.65"/>
    <rect x="67" y="326" width="5" height="16" rx="2.5" fill="#3d2fb0" opacity="0.55"/>
    <rect x="76" y="312" width="5" height="32" rx="2.5" fill="#625eff" opacity="0.7"/>
    <rect x="85" y="320" width="5" height="22" rx="2.5" fill="#4b3ec4" opacity="0.55"/>
    <rect x="94" y="314" width="5" height="30" rx="2.5" fill="#3d2fb0" opacity="0.6"/>
    {/* Particles */}
    <circle cx="262" cy="290" r="3" fill="#625eff" opacity="0.3"/>
    <circle cx="282" cy="258" r="2" fill="#a095ff" opacity="0.28"/>
    <circle cx="242" cy="318" r="2" fill="#4b3ec4" opacity="0.28"/>
    <circle cx="28"  cy="280" r="2" fill="#625eff" opacity="0.28"/>
  </svg>
);

/* ─── Service data with accent colors from brand theme ─── */
const servicesData = [
  {
    id: "ai",
    title: "AI & Data\nInnovation",
    description: "Specialized in Generative AI consulting, custom AI agents, and data science solutions.",
    tags: ["AI Agent Development", "Data Intelligence", "GenAI Models"],
    Bg: BgAIData,
    accent: "bg-[#625eff]",
  },
  {
    id: "engineering",
    title: "Automation\nExcellence",
    description: "Custom software development, cloud architecture, and robust API system integrations.",
    tags: ["Process Automation", "Enterprise AI", "Workflow Sync"],
    Bg: BgAutomation,
    accent: "bg-[#625eff]",
  },
  {
    id: "cloud",
    title: "Strategic\nAI Solutions",
    description: "Secure cloud migration services, data protection, and compliance audits.",
    tags: ["AI Consulting", "Digital Strategy", "ROI Analysis"],
    Bg: BgStrategic,
    accent: "bg-[#625eff]",
  },
  {
    id: "strategy",
    title: "Conversational\nAI",
    description: "Strategic digital transformation and agile coaching for business growth.",
    tags: ["Chatbot Dev", "Multi-lingual", "24/7 Support"],
    Bg: BgConversational,
    accent: "bg-[#625eff]",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a194d] tracking-tight">
            Our AI & Automation{" "}
            <span className="text-[#625eff]">Services</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg max-w-2xl leading-relaxed">
            Bridging the gap between complex technology and business growth through bespoke AI solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map(({ id, title, description, tags, Bg }) => (
            <div
              key={id}
              className="group relative h-[400px] overflow-hidden rounded-none
                         border border-white/10
                         shadow-[0_8px_32px_rgba(98,94,255,0.12)]
                         hover:shadow-[0_16px_48px_rgba(98,94,255,0.28)]
                         transition-all duration-500 cursor-pointer"
            >
              {/* ── SVG Background */}
              <Bg />

              {/* ── Ambient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t
                from-[#0a0914]/95 via-[#1a194d]/30 to-transparent" />

              {/* ── Top shine streak */}
              <div className="absolute top-0 left-0 right-0 h-[1px]
                              bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* ── Hover glow ring */}
              <div className="absolute inset-0 rounded-2xl
                              ring-1 ring-inset ring-white/10
                              group-hover:ring-[#625eff]/40
                              transition-all duration-500" />

              {/* ── Glass shimmer overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-500
                              bg-gradient-to-br from-white/[0.04] via-transparent to-[#625eff]/[0.06]" />

              {/* ══════════════════════════════════════════════════
                  RESTING STATE — fixed h-[96px] glass base.
                  Same height on every card regardless of title length.
                  Fades out when hovered.
              ══════════════════════════════════════════════════ */}
              <div className="absolute bottom-0 inset-x-0 z-10
                              opacity-100 group-hover:opacity-0
                              transition-opacity duration-300">
                {/* Fixed-height frosted base */}
                <div className="mx-3 mb-3 h-[90px] rounded
                                backdrop-blur-xl
                                bg-white/[0.07]
                                border border-white/[0.14]
                                shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_24px_rgba(0,0,0,0.4)]
                                flex flex-col justify-center px-5">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4" />
                  <h3 className="text-[22px] font-bold text-white leading-tight whitespace-pre-line
                                 drop-shadow-[0_2px_8px_rgba(98,94,255,0.4)]">
                    {title}
                  </h3>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════
                  HOVER STATE — full glass panel slides up from
                  completely off-screen (translate-y-full).
                  Slides to translate-y-0 on hover.
              ══════════════════════════════════════════════════ */}
              <div className="absolute inset-x-0 bottom-0 z-20
                              translate-y-full group-hover:translate-y-0
                              transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <div className="mx-3 mb-3 rounded-xl overflow-hidden
                                backdrop-blur-xl
                                bg-white/[0.07]
                                border border-white/[0.14]
                                shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_24px_rgba(0,0,0,0.4)]">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="p-5">

                    {/* Title */}
                    <h3 className="text-[22px] font-bold text-white leading-tight
                                   mb-3 whitespace-pre-line
                                   drop-shadow-[0_2px_8px_rgba(98,94,255,0.4)]">
                      {title}
                    </h3>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-[#625eff]/60 via-white/20 to-transparent mb-4" />

                    {/* Description */}
                    <p className="text-white/70 text-[13px] leading-relaxed mb-4
                                  opacity-0 group-hover:opacity-100
                                  transition-opacity duration-500 delay-100">
                      {description}
                    </p>

                    {/* Tags */}
                    <div className="space-y-2
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-500 delay-150">
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center justify-between
                                     px-3.5 py-2 rounded-lg
                                     bg-white/[0.06] border border-white/[0.12]
                                     backdrop-blur-md
                                     shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        >
                          <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">
                            {tag}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#625eff]
                                           shadow-[0_0_6px_2px_rgba(98,94,255,0.7)]" />
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}