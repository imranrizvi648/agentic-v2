import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "When Off-the-Shelf Won't Fit, We Engineer It From First Principles.",
  highlight: "We Engineer It From First Principles.",
  sub: "We design and ship custom, tool-using agents and multi-agent systems that plan, act and verify \u2014 orchestrated for reliability, wrapped in the controls an enterprise requires, built on the model that fits your environment.",
  cta1: "Discuss Your Agent Requirements",
  cta2: "See Our Build Stack",
  trustLabel: "Built on",
  badges: ["LangGraph", "FastAPI", "Claude / GPT / Gemini", "OCI & Azure"],
};

const overview = {
  heading: "Agents Built for Your Workflows \u2014 Not Built Around Someone Else's",
  lead: "Every enterprise has workflows that don't fit the template. The approval chain that spans four systems. The reconciliation that needs to reason across two data sources. The onboarding process that branches across seven conditions. We build the agents that handle these.",
  body: "Our custom agent development practice covers the full engineering spectrum \u2014 from single task agents to multi-agent orchestration systems with planning, tool use, retrieval, verification and human-in-the-loop controls. Model-flexible. Enterprise-hardened. Shipped to production.",
  stats: [
  { val: "Multi", label: "Agent orchestration with LangGraph" },
  { val: "4+", label: "LLM families supported" },
  { val: "HITL", label: "Human review on every critical path" },
  { val: "RAG", label: "Retrieval over your own data" },
],
  cards: [
  { title: "Multi-Agent Orchestration", body: "LangGraph-based orchestration with defined agent roles, tool routing, state management and failure handling." },
  { title: "Tool & System Integration", body: "Agents that use your real tools \u2014 ERP APIs, databases, search, email, calendars, external services." },
  { title: "Retrieval-Augmented Reasoning", body: "RAG pipelines over your own documents, policies and data \u2014 grounded responses, not hallucinated ones." },
  { title: "Model-Flexible Architecture", body: "Built to run on Anthropic Claude, OpenAI GPT, Google Gemini, OCI or Azure models \u2014 your choice, your cost profile." },
],
};

const benefits = [
  { icon: "\ud83d\udd27", title: "Fits your exact workflow", body: "No compromises on edge cases, approval structures or data formats. The agent is designed for your process, not the other way around." },
  { icon: "\ud83c\udff0", title: "Enterprise controls from day one", body: "Guardrails, approval gates, human-in-the-loop checkpoints and retry logic are not add-ons \u2014 they are part of the initial design." },
  { icon: "\ud83e\udde0", title: "Reasons over your own data", body: "RAG pipelines give agents access to your policies, historical records and domain knowledge \u2014 no general-knowledge hallucination risk." },
  { icon: "\ud83d\udd00", title: "Multi-agent coordination", body: "Complex workflows split across specialised agents \u2014 each owns its domain, passes context cleanly and verifies before acting." },
  { icon: "\ud83d\udcb0", title: "Model cost is your call", body: "We build model-flexible architectures. As models improve and costs drop, your agent runs on a more capable and cheaper model without re-engineering." },
  { icon: "\ud83d\udce6", title: "Fully owned by you", body: "The code is yours. Deployed on your infrastructure. No vendor dependency, no per-seat licensing and no black-box behaviour." },
];

const features = [
  { num: "01", title: "LangGraph multi-agent orchestration", body: "Directed graph-based agent workflows with explicit state, conditional routing and cycle handling \u2014 production-grade, not experimental." },
  { num: "02", title: "FastAPI backend architecture", body: "Async FastAPI services for agent execution, tool integration and external API calls \u2014 high-performance, maintainable, containerised." },
  { num: "03", title: "Vector search and RAG pipelines", body: "pgvector or dedicated vector stores for document retrieval \u2014 giving agents access to your proprietary knowledge base." },
  { num: "04", title: "Tool use and function calling", body: "Agents that call real APIs, run database queries, read files, send emails and update records \u2014 not just generate text." },
  { num: "05", title: "Human-in-the-loop checkpoints", body: "Configurable approval gates, retry logic and verification steps \u2014 so critical actions always go through the right human before execution." },
  { num: "06", title: "LLM model flexibility", body: "Anthropic Claude, OpenAI GPT-4o, Google Gemini, OCI GenAI and Azure OpenAI \u2014 selected for your accuracy, cost and data-residency requirements." },
  { num: "07", title: "Gunicorn multi-worker deployment", body: "Production-grade WSGI serving with Gunicorn, Redis for state/caching and Celery for background task orchestration." },
  { num: "08", title: "Full observability", body: "Logging of every agent action, tool call, model response and decision point \u2014 with monitoring dashboards and alerting from day one." },
];

const process = [
  { num: "01", title: "Requirements", body: "We map the workflow, identify every tool and system the agent needs to use, and define the boundaries between autonomous action and human review." },
  { num: "02", title: "Architecture", body: "Agent graph design, tool schema definition, RAG pipeline architecture and model selection \u2014 documented before a line of code." },
  { num: "03", title: "Build & Integrate", body: "Agent development in iterative sprints, tested against your real data sources and real integrations from the first sprint." },
  { num: "04", title: "Harden & Evaluate", body: "Adversarial testing, edge-case handling, guardrail validation and performance benchmarking before go-live." },
  { num: "05", title: "Deploy & Operate", body: "Production deployment with monitoring, alerting and ongoing optimisation. You own the code; we provide the expertise." },
];

const whyUs = {
  heading: "Engineering Depth That Generic AI Firms Can't Match",
  points: [
  { title: "We build from first principles", body: "No pre-built templates, no off-the-shelf connectors. Every agent is engineered for your specific workflow, data model and integration landscape." },
  { title: "Model-agnostic by architecture", body: "Your agent is not locked to one LLM provider. We build the architecture so you can switch models as the landscape evolves \u2014 without rebuilding." },
  { title: "Production is the only standard", body: "We do not build demos. Every agent we ship is tested against real data, real integrations and real edge cases before it touches production." },
  { title: "The code is yours", body: "Full code ownership, clean documentation and structured handover. No vendor lock-in, no black boxes, no ongoing licensing dependency." },
],
  box: {
    heading: "Model-Flexible. Enterprise-Hardened.",
    body: "Built to run on the model that fits your requirements today \u2014 and to switch as the landscape improves, without a rebuild.",
    stats: [
  { val: "4+", label: "LLM families supported natively" },
  { val: "100%", label: "Code ownership \u2014 no lock-in" },
  { val: "HITL", label: "Human controls on every critical path" },
],
  },
};

const faqs = [
  { q: "How is a custom agent different from using an AI platform or SaaS product?", a: "A SaaS AI product is built for the average use case. A custom agent is engineered for yours \u2014 your data model, your approval logic, your integration landscape and your governance requirements. The edge cases that break generic products are handled because we designed for them." },
  { q: "Which LLM should we use?", a: "We recommend the model that fits your accuracy requirements, data-residency constraints and cost profile \u2014 not the model we have a commercial arrangement with. We have production experience with Anthropic Claude, OpenAI GPT-4o, Google Gemini and Oracle OCI GenAI." },
  { q: "Do we need a data team or AI team on our side?", a: "No. We handle architecture, build, integration, deployment and operations. Your team defines the business requirements and reviews outputs. We provide the engineering depth \u2014 you stay focused on the outcome." },
  { q: "Can an agent you build be extended later by our internal team?", a: "Yes. We write clean, documented code with a clear architecture. We also provide a structured handover and can train your team to extend and maintain the agent. There are no lock-in mechanisms." },
];

const cta = {
  heading: "Describe the Workflow That Doesn't Fit Any Off-the-Shelf Product.",
  body: "We've heard it before. Tell us what you need \u2014 the process, the systems involved and the outcome you're after. We'll tell you how we would engineer it, what the build looks like and what you should expect from a first pilot.",
  cta1: "Start the Technical Conversation",
  cta2: "See Example Agent Architectures",
};

const relatedServices = [
  { title: "Enterprise ERP & CRM-Native AI Integration", slug: "/services/erp-crm-ai-integration", number: "02" },
  { title: "Conversational AI & Enterprise Copilots", slug: "/services/conversational-ai-enterprise-copilots", number: "05" },
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

export default function CustomAiAgentDevelopmentContent() {
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
