export default function IndustriesSection() {
  const industries = [
    { title: "Financial Services & Investment", body: "Automated finance operations, reconciliations and decision analytics for investment and asset-management environments." },
    { title: "Conglomerates & Distribution", body: "Multi-entity AP/AR automation, landed-cost handling and consolidated reporting across diverse business units." },
    { title: "Manufacturing & Supply Chain", body: "Procurement, inventory and operations automation integrated with the ERP systems of record." },
    { title: "Retail & Services", body: "Invoice processing, customer and vendor assistants, and operational analytics at scale." },
    { title: "Public Sector & Large Enterprise", body: "Governed, auditable automation for procurement and finance functions with strict control requirements." },
  ];

  return (
    <section className="bg-slate-50 py-14 sm:py-14 sm:py-12 sm:py-10 sm:py-14 md:py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-indigo-500" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600">Industries We Serve</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-3 max-w-2xl leading-tight">
          Deep in Finance, Broad Across Sectors
        </h2>
        <p className="text-sm text-slate-500 mb-12 max-w-xl leading-relaxed">
          We deliver across the GCC, South Asia and Europe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`bg-white rounded-2xl border border-slate-200 p-6 hover:border-indigo-200 transition-colors ${
                i === industries.length - 1 && industries.length % 3 !== 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                <span className="text-indigo-500 font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-sm font-bold text-brand-primary mb-2">{ind.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{ind.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}