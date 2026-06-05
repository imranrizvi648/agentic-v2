const pillars = [
  {
    num: "01",
    title: "Operational depth",
    body: "We understand the posting logic of financial ERP, clinical RCM workflows, property management data structures and e-commerce fulfilment logic — not just sector vocabulary.",
    accent: "text-amber-500",
    borderGlow: "group-hover:border-amber-500",
  },
  {
    num: "02",
    title: "Compliance by design",
    body: "Finance audit trails, healthcare data governance, education privacy requirements — built into the architecture from phase one, not retrofitted when the auditor arrives.",
    accent: "text-emerald-500",
    borderGlow: "group-hover:border-emerald-500",
  },
  {
    num: "03",
    title: "Production — not pilots",
    body: "Sector-specific edge cases are why most AI stalls before go-live. We identify them before the build. Our agents reach production and stay there.",
    accent: "text-sky-500",
    borderGlow: "group-hover:border-sky-500",
  },
  {
    num: "04",
    title: "Native system integration",
    body: "Core banking, HIS, LMS, property CRMs, commerce platforms — all integrated through official APIs. No middleware that breaks at the next upgrade.",
    accent: "text-violet-500",
    borderGlow: "group-hover:border-violet-500",
  },
  {
    num: "05",
    title: "Measured outcomes",
    body: "Reconciliation rates, claim cycle times, lead conversion, stockout frequency, student completion — agreed in writing before work starts. You know what success looks like.",
    accent: "text-rose-500",
    borderGlow: "group-hover:border-rose-500",
  },
];

export default function WhySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20 md:py-14 sm:py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight max-w-xl leading-[1.15]">
              Sector AI Requires More Than Sector Awareness.
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm leading-relaxed font-medium">
            Five principles that define every industry engagement — from the first assessment through to managed production operations.
          </p>
        </div>

        {/* Modern White Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {pillars.map((p) => (
            <div 
              key={p.num} 
              className={`bg-white border-t-2 border-transparent p-6 rounded shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between ${p.borderGlow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  
                </div>
                
                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}