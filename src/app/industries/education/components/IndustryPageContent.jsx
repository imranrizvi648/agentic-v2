import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "Your Educators Should Be Teaching, Not Managing Administrative Systems.",
  highlight: "Managing Administrative Systems.",
  sub: "AI agents that power adaptive learning, automate administrative workflows, provide intelligent academic advising and deliver student outcome analytics \u2014 so your educators focus on learning, not logistics.",
  cta1: "Book a Free Education AI Assessment",
  cta2: "See Our EdTech AI Capabilities",
  badges: ["LMS Platforms", "SIS Integration", "CRM Systems", "Analytics Platforms"]
};
const overview = {
  heading: "AI That Improves Student Outcomes While Reducing Operational Overhead",
  lead: "Education institutions face a dual pressure: improve student outcomes with constrained resources. Generic AI addresses neither effectively. We build agents that personalise learning at scale, automate the administrative burden and surface the analytics that enable better decisions.",
  body: "From adaptive learning paths that adjust to individual student progress to AI advisors that support students 24/7, our agents integrate with your LMS, SIS and CRM through official APIs. Every student interaction is logged appropriately. Every recommendation is explainable. Faculty maintain visibility and control throughout.",
  stats: [
  { val: "24/7", label: "AI academic advisor availability" },
  { val: "Adaptive", label: "Personalised learning paths per student" },
  { val: "Real-time", label: "Student outcome analytics" },
  { val: "100%", label: "Agent actions audit-logged" },
],
  cards: [
  { title: "Adaptive Learning Systems", body: "AI that adjusts learning content, pacing and assessment to individual student performance \u2014 closing gaps before they become failures." },
  { title: "Administrative Automation", body: "Enrolment processing, timetable management, resource allocation and compliance reporting \u2014 agents that own the administrative load end to end." },
  { title: "Virtual Academic Advisors", body: "AI advisors that answer student queries about courses, requirements and deadlines 24/7 \u2014 with escalation to human advisors for complex cases." },
  { title: "Student Analytics", body: "Engagement patterns, assessment performance, at-risk identification and cohort analytics \u2014 real-time intelligence for academic leadership and support teams." },
],
};
const benefits = [
  { icon: "\ud83d\udcda", title: "Every student gets a personalised path", body: "Adaptive AI adjusts content and pacing to each student's demonstrated understanding \u2014 not the average of the cohort. Struggling students get support before they fall behind." },
  { icon: "\u23f1", title: "Faculty time returned to teaching", body: "Administrative tasks \u2014 grading routine assessments, managing enrolment queries, compiling compliance reports \u2014 handled by agents. Faculty focus on the work that requires them." },
  { icon: "\ud83c\udfaf", title: "At-risk students identified early", body: "Engagement and assessment analytics surface students at risk of disengagement or failure weeks before it becomes irreversible \u2014 giving support teams time to intervene." },
  { icon: "\ud83d\udcac", title: "Student support available around the clock", body: "AI advisors answer course and administrative queries at any hour \u2014 reducing the volume reaching human advisors and improving student experience simultaneously." },
  { icon: "\ud83d\udcca", title: "Institutional analytics without manual compilation", body: "Retention rates, completion rates, assessment distributions and cohort performance \u2014 available to leadership in real time, not assembled quarterly." },
  { icon: "\ud83d\udd12", title: "Student data protected", body: "Agents deploy on your infrastructure with appropriate data governance \u2014 student records and communication history managed to the standards your institution requires." },
];
const features = [
  { num: "01", title: "Adaptive learning path engine", body: "AI that adjusts content sequencing, difficulty and assessment timing based on individual student performance data from your LMS." },
  { num: "02", title: "At-risk student identification", body: "Early warning models that combine engagement, assessment and attendance data to flag students at risk of disengagement \u2014 before they withdraw." },
  { num: "03", title: "24/7 virtual academic advisor", body: "Conversational AI that answers queries about course requirements, deadlines, module selection and institutional processes \u2014 integrated with your SIS." },
  { num: "04", title: "Automated enrolment processing", body: "Application intake, document verification, requirement checking and enrolment confirmation \u2014 agents that handle the full enrolment workflow end to end." },
  { num: "05", title: "Assessment automation", body: "Automated marking of structured assessments, plagiarism screening and grade distribution analytics \u2014 with human review on borderline cases." },
  { num: "06", title: "Timetable and resource optimisation", body: "AI scheduling that optimises room utilisation, faculty allocation and cohort sequencing \u2014 reducing conflicts and improving capacity efficiency." },
  { num: "07", title: "Compliance reporting automation", body: "Automated compilation of regulatory and accreditation reports \u2014 extraction from SIS and LMS data, validation and structured output for review." },
  { num: "08", title: "Student outcome analytics dashboard", body: "Real-time cohort analytics \u2014 retention, completion, assessment performance, engagement rates \u2014 for academic leadership and quality teams." },
];
const process = [
  { num: "01", title: "Institutional Audit", body: "We review your LMS, SIS and CRM architecture, data governance requirements and pedagogical framework before any design decisions." },
  { num: "02", title: "Workflow Design", body: "Learning pathways, administrative workflows, advisor escalation logic and success metrics agreed with academic and operational leadership before build." },
  { num: "03", title: "Build & Integrate", body: "Agent development against your live LMS, SIS and student data \u2014 tested against real course structures and student scenarios." },
  { num: "04", title: "Pilot & Validate", body: "Pilot with a defined cohort or programme \u2014 measuring learning outcomes, administrative efficiency and student satisfaction before full rollout." },
  { num: "05", title: "Expand & Improve", body: "Expansion across programmes, faculties and administrative functions \u2014 with continuous model improvement as student data grows." },
];
const whyUs = {
  heading: "Education AI That Understands Pedagogy and Operations, Not Just EdTech Vocabulary.",
  points: [
  { title: "Pedagogical depth, not just technology", body: "We understand how adaptive learning should work \u2014 spaced repetition, formative assessment, mastery-based progression \u2014 and build agents that implement these principles." },
  { title: "LMS and SIS native integration", body: "We integrate through your LMS and SIS official APIs \u2014 Canvas, Moodle, Blackboard, Banner, PeopleSoft. Your student data and course structure inform the agent from the start." },
  { title: "Faculty control maintained", body: "Adaptive learning agents operate within the curriculum boundaries faculty define. No agent changes learning content without faculty oversight. Every recommendation is explainable." },
  { title: "Student data governance", body: "Student records, assessment data and communication history are managed with appropriate access controls to the standards your institution and regulators require." },
],
  box: {
    heading: "Faculty in Control",
    body: "Adaptive learning agents operate within the pedagogical boundaries faculty define. Every AI decision is visible, explainable and overrideable.",
    stats: [
  { val: "LMS", label: "Native LMS/SIS integration" },
  { val: "24/7", label: "AI advisor availability" },
  { val: "100%", label: "Student data stays in your environment" },
],
  },
};
const faqs = [
  { q: "How do adaptive learning agents interact with our curriculum?", a: "Adaptive agents work within the curriculum your faculty designs \u2014 adjusting sequence, pacing and resource recommendations within the defined learning objectives. They do not generate curriculum without faculty approval." },
  { q: "Which LMS platforms do you integrate with?", a: "Canvas, Moodle, Blackboard, D2L Brightspace and major SIS platforms including Banner, PeopleSoft and Ellucian \u2014 through their official APIs and LTI integration standards." },
  { q: "How do you handle student data privacy?", a: "Student data stays within your institutional infrastructure through your LMS and SIS official APIs with role-appropriate permissions. We do not store student data in AgenticSense systems." },
  { q: "Can AI advisors handle complex programme decisions?", a: "AI advisors handle factual queries. They do not make programme decisions on complex cases. Escalation to a human advisor is triggered automatically when a query exceeds the agent's defined scope." },
  { q: "How do you measure the impact of adaptive learning?", a: "We agree outcome metrics before deployment \u2014 assessment pass rates, time-to-completion, at-risk identification accuracy. We run a defined pilot cohort before full rollout so you see evidence of impact before committing to expansion." },
];
const cta = {
  heading: "Where Is Administrative Overhead Consuming the Most Faculty and Staff Capacity?",
  body: "In a free Education AI Assessment, we identify your highest-value automation opportunity and show you what a production agent looks like in your environment. No cost, no obligation.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};
const relatedIndustries = [
  { title: "Healthcare", slug: "/industries/healthcare", number: "02", accentText: "text-emerald-400" },
  { title: "E-commerce", slug: "/industries/e-commerce", number: "04", accentText: "text-violet-400" },
  { title: "Real Estate", slug: "/industries/real-estate", number: "03", accentText: "text-sky-400" },
];

// ─── Theme ───────────────────────────────────────────────────────────────────

const theme = {
  accentText: "text-rose-400",
  accentBg:   "bg-rose-400/10",
  accentBorder: "border-rose-400/20",
  accentHex: "#fb7185",
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

export default function EducationContent() {
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
            <span className="text-xs font-black text-white/20 tracking-widest">05</span>
            <div className="h-px w-4" style={{ background: theme.accentHex }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.accentHex }}>Education · Learning & Operations AI</span>
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
