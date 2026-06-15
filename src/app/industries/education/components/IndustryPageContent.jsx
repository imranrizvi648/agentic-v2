import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Educators Should Be Teaching, Not Managing Administrative Systems.",
  highlight: "Managing Administrative Systems.",
  sub: "AI agents that power adaptive learning, automate administrative workflows, provide intelligent academic advising and deliver student outcome analytics — so your educators focus on learning, not logistics.",
  cta1: "Book a Free Education AI Assessment",
  cta2: "See Our EdTech AI Capabilities",
  badges: ["LMS Platforms", "SIS Integration", "CRM Systems", "Analytics Platforms"]
};

const overview = {
  heading: "AI That Improves Student Outcomes While Reducing Operational Overhead",
  lead: "Education institutions face a dual pressure: improve student outcomes with constrained resources. Generic AI addresses neither effectively. We build agents that personalise learning at scale, automate the administrative burden and surface the analytics that enable better decisions.",
  body: "From adaptive learning paths that adjust to individual student progress to AI advisors that support students 24/7, our agents integrate with your LMS, SIS and CRM through official APIs. Every student interaction is logged appropriately. Every recommendation is explainable. Faculty maintain visibility and control throughout.",
  stats: [
    { val: "24/7",     label: "AI academic advisor availability" },
    { val: "Adaptive", label: "Personalised learning paths per student" },
    { val: "Real-time",label: "Student outcome analytics" },
    { val: "100%",     label: "Agent actions audit-logged" },
  ],
  cards: [
    { title: "Adaptive Learning Systems",    body: "AI that adjusts learning content, pacing and assessment to individual student performance — closing gaps before they become failures." },
    { title: "Administrative Automation",    body: "Enrolment processing, timetable management, resource allocation and compliance reporting — agents that own the administrative load end to end." },
    { title: "Virtual Academic Advisors",    body: "AI advisors that answer student queries about courses, requirements and deadlines 24/7 — with escalation to human advisors for complex cases." },
    { title: "Student Analytics",            body: "Engagement patterns, assessment performance, at-risk identification and cohort analytics — real-time intelligence for academic leadership and support teams." },
  ],
};

const benefits = [
  { icon: "", title: "Every student gets a personalised path",       body: "Adaptive AI adjusts content and pacing to each student's demonstrated understanding — not the average of the cohort. Struggling students get support before they fall behind." },
  { icon: "", title: "Faculty time returned to teaching",            body: "Administrative tasks — grading routine assessments, managing enrolment queries, compiling compliance reports — handled by agents. Faculty focus on the work that requires them." },
  { icon: "", title: "At-risk students identified early",            body: "Engagement and assessment analytics surface students at risk of disengagement or failure weeks before it becomes irreversible — giving support teams time to intervene." },
  { icon: "", title: "Student support available around the clock",   body: "AI advisors answer course and administrative queries at any hour — reducing the volume reaching human advisors and improving student experience simultaneously." },
  { icon: "", title: "Institutional analytics without manual compilation", body: "Retention rates, completion rates, assessment distributions and cohort performance — available to leadership in real time, not assembled quarterly." },
  { icon: "", title: "Student data protected",                       body: "Agents deploy on your infrastructure with appropriate data governance — student records and communication history managed to the standards your institution requires." },
];

const features = [
  { num: "01", title: "Adaptive learning path engine",       body: "AI that adjusts content sequencing, difficulty and assessment timing based on individual student performance data from your LMS." },
  { num: "02", title: "At-risk student identification",      body: "Early warning models that combine engagement, assessment and attendance data to flag students at risk of disengagement — before they withdraw." },
  { num: "03", title: "24/7 virtual academic advisor",       body: "Conversational AI that answers queries about course requirements, deadlines, module selection and institutional processes — integrated with your SIS." },
  { num: "04", title: "Automated enrolment processing",      body: "Application intake, document verification, requirement checking and enrolment confirmation — agents that handle the full enrolment workflow end to end." },
  { num: "05", title: "Assessment automation",               body: "Automated marking of structured assessments, plagiarism screening and grade distribution analytics — with human review on borderline cases." },
  { num: "06", title: "Timetable and resource optimisation", body: "AI scheduling that optimises room utilisation, faculty allocation and cohort sequencing — reducing conflicts and improving capacity efficiency." },
  { num: "07", title: "Compliance reporting automation",     body: "Automated compilation of regulatory and accreditation reports — extraction from SIS and LMS data, validation and structured output for review." },
  { num: "08", title: "Student outcome analytics dashboard", body: "Real-time cohort analytics — retention, completion, assessment performance, engagement rates — for academic leadership and quality teams." },
];

const processData = [
  { num: "01", title: "Institutional Audit",   body: "We review your LMS, SIS and CRM architecture, data governance requirements and pedagogical framework before any design decisions." },
  { num: "02", title: "Workflow Design",        body: "Learning pathways, administrative workflows, advisor escalation logic and success metrics agreed with academic and operational leadership before build." },
  { num: "03", title: "Build & Integrate",      body: "Agent development against your live LMS, SIS and student data — tested against real course structures and student scenarios." },
  { num: "04", title: "Pilot & Validate",       body: "Pilot with a defined cohort or programme — measuring learning outcomes, administrative efficiency and student satisfaction before full rollout." },
  { num: "05", title: "Expand & Improve",       body: "Expansion across programmes, faculties and administrative functions — with continuous model improvement as student data grows." },
];

const whyUs = {
  heading: "Education AI That Understands Pedagogy and Operations, Not Just EdTech Vocabulary.",
  points: [
    { title: "Pedagogical depth, not just technology",  body: "We understand how adaptive learning should work — spaced repetition, formative assessment, mastery-based progression — and build agents that implement these principles." },
    { title: "LMS and SIS native integration",          body: "We integrate through your LMS and SIS official APIs — Canvas, Moodle, Blackboard, Banner, PeopleSoft. Your student data and course structure inform the agent from the start." },
    { title: "Faculty control maintained",              body: "Adaptive learning agents operate within the curriculum boundaries faculty define. No agent changes learning content without faculty oversight. Every recommendation is explainable." },
    { title: "Student data governance",                 body: "Student records, assessment data and communication history are managed with appropriate access controls to the standards your institution and regulators require." },
  ],
  box: {
    heading: "Faculty in Control",
    body: "Adaptive learning agents operate within the pedagogical boundaries faculty define. Every AI decision is visible, explainable and overrideable.",
    stats: [
      { val: "LMS",  label: "Native LMS/SIS integration" },
      { val: "24/7", label: "AI advisor availability" },
      { val: "100%", label: "Student data stays in your environment" },
    ],
  },
};

const faqs = [
  { q: "How do adaptive learning agents interact with our curriculum?",  a: "Adaptive agents work within the curriculum your faculty designs — adjusting sequence, pacing and resource recommendations within the defined learning objectives. They do not generate curriculum without faculty approval." },
  { q: "Which LMS platforms do you integrate with?",                     a: "Canvas, Moodle, Blackboard, D2L Brightspace and major SIS platforms including Banner, PeopleSoft and Ellucian — through their official APIs and LTI integration standards." },
  { q: "How do you handle student data privacy?",                        a: "Student data stays within your institutional infrastructure through your LMS and SIS official APIs with role-appropriate permissions. We do not store student data in AgenticSense systems." },
  { q: "Can AI advisors handle complex programme decisions?",             a: "AI advisors handle factual queries. They do not make programme decisions on complex cases. Escalation to a human advisor is triggered automatically when a query exceeds the agent's defined scope." },
  { q: "How do you measure the impact of adaptive learning?",            a: "We agree outcome metrics before deployment — assessment pass rates, time-to-completion, at-risk identification accuracy. We run a defined pilot cohort before full rollout so you see evidence of impact before committing to expansion." },
];

const cta = {
  heading: "Where Is Administrative Overhead Consuming the Most Faculty and Staff Capacity?",
  body: "In a free Education AI Assessment, we identify your highest-value automation opportunity and show you what a production agent looks like in your environment. No cost, no obligation.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};

const relatedIndustries = [
  { title: "Healthcare",  slug: "/industries/healthcare",  number: "02" },
  { title: "E-commerce",  slug: "/industries/e-commerce",  number: "04" },
  { title: "Real Estate", slug: "/industries/real-estate", number: "03" },
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
      {/* Base navy */}
      <div className="absolute inset-0 bg-[#1a194d]" />

      {/* Depth gradient */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg,rgba(6,5,28,0.55) 0%,rgba(26,25,77,0) 50%,rgba(10,8,38,0.40) 100%)" }} />

      {/* Radial glow — top-right */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 70% at 90% 0%,rgba(98,94,255,0.22) 0%,rgba(98,94,255,0.06) 45%,transparent 70%)" }} />

      {/* Secondary glow — left */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 40% 60% at 5% 60%,rgba(98,94,255,0.10) 0%,transparent 65%)" }} />

      {/* Dot-grid texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* CSS-animated bezier flow lines — same visual as canvas, zero JS */}
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
          { d:"M 648 0 C 792 49 432 385 72 595",   dur:"9s",   del:"0s",   a:"0.06" },
          { d:"M 734 0 C 864 56 497 399 158 609",   dur:"11s",  del:"1.2s", a:"0.08" },
          { d:"M 820 0 C 936 63 562 413 244 623",   dur:"10s",  del:"2.4s", a:"0.05" },
          { d:"M 906 0 C 1008 70 627 427 330 637",  dur:"13s",  del:"0.6s", a:"0.09" },
          { d:"M 992 0 C 1080 77 692 441 416 651",  dur:"8s",   del:"3.0s", a:"0.07" },
          { d:"M 1078 0 C 1152 84 757 455 502 665", dur:"12s",  del:"1.8s", a:"0.06" },
          { d:"M 1164 0 C 1224 91 822 469 588 679", dur:"9.5s", del:"4.2s", a:"0.05" },
          { d:"M 1250 0 C 1296 98 887 483 674 693", dur:"14s",  del:"0.3s", a:"0.08" },
          { d:"M 1336 0 C 1368 105 952 497 760 700",dur:"11s",  del:"2.1s", a:"0.06" },
          { d:"M 562 0 C 720 42 367 371 -14 581",   dur:"10s",  del:"3.6s", a:"0.07" },
        ].map((l, i) => (
          <path key={i} className="fl" d={l.d} stroke="white"
            strokeWidth={i % 3 === 0 ? "0.8" : "0.45"}
            strokeLinecap="round" strokeOpacity={l.a}
            style={{ animationDuration: l.dur, animationDelay: l.del }} />
        ))}
      </svg>

      {/* Left vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.82)] via-[rgba(18,16,60,0.45)] to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[rgba(26,25,77,0.65)] to-transparent pointer-events-none" />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.4)] to-transparent" />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function EducationContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ── Hero — dark navy static, ContactHero style ──────── */}
      <section
        aria-label="Education AI — industry page header"
        className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[72vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black text-white/30 tracking-widest">05</span>
            <div className="h-px w-4 bg-[#625eff]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a095ff]">
              Education · Learning &amp; Operations AI
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-[#a095ff]">{hero.highlight}</span>{after}
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-2xl mb-10">
            {hero.sub}
          </p>

          {/* CTAs */}
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

          {/* Badges */}
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
          <p className="text-xs text-brand-primary/40">Dubai, UAE · Karachi, Pakistan · info@agenticsense.co · agenticsense.ai</p>
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