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
    { val: "24/7", label: "AI academic advisor availability" },
    { val: "Adaptive", label: "Personalised learning paths per student" },
    { val: "Real-time", label: "Student outcome analytics" },
    { val: "100%", label: "Agent actions audit-logged" },
  ],
  cards: [
    { title: "Adaptive Learning Systems", body: "AI that adjusts learning content, pacing and assessment to individual student performance — closing gaps before they become failures." },
    { title: "Administrative Automation", body: "Enrolment processing, timetable management, resource allocation and compliance reporting — agents that own the administrative load end to end." },
    { title: "Virtual Academic Advisors", body: "AI advisors that answer student queries about courses, requirements and deadlines 24/7 — with escalation to human advisors for complex cases." },
    { title: "Student Analytics", body: "Engagement patterns, assessment performance, at-risk identification and cohort analytics — real-time intelligence for academic leadership and support teams." },
  ],
};

const benefits = [
  { icon: "📚", title: "Every student gets a personalised path", body: "Adaptive AI adjusts content and pacing to each student's demonstrated understanding — not the average of the cohort. Struggling students get support before they fall behind." },
  { icon: "⏳", title: "Faculty time returned to teaching", body: "Administrative tasks — grading routine assessments, managing enrolment queries, compiling compliance reports — handled by agents. Faculty focus on the work that requires them." },
  { icon: "🎯", title: "At-risk students identified early", body: "Engagement and assessment analytics surface students at risk of disengagement or failure weeks before it becomes irreversible — giving support teams time to intervene." },
  { icon: "💬", title: "Student support available around the clock", body: "AI advisors answer course and administrative queries at any hour — reducing the volume reaching human advisors and improving student experience simultaneously." },
  { icon: "📊", title: "Institutional analytics without manual compilation", body: "Retention rates, completion rates, assessment distributions and cohort performance — available to leadership in real time, not assembled quarterly." },
  { icon: "🔒", title: "Student data protected", body: "Agents deploy on your infrastructure with appropriate data governance — student records and communication history managed to the standards your institution requires." },
];

const features = [
  { num: "01", title: "Adaptive learning path engine", body: "AI that adjusts content sequencing, difficulty and assessment timing based on individual student performance data from your LMS." },
  { num: "02", title: "At-risk student identification", body: "Early warning models that combine engagement, assessment and attendance data to flag students at risk of disengagement — before they withdraw." },
  { num: "03", title: "24/7 virtual academic advisor", body: "Conversational AI that answers queries about course requirements, deadlines, module selection and institutional processes — integrated with your SIS." },
  { num: "04", title: "Automated enrolment processing", body: "Application intake, document verification, requirement checking and enrolment confirmation — agents that handle the full enrolment workflow end to end." },
  { num: "05", title: "Assessment automation", body: "Automated marking of structured assessments, plagiarism screening and grade distribution analytics — with human review on borderline cases." },
  { num: "06", title: "Timetable and resource optimisation", body: "AI scheduling that optimises room utilisation, faculty allocation and cohort sequencing — reducing conflicts and improving capacity efficiency." },
  { num: "07", title: "Compliance reporting automation", body: "Automated compilation of regulatory and accreditation reports — extraction from SIS and LMS data, validation and structured output for review." },
  { num: "08", title: "Student outcome analytics dashboard", body: "Real-time cohort analytics — retention, completion, assessment performance, engagement rates — for academic leadership and quality teams." },
];

const processData = [
  { num: "01", title: "Institutional Audit", body: "We review your LMS, SIS and CRM architecture, data governance requirements and pedagogical framework before any design decisions." },
  { num: "02", title: "Workflow Design", body: "Learning pathways, administrative workflows, advisor escalation logic and success metrics agreed with academic and operational leadership before build." },
  { num: "03", title: "Build & Integrate", body: "Agent development against your live LMS, SIS and student data — tested against real course structures and student scenarios." },
  { num: "04", title: "Pilot & Validate", body: "Pilot with a defined cohort or programme — measuring learning outcomes, administrative efficiency and student satisfaction before full rollout." },
  { num: "05", title: "Expand & Improve", body: "Expansion across programmes, faculties and administrative functions — with continuous model improvement as student data grows." },
];

const whyUs = {
  heading: "Education AI That Understands Pedagogy and Operations, Not Just EdTech Vocabulary.",
  points: [
    { title: "Pedagogical depth, not just technology", body: "We understand how adaptive learning should work — spaced repetition, formative assessment, mastery-based progression — and build agents that implement these principles." },
    { title: "LMS and SIS native integration", body: "We integrate through your LMS and SIS official APIs — Canvas, Moodle, Blackboard, Banner, PeopleSoft. Your student data and course structure inform the agent from the start." },
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
  { q: "How do adaptive learning agents interact with our curriculum?", a: "Adaptive agents work within the curriculum your faculty designs — adjusting sequence, pacing and resource recommendations within the defined learning objectives. They do not generate curriculum without faculty approval." },
  { q: "Which LMS platforms do you integrate with?", a: "Canvas, Moodle, Blackboard, D2L Brightspace and major SIS platforms including Banner, PeopleSoft and Ellucian — through their official APIs and LTI integration standards." },
  { q: "How do you handle student data privacy?", a: "Student data stays within your institutional infrastructure through your LMS and SIS official APIs with role-appropriate permissions. We do not store student data in AgenticSense systems." },
  { q: "Can AI advisors handle complex programme decisions?", a: "AI advisors handle factual queries. They do not make programme decisions on complex cases. Escalation to a human advisor is triggered automatically when a query exceeds the agent's defined scope." },
  { q: "How do you measure the impact of adaptive learning?", a: "We agree outcome metrics before deployment — assessment pass rates, time-to-completion, at-risk identification accuracy. We run a defined pilot cohort before full rollout so you see evidence of impact before committing to expansion." },
];

const cta = {
  heading: "Where Is Administrative Overhead Consuming the Most Faculty and Staff Capacity?",
  body: "In a free Education AI Assessment, we identify your highest-value automation opportunity and show you what a production agent looks like in your environment. No cost, no obligation.",
  cta1: "Book Your Free Assessment",
  cta2: "Request a Demo"
};

const relatedIndustries = [
  { title: "Healthcare", slug: "/industries/healthcare", number: "02" },
  { title: "E-commerce", slug: "/industries/e-commerce", number: "04" },
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

// ─── Component ───────────────────────────────────────────────────────────────

export default function EducationContent() {
  const [before, after] = hero.headline.split(hero.highlight);

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-brand-secondary/20">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-brand-primary/10 dark:border-white/10">
        {/* Subtle mesh background accent matching secondary brand color */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black opacity-30 tracking-widest">05</span>
            <div className="h-px w-4 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Education · Learning & Operations AI</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-primary dark:text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}<span className="text-brand-secondary">{hero.highlight}</span>{after}
          </h1>
          
          <p className="text-lg opacity-70 leading-relaxed max-w-2xl mb-10">{hero.sub}</p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="#" className="inline-flex items-center justify-center gap-2 font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md transition-all bg-brand-secondary text-white hover:opacity-90 shadow-md shadow-brand-secondary/20">
              {hero.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-brand-primary/5 dark:bg-white/5 font-bold text-sm px-4 sm:px-6 py-3.5 rounded-md border border-brand-primary/10 dark:border-white/10 hover:bg-brand-primary/10 dark:hover:bg-white/10 transition-all">
              {hero.cta2}
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {hero.badges.map((b) => (
              <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <Label text="Sector Overview" />
              <h2 className="text-3xl md:text-4xl font-black text-brand-primary dark:text-white leading-tight mb-5">{overview.heading}</h2>
              <p className="text-base font-semibold leading-relaxed mb-4 text-brand-secondary">{overview.lead}</p>
              <p className="text-sm opacity-70 leading-relaxed mb-8">{overview.body}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-xl p-4">
                    <div className="text-2xl font-black leading-none mb-1 text-brand-secondary">{s.val}</div>
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="rounded-xl p-5 border border-brand-primary/10 dark:border-white/5 bg-background hover:border-brand-secondary/30 transition-colors shadow-sm">
                  <h4 className="text-xs font-black uppercase tracking-wide mb-2 text-brand-secondary">{c.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Benefits" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary dark:text-white tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When AI Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-brand-primary/[0.01] dark:bg-white/[0.02] border border-brand-primary/5 dark:border-white/5 rounded-2xl p-7 hover:border-brand-secondary/30 transition-colors group">
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-base font-bold text-brand-primary dark:text-white mb-2 leading-snug group-hover:text-brand-secondary transition-colors">{b.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Capabilities" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary dark:text-white tracking-tight mb-12 max-w-2xl leading-tight">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-brand-primary/10 dark:border-white/5 bg-background p-6 flex gap-4 hover:border-brand-secondary/20 transition-colors shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center">
                  <span className="text-xs font-black text-brand-secondary">{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-primary dark:text-white mb-1">{f.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Methodology" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary dark:text-white tracking-tight mb-14 max-w-2xl leading-tight">How We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {processData.map((step) => (
              <div key={step.num} className="rounded-2xl border border-brand-primary/5 dark:border-white/5 bg-brand-primary/[0.01] dark:bg-white/[0.01] p-6 hover:border-brand-secondary/30 transition-colors">
                <div className="text-xs font-black tracking-widest mb-4 text-brand-secondary">{step.num}</div>
                <h4 className="text-sm font-black text-brand-primary dark:text-white mb-3">{step.title}</h4>
                <p className="text-xs opacity-60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Label text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-brand-primary dark:text-white tracking-tight mb-8 leading-tight">{whyUs.heading}</h2>
              <div className="divide-y divide-brand-primary/10 dark:divide-white/10">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-brand-secondary" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-primary dark:text-white mb-1">{p.title}</h4>
                      <p className="text-sm opacity-60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-8">
                <h3 className="text-lg font-black mb-3 text-brand-primary dark:text-brand-secondary">{whyUs.box.heading}</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-background rounded-lg px-4 py-3 shadow-sm border border-brand-secondary/10">
                      <span className="text-lg font-black text-brand-secondary">{s.val}</span>
                      <span className="text-xs opacity-60 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Label text="Frequently Asked Questions" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary dark:text-white tracking-tight mb-12 leading-tight">Questions We Hear Every Time</h2>
          <div className="divide-y divide-brand-primary/10 dark:divide-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-[10px] font-black text-brand-secondary mt-0.5">Q</span>
                    <span className="text-sm font-bold text-brand-primary dark:text-white/90 leading-snug">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 opacity-40 group-open:rotate-180 transition-transform mt-0.5 text-xs">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-sm opacity-60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-brand-primary/[0.02] dark:bg-white/[0.01] py-20 border-b border-brand-primary/10 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">Get Started</span>
            <div className="h-px w-8 bg-brand-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary dark:text-white tracking-tight leading-tight mb-5">{cta.heading}</h2>
          <p className="text-base opacity-60 leading-relaxed mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="#" className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-md bg-brand-secondary text-white hover:opacity-90 transition-opacity shadow-md shadow-brand-secondary/10">
              {cta.cta1} →
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-brand-primary/5 dark:bg-white/5 font-bold text-sm px-7 py-4 rounded-md border border-brand-primary/10 dark:border-white/10 hover:bg-brand-primary/10 dark:hover:bg-white/10 transition-all">
              {cta.cta2}
            </Link>
          </div>
          <p className="text-xs opacity-40 pt-4">Dubai, UAE · Karachi, Pakistan · info@agenticsense.ai · agenticsense.ai</p>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-8">Related Industries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedIndustries.map((r) => (
              <Link key={r.slug} href={r.slug} className="group bg-brand-primary/[0.01] dark:bg-white/[0.01] rounded-xl p-6 border border-brand-primary/5 dark:border-white/10 hover:border-brand-secondary/40 hover:bg-background transition-all shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black tracking-widest text-brand-secondary/70">{r.number}</span>
                  <span className="opacity-30 group-hover:opacity-100 group-hover:text-brand-secondary transition-all text-sm">→</span>
                </div>
                <h4 className="text-sm font-bold text-brand-primary dark:text-white/80 group-hover:text-brand-secondary transition-colors leading-snug">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}