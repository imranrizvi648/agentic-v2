import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "The Same Discipline That Transformed Finance \u2014 Applied Across Your Entire Back Office.",
  highlight: "Applied Across Your Entire Back Office.",
  sub: "Finance is where we go deepest. But the same agentic operating model \u2014 end to end, integrated with systems of record, with full audit trails \u2014 travels. We extend it into procurement, HR, supply chain and IT operations.",
  cta1: "Map Your Automation Opportunities",
  cta2: "See the Finance Approach First",
  trustLabel: "Covering operations across",
  badges: ["Procurement", "HR & Onboarding", "Supply Chain", "IT Operations"],
};

const overview = {
  heading: "Routine Back-Office Work Drains Your Team. Agents End That.",
  lead: "The same repetitive, rules-based work that costs finance teams weeks exists across your operations \u2014 approval chains that span systems, document handling that could be automated, routing decisions that follow predictable logic.",
  body: "We build agents that own these end to end, always integrated with your systems of record. Every BPA engagement follows the same standard as our finance work: full automation, no manual steps in the middle of a workflow, clean integration with the ERP and complete audit trails.",
  stats: [
  { val: "4+", label: "Back-office domains covered" },
  { val: "Zero", label: "Manual steps mid-workflow \u2014 hard standard" },
  { val: "ERP", label: "Integrated with your systems of record" },
  { val: "Full", label: "Audit trail on every automated action" },
],
  cards: [
  { title: "Procurement", body: "Requisition processing, approval routing and supplier workflow automation \u2014 connected to your ERP purchasing module." },
  { title: "HR & Onboarding", body: "Onboarding document handling, policy-driven approval workflows and employee record updates \u2014 without manual form chasing." },
  { title: "Supply Chain", body: "Order processing, inventory monitoring, fulfilment tracking and supplier communication \u2014 end to end, ERP-native." },
  { title: "IT & Operations", body: "Ticket triage, routing, routine task execution and cross-system notification workflows \u2014 agents that own the process, not just pass it on." },
],
};

const benefits = [
  { icon: "\u23f3", title: "Turnaround time cut dramatically", body: "Approval workflows that took days move in hours. Processes that required email chains and manual chasing complete end to end \u2014 automatically." },
  { icon: "\ud83d\udccb", title: "Consistent process execution", body: "Rules are applied the same way every time \u2014 no exceptions driven by workload or individual interpretation. Compliance is a function of the system, not the person." },
  { icon: "\ud83d\udd17", title: "Systems of record stay current", body: "Agents update your ERP, HRMS and ITSM as they work \u2014 so downstream reports and dashboards reflect reality, not yesterday's manual update." },
  { icon: "\ud83c\udfaf", title: "Your people focus on decisions, not administration", body: "Routing, chasing, logging and status updates are handled by the agent. Your team's attention goes to the judgements that require it." },
  { icon: "\ud83d\udcca", title: "Cross-process visibility", body: "When agents handle the work, the data is clean. You get genuine process analytics \u2014 cycle times, bottlenecks, exception rates \u2014 because the workflow is instrumented." },
  { icon: "\ud83d\udd04", title: "Extends your finance automation investment", body: "Procurement agents connect directly to your AP workflow. HR automation feeds into your GL. The disciplines reinforce each other across functions." },
];

const features = [
  { num: "PR", title: "Procurement \u2014 Requisition to PO", body: "Automated requisition intake, budget validation, approval routing and PO creation \u2014 integrated with your ERP purchasing module." },
  { num: "PR", title: "Procurement \u2014 Supplier Workflows", body: "Supplier onboarding document handling, communication and status updates \u2014 with clean records in your vendor master." },
  { num: "HR", title: "HR \u2014 Employee Onboarding", body: "Document collection, policy acknowledgement routing and system access provisioning \u2014 completed before the employee's first day." },
  { num: "HR", title: "HR \u2014 Policy-Driven Approvals", body: "Leave requests, expense pre-approvals and role change workflows \u2014 routed according to your policy rules, not someone's memory of them." },
  { num: "SC", title: "Supply Chain \u2014 Order Processing", body: "Order confirmation, inventory allocation and fulfilment triggering \u2014 with status visible across your ERP and customer-facing systems." },
  { num: "SC", title: "Supply Chain \u2014 Inventory Monitoring", body: "Automated replenishment triggers, supplier alerts and exception-based inventory management \u2014 before stockouts become a crisis." },
  { num: "IT", title: "IT \u2014 Ticket Triage and Routing", body: "Incoming tickets classified, prioritised and routed to the right queue \u2014 with context extracted and attached, not lost in the email thread." },
  { num: "IT", title: "Cross-System Approval Workflows", body: "Approvals that span SAP, Salesforce and your ITSM platform \u2014 with a single audit trail covering every system the workflow touches." },
];

const process = [
  { num: "01", title: "Process Mapping", body: "We document the workflow end to end, identify where manual steps exist and prioritise by volume, cost and automation feasibility." },
  { num: "02", title: "Integration Design", body: "Every system the workflow touches is mapped \u2014 ERP, HRMS, ITSM, email \u2014 and the integration architecture is designed before build." },
  { num: "03", title: "Agent Build", body: "Development against your real process rules, approval hierarchies and system constraints \u2014 no demo-only builds." },
  { num: "04", title: "Parallel Run & Go-Live", body: "Agents run alongside existing processes during validation, then go live with monitoring and human oversight active." },
  { num: "05", title: "Expand & Optimise", body: "Additional process coverage, performance tuning and cross-function integration as the programme matures." },
];

const whyUs = {
  heading: "One Operating Standard \u2014 Whatever the Function",
  points: [
  { title: "Finance-grade discipline applied everywhere", body: "The same audit trail, exception handling and end-to-end automation standards we apply to AP are applied to procurement, HR, supply chain and IT." },
  { title: "Cross-function integration from the start", body: "Procurement agents connect to AP. HR feeds the GL. We design the integration landscape holistically \u2014 not one function at a time." },
  { title: "No manual steps \u2014 in any domain", body: "Full end-to-end automation is our standard across every BPA engagement. The agent finishes the task \u2014 it does not hand back halfway." },
  { title: "Genuine process audit before we build", body: "We do not build without a clear, validated process spec. Automation without process clarity fails \u2014 we identify gaps before they become defects." },
],
  box: {
    heading: "The Same Standard Across Every Function",
    body: "Finance-grade automation applied to procurement, HR, supply chain and IT \u2014 not a watered-down version for non-finance teams.",
    stats: [
  { val: "4+", label: "Back-office domains covered" },
  { val: "Zero", label: "Manual steps mid-workflow always" },
  { val: "Full", label: "Audit trail on every action" },
],
  },
};

const faqs = [
  { q: "Do we need to automate finance first before extending to other functions?", a: "No. We can start in any domain \u2014 procurement, HR, supply chain or IT \u2014 independently of your finance automation roadmap. However, if you have existing finance agents, we will integrate with them from the start to maximise cross-function value." },
  { q: "Can agents handle approval workflows that span multiple departments?", a: "Yes. Multi-step, multi-department approval workflows are a standard delivery pattern. The agent routes based on your rules, handles escalations and keeps all parties notified \u2014 with a single audit trail across every touchpoint." },
  { q: "What happens when a process exception doesn't fit the agent's rules?", a: "The agent routes it to the appropriate human with full context \u2014 what it has done so far, what it couldn't resolve and what decision is needed. No exception is discarded, ignored or silently stalled." },
  { q: "How do you handle processes that are only partially documented?", a: "We start with a process-mapping engagement to document and validate the workflow before we build. Automation without a clear process spec fails \u2014 we do not skip this step, and we will flag gaps before they become defects." },
];

const cta = {
  heading: "Which Back-Office Process Drains the Most Time From Your Organisation?",
  body: "Start there. In a free session, we'll map the highest-value automation opportunity in your operations landscape, show you what an end-to-end agent looks like against your real workflow, and give you an honest estimate of effort and impact.",
  cta1: "Book a Free Process Assessment",
  cta2: "See the Finance Automation Standard",
};

const relatedServices = [
  { title: "Agentic AI for the Office of Finance", slug: "/services/agentic-ai-finance", number: "01" },
  { title: "Intelligent Document Processing & Invoice Automation", slug: "/services/intelligent-document-processing", number: "03" },
  { title: "Enterprise ERP & CRM-Native AI Integration", slug: "/services/erp-crm-ai-integration", number: "02" },
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

export default function BusinessProcessAutomationContent() {
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
