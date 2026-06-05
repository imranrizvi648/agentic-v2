import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
  headline: "AI That Plugs Into Your Enterprise Systems \u2014 Natively.",
  highlight: "Your Enterprise Systems \u2014 Natively.",
  sub: "Every ERP integration we build uses the vendor's own supported interfaces. No third-party connectors. No middleware that breaks at the next upgrade. Just clean, production-grade AI that runs where your data lives.",
  cta1: "Discuss Your Integration",
  cta2: "See the Platforms We Support",
  trustLabel: "Native integration across",
  badges: ["SAP Business One", "Oracle Fusion", "NetSuite", "Salesforce"],
};

const overview = {
  heading: "The Connector Is the Weak Link. We Remove It.",
  lead: "Most AI integrations rely on third-party middleware that breaks whenever the ERP updates. We take a different position: if an official API exists, we use it.",
  body: "We connect intelligent agents directly to your enterprise platforms \u2014 from SAP Business One's Service Layer and HANA to Oracle Fusion's REST APIs and OCI GenAI infrastructure \u2014 so your automation is robust, upgrade-safe and completely owned by you.",
  stats: [
  { val: "8+", label: "Enterprise platforms natively integrated" },
  { val: "Zero", label: "Third-party connectors used" },
  { val: "Linux", label: "Production deployment environment" },
  { val: "Custom", label: "Built from scratch \u2014 no templates" },
],
  cards: [
  { title: "SAP Business One", body: "Service Layer REST API and SAP HANA direct connection \u2014 the official production path, not a screen-scraping workaround." },
  { title: "Oracle Fusion Cloud", body: "REST APIs, OCI GenAI Agents and AI Agent Studio \u2014 full AI-native integration with Oracle's own intelligence layer." },
  { title: "NetSuite, Odoo & Zoho", body: "SuiteTalk REST/SuiteScript, official JSON-RPC and REST APIs \u2014 clean integrations for mid-market ERP environments." },
  { title: "Salesforce & Microsoft", body: "Salesforce REST/Bulk APIs plus Microsoft Fabric, Azure AI Foundry and Entra ID for secure, governed cloud integration." },
],
};

const benefits = [
  { icon: "\ud83d\udd17", title: "Survives every ERP upgrade", body: "Official APIs are maintained by the vendor. When SAP or Oracle releases an update, your integration keeps working \u2014 because it was built the right way." },
  { icon: "\ud83c\udfd7", title: "Your data never leaves your control", body: "Deployed on your own Linux production environment. No third-party service sitting between your agent and your ERP data." },
  { icon: "\ud83d\udd10", title: "Enterprise identity and access", body: "Secure authentication via Microsoft Entra ID / Azure AD and OCI IAM \u2014 your access controls respected at every layer." },
  { icon: "\u2699\ufe0f", title: "Custom-built, not configured", body: "No pre-built connectors with hidden limitations. Every integration is engineered for your specific data model, permissions structure and workflows." },
  { icon: "\ud83c\udf10", title: "Multi-platform, single delivery team", body: "One team manages your entire integration landscape \u2014 SAP, Oracle, Salesforce and beyond \u2014 with a consistent architecture and support model." },
  { icon: "\ud83d\udcc8", title: "Scales with your platform mix", body: "As your enterprise stack evolves \u2014 new ERPs, additional CRMs, cloud migrations \u2014 your AI integration layer extends without a rebuild." },
];

const features = [
  { num: "SAP", title: "SAP Business One \u2014 Service Layer & HANA", body: "REST API integration via Service Layer for transactional operations, direct HANA SQL for reporting and complex GRN-to-LC mapping." },
  { num: "ORA", title: "Oracle Fusion Cloud \u2014 REST & OCI GenAI", body: "Full REST API coverage plus OCI GenAI Agents and AI Agent Studio for intelligent, governance-aware Oracle automation." },
  { num: "NS", title: "NetSuite \u2014 SuiteTalk REST & SuiteScript", body: "Official SuiteTalk REST and SuiteScript/RESTlet integrations \u2014 no SOAP, no unofficial endpoints, no future-proofing risk." },
  { num: "OD", title: "Odoo \u2014 JSON-RPC & REST API", body: "Odoo's official REST and JSON-RPC APIs, supporting operations across Accounting, Purchase, Inventory and CRM modules." },
  { num: "ZH", title: "Zoho Books & CRM \u2014 Official REST", body: "Complete coverage across Zoho Books for finance workflows and Zoho CRM for sales and service automation." },
  { num: "SF", title: "Salesforce \u2014 REST & Bulk APIs", body: "CRM-driven agent workflows using Salesforce REST and Bulk APIs \u2014 for sales operations, service automation and revenue intelligence." },
  { num: "MS", title: "Microsoft Fabric & Azure AI Foundry", body: "Data lakehouse pipelines on Fabric with model services from Azure AI Foundry \u2014 the modern Microsoft enterprise data stack, fully integrated." },
  { num: "ID", title: "Microsoft Entra ID / Azure AD & OCI IAM", body: "Secure identity and access management across all integrations \u2014 your existing SSO and RBAC model respected throughout." },
];

const process = [
  { num: "01", title: "Platform Audit", body: "We review your ERP version, API access, licensing and data model before any architecture decisions." },
  { num: "02", title: "API Path Design", body: "We map every required operation to its official API endpoint \u2014 and identify where custom paths are needed." },
  { num: "03", title: "Agent Integration Build", body: "Development against your real environment, with identity, error handling and retry logic built in." },
  { num: "04", title: "Regression & Upgrade Test", body: "We test against your ERP version and its next planned release before go-live." },
  { num: "05", title: "Managed Operations", body: "Ongoing monitoring, upgrade compatibility checks and performance tuning post-launch." },
];

const whyUs = {
  heading: "ERP-Native by Design, Enterprise-Grade in Practice",
  points: [
  { title: "Official APIs only \u2014 no workarounds", body: "We use the same interfaces SAP, Oracle and Salesforce maintain for their own certified partners. Your integration is upgrade-safe because it was built correctly." },
  { title: "No third-party middleware in the chain", body: "Every system in your integration landscape connects directly \u2014 no iPaaS, no connector platforms, no hidden dependencies that introduce failure points." },
  { title: "Custom-built for your data model", body: "Your entity structure, custom fields and approval hierarchies are built into the integration \u2014 not forced into a generic template." },
  { title: "One team across your entire stack", body: "SAP, Oracle, Salesforce and Microsoft \u2014 managed by a single team with a consistent architecture. No separate vendor for each platform." },
],
  box: {
    heading: "Upgrade-Safe by Design",
    body: "Every integration we build is tested against your current ERP version and its next planned release \u2014 so an upgrade announcement is not a crisis.",
    stats: [
  { val: "8+", label: "Enterprise platforms supported" },
  { val: "Zero", label: "Third-party connectors used" },
  { val: "API", label: "Official interfaces only \u2014 always" },
],
  },
};

const faqs = [
  { q: "What if our ERP doesn't have an API for the operation we need?", a: "We engineer a clean, supported alternative \u2014 whether that's a direct HANA SQL connection for SAP, a SuiteScript RESTlet for NetSuite, or an approved extension pattern for Oracle. We never use screen scraping or unofficial methods that break on updates." },
  { q: "Will this affect our ERP support agreement or licensing?", a: "No. We use official, vendor-sanctioned APIs \u2014 the same interfaces used by SAP's own certified add-ons and Oracle's own cloud services. Your support agreement and licensing are unaffected." },
  { q: "Can you integrate with multiple ERPs in a single engagement?", a: "Yes. Large enterprises often run SAP alongside Oracle or NetSuite for different entities. We have built cross-platform integrations and can manage a mixed-ERP landscape within a single agent deployment." },
  { q: "How do you handle security credentials and secrets management?", a: "All credentials are managed with AES-256 encryption, stored securely and never hard-coded. Access is controlled through your existing Entra ID or OCI IAM \u2014 no new identity system to manage." },
];

const cta = {
  heading: "Ready to Connect Your ERP to Production-Grade AI?",
  body: "Tell us which platforms are in your landscape and what you want them to do. We'll give you a clear view of the integration path, the effort involved and what is deployable against your current setup \u2014 at no cost.",
  cta1: "Start the Conversation",
  cta2: "See a Platform Demo",
};

const relatedServices = [
  { title: "Agentic AI for the Office of Finance", slug: "/services/agentic-ai-finance", number: "01" },
  { title: "Custom AI Agent Development", slug: "/services/custom-ai-agent-development", number: "04" },
  { title: "AI Governance, Security & MLOps", slug: "/services/ai-governance-security-mlops", number: "09" },
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

export default function ErpCrmAiIntegrationContent() {
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
