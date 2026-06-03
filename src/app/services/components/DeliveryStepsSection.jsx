export default function DeliveryStepsSection() {
  const deliverySteps = [
    { num: "01", title: "Discover", body: "We align on business goals, map high-value use cases, and assess your data, systems and controls — separating what is deployable today from what needs to be built." },
    { num: "02", title: "Design", body: "We define the target architecture, integration approach, governance model and success metrics, agreed in writing before the build begins." },
    { num: "03", title: "Build", body: "We develop the agents against your real data and real integration constraints — proving the system works beyond a demo, with controls baked in." },
    { num: "04", title: "Deploy", body: "We integrate, test and ship to your production environment with monitoring, audit logging and human-in-the-loop safeguards in place." },
    { num: "05", title: "Scale", body: "We expand coverage across processes and functions, tune performance, and provide ongoing support, retraining and optimisation." },
  ];

  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-indigo-500" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600">How We Deliver</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 max-w-2xl leading-tight">
          A Disciplined Path from Idea to a System Your Teams Trust
        </h2>
        <p className="text-sm text-slate-500 mb-14 max-w-xl leading-relaxed">
          Every engagement follows the same five-phase delivery — from the first discovery call to ongoing production operations.
        </p>
        <div className="relative">
          <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-100" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {deliverySteps.map((step) => (
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
  );
}