import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your E-commerce Margins Are Too Thin for Manual Operations.",
  highlight: "Too Thin for Manual Operations.",
  sub: "AI agents that optimise pricing dynamically, prevent stockouts before they happen, reduce checkout abandonment and automate customer service — built for the speed and margin requirements of enterprise retail.",
  cta1: "Book a Free E-commerce AI Assessment",
  cta2: "See Our Retail AI Capabilities",
  badges: ["Shopify Plus", "Magento Enterprise", "SAP Commerce", "Warehouse Management Systems"]
};

const overview = {
  heading: "AI That Operates at the Velocity and Precision E-commerce Demands",
  lead: "E-commerce success runs on milliseconds and margins. Pricing decisions made too slowly, inventory managed by spreadsheet and checkout friction left unresolved are leaving revenue on the table every hour.",
  body: "From dynamic pricing engines that respond to market signals in real time to inventory agents that prevent stockouts before they happen, our AI integrates natively with your commerce platform, ERP and warehouse management systems through official APIs. Every decision is explainable. Every guardrail is yours to configure.",
  stats: [
    { val: "Real-time", label: "Dynamic pricing response" },
    { val: "Predictive", label: "Inventory replenishment" },
    { val: "100%", label: "Agent actions audit-logged" },
    { val: "Native", label: "Platform integration — no middleware" },
  ],
  cards: [
    { title: "Dynamic Pricing Engine", body: "AI agents that adjust prices in response to demand, competitor signals and inventory levels — continuously, within your configured commercial guardrails." },
    { title: "Inventory Intelligence", body: "Predictive replenishment models that order before stockouts happen — accounting for lead times, demand seasonality and supplier reliability." },
    { title: "Checkout Optimisation", body: "AI agents that identify abandonment patterns, personalise offers at checkout and reduce friction — increasing conversion without manual A/B testing cycles." },
    { title: "Customer Service Automation", body: "Intelligent agents that handle order status, returns, product queries and complaints — resolving routine cases without a human touchpoint." },
  ],
};

const benefits = [
  { icon: "", title: "Pricing optimised continuously", body: "Prices reflect current demand, competition and inventory in real time — not yesterday's manual review. Margin improvement is measured against your pre-agent baseline." },
  { icon: "", title: "Stockouts prevented before they cost you", body: "Predictive replenishment fires purchase orders weeks before stockouts occur — based on your actual demand data, not rule-of-thumb reorder points." },
  { icon: "", title: "Checkout conversion improved", body: "AI identifies the specific friction points and abandonment patterns in your checkout flow — and acts on them automatically, not after a quarterly review." },
  { icon: "", title: "Customer service without the queue", body: "Agents resolve the 70–80% of support queries that follow predictable patterns — leaving your human agents for the cases that genuinely need them." },
  { icon: "", title: "Platform data stays consistent", body: "Agents update inventory, pricing and order data across your commerce platform, ERP and warehouse systems simultaneously — no data lag, no manual sync." },
  { icon: "", title: "Commercial intelligence in real time", body: "Margin analysis, sell-through rates, supplier performance and customer lifetime value — available to commercial leadership without a BI analyst in the loop." },
];

const features = [
  { num: "01", title: "Dynamic pricing engine", body: "Real-time price optimisation within your configured guardrails — responding to competitor signals, demand patterns and inventory levels continuously." },
  { num: "02", title: "Demand forecasting", body: "Predictive demand models trained on your historical sales, seasonality and promotional data — driving replenishment decisions before stockouts occur." },
  { num: "03", title: "Automated purchase order generation", body: "Inventory agents that raise purchase orders when replenishment thresholds are reached — validated against supplier lead times and budget controls." },
  { num: "04", title: "Checkout abandonment reduction", body: "AI that identifies abandonment triggers and personalises recovery offers — operating continuously, not through manual campaign setup." },
  { num: "05", title: "Customer service agents", body: "Conversational AI that handles order status, returns initiation, product questions and complaint triage — integrated with your order management system." },
  { num: "06", title: "Personalisation engine", body: "Product recommendation agents that adapt to individual browsing and purchase history — served at scale without manual merchandising decisions." },
  { num: "07", title: "Supplier performance analytics", body: "Automated tracking of on-time delivery, quality rates and pricing compliance across your supplier base — surfaced for commercial review." },
  { num: "08", title: "Margin intelligence dashboard", body: "Real-time margin analysis by product, category, channel and geography — integrated with your financial ERP for accurate contribution accounting." },
];

const process = [
  { num: "01", title: "Commercial Audit", body: "We review your pricing strategy, inventory structure, platform architecture and data quality before any design decisions." },
  { num: "02", title: "Agent Design", body: "Pricing guardrails, replenishment logic, customer service response boundaries and success metrics agreed in writing before build." },
  { num: "03", title: "Build & Integrate", body: "Agent development against your live commerce platform, ERP and warehouse systems — tested against real product and order data." },
  { num: "04", title: "Parallel Run & Go-Live", body: "Agents run alongside existing processes initially — you compare outcomes before switching fully to agent-driven decisions." },
  { num: "05", title: "Optimise & Expand", body: "Continuous model improvement, expansion to additional product categories and integration with new data signals as your business grows." },
];

const whyUs = {
  heading: "E-commerce AI That Understands Retail Operations, Not Just Retail Terminology.",
  points: [
    { title: "Commercial logic built into every agent", body: "We understand margin structures, promotional mechanics, inventory carrying costs and supplier dynamics — not just that e-commerce has SKUs and orders." },
    { title: "Platform-native integration", body: "We integrate with Shopify Plus, Magento, SAP Commerce and major WMS platforms through official APIs. Your pricing and inventory data is accurate because the agent uses the same interfaces your platform does." },
    { title: "Guardrails on every pricing decision", body: "Pricing agents operate within your configured boundaries — floor prices, maximum discount levels, competitor response rules. No agent can undermine your commercial strategy without a human override." },
    { title: "Outcome accountability", body: "We agree margin improvement, conversion uplift and stockout reduction targets before work starts — measured against your pre-agent baseline." },
  ],
  box: {
    heading: "Commercial Guardrails Standard",
    body: "Every pricing agent operates within explicitly configured boundaries — no agent can make a commercial decision outside your approved parameters without human approval.",
    stats: [
      { val: "Real-time", label: "Pricing response to market signals" },
      { val: "Guardrails", label: "Commercial boundaries on every agent" },
      { val: "Native", label: "Platform integration — no middleware" },
    ],
  },
};

const faqs = [
  { q: "How do you prevent a pricing agent from damaging our margins?", a: "Every pricing agent operates within guardrails you define — minimum prices, maximum discount levels, category-specific rules and competitor response boundaries. The agent cannot act outside these parameters. Any decision approaching a boundary is escalated for human review." },
  { q: "Which e-commerce platforms do you integrate with?", a: "Shopify Plus, Magento/Adobe Commerce, SAP Commerce Cloud, WooCommerce and major warehouse management systems — through official APIs." },
  { q: "How quickly can a dynamic pricing agent be live?", a: "A scoped pilot on a defined product category typically reaches a working, live agent in a matter of weeks. We run in parallel with your existing pricing initially." },
  { q: "Can the customer service agent handle returns and order modifications?", a: "Yes. Agents integrate with your order management system to initiate returns, process exchanges and update orders within your configured policy rules." },
  { q: "How do inventory agents handle supplier variability?", a: "Replenishment models account for supplier-specific lead time distributions and historical on-time delivery rates — not just nominal lead times." },
];

const cta = {
  heading: "Where Is Slow Decision-Making Costing Your E-commerce Business the Most?",
  body: "In a free E-commerce AI Assessment, we identify your single highest-value automation opportunity — pricing, inventory, checkout or customer service — show you what a production agent looks like against your platform, and give you an honest view of expected commercial impact — at no cost.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};

const relatedIndustries = [
  { title: "Finance & Banking", slug: "/industries/finance-and-banking", number: "01", accentText: "text-amber-600" },
  { title: "Real Estate", slug: "/industries/real-estate", number: "03", accentText: "text-sky-600" },
  { title: "Education", slug: "/industries/education", number: "05", accentText: "text-rose-600" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Label({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8 bg-brand-secondary" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">{text}</span>
    </div>
  );
}

// ─── Static Hero Background (ContactHero style, no canvas) ───────────────────
// Replicates the layered dark navy aesthetic: base colour + linear depth +
// radial glow + animated bezier-line SVG overlay (CSS only, zero JS).

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Base dark navy */}
      <div className="absolute inset-0 bg-[#1a194d]" />

      {/* Depth gradient — dark corners, slightly lighter centre */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(6,5,28,0.55) 0%, rgba(26,25,77,0) 50%, rgba(10,8,38,0.40) 100%)",
        }}
      />

      {/* Radial purple glow — top-right, matches ContactHero */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 55% 70% at 90% 0%, rgba(98,94,255,0.22) 0%, rgba(98,94,255,0.06) 45%, transparent 70%)",
        }}
      />

      {/* Secondary soft glow — left side */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 40% 60% at 5% 60%, rgba(98,94,255,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Static SVG flow lines — visual twin of the bezier canvas without JS */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes flowLine {
              0%   { stroke-dashoffset: 2000; opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 0.6; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            .fl { stroke-dasharray: 2000; animation: flowLine linear infinite both; }
          `}</style>
        </defs>

        {/* 10 bezier curves — same geometry family as the canvas version */}
        {[
          { d:"M 648 0 C 792 49 432 385 72 595",  dur:"9s",  del:"0s",   a:"0.06" },
          { d:"M 734 0 C 864 56 497 399 158 609",  dur:"11s", del:"1.2s", a:"0.08" },
          { d:"M 820 0 C 936 63 562 413 244 623",  dur:"10s", del:"2.4s", a:"0.05" },
          { d:"M 906 0 C 1008 70 627 427 330 637", dur:"13s", del:"0.6s", a:"0.09" },
          { d:"M 992 0 C 1080 77 692 441 416 651", dur:"8s",  del:"3.0s", a:"0.07" },
          { d:"M 1078 0 C 1152 84 757 455 502 665",dur:"12s", del:"1.8s", a:"0.06" },
          { d:"M 1164 0 C 1224 91 822 469 588 679",dur:"9.5s",del:"4.2s", a:"0.05" },
          { d:"M 1250 0 C 1296 98 887 483 674 693",dur:"14s", del:"0.3s", a:"0.08" },
          { d:"M 1336 0 C 1368 105 952 497 760 700",dur:"11s",del:"2.1s", a:"0.06" },
          { d:"M 562 0 C 720 42 367 371 -14 581",  dur:"10s", del:"3.6s", a:"0.07" },
        ].map((l, i) => (
          <path
            key={i}
            className="fl"
            d={l.d}
            stroke="white"
            strokeWidth={i % 3 === 0 ? "0.8" : "0.45"}
            strokeLinecap="round"
            strokeOpacity={l.a}
            style={{ animationDuration: l.dur, animationDelay: l.del }}
          />
        ))}
      </svg>

      {/* Left vignette — same as ContactHero */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.82)] via-[rgba(18,16,60,0.45)] to-transparent pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[rgba(26,25,77,0.65)] to-transparent pointer-events-none" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.4)] to-transparent" />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function EcommerceContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ── Hero — ContactHero style, no canvas ──────────────── */}
      <section
        aria-label="E-commerce AI — industry page header"
        className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[72vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black text-white/30 tracking-widest">04</span>
            <div className="h-px w-4 bg-[#625eff]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a095ff]">
              E-commerce · Retail Operations AI
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-[#a095ff]">{hero.highlight}</span>{after}
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-2xl mb-10">
            {hero.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all hover:opacity-90 bg-[#625eff] text-white shadow-lg shadow-[#625eff]/30"
            >
              {hero.cta1} →
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 bg-white/[0.07] text-white/80 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md border border-white/[0.14] hover:bg-white/[0.12] hover:text-white transition-all"
            >
              {hero.cta2}
            </Link>
          </div>

          {/* Platform badges */}
          <div className="flex flex-wrap items-center gap-2">
            {hero.badges.map((b) => (
              <span key={b}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#625eff]/30 bg-[#625eff]/10 text-[#a095ff]"
              >{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <Label text="Sector Overview" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight mb-5">{overview.heading}</h2>
              <p className="text-base font-semibold leading-relaxed mb-4 text-brand-secondary">{overview.lead}</p>
              <p className="text-sm text-brand-primary/70 leading-relaxed mb-8">{overview.body}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-xl p-4">
                    <div className="text-2xl font-black leading-none mb-1 text-brand-secondary">{s.val}</div>
                    <div className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="rounded-xl p-5 border border-brand-primary/10 bg-white hover:bg-slate-50 transition-colors shadow-sm shadow-brand-primary/5">
                  <h4 className="text-xs font-black uppercase tracking-wide mb-2 text-brand-secondary">{c.title}</h4>
                  <p className="text-sm text-brand-primary/70 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Benefits" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When AI Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-primary/10 rounded-2xl overflow-hidden shadow-sm">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-7 hover:bg-slate-50/80 transition-colors group">
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-sm font-bold text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">{b.title}</h3>
                <p className="text-xs text-brand-primary/60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Capabilities" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-brand-primary/10 bg-white p-6 flex gap-4 hover:bg-slate-50 transition-colors shadow-sm shadow-brand-primary/5">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-secondary/5 border border-brand-secondary/10 flex items-center justify-center">
                  <span className="text-[10px] font-black text-brand-secondary">{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-primary mb-1">{f.title}</h4>
                  <p className="text-xs text-brand-primary/60 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Methodology" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {process.map((step) => (
              <div key={step.num} className="rounded-2xl border border-brand-primary/10 bg-white p-6 hover:bg-slate-50 transition-colors shadow-sm shadow-brand-primary/5">
                <div className="text-xs font-black tracking-widest mb-4 text-brand-secondary">{step.num}</div>
                <h4 className="text-sm font-black text-brand-primary mb-3">{step.title}</h4>
                <p className="text-xs text-brand-primary/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-brand-primary/10">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-brand-secondary" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-primary/90 mb-1">{p.title}</h4>
                      <p className="text-sm text-brand-primary/60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-brand-primary mb-3">{whyUs.box.heading}</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-brand-secondary/10 shadow-sm shadow-brand-primary/5">
                      <span className="text-xl font-black text-brand-secondary">{s.val}</span>
                      <span className="text-xs text-brand-primary/60 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Label text="Frequently Asked Questions" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-brand-primary/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-brand-secondary/5 border border-brand-secondary/10 flex items-center justify-center text-[9px] font-black text-brand-secondary mt-0.5">Q</span>
                    <span className="text-sm font-bold text-brand-primary/80 leading-snug group-hover:text-brand-secondary transition-colors">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 text-brand-primary/40 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-sm text-brand-primary/60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Get Started</span>
            <div className="h-px w-8 bg-brand-secondary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base text-brand-primary/60 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-md hover:opacity-90 transition-all bg-brand-secondary text-white shadow-sm shadow-brand-secondary/20"
            >
              {cta.cta1} →
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary/[0.03] text-brand-primary/80 font-bold text-sm px-7 py-4 rounded-md border border-brand-primary/10 hover:bg-brand-primary/[0.06] hover:text-brand-primary transition-all"
            >
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs text-brand-primary/40">Dubai, UAE · Karachi, Pakistan · info@agenticsense.co · agenticsense.co</p>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary/30 mb-8">Related Industries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedIndustries.map((r) => (
              <Link key={r.slug} href={r.slug}
                className="group bg-white rounded-xl p-6 border border-brand-primary/10 hover:bg-slate-50 hover:border-brand-primary/20 transition-all shadow-sm shadow-brand-primary/5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black tracking-widest ${r.accentText}`}>{r.number}</span>
                  <span className="text-brand-primary/30 group-hover:text-brand-primary/60 transition-colors text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-brand-primary/70 group-hover:text-brand-primary transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}