"use client";

import Link from "next/link";
import ProductHero from "./components/ProductHero";

/*
  FONT: Inter (Google Fonts) — same as detail page for consistency.
  Load once in your root layout (link tag from earlier snippet).

  ANIMATIONS: All custom CSS keyframes inline via <style jsx global>.
  No external GIFs — every mockup is a live, meaningful product
  story built with Tailwind + a handful of keyframes so it never
  breaks and always matches the brand.
*/

const PRODUCTS = [
  {
    id: "leadsense",
    num: "01",
    name: "LeadSense",
    role: "B2B Lead Generation & Enrichment Platform",
    tagline: "High-intent lead generation, automated and verified daily.",
    desc: "Scrapes directories, evaluates target profiles based on strict ideal customer criteria, runs verification sequences, and pushes clean lead sheets directly to your CRM.",
  },
  {
    id: "liaison",
    num: "02",
    name: "Liaison",
    role: "Multi-Channel Communications Hub",
    tagline: "Connecting your business conversations seamlessly.",
    desc: "Integrates diverse touchpoints, syncs customer conversations across email, social, and support desks, keeping communication streams unified and beautifully coordinated.",
  },
  {
    id: "linkedinagent",
    num: "03",
    name: "Linkedinagent",
    role: "LinkedIn Outreach & Automation Suite",
    tagline: "Your dedicated silent agent, growing your professional pipeline.",
    desc: "Identifies ideal connections on LinkedIn, monitors target account activities, drafts personalized context-rich messages, and maintains warm conversational touchpoints safely.",
  },
  {
    id: "invoicesense",
    num: "04",
    name: "Invoicesense",
    role: "Automated Billing & Financial Intelligence",
    tagline: "Streamlining invoices and payment operations intelligently.",
    desc: "Drafts client bills based on real-time activity logs, tracks payment cycles automatically, follows up on late invoices, and updates financial pipelines with minimal manual touch.",
  },
];

/* ------------ tiny inline icon set (no emoji) ------------ */
const I = {
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
    </svg>
  ),
  user: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  ),
  bot: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4" /><circle cx="12" cy="3" r="1" />
      <circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  file: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="14" y2="17" />
    </svg>
  ),
  bank: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m3 10 9-6 9 6" /><path d="M5 10v9M19 10v9M9 10v9M15 10v9" /><path d="M3 20h18" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
};

export default function OurProductPage() {
  return (
    <main
      className="bg-[#fafbfe] min-h-screen text-[#1a194d] antialiased pb-24"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" }}
    >
      {/* keyframes powering all card animations */}
      <style jsx global>{`
        @keyframes slideInRight { 0% { transform: translateX(-12px); opacity: 0 } 100% { transform: translateX(0); opacity: 1 } }
        @keyframes slideInLeft  { 0% { transform: translateX(12px);  opacity: 0 } 100% { transform: translateX(0); opacity: 1 } }
        @keyframes slideUp      { 0% { transform: translateY(10px);  opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }
        @keyframes flowDot { 0% { left: 0%; opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { left: 100%; opacity: 0 } }
        @keyframes typingDot { 0%, 60%, 100% { transform: translateY(0); opacity: .4 } 30% { transform: translateY(-3px); opacity: 1 } }
        @keyframes softPulse { 0%,100% { opacity: .5 } 50% { opacity: 1 } }
        @keyframes barGrow { 0% { transform: scaleY(0.3) } 100% { transform: scaleY(1) } }
        @keyframes scanLine { 0% { top: 0 } 100% { top: 100% } }
        @keyframes tickPop { 0% { transform: scale(0); opacity: 0 } 60% { transform: scale(1.15) } 100% { transform: scale(1); opacity: 1 } }
        @keyframes floatY { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-4px) } }
      `}</style>

      {/* Hero (component untouched) */}
      <ProductHero />

      {/* ================ HEADING ================ */}
      <div className="text-center pt-24 pb-4 px-6">
        

        <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.05] text-[#1a194d]">
          Our Product Specialities.
        </h2>

        <p className="text-slate-500 text-base font-normal max-w-xl mx-auto mt-4 leading-relaxed tracking-[-0.005em]">
          Four purpose built agents, each engineered to replace a repetitive workflow with autonomous execution.
        </p>
      </div>

      {/* ================ BENTO GRID ================ */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* ============ CARD 1 : LEADSENSE ============ */}
          {/* Story: incoming email -> AI drafts reply -> synced to CRM */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] shadow-[0_1px_2px_rgba(15,15,40,0.03)] hover:shadow-[0_10px_30px_-15px_rgba(15,15,40,0.12)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">

            <div className="h-40 w-full bg-slate-50 rounded-xl border border-slate-200 p-4 relative overflow-hidden mb-5">

              {/* Incoming email */}
              <div
                className="bg-white border border-slate-200 rounded-lg px-2.5 py-2 flex items-center gap-2 mb-2 shadow-sm"
                style={{ animation: "slideInRight .6s ease-out both" }}
              >
                <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                  <I.mail className="w-3 h-3" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-slate-700 truncate">sarah@acmecorp.com</span>
                    <span className="text-[8px] text-slate-400 font-medium">2s</span>
                  </div>
                  <div className="text-[9px] text-slate-500 truncate">Interested in enterprise plan</div>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] shrink-0" style={{ animation: "softPulse 1.4s ease-in-out infinite" }} />
              </div>

              {/* AI processing */}
              <div
                className="bg-[#1a194d] rounded-lg px-2.5 py-2 flex items-center gap-2 mb-2 shadow-sm"
                style={{ animation: "slideInLeft .6s ease-out .3s both" }}
              >
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white shrink-0">
                  <I.bot className="w-3 h-3" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-semibold text-white/90">Leadsense agent</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[8px] text-white/60">Drafting reply</span>
                    <span className="flex items-center gap-0.5 ml-0.5">
                      <span className="w-1 h-1 rounded-full bg-white/70" style={{ animation: "typingDot 1.2s infinite" }} />
                      <span className="w-1 h-1 rounded-full bg-white/70" style={{ animation: "typingDot 1.2s .2s infinite" }} />
                      <span className="w-1 h-1 rounded-full bg-white/70" style={{ animation: "typingDot 1.2s .4s infinite" }} />
                    </span>
                  </div>
                </div>
                <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-wider">Live</span>
              </div>

              {/* CRM sync */}
              <div
                className="bg-white border border-slate-200 rounded-lg px-2.5 py-2 flex items-center gap-2 shadow-sm"
                style={{ animation: "slideUp .6s ease-out .6s both" }}
              >
                <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <I.check className="w-3 h-3" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-semibold text-slate-700">Synced to HubSpot</div>
                  <div className="text-[8px] text-slate-500">Deal stage: Qualified</div>
                </div>
                <span className="text-[8px] font-semibold text-emerald-600">100%</span>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#625eff]/10 blur-2xl rounded-full pointer-events-none" />
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 mb-3 inline-block">
                Product {PRODUCTS[0].num} / Sales
              </span>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-[#1a194d] mb-1.5">{PRODUCTS[0].name}</h3>
              <p className="text-[11px] font-medium text-slate-500 mb-3">{PRODUCTS[0].role}</p>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-5">{PRODUCTS[0].tagline}</p>
              <Link
                href={`/our-product/${PRODUCTS[0].id}`}
                className="text-[12px] font-semibold text-[#1a194d] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                Explore platform
                <I.arrow className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ============ CARD 2 : LIAISON ============ */}
          {/* Story: website chat widget with live conversation + auto-resolved ticket */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] shadow-[0_1px_2px_rgba(15,15,40,0.03)] hover:shadow-[0_10px_30px_-15px_rgba(15,15,40,0.12)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">

            <div className="h-40 w-full bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden mb-5">

              {/* fake website backdrop */}
              <div className="absolute inset-0 p-3">
                <div className="h-2 w-24 bg-slate-200 rounded mb-2" />
                <div className="h-1.5 w-40 bg-slate-200/70 rounded mb-1.5" />
                <div className="h-1.5 w-32 bg-slate-200/70 rounded mb-1.5" />
                <div className="h-1.5 w-36 bg-slate-200/70 rounded" />
              </div>

              {/* chat widget floating bottom-right */}
              <div
                className="absolute bottom-3 right-3 w-[62%] bg-white border border-slate-200 rounded-lg shadow-md overflow-hidden"
                style={{ animation: "slideUp .6s ease-out both" }}
              >
                <div className="bg-[#1a194d] px-2.5 py-1.5 flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <I.bot className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[9px] font-semibold text-white">Liaison support</span>
                  <span className="ml-auto flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" style={{ animation: "softPulse 1.4s ease-in-out infinite" }} />
                    <span className="text-[7px] font-semibold text-white/70 uppercase tracking-wider">Online</span>
                  </span>
                </div>

                <div className="p-2 space-y-1.5">
                  <div
                    className="bg-slate-100 rounded-md rounded-tl-none px-2 py-1 max-w-[75%]"
                    style={{ animation: "slideInRight .5s ease-out .2s both" }}
                  >
                    <div className="text-[8px] text-slate-700 font-medium">Do you support SSO?</div>
                  </div>
                  <div
                    className="bg-[#625eff]/10 rounded-md rounded-tr-none px-2 py-1 max-w-[80%] ml-auto"
                    style={{ animation: "slideInLeft .5s ease-out .55s both" }}
                  >
                    <div className="text-[8px] text-[#1a194d] font-semibold mb-0.5">Yes, SAML and OIDC.</div>
                    <div className="text-[7px] text-[#625eff] font-medium">Source: docs / auth</div>
                  </div>
                  <div className="flex items-center gap-1" style={{ animation: "slideInLeft .5s ease-out 1.1s both" }}>
                    <span className="w-1 h-1 rounded-full bg-slate-400" style={{ animation: "typingDot 1.2s infinite" }} />
                    <span className="w-1 h-1 rounded-full bg-slate-400" style={{ animation: "typingDot 1.2s .2s infinite" }} />
                    <span className="w-1 h-1 rounded-full bg-slate-400" style={{ animation: "typingDot 1.2s .4s infinite" }} />
                  </div>
                </div>
              </div>

              {/* handoff ticket top-left */}
              <div
                className="absolute top-3 left-3 bg-white border border-slate-200 rounded-md shadow-sm px-2 py-1.5 flex items-center gap-1.5"
                style={{ animation: "slideInRight .6s ease-out .9s both" }}
              >
                <div className="w-4 h-4 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <I.check className="w-2.5 h-2.5" />
                </div>
                <div>
                  <div className="text-[8px] font-semibold text-slate-700 leading-none">Ticket #4821</div>
                  <div className="text-[7px] text-slate-500 mt-0.5">Auto-resolved</div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 mb-3 inline-block">
                Product {PRODUCTS[1].num} / Support
              </span>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-[#1a194d] mb-1.5">{PRODUCTS[1].name}</h3>
              <p className="text-[11px] font-medium text-slate-500 mb-3">{PRODUCTS[1].role}</p>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-5">{PRODUCTS[1].tagline}</p>
              <Link
                href={`/our-product/${PRODUCTS[1].id}`}
                className="text-[12px] font-semibold text-[#1a194d] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                Explore platform
                <I.arrow className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ============ CARD 3 : LINKEDIN AGENT ============ */}
          {/* Story: profile scanned -> connection sent -> reply received */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] shadow-[0_1px_2px_rgba(15,15,40,0.03)] hover:shadow-[0_10px_30px_-15px_rgba(15,15,40,0.12)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">

            <div className="h-40 w-full bg-slate-50 rounded-xl border border-slate-200 p-3 relative overflow-hidden mb-5">

              {/* linkedin profile row */}
              <div
                className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center gap-2 shadow-sm mb-2 relative overflow-hidden"
                style={{ animation: "slideInRight .5s ease-out both" }}
              >
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                  <I.user className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold text-slate-800 truncate">Michael Chen</span>
                    <span className="w-3.5 h-3.5 bg-[#0a66c2] rounded-sm flex items-center justify-center text-white shrink-0">
                      <I.linkedin className="w-2.5 h-2.5" />
                    </span>
                  </div>
                  <div className="text-[8px] text-slate-500 truncate">VP Engineering / Series B SaaS</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[7px] text-emerald-600 font-semibold flex items-center gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" style={{ animation: "softPulse 1.4s infinite" }} />
                      Active hiring
                    </span>
                    <span className="text-[7px] text-slate-400 font-medium">Score 92</span>
                  </div>
                </div>
                {/* scanning line */}
                <div className="absolute inset-x-0 h-[1px] bg-[#625eff]/40" style={{ animation: "scanLine 2s ease-in-out infinite" }} />
              </div>

              {/* outgoing connection */}
              <div
                className="bg-[#1a194d] rounded-lg px-2.5 py-1.5 flex items-center gap-2 mb-2 shadow-sm"
                style={{ animation: "slideInLeft .5s ease-out .5s both" }}
              >
                <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white shrink-0">
                  <I.arrow className="w-3 h-3" />
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-semibold text-white/90">Connection request sent</div>
                  <div className="text-[8px] text-white/50">Personalized on recent post</div>
                </div>
                <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-wider">Auto</span>
              </div>

              {/* incoming reply */}
              <div
                className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 flex items-center gap-2 shadow-sm"
                style={{ animation: "slideUp .5s ease-out 1s both" }}
              >
                <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <I.check className="w-3 h-3" />
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-semibold text-slate-700">Accepted and replied</div>
                  <div className="text-[8px] text-slate-500">2h avg turnaround</div>
                </div>
                <span className="text-[9px] font-bold text-[#0a66c2]">+1</span>
              </div>

              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#0a66c2]/10 blur-2xl rounded-full pointer-events-none" />
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 mb-3 inline-block">
                Product {PRODUCTS[2].num} / Outreach
              </span>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-[#1a194d] mb-1.5">{PRODUCTS[2].name}</h3>
              <p className="text-[11px] font-medium text-slate-500 mb-3">{PRODUCTS[2].role}</p>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-5">{PRODUCTS[2].tagline}</p>
              <Link
                href={`/our-product/${PRODUCTS[2].id}`}
                className="text-[12px] font-semibold text-[#1a194d] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                Explore platform
                <I.arrow className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ============ CARD 4 : INVOICESENSE ============ */}
          {/* Story: PDF dropped in -> data extracted into CRM -> reconciled with bank */}
         {/* ============ CARD 4 : INVOICESENSE ============ */}
{/* Story: PDF ingested → OCR scans document → data extracted → FBR QR generated → auto-filed with STRN verification */}
<div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] shadow-[0_1px_2px_rgba(15,15,40,0.03)] hover:shadow-[0_10px_30px_-15px_rgba(15,15,40,0.12)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">

  <div className="h-40 w-full bg-slate-50 rounded-xl border border-slate-200 p-3 relative overflow-hidden mb-5">

    {/* ─── LEFT: Document being OCR scanned ─── */}
    <div
      className="absolute top-3 left-3 w-[42%] bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden"
      style={{ animation: "slideInRight .6s ease-out both" }}
    >
      {/* doc header */}
      <div className="flex items-center gap-1 px-1.5 py-1 border-b border-slate-100">
        <I.file className="w-2.5 h-2.5 text-[#e11d48]" />
        <span className="text-[7px] font-bold text-slate-600 tracking-wider">INVOICE.PDF</span>
        <span className="ml-auto text-[6px] font-semibold text-[#625eff] bg-[#625eff]/10 px-1 rounded">OCR</span>
      </div>
      {/* doc body being scanned */}
      <div className="relative px-1.5 py-1.5 space-y-0.5">
        <div className="h-0.5 w-full bg-slate-200 rounded" />
        <div className="h-0.5 w-4/5 bg-slate-200 rounded" />
        <div className="h-0.5 w-full bg-slate-200 rounded" />
        <div className="h-0.5 w-3/5 bg-slate-200 rounded" />
        <div className="h-0.5 w-4/5 bg-slate-200 rounded" />
        <div className="h-0.5 w-2/3 bg-slate-200 rounded" />
        <div className="h-0.5 w-full bg-slate-200 rounded" />
        {/* scanning line sweeping down */}
        <div
          className="absolute inset-x-0 h-[1.5px] bg-[#625eff] shadow-[0_0_6px_rgba(98,94,255,0.7)]"
          style={{ animation: "scanLine 1.8s ease-in-out infinite" }}
        />
      </div>
    </div>

    {/* ─── Flow arrow with moving dot ─── */}
    <div className="absolute top-[42%] left-[46%] right-[46%] h-[1px] bg-slate-300">
      <span
        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#625eff]"
        style={{ animation: "flowDot 1.6s ease-in-out infinite" }}
      />
    </div>

    {/* ─── RIGHT: FBR QR Code with verification ─── */}
    <div
      className="absolute top-3 right-3 w-[42%] bg-white border border-slate-200 rounded-md shadow-sm p-1.5"
      style={{ animation: "slideInLeft .6s ease-out .3s both" }}
    >
      {/* FBR header */}
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[7px] font-black text-emerald-700 tracking-wider">FBR</span>
        <span
          className="flex items-center gap-0.5 text-[6px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1 py-0.5 rounded"
          style={{ animation: "tickPop .5s ease-out 1s both" }}
        >
          <I.check className="w-1.5 h-1.5" />
          VERIFIED
        </span>
      </div>

      {/* QR code — 6x6 grid built from divs, generated look */}
      <div
        className="grid grid-cols-6 gap-[1px] bg-white p-1 border border-slate-200 rounded-sm mx-auto w-[42px] h-[42px]"
        style={{ animation: "tickPop .5s ease-out .7s both" }}
      >
        {[
          1,1,1,0,1,1,
          1,0,1,1,0,1,
          1,1,0,1,1,0,
          0,1,1,0,1,1,
          1,0,1,1,0,1,
          1,1,0,1,1,1,
        ].map((v, i) => (
          <div key={i} className={v ? "bg-[#1a194d] rounded-[1px]" : "bg-transparent"} />
        ))}
      </div>

      <div className="text-center mt-1">
        <div className="text-[6px] text-slate-400 font-medium leading-none">STRN</div>
        <div className="text-[7px] font-bold text-[#1a194d] font-mono tracking-tight leading-tight">327-7876-12</div>
      </div>
    </div>

    {/* ─── BOTTOM: Auto-filed with FBR strip ─── */}
    <div
      className="absolute bottom-3 left-3 right-3 bg-[#1a194d] rounded-md shadow-sm px-2 py-1.5 flex items-center gap-2"
      style={{ animation: "slideUp .6s ease-out 1.1s both" }}
    >
      <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
        <I.check className="w-3 h-3" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[8px] font-semibold text-white leading-none">Filed with FBR Pakistan</div>
        <div className="text-[7px] text-white/60 mt-0.5">PST/GST 18% auto-calculated / IRIS synced</div>
      </div>
      <span className="flex items-center gap-1 text-[7px] font-bold text-emerald-300 uppercase tracking-wider">
        <span
          className="w-1 h-1 rounded-full bg-emerald-400"
          style={{ animation: "softPulse 1.4s ease-in-out infinite" }}
        />
        Auto
      </span>
    </div>

    {/* ambient accents */}
    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-emerald-400/10 blur-2xl rounded-full pointer-events-none" />
    <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#625eff]/10 blur-2xl rounded-full pointer-events-none" />
  </div>

  <div>
    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 mb-3 inline-block">
      Product {PRODUCTS[3].num} / Finance
    </span>
    <h3 className="text-xl font-bold tracking-[-0.02em] text-[#1a194d] mb-1.5">{PRODUCTS[3].name}</h3>
    <p className="text-[11px] font-medium text-slate-500 mb-3">{PRODUCTS[3].role}</p>
    <p className="text-[13px] text-slate-600 leading-relaxed mb-5">{PRODUCTS[3].tagline}</p>
    <Link
      href={`/our-product/${PRODUCTS[3].id}`}
      className="text-[12px] font-semibold text-[#1a194d] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
    >
      Explore platform
      <I.arrow className="w-3.5 h-3.5" />
    </Link>
  </div>
</div>

        </div>
      </section>
    </main>
  );
}