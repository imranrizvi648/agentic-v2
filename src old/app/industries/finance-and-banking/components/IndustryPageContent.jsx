import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Finance Operations Deserve AI That Understands Capital Markets.",
  highlight: "Understands Capital Markets.",
  sub: "Straight-through reconciliation, real-time fraud detection, automated regulatory reporting and AI-powered client advisory — built to the speed, accuracy and compliance standards that financial services demand.",
  cta1: "Book a Free Finance Assessment",
  cta2: "See Our Banking AI Capabilities",
  badges: ["Core Banking Systems", "Oracle Fusion Cloud", "SAP Business One", "Bloomberg APIs"]
};

const overview = {
  heading: "AI That Operates at the Speed and Precision Finance Requires",
  lead: "Financial services runs on data accuracy, regulatory compliance and operational speed. Generic AI delivers none of these reliably. We build agents that understand the posting logic, the matching rules and the regulatory reporting requirements of your specific environment.",
  body: "From straight-through transaction reconciliation to AI-powered client advisory, our agents integrate natively with your core banking infrastructure, ERP and market data sources through official APIs. Every action is audit-logged. Every exception is routed with context.",
  stats: [
    { val: "100%", label: "Agent actions audit-logged" },
    { val: "3-Way", label: "Trade/settlement match standard" },
    { val: "Real-time", label: "Fraud pattern detection" },
    { val: "0", label: "Manual steps mid-workflow" },
  ],
  cards: [
    { title: "Transaction Reconciliation", body: "Multi-source matching across core banking, custody, ERP and market data — straight-through posting for matched entries." },
    { title: "Fraud Detection & AML", body: "Behavioural pattern monitoring in real time, flagging anomalies against learned baselines before they settle." },
    { title: "Regulatory Reporting", body: "Automated extraction, validation and structured submission of regulatory returns with full audit trail." },
    { title: "Client Advisory AI", body: "Relationship managers query portfolio data, client history and market intelligence in plain language — live data, permission-controlled." },
  ],
};

const benefits = [
  { icon: "", title: "Reconciliation in minutes, not days", body: "Transactions that required analyst teams working overnight now reconcile automatically — exceptions routed with matching evidence already attached." },
  { icon: "", title: "Audit-ready from day one", body: "Every agent decision is logged with inputs, outputs and reasoning. When the regulator asks, the trail is structured for review — not assembled under pressure." },
  { icon: "", title: "Fraud caught before it settles", body: "Real-time pattern monitoring against historical baselines means anomalies surface in seconds, not in the next-day exception report." },
  { icon: "", title: "Regulatory burden reduced", body: "Automated compilation, validation and submission of regulatory returns eliminates a reporting cycle that consumes senior analyst time every period end." },
  { icon: "", title: "No third-party data exposure", body: "Agents deploy on your own infrastructure. Sensitive financial data never passes through AgenticSense systems or third-party SaaS layers." },
  { icon: "", title: "Multi-entity, multi-currency native", body: "Intercompany transactions, currency revaluation, consolidated reporting and entity-level access controls — handled natively, not as add-ons." },
];

const features = [
  { num: "01", title: "Straight-through transaction reconciliation", body: "Multi-source matching across core banking, custody, ERP and market data — clean matches post automatically, breaks surface with context." },
  { num: "02", title: "Real-time fraud detection", body: "Behavioural pattern monitoring with configurable risk thresholds — alerts fire before suspicious transactions settle, not after." },
  { num: "03", title: "Regulatory report automation", body: "Extraction, validation and structured submission of regulatory returns — with sign-off workflow and full audit trail." },
  { num: "04", title: "AI-powered client advisory copilot", body: "Relationship managers query portfolio data, market positions and client history in plain language — grounded in live data." },
  { num: "05", title: "Credit risk assessment agents", body: "Automated analysis of credit applications against your risk policy — structured outputs for credit committees with full data provenance." },
  { num: "06", title: "Trade finance document processing", body: "Vision-AI extraction from letters of credit, bills of lading and trade documents — validated and posted straight-through." },
  { num: "07", title: "Cash flow forecasting", body: "Predictive models trained on your historical AR/AP and market data — surfacing funding requirements and surplus positions weeks in advance." },
  { num: "08", title: "AML transaction monitoring", body: "Automated screening against sanctions lists and typology patterns — with structured case files for compliance review." },
];

const processData = [
  { num: "01", title: "Compliance Map", body: "We identify every regulatory constraint, data governance requirement and control framework before any design decisions." },
  { num: "02", title: "Architecture Design", body: "Target integration model, data flow, matching logic and audit architecture — agreed with your compliance and technology teams." },
  { num: "03", title: "Build & Validate", body: "Agent development against your live systems, with parallel-run testing before any production traffic moves to the agent." },
  { num: "04", title: "Govern & Deploy", body: "Go-live with full audit logging, access controls, HITL checkpoints and regulator-ready reporting active from day one." },
  { num: "05", title: "Operate & Scale", body: "Ongoing monitoring, model updates and expansion across transaction types, asset classes and regulatory regimes." },
];

const whyUs = {
  heading: "Finance AI That Knows the Difference Between a Trade and a Transfer.",
  points: [
    { title: "Posting-level domain depth", body: "We have built agents that post to core banking, SAP and Oracle at the transaction level — not systems that generate summaries for someone else to enter." },
    { title: "Compliance built in — not bolted on", body: "Audit trails, segregation of duties and access controls are architectural requirements, designed before build begins, not added when the auditor asks." },
    { title: "Official APIs — no middleware risk", body: "We integrate through your banking system's own supported interfaces. Your automation is upgrade-safe because it uses the same paths your vendor maintains." },
    { title: "Outcome accountability", body: "We agree measurable outcomes — reconciliation rates, exception rates, cycle times — in writing before work starts." },
  ],
  box: {
    heading: "Built for Regulatory Environments",
    body: "Financial services compliance is non-negotiable. We design for it from phase one — not retrofit it under audit pressure.",
    stats: [
      { val: "100%", label: "Actions logged and traceable" },
      { val: "AES-256", label: "Credential encryption standard" },
      { val: "HITL", label: "Human-in-loop on every exception" },
    ],
  },
};

const faqs = [
  { q: "How do your agents handle regulatory reporting requirements?", a: "We build the regulatory logic into the agent — extraction rules, validation checks, submission format and sign-off workflow. The agent produces a structured, validated output that your compliance team reviews. Every step is logged." },
  { q: "Can agents integrate with our core banking system?", a: "Yes. We integrate through your core banking system's official APIs and supported interfaces — no screen scraping, no middleware, no unofficial methods that break at the next update." },
  { q: "How do you handle data sovereignty and confidentiality?", a: "Agents deploy on your own infrastructure. Sensitive financial data never leaves your environment or passes through AgenticSense systems. All credentials are AES-256 encrypted and managed through your existing IAM." },
  { q: "What happens when a reconciliation break genuinely requires investigation?", a: "The break surfaces in your exception queue with matched records, the discrepancy detail and source data — everything a human needs to investigate. Nothing is discarded or silently deferred." },
  { q: "Can AI agents replace our compliance team?", a: "No. Agents handle volume work. Compliance professionals make the judgement calls. The agent routes exceptions with full context so human decisions are faster and better informed." },
];

const cta = {
  heading: "What Reconciliation or Reporting Process Consumes the Most Analyst Time?",
  body: "In a free Financial Services AI Assessment, we map your highest-value automation opportunity, show you what a production agent looks like against your real systems, and give you an honest view of integration complexity, compliance requirements and expected outcomes — at no cost.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};

const relatedIndustries = [
  { title: "Healthcare", slug: "/industries/healthcare", number: "02" },
  { title: "Real Estate", slug: "/industries/real-estate", number: "03" },
  { title: "E-commerce", slug: "/industries/e-commerce", number: "04" },
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

export default function FinanceAndBankingContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-brand-secondary/20">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-brand-primary/10 dark:border-white/10">
        {/* Subtle mesh background element matching brand variables */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black opacity-30 tracking-widest">01</span>
            <div className="h-px w-4 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Finance & Banking · Capital Markets AI</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-primary leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-brand-secondary">{hero.highlight}</span>{after}
          </h1>
          
          <p className="text-lg opacity-70 leading-relaxed max-w-2xl mb-10">{hero.sub}</p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="#" className="inline-flex items-center justify-center gap-2 font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md transition-all bg-brand-secondary text-white hover:opacity-90 shadow-md shadow-brand-secondary/20">
              {hero.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-brand-primary/5 dark:bg-white/5 font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md border border-brand-primary/10 dark:border-white/10 hover:bg-brand-primary/10 dark:hover:bg-white/10 transition-all">
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
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <Label text="Sector Overview" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight mb-5">{overview.heading}</h2>
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
                <div key={c.title} className="rounded-xl p-5 border border-brand-primary/10 dark:border-white/5 bg-background hover:border-brand-secondary/30 transition-colors shadow-sm">
                  <h4 className="text-xs font-black uppercase tracking-wide mb-2 text-brand-secondary">{c.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Benefits" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When AI Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-brand-primary/[0.01] dark:bg-white/[0.02] border border-brand-primary/5 dark:border-white/5 rounded-2xl p-7 hover:border-brand-secondary/30 transition-colors group">
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-sm font-bold text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">{b.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Capabilities" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-brand-primary/10 dark:border-white/5 bg-background p-6 flex gap-4 hover:border-brand-secondary/20 transition-colors shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center">
                  <span className="text-xs font-black text-brand-secondary">{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-primary dark:text-white mb-1">{f.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Methodology" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {processData.map((step) => (
              <div key={step.num} className="rounded-2xl border border-brand-primary/5 dark:border-white/5 bg-brand-primary/[0.01] dark:bg-white/[0.01] p-6 hover:border-brand-secondary/30 transition-colors">
                <div className="text-xs font-black tracking-widest mb-4 text-brand-secondary">{step.num}</div>
                <h4 className="text-sm font-black text-brand-primary dark:text-white mb-3">{step.title}</h4>
                <p className="text-xs opacity-60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-brand-primary/10 dark:divide-white/10">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-brand-secondary" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-primary dark:text-white mb-1">{p.title}</h4>
                      <p className="text-sm opacity-60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-8">
                <h3 className="text-lg font-bold text-brand-primary mb-3">{whyUs.box.heading}</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-background rounded-lg px-4 py-3 shadow-sm border border-brand-secondary/10">
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
      <section className="py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Label text="Frequently Asked Questions" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-brand-primary/10 dark:divide-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-[10px] font-black text-brand-secondary mt-0.5">Q</span>
                    <span className="text-sm font-bold text-brand-primary dark:text-white/90 leading-snug">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 opacity-40 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-sm opacity-60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Get Started</span>
            <div className="h-px w-8 bg-brand-secondary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base opacity-60 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="#" className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-md bg-brand-secondary text-white hover:opacity-90 transition-opacity shadow-md shadow-brand-secondary/10">
              {cta.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-brand-primary/5 dark:bg-white/5 font-bold text-sm px-7 py-4 rounded-md border border-brand-primary/10 dark:border-white/10 hover:bg-brand-primary/10 dark:hover:bg-white/10 transition-all">
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs opacity-40 pt-4">Dubai, UAE · Karachi, Pakistan · info@agenticsense.ai · agenticsense.ai</p>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-8">Related Industries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedIndustries.map((r) => (
              <Link key={r.slug} href={r.slug} className="group bg-brand-primary/[0.01] dark:bg-white/[0.01] rounded-xl p-6 border border-brand-primary/5 dark:border-white/10 hover:border-brand-secondary/40 hover:bg-background transition-all shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black tracking-widest text-brand-secondary/70">{r.number}</span>
                  <span className="opacity-30 group-hover:opacity-100 group-hover:text-brand-secondary transition-all text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-brand-primary dark:text-white/80 group-hover:text-brand-secondary transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}