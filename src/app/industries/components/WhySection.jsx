const pillars = [
  {
    num: "01",
    title: "Operational Expertise",
    body: "Our team understands the workflows, data models, and operational processes that power finance, healthcare, real estate, education, and commerce environments.",
    accent: "text-amber-500",
    borderGlow: "group-hover:border-amber-500",
  },
  {
    num: "02",
    title: "Compliance by Design",
    body: "Security, governance, privacy, and regulatory requirements are incorporated into the solution architecture from the beginning to support long-term compliance and risk management.",
    accent: "text-emerald-500",
    borderGlow: "group-hover:border-emerald-500",
  },
  {
    num: "03",
    title: "Production-Ready Delivery",
    body: "Every solution is designed for real-world deployment, with a focus on reliability, scalability, operational performance, and long-term maintainability.",
    accent: "text-sky-500",
    borderGlow: "group-hover:border-sky-500",
  },
  {
    num: "04",
    title: "Native System Integration",
    body: "We integrate directly with enterprise applications and platforms through supported APIs, ensuring secure, stable, and scalable connectivity across your technology ecosystem.",
    accent: "text-violet-500",
    borderGlow: "group-hover:border-violet-500",
  },
  {
    num: "05",
    title: "Measurable Business Outcomes",
    body: "Success is defined through clear business metrics and performance indicators, enabling stakeholders to track value, efficiency gains, and operational improvements over time.",
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
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary tracking-tight max-w-xl leading-tight">
              Sector AI Requires More Than Sector Awareness.
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm leading-relaxed font-medium">
            Five principles that define every industry engagement from the first assessment through to managed production operations.
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
                
                <h3 className="text-base font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
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