const faqs = [
  {
    q: "How is AgenticSense different from a general AI consultancy?",
    a: "We build production systems with genuine understanding of how your industry operates at the systems level — not sector awareness layered on top of a generic AI framework. Our agents reflect operational, regulatory and data realities, not a template adapted to your vocabulary.",
  },
  {
    q: "Do you work exclusively in Finance, or across all five industries?",
    a: "Finance & Banking is our deepest domain and where our flagship agents live. We have extended that same production discipline — official API integration, compliance-first architecture, measured outcomes — into Healthcare, Real Estate, E-commerce and Education. Each engagement is run with relevant sector experience.",
  },
  {
    q: "How do you handle the compliance and regulatory requirements specific to our sector?",
    a: "Compliance is architectural, not cosmetic. For finance we build audit trails and segregation of duties. For healthcare we build FHIR-compliant integration and data isolation. For education we build appropriate access controls and privacy governance. Each is designed for your sector's specific regulatory environment before build begins.",
  },
  {
    q: "Can we start with a scoped pilot before committing to a full deployment?",
    a: "Yes — and we recommend it. Most industry engagements begin with a free sector assessment followed by a fixed-scope pilot against your real systems with clear acceptance criteria. You see a working agent before any larger commitment.",
  },
  {
    q: "Which systems do you integrate with in each industry?",
    a: "Finance: SAP B1, Oracle Fusion, core banking. Healthcare: HIS, EHR, RCM platforms via HL7 FHIR. Real Estate: CRM and property management platforms. E-commerce: Shopify Plus, Magento, WMS. Education: LMS (Canvas, Moodle, Blackboard), SIS (Banner, PeopleSoft). Always official APIs — never middleware.",
  },
  {
    q: "Do we need our own data science or AI team?",
    a: "No. We handle architecture, build, integration, deployment and ongoing managed operations. Your team focuses on the business outcomes — not on running models or maintaining infrastructure.",
  },
  {
    q: "Is our industry data safe?",
    a: "Agents deploy on your own infrastructure through official vendor APIs. Sensitive data — patient records, financial transactions, student data — never passes through AgenticSense systems. AES-256 credential encryption and role-based access controls are standard on every deployment.",
  },
  {
    q: "How quickly can a pilot reach production?",
    a: "A scoped pilot typically reaches a working agent in weeks, depending on integration complexity. We provide a clear timeline in the assessment phase — not after you have committed. We do not move to build until you have reviewed and approved the architecture and success criteria.",
  },
];

export default function GlobalFaqsSection() {
  return (
    <section className="bg-[#111118] py-24 border-b border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">Common Questions</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-12 max-w-xl">
          What Organisations Ask Before Starting.
        </h2>

        <div className="divide-y divide-white/[0.07]">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-[9px] font-black text-amber-400 mt-0.5">
                    Q
                  </span>
                  <span className="text-sm font-bold text-white/80 leading-snug">{f.q}</span>
                </div>
                <span className="flex-shrink-0 text-white/20 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
              </summary>
              <p className="pl-8 pt-3 text-sm text-white/40 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
