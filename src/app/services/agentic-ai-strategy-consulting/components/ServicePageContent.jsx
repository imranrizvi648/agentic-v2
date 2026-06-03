import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "A Roadmap Built on What Is Actually Buildable in Your Environment.",
  highlight: "Actually Buildable in Your Environment.",
  sub: "Before a line of code, we help you decide where agentic AI creates the most value. We assess readiness, score opportunities by impact and feasibility, and deliver a sequenced roadmap with measurable outcomes \u2014 grounded in your data and systems, not theoretical best practice.",
  cta1: "Book an AI Readiness Session",
  cta2: "See How We Assess Readiness",
  trustLabel: "Delivered across",
  badges: ["GCC", "South Asia", "Europe"],
};

const overview = {
  heading: "Most AI Strategies Look Great on a Slide. Ours Work in Your Environment.",
  lead: "The gap between an AI strategy and working AI is almost always a readiness problem \u2014 not a technology problem. The data is incomplete. The ERP doesn't expose the right APIs. The controls aren't in place.",
  body: "Our strategy and readiness practice delivers an honest, actionable assessment of where agentic AI creates real value in your organisation \u2014 and a sequenced delivery roadmap that separates what is deployable today from what needs to be built first.",
  stats: [
  { val: "Written", label: "Success metrics agreed before build" },
  { val: "ROI", label: "Use cases scored by impact and feasibility" },
  { val: "Now vs.", label: "Deployable today vs. future state" },
  { val: "One", label: "Team from strategy through to production" },
],
  cards: [
  { title: "AI Readiness Assessment", body: "Systematic review of your data quality, ERP API access, controls infrastructure and process maturity \u2014 honest about gaps." },
  { title: "Use-Case Prioritisation", body: "Opportunities scored by ROI, automation feasibility, data readiness and risk \u2014 so you invest where impact is highest." },
  { title: "Target Architecture", body: "Platform selection, integration model and governance framework \u2014 the architecture that supports a five-year AI programme." },
  { title: "Sequenced Delivery Roadmap", body: "A phased execution plan with milestones, success metrics and clear ownership \u2014 ready to move into delivery without a separate planning phase." },
],
};

const benefits = [
  { icon: "\ud83d\uddfa", title: "Investment goes where it creates value", body: "Use cases prioritised by ROI and feasibility \u2014 not vendor recommendations or executive enthusiasm. The highest-value opportunities get resourced first." },
  { icon: "\ud83d\udeab", title: "Failed pilots stopped before they start", body: "We identify the blockers \u2014 data quality, API gaps, control weaknesses \u2014 before they surface as expensive problems mid-build." },
  { icon: "\ud83d\udcd0", title: "Architecture that supports the full programme", body: "Platform and integration decisions made once, correctly \u2014 not retrofitted at each new use case as the programme expands." },
  { icon: "\u2705", title: "Success metrics agreed before spend commits", body: "Every use case in the roadmap has clear, measurable outcomes agreed in writing \u2014 so ROI validation is built in, not argued about after delivery." },
  { icon: "\ud83d\udd17", title: "One team from strategy to production", body: "The same team that assesses your readiness builds your agents. No translation loss between strategy and engineering. No handoff risk." },
  { icon: "\ud83c\udfe6", title: "Board-ready output", body: "The readiness assessment and roadmap are structured to support executive decision-making and board-level investment approval." },
];

const features = [
  { num: "D", title: "Data readiness", body: "Quality, completeness, accessibility and governance of your data. We assess whether your data can support the models and pipelines the use cases require." },
  { num: "S", title: "Systems readiness", body: "ERP API coverage, integration architecture, authentication infrastructure and the technical feasibility of connecting AI to your systems of record." },
  { num: "C", title: "Controls readiness", body: "Audit trail requirements, segregation of duties, approval structures and compliance constraints \u2014 the governance foundations your agents must respect." },
  { num: "P", title: "Process readiness", body: "Documentation quality, exception rate, volume and standardisation of target processes \u2014 determining what can be automated immediately." },
  { num: "01", title: "Use-case discovery", body: "Structured workshops to identify and capture automation opportunities across finance and operations \u2014 from your team's lived experience." },
  { num: "02", title: "ROI and feasibility scoring", body: "Each use case scored on volume, manual effort cost, automation complexity, data readiness and risk \u2014 producing a prioritised shortlist." },
  { num: "03", title: "Platform and architecture recommendation", body: "Target ERP integration model, AI infrastructure, data layer and governance framework \u2014 aligned to your existing landscape." },
  { num: "04", title: "Delivery roadmap and success metrics", body: "Phased execution plan with milestones, resource requirements, dependencies and measurable success criteria \u2014 ready to present to the board." },
];

const process = [
  { num: "01", title: "Landscape Review", body: "We review your ERP, data infrastructure, existing automation and control environment \u2014 without requiring extensive internal preparation." },
  { num: "02", title: "Discovery Workshops", body: "Structured sessions with finance, operations and IT leaders to surface automation opportunities from lived experience." },
  { num: "03", title: "Readiness Scoring", body: "Each opportunity assessed across data, systems, controls and process dimensions \u2014 producing an honest, evidence-based readiness score." },
  { num: "04", title: "Roadmap Design", body: "Prioritised use cases sequenced into a delivery programme with milestones, success metrics and investment stages." },
  { num: "05", title: "Handover to Delivery", body: "The same team moves into the build phase \u2014 strategy and delivery are continuous, not handed off between teams." },
];

const whyUs = {
  heading: "Strategy Built by the Team That Will Execute It",
  points: [
  { title: "Grounded in what is actually buildable", body: "We assess what your ERP APIs, data quality and controls infrastructure can support \u2014 including the parts where the answer is 'not yet'." },
  { title: "One team from assessment to production", body: "The people who assess your environment are the people who build in it. No translation loss. No handoff. No strategy that ignores implementation reality." },
  { title: "Honest about the blockers", body: "If your data quality is poor or your API access is limited, we tell you \u2014 before you commit budget to a build that will fail for the same reasons." },
  { title: "Board-ready deliverables", body: "The readiness assessment and roadmap are structured for executive consumption \u2014 investment stages, success metrics and risk disclosure included." },
],
  box: {
    heading: "Honest Before the Build Starts",
    body: "We will tell you what is deployable today and what needs to be addressed first \u2014 including the difficult parts.",
    stats: [
  { val: "4D", label: "Data, Systems, Controls, Process assessed" },
  { val: "ROI", label: "Every use case scored by impact" },
  { val: "Board", label: "Ready output for investment approval" },
],
  },
};

const faqs = [
  { q: "We already have an AI strategy from a consultancy. Why do we need yours?", a: "Most AI strategies are produced by firms that do not build the systems. They are optimised for the strategy presentation, not for what happens when someone tries to build it. Our assessment is grounded in what your actual ERP APIs, data quality and controls infrastructure can support." },
  { q: "How long does a readiness assessment take?", a: "A focused assessment covering your core finance and operations landscape typically takes two to four weeks, depending on your organisation's complexity and availability. We are explicit about scope and timeline before starting." },
  { q: "What if the assessment shows we are not ready for AI yet?", a: "That is a valid and valuable outcome. We will tell you what needs to be addressed first \u2014 data gaps, API access, process documentation \u2014 and give you a clear path to readiness. An honest assessment that saves you an expensive failed pilot is worth far more than a roadmap that ignores the blockers." },
  { q: "Is the assessment separate from the build, or does the same team continue?", a: "The same team continues. This is a deliberate design choice \u2014 no translation loss between the people who assessed your environment and the people building in it. Strategy and delivery are a continuous engagement, not two separate contracts." },
];

const cta = {
  heading: "Before You Commit Budget to an AI Build, Know Exactly What You Are Committing to.",
  body: "A free readiness session gives you an honest view of where agentic AI creates value in your environment, what the blockers are and what a realistic first step looks like \u2014 at no cost and no obligation to proceed.",
  cta1: "Book a Free Readiness Session",
  cta2: "Download Our Readiness Framework",
};

const relatedServices = [
  { title: "Agentic AI for the Office of Finance", slug: "/services/agentic-ai-finance", number: "01" },
  { title: "AI Governance, Security & MLOps", slug: "/services/ai-governance-security-mlops", number: "09" },
  { title: "Custom AI Agent Development", slug: "/services/custom-ai-agent-development", number: "04" },
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

export default function AgenticAiStrategyConsultingContent() {
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
