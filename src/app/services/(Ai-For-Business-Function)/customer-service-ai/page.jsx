"use client";

import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  number: "02",
  tagline: "AI for Business Functions · Customer Service",
  headline: "Enterprise AI Agents for Customer Service",
  highlight: "Customer Service",
  sub: "Deliver faster, more consistent service across digital channels. AgenticSense grounds every response in approved knowledge, completes permitted actions and transfers sensitive or complex cases with full context.",
  cta1: "Discuss Your Workflow",
  cta2: "Explore Sub-Services",
  badges: ["Chat", "Email", "Voice", "CRM · Service Desk · Knowledge Base"],
};

const overview = {
  heading: "More than a chatbot a complete service workflow",
  lead: "Customer service requires more than a chatbot. A production service agent must understand intent, retrieve approved information, verify identity where required, use business systems, follow policy and know when to escalate.",
  body: "We design the complete service workflow around these responsibilities.",
};

const sectors = [
  {
    id: "private",
    title: "Private sector",
    body: "Reduce routine handling time, improve first-contact resolution, increase consistency and provide around-the-clock support for suitable requests.",
  },
  {
    id: "public",
    title: "Public sector",
    body: "Support citizen access, application-status support, complaint routing and service information while maintaining transparency, accessibility and accountable escalation.",
  },
];

const problems = [
  "Repeated low-complexity questions",
  "Inconsistent answers",
  "Slow case routing",
  "Disconnected channels",
  "Poor handover context",
  "Limited service-quality visibility",
];

const subServices = [
  {
    title: "Knowledge-Grounded Service Agent",
    body: "Answer questions using approved product, policy, service and account information with citations or internal evidence where appropriate.",
  },
  {
    title: "Omnichannel Chat, Email and Messaging",
    body: "Maintain a consistent service experience across web chat, email, WhatsApp or approved messaging channels.",
  },
  {
    title: "Enterprise Voice Agent",
    body: "Understand spoken requests, provide verified information, collect required details and transfer calls with a structured summary.",
  },
  {
    title: "Case Classification and Routing",
    body: "Identify intent, urgency, category and ownership; create or update cases; and route them to the correct queue.",
  },
  {
    title: "Complaint and Escalation Management",
    body: "Capture complaint evidence, apply escalation rules, monitor service deadlines and keep responsible teams informed.",
  },
  {
    title: "Status and Transaction Support",
    body: "Retrieve permitted order, application, delivery, appointment or service status after appropriate verification.",
  },
  {
    title: "Customer Sentiment and Quality Monitoring",
    body: "Analyze interactions for recurring issues, compliance gaps, escalation risk and coaching opportunities.",
  },
  {
    title: "Human-Agent Handover",
    body: "Transfer full conversation context, retrieved evidence, actions already taken and unresolved questions to a person.",
  },
  {
    title: "Service Analytics and Continuous Improvement",
    body: "Track containment, resolution, accuracy, escalation and satisfaction metrics to improve the workflow.",
  },
];

const workflowSteps = [
  { num: "01", title: "Receive request through an approved channel" },
  { num: "02", title: "Identify intent, language and risk level" },
  { num: "03", title: "Verify identity or entitlement when required" },
  { num: "04", title: "Retrieve approved knowledge and live system data" },
  { num: "05", title: "Answer or complete a permitted low-risk action" },
  { num: "06", title: "Escalate sensitive, uncertain or exceptional requests" },
  { num: "07", title: "Record outcome and service evidence" },
  { num: "08", title: "Analyze feedback and recurring failure patterns" },
];

const systems =
  "CRM, service desk, contact center, ERP, order management, appointment systems, knowledge bases, email, chat, voice and identity services.";

const controls = [
  {
    title: "Identity verification",
    desc: "Verify identity or entitlement before sensitive status or account actions.",
  },
  {
    title: "Approved-source retrieval",
    desc: "Answers draw only from approved product, policy and service knowledge.",
  },
  {
    title: "Restricted actions",
    desc: "Agents only complete low-risk actions allowed by policy.",
  },
  {
    title: "Content safeguards",
    desc: "Messaging stays within approved tone, claims and compliance rules.",
  },
  {
    title: "Service-level rules & escalation",
    desc: "Deadlines, thresholds and ownership drive when cases move to humans.",
  },
  {
    title: "Transcript logging & human review",
    desc: "High-risk cases and outcomes are logged and available for review.",
  },
];

const outcomes = [
  "Faster response time",
  "Higher consistency",
  "Reduced routine workload",
  "Improved case routing",
  "More complete handovers",
  "Stronger service analytics",
];

const faqs = [
  {
    q: "Which customer service workflows can AI agents support?",
    a: "Agents support knowledge-grounded Q&A, omnichannel chat and email, enterprise voice, case classification and routing, complaint handling, status and transaction support, sentiment monitoring, human handover with full context, and service analytics — always with escalation for sensitive or complex cases.",
  },
  {
    q: "How are integrations, approvals and sensitive data handled?",
    a: "We connect to CRM, service desk, contact center, ERP and identity systems through approved interfaces. Responses use approved knowledge only, identity verification runs where required, actions are restricted by policy, transcripts are logged, and high-risk cases always go to a human with full context.",
  },
];

const cta = {
  heading: "Ready to put governed agents on your service channels?",
  body: "Tell us how requests arrive today, which systems hold knowledge and status, and where escalation should always go to a person. We will map a production-ready service workflow.",
  cta1: "Discuss Your Workflow",
  cta2: "View All Services",
};

const relatedServices = [
  {
    title: "Sales & Revenue Operations",
    slug: "/services/sales-revenue-ai",
    number: "01",
  },
  {
    title: "Enterprise Integration",
    slug: "/services/erp-crm-ai-integration",
    number: "03",
  },
  {
    title: "Responsible AI Governance",
    slug: "/services/ai-governance-security-mlops",
    number: "09",
  },
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
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
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

export default function CustomerServicePage() {
  const parts = hero.headline.split(hero.highlight);
  const before = parts[0] || "";
  const after = parts[1] || "";

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        aria-label="Customer Service AI service header"
        className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[72vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {before}
            <span className="text-[#a095ff]">{hero.highlight}</span>
            {after}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-2xl mb-10">
            {hero.sub}
          </p>

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
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">
              Channels
            </span>
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
                  Built for commercial support and citizen service
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
            Friction that frustrates customers and teams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-xl border border-brand-primary/10 bg-brand-secondary/5 px-5 py-4 hover:border-brand-secondary/25 transition-colors"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-primary">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NO-CARD Sub-services Section ──────────────────────── */}
      <section
        id="sub-services"
        className="py-16 sm:py-20 bg-slate-50/60 border-b border-brand-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-3 max-w-2xl">
            Capabilities across the service lifecycle
          </h2>
          <p className="text-sm text-brand-primary/60 mb-12 max-w-2xl">
            Every capability is designed for approved knowledge, restricted
            actions and clean escalation to people.
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
                <p className="text-sm text-brand-primary/65 leading-relaxed">
                  {s.body}
                </p>
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
            From request to continuous improvement
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
                Connected to your service stack
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
                      <p className="text-sm font-bold text-brand-primary">
                        {c.title}
                      </p>
                      <p className="text-sm text-brand-primary/60 leading-relaxed">
                        {c.desc}
                      </p>
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
            Results service leaders track
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div
                key={o}
                className="rounded-xl border border-brand-secondary/20 bg-brand-secondary/5 px-5 py-4 flex items-center gap-3 hover:border-brand-secondary/35 transition-colors"
              >
                <span className="text-brand-secondary font-bold text-sm">
                  ✓
                </span>
                <span className="text-sm font-semibold text-brand-primary">
                  {o}
                </span>
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
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
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
