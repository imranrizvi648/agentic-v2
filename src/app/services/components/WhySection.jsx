export default function WhySection() {
  const whyPoints = [
    {
      icon: "",
      title: "ERP-native by design",
      body: "We build directly on the official APIs of SAP Business One, Oracle Fusion Cloud and Microsoft Fabric — not on fragile middleware or third-party connectors that break at the next upgrade.",
    },
    {
      icon: "",
      title: "Finance-first depth",
      body: "The Office of Finance is our home domain. We understand AP, AR, GL, landed costs, reconciliations, the month-end close and statutory reporting at the level of the posting logic, not the slide.",
    },
    {
      icon: "",
      title: "Fully automated, end to end",
      body: "Our agents complete the task — they don't hand it back halfway. No manual GUI steps in the middle of a workflow is a hard standard on every engagement.",
    },
    {
      icon: "",
      title: "Built for your environment",
      body: "Custom-built on your data, your controls and your Linux-based production stack. Architecture and security decisions are made for your environment, not retrofitted to ours.",
    },
    {
      icon: "",
      title: "Proven in production",
      body: "Live enterprise deployments — not pilots that never shipped. Every engagement is measured against numbers agreed before we start.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
       
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-12 max-w-2xl leading-tight">
          Most AI Projects Stall Before Production. We Close That Gap.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyPoints.map((p) => (
            <div key={p.title} className="bg-white rounded p-6 border border-slate-200 hover:border-indigo-200 transition-colors">
              <span className="text-indigo-500 text-xl mb-4 block">{p.icon}</span>
              <h3 className="text-sm font-extrabold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}