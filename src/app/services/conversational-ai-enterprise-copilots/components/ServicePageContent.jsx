import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Ask Your Systems a Question. Get an Answer Backed by Your Data.",
  highlight: "Get an Answer Backed by Your Data.",
  sub: "Your ERP holds the answers. Your team shouldn\u2019t need an IT ticket to reach them. We build copilots that let finance, operations and support ask in plain language \u2014 and get responses grounded in real, permission-controlled records.",
  cta1: "See a Copilot Demo",
  cta2: "Explore Deployment Options",
  trustLabel: "Deployable via",
  badges: ["Microsoft Teams", "Outlook", "Web Widget", "Your Own Apps"],
};

const overview = {
  heading: "Natural Language Access to Your Enterprise Intelligence",
  lead: "Leadership shouldn\u2019t wait on analysts to pull data from Oracle Fusion before understanding where the numbers stand. Internal teams shouldn\u2019t need IT support to query their own systems.",
  body: "Our copilots sit on top of your enterprise data and deliver accurate, permission-aware answers in seconds. Every response is grounded in your live ERP records \u2014 not general knowledge, not cached reports from last Tuesday. Access controls are respected at every turn.",
  stats: [
    { val: "Real",  label: "Live ERP data \u2014 not cached reports" },
    { val: "RBAC",  label: "Permission-aware at every query" },
    { val: "NL",    label: "Plain-language query \u2014 no SQL" },
    { val: "Multi", label: "Channel delivery across Teams, web, apps" },
  ],
  cards: [
    { title: "Finance Copilot",            body: "Query AR balances, AP status, GL accounts and close progress in plain English \u2014 instant, grounded responses for finance leadership." },
    { title: "Operations Copilot",         body: "Inventory levels, order status, supplier performance and fulfilment metrics \u2014 available to operations teams without an IT request." },
    { title: "Customer & Vendor Assistant",body: "External-facing assistants for order status, invoice queries and self-service \u2014 reducing your support queue without reducing service quality." },
    { title: "Analytics Self-Service",     body: "Natural-language reporting and drill-down analytics \u2014 from executive dashboards to operational line items, on demand." },
  ],
};

const benefits = [
  { icon: "\u26a1", title: "Answers in seconds, not hours",      body: "Reporting requests that required an analyst to pull, format and send data are answered instantly \u2014 from your live system." },
  { icon: "\ud83d\udd10", title: "Governance is built in",       body: "Users see only what their role permits. No risk of finance data reaching unauthorised staff \u2014 the copilot respects your RBAC at query time." },
  { icon: "\ud83d\udcc9", title: "Support queue shrinks",        body: "Customer and vendor assistants handle order status, invoice enquiries and routine support \u2014 your human team focuses on exceptions." },
  { icon: "\ud83e\udde9", title: "Deploys where your team works",body: "Microsoft Teams, Outlook, web widget or embedded in your own applications \u2014 no new tool for your team to adopt." },
  { icon: "\ud83d\udcca", title: "Grounded in your data \u2014 always", body: "Responses come from live records, not general AI knowledge. Accuracy is a function of your data quality, not the model\u2019s training set." },
  { icon: "\ud83d\udd17", title: "Works across your systems",    body: "A finance copilot can draw from SAP, Oracle and Salesforce simultaneously \u2014 joining data your team currently has to stitch manually." },
];

const features = [
  { num: "01", title: "Natural-language ERP querying",       body: "\u2018Show me all invoices over $50k that haven\u2019t been approved\u2019 \u2014 answered from your live ERP in plain language." },
  { num: "02", title: "Variance analysis on demand",         body: "Actual vs budget, period over period and trend analysis \u2014 surfaced in a conversational response, not a static report." },
  { num: "03", title: "Self-service analytics drill-down",   body: "Users can ask follow-up questions to drill from a summary figure to the underlying transactions \u2014 without IT involvement." },
  { num: "04", title: "Customer and vendor self-service",    body: "External-facing assistants answer order status, invoice and payment queries using your live ERP data." },
  { num: "05", title: "Permission-aware responses",          body: "Every response is filtered through your role-based access controls \u2014 the copilot cannot return data the user is not authorised to see." },
  { num: "06", title: "Multi-system data joining",           body: "A single question can draw from SAP, Oracle Fusion and Salesforce \u2014 the copilot joins the answer, not the user." },
  { num: "07", title: "Teams and Outlook integration",       body: "Deployed as a Teams bot or Outlook add-in \u2014 available inside the tools your team already uses, with zero additional login." },
  { num: "08", title: "Shadow DOM web widget",               body: "An isolated, brand-able web widget deployable on any page \u2014 your vendor portal, intranet or public-facing site." },
];

const process = [
  { num: "01", title: "Data Discovery",    body: "We map your enterprise data sources, access control structure and most common reporting and query patterns." },
  { num: "02", title: "RAG & Query Design",body: "We build the retrieval pipeline, define query boundaries and configure the permission layer before the copilot interface exists." },
  { num: "03", title: "Copilot Build",     body: "Conversational interface, grounding logic, guardrails and fallback responses \u2014 built and tested against real queries from your team." },
  { num: "04", title: "Channel Deployment",body: "Teams bot, Outlook add-in, web widget or embedded API \u2014 deployed through your channel with your branding and governance." },
  { num: "05", title: "Monitor & Improve", body: "Query logging, accuracy tracking and continuous improvement based on how your team actually uses the copilot in production." },
];

const whyUs = {
  heading: "Copilots That Know What They Don\u2019t Know",
  points: [
    { title: "Grounded in live data, not training data",        body: "Every response comes from your ERP at query time. The copilot cannot fabricate a figure \u2014 it can only return what is in your system." },
    { title: "Permission model is not optional",                body: "Access controls are baked into the query layer. A finance director and a warehouse manager get different answers to the same question \u2014 correctly." },
    { title: "Deploys where your team already works",           body: "Microsoft Teams, Outlook, web widget or your own app \u2014 no new tool adoption required. The copilot comes to your team, not the other way around." },
    { title: "Multi-system without multi-vendor complexity",    body: "One copilot can draw from SAP, Oracle and Salesforce simultaneously. One team builds it, one team supports it." },
  ],
  box: {
    heading: "Real-Time ERP Intelligence",
    body: "Answers grounded in live records, not yesterday\u2019s cached report. Permission-aware at every query \u2014 always.",
    stats: [
      { val: "Live", label: "Real-time ERP data at every query" },
      { val: "RBAC", label: "Permission-aware responses always" },
      { val: "4+",   label: "Deployment channels supported" },
    ],
  },
};

const faqs = [
  { q: "Can the copilot make changes to our ERP, or is it read-only?",                 a: "By default, copilots are read-only \u2014 they query and surface data. We can add write actions (creating a record, triggering a workflow) with appropriate approval gates, but this is configured explicitly and requires human confirmation for any system change." },
  { q: "How does the copilot stay accurate as our ERP data changes?",                  a: "Copilots query your live ERP at query time \u2014 they are not working from a cached snapshot. Responses reflect the state of your data when the question is asked." },
  { q: "What stops a user from asking a question outside their permission level?",     a: "The copilot applies your role-based access controls at the data layer \u2014 before the response is composed. If a user\u2019s role does not have access to a dataset, the copilot cannot include it in a response, regardless of how the question is phrased." },
  { q: "Can we have a customer-facing version for vendor or client portals?",          a: "Yes. We build external-facing assistants that answer order status, payment and invoice queries using scoped, authenticated access to your ERP \u2014 with a separate permission layer from your internal copilot." },
];

const cta = {
  heading: "What Would Your Finance Team Ask If They Could Query Your ERP in Plain English?",
  body: "That\u2019s the question we start with. Tell us which systems hold your data and what your teams are constantly asking for \u2014 we\u2019ll show you what a copilot grounded in those systems looks like in a free session.",
  cta1: "Book a Copilot Demo",
  cta2: "See Deployment Options",
};

const relatedServices = [
  { title: "Custom AI Agent Development",        slug: "/services/custom-ai-agent-development",        number: "04" },
  { title: "Agentic AI for the Office of Finance",slug: "/services/agentic-ai-finance",                number: "01" },
  { title: "Data Intelligence & Decision Analytics",slug: "/services/data-intelligence-decision-analytics", number: "07" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-0.5 bg-indigo-500" />
      <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">{text}</span>
    </div>
  );
}

// ── Static hero colour layers only, no canvas, no SVG, no JS ───────────────
function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a194d]" />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg,rgba(6,5,28,0.55) 0%,rgba(26,25,77,0) 50%,rgba(10,8,38,0.40) 100%)" }} />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 70% at 90% 0%,rgba(98,94,255,0.22) 0%,rgba(98,94,255,0.06) 45%,transparent 70%)" }} />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 40% 60% at 5% 60%,rgba(98,94,255,0.10) 0%,transparent 65%)" }} />
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.85)] via-[rgba(18,16,60,0.55)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[rgba(26,25,77,0.85)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.45)] to-transparent" />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ConversationalAiEnterpriseCopilotsContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main>

      {/* ── Hero colour layers only, no canvas, no SVG ─────────────────────── */}
      <section className="relative w-full min-h-[85vh] overflow-hidden flex items-center font-sans pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <HeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-[#9482ff]">{hero.highlight}</span>{after}
          </h1>
          <p className="text-base sm:text-lg leading-[1.65] tracking-[-0.005em] text-white/70 max-w-2xl mb-10">{hero.sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#625eff] text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md hover:bg-[#4b47e6] transition-colors shadow-lg shadow-indigo-950/50">
              {hero.cta1} →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all">
              {hero.cta2}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">{hero.trustLabel}</span>
            {hero.badges.map((b) => (
              <span key={b} className="text-xs font-semibold text-white/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <SectionLabel text="Service Overview" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary leading-tight tracking-tight mb-5">{overview.heading}</h2>
              <p className="text-base text-indigo-700 font-semibold leading-relaxed mb-4">{overview.lead}</p>
              <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em] mb-8">{overview.body}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-indigo-600 leading-none mb-1">{s.val}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800 mb-2">{c.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Benefits" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <div key={b.title}
                className={`bg-white p-7 hover:bg-indigo-50/30 transition-colors ${i % 3 !== 2 ? "lg:border-r border-slate-100" : ""} ${i < 3 ? "border-b border-slate-100" : ""}`}>
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-sm font-bold text-brand-primary mb-2 leading-snug">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Capabilities" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 flex gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-indigo-600">{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Methodology" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-100" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {process.map((step) => (
                <div key={step.num} className="relative flex flex-col items-start md:items-center md:text-center">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-xs font-bold text-indigo-600">{step.num}</span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-slate-100">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 shadow-sm shadow-indigo-300" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold text-white mb-3">{whyUs.box.heading}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span className="text-xl font-bold text-indigo-300">{s.val}</span>
                      <span className="text-xs text-slate-400 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Frequently Asked Questions" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-indigo-100 flex items-center justify-center text-[9px] font-bold text-indigo-600 mt-0.5">Q</span>
                    <span className="text-sm font-bold text-slate-900 leading-snug">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-base text-slate-600 leading-[1.65] tracking-[-0.005em]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base text-slate-500 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold text-sm px-7 py-4 rounded-md hover:bg-indigo-700 transition-colors">
              {cta.cta1} →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-bold text-sm px-7 py-4 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs text-slate-400">Dubai, UAE · Karachi, Pakistan · info@agenticsense.co · agenticsense.co</p>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedServices.map((r) => (
              <Link key={r.slug} href={r.slug} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-500 tracking-widest">{r.number}</span>
                  <span className="text-slate-300 group-hover:text-indigo-400 transition-colors text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}