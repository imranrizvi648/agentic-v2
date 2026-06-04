import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Best Agents Should Be Closing Deals, Not Qualifying Leads.",
  highlight: "Closing Deals, Not Qualifying Leads.",
  sub: "AI agents that handle lead scoring, automated valuation, portfolio analytics and transaction document processing \u2014 so your senior agents spend time on the work that actually closes business.",
  cta1: "Book a Free Real Estate AI Assessment",
  cta2: "See Our Property AI Capabilities",
  badges: ["CRM Platforms", "Property Management Systems", "MLS Data", "Financial ERP"]
};
const overview = {
  heading: "AI That Operates at the Speed and Volume Modern Property Markets Demand",
  lead: "Real estate generates enormous volumes of leads, documents, valuations and portfolio data \u2014 most of it handled manually, inconsistently and too slowly. We build agents that own these workflows end to end.",
  body: "From intelligent lead qualification to automated valuation models and transaction document processing, our agents integrate natively with your CRM, property management platform and financial systems through official APIs. Every lead is scored consistently. Every document is processed accurately. Every portfolio metric is available in real time.",
  stats: [
  { val: "Auto", label: "Automated lead scoring and routing" },
  { val: "Real-time", label: "Portfolio performance analytics" },
  { val: "100%", label: "Document processing audit trail" },
  { val: "CRM", label: "Native integration \u2014 no middleware" },
],
  cards: [
  { title: "Lead Intelligence", body: "AI agents that score, qualify and route inbound leads against your portfolio criteria \u2014 so your agents work the prospects most likely to convert." },
  { title: "Property Valuation AI", body: "Automated valuation models trained on your historical transaction data and comparable market data \u2014 consistent, explainable and production-ready." },
  { title: "Portfolio Analytics", body: "Real-time performance dashboards across your portfolio \u2014 occupancy, yield, maintenance costs, benchmarks \u2014 updated as data changes." },
  { title: "Document Processing", body: "AI extraction and validation from tenancy agreements, sale contracts and inspection reports \u2014 straight-through processing for compliant documents." },
],
};
const benefits = [
  { icon: "\ud83c\udfaf", title: "Senior agents work the right leads", body: "Consistent AI scoring means your most experienced people spend time on the prospects with the highest conversion probability \u2014 not on inbox triage." },
  { icon: "\u26a1", title: "Valuations in minutes, not days", body: "Automated valuation models produce consistent, explainable estimates in minutes \u2014 supporting faster decisions without replacing professional appraisal judgement." },
  { icon: "\ud83d\udcca", title: "Portfolio visibility without manual reporting", body: "Real-time dashboards draw from your property management and financial systems \u2014 leadership sees current performance without waiting for the weekly report." },
  { icon: "\ud83d\udccb", title: "Document processing without the backlog", body: "Tenancy agreements, inspection reports and financial statements processed automatically \u2014 data extracted, validated and filed without a manual touchpoint." },
  { icon: "\ud83d\udd04", title: "CRM stays current automatically", body: "Agents update your CRM with lead interactions, qualification outcomes and pipeline status \u2014 your data is accurate because the agent does the updating." },
  { icon: "\ud83c\udf10", title: "Scales with portfolio growth", body: "Agents handle more volume as your portfolio grows \u2014 without additional headcount in qualifying, valuation analysis or document processing." },
];
const features = [
  { num: "01", title: "AI lead scoring and qualification", body: "Inbound enquiries scored against your portfolio, price point and buyer criteria \u2014 high-intent leads routed to senior agents immediately." },
  { num: "02", title: "Automated valuation models (AVM)", body: "Machine learning models trained on your historical sales, comparable data and market indices \u2014 producing consistent, explainable valuations at scale." },
  { num: "03", title: "Conversational lead nurturing", body: "AI agents that maintain contact with mid-funnel prospects \u2014 answering property questions, sharing relevant listings and scheduling viewings without agent involvement." },
  { num: "04", title: "Portfolio performance dashboards", body: "Real-time analytics across occupancy, rental yield, maintenance expenditure, vacancy rates and benchmark comparatives \u2014 for asset managers and leadership." },
  { num: "05", title: "Tenancy document processing", body: "Automated extraction and validation from tenancy agreements, lease renewals and inspection reports \u2014 straight-through filing for compliant documents." },
  { num: "06", title: "CRM integration and pipeline management", body: "Automated CRM updates, lead status tracking and pipeline reporting \u2014 your data reflects reality without manual entry." },
  { num: "07", title: "Market intelligence agents", body: "Automated monitoring of comparable listings, price movements and absorption rates \u2014 surfaced as structured intelligence for your acquisitions and sales teams." },
  { num: "08", title: "Financial performance analytics", body: "Net operating income, cap rate tracking and return on investment analytics across your portfolio \u2014 integrated with your financial ERP." },
];
const process = [
  { num: "01", title: "Portfolio Audit", body: "We review your portfolio structure, CRM data quality, document types and integration landscape before any architecture decisions." },
  { num: "02", title: "Workflow Design", body: "Lead flows, valuation logic, document types and reporting requirements documented end to end \u2014 with success metrics agreed before build." },
  { num: "03", title: "Build & Integrate", body: "Agent development against your live CRM, property management platform and data sources \u2014 tested against your real leads and documents." },
  { num: "04", title: "Deploy & Train", body: "Go-live with your team trained on exception handling, model outputs and CRM workflows \u2014 agents run alongside existing processes initially." },
  { num: "05", title: "Optimise & Expand", body: "Ongoing model retraining as market conditions evolve, expansion across additional property types and integration with new data sources." },
];
const whyUs = {
  heading: "Real Estate AI That Understands Property Operations, Not Just Property Terminology.",
  points: [
  { title: "Domain understanding across the deal lifecycle", body: "We understand how leads move from enquiry to offer, how valuations are used in decisions, and how portfolio data feeds into investment management." },
  { title: "CRM-native integration", body: "We integrate with your CRM through official APIs \u2014 not middleware that breaks when your platform updates. Your sales process is reflected in the agent, not worked around." },
  { title: "Explainable AI outputs", body: "Valuation models and lead scores come with explanations \u2014 not black boxes. Your team can understand and override when their judgement differs." },
  { title: "Outcome accountability", body: "We agree conversion metrics, processing accuracy rates and time-saving figures before work starts. You know what success looks like before you commit." },
],
  box: {
    heading: "Explainable, Auditable AI",
    body: "Every agent decision comes with reasoning your team can review, question and override \u2014 because property decisions involve professional judgement, not just algorithms.",
    stats: [
  { val: "AVM", label: "Explainable valuation models" },
  { val: "CRM", label: "Native integration \u2014 no middleware" },
  { val: "Real-time", label: "Portfolio analytics updated continuously" },
],
  },
};
const faqs = [
  { q: "Can AI agents replace our estate agents?", a: "No \u2014 and they are not designed to. Agents handle volume work: lead qualification, document processing, CRM updates, portfolio reporting. Relationship-building, negotiation and professional judgement stay with your people." },
  { q: "How accurate are your automated valuation models?", a: "Accuracy depends on the quality of your historical transaction data. We test accuracy against held-out data before go-live and provide confidence intervals alongside valuations, not false precision." },
  { q: "Which CRM platforms do you integrate with?", a: "We work with Salesforce, HubSpot, Zoho CRM and major real estate CRM platforms through their official APIs. Specific integration paths are confirmed in the assessment phase." },
  { q: "How do you handle the diversity of property document formats?", a: "Vision-AI extraction adapts to document format without templates. Unusual documents route to exception queues with extracted data attached." },
  { q: "Can the AI nurture leads without feeling automated?", a: "Yes. Conversational AI agents are configured with your brand voice, portfolio context and response boundaries \u2014 routing to a human agent the moment a lead indicates readiness to transact." },
];
const cta = {
  heading: "How Much of Your Senior Agents' Time Goes to Work That AI Could Handle?",
  body: "In a free Real Estate AI Assessment, we identify your single highest-value automation opportunity, show you what a production agent looks like against your CRM and property data, and give you an honest view of expected conversion impact \u2014 at no cost.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};
const relatedIndustries = [
  { title: "Finance & Banking", slug: "/industries/finance-and-banking", number: "01", accentText: "text-amber-400" },
  { title: "E-commerce", slug: "/industries/e-commerce", number: "04", accentText: "text-violet-400" },
  { title: "Education", slug: "/industries/education", number: "05", accentText: "text-rose-400" },
];

// ─── Theme ───────────────────────────────────────────────────────────────────

const theme = {
  accentText: "text-sky-400",
  accentBg:   "bg-sky-400/10",
  accentBorder: "border-sky-400/20",
  accentHex: "#38bdf8",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Label({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8" style={{ background: theme.accentHex }} />
      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.accentText}`}>{text}</span>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function RealEstateContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-[#0d0d14]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0d0d14] pt-32 pb-20 overflow-hidden border-b border-white/[0.06]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: `${theme.accentHex}18` }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black text-white/20 tracking-widest">03</span>
            <div className="h-px w-4" style={{ background: theme.accentHex }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.accentHex }}>Real Estate · Property Intelligence AI</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.0] tracking-tight max-w-4xl mb-6">
            {before}<span style={{ color: theme.accentHex }}>{hero.highlight}</span>{after}
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10">{hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="#"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-md transition-opacity hover:opacity-90 text-slate-900"
              style={{ background: theme.accentHex }}
            >
              {hero.cta1} →
            </Link>
            <Link href="#"
              className="inline-flex items-center gap-2 bg-white/[0.06] text-white/70 font-bold text-sm px-6 py-3.5 rounded-md border border-white/10 hover:bg-white/10 hover:text-white transition-all"
            >
              {hero.cta2}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {hero.badges.map((b) => (
              <span key={b}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText}`}
              >{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <Label text="Sector Overview" />
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">{overview.heading}</h2>
              <p className={`text-base font-semibold leading-relaxed mb-4 ${theme.accentText}`}>{overview.lead}</p>
              <p className="text-sm text-white/40 leading-relaxed mb-8">{overview.body}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className={`${theme.accentBg} border ${theme.accentBorder} rounded-xl p-4`}>
                    <div className={`text-2xl font-black leading-none mb-1 ${theme.accentText}`}>{s.val}</div>
                    <div className="text-[10px] font-bold text-white/35 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className={`rounded-xl p-5 border ${theme.accentBorder} bg-white/[0.02] hover:bg-white/[0.04] transition-colors`}>
                  <h4 className={`text-xs font-black uppercase tracking-wide mb-2 ${theme.accentText}`}>{c.title}</h4>
                  <p className="text-sm text-white/45 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Benefits" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When AI Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#0d0d14] p-7 hover:bg-white/[0.03] transition-colors group">
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className={`text-sm font-black text-white mb-2 leading-snug group-hover:${theme.accentText} transition-colors`}>{b.title}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Capabilities" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.title} className={`rounded-2xl border ${theme.accentBorder} bg-white/[0.02] p-6 flex gap-4 hover:bg-white/[0.04] transition-colors`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${theme.accentBg} border ${theme.accentBorder} flex items-center justify-center`}>
                  <span className={`text-[10px] font-black ${theme.accentText}`}>{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/90 mb-1">{f.title}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Methodology" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step) => (
              <div key={step.num} className={`rounded-2xl border ${theme.accentBorder} bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors`}>
                <div className={`text-xs font-black tracking-widest mb-4 ${theme.accentText}`}>{step.num}</div>
                <h4 className="text-sm font-black text-white mb-3">{step.title}</h4>
                <p className="text-xs text-white/35 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-white/[0.06]">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: theme.accentHex }} />
                    <div>
                      <h4 className="text-sm font-bold text-white/80 mb-1">{p.title}</h4>
                      <p className="text-sm text-white/35 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className={`rounded-2xl border ${theme.accentBorder} ${theme.accentBg} p-8`}>
                <h3 className={`text-lg font-black mb-3 ${theme.accentText}`}>{whyUs.box.heading}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white/[0.06] rounded-lg px-4 py-3">
                      <span className={`text-xl font-black ${theme.accentText}`}>{s.val}</span>
                      <span className="text-xs text-white/35 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <Label text="Frequently Asked Questions" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-white/[0.07]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className={`flex-shrink-0 w-5 h-5 rounded ${theme.accentBg} border ${theme.accentBorder} flex items-center justify-center text-[9px] font-black ${theme.accentText} mt-0.5`}>Q</span>
                    <span className="text-sm font-bold text-white/75 leading-snug">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 text-white/20 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-sm text-white/40 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: theme.accentHex }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.accentHex }}>Get Started</span>
            <div className="h-px w-8" style={{ background: theme.accentHex }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base text-white/40 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="#"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-md hover:opacity-90 transition-opacity text-slate-900"
              style={{ background: theme.accentHex }}
            >
              {cta.cta1} →
            </Link>
            <Link href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.06] text-white/70 font-bold text-sm px-7 py-4 rounded-md border border-white/10 hover:bg-white/10 hover:text-white transition-all"
            >
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs text-white/20">Dubai, UAE · Karachi, Pakistan · info@agenticsense.ai · agenticsense.ai</p>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/20 mb-8">Related Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedIndustries.map((r) => (
              <Link key={r.slug} href={r.slug}
                className="group bg-white/[0.02] rounded-xl p-6 border border-white/[0.07] hover:bg-white/[0.05] hover:border-white/[0.14] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black tracking-widest ${r.accentText}`}>{r.number}</span>
                  <span className="text-white/20 group-hover:text-white/50 transition-colors text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-white/70 group-hover:text-white transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
