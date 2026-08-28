"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Energy & Utilities
   AgenticSense Industry Page

   Design system aligned with Government & Public Sector page:
   - Same typography
   - Same colors
   - Same spacing
   - Same section rhythm
   - Same dark/light visual treatment
   - Same FAQ + CTA layout
───────────────────────────────────────────────────────────────────────────── */

const hero = {
  eyebrow: "07 · Industries · Energy & Utilities",
  headline: "Agentic AI Solutions for Energy & Utilities",
  sub:
    "Energy and utility organizations manage complex assets, field operations, customer services, maintenance schedules, regulatory requirements and large volumes of operational data. AgenticSense helps teams connect information across these environments, coordinate defined workflows and move operational work forward while keeping critical decisions under appropriate human control.",
  cta1: "Explore an AI Opportunity",
  cta2: "Explore Priority Workflows",
};

const workflows = [
  {
    num: "01",
    title: "Asset & Maintenance Operations",
    body:
      "Help maintenance teams review asset information, work orders, inspection records and maintenance history to prioritize actions and prepare work for authorized teams.",
  },
  {
    num: "02",
    title: "Outage & Incident Management",
    body:
      "Coordinate outage information, incident reports, field updates and operational records so teams can understand situations faster and route actions to the appropriate personnel.",
  },
  {
    num: "03",
    title: "Utility Customer Service",
    body:
      "Help service teams understand customer requests, retrieve account and service information, prepare responses and route complex cases to the appropriate team.",
  },
  {
    num: "04",
    title: "Field Operations",
    body:
      "Support field teams by organizing work orders, site information, inspection requirements, equipment history and supporting documentation before and during operational activities.",
  },
  {
    num: "05",
    title: "Metering & Billing Operations",
    body:
      "Assist teams in reviewing meter information, billing exceptions, service records and supporting data to identify issues and prepare cases for authorized resolution.",
  },
  {
    num: "06",
    title: "Regulatory & Compliance",
    body:
      "Organize regulatory requirements, operational evidence, reports and compliance documentation to help teams prepare accurate information for review and submission.",
  },
];

const environments = [
  {
    title: "Generation Operations",
    text:
      "Support teams working across generation assets, maintenance activities, operating records, inspections and operational documentation.",
  },
  {
    title: "Transmission & Distribution",
    text:
      "Connect information across network operations, outage management, asset records, field activities and maintenance workflows.",
  },
  {
    title: "Utility Customer Operations",
    text:
      "Help customer service teams manage service requests, billing questions, account information, complaints and operational cases.",
  },
  {
    title: "Energy Trading & Market Operations",
    text:
      "Assist authorized teams with information gathering, market documentation, operational reports and defined analytical workflows.",
  },
];

const governance = [
  [
    "01",
    "Operational Authorization",
    "Define which actions AI can perform, which systems it can access and which operational activities require approval from authorized personnel.",
  ],
  [
    "02",
    "Data & System Access",
    "Control access to customer, asset, operational, financial and regulatory information according to organizational policies and system permissions.",
  ],
  [
    "03",
    "Evidence & Traceability",
    "Keep workflow outputs connected to source records, operational data and supporting documentation so teams can verify the information used.",
  ],
  [
    "04",
    "Human Operational Control",
    "Keep qualified personnel involved where decisions affect grid operations, safety, service continuity, financial exposure or regulatory obligations.",
  ],
];

const implementation = [
  {
    num: "01",
    title: "Discover",
    label: "Find the opportunity",
    text:
      "Identify energy and utility processes where teams spend significant time searching operational records, reviewing documents, coordinating field activities, resolving exceptions or preparing reports.",
    left: "High operational workload",
    right: "Information-heavy processes",
  },
  {
    num: "02",
    title: "Map",
    label: "Understand the workflow",
    text:
      "Map the people, assets, systems, operational data, policies, approval points and information requirements involved in the selected workflow.",
    left: "Assets & systems",
    right: "Rules & approvals",
  },
  {
    num: "03",
    title: "Pilot",
    label: "Prove measurable value",
    text:
      "Deploy one focused workflow with clearly defined boundaries, controlled system access, measurable outcomes and human review before expanding the solution.",
    left: "Defined workflow",
    right: "Measured outcomes",
  },
  {
    num: "04",
    title: "Scale",
    label: "Expand what works",
    text:
      "Extend successful workflows across additional assets, plants, service areas, departments or operational functions once value, security and governance requirements are established.",
    left: "More operations",
    right: "Broader adoption",
  },
];

const impact = [
  [
    "Faster Operational Response",
    "Help teams find relevant operational information and coordinate defined actions faster during service events, maintenance activities and operational cases.",
  ],
  [
    "Lower Administrative Effort",
    "Reduce repetitive document handling, information gathering, reporting and coordination across energy and utility workflows.",
  ],
  [
    "Better Asset Intelligence",
    "Help authorized teams access maintenance history, inspection records, work orders and operational information more efficiently.",
  ],
  [
    "Improved Field Productivity",
    "Give field teams better access to work instructions, asset information, service history and supporting documentation.",
  ],
  [
    "More Consistent Operations",
    "Apply defined workflow rules and operational requirements consistently across recurring processes and exception handling.",
  ],
  [
    "Greater Operational Capacity",
    "Give energy and utility teams more time to focus on reliability, customers, assets, field operations and higher-value decisions.",
  ],
];

const faqs = [
  {
    q: "What is Agentic AI in energy and utilities?",
    a:
      "Agentic AI refers to AI systems that can understand a defined operational objective, work with relevant enterprise and operational information, perform multiple workflow steps and involve authorized personnel when judgment or approval is required. In energy and utilities, this can support asset management, field operations, customer service, outage management, maintenance, billing and compliance.",
  },
  {
    q: "Can Agentic AI work with existing utility systems?",
    a:
      "Yes. Agentic AI can operate as an intelligent layer across existing utility and enterprise environments such as ERP, CRM, EAM, work-order platforms, document repositories, billing systems, reporting platforms and other approved operational information sources.",
  },
  {
    q: "Can AI control critical energy infrastructure automatically?",
    a:
      "Agentic AI should be deployed according to the operational risk of the workflow. It can support information gathering, analysis, coordination and administrative actions, while critical grid, plant, safety and operational decisions should remain subject to appropriate controls, authorization and qualified human oversight.",
  },
  {
    q: "How can AI improve utility customer service?",
    a:
      "AI can help customer service teams understand incoming requests, retrieve account and service information, identify relevant policies, prepare responses and route complex cases to the appropriate team. This can reduce repetitive work while keeping customer-impacting decisions with responsible personnel.",
  },
  {
    q: "Can Agentic AI help with maintenance operations?",
    a:
      "Yes. AI can help teams bring together asset history, inspection records, work orders, maintenance documentation and operational information so maintenance personnel can review cases more efficiently and prioritize defined actions.",
  },
  {
    q: "How does Agentic AI handle sensitive operational data?",
    a:
      "Energy and utility workflows should be designed around appropriate access controls, system permissions, data-handling policies, auditability and human approval points. The exact controls should reflect the sensitivity and operational importance of the specific environment.",
  },
];

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#1a194d]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,5,28,0.58) 0%, rgba(26,25,77,0) 50%, rgba(10,8,38,0.42) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 90% 0%, rgba(98,94,255,0.24) 0%, rgba(98,94,255,0.06) 45%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.84)] via-[rgba(18,16,60,0.48)] to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(26,25,77,0.7)] to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.4)] to-transparent" />
    </div>
  );
}

function FAQItem({ item, index, open, setOpen }) {
  return (
    <div className="border-b border-brand-primary/10">
      <button
        type="button"
        onClick={() => setOpen(open === index ? null : index)}
        className="w-full flex items-center justify-between gap-5 py-5 text-left"
      >
        <span className="text-sm font-bold text-brand-primary leading-snug">
          {item.q}
        </span>

        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-primary/70 text-xs transition-all ${
            open === index
              ? "rotate-180 bg-brand-primary text-white"
              : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open === index
            ? "grid-rows-[1fr] pb-5"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-sm text-brand-primary/65 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EnergyUtilitiesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeImplementation, setActiveImplementation] = useState(0);

  const activeStep = implementation[activeImplementation];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ───────────────── HERO ───────────────── */}

      <section
        aria-label="Energy and Utilities AI"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Agentic AI Solutions for{" "}
              <span className="text-[#a095ff]">
                Energy & Utilities
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-2xl mb-10">
              {hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all hover:opacity-90 bg-brand-secondary text-white shadow-sm shadow-brand-secondary/30"
              >
                {hero.cta1}
                <span className="text-white/70">→</span>
              </Link>

              <a
                href="#workflows"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all bg-white/10 text-white border border-white/20 hover:bg-white/15"
              >
                {hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── INDUSTRY CONTEXT ───────────────── */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                  Energy systems are
                  <br />
                  interconnected.
                  <br />
                  The information is everywhere.
                </h2>
              </div>

              <div className="p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-secondary/5 rounded-full blur-xl pointer-events-none" />

                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  Core Bottleneck
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Asset data, work orders, field information, customer
                  records and operational processes often sit across
                  different systems and teams.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>Operational Friction</span>

                  <span className="font-bold text-brand-secondary">
                    Manual Coordination
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                Energy and utility organizations operate across
                generation, transmission, distribution, customer
                services, maintenance, field operations and regulatory
                environments.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                The required information may already exist across
                enterprise and operational systems, but teams often
                still spend significant time searching records,
                checking documents, coordinating activities and
                resolving exceptions manually.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                Operations teams manage assets. Field teams execute
                work orders. Customer teams handle service requests.
                Maintenance teams review equipment history. Compliance
                teams prepare evidence and reports.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense helps connect these activities through
                intelligent workflows that can understand context,
                work with authorized information, perform defined tasks
                and involve people when operational judgment is required.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Less time searching and coordinating.
                  <br />
                  More capacity for reliable operations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────── OPERATING ENVIRONMENTS ───────────────── */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-4 lg:sticky lg:top-8 self-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                One intelligent layer.
                <br />
                <span className="text-brand-primary">
                  Many energy environments.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Energy organizations depend on connected processes
                across assets, networks, field operations, customers,
                maintenance, markets and compliance.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">

                {[
                  [
                    "01",
                    "Generate",
                    "Generation assets, plant operations, maintenance and inspections",
                  ],
                  [
                    "02",
                    "Distribute",
                    "Grid operations, outages, field work and network assets",
                  ],
                  [
                    "03",
                    "Serve",
                    "Customer requests, billing, service cases and account operations",
                  ],
                  [
                    "04",
                    "Maintain",
                    "Work orders, inspections, asset history and maintenance planning",
                  ],
                  [
                    "05",
                    "Govern",
                    "Compliance, reporting, safety requirements and operational evidence",
                  ],
                ].map(([num, title, text]) => (
                  <div
                    key={num}
                    className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6"
                  >
                    <span className="text-[11px] font-bold tracking-widest text-brand-secondary font-mono w-8">
                      {num}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight sm:w-32">
                      {title}
                    </h3>

                    <p className="text-sm text-brand-primary/55 leading-relaxed">
                      {text}
                    </p>

                    <span className="hidden sm:block ml-auto text-brand-primary/20 group-hover:text-brand-secondary transition-colors">
                      →
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-8">
                <p className="text-base sm:text-lg font-bold leading-relaxed">
                  Reliable energy operations require more than
                  connected systems.
                  <br />
                  <span className="text-brand-primary/45">
                    They require coordinated action around information.
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────── WORKFLOWS ───────────────── */}

      <section
        id="workflows"
        className="py-16 sm:py-20 bg-[#12103c] relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#625eff]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Where Agentic AI can create
                <br />
                <span className="text-[#a095ff]">
                  immediate energy-sector value.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-white/55 leading-relaxed">
                Energy workflows often involve large volumes of
                operational information, multiple teams, physical
                assets and defined approval points. Agentic AI can
                help connect the work between them.
              </p>
            </div>

          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {workflows.map((item) => (
              <article
                key={item.num}
                className="group relative min-h-[175px] p-6 rounded border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#a095ff] font-mono">
                  {item.num}
                </span>

                <h3 className="mt-4 text-sm font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-white/55 leading-relaxed">
                  {item.body}
                </p>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-brand-secondary transition-all duration-500 group-hover:w-full" />
              </article>
            ))}

          </div>

          <div className="mt-10 border-l-2 border-brand-secondary/50 pl-5">
            <p className="max-w-3xl text-lg sm:text-xl font-bold text-white leading-relaxed">
              The opportunity is not simply automating individual
              energy tasks.
              <br />
              <span className="text-white/50">
                It is connecting the operational workflow around them.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ───────────────── WORKFLOW MODEL ───────────────── */}

      <section className="py-16 sm:py-24 bg-white border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14">
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary">
              From operational
              <br />
              signal to action.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Agentic AI can coordinate multiple workflow steps around
              a defined operational objective instead of treating
              every maintenance, service or administrative task as
              an isolated automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {[
              [
                "01",
                "Understand",
                "Identify the event, request, asset context, available records and applicable operational rules.",
              ],
              [
                "02",
                "Coordinate",
                "Retrieve authorized information, perform defined tasks and move the workflow across connected systems.",
              ],
              [
                "03",
                "Validate",
                "Check information, supporting evidence, required conditions and exceptions before the next action.",
              ],
              [
                "04",
                "Escalate",
                "Bring the appropriate operator, engineer, supervisor or service team into the process when judgment or approval is required.",
              ],
            ].map(([num, title, text]) => (
              <div key={num} className="flex flex-col">

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-brand-secondary tracking-widest">
                    {num}
                  </span>

                  <div className="h-px w-8 bg-brand-secondary/30" />
                </div>

                <h3 className="text-lg font-bold text-brand-primary tracking-tight mb-2">
                  {title}
                </h3>

                <p className="text-sm text-brand-primary/65 leading-relaxed">
                  {text}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-16 pt-8 border-t border-brand-primary/10">
            <p className="text-base sm:text-lg font-bold leading-relaxed text-brand-primary">
              The system moves the operational work forward.{" "}
              <span className="block sm:inline text-brand-primary/45 font-normal mt-1 sm:mt-0">
                Authorized energy teams remain in control of decisions
                that affect reliability, safety and service continuity.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ───────────────── SYSTEMS ───────────────── */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Your existing energy
                <br />
                <span className="text-brand-primary">
                  technology becomes the foundation.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Agentic AI should not require energy organizations
                to replace the systems they already depend on.
              </p>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Instead, it can operate as an intelligent layer across
                asset management, work-order platforms, CRM, ERP,
                billing systems, operational databases, reporting
                environments and approved information sources.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-primary/10 shadow-sm">

                <div className="mb-6 pb-6 border-b border-brand-primary/10 flex items-center justify-between">

                  <div>
                    <p className="text-sm font-bold text-brand-primary">
                      AgenticSense
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-brand-primary/40 font-mono">
                      Intelligent Layer
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary">
                    Active Bridge
                  </span>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Asset Management
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Assets, maintenance & inspections
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Field Operations
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Work orders & service activities
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Customer & Billing
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Accounts, service & billing records
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Operations & Reporting
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Operational data & compliance
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-12 pt-7 border-t border-brand-primary/10">

            <p className="text-xl sm:text-2xl font-bold tracking-tight">
              Connected operational information.
              <br />
              <span className="text-brand-secondary">
                Coordinated energy operations.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense can help authorized teams access relevant
              information, execute defined workflow steps and move
              operational cases forward without creating another
              isolated technology silo.
            </p>

          </div>

        </div>
      </section>

      {/* ───────────────── GOVERNANCE ───────────────── */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
                In energy,
                <br />
                <span className="text-brand-primary">
                  automation without control
                </span>
                <br />
                creates operational risk.
              </h2>

              <div className="mt-8 rounded-xl bg-[#12103c] p-7 sm:p-8">

                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  AI can prepare.
                  <br />
                  AI can coordinate.
                  <br />
                  <span className="text-[#a095ff]">
                    Qualified teams remain accountable.
                  </span>
                </p>

                <p className="mt-5 text-sm text-white/50 leading-relaxed">
                  Energy-sector AI should operate within clearly
                  defined authorization boundaries, system-access
                  controls and escalation paths, especially when
                  workflows involve critical infrastructure, safety,
                  customer service or regulatory obligations.
                </p>

              </div>

            </div>

            <div className="lg:col-span-7">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed max-w-2xl">
                Agentic workflows can be designed around operational
                policies, access controls, source evidence, auditability
                and human approval points so automation improves
                efficiency without removing operational accountability.
              </p>

              <div className="mt-7">

                {governance.map(([num, title, text]) => (
                  <div
                    key={title}
                    className="grid grid-cols-[34px_1fr] sm:grid-cols-[40px_190px_1fr] gap-3 sm:gap-4 py-4 border-b border-brand-primary/10"
                  >

                    <span className="text-[10px] font-bold tracking-widest text-brand-secondary font-mono pt-0.5">
                      {num}
                    </span>

                    <h3 className="font-bold text-xs sm:text-sm pt-0.5">
                      {title}
                    </h3>

                    <p className="col-span-2 sm:col-span-1 text-xs sm:text-sm text-brand-primary/60 leading-relaxed">
                      {text}
                    </p>

                  </div>
                ))}

              </div>

              <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight">
                AI should make energy operations faster
                <span className="text-brand-primary/45">
                  {" "}
                  without compromising safety or accountability.
                </span>
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ───────────────── IMPLEMENTATION ───────────────── */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Start focused.
                <br />
                Scale what works.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Energy-sector AI adoption does not need to begin with
                organization-wide transformation. Start with one
                well-defined workflow, prove measurable value and
                expand within established operational and governance
                requirements.
              </p>
            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <div className="border-t border-brand-primary/10">

                {implementation.map((step, index) => (
                  <button
                    type="button"
                    key={step.num}
                    onClick={() => setActiveImplementation(index)}
                    className={`w-full group flex items-center justify-between py-5 border-b border-brand-primary/10 text-left transition-all ${
                      activeImplementation === index
                        ? "text-brand-primary"
                        : "text-brand-primary/40"
                    }`}
                  >

                    <div className="flex items-center gap-5">

                      <span className="text-[11px] font-mono font-bold tracking-widest text-brand-secondary">
                        {step.num}
                      </span>

                      <span className="text-lg font-bold tracking-tight">
                        {step.title}
                      </span>

                    </div>

                    <span
                      className={`transition-colors ${
                        activeImplementation === index
                          ? "text-brand-secondary"
                          : "text-brand-primary/20"
                      }`}
                    >
                      →
                    </span>

                  </button>
                ))}

              </div>

            </div>

            <div className="lg:col-span-8">

              <div className="relative min-h-[330px] bg-white border border-brand-primary/10 rounded-xl p-7 sm:p-10 overflow-hidden">

                <span className="absolute -right-4 -top-10 text-[180px] font-bold leading-none text-brand-primary/[0.025] pointer-events-none">
                  {activeStep.num}
                </span>

                <div className="relative z-10">

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                    {activeStep.label}
                  </span>

                  <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight">
                    {activeStep.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                    {activeStep.text}
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="border-l-2 border-brand-secondary/40 pl-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary/45">
                        Focus
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeStep.left}
                      </p>
                    </div>

                    <div className="border-l-2 border-brand-primary/10 pl-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary/45">
                        Outcome
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeStep.right}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-brand-primary/10 pt-7">

            <p className="text-base sm:text-lg font-bold leading-relaxed">
              Prove the workflow before expanding it.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Once measurable value, security and operational
              requirements are established, successful workflows can
              be extended across assets, teams, service areas and
              business functions.
            </p>

          </div>

        </div>
      </section>

      {/* ───────────────── IMPACT ───────────────── */}

      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight max-w-2xl">
                Turn operational effort into{" "}
                <span className="text-[#a095ff]">
                  energy-sector capacity.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                The value of Agentic AI in energy and utilities is
                not simply measured by how much content an AI system
                can produce. The meaningful question is how much
                operational work can move forward with less manual
                effort while preserving safety, reliability and
                accountability.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">

            {impact.map(([title, text], index) => (
              <div
                key={title}
                className={`py-8 sm:py-10 px-6 sm:px-8 ${
                  index < 3
                    ? "border-b border-white/10"
                    : ""
                } ${
                  index % 3 !== 2
                    ? "lg:border-r lg:border-white/10"
                    : ""
                } ${
                  index % 2 !== 1 && index % 3 !== 2
                    ? "md:border-r md:border-white/10 lg:border-r"
                    : ""
                }`}
              >

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#a095ff] font-mono">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-base sm:text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-white/55 leading-relaxed">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ───────────────── FAQ + CTA ───────────────── */}

      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* FAQ */}

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-primary mb-6">
                Common questions
              </h2>

              <div className="space-y-0">

                {faqs.slice(0, 4).map((item, index) => (
                  <FAQItem
                    key={item.q}
                    item={item}
                    index={index}
                    open={openFaq}
                    setOpen={setOpenFaq}
                  />
                ))}

              </div>

            </div>

            {/* CTA */}

            <div className="lg:col-span-5">

              <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-7">

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                  Start a Conversation
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-brand-primary tracking-tight leading-tight">
                  Ready to put governed agents into your energy
                  workflows?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us how your teams manage assets, maintenance,
                  field operations, customer service, outages,
                  billing, compliance or internal operations. We will
                  identify where Agentic AI can reduce operational
                  friction while keeping authorized teams in control.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/contact"
                    className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                  >
                    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                    <span>Discuss Your Workflow</span>

                    <span className="text-white/80 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>

                    <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/50 pointer-events-none" />
                  </Link>

                  <Link
                    href="/services"
                    className="w-full inline-flex items-center justify-center font-bold text-sm px-6 py-3.5 rounded-lg text-brand-primary bg-slate-100 hover:bg-slate-200 transition-all"
                  >
                    View All Services
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}