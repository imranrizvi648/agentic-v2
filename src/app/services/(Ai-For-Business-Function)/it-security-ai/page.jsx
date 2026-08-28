"use client";

import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  number: "06",
  tagline: "AI for Business Functions · IT & Security",
  headline: "Agentic AI for IT and Security Operations",
  highlight: "IT and Security Operations",
  sub: "Help IT and security teams investigate, coordinate and resolve work faster. Agents retrieve operational context, apply runbooks, use approved tools and keep people responsible for privileged or high-impact actions.",
  cta1: "Discuss Your Workflow",
  cta2: "Explore Sub-Services",
  badges: ["ServiceNow", "Jira SM", "SIEM · CMDB", "Identity Providers"],
};

const overview = {
  heading: "Classification, evidence and runbooks — with strict controls",
  lead: "IT and security operations generate high volumes of alerts, tickets and repetitive diagnostic work.",
  body: "AgenticSense automates classification, evidence collection, runbook steps and coordination while enforcing strict identity, access and change controls.",
};

const sectors = [
  {
    id: "private",
    title: "Private sector",
    body: "Improve service levels, reduce mean time to resolution and increase analyst capacity across infrastructure, applications and security operations.",
  },
  {
    id: "public",
    title: "Public sector",
    body: "Strengthen digital-service continuity, standardized incident handling, audit evidence and secure access to public-sector systems.",
  },
];

const problems = [
  "High ticket volume",
  "Slow initial diagnosis",
  "Alert fatigue",
  "Repeated runbook execution",
  "Incomplete incident evidence",
  "Risky privileged actions",
];

const subServices = [
  {
    title: "IT Service Desk Agent",
    body: "Classify tickets, retrieve known solutions, collect diagnostics, resolve permitted requests and escalate with complete context.",
  },
  {
    title: "Incident Triage and Coordination",
    body: "Assess impact and urgency, correlate related events, notify responders and maintain a structured incident timeline.",
  },
  {
    title: "Knowledge-Grounded Troubleshooting",
    body: "Use approved technical documentation and live context to propose verifiable diagnostic steps.",
  },
  {
    title: "Access Request Processing",
    body: "Validate request details, approvals and policy requirements before routing or executing permitted access changes.",
  },
  {
    title: "Change and Release Support",
    body: "Check prerequisites, coordinate evidence, prepare change records and monitor post-change signals.",
  },
  {
    title: "Security Alert Investigation",
    body: "Enrich alerts with identity, asset and event context; prioritize risk; and prepare analyst-ready findings.",
  },
  {
    title: "Vulnerability and Remediation Coordination",
    body: "Prioritize vulnerabilities, identify owners, track remediation and report overdue or high-risk exposure.",
  },
  {
    title: "Compliance Evidence Collection",
    body: "Assemble system, access, change and incident evidence for internal and external review.",
  },
  {
    title: "Operational Health Briefings",
    body: "Summarize service reliability, major incidents, open risks and recurring failure patterns.",
  },
];

const workflowSteps = [
  { num: "01", title: "Receive ticket, alert or system signal" },
  { num: "02", title: "Classify scope, urgency and risk" },
  { num: "03", title: "Retrieve asset, identity, history and runbook context" },
  { num: "04", title: "Perform approved diagnostic or low-risk steps" },
  { num: "05", title: "Request approval for privileged or material action" },
  { num: "06", title: "Escalate complex incidents to a human responder" },
  { num: "07", title: "Document timeline, evidence and resolution" },
  { num: "08", title: "Feed recurring patterns into reliability improvement" },
];

const systemBadges = [
  "ServiceNow",
  "Jira SM",
  "SIEM & SOC",
  "CMDB",
  "Identity Providers",
  "Cloud Platforms",
  "Knowledge Bases",
];

const controls = [
  { title: "Least privilege", desc: "Agents only access the systems and data required for the assigned workflow." },
  { title: "Separate agent identities", desc: "Agent activity is attributable and isolated from human operator accounts." },
  { title: "Approval for privileged actions", desc: "High-impact or privileged steps require explicit human authorization." },
  { title: "Sandboxing & command allowlists", desc: "Executable actions stay within approved tools and command sets." },
  { title: "Change controls & rollback", desc: "Material changes follow change process with defined recovery paths." },
  { title: "Full logging", desc: "Timeline, evidence and actions are retained for audit and review." },
];

const outcomes = [
  "Faster triage",
  "Reduced repetitive analyst work",
  "More complete incident evidence",
  "Improved service-level performance",
  "Consistent runbook execution",
  "Stronger security control",
];

const faqs = [
  {
    q: "Which IT & security workflows can AI agents support?",
    a: "Agents support IT service desk handling, incident triage and coordination, knowledge-grounded troubleshooting, access request processing, change and release support, security alert investigation, vulnerability remediation coordination, compliance evidence collection, and operational health briefings — with humans responsible for privileged and high-impact actions.",
  },
  {
    q: "How are integrations, approvals and sensitive data handled?",
    a: "We connect to ServiceNow, Jira Service Management, monitoring, SIEM, identity providers, CMDB and cloud platforms through approved interfaces. Agents operate under least privilege with separate identities; privileged actions require human approval; commands can be allowlisted and sandboxed; change controls and rollback procedures apply; and full logs are retained.",
  },
];

const cta = {
  heading: "Ready to put governed agents on IT and security operations?",
  body: "Tell us how tickets, alerts and incidents are handled today. We will map where agents can triage and coordinate while privileged actions stay with your team.",
  cta1: "Discuss Your Workflow",
  cta2: "View All Services",
};

const relatedServices = [
  { title: "Operations & Shared Services", slug: "/services/operations-automation-ai", number: "05" },
  { title: "Customer Service AI", slug: "/services/customer-service-ai", number: "02" },
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

// ─── Page Component ──────────────────────────────────────────────────────────

export default function ItSecurityPage() {
  const parts = hero.headline.split(hero.highlight);
  const before = parts[0] || "";
  const after = parts[1] || "";

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">
      {/* Hero */}
      <section
        aria-label="IT and Security Operations AI service header"
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

            {/* Glassmorphic Live Security Visual */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl border border-white/20 bg-white/[0.07] backdrop-blur-xl p-6 shadow-2xl shadow-indigo-950/60 group hover:border-white/30 transition-all">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono text-[#a095ff] uppercase tracking-wider font-semibold">
                      SecOps Automated Stream
                    </span>
                  </div>
                  <span className="text-[11px] text-white/40 font-mono">Least-Privilege Agent</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                    <div className="text-[#a095ff] mb-1">[16:40] SIEM Signal</div>
                    <div className="text-white/80">Correlated multi-failed login attempt from asset ID-8820.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                    <div className="text-emerald-400 mb-1">[16:41] Runbook Diagnostic</div>
                    <div className="text-white/80">Enriched with Identity Provider history & asset criticality score.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-brand-secondary/20 border border-brand-secondary/40">
                    <div className="text-white font-semibold mb-1">Human Approval Requested</div>
                    <div className="text-white/70">Privileged credential lockout prepared. Awaiting Tier-2 Analyst approval.</div>
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
                  Built for enterprise IT and public digital services
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
            Where IT and security operations lose time
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

      {/* Sub-services Section */}
      <section id="sub-services" className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight mb-3 max-w-2xl">
            What agents deliver for IT and security
          </h2>
          <p className="text-sm text-brand-primary/60 mb-14 max-w-2xl">
            Agents handle classification, evidence and coordination. Privileged and high-impact actions stay with people.
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

      {/* Dark Workflow Section */}
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
            From signal to documented resolution
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

      {/* Systems & Controls */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tight mb-4">
                Connected to IT and security tools
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

              <div className="relative w-full h-82 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-2 shadow-lg group">
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
                Guardrails on every privileged step
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
            Results IT and security leaders track
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