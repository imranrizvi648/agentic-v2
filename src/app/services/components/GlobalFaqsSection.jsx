export default function GlobalFaqsSection() {
  const globalFaqs = [
    { q: "What makes AgenticSense different from a general AI consultancy?", a: "We build production systems, not slide decks — and we build them natively inside your ERP using official APIs. Our depth in the Office of Finance means our agents understand posting logic, matching rules and the close, not just language." },
    { q: "Which enterprise platforms do you integrate with?", a: "Primarily SAP Business One (Service Layer API and HANA), Oracle Fusion Cloud (REST APIs, OCI GenAI Agents and AI Agent Studio) and Microsoft Fabric / Azure AI Foundry — all via official, vendor-supported interfaces." },
    { q: "Do your agents require manual steps inside the ERP?", a: "No. Full end-to-end automation is a hard standard on every engagement. Agents complete the workflow; humans review only the exceptions that genuinely need judgement." },
    { q: "Can you start with a pilot before a full rollout?", a: "Yes. A scoped proof of concept against your real data and integration constraints is a common starting point, with clear acceptance criteria agreed up front." },
    { q: "How do you handle security and governance?", a: "Governance is built in from phase one: audit logging, access control, human-in-the-loop checkpoints and monitoring — designed for your environment and your compliance requirements." },
    { q: "Do you only work in finance?", a: "Finance is where we go deepest, but the same agentic model extends into procurement, HR, supply chain and IT operations." },
    { q: "How quickly can we see a working agent?", a: "A free assessment takes one short session. A scoped pilot on your real data typically reaches a working agent in a matter of weeks, depending on integration complexity." },
    { q: "What does an engagement cost?", a: "Engagements are scoped, so you know what you are investing in before work begins. The free assessment carries no cost, and pilots are fixed-scope with clear deliverables." },
    { q: "What if the pilot doesn't deliver?", a: "We agree the success criteria in writing before we start. A pilot is deliberately small and low-risk precisely so you can validate value before any larger commitment." },
    { q: "Will this disrupt our current systems?", a: "No. We build on your existing ERP through official APIs and deploy alongside your live environment, with testing and safeguards before anything touches production." },
    { q: "Do we need our own AI or ML team?", a: "No. We handle architecture, build, integration, deployment and ongoing operations. Your team stays focused on the business, not on running models." },
  ];

  return (
    <section className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-indigo-500" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600">Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-12 leading-tight">
          Everything You Need to Know Before Starting
        </h2>
        <div className="divide-y divide-slate-200">
          {globalFaqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-indigo-100 flex items-center justify-center text-[9px] font-black text-indigo-600 mt-0.5">Q</span>
                  <span className="text-sm font-bold text-slate-900 leading-snug">{f.q}</span>
                </div>
                <span className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
              </summary>
              <p className="pl-8 pt-3 text-sm text-slate-500 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}