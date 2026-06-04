import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Best Agents Should Be Closing Deals, Not Qualifying Leads.",
  highlight: "Closing Deals, Not Qualifying Leads.",
  sub: "AI agents that handle lead scoring, automated valuation, portfolio analytics and transaction document processing — so your senior agents spend time on the work that actually closes business.",
  cta1: "Book a Free Real Estate AI Assessment",
  cta2: "See Our Property AI Capabilities",
  badges: ["CRM Platforms", "Property Management Systems", "MLS Data", "Financial ERP"]
};

const overview = {
  heading: "AI That Operates at the Speed and Volume Modern Property Markets Demand",
  lead: "Real estate generates enormous volumes of leads, documents, valuations and portfolio data — most of it handled manually, inconsistently and too slowly. We build agents that own these workflows end to end.",
  body: "From intelligent lead qualification to automated valuation models and transaction document processing, our agents integrate natively with your CRM, property management platform and financial systems through official APIs. Every lead is scored consistently. Every document is processed accurately. Every portfolio metric is available in real time.",
  stats: [
    { val: "Auto", label: "Automated lead scoring and routing" },
    { val: "Real-time", label: "Portfolio performance analytics" },
    { val: "100%", label: "Document processing audit trail" },
    { val: "CRM", label: "Native integration — no middleware" },
  ],
  cards: [
    { title: "Lead Intelligence", body: "AI agents that score, qualify and route inbound leads against your portfolio criteria — so your agents work the prospects most likely to convert." },
    { title: "Property Valuation AI", body: "Automated valuation models trained on your historical transaction data and comparable market data — consistent, explainable and production-ready." },
    { title: "Portfolio Analytics", body: "Real-time performance dashboards across your portfolio — occupancy, yield, maintenance costs, benchmarks — updated as data changes." },
    { title: "Document Processing", body: "AI extraction and validation from tenancy agreements, sale contracts and inspection reports — straight-through processing for compliant documents." },
  ],
};

const benefits = [
  { title: "Senior agents work the right leads", body: "Consistent AI scoring means your most experienced people spend time on the prospects with the highest conversion probability — not on inbox triage." },
  { title: "Valuations in minutes, not days", body: "Automated valuation models produce consistent, explainable estimates in minutes — supporting faster decisions without replacing professional appraisal judgement." },
  { title: "Portfolio visibility without manual reporting", body: "Real-time dashboards draw from your property management and financial systems — leadership sees current performance without waiting for the weekly report." },
  { title: "Document processing without the backlog", body: "Tenancy agreements, inspection reports and financial statements processed automatically — data extracted, validated and filed without a manual touchpoint." },
  { title: "CRM stays current automatically", body: "Agents update your CRM with lead interactions, qualification outcomes and pipeline status — your data is accurate because the agent does the updating." },
  { title: "Scales with portfolio growth", body: "Agents handle more volume as your portfolio grows — without additional headcount in qualifying, valuation analysis or document processing." },
];

const features = [
  { num: "01", title: "AI lead scoring and qualification", body: "Inbound enquiries scored against your portfolio, price point and buyer criteria — high-intent leads routed to senior agents immediately." },
  { num: "02", title: "Automated valuation models (AVM)", body: "Machine learning models trained on your historical sales, comparable data and market indices — producing consistent, explainable valuations at scale." },
  { num: "03", title: "Conversational lead nurturing", body: "AI agents that maintain contact with mid-funnel prospects — answering property questions, sharing relevant listings and scheduling viewings without agent involvement." },
  { num: "04", title: "Portfolio performance dashboards", body: "Real-time analytics across occupancy, rental yield, maintenance expenditure, vacancy rates and benchmark comparatives — for asset managers and leadership." },
  { num: "05", title: "Tenancy document processing", body: "Automated extraction and validation from tenancy agreements, lease renewals and inspection reports — straight-through filing for compliant documents." },
  { num: "06", title: "CRM integration and pipeline management", body: "Automated CRM updates, lead status tracking and pipeline reporting — your data reflects reality without manual entry." },
  { num: "07", title: "Market intelligence agents", body: "Automated monitoring of comparable listings, price movements and absorption rates — surfaced as structured intelligence for your acquisitions and sales teams." },
  { num: "08", title: "Financial performance analytics", body: "Net operating income, cap rate tracking and return on investment analytics across your portfolio — integrated with your financial ERP." },
];

const processData = [
  { num: "01", title: "Portfolio Audit", body: "We review your portfolio structure, CRM data quality, document types and integration landscape before any architecture decisions." },
  { num: "02", title: "Workflow Design", body: "Lead flows, valuation logic, document types and reporting requirements documented end to end — with success metrics agreed before build." },
  { num: "03", title: "Build & Integrate", body: "Agent development against your live CRM, property management platform and data sources — tested against your real leads and documents." },
  { num: "04", title: "Deploy & Train", body: "Go-live with your team trained on exception handling, model outputs and CRM workflows — agents run alongside existing processes initially." },
  { num: "05", title: "Optimise & Expand", body: "Ongoing model retraining as market conditions evolve, expansion across additional property types and integration with new data sources." },
];

const whyUs = {
  heading: "Real Estate AI That Understands Property Operations, Not Just Property Terminology.",
  points: [
    { title: "Domain understanding across the deal lifecycle", body: "We understand how leads move from enquiry to offer, how valuations are used in decisions, and how portfolio data feeds into investment management." },
    { title: "CRM-native integration", body: "We integrate with your CRM through official APIs — not middleware that breaks when your platform updates. Your sales process is reflected in the agent, not worked around." },
    { title: "Explainable AI outputs", body: "Valuation models and lead scores come with explanations — not black boxes. Your team can understand and override when their judgement differs." },
    { title: "Outcome accountability", body: "We agree conversion metrics, processing accuracy rates and time-saving figures before work starts. You know what success looks like before you commit." },
  ],
  box: {
    heading: "Explainable, Auditable AI",
    body: "Every agent decision comes with reasoning your team can review, question and override — because property decisions involve professional judgement, not just algorithms.",
    stats: [
      { val: "AVM", label: "Explainable valuation models" },
      { val: "CRM", label: "Native integration — no middleware" },
      { val: "Real-time", label: "Portfolio analytics updated continuously" },
    ],
  },
};

const faqs = [
  { q: "Can AI agents replace our estate agents?", a: "No — and they are not designed to. Agents handle volume work: lead qualification, document processing, CRM updates, portfolio reporting. Relationship-building, negotiation and professional judgement stay with your people." },
  { q: "How accurate are your automated valuation models?", a: "Accuracy depends on the quality of your historical transaction data. We test accuracy against held-out data before go-live and provide confidence intervals alongside valuations, not false precision." },
  { q: "Which CRM platforms do you integrate with?", a: "We work with Salesforce, HubSpot, Zoho CRM and major real estate CRM platforms through their official APIs. Specific integration paths are confirmed in the assessment phase." },
  { q: "How do you handle the diversity of property document formats?", a: "Vision-AI extraction adapts to document format without templates. Unusual documents route to exception queues with extracted data attached." },
  { q: "Can the AI nurture leads without feeling automated?", a: "Yes. Conversational AI agents are configured with your brand voice, portfolio context and response boundaries — routing to a human agent the moment a lead indicates readiness to transact." },
];

const cta = {
  heading: "How Much of Your Senior Agents' Time Goes to Work That AI Could Handle?",
  body: "In a free Real Estate AI Assessment, we identify your single highest-value automation opportunity, show you what a production agent looks like against your CRM and property data, and give you an honest view of expected conversion impact — at no cost.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};

const relatedIndustries = [
  { title: "Finance & Banking", slug: "/industries/finance-and-banking", number: "01" },
  { title: "E-commerce", slug: "/industries/e-commerce", number: "04" },
  { title: "Education", slug: "/industries/education", number: "05" },
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

// ─── Component ───────────────────────────────────────────────────────────────

export default function RealEstateContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-white text-foreground min-h-screen selection:bg-brand-secondary/20">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-brand-primary/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black opacity-30 tracking-widest">03</span>
            <div className="h-px w-4 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Real Estate · Property Intelligence AI</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-brand-primary leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-brand-secondary">{hero.highlight}</span>{after}
          </h1>
          
          <p className="text-lg opacity-70 leading-relaxed max-w-2xl mb-10">{hero.sub}</p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="#" className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-md transition-all bg-brand-secondary text-white hover:opacity-90 shadow-md shadow-brand-secondary/20">
              {hero.cta1}
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-brand-primary/5 font-bold text-sm px-6 py-3.5 rounded-md border border-brand-primary/10 hover:bg-brand-primary/10 transition-all">
              {hero.cta2}
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {hero.badges.map((b) => (
              <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <Label text="Sector Overview" />
              <h2 className="text-3xl md:text-4xl font-black text-brand-primary leading-tight mb-5">{overview.heading}</h2>
              <p className="text-base font-semibold leading-relaxed mb-4 text-brand-secondary">{overview.lead}</p>
              <p className="text-sm opacity-70 leading-relaxed mb-8">{overview.body}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-xl p-4">
                    <div className="text-2xl font-black leading-none mb-1 text-brand-secondary">{s.val}</div>
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="rounded-xl p-5 border border-brand-primary/10 bg-white hover:border-brand-secondary/30 transition-colors shadow-sm">
                  <h4 className="text-xs font-black uppercase tracking-wide mb-2 text-brand-secondary">{c.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Benefits" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When AI Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-brand-primary/[0.01] border border-brand-primary/5 rounded-2xl p-7 hover:border-brand-secondary/30 transition-colors group">
                <h3 className="text-base font-bold text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">{b.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Capabilities" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-brand-primary/10 bg-white p-6 flex gap-4 hover:border-brand-secondary/20 transition-colors shadow-sm">
                <div>
                  <h4 className="text-sm font-bold text-brand-primary mb-1">{f.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Methodology" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processData.map((step) => (
              <div key={step.num} className="rounded-2xl border border-brand-primary/5 bg-brand-primary/[0.01] p-6 hover:border-brand-secondary/30 transition-colors">
                <div className="text-xs font-black tracking-widest mb-4 text-brand-secondary">{step.num}</div>
                <h4 className="text-sm font-black text-brand-primary mb-3">{step.title}</h4>
                <p className="text-xs opacity-60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className=" py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-brand-primary/10">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-brand-secondary" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-primary mb-1">{p.title}</h4>
                      <p className="text-sm opacity-60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-8">
                <h3 className="text-lg font-black mb-3 text-brand-primary">{whyUs.box.heading}</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm border border-brand-secondary/10">
                      <span className="text-lg font-black text-brand-secondary">{s.val}</span>
                      <span className="text-xs opacity-60 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10">
        <div className="max-w-4xl mx-auto px-6">
          <Label text="Frequently Asked Questions" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-brand-primary/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="text-sm font-bold text-brand-primary leading-snug">{f.q}</span>
                  </div>
                </summary>
                <p className="pt-3 text-sm opacity-60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className=" py-20 border-b border-brand-primary/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Get Started</span>
            <div className="h-px w-8 bg-brand-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base opacity-60 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="#" className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-md bg-brand-secondary text-white hover:opacity-90 transition-opacity shadow-md shadow-brand-secondary/10">
              {cta.cta1}
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-brand-primary/5 font-bold text-sm px-7 py-4 rounded-md border border-brand-primary/10 hover:bg-brand-primary/10 transition-all">
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs opacity-40 pt-4">Dubai, UAE · Karachi, Pakistan · info@agenticsense.ai · agenticsense.ai</p>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-8">Related Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedIndustries.map((r) => (
              <Link key={r.slug} href={r.slug} className="group bg-brand-primary/[0.01] rounded-xl p-6 border border-brand-primary/5 hover:border-brand-secondary/40 hover:bg-white transition-all shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black tracking-widest text-brand-secondary/70">{r.number}</span>
                </div>
                <h4 className="text-sm font-bold text-brand-primary group-hover:text-brand-secondary transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}