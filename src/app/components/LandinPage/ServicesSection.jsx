"use client";
import React from "react";

/* ── SVG Backgrounds (unchanged) ── */
const BgAIData = () => (<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full"><rect width="300" height="400" fill="#050d1a"/><circle cx="150" cy="180" r="130" fill="none" stroke="#1a3a6e" strokeWidth="60" opacity="0.45"/><circle cx="150" cy="180" r="75" fill="none" stroke="#0f2a5a" strokeWidth="38" opacity="0.55"/><ellipse cx="150" cy="180" rx="88" ry="32" fill="none" stroke="#1e4a99" strokeWidth="0.8" opacity="0.7"/><ellipse cx="150" cy="180" rx="52" ry="88" fill="none" stroke="#1e4a99" strokeWidth="0.8" opacity="0.7"/><circle cx="150" cy="180" r="18" fill="#1e5ccc" opacity="0.9"/><circle cx="150" cy="180" r="10" fill="#4a8fff"/><circle cx="150" cy="72" r="7" fill="#2563eb" opacity="0.9"/><circle cx="240" cy="128" r="5" fill="#3b82f6" opacity="0.8"/><circle cx="240" cy="232" r="7" fill="#1d4ed8" opacity="0.9"/><circle cx="150" cy="288" r="5" fill="#3b82f6" opacity="0.7"/><circle cx="60" cy="232" r="7" fill="#2563eb" opacity="0.9"/><circle cx="60" cy="128" r="5" fill="#60a5fa" opacity="0.8"/><line x1="150" y1="162" x2="150" y2="79" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/><line x1="162" y1="170" x2="233" y2="133" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/><line x1="162" y1="190" x2="233" y2="227" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/><line x1="150" y1="198" x2="150" y2="281" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/><line x1="138" y1="190" x2="67" y2="227" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/><line x1="138" y1="170" x2="67" y2="133" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6"/><text x="14" y="44" fontSize="8" fill="#1e4a99" opacity="0.45" fontFamily="monospace">10110101</text></svg>);

const BgAutomation = () => (<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full"><rect width="300" height="400" fill="#0a0914"/>{[40,80,120,160,200,240,280,320,360].map(y => (<line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#1a194d" strokeWidth="0.6"/>))}{[50,100,150,200,250].map(x => (<line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#1a194d" strokeWidth="0.6"/>))}<circle cx="150" cy="185" r="58" fill="none" stroke="#3d2fb0" strokeWidth="13" opacity="0.7"/><circle cx="150" cy="185" r="26" fill="#1a194d" stroke="#625eff" strokeWidth="2"/><circle cx="150" cy="185" r="11" fill="#625eff"/><rect x="143" y="113" width="14" height="19" fill="#3d2fb0" opacity="0.9" rx="2"/><rect x="143" y="239" width="14" height="19" fill="#3d2fb0" opacity="0.9" rx="2"/><rect x="86" y="178" width="19" height="14" fill="#3d2fb0" opacity="0.9" rx="2"/><rect x="195" y="178" width="19" height="14" fill="#3d2fb0" opacity="0.9" rx="2"/></svg>);

const BgStrategic = () => (<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full"><rect width="300" height="400" fill="#0c0a1e"/><polygon points="140,190 170,207 170,241 140,258 110,241 110,207" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1.2" opacity="0.85"/><polyline points="120,244 130,228 142,212 154,196 166,182" fill="none" stroke="#818cf8" strokeWidth="2.2" opacity="0.9" strokeLinecap="round" strokeLinejoin="round"/><circle cx="166" cy="182" r="5" fill="#a5b4fc"/><circle cx="166" cy="182" r="11" fill="none" stroke="#a5b4fc" strokeWidth="1" opacity="0.55"/></svg>);

const BgConversational = () => (<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full"><rect width="300" height="400" fill="#080714"/><circle cx="150" cy="220" r="180" fill="#1a194d" opacity="0.55"/><path d="M108,200 Q129,168 150,200 Q171,232 192,200" fill="none" stroke="#625eff" strokeWidth="1.6" opacity="0.75"/><path d="M122,200 Q136,180 150,200 Q164,220 178,200" fill="none" stroke="#a095ff" strokeWidth="2.2" opacity="0.9"/><rect x="136" y="174" width="28" height="40" rx="14" fill="#1a194d" stroke="#625eff" strokeWidth="1.5"/><rect x="140" y="178" width="20" height="32" rx="10" fill="#3d2fb0" opacity="0.9"/><rect x="22" y="82" width="118" height="36" rx="10" fill="#1a194d" opacity="0.75"/><circle cx="50" cy="100" r="4" fill="#a095ff" opacity="0.75"/><circle cx="65" cy="100" r="4" fill="#a095ff" opacity="0.75"/><circle cx="80" cy="100" r="4" fill="#a095ff" opacity="0.75"/></svg>);

const servicesData = [
  { id: "ai", title: "Agentic AI\nfor Finance", description: "AI agents that capture, validate, match and post transactions natively inside SAP and Oracle — end to end, with full audit trail.", tags: ["AP Automation", "GL & Reconciliations", "Month-End Close"], Bg: BgAIData },
  { id: "engineering", title: "ERP & CRM\nAI Integration", description: "We connect intelligent agents directly to your enterprise platforms via official APIs — no fragile middleware, no workarounds.", tags: ["SAP Business One", "Oracle Fusion", "NetSuite / Zoho"], Bg: BgAutomation },
  { id: "cloud", title: "Custom AI\nAgent Development", description: "Multi-agent systems engineered for your workflows, your tools and your guardrails — model-flexible and production-ready.", tags: ["LangGraph", "FastAPI", "Claude / GPT"], Bg: BgStrategic },
  { id: "strategy", title: "Conversational\nAI & Copilots", description: "Ask your ERP a question in plain language and get an answer backed by real records — grounded, permission-aware and secure.", tags: ["MS Teams / Outlook", "Finance Copilots", "NL Reporting"], Bg: BgConversational },
];

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-brand-primary tracking-tight">
            Our AI & Automation Services
          </h2>
          <p className="mt-4 sm:mt-6 text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            Nine production-grade services. One operating principle: agentic AI that ships to production and runs where the work happens. Finance-first. Enterprise-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {servicesData.map(({ id, title, description, tags, Bg }) => (
            <div key={id}
              className="group relative h-[340px] sm:h-[380px] md:h-[400px] overflow-hidden rounded-none border border-white/10 shadow-[0_8px_32px_rgba(98,94,255,0.12)] hover:shadow-[0_16px_48px_rgba(98,94,255,0.28)] transition-all duration-500 cursor-pointer">
              <Bg />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0914]/95 via-[#1a194d]/30 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-[#625eff]/40 transition-all duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] via-transparent to-[#625eff]/[0.06]" />

              {/* Resting */}
              <div className="absolute bottom-0 inset-x-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="mx-3 mb-3 h-[90px] rounded backdrop-blur-xl bg-white/[0.07] border border-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-center px-5">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4" />
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-white leading-tight whitespace-pre-line drop-shadow-[0_2px_8px_rgba(98,94,255,0.4)]">{title}</h3>
                </div>
              </div>

              {/* Hover */}
              <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <div className="mx-3 mb-3 rounded-xl overflow-hidden backdrop-blur-xl bg-white/[0.07] border border-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_24px_rgba(0,0,0,0.4)]">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-[18px] sm:text-[22px] font-bold text-white leading-tight mb-3 whitespace-pre-line drop-shadow-[0_2px_8px_rgba(98,94,255,0.4)]">{title}</h3>
                    <div className="h-[1px] bg-gradient-to-r from-[#625eff]/60 via-white/20 to-transparent mb-4" />
                    <p className="text-white/70 text-[12px] sm:text-[13px] leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{description}</p>
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {tags.map((tag) => (
                        <div key={tag} className="flex items-center justify-between px-3 sm:px-3.5 py-2 rounded-lg bg-white/[0.06] border border-white/[0.12] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                          <span className="text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-widest">{tag}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] shadow-[0_0_6px_2px_rgba(98,94,255,0.7)]" />
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
