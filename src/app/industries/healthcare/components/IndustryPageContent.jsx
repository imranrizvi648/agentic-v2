import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Clinical Teams Shouldn't Be Doing Paperwork That AI Can Handle.",
  highlight: "Paperwork That AI Can Handle.",
  sub: "AI agents that automate revenue cycle management, clinical documentation, pre-authorisation and patient scheduling \u2014 so your clinicians focus on patient care, not administrative burden.",
  cta1: "Book a Free Healthcare AI Assessment",
  cta2: "See Our Clinical AI Capabilities",
  badges: ["Hospital Information Systems", "RCM Platforms", "EHR Integration", "HL7 / FHIR"]
};
const overview = {
  heading: "AI That Reduces Administrative Burden Without Compromising Care Quality",
  lead: "Healthcare's administrative load is unsustainable. Pre-authorisation delays, documentation gaps, billing errors and scheduling inefficiencies drain clinical capacity and revenue simultaneously.",
  body: "Every agent we deploy in healthcare is built to the data governance standards the sector requires \u2014 full audit logging, role-based access, data isolation and human oversight on every decision that touches patient outcomes. We integrate through HL7 FHIR-compliant APIs and your HIS's official interfaces.",
  stats: [
  { val: "FHIR", label: "HL7 FHIR-compliant integration" },
  { val: "100%", label: "Agent actions audit-logged" },
  { val: "HITL", label: "Human oversight on patient-critical decisions" },
  { val: "Weeks", label: "From pilot to production" },
],
  cards: [
  { title: "Revenue Cycle Management", body: "Pre-authorisation automation, claim submission, denial management and patient statement processing \u2014 agents that own the full billing cycle." },
  { title: "Clinical Documentation AI", body: "Structured data extraction from clinical notes, discharge summaries and referral letters \u2014 reducing documentation burden on clinical staff." },
  { title: "Patient Scheduling & Triage", body: "AI-driven appointment optimisation, waitlist management and intelligent triage routing \u2014 reducing no-shows and improving capacity utilisation." },
  { title: "Predictive Patient Analytics", body: "Readmission risk models, length-of-stay prediction and population health analytics \u2014 evidence-based insights for clinical decision support." },
],
};
const benefits = [
  { icon: "\u23f1", title: "Clinical time returned to clinical work", body: "Administrative tasks that consumed nursing and administrative staff hours are handled by agents \u2014 freeing capacity for patient-facing care." },
  { icon: "\ud83d\udcb0", title: "Revenue cycle accelerated", body: "Pre-auth submissions, claim follow-up and denial management run continuously \u2014 shortening the gap between care delivery and cash collection." },
  { icon: "\ud83c\udfaf", title: "Fewer claim denials", body: "Documentation completeness checks before submission catch the issues that trigger denials \u2014 reducing rework and improving first-pass acceptance rates." },
  { icon: "\ud83d\udcca", title: "Population health visibility", body: "Aggregated patient data surfaces patterns \u2014 readmission risk, chronic condition clusters, capacity trends \u2014 that static reporting cannot." },
  { icon: "\ud83d\udd12", title: "Patient data stays protected", body: "Agents deploy on your own infrastructure through FHIR-compliant APIs. Patient data never leaves your environment or passes through third-party systems." },
  { icon: "\ud83d\udee1", title: "Governance to healthcare standards", body: "Role-based access, full audit trails and human-in-the-loop checkpoints on patient-critical decisions \u2014 designed to survive a clinical governance review." },
];
const features = [
  { num: "01", title: "Pre-authorisation automation", body: "AI agents that submit pre-auth requests, track payer responses and escalate urgent cases \u2014 without manual chasing." },
  { num: "02", title: "Clinical documentation extraction", body: "Structured data from clinical notes, discharge summaries and referral documents \u2014 reducing transcription burden and improving data completeness." },
  { num: "03", title: "Claim submission & tracking", body: "Automated claim generation, submission and status monitoring \u2014 with denial pattern analysis to prevent repeat rejections." },
  { num: "04", title: "Appointment & waitlist optimisation", body: "AI scheduling that reduces gaps, manages cancellation fill and routes patients to appropriate care pathways automatically." },
  { num: "05", title: "Readmission risk prediction", body: "Models trained on your patient population flag high-risk discharges \u2014 giving care teams time to intervene before readmission occurs." },
  { num: "06", title: "Patient communication agents", body: "Automated appointment reminders, pre-admission instructions and post-discharge follow-up \u2014 reducing no-shows and improving care continuity." },
  { num: "07", title: "Referral management", body: "Structured processing of inbound referrals \u2014 extraction, triage scoring, specialist routing and acknowledgement \u2014 without manual handling." },
  { num: "08", title: "Capacity analytics dashboard", body: "Real-time visibility of bed occupancy, theatre utilisation, outpatient throughput and staffing ratios \u2014 for operational leadership." },
];
const process = [
  { num: "01", title: "Governance Audit", body: "We map your data governance requirements, consent frameworks, access control structures and integration landscape before any architecture decisions." },
  { num: "02", title: "Workflow Design", body: "Clinical and administrative workflows documented end to end \u2014 with human oversight points and compliance requirements agreed before build." },
  { num: "03", title: "Build & Integrate", body: "Agent development against your HIS, RCM and EHR through official FHIR-compliant interfaces \u2014 tested against real patient data scenarios." },
  { num: "04", title: "Govern & Deploy", body: "Go-live with full audit logging, role-based access, patient data isolation and clinical governance controls active from day one." },
  { num: "05", title: "Monitor & Improve", body: "Ongoing performance monitoring, model updates and expansion across clinical and administrative workflows as your organisation scales." },
];
const whyUs = {
  heading: "Healthcare AI That Understands Clinical Operations, Not Just Healthcare Vocabulary.",
  points: [
  { title: "Operational depth across the care pathway", body: "We understand RCM workflows, clinical documentation requirements, pre-auth logic and discharge processes \u2014 not just that healthcare has these things." },
  { title: "Data governance to healthcare standards", body: "Patient data isolation, consent-aware access controls and audit trails built to the standards your clinical governance and information governance teams require." },
  { title: "FHIR-compliant integration", body: "We integrate through HL7 FHIR-compliant APIs and your HIS's official interfaces \u2014 not screen scraping or middleware that breaks at the next system upgrade." },
  { title: "Human oversight on patient-critical decisions", body: "Agents handle the volume work. Clinical and operational judgement stays with your people. Every decision that touches patient outcomes has a human checkpoint." },
],
  box: {
    heading: "Built for Clinical Governance",
    body: "Patient data protection and clinical audit requirements are designed into the architecture from phase one \u2014 not added when the governance team asks.",
    stats: [
  { val: "FHIR", label: "HL7-compliant integration standard" },
  { val: "100%", label: "Patient data stays in your environment" },
  { val: "HITL", label: "Human oversight on all patient-critical paths" },
],
  },
};
const faqs = [
  { q: "How do you protect patient data?", a: "Agents deploy on your own infrastructure through FHIR-compliant APIs. Patient data never leaves your environment, never passes through AgenticSense systems and is never stored by us." },
  { q: "Can AI agents replace clinical staff?", a: "No. Agents handle administrative and data-processing tasks. Clinical decisions remain with clinicians. We design explicit human oversight checkpoints into every patient-critical workflow." },
  { q: "Which healthcare IT systems do you integrate with?", a: "We integrate through HL7 FHIR-compliant APIs and the official interfaces of major HIS, RCM and EHR platforms. Specific integration paths are identified in the assessment phase." },
  { q: "Can we start with revenue cycle before expanding to clinical workflows?", a: "Yes. Most healthcare engagements start with pre-authorisation or claim submission, prove value in production, then expand. You are never committed to a full rollout before seeing results." },
  { q: "How do you handle systems that are not FHIR-compliant?", a: "We assess your specific landscape and identify the cleanest, most maintainable integration path for each system \u2014 which may include official database views, batch exports or vendor-supported integration layers." },
];
const cta = {
  heading: "What Administrative Burden Is Consuming the Most Clinical Capacity?",
  body: "In a free Healthcare AI Assessment, we map your highest-value automation opportunity, show you what a production agent looks like in your environment, and give you an honest view of integration requirements, data governance and expected outcomes \u2014 at no cost.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};
const relatedIndustries = [
  { title: "Finance & Banking", slug: "/industries/finance-and-banking", number: "01", accentText: "text-amber-400" },
  { title: "Education", slug: "/industries/education", number: "05", accentText: "text-rose-400" },
  { title: "E-commerce", slug: "/industries/e-commerce", number: "04", accentText: "text-violet-400" },
];

// ─── Theme ───────────────────────────────────────────────────────────────────

const theme = {
  accentText: "text-emerald-400",
  accentBg:   "bg-emerald-400/10",
  accentBorder: "border-emerald-400/20",
  accentHex: "#34d399",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Label({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8" style={{ background: theme.accentHex }} />
      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.accentText}`}>{text}</span>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HealthcareContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-[#0d0d14]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0d0d14] pt-32 pb-20 overflow-hidden border-b border-white/[0.06]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: `${theme.accentHex}18` }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black text-white/20 tracking-widest">02</span>
            <div className="h-px w-4" style={{ background: theme.accentHex }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.accentHex }}>Healthcare · Clinical & Revenue AI</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.0] tracking-tight max-w-4xl mb-6">
            {before}<span style={{ color: theme.accentHex }}>{hero.highlight}</span>{after}
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10">{hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="#"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-md transition-opacity hover:opacity-90 text-slate-900"
              style={{ background: theme.accentHex }}
            >
              {hero.cta1} →
            </Link>
            <Link href="#"
              className="inline-flex items-center gap-2 bg-white/[0.06] text-white/70 font-bold text-sm px-6 py-3.5 rounded-md border border-white/10 hover:bg-white/10 hover:text-white transition-all"
            >
              {hero.cta2}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {hero.badges.map((b) => (
              <span key={b}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText}`}
              >{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <Label text="Sector Overview" />
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">{overview.heading}</h2>
              <p className={`text-base font-semibold leading-relaxed mb-4 ${theme.accentText}`}>{overview.lead}</p>
              <p className="text-sm text-white/40 leading-relaxed mb-8">{overview.body}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className={`${theme.accentBg} border ${theme.accentBorder} rounded-xl p-4`}>
                    <div className={`text-2xl font-black leading-none mb-1 ${theme.accentText}`}>{s.val}</div>
                    <div className="text-[10px] font-bold text-white/35 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className={`rounded-xl p-5 border ${theme.accentBorder} bg-white/[0.02] hover:bg-white/[0.04] transition-colors`}>
                  <h4 className={`text-xs font-black uppercase tracking-wide mb-2 ${theme.accentText}`}>{c.title}</h4>
                  <p className="text-sm text-white/45 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Benefits" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When AI Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#0d0d14] p-7 hover:bg-white/[0.03] transition-colors group">
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className={`text-sm font-black text-white mb-2 leading-snug group-hover:${theme.accentText} transition-colors`}>{b.title}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Capabilities" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.title} className={`rounded-2xl border ${theme.accentBorder} bg-white/[0.02] p-6 flex gap-4 hover:bg-white/[0.04] transition-colors`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${theme.accentBg} border ${theme.accentBorder} flex items-center justify-center`}>
                  <span className={`text-[10px] font-black ${theme.accentText}`}>{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/90 mb-1">{f.title}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Methodology" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step) => (
              <div key={step.num} className={`rounded-2xl border ${theme.accentBorder} bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors`}>
                <div className={`text-xs font-black tracking-widest mb-4 ${theme.accentText}`}>{step.num}</div>
                <h4 className="text-sm font-black text-white mb-3">{step.title}</h4>
                <p className="text-xs text-white/35 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Label text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-white/[0.06]">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: theme.accentHex }} />
                    <div>
                      <h4 className="text-sm font-bold text-white/80 mb-1">{p.title}</h4>
                      <p className="text-sm text-white/35 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className={`rounded-2xl border ${theme.accentBorder} ${theme.accentBg} p-8`}>
                <h3 className={`text-lg font-black mb-3 ${theme.accentText}`}>{whyUs.box.heading}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white/[0.06] rounded-lg px-4 py-3">
                      <span className={`text-xl font-black ${theme.accentText}`}>{s.val}</span>
                      <span className="text-xs text-white/35 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <Label text="Frequently Asked Questions" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-white/[0.07]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className={`flex-shrink-0 w-5 h-5 rounded ${theme.accentBg} border ${theme.accentBorder} flex items-center justify-center text-[9px] font-black ${theme.accentText} mt-0.5`}>Q</span>
                    <span className="text-sm font-bold text-white/75 leading-snug">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 text-white/20 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-sm text-white/40 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#111118] py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: theme.accentHex }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.accentHex }}>Get Started</span>
            <div className="h-px w-8" style={{ background: theme.accentHex }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base text-white/40 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="#"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-md hover:opacity-90 transition-opacity text-slate-900"
              style={{ background: theme.accentHex }}
            >
              {cta.cta1} →
            </Link>
            <Link href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.06] text-white/70 font-bold text-sm px-7 py-4 rounded-md border border-white/10 hover:bg-white/10 hover:text-white transition-all"
            >
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs text-white/20">Dubai, UAE · Karachi, Pakistan · info@agenticsense.ai · agenticsense.ai</p>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────── */}
      <section className="bg-[#0d0d14] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/20 mb-8">Related Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedIndustries.map((r) => (
              <Link key={r.slug} href={r.slug}
                className="group bg-white/[0.02] rounded-xl p-6 border border-white/[0.07] hover:bg-white/[0.05] hover:border-white/[0.14] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black tracking-widest ${r.accentText}`}>{r.number}</span>
                  <span className="text-white/20 group-hover:text-white/50 transition-colors text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-white/70 group-hover:text-white transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
