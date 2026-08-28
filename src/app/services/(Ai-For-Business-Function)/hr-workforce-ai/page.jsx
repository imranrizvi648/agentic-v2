"use client";

import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  number: "03",
  tagline: "AI for Business Functions · HR & Workforce",
  headline: "Agentic AI for HR and Workforce Operations",
  highlight: "HR and Workforce Operations",
  sub: "Reduce administrative HR work while keeping employment decisions with accountable people. Our agents organize candidate and employee workflows, retrieve policy evidence and coordinate approved actions.",
  cta1: "Discuss Your Workflow",
  cta2: "Explore Sub-Services",
  badges: ["HRIS", "ATS", "Email · Calendar", "Learning Platforms"],
};

const overview = {
  heading: "Preparatory work automated — employment decisions stay human",
  lead: "HR workflows combine sensitive data, policy requirements, repeated coordination and high-impact decisions.",
  body: "AgenticSense automates preparatory and administrative steps, applies configured controls and ensures that hiring, performance and employee-relations decisions remain human-led.",
};

const sectors = [
  {
    id: "private",
    title: "Private sector",
    body: "Accelerate recruitment, improve onboarding consistency and reduce time spent answering repetitive policy or employee-service requests.",
  },
  {
    id: "public",
    title: "Public sector",
    body: "Support transparent recruitment administration, workforce deployment, policy access and employee case routing with strong evidence and auditability.",
  },
];

const problems = [
  "High CV screening volume",
  "Manual interview coordination",
  "Inconsistent onboarding",
  "Repeated HR questions",
  "Fragmented employee documents",
  "Sensitive decision risk",
];

const subServices = [
  {
    title: "CV Intake and Classification",
    body: "Collect CVs from approved sources, extract candidate information, normalize profiles and route applications by role.",
  },
  {
    title: "Candidate Screening Support",
    body: "Compare evidence against declared job criteria, identify missing information and prepare a transparent review summary without making final hiring decisions.",
  },
  {
    title: "Interview Coordination",
    body: "Check stakeholder availability, propose slots, send approved communications and maintain interview status.",
  },
  {
    title: "Employee Onboarding",
    body: "Coordinate document collection, account requests, orientation tasks, policy acknowledgements and manager checklists.",
  },
  {
    title: "HR Policy & Employee Knowledge",
    body: "Answer employee questions from approved policies and procedures, with source links and escalation when interpretation is required.",
  },
  {
    title: "Employee Request and Case Routing",
    body: "Classify leave, benefits, payroll, letter and workplace requests and route them with complete context.",
  },
  {
    title: "Learning and Capability Support",
    body: "Recommend approved learning material, answer training questions and track completion of required activities.",
  },
  {
    title: "Workforce & Compliance Reporting",
    body: "Prepare headcount, recruitment, onboarding and policy-compliance summaries from authorized data.",
  },
];

const workflowSteps = [
  { num: "01", title: "Receive candidate or employee request" },
  { num: "02", title: "Classify purpose and sensitivity" },
  { num: "03", title: "Retrieve approved role, policy or context" },
  { num: "04", title: "Prepare summary or administrative action" },
  { num: "05", title: "Apply fairness, privacy and approval controls" },
  { num: "06", title: "Route decision to accountable owner" },
  { num: "07", title: "Execute permitted follow-up after approval" },
  { num: "08", title: "Record outcome and retain required evidence" },
];

const systemBadges = [
  "HRIS Platforms",
  "ATS Systems",
  "Email & Calendar",
  "Learning Platforms",
  "Identity Systems",
  "Document Repositories",
  "Employee Databases",
];

const controls = [
  { title: "Sensitive-data minimization", desc: "Only the data needed for the step is retrieved and shown to the agent or reviewer." },
  { title: "Role-based access", desc: "HR, manager and system roles control what can be seen and actioned." },
  { title: "Explainable criteria", desc: "Screening summaries reference declared job criteria and source evidence." },
  { title: "Bias testing & fairness controls", desc: "Configured checks help surface risk before human decision-makers act." },
  { title: "Human hiring decisions", desc: "Final hiring, performance and employee-relations decisions stay with accountable people." },
  { title: "Retention policies & activity logging", desc: "Outcomes and evidence are retained per policy with a complete activity trail." },
];

const outcomes = [
  "Shorter screening cycles",
  "More consistent onboarding",
  "Lower routine HR workload",
  "Improved policy access",
  "Better case traceability",
  "Clearer decision evidence",
];

const faqs = [
  {
    q: "Which HR & workforce workflows can AI agents support?",
    a: "Agents support CV intake and classification, candidate screening summaries, interview coordination, employee onboarding, policy Q&A, employee request routing, learning support, and workforce reporting — always with human ownership of hiring and sensitive employment decisions.",
  },
  {
    q: "How are integrations, approvals and sensitive data handled?",
    a: "We connect to HRIS, ATS, email, calendars, document systems and learning platforms through approved interfaces. Sensitive data is minimized, access is role-based, screening uses explainable criteria, bias controls can be configured, and final employment decisions remain with accountable HR or management owners with full activity logging.",
  },
];

const cta = {
  heading: "Ready to put governed agents on your HR workflows?",
  body: "Tell us how candidates are screened, interviews are scheduled, onboarding is run and employees get policy answers today. We will map where agents can reduce admin load while keeping employment decisions human-led.",
  cta1: "Discuss Your Workflow",
  cta2: "View All Services",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a194d]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,5,28,0.70) 0%, rgba(26,25,77,0.2) 50%, rgba(10,8,38,0.60) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 85% 20%, rgba(98,94,255,0.25) 0%, rgba(98,94,255,0.05) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.88)] via-[rgba(18,16,60,0.5)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[rgba(26,25,77,0.65)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.4)] to-transparent" />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HrWorkforcePage() {
  const parts = hero.headline.split(hero.highlight);
  const before = parts[0] || "";
  const after = parts[1] || "";

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">
      {/* Hero */}
      <section
        aria-label="HR and Workforce Operations AI service header"
        className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] overflow-hidden flex items-center font-sans py-16 sm:py-24"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#a095ff] font-mono mb-6 backdrop-blur-md">
                <span>{hero.number}</span>
                <span>•</span>
                <span className="text-white/80">{hero.tagline}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
                {before}
                <span className="text-[#a095ff]">{hero.highlight}</span>
                {after}
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl mb-10">{hero.sub}</p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-md transition-all hover:opacity-90 bg-brand-secondary text-white shadow-lg shadow-brand-secondary/25"
                >
                  {hero.cta1}
                  <span className="text-white/70">→</span>
                </Link>
                <a
                  href="#sub-services"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-md transition-all bg-white/10 text-white border border-white/20 hover:bg-white/15 backdrop-blur-sm"
                >
                  {hero.cta2}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">Works with</span>
                {hero.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-semibold text-white/90 bg-white/10 border border-white/20 hover:border-white/40 backdrop-blur-md px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Glassmorphic HR Live Visual */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl border border-white/20 bg-white/[0.07] backdrop-blur-xl p-6 shadow-2xl shadow-indigo-950/60 group hover:border-white/30 transition-all">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono text-[#a095ff] uppercase tracking-wider font-semibold">
                      Live HR Operations Stream
                    </span>
                  </div>
                  <span className="text-[11px] text-white/40 font-mono">Governed Agent</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                    <div className="text-[#a095ff] mb-1">[09:20] CV Intake</div>
                    <div className="text-white/80">Parsed candidate profile: Senior Full-Stack Engineer</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                    <div className="text-emerald-400 mb-1">[09:21] Criteria Matching</div>
                    <div className="text-white/80">Matched against job profile. Privacy minimization applied.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-brand-secondary/20 border border-brand-secondary/40">
                    <div className="text-white font-semibold mb-1">Human Review Required</div>
                    <div className="text-white/70">Candidate summary routed to Lead Recruiter for final interview sign-off.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight mb-5">
                {overview.heading}
              </h2>

              <p className="text-sm sm:text-base font-semibold leading-relaxed text-brand-secondary mb-4 border-l-2 border-brand-secondary/40 pl-4">
                {overview.lead}
              </p>

              <p className="text-sm text-brand-primary/70 leading-relaxed">
                {overview.body}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tight">
                  Built for commercial HR teams and public workforce programs
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {sectors.map((s, idx) => (
                  <div
                    key={s.id || idx}
                    className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-secondary/30"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-brand-secondary font-bold mt-1 bg-brand-secondary/10 px-2 py-1 rounded">
                        0{idx + 1}
                      </span>

                      <div>
                        <h4 className="text-base font-bold text-brand-primary mb-1.5">
                          {s.title}
                        </h4>

                        <p className="text-sm text-brand-primary/65 leading-relaxed">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 sm:py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-10 max-w-2xl">
            Friction that slows HR and people teams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3.5 rounded-xl border border-brand-primary/10 bg-brand-secondary/[0.03] px-5 py-4 hover:border-brand-secondary/30 hover:bg-white hover:shadow-sm transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-brand-secondary shrink-0" />
                <span className="text-sm font-semibold text-brand-primary">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NO-CARD Sub-services Section */}
      <section id="sub-services" className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-3 max-w-2xl">
            What agents deliver for HR and workforce operations
          </h2>
          <p className="text-sm text-brand-primary/60 mb-14 max-w-2xl">
            Each capability prepares evidence and coordinates admin steps — final employment decisions stay with accountable people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {subServices.map((s, i) => (
              <div
                key={s.title}
                className="group relative pl-6 border-l-2 border-brand-primary/15 hover:border-brand-secondary transition-all duration-300 py-1"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-brand-secondary mb-2 block group-hover:translate-x-0.5 transition-transform">
                   {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-primary/65 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NO-CARD Dark Workflow Section */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#12103c] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#818388]/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-14 max-w-2xl">
            From request to recorded evidence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between p-6 rounded bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300 shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold tracking-widest text-[#a095ff] mb-3 font-mono">
                    {step.num}.
                  </span>
                  <p className="text-sm font-medium text-white/90 leading-snug group-hover:text-white transition-colors">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems & Guardrails */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tight mb-4">
                Connected to the tools HR already uses
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {systemBadges.map((sys) => (
                  <span
                    key={sys}
                    className="text-xs font-medium text-brand-primary/80 bg-white border border-slate-200 shadow-2xs px-3 py-1.5 rounded-lg"
                  >
                    {sys}
                  </span>
                ))}
              </div>

              <div className="relative w-full h-92 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-2 shadow-lg group">
               <img
  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
  alt="Operations & Shared Services Analytics Dashboard"
  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent rounded-xl pointer-events-none" />
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tight mb-6">
                Guardrails that keep employment decisions human
              </h2>
              <ul className="space-y-1">
                {controls.map((c) => (
                  <li key={c.title} className="flex gap-3.5 p-3 rounded-xl hover:bg-white hover:shadow-xs transition-colors border border-transparent hover:border-slate-100">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-secondary shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-brand-primary mb-0.5">{c.title}</p>
                      <p className="text-sm text-brand-primary/65 leading-relaxed">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 sm:py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-10 max-w-2xl">
            Results HR leaders track
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div
                key={o}
                className="rounded-xl border border-brand-secondary/20 bg-brand-secondary/5 px-5 py-4 flex items-center gap-3 hover:border-brand-secondary/40 hover:bg-white transition-all shadow-2xs"
              >
                <span className="text-brand-secondary font-bold text-sm">✓</span>
                <span className="text-sm font-semibold text-brand-primary">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs & CTA */}
      <section className="py-16 sm:py-24 bg-slate-50/50 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-8">
                Common questions
              </h2>
              <div className="space-y-3.5">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-xl border border-brand-primary/10 bg-white p-5 transition-all duration-300 open:shadow-md open:border-brand-secondary/30 hover:border-brand-primary/25"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                      <span className="text-sm font-bold text-brand-primary leading-snug">
                        {f.q}
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-brand-primary/70 group-open:rotate-180 group-open:bg-brand-primary group-open:text-white transition-all duration-300 shrink-0 text-xs">
                        ▾
                      </span>
                    </summary>
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <p className="text-sm text-brand-primary/70 leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-8">
              <div className="bg-white p-6 sm:p-8 rounded border border-brand-primary/10 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary tracking-tight leading-tight mb-3">
                    {cta.heading}
                  </h2>
                  <p className="text-sm text-brand-primary/60 leading-relaxed mb-8">
                    {cta.body}
                  </p>
                </div>

                <div>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="relative inline-flex items-center justify-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-lg text-white shadow-md transition-all duration-300 hover:opacity-95 bg-gradient-to-r from-[#171c50] via-[#2a308c] to-[#5956f6] border border-white/10 group overflow-hidden"
                    >
                      <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white/60 pointer-events-none" />
                      <span>{cta.cta1}</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white/60 pointer-events-none" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 bg-brand-primary/[0.03] text-brand-primary/80 font-bold text-sm px-6 py-3.5 rounded-lg border border-brand-primary/10 hover:bg-brand-primary/[0.06] hover:text-brand-primary transition-all text-center"
                    >
                      {cta.cta2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}