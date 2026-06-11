import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Move from Reporting What Happened to Recommending What to Do Next.",
  highlight: "Recommending What to Do Next.",
  sub: "Your enterprise data holds patterns, anomalies and opportunities that static reports will never surface. We build the pipelines, models and decision-support agents that turn your historical data into forward-looking intelligence.",
  cta1: "Talk About Your Data Strategy",
  cta2: "See Analytics in Action",
  trustLabel: "Built on",
  badges: ["Microsoft Fabric", "Oracle Analytics", "Azure AI Foundry", "Your Data Stack"],
};

const overview = {
  heading: "Intelligence That Acts \u2014 Not Just Reports That Inform",
  lead: "Dashboards tell you what happened. Predictive models tell you what will happen. Decision-support agents tell you what to do about it. We build all three \u2014 starting from your existing data sources.",
  body: "Our data intelligence practice covers the full stack: clean pipelines on Microsoft Fabric and your data infrastructure, predictive models trained on your historical data, anomaly detection across financial and operational flows, and agent-driven recommendations that surface the right action to the right person.",
  stats: [
  { val: "Live", label: "Real-time anomaly detection" },
  { val: "FWD", label: "Predictive \u2014 not just descriptive" },
  { val: "Full", label: "Pipeline from raw data to decision" },
  { val: "Exec", label: "Leadership-grade dashboards" },
],
  cards: [
  { title: "Executive Dashboards", body: "Real-time performance tracking for leadership \u2014 financial, operational and strategic KPIs in one governed view." },
  { title: "Predictive Analytics", body: "Cash flow forecasting, demand prediction and risk modelling trained on your historical data \u2014 not industry averages." },
  { title: "Anomaly Detection", body: "Automated flagging of unusual patterns across financial and operational flows \u2014 before they become material issues." },
  { title: "Decision-Support Agents", body: "Agents that recommend the next action \u2014 not just surface the data \u2014 so your team spends time on judgement, not investigation." },
],
};

const benefits = [
  { icon: "", title: "From reactive to proactive", body: "Anomalies, shortfalls and opportunities are surfaced before they become problems \u2014 giving your team time to act rather than respond." },
  { icon: "", title: "Forecasts built on your data", body: "Predictive models trained on your historical patterns \u2014 not industry benchmarks \u2014 deliver forecasts that reflect your actual business dynamics." },
  { icon: "", title: "Leadership sees the signal, not the noise", body: "Executive dashboards surface the metrics that matter, with drill-down to the transaction level \u2014 without requiring an analyst to prepare each view." },
  { icon: "", title: "Recommendations, not just reports", body: "Decision-support agents go one step further \u2014 'here is the anomaly, here is the likely cause, here is the recommended action' \u2014 reducing cognitive load." },
  { icon: "", title: "Connects your entire data landscape", body: "Pipelines draw from your ERP, CRM, operational systems and external data sources \u2014 a unified view, not siloed reports from each system." },
  { icon: "", title: "Built on enterprise-grade infrastructure", body: "Microsoft Fabric for data lakehouse architecture and pipelines, Azure AI Foundry for model services \u2014 platforms your IT team can govern." },
];

const features = [
  { num: "01", title: "Data engineering and pipelines", body: "Clean, governed pipelines from source systems to analytics layer \u2014 on Microsoft Fabric, Azure or your existing data infrastructure." },
  { num: "02", title: "Executive performance dashboards", body: "Real-time operational and financial dashboards designed for leadership consumption \u2014 with drill-down to transaction level." },
  { num: "03", title: "Cash flow forecasting", body: "Predictive cash flow models trained on your AR/AP data \u2014 surfacing funding requirements and surplus positions weeks in advance." },
  { num: "04", title: "Demand and inventory prediction", body: "Forecasting models for inventory optimisation and demand planning \u2014 integrated with your ERP purchasing and supply chain data." },
  { num: "05", title: "Financial anomaly detection", body: "Automated flagging of unusual journal entries, duplicate payments, variance spikes and outlier transactions \u2014 before period end." },
  { num: "06", title: "Operational exception detection", body: "Monitoring across fulfilment, procurement and service delivery data \u2014 flagging performance deviations in real time." },
  { num: "07", title: "Decision-support agent layer", body: "Agents that analyse, synthesise and recommend \u2014 turning detected anomalies or forecast deviations into actionable guidance." },
  { num: "08", title: "Microsoft Fabric architecture", body: "Data lakehouse design, OneLake configuration, Dataflow pipelines and Fabric workspace governance \u2014 delivered and documented." },
];

const process = [
  { num: "01", title: "Data Landscape", body: "We audit your data sources, quality, granularity and governance posture \u2014 identifying what is usable now and what needs to be fixed." },
  { num: "02", title: "Pipeline Build", body: "Clean, governed pipelines from your ERP, CRM and operational systems into a unified data layer \u2014 on Fabric or your existing infrastructure." },
  { num: "03", title: "Model Development", body: "Predictive and anomaly-detection models trained on your historical data \u2014 with clear documentation of assumptions and limitations." },
  { num: "04", title: "Dashboard & Agent Layer", body: "Dashboards for your teams and decision-support agents that surface recommendations \u2014 not just data." },
  { num: "05", title: "Monitor & Retrain", body: "Ongoing model performance tracking, drift detection and retraining \u2014 so accuracy improves as your data grows." },
];

const whyUs = {
  heading: "From Data to Decisions \u2014 Not Just Data to Dashboards",
  points: [
  { title: "Decision-support agents, not just BI tools", body: "We go beyond dashboards. Our decision-support agents surface the anomaly, explain the likely cause and recommend the action \u2014 reducing time from insight to response." },
  { title: "Models trained on your data", body: "Predictive models are trained on your historical patterns, not industry benchmarks. Forecasts reflect your business dynamics \u2014 not someone else's average." },
  { title: "Honest about data quality", body: "We tell you what your data can and cannot support at the start. No false promises about accuracy from poor-quality inputs." },
  { title: "Enterprise infrastructure, not experimental tools", body: "Microsoft Fabric, Azure AI Foundry and your existing data stack \u2014 production-grade platforms that your IT and governance teams can manage." },
],
  box: {
    heading: "Proactive Intelligence",
    body: "Problems surfaced before they become material. Opportunities identified before they close. Recommendations at the point of decision.",
    stats: [
  { val: "Live", label: "Real-time anomaly detection active" },
  { val: "FWD", label: "Predictive modelling on your data" },
  { val: "Exec", label: "Leadership-grade dashboards included" },
],
  },
};

const faqs = [
  { q: "Our data quality is poor. Do we need to fix that before starting?", a: "Not entirely \u2014 but we will be honest about what your data can and cannot support at the start. We identify data quality issues as part of the landscape audit and can address them as part of the engagement." },
  { q: "Do we need Microsoft Fabric or Azure, or can you work with our existing data platform?", a: "We work with your existing infrastructure. Microsoft Fabric and Azure AI Foundry are our preferred platforms for new data architectures, but we have experience across Snowflake, Databricks, Redshift and on-premise data warehouses." },
  { q: "How do decision-support agents differ from a standard dashboard?", a: "A dashboard shows you a number. A decision-support agent shows you the number, explains the likely cause, compares it to your historical pattern and suggests a specific action \u2014 reducing the time from 'I see the problem' to 'I know what to do about it'." },
  { q: "How quickly can we see early results?", a: "An initial executive dashboard over your existing ERP data can typically be live within weeks. Predictive models require more historical data and take longer to validate \u2014 we will set clear expectations on timeline by use case in the discovery phase." },
];

const cta = {
  heading: "What Decision Would Change If You Had 30-Day Visibility Instead of Last Month's Report?",
  body: "Start with that question. We will show you what is achievable against your current data landscape \u2014 and what the path from static reporting to forward-looking intelligence looks like in your environment.",
  cta1: "Book a Data Intelligence Session",
  cta2: "See the Analytics Stack",
};

const relatedServices = [
  { title: "Conversational AI & Enterprise Copilots", slug: "/services/conversational-ai-enterprise-copilots", number: "05" },
  { title: "Agentic AI for the Office of Finance", slug: "/services/agentic-ai-finance", number: "01" },
  { title: "Agentic AI Strategy & Readiness Consulting", slug: "/services/agentic-ai-strategy-consulting", number: "08" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-0.5 bg-indigo-500" />
      <span className="text-xs font-black uppercase tracking-widest text-indigo-600">{text}</span>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function DataIntelligenceDecisionAnalyticsContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-brand-primary leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-indigo-600">{hero.highlight}</span>{after}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">{hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="#" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md hover:bg-indigo-700 transition-colors">
              {hero.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 bg-white text-slate-700 font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              {hero.cta2}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{hero.trustLabel}</span>
            {hero.badges.map((b) => (
              <span key={b} className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">{b}</span>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight tracking-tight mb-5">
                {overview.heading}
              </h2>
              <p className="text-base text-indigo-700 font-semibold leading-relaxed mb-4">{overview.lead}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">{overview.body}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-indigo-600 leading-none mb-1">{s.val}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-wide text-slate-800 mb-2">{c.title}</h4>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bg-white p-7 hover:bg-indigo-50/30 transition-colors ${i % 3 !== 2 ? "lg:border-r border-slate-100" : ""} ${i < 3 ? "border-b border-slate-100" : ""}`}
              >
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 flex gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <span className="text-[10px] font-black text-indigo-600">{f.num}</span>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">
            How We Deliver
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-100" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {process.map((step) => (
                <div key={step.num} className="relative flex flex-col items-start md:items-center md:text-center">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-xs font-black text-indigo-600">{step.num}</span>
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wide text-slate-800 mb-2">{step.title}</h4>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-8 leading-tight">
                {whyUs.heading}
              </h2>
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
                <h3 className="text-lg font-bold text-brand-primary mb-3">{whyUs.box.heading}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span className="text-xl font-extrabold text-indigo-300">{s.val}</span>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 leading-tight">
            Questions We Hear Every Time
          </h2>
          <div className="divide-y divide-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-indigo-100 flex items-center justify-center text-[9px] font-black text-indigo-600 mt-0.5">Q</span>
                    <span className="text-sm font-bold text-slate-900 leading-snug">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-sm text-slate-500 leading-relaxed">{f.a}</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight mb-5">
            {cta.heading}
          </h2>
          <p className="text-base text-slate-500 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold text-sm px-7 py-4 rounded-md hover:bg-indigo-700 transition-colors">
              {cta.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-bold text-sm px-7 py-4 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs text-slate-400">Dubai, UAE · Karachi, Pakistan · info@agenticsense.ai · agenticsense.ai</p>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedServices.map((r) => (
              <Link key={r.slug} href={r.slug} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-indigo-500 tracking-widest">{r.number}</span>
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
