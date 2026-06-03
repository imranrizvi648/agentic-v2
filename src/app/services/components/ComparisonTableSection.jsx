export default function ComparisonTableSection() {
  const comparisonData = [
    { dim: "Integration", them: "Third-party connectors and middleware", us: "Native builds on official SAP, Oracle & Microsoft APIs" },
    { dim: "Automation", them: "Assists a step, hands the rest back", us: "Completes the workflow end to end — no manual steps" },
    { dim: "Domain depth", them: "Generic, horizontal AI", us: "Finance-first, posting-level expertise" },
    { dim: "Delivery", them: "Strategy deck, then a separate build team", us: "One team from roadmap to production and support" },
    { dim: "Deployment", them: "Demo that rarely reaches production", us: "Production-grade systems on your live stack" },
    { dim: "Governance", them: "Added at the end, if at all", us: "Audit trail, controls and guardrails from day one" },
  ];

  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-indigo-500" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600">How We Compare</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-10 leading-tight">
          Most AI Firms Advise, Then Hand Off. We Strategise, Build, Integrate and Run.
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left py-4 px-6 text-xs font-black uppercase tracking-wide text-slate-400 w-1/4"> </th>
                <th className="text-left py-4 px-6 text-xs font-black uppercase tracking-wide text-slate-400">Typical AI Vendor</th>
                <th className="text-left py-4 px-6 text-xs font-black uppercase tracking-wide text-indigo-600">AgenticSense</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row) => (
                <tr key={row.dim} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-700">{row.dim}</td>
                  <td className="py-4 px-6 text-slate-400">{row.them}</td>
                  <td className="py-4 px-6 font-semibold text-slate-800">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}