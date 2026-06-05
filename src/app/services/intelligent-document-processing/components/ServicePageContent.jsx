import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Every Vendor Invoice. Extracted, Matched, Posted \u2014 Automatically.",
  highlight: "Extracted, Matched, Posted \u2014 Automatically.",
  sub: "Invoices arrive as PDFs and emails. Our document agents extract the data, validate it against your ERP records, match to PO and goods receipt, and post straight through \u2014 with exceptions routed, not discarded.",
  cta1: "Book a Document Automation Demo",
  cta2: "See the Matching Logic",
  trustLabel: "Proven in production on",
  badges: ["SAP Business One", "Oracle Fusion", "NetSuite"],
};

const overview = {
  heading: "From Unstructured Document to Posted Transaction \u2014 No Human in Between",
  lead: "Vendor invoices, receipts, contracts and forms arrive in every format imaginable. Our document agents handle them all \u2014 extracting with vision-capable AI, validating against your ERP records, matching to supporting documents and posting the result directly into your system of record.",
  body: "Transactions that meet your rules go straight through. Exceptions \u2014 mismatches, tolerance overruns, missing POs \u2014 are routed to your exception queue with the evidence attached, so reviewers make fast, informed decisions.",
  stats: [
  { val: "High", label: "Extraction accuracy \u2014 vision AI" },
  { val: "3-Way", label: "PO/GRN/Invoice matching" },
  { val: "STP", label: "Straight-through posting \u2014 zero touch" },
  { val: "Full", label: "Audit trail on every document" },
],
  cards: [
  { title: "Multi-Channel Intake", body: "Email webhook, web upload and API ingestion \u2014 invoices captured wherever they arrive, automatically." },
  { title: "Vision-AI Extraction", body: "High-accuracy extraction from PDFs, scans and structured forms \u2014 handles vendor formats without templates." },
  { title: "Configurable Matching", body: "PO and GRN matching tolerances set per vendor, per document type \u2014 with audit trail for every decision." },
  { title: "Exception Management", body: "Clear exception queues with matching evidence. Human reviewers decide fast \u2014 the agent never discards silently." },
],
};

const benefits = [
  { icon: "\u23f1", title: "Hours reduced to seconds", body: "Document processing that took a finance analyst minutes per invoice now completes in seconds \u2014 for every invoice in the queue, simultaneously." },
  { icon: "\ud83c\udfaf", title: "Errors caught before they post", body: "The matching logic catches discrepancies before anything hits the ERP. Vendor-supplied errors, duplicate invoices and tolerance overruns are flagged \u2014 not passed through." },
  { icon: "\ud83d\udccb", title: "Full document provenance", body: "Every extracted field, every match decision and every exception route is logged. You have complete traceability from document receipt to posted transaction." },
  { icon: "\ud83d\udce7", title: "Handles every format and channel", body: "PDFs, scanned images, emailed invoices, uploaded documents \u2014 the agent processes them all through the same extraction and validation pipeline." },
  { icon: "\u26a1", title: "Scales without adding headcount", body: "Process ten times the invoice volume with the same team. The agent's throughput scales with your business \u2014 your people stay focused on exceptions." },
  { icon: "\ud83d\udd04", title: "Integrates with your existing process", body: "Exception queues, approval workflows and ERP posting can be configured to match your existing controls \u2014 no process redesign required to go live." },
];

const features = [
  { num: "01", title: "Email webhook intake", body: "Invoices forwarded or received at a dedicated inbox are picked up automatically \u2014 no manual upload required." },
  { num: "02", title: "Web upload portal", body: "Suppliers and internal teams can upload documents directly through a branded portal, triggering immediate processing." },
  { num: "03", title: "Vision-AI field extraction", body: "Vendor name, invoice number, line items, totals, tax, dates and payment terms \u2014 extracted with vision-capable models, not brittle OCR templates." },
  { num: "04", title: "ERP record cross-validation", body: "Extracted data validated against your live ERP \u2014 vendor master, open POs, approved amounts and goods receipt records." },
  { num: "05", title: "2-way and 3-way match", body: "Configurable tolerance thresholds per vendor and document class. Match logic documented and auditable." },
  { num: "06", title: "Straight-through ERP posting", body: "Matched invoices post directly to SAP Business One, Oracle Fusion or NetSuite \u2014 zero human touchpoint on clean transactions." },
  { num: "07", title: "Duplicate detection", body: "Cross-reference against previously processed invoices \u2014 same vendor, same amount, same date patterns flagged before they reach the ERP." },
  { num: "08", title: "Exception queue with evidence", body: "Every exception surfaces with extracted values, the matched record and the specific rule that failed \u2014 reviewers decide in one click." },
];

const process = [
  { num: "01", title: "Ingest", body: "Document arrives via email, upload or API. The agent timestamps receipt and assigns a tracking reference." },
  { num: "02", title: "Extract", body: "Vision AI reads every field. Confidence scores flag low-certainty extractions for review before they proceed." },
  { num: "03", title: "Validate", body: "Extracted data is cross-checked against your ERP vendor master, open POs and GRN records in real time." },
  { num: "04", title: "Match or Route", body: "Clean matches post straight through. Exceptions are queued with context \u2014 never discarded, never silently failed." },
  { num: "05", title: "Audit & Report", body: "Every step logged. Processing reports, throughput dashboards and exception analytics available in real time." },
];

const whyUs = {
  heading: "Vision-AI Extraction Built for Vendor Reality",
  points: [
  { title: "No templates required", body: "Vision-AI extraction adapts to each vendor's invoice format without template setup. Onboarding a new vendor costs nothing." },
  { title: "Production-standard matching logic", body: "Our 3-way matching logic is built from real AP workflows \u2014 tolerances, exception types and posting rules match how your finance team actually works." },
  { title: "Audit trail from document to transaction", body: "Complete provenance: receipt timestamp, extracted values, match decision, exception route, posting confirmation \u2014 every step logged." },
  { title: "Handles the difficult documents", body: "Scanned invoices, poor-quality PDFs, non-standard layouts \u2014 vision-capable models handle what traditional OCR cannot." },
],
  box: {
    heading: "Straight-Through Processing",
    body: "The goal is maximum straight-through rate \u2014 invoices that meet your rules post without human intervention. Exceptions get context, not confusion.",
    stats: [
  { val: "STP", label: "Straight-through posting standard" },
  { val: "3-Way", label: "PO/GRN/Invoice match built in" },
  { val: "Full", label: "Audit trail on every document" },
],
  },
};

const faqs = [
  { q: "What document formats can the extraction agent handle?", a: "PDFs (both text-layer and scanned/image-based), email body invoices, structured form uploads and most common image formats. Vision-capable models handle scanned documents that traditional OCR cannot read reliably." },
  { q: "Do we need to set up a template for each of our vendors?", a: "No. Vision-AI extraction adapts to each vendor's invoice format without templates. Vendor-specific rules (such as tolerance thresholds or required fields) are configurable without format mapping." },
  { q: "What happens to an invoice that can't be matched?", a: "It moves to your exception queue \u2014 with the extracted values, the GRN or PO it was matched against, and a plain-language explanation of why it didn't pass. Nothing is discarded without a human decision." },
  { q: "Can the agent handle landed cost and multi-line invoices?", a: "Yes. We have production experience with landed cost workflows and multi-line vendor invoices across manufacturing and distribution clients \u2014 including complex customs broker scenarios." },
];

const cta = {
  heading: "Show Us Your Highest-Volume Document Workflow.",
  body: "In a free session, we'll map your document pipeline, identify where automation creates the most value and show you exactly what a production-grade document agent looks like against your real documents \u2014 at no cost.",
  cta1: "Book a Free Assessment",
  cta2: "Request a Demo",
};

const relatedServices = [
  { title: "Agentic AI for the Office of Finance", slug: "/services/agentic-ai-finance", number: "01" },
  { title: "Enterprise ERP & CRM-Native AI Integration", slug: "/services/erp-crm-ai-integration", number: "02" },
  { title: "Custom AI Agent Development", slug: "/services/custom-ai-agent-development", number: "04" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-0.5 bg-indigo-500" />
      <span className="text-xs font-black uppercase tracking-widest text-indigo-600">{text}</span>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function IntelligentDocumentProcessingContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-brand-primary leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-indigo-600">{hero.highlight}</span>{after}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">{hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="#" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md hover:bg-indigo-700 transition-colors">
              {hero.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 bg-white text-slate-700 font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              {hero.cta2}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{hero.trustLabel}</span>
            {hero.badges.map((b) => (
              <span key={b} className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <SectionLabel text="Service Overview" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight tracking-tight mb-5">
                {overview.heading}
              </h2>
              <p className="text-base text-indigo-700 font-semibold leading-relaxed mb-4">{overview.lead}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">{overview.body}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-indigo-600 leading-none mb-1">{s.val}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-wide text-slate-800 mb-2">{c.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Benefits" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bg-white p-7 hover:bg-indigo-50/30 transition-colors ${i % 3 !== 2 ? "lg:border-r border-slate-100" : ""} ${i < 3 ? "border-b border-slate-100" : ""}`}
              >
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-sm font-bold text-brand-primary mb-2 leading-snug">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Capabilities" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 flex gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <span className="text-[10px] font-black text-indigo-600">{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Methodology" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">
            How We Deliver
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-100" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {process.map((step) => (
                <div key={step.num} className="relative flex flex-col items-start md:items-center md:text-center">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-xs font-black text-indigo-600">{step.num}</span>
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wide text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-8 leading-tight">
                {whyUs.heading}
              </h2>
              <div className="divide-y divide-slate-100">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 shadow-sm shadow-indigo-300" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold text-brand-primary mb-3">{whyUs.box.heading}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span className="text-xl font-extrabold text-indigo-300">{s.val}</span>
                      <span className="text-xs text-slate-400 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionLabel text="Frequently Asked Questions" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 leading-tight">
            Questions We Hear Every Time
          </h2>
          <div className="divide-y divide-slate-200">
            {faqs.map((f) => (
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight mb-5">
            {cta.heading}
          </h2>
          <p className="text-base text-slate-500 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold text-sm px-7 py-4 rounded-md hover:bg-indigo-700 transition-colors">
              {cta.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-bold text-sm px-7 py-4 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs text-slate-400">Dubai, UAE · Karachi, Pakistan · info@agenticsense.ai · agenticsense.ai</p>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedServices.map((r) => (
              <Link key={r.slug} href={r.slug} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-indigo-500 tracking-widest">{r.number}</span>
                  <span className="text-slate-300 group-hover:text-indigo-400 transition-colors text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
