import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Clinical Teams Shouldn't Be Doing Paperwork That AI Can Handle.",
  highlight: "Paperwork That AI Can Handle.",
  sub: "AI agents that automate revenue cycle management, clinical documentation, pre-authorisation and patient scheduling — so your clinicians focus on patient care, not administrative burden.",
  cta1: "Book a Free Healthcare AI Assessment",
  cta2: "See Our Clinical AI Capabilities",
  badges: ["Hospital Information Systems", "RCM Platforms", "EHR Integration", "HL7 / FHIR"]
};

const overview = {
  heading: "AI That Reduces Administrative Burden Without Compromising Care Quality",
  lead: "Healthcare's administrative load is unsustainable. Pre-authorisation delays, documentation gaps, billing errors and scheduling inefficiencies drain clinical capacity and revenue simultaneously.",
  body: "Every agent we deploy in healthcare is built to the data governance standards the sector requires — full audit logging, role-based access, data isolation and human oversight on every decision that touches patient outcomes. We integrate through HL7 FHIR-compliant APIs and your HIS's official interfaces.",
  stats: [
    { val: "FHIR",  label: "HL7 FHIR-compliant integration" },
    { val: "100%",  label: "Agent actions audit-logged" },
    { val: "HITL",  label: "Human oversight on patient-critical decisions" },
    { val: "Weeks", label: "From pilot to production" },
  ],
  cards: [
    { title: "Revenue Cycle Management",    body: "Pre-authorisation automation, claim submission, denial management and patient statement processing — agents that own the full billing cycle." },
    { title: "Clinical Documentation AI",   body: "Structured data extraction from clinical notes, discharge summaries and referral letters — reducing documentation burden on clinical staff." },
    { title: "Patient Scheduling & Triage", body: "AI-driven appointment optimisation, waitlist management and intelligent triage routing — reducing no-shows and improving capacity utilisation." },
    { title: "Predictive Patient Analytics", body: "Readmission risk models, length-of-stay prediction and population health analytics — evidence-based insights for clinical decision support." },
  ],
};

const benefits = [
  { icon: "", title: "Clinical time returned to clinical work", body: "Administrative tasks that consumed nursing and administrative staff hours are handled by agents — freeing capacity for patient-facing care." },
  { icon: "", title: "Revenue cycle accelerated",             body: "Pre-auth submissions, claim follow-up and denial management run continuously — shortening the gap between care delivery and cash collection." },
  { icon: "", title: "Fewer claim denials",                   body: "Documentation completeness checks before submission catch the issues that trigger denials — reducing rework and improving first-pass acceptance rates." },
  { icon: "", title: "Population health visibility",          body: "Aggregated patient data surfaces patterns — readmission risk, chronic condition clusters, capacity trends — that static reporting cannot." },
  { icon: "", title: "Patient data stays protected",          body: "Agents deploy on your own infrastructure through FHIR-compliant APIs. Patient data never leaves your environment or passes through third-party systems." },
  { icon: "", title: "Governance to healthcare standards",   body: "Role-based access, full audit trails and human-in-the-loop checkpoints on patient-critical decisions — designed to survive a clinical governance review." },
];

const features = [
  { num: "01", title: "Pre-authorisation automation",        body: "AI agents that submit pre-auth requests, track payer responses and escalate urgent cases — without manual chasing." },
  { num: "02", title: "Clinical documentation extraction",   body: "Structured data from clinical notes, discharge summaries and referral documents — reducing transcription burden and improving data completeness." },
  { num: "03", title: "Claim submission & tracking",         body: "Automated claim generation, submission and status monitoring — with denial pattern analysis to prevent repeat rejections." },
  { num: "04", title: "Appointment & waitlist optimisation", body: "AI scheduling that reduces gaps, manages cancellation fill and routes patients to appropriate care pathways automatically." },
  { num: "05", title: "Readmission risk prediction",         body: "Models trained on your patient population flag high-risk discharges — giving care teams time to intervene before readmission occurs." },
  { num: "06", title: "Patient communication agents",        body: "Automated appointment reminders, pre-admission instructions and post-discharge follow-up — reducing no-shows and improving care continuity." },
  { num: "07", title: "Referral management",                 body: "Structured processing of inbound referrals — extraction, triage scoring, specialist routing and acknowledgement — without manual handling." },
  { num: "08", title: "Capacity analytics dashboard",        body: "Real-time visibility of bed occupancy, theatre utilisation, outpatient throughput and staffing ratios — for operational leadership." },
];

const processData = [
  { num: "01", title: "Governance Audit",    body: "We map your data governance requirements, consent frameworks, access control structures and integration landscape before any architecture decisions." },
  { num: "02", title: "Workflow Design",     body: "Clinical and administrative workflows documented end to end — with human oversight points and compliance requirements agreed before build." },
  { num: "03", title: "Build & Integrate",   body: "Agent development against your HIS, RCM and EHR through official FHIR-compliant interfaces — tested against real patient data scenarios." },
  { num: "04", title: "Govern & Deploy",     body: "Go-live with full audit logging, role-based access, patient data isolation and clinical governance controls active from day one." },
  { num: "05", title: "Monitor & Improve",   body: "Ongoing performance monitoring, model updates and expansion across clinical and administrative workflows as your organisation scales." },
];

const whyUs = {
  heading: "Healthcare AI That Understands Clinical Operations, Not Just Healthcare Vocabulary.",
  points: [
    { title: "Operational depth across the care pathway", body: "We understand RCM workflows, clinical documentation requirements, pre-auth logic and discharge processes — not just that healthcare has these things." },
    { title: "Data governance to healthcare standards",   body: "Patient data isolation, consent-aware access controls and audit trails built to the standards your clinical governance and information governance teams require." },
    { title: "FHIR-compliant integration",               body: "We integrate through HL7 FHIR-compliant APIs and your HIS's official interfaces — not screen scraping or middleware that breaks at the next system upgrade." },
    { title: "Human oversight on patient-critical decisions", body: "Agents handle the volume work. Clinical and operational judgement stays with your people. Every decision that touches patient outcomes has a human checkpoint." },
  ],
  box: {
    heading: "Built for Clinical Governance",
    body: "Patient data protection and clinical audit requirements are designed into the architecture from phase one — not added when the governance team asks.",
    stats: [
      { val: "FHIR", label: "HL7-compliant integration standard" },
      { val: "100%", label: "Patient data stays in your environment" },
      { val: "HITL", label: "Human oversight on all patient-critical paths" },
    ],
  },
};

const faqs = [
  { q: "How do you protect patient data?",                           a: "Agents deploy on your own infrastructure through FHIR-compliant APIs. Patient data never leaves your environment, never passes through AgenticSense systems and is never stored by us." },
  { q: "Can AI agents replace clinical staff?",                      a: "No. Agents handle administrative and data-processing tasks. Clinical decisions remain with clinicians. We design explicit human oversight checkpoints into every patient-critical workflow." },
  { q: "Which healthcare IT systems do you integrate with?",         a: "We integrate through HL7 FHIR-compliant APIs and the official interfaces of major HIS, RCM and EHR platforms. Specific integration paths are identified in the assessment phase." },
  { q: "Can we start with revenue cycle before expanding to clinical workflows?", a: "Yes. Most healthcare engagements start with pre-authorisation or claim submission, prove value in production, then expand. You are never committed to a full rollout before seeing results." },
  { q: "How do you handle systems that are not FHIR-compliant?",    a: "We assess your specific landscape and identify the cleanest, most maintainable integration path for each system — which may include official database views, batch exports or vendor-supported integration layers." },
];

const cta = {
  heading: "What Administrative Burden Is Consuming the Most Clinical Capacity?",
  body: "In a free Healthcare AI Assessment, we map your highest-value automation opportunity, show you what a production agent looks like in your environment, and give you an honest view of integration requirements, data governance and expected outcomes — at no cost.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};

const relatedIndustries = [
  { title: "Finance & Banking", slug: "/industries/finance-and-banking", number: "01" },
  { title: "Education",         slug: "/industries/education",           number: "05" },
  { title: "E-commerce",        slug: "/industries/e-commerce",          number: "04" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Label({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8 bg-brand-secondary" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">{text}</span>
    </div>
  );
}

// ─── Static Hero Background (ContactHero style, no canvas, no JS) ─────────────
function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a194d]" />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg,rgba(6,5,28,0.55) 0%,rgba(26,25,77,0) 50%,rgba(10,8,38,0.40) 100%)" }} />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 70% at 90% 0%,rgba(98,94,255,0.22) 0%,rgba(98,94,255,0.06) 45%,transparent 70%)" }} />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 40% 60% at 5% 60%,rgba(98,94,255,0.10) 0%,transparent 65%)" }} />
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{`
            @keyframes flowLine {
              0%   { stroke-dashoffset: 2000; opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 0.6; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            .fl { stroke-dasharray: 2000; animation: flowLine linear infinite both; }
          `}</style>
        </defs>
        {[
          { d:"M 648 0 C 792 49 432 385 72 595",    dur:"9s",   del:"0s",   a:"0.06" },
          { d:"M 734 0 C 864 56 497 399 158 609",    dur:"11s",  del:"1.2s", a:"0.08" },
          { d:"M 820 0 C 936 63 562 413 244 623",    dur:"10s",  del:"2.4s", a:"0.05" },
          { d:"M 906 0 C 1008 70 627 427 330 637",   dur:"13s",  del:"0.6s", a:"0.09" },
          { d:"M 992 0 C 1080 77 692 441 416 651",   dur:"8s",   del:"3.0s", a:"0.07" },
          { d:"M 1078 0 C 1152 84 757 455 502 665",  dur:"12s",  del:"1.8s", a:"0.06" },
          { d:"M 1164 0 C 1224 91 822 469 588 679",  dur:"9.5s", del:"4.2s", a:"0.05" },
          { d:"M 1250 0 C 1296 98 887 483 674 693",  dur:"14s",  del:"0.3s", a:"0.08" },
          { d:"M 1336 0 C 1368 105 952 497 760 700", dur:"11s",  del:"2.1s", a:"0.06" },
          { d:"M 562 0 C 720 42 367 371 -14 581",    dur:"10s",  del:"3.6s", a:"0.07" },
        ].map((l, i) => (
          <path key={i} className="fl" d={l.d} stroke="white"
            strokeWidth={i % 3 === 0 ? "0.8" : "0.45"}
            strokeLinecap="round" strokeOpacity={l.a}
            style={{ animationDuration: l.dur, animationDelay: l.del }} />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.82)] via-[rgba(18,16,60,0.45)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[rgba(26,25,77,0.65)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.4)] to-transparent" />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HealthcareContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ── Hero — dark navy static, ContactHero style ──────── */}
      <section
        aria-label="Healthcare AI — industry page header"
        className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[72vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black text-white/30 tracking-widest">02</span>
            <div className="h-px w-4 bg-[#625eff]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a095ff]">
              Healthcare · Clinical &amp; Revenue AI
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-[#a095ff]">{hero.highlight}</span>{after}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-2xl mb-10">
            {hero.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all hover:opacity-90 bg-[#625eff] text-white shadow-lg shadow-[#625eff]/30">
              {hero.cta1} →
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.07] text-white/80 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md border border-white/[0.14] hover:bg-white/[0.12] hover:text-white transition-all">
              {hero.cta2}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {hero.badges.map((b) => (
              <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#625eff]/30 bg-[#625eff]/10 text-[#a095ff]">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <Label text="Sector Overview" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight mb-5">{overview.heading}</h2>
              <p className="text-base font-semibold leading-relaxed mb-4 text-brand-secondary">{overview.lead}</p>
              <p className="text-sm text-brand-primary/70 leading-relaxed mb-8">{overview.body}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-xl p-4">
                    <div className="text-2xl font-black leading-none mb-1 text-brand-secondary">{s.val}</div>
                    <div className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="rounded-xl p-5 border border-brand-primary/10 bg-white hover:bg-slate-50 transition-colors shadow-sm shadow-brand-primary/5">
                  <h4 className="text-xs font-black uppercase tracking-wide mb-2 text-brand-secondary">{c.title}</h4>
                  <p className="text-sm text-brand-primary/70 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Benefits" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When AI Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-primary/10 rounded-2xl overflow-hidden shadow-sm">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-7 hover:bg-slate-50/80 transition-colors group">
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-sm font-bold text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">{b.title}</h3>
                <p className="text-xs text-brand-primary/60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Capabilities" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-brand-primary/10 bg-white p-6 flex gap-4 hover:bg-slate-50 transition-colors shadow-sm shadow-brand-primary/5">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-secondary/5 border border-brand-secondary/10 flex items-center justify-center">
                  <span className="text-[10px] font-black text-brand-secondary">{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-primary mb-1">{f.title}</h4>
                  <p className="text-xs text-brand-primary/60 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Methodology" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {processData.map((step) => (
              <div key={step.num} className="rounded-2xl border border-brand-primary/10 bg-white p-6 hover:bg-slate-50 transition-colors shadow-sm shadow-brand-primary/5">
                <div className="text-xs font-black tracking-widest mb-4 text-brand-secondary">{step.num}</div>
                <h4 className="text-sm font-black text-brand-primary mb-3">{step.title}</h4>
                <p className="text-xs text-brand-primary/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-brand-primary/10">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-brand-secondary" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-primary/90 mb-1">{p.title}</h4>
                      <p className="text-sm text-brand-primary/60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-brand-primary mb-3">{whyUs.box.heading}</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-brand-secondary/10 shadow-sm shadow-brand-primary/5">
                      <span className="text-xl font-black text-brand-secondary">{s.val}</span>
                      <span className="text-xs text-brand-primary/60 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Label text="Frequently Asked Questions" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-brand-primary/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-brand-secondary/5 border border-brand-secondary/10 flex items-center justify-center text-[9px] font-black text-brand-secondary mt-0.5">Q</span>
                    <span className="text-sm font-bold text-brand-primary/80 leading-snug group-hover:text-brand-secondary transition-colors">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 text-brand-primary/40 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-sm text-brand-primary/60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 border-b border-brand-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Get Started</span>
            <div className="h-px w-8 bg-brand-secondary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base text-brand-primary/60 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-md hover:opacity-90 transition-all bg-brand-secondary text-white shadow-sm shadow-brand-secondary/20">
              {cta.cta1} →
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary/[0.03] text-brand-primary/80 font-bold text-sm px-7 py-4 rounded-md border border-brand-primary/10 hover:bg-brand-primary/[0.06] hover:text-brand-primary transition-all">
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs text-brand-primary/40">Dubai, UAE · Karachi, Pakistan · info@agenticsense.co · agenticsense.co</p>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary/30 mb-8">Related Industries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedIndustries.map((r) => (
              <Link key={r.slug} href={r.slug}
                className="group bg-white rounded-xl p-6 border border-brand-primary/10 hover:bg-slate-50 hover:border-brand-primary/20 transition-all shadow-sm shadow-brand-primary/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black tracking-widest text-brand-secondary/70">{r.number}</span>
                  <span className="text-brand-primary/30 group-hover:text-brand-primary/60 transition-colors text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-brand-primary/70 group-hover:text-brand-primary transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}