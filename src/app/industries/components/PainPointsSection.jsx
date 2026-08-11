export default function PainPointsSection() {
  const painPoints = [
    {
      problem: "Generic AI doesn't understand your regulatory environment.",
      solution: "We build to the compliance requirements of your sector from day one audit trails, segregation of duties and access controls baked in.",
    },
    {
      problem: "Pilots work in demos but never make it to your production systems.",
      solution: "We build against your real data and live integrations from the first sprint. Production is the only standard we work to.",
    },
    {
      problem: "Your industry data is too sensitive to hand to a third-party SaaS.",
      solution: "Agents deploy on your own infrastructure, using official APIs. Your data never leaves your environment.",
    },
    {
      problem: "Off-the-shelf automation breaks at every industry-specific edge case.",
      solution: "Domain-depth means we understand the edge cases before they become defects not after go-live.",
    },
    {
      problem: "AI vendors promise transformation but deliver slide decks.",
      solution: "We ship working agents with measurable outcomes agreed in writing before the build starts.",
    },
    {
      problem: "Your team can't maintain a black-box AI system post-launch.",
      solution: "Clean architecture, full documentation and managed operations mean your agents improve after launch, not degrade.",
    },
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-indigo-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">If Any of This Sounds Familiar</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-10 max-w-xl leading-tight">
          Industry AI Fails When It Ignores How Your Sector Actually Operates.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((item) => (
            <div key={item.problem} className="rounded-xl p-5 bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
              <p className="text-xs font-semibold text-rose-500 mb-3 flex gap-2 items-start">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold text-[10px]">✗</span>
                <span>{item.problem}</span>
              </p>
              <p className="text-xs text-slate-600 flex gap-2 items-start">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-[10px]">→</span>
                <span>{item.solution}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
