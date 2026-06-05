import Link from "next/link";

export default function EngagementModelsSection() {
  const engagementModels = [
    {
      title: "AI Discovery & Opportunity Mapping",
      body: "A focused assessment of where agentic AI creates the most value across your finance and operations workflows, with a prioritised shortlist.",
      tag: "Start here",
      highlight: true,
    },
    {
      title: "Strategy & Roadmap Engagement",
      body: "A sequenced execution plan: prioritised use cases, target architecture, governance needs, timelines and measurable success metrics.",
      tag: "Plan",
      highlight: false,
    },
    {
      title: "Proof of Concept / Pilot",
      body: "A scoped build against real data and real integration constraints, with clear acceptance criteria — proving value before full investment.",
      tag: "Validate",
      highlight: false,
    },
    {
      title: "Production Build & Integration",
      body: "Design, build, integrate, test and deploy agentic systems across your ERP, data sources and operational workflows.",
      tag: "Build",
      highlight: false,
    },
    {
      title: "Managed AI Operations & Support",
      body: "Keep production agents accurate, secure and cost-efficient through monitoring, retraining, tuning and ongoing improvement.",
      tag: "Operate",
      highlight: false,
    },
  ];

  return (
    <section className="bg-slate-50 py-14 sm:py-14 sm:py-12 sm:py-10 sm:py-14 md:py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-indigo-500" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600">Engagement Models</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 max-w-2xl leading-tight">
          Start Small. Prove It on Your Own Data. Then Scale.
        </h2>
        <p className="text-sm text-slate-500 mb-12 max-w-xl leading-relaxed">
          You should never have to bet a big budget on a promise. Most engagements begin with a low-risk first step where the value is visible before the commitment grows.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {engagementModels.map((m) => (
            <div
              key={m.title}
              className={`rounded-2xl p-6 border transition-all ${
                m.highlight
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-white border-slate-200 hover:border-indigo-200"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                    m.highlight
                      ? "bg-indigo-500 text-indigo-100"
                      : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  {m.tag}
                </span>
              </div>
              <h3 className={`text-sm font-extrabold mb-3 leading-snug ${m.highlight ? "text-white" : "text-slate-900"}`}>
                {m.title}
              </h3>
              <p className={`text-xs leading-relaxed ${m.highlight ? "text-indigo-100" : "text-slate-500"}`}>
                {m.body}
              </p>
            </div>
          ))}
        </div>

        {/* Free assessment + pilot callout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-7">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Free · No obligation</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-2">Free Finance Automation Assessment</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              In a focused session, we map your single highest-value automation opportunity, sketch how an agent would handle it inside your ERP, and give you an honest view of effort, impact and what is deployable today.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-sm px-5 py-2.5 rounded-md hover:bg-indigo-700 transition-colors">
              Book Free Assessment →
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-7">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Fixed scope · Clear criteria</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-2">Fixed-Scope Pilot</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              If it makes sense to go further, we run a scoped pilot on your real data with success criteria agreed in writing up front. You see a working agent before deciding on a full rollout.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 bg-white text-slate-700 font-bold text-sm px-5 py-2.5 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              Request a Pilot →
            </Link>
          </div>
        </div>

        {/* Right fit checklist */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-7">
          <h3 className="text-sm font-extrabold text-slate-900 mb-5">This is the right fit if…</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "You run SAP Business One, Oracle Fusion, NetSuite, Odoo, Zoho, Salesforce or Microsoft Fabric — or a mix.",
              "Your finance or operations team loses hours to repetitive, rules-based work.",
              "You want production systems and measurable ROI, not another stalled pilot.",
              "Governance, audit trails and data control are non-negotiable for you.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-xs text-slate-600">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-black text-[10px] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}