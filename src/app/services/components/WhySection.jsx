export default function WhySection() {
  const whyPoints = [
  {
    icon: "",
    title: "ERP-Native by Design",
    body: "We integrate directly with the official APIs of SAP Business One, Oracle Fusion Cloud, and Microsoft Fabric, ensuring reliability, scalability, and long-term compatibility without depending on fragile middleware.",
  },
  {
    icon: "",
    title: "Deep Finance Expertise",
    body: "Finance is our core domain. We understand accounts payable, accounts receivable, general ledger processes, reconciliations, month-end close activities, and financial reporting at an operational level.",
  },
  {
    icon: "",
    title: "End-to-End Automation",
    body: "Our AI agents complete entire business processes from start to finish. Every solution is designed to eliminate unnecessary manual intervention and deliver true workflow automation.",
  },
  {
    icon: "",
    title: "Built for Your Environment",
    body: "Every deployment is tailored to your data, security requirements, governance standards, and production infrastructure, ensuring seamless integration with your existing ecosystem.",
  },
  {
    icon: "",
    title: "Proven in Production",
    body: "Our solutions are deployed in live enterprise environments and measured against clearly defined business outcomes, delivering measurable value beyond proof-of-concept projects.",
  },
];

  return (
    <section className="bg-slate-50 py-14 sm:py-14 sm:py-12 sm:py-10 sm:py-14 md:py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
       
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
          Most AI Projects Stall Before Production. We Close That Gap.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyPoints.map((p) => (
            <div key={p.title} className="bg-white rounded p-6 border border-slate-200 hover:border-indigo-200 transition-colors">
              <span className="text-indigo-500 text-xl mb-4 block">{p.icon}</span>
              <h3 className="text-sm font-bold text-brand-primary mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-[1.6]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}