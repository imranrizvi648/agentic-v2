"use client";

import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Finance Team Shouldn't Be Keying the Same Invoice Twice.",
  highlight: "Keying the Same Invoice Twice.",
  sub: "We deploy AI agents that own Accounts Payable, Accounts Receivable, General Ledger and month-end close \u2014 end to end, natively inside your ERP. The agent finishes the job. No manual steps in the middle. No exceptions batch that sits for days.",
  cta1: "Book a Free Finance Assessment",
  cta2: "See How Agents Work",
  trustLabel: "Built for enterprise on",
  badges: ["SAP Business One", "Oracle Fusion Cloud", "Microsoft Fabric"],
};

const overview = {
  heading: "Autonomous Finance \u2014 Built at the Level of the Posting Logic",
  lead: "Finance automation fails when it stops at extraction. Our agents go all the way \u2014 they capture, validate, match, post and reconcile inside your ERP \u2014 so your team reviews exceptions, not data.",
  body: "This is our flagship practice. We understand AP, AR, GL and the month-end close at the level of the posting logic, matching rules and intercompany controls \u2014 not the slide. Every agent ships with full audit logging, configurable approval gates and human-in-the-loop review on the exceptions that genuinely need judgement.",
  stats: [
    { val: "100%", label: "Actions audit-logged" },
    { val: "3-Way", label: "PO/GRN match standard" },
    { val: "0", label: "Manual ERP steps mid-workflow" },
    { val: "Weeks", label: "Pilot to production" },
  ],
  cards: [
    { title: "AP \u2014 Accounts Payable", body: "Invoice capture, 2- and 3-way PO/GRN matching, exception handling and straight-through posting to your ERP." },
    { title: "AR \u2014 Accounts Receivable", body: "Invoice generation, collections follow-up, cash application and dispute triage \u2014 all agent-driven." },
    { title: "GL & Reconciliations", body: "Journal preparation, intercompany matching and balance-sheet reconciliation with variance flagging." },
    { title: "Month-End Close", body: "Task orchestration, accruals, variance analysis and close-status reporting \u2014 the close your team has been waiting for." },
  ],
};

const benefits = [
  { icon: "", title: "Processing time cut \u2014 not trimmed", body: "Invoices that moved in days move in minutes. Not because someone works faster, but because the agent never stops between steps." },
  { icon: "", title: "Every action is auditable", body: "Every decision, match, post and exception flag is logged. You have a complete audit trail that survives the next compliance review." },
  { icon: "", title: "Human attention goes where it matters", body: "Your team reviews the exceptions that genuinely need judgement. The rest \u2014 the 80\u201390% that follows the rules \u2014 the agent handles without interruption." },
  { icon: "", title: "Month-end closes faster", body: "Close-orchestration agents prepare journals, reconcile and surface variances while the period is still open \u2014 not after it's too late." },
  { icon: "", title: "No brittle middleware", body: "Built natively on SAP Service Layer and Oracle Fusion REST APIs. Your automation survives the next ERP upgrade without a rebuild." },
  { icon: "", title: "Multi-entity ready", body: "One deployment can span multiple business units, currencies and entity structures \u2014 with consolidated reporting built in." },
];

const features = [
  { num: "01", title: "Multi-channel invoice intake", body: "Email webhook, web upload and API ingestion \u2014 the agent captures from wherever invoices arrive." },
  { num: "02", title: "Vision-AI data extraction", body: "High-accuracy extraction from PDFs, scanned documents and structured forms \u2014 no templates required." },
  { num: "03", title: "2-way and 3-way matching", body: "Automated PO and GRN matching with configurable tolerances and vendor-specific rules." },
  { num: "04", title: "Straight-through ERP posting", body: "Clean transactions post directly to SAP Business One or Oracle Fusion \u2014 no intermediary staging." },
  { num: "05", title: "Exception queues with context", body: "Exceptions surface with the matching evidence, not just a flag \u2014 so reviewers decide faster." },
  { num: "06", title: "Collections and cash application", body: "AR agents follow up on outstanding invoices, apply cash receipts and triage disputes without a human touchpoint." },
  { num: "07", title: "Journal and accruals automation", body: "GL agents draft recurring journals, calculate accruals and flag variance against budget or prior period." },
  { num: "08", title: "Close-status dashboard", body: "Real-time visibility of close progress, open items and outstanding reconciliations \u2014 for finance leadership." },
];

const process = [
  { num: "01", title: "Discover", body: "We map your AP/AR/GL workflows, volumes and pain points, and separate what is deployable immediately from what needs to be built." },
  { num: "02", title: "Design", body: "Target architecture, matching rules, approval gates, exception handling logic and success metrics \u2014 agreed in writing before build." },
  { num: "03", title: "Build", body: "Agent development against your real ERP data and integration constraints. We prove it works in your environment, not a sandbox." },
  { num: "04", title: "Deploy", body: "Production go-live with monitoring, audit logging, human-in-the-loop checkpoints and safeguards active from day one." },
  { num: "05", title: "Scale", body: "Expand coverage across AP, AR, GL, close and into adjacent processes \u2014 with continuous tuning and performance reporting." },
];

const whyUs = {
  heading: "Finance-First, ERP-Native \u2014 and Accountable for Results",
  points: [
    { title: "We understand the posting logic, not just the language", body: "We have built production agents that post invoices, apply cash and prepare journals inside SAP and Oracle. That depth is not available from a general AI consultancy." },
    { title: "No manual steps \u2014 by design, not by aspiration", body: "Full end-to-end automation is a contractual standard on every finance engagement. The agent finishes the workflow." },
    { title: "Official APIs \u2014 no fragile middleware", body: "We build on SAP Service Layer and Oracle Fusion REST APIs. Your automation survives upgrades because it uses the same interfaces SAP and Oracle maintain." },
    { title: "One team from roadmap to production", body: "No handoffs between strategy and build teams. The people who design your agent build it, deploy it and support it post-launch." },
  ],
  box: {
    heading: "Built for Your Compliance Environment",
    body: "Enterprise finance has non-negotiable requirements: segregation of duties, audit trails, access controls and regulatory reporting. We build these in from day one \u2014 not retrofitted before the audit.",
    stats: [
      { val: "100%", label: "Agent actions logged and traceable" },
      { val: "0", label: "Third-party connectors in our builds" },
      { val: "HITL", label: "Human-in-loop on every exception" },
    ],
  },
};

const faqs = [
  { q: "Do your AP agents need our team to manually approve every invoice?", a: "No. Invoices that meet your matching rules and tolerance thresholds post straight through without any human action. Only genuine exceptions \u2014 mismatches, missing POs, tolerance overruns \u2014 are routed for review, with the evidence attached so decisions take seconds, not minutes." },
  { q: "Which ERPs do you integrate with for finance automation?", a: "Our primary finance platforms are SAP Business One (via Service Layer REST API and SAP HANA), Oracle Fusion Cloud (via REST APIs and OCI GenAI Agents) and Microsoft Fabric. We also support NetSuite, Odoo and Zoho Books for AP/AR workflows." },
  { q: "How do you handle multi-entity or multi-currency environments?", a: "We build for your entity structure from the start \u2014 including intercompany transactions, currency revaluation and consolidated reporting requirements. Multi-entity setups are a standard delivery pattern, not a custom add-on." },
  { q: "What happens if the agent encounters a document it can't process?", a: "The agent routes it to your exception queue with context \u2014 what it extracted, what it couldn't verify, and which rule it failed against. Your team makes the call with full information. The agent never discards a document silently." },
  { q: "Can we start with just AP before expanding to AR and close?", a: "Yes. Most engagements start with one high-volume, well-defined workflow \u2014 typically AP \u2014 prove value in production, then expand. You are never committed to a full rollout before seeing results." },
];

const cta = {
  heading: "Tell Us the Workflow That Costs Your Finance Team the Most Time.",
  body: "In a free Finance Automation Assessment, we will map your single highest-value opportunity, sketch how an agent handles it inside your ERP, and give you an honest view of effort, impact and what is deployable today \u2014 at no cost and no obligation.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo",
};

const relatedServices = [
  { title: "Enterprise ERP & CRM-Native AI Integration", slug: "/services/erp-crm-ai-integration", number: "02" },
  { title: "Intelligent Document Processing & Invoice Automation", slug: "/services/intelligent-document-processing", number: "03" },
  { title: "AI Governance, Security & MLOps", slug: "/services/ai-governance-security-mlops", number: "09" },
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

export default function AgenticAiFinanceContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main>

      {/* ── Hero (Clean Premium Color Theme - No Particles/Canvas/SVGs) ─────── */}
      <section className="relative w-full min-h-[75vh] bg-[#1a194d] overflow-hidden flex items-center font-sans pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        
        {/* Subtle Ambient Radial Glow for Premium Contrast */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(98,94,255,0.12),transparent_60%)]"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-[#9482ff]">{hero.highlight}</span>{after}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl mb-10">
            {hero.sub}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-[#625eff] text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md hover:bg-[#4b47e6] transition-colors shadow-lg shadow-indigo-950/50">
              {hero.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all">
              {hero.cta2}
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">
              {hero.trustLabel}
            </span>
            {hero.badges.map((b) => (
              <span key={b} className="text-xs font-semibold text-white/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {b}
              </span>
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
          <p className="text-xs text-slate-400">Dubai, UAE · Karachi, Pakistan · info@agenticsense.co · agenticsense.ai</p>
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