"use client";

import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  number: "01",
  tagline: "AI for Business Functions · Sales & Revenue",
  headline: "Agentic AI for Sales and Revenue Operations",
  highlight: "Revenue Operations",
  sub: "Give sales teams decision-ready account intelligence and reliable workflow execution. Our agents research, organize, draft and coordinate while relationship owners retain control of outreach and commercial decisions.",
  cta1: "Discuss Your Workflow",
  cta2: "Explore Sub-Services",
  badges: ["Salesforce", "Microsoft Dynamics", "HubSpot", "CRM + Email + Calendar"],
};

const overview = {
  heading: "Governed workflows that keep opportunities moving",
  lead: "Revenue teams lose time moving information between research sources, CRM, email, calendars, proposals and internal approvals.",
  body: "AgenticSense creates governed workflows that keep opportunities moving, maintain reliable records and help teams focus on conversations that require human judgment.",
};

const sectors = [
  {
    id: "private",
    title: "Private sector",
    body: "Improve pipeline quality, reduce administrative sales work, shorten response time and increase consistency across account development.",
  },
  {
    id: "public",
    title: "Public sector",
    body: "Support investor engagement, stakeholder outreach, economic-development programs, service enrollment and structured relationship management without compromising official approvals.",
  },
];

const problems = [
  "Fragmented account research",
  "Incomplete CRM records",
  "Inconsistent qualification",
  "Missed follow-ups",
  "Slow proposal preparation",
  "Limited visibility into relationship history",
];

const subServices = [
  {
    title: "Account and Market Intelligence",
    body: "Create source-linked briefs from approved company, market and relationship information.",
  },
  {
    title: "Lead and Opportunity Qualification",
    body: "Score fit, flag missing data and route qualified opportunities to the right owner.",
  },
  {
    title: "CRM Data Management",
    body: "Create or enrich records, normalize fields, capture interaction summaries and surface stale or incomplete opportunities.",
  },
  {
    title: "Personalized Engagement Support",
    body: "Prepare approved, evidence-based email, LinkedIn and meeting drafts for human review.",
  },
  {
    title: "Follow-Up and Meeting Coordination",
    body: "Monitor agreed actions, prepare reminders, identify suitable scheduling options and record outcomes after approval.",
  },
  {
    title: "Proposal and RFP Assistance",
    body: "Gather requirements, retrieve relevant capabilities and evidence, build response outlines and coordinate reviewer inputs.",
  },
  {
    title: "Relationship and Stakeholder Intelligence",
    body: "Map decision makers, champions, blockers and historical touchpoints to improve account planning.",
  },
  {
    title: "Pipeline Monitoring and Forecast Support",
    body: "Detect stalled opportunities, missing next steps and inconsistent stage data; prepare management-ready pipeline summaries.",
  },
  {
    title: "Customer Expansion and Retention Signals",
    body: "Monitor service history, engagement and account changes to surface evidence-based expansion or retention opportunities.",
  },
];

const workflowSteps = [
  { num: "01", title: "Capture target account or opportunity" },
  { num: "02", title: "Research approved internal and external sources" },
  { num: "03", title: "Build account and stakeholder context" },
  { num: "04", title: "Score fit and identify missing evidence" },
  { num: "05", title: "Prepare recommended next action or draft" },
  { num: "06", title: "Obtain relationship-owner approval" },
  { num: "07", title: "Update CRM and schedule permitted follow-up" },
  { num: "08", title: "Monitor outcome and improve future recommendations" },
];

const systems =
  "Salesforce, Microsoft Dynamics, HubSpot, email, calendars, document libraries, proposal repositories, web research tools and internal customer databases.";

const controls = [
  { title: "Approved messaging libraries", desc: "Agents only use claims and language from verified corporate content." },
  { title: "Human review before external communication", desc: "No outreach or proposal is sent without relationship-owner authorization." },
  { title: "Contact permissions & opt-out rules", desc: "Suppression lists and consent rules enforced across channels." },
  { title: "Source traceability", desc: "Every fact in an account brief links back to its source." },
  { title: "Restricted access to commercial data", desc: "Role-based controls for confidential terms and customer records." },
];

const outcomes = [
  "More complete CRM data",
  "Faster account preparation",
  "More consistent qualification",
  "Reduced missed follow-ups",
  "Shorter proposal turnaround",
  "Better management visibility",
];

const faqs = [
  {
    q: "Which sales & revenue workflows can AI agents support?",
    a: "Agents support account and market research, lead and opportunity qualification, CRM enrichment, personalized engagement drafts, follow-up and meeting coordination, proposal and RFP assistance, stakeholder mapping, pipeline monitoring, and expansion or retention signals — always with human approval before external actions.",
  },
  {
    q: "How are integrations, approvals and sensitive data handled?",
    a: "We connect to systems such as Salesforce, Microsoft Dynamics, HubSpot, email and calendars through approved interfaces. Messaging is limited to approved libraries, contact permissions and opt-out rules are enforced, every external communication requires human review, and commercial data access is restricted with full source traceability.",
  },
];

const cta = {
  heading: "Ready to put governed agents on your revenue workflows?",
  body: "Tell us how your team researches accounts, updates CRM, qualifies opportunities and prepares proposals. We will map where agents can reduce friction while keeping relationship owners in control of outreach and commercial decisions.",
  cta1: "Discuss Your Workflow",
  cta2: "View All Services",
};

const relatedServices = [
  { title: "Customer Service", slug: "/services/customer-service-ai", number: "02" },
  { title: "Enterprise Integration", slug: "/services/erp-crm-ai-integration", number: "03" },
  { title: "Responsible AI Governance", slug: "/services/ai-governance-security-mlops", number: "09" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a194d]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,5,28,0.55) 0%, rgba(26,25,77,0) 50%, rgba(10,8,38,0.40) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 90% 0%, rgba(98,94,255,0.22) 0%, rgba(98,94,255,0.06) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.82)] via-[rgba(18,16,60,0.45)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[rgba(26,25,77,0.65)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.4)] to-transparent" />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SalesRevenuePage() {
  const parts = hero.headline.split(hero.highlight);
  const before = parts[0] || "";
  const after = parts[1] || "";

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        aria-label="Sales and Revenue Operations AI service header"
        className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[72vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}
            <span className="text-[#a095ff]">{hero.highlight}</span>
            {after}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-2xl mb-10">{hero.sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all hover:opacity-90 bg-brand-secondary text-white shadow-sm shadow-brand-secondary/30"
            >
              {hero.cta1}
              <span className="text-white/70">→</span>
            </Link>
            <a
              href="#sub-services"
              className="inline-flex items-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all bg-white/10 text-white border border-white/20 hover:bg-white/15"
            >
              {hero.cta2}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">Works with</span>
            {hero.badges.map((b) => (
              <span
                key={b}
                className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
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
                  Built for commercial teams and institutional programs
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {sectors.map((s, idx) => (
                  <div
                    key={s.id || idx}
                    className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-brand-primary/40 font-bold mt-1">
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

      {/* ── Problems ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-10 max-w-2xl">
            Friction that slows revenue teams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-xl border border-brand-primary/10 bg-brand-secondary/5 px-5 py-4 hover:border-brand-secondary/25 transition-colors"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-primary">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NO-CARD Sub-services Section ──────────────────────── */}
      <section id="sub-services" className="py-16 sm:py-20 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-3 max-w-2xl">
            Capabilities across the revenue lifecycle
          </h2>
          <p className="text-sm text-brand-primary/60 mb-12 max-w-2xl">
            Every capability is designed for human review before external communication and clear ownership of commercial decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {subServices.map((s, i) => (
              <div key={s.title} className="flex flex-col items-start">
                <span className="text-[11px] font-bold tracking-widest text-brand-secondary mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-brand-primary mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-primary/65 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NO-CARD Workflow Section ─────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#12103c] relative overflow-hidden">
        {/* Soft Background Glow Effects */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#818388]/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-12 max-w-2xl">
            From target capture to continuous improvement
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between p-6 rounded bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 shadow-xl"
              >
                {/* Subtle Accent Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold tracking-widest text-brand-secondary mb-3 font-mono">
                    {step.num}.
                  </span>
                  <p className="text-sm font-medium text-white/90 leading-snug">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Systems & Guardrails ─────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tight mb-4">
                Connected to your revenue stack
              </h2>
              <p className="text-sm text-brand-primary/70 leading-relaxed mb-6">
                {systems}
              </p>

              <div className="relative w-full h-72 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-2 shadow-lg group">
                    <img
  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
  alt="Operations & Shared Services Analytics Dashboard"
  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
/>
      
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tight mb-6">
                Guardrails on every interaction
              </h2>
              <ul className="space-y-4">
                {controls.map((c) => (
                  <li key={c.title} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-brand-primary">{c.title}</p>
                      <p className="text-sm text-brand-primary/60 leading-relaxed">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-10 max-w-2xl">
            Results revenue leaders track
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div
                key={o}
                className="rounded-xl border border-brand-secondary/20 bg-brand-secondary/5 px-5 py-4 flex items-center gap-3 hover:border-brand-secondary/35 transition-colors"
              >
                <span className="text-brand-secondary font-bold text-sm">✓</span>
                <span className="text-sm font-semibold text-brand-primary">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs & CTA ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-6">
                Common questions
              </h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-xl border border-brand-primary/10 bg-white p-4 transition-all duration-200 open:shadow-sm open:ring-1 open:ring-brand-primary/10 hover:border-brand-primary/20"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                      <span className="text-sm font-bold text-brand-primary leading-snug">
                        {f.q}
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-brand-primary/70 group-open:rotate-180 group-open:bg-brand-primary group-open:text-white transition-all duration-200 flex-shrink-0 text-xs">
                        ▾
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100">
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
                  <div className="flex flex-col gap-3 mb-6">
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