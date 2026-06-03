import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Agents You Can Put in Front of an Auditor.",
  highlight: "in Front of an Auditor.",
  sub: "Enterprise AI has to be trustworthy \u2014 not just capable. We build governance, security and operational reliability into every agent from day one, so your automation stays accurate, compliant and under control long after go-live.",
  cta1: "Discuss AI Governance Requirements",
  cta2: "See Our Governance Framework",
  trustLabel: "Standards we build to",
  badges: ["Full Audit Trail", "HITL Controls", "Access-Controlled", "Continuously Monitored"],
};

const overview = {
  heading: "Governance Is Not a Feature. It Is the Foundation.",
  lead: "Most AI projects add governance at the end \u2014 when the audit comes, or when something goes wrong. We build it from phase one. Every agent we ship has audit logging, access controls, human-in-the-loop checkpoints and monitoring active from the first day in production.",
  body: "For enterprises operating in regulated environments \u2014 finance, healthcare, government, energy \u2014 this is not optional. Our governance practice covers the full lifecycle: design, deployment, ongoing operations, retraining and performance management.",
  stats: [
  { val: "100%", label: "Agent actions logged and traceable" },
  { val: "Day 1", label: "Governance active from first production day" },
  { val: "HITL", label: "Human-in-loop on every critical path" },
  { val: "Live", label: "Continuous monitoring and alerting" },
],
  cards: [
  { title: "Human-in-the-Loop Controls", body: "Configurable approval gates and review checkpoints \u2014 so critical agent actions require human confirmation before execution." },
  { title: "Full Audit Logging", body: "Every agent action, tool call, model decision and exception flag logged with timestamps, inputs and outputs \u2014 complete traceability." },
  { title: "Monitoring & Alerting", body: "Real-time monitoring of agent accuracy, exception rates and performance drift \u2014 with alerting before problems reach a material level." },
  { title: "Managed Operations", body: "Ongoing support, model retraining, performance tuning and optimisation \u2014 your agents stay accurate and cost-efficient after launch." },
],
};

const benefits = [
  { icon: "\ud83d\udccb", title: "Audit-ready from day one", body: "Every agent action is logged with inputs, outputs and decision context. When the auditor asks, the trail is already there \u2014 not assembled retrospectively under pressure." },
  { icon: "\ud83d\udd10", title: "Access control that actually works", body: "AES-256 encrypted credentials, role-based access, Entra ID and OCI IAM integration \u2014 your security architecture is respected at every agent operation." },
  { icon: "\ud83c\udf9b", title: "Human authority over critical decisions", body: "High-stakes actions \u2014 posting transactions, approving exceptions, modifying records \u2014 require human confirmation. The agent cannot bypass the gate." },
  { icon: "\ud83d\udce1", title: "Performance problems caught early", body: "Monitoring tracks accuracy, exception rates and throughput in real time \u2014 so drift is caught and corrected before it affects your operations." },
  { icon: "\ud83d\udd04", title: "Agents improve over time", body: "Managed retraining and optimisation post-launch \u2014 your agents get more accurate as your data grows and your processes evolve." },
  { icon: "\u2696\ufe0f", title: "Compliance is demonstrable, not claimed", body: "Governance documentation, audit logs and control evidence are structured to support regulatory requirements \u2014 not assembled in a hurry before an inspection." },
];

const features = [
  { num: "01", title: "Configurable approval gates", body: "Human review required before any action above a defined threshold \u2014 amount, risk category or exception type. Configurable per workflow, per entity." },
  { num: "02", title: "Guardrails and output constraints", body: "Agent output bounded by explicit rules \u2014 preventing actions outside defined parameters, regardless of model output." },
  { num: "03", title: "Full action audit trail", body: "Every agent decision logged: tool called, input provided, output produced, decision made, action taken \u2014 with timestamps and operator identity." },
  { num: "04", title: "Secure credential management", body: "AES-256 encryption for all API keys and credentials. No hard-coded secrets. Rotation supported without rebuild." },
  { num: "05", title: "Role-based access and multi-tenancy", body: "Agent access scoped to the minimum required permissions. Multi-tenant isolation enforced at data and credential layers." },
  { num: "06", title: "Real-time performance monitoring", body: "Accuracy tracking, exception rate monitoring, throughput dashboards and latency alerting \u2014 live from day one of production." },
  { num: "07", title: "Model drift detection", body: "Statistical monitoring of model output distribution \u2014 alerting when accuracy begins to drift before it affects operational quality." },
  { num: "08", title: "Managed retraining and optimisation", body: "Scheduled and trigger-based retraining pipelines. Performance reports and optimisation recommendations delivered as part of managed support." },
];

const process = [
  { num: "01", title: "Design Governance", body: "Approval gate architecture, audit trail design and access control model \u2014 agreed before build begins, not added at the end." },
  { num: "02", title: "Build Controls In", body: "Guardrails, HITL checkpoints, credential management and logging built into the agent \u2014 not layered on top as an afterthought." },
  { num: "03", title: "Validate Governance", body: "Pre-launch testing of every control: approval gates, logging completeness, access scope and exception handling \u2014 documented." },
  { num: "04", title: "Launch with Monitoring", body: "Real-time dashboards, alerting and exception review workflows active from the first day in production." },
  { num: "05", title: "Operate & Improve", body: "Ongoing monitoring, drift detection, retraining and performance optimisation \u2014 the agent improves and compliance stays current." },
];

const whyUs = {
  heading: "Governance Built In \u2014 Not Bolted On",
  points: [
  { title: "Governance from phase one \u2014 always", body: "We do not add governance after the build is done. Every design decision \u2014 approval gates, audit trail structure, access control \u2014 is made before a line of code is written." },
  { title: "Every action is logged \u2014 by design", body: "Audit trails are not a reporting feature \u2014 they are a core architectural requirement. Every agent action is logged with full decision context from day one." },
  { title: "Multi-tenant isolation by architecture", body: "Tenant data, credentials and audit trails are separated at the architecture level \u2014 not by configuration. Cross-tenant access is not possible, regardless of user action." },
  { title: "Managed operations keeps governance current", body: "Retraining, performance tuning and compliance reviews are ongoing \u2014 not a one-time delivery. Your agents stay accurate and your governance stays current." },
],
  box: {
    heading: "Audit-Ready on Day One",
    body: "Governance built in from phase one costs a fraction of governance retrofitted under audit pressure.",
    stats: [
  { val: "100%", label: "Actions logged with full context" },
  { val: "Day 1", label: "Controls active from first production day" },
  { val: "AES", label: "256-bit credential encryption always" },
],
  },
};

const faqs = [
  { q: "How do we demonstrate to regulators that AI actions are controlled and accountable?", a: "Every agent action in our builds is logged with the full decision context \u2014 input, model response, tool called, output produced and any human approval obtained. This log is structured for export in a format that supports regulatory review and internal audit." },
  { q: "What happens if an agent makes an error in production?", a: "The monitoring system alerts on accuracy anomalies in real time. High-risk actions require human approval before execution, so an error in agent reasoning cannot propagate to a system-of-record action without review. We also maintain rollback procedures and incident response protocols for every deployment." },
  { q: "Does the governance framework work across multi-tenant deployments?", a: "Yes. Multi-tenant isolation is a core design requirement \u2014 tenant data, credentials and audit trails are separated at the architecture level, with no cross-tenant data access possible regardless of user action." },
  { q: "Can we set different approval thresholds for different transaction types?", a: "Yes. Approval gates are configurable by transaction amount, exception type, vendor category, risk flag and workflow stage. Your control matrix is implemented in the agent architecture \u2014 the system enforces your rules, not a generic template." },
  { q: "What does ongoing managed support include?", a: "Managed support covers production monitoring and alerting, model performance reporting, scheduled retraining, compatibility checks ahead of ERP updates, and a defined response SLA for production incidents. The scope is agreed in writing before go-live." },
];

const cta = {
  heading: "Your Agents Will Be in Front of an Auditor Eventually. Build Them So That Is Not a Problem.",
  body: "Governance built in from day one costs a fraction of governance retrofitted under audit pressure. Tell us your compliance environment and control requirements \u2014 we will show you how we would build your agents to meet them.",
  cta1: "Discuss Governance Requirements",
  cta2: "Download Our Control Framework",
};

const relatedServices = [
  { title: "Agentic AI for the Office of Finance", slug: "/services/agentic-ai-finance", number: "01" },
  { title: "Custom AI Agent Development", slug: "/services/custom-ai-agent-development", number: "04" },
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

export default function AiGovernanceSecurityMlopsContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black text-indigo-400 tracking-widest uppercase">09</span>
            <span className="w-4 h-px bg-indigo-300" />
            <span className="text-xs font-bold text-slate-500 tracking-wide uppercase">AI Governance · Security · MLOps</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-indigo-600">{hero.highlight}</span>{after}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">{hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="#" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-sm px-6 py-3.5 rounded-md hover:bg-indigo-700 transition-colors">
              {hero.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 bg-white text-slate-700 font-bold text-sm px-6 py-3.5 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
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
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <SectionLabel text="Service Overview" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
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
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Benefits" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bg-white p-7 hover:bg-indigo-50/30 transition-colors ${i % 3 !== 2 ? "lg:border-r border-slate-100" : ""} ${i < 3 ? "border-b border-slate-100" : ""}`}
              >
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-sm font-black text-slate-900 mb-2 leading-snug">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Capabilities" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-12 max-w-2xl leading-tight">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
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
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Methodology" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-14 max-w-2xl leading-tight">
            How We Deliver
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-100" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
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
                <h3 className="text-lg font-extrabold mb-3">{whyUs.box.heading}</h3>
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
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel text="Frequently Asked Questions" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-12 leading-tight">
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
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Get Started</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
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
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
