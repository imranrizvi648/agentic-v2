const caseStudies = [
  {
    sector: "Finance & Banking",
    accentColor: "text-amber-400",
    accentBg: "bg-amber-400/10",
    accentBorder: "border-amber-400/20",
    org: "Regional investment group",
    challenge: "Manual reconciliation of thousands of daily transactions across multiple asset classes consumed analyst time and introduced material error risk at every period end.",
    built: "An AI reconciliation agent cross-referencing trade data, bank statements and custodian feeds — posting matched entries automatically and surfacing only genuine breaks for review.",
    result: "[X]% of reconciliations now straight-through. Analyst hours reallocated from matching to investment analysis.",
  },
  {
    sector: "Healthcare",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    accentBorder: "border-emerald-400/20",
    org: "Multi-site hospital group",
    challenge: "Revenue cycle delays — from documentation gaps to slow pre-authorisation — were adding weeks to cash collection and straining operational budgets.",
    built: "A revenue cycle AI agent that checks documentation completeness at point of care, submits pre-auth automatically and tracks claim status without manual follow-up.",
    result: "Average claim cycle reduced by [X] days. Denial rate down [X]% in the first quarter of operation.",
  },
  {
    sector: "Real Estate",
    accentColor: "text-sky-400",
    accentBg: "bg-sky-400/10",
    accentBorder: "border-sky-400/20",
    org: "Commercial property developer",
    challenge: "Lead qualification was inconsistent — high-value prospects treated identically to low-intent enquiries, and follow-up timing was unpredictable and manual.",
    built: "A conversational AI qualification agent that scores inbound enquiries against portfolio criteria, routes high-intent leads immediately and nurtures the rest automatically.",
    result: "[X]% increase in qualified-lead-to-appointment rate. [X] hours of senior agent time recovered weekly.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#111118] py-14 sm:py-20 md:py-14 sm:py-20 md:py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">Real Impact</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight leading-tight mb-4 max-w-2xl">
          What Sector-Specific AI Actually Delivers.
        </h2>
        <p className="text-white/35 text-sm max-w-xl mb-14 leading-relaxed">
          Every engagement is measured against outcomes agreed before we start. These are the shapes of the results our industry agents are built to produce.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {caseStudies.map((c) => (
            <div
              key={c.sector}
              className={`rounded-2xl border ${c.accentBorder} bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-colors flex flex-col`}
            >
              {/* Sector header */}
              <div className={`${c.accentBg} border-b ${c.accentBorder} px-4 sm:px-6 py-3 flex items-center justify-between`}>
                <span className={`text-xs font-black uppercase tracking-widest ${c.accentColor}`}>{c.sector}</span>
                <span className="text-xs text-white/30 font-medium">{c.org}</span>
              </div>

              <div className="p-6 flex flex-col flex-1 gap-5">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/25 mb-2">Challenge</p>
                  <p className="text-xs text-white/50 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/25 mb-2">What We Built</p>
                  <p className="text-xs text-white/65 leading-relaxed">{c.built}</p>
                </div>
                <div className={`mt-auto rounded-xl ${c.accentBg} border ${c.accentBorder} px-5 py-4`}>
                  <p className={`text-[9px] font-black uppercase tracking-[0.18em] ${c.accentColor} mb-2`}>Result</p>
                  <p className={`text-sm font-bold ${c.accentColor} leading-snug`}>{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
