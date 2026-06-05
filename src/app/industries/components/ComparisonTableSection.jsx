const rows = [
  { dim: "Domain knowledge",  them: "Sector vocabulary, not operational logic", us: "Built at the posting, workflow and compliance level of your specific systems" },
  { dim: "Compliance",        them: "Generic controls retrofitted at audit time",  us: "Sector-specific regulatory requirements built into the architecture from phase one" },
  { dim: "Integration",       them: "Middleware that breaks on system updates",    us: "Official APIs of the core systems your industry runs on — upgrade-safe by design" },
  { dim: "Edge cases",        them: "Discovered after go-live, fixed as defects",  us: "Identified in the sector audit before build begins — not after" },
  { dim: "Deployment",        them: "Demo that rarely reaches your live environment", us: "Production-grade agents on your real data from the first pilot" },
  { dim: "Accountability",    them: "Outcomes defined retroactively",               us: "Measurable sector-specific metrics agreed in writing before work starts" },
];

export default function ComparisonTableSection() {
  return (
    <section className="bg-[#111118] py-14 sm:py-20 md:py-14 sm:py-20 md:py-24 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">How We Differ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-12 max-w-2xl">
          Sector AI Requires Depth, Not Breadth.
        </h2>

        <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                <th className="text-left py-4 px-4 sm:px-6 text-xs font-black uppercase tracking-widest text-white/25 w-1/4"> </th>
                <th className="text-left py-4 px-4 sm:px-6 text-xs font-black uppercase tracking-widest text-white/35">Generic AI Vendor</th>
                <th className="text-left py-4 px-4 sm:px-6 text-xs font-black uppercase tracking-widest text-amber-400">AgenticSense</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {rows.map((row) => (
                <tr key={row.dim} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 sm:px-6 text-xs font-bold text-white/50">{row.dim}</td>
                  <td className="py-4 px-4 sm:px-6 text-xs text-white/25">{row.them}</td>
                  <td className="py-4 px-4 sm:px-6 text-xs text-white/80 font-semibold">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
