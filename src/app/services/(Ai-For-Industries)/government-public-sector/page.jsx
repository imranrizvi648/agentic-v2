"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Government & Public Sector
   AgenticSense Industry Page
   Typography / colors / spacing aligned with existing AgenticSense pages.
───────────────────────────────────────────────────────────────────────────── */

const hero = {
  eyebrow: "06 · Industries · Government & Public Sector",
  headline: "Agentic AI Solutions for Government & Public Sector",
  sub:
    "Government organizations manage citizen services, public records, procurement, casework, compliance, internal operations and large volumes of information across departments. AgenticSense helps public-sector teams turn fragmented information into coordinated workflows while keeping approvals, accountability and sensitive decisions under appropriate human control.",
  cta1: "Explore an AI Opportunity",
  cta2: "Explore Priority Workflows",
};

const workflows = [
  {
    num: "01",
    title: "Citizen Services",
    body:
      "Help service teams understand citizen requests, retrieve relevant information, prepare responses and route cases to the appropriate department or service channel.",
  },
  {
    num: "02",
    title: "Case & Application Management",
    body:
      "Organize applications, case information and supporting documents to help teams review submissions, identify missing information and move cases through defined workflows.",
  },
  {
    num: "03",
    title: "Public Records & Information",
    body:
      "Help teams search, organize and summarize large volumes of public records, policy documents, correspondence and institutional information while preserving source context.",
  },
  {
    num: "04",
    title: "Procurement & Contract Operations",
    body:
      "Support procurement teams by organizing tender information, reviewing documentation, identifying missing requirements and preparing structured cases for authorized review.",
  },
  {
    num: "05",
    title: "Compliance & Regulatory Work",
    body:
      "Assist teams in reviewing requirements, organizing evidence, tracking obligations and preparing compliance information for human validation and formal decision-making.",
  },
  {
    num: "06",
    title: "Internal Government Operations",
    body:
      "Coordinate repetitive administrative workflows across departments including requests, approvals, reporting, correspondence and internal knowledge processes.",
  },
];

const environments = [
  {
    title: "Citizen-Facing Services",
    text:
      "Support high-volume citizen interactions by helping teams understand requests, retrieve information, prepare responses and route cases to the right service area.",
  },
  {
    title: "Public Administration",
    text:
      "Connect information across departments, administrative processes, approvals and reporting workflows without introducing another disconnected operational layer.",
  },
  {
    title: "Regulatory & Compliance",
    text:
      "Help teams organize requirements, evidence, records and compliance activities while keeping formal decisions and accountability with authorized personnel.",
  },
  {
    title: "Public Procurement",
    text:
      "Support procurement workflows involving tenders, supplier information, documentation, evaluations, approvals and contract administration.",
  },
];

const governance = [
  [
    "01",
    "Access & Authorization",
    "Define who can access information, which workflows AI can support and which actions require authorization from designated public-sector personnel.",
  ],
  [
    "02",
    "Data Protection",
    "Control how citizen, departmental, procurement and administrative information is accessed, processed and used across AI-assisted workflows.",
  ],
  [
    "03",
    "Evidence & Traceability",
    "Keep workflow outputs connected to source records and supporting evidence so teams can understand how information was used.",
  ],
  [
    "04",
    "Human Accountability",
    "Keep authorized government officials involved wherever decisions, approvals, eligibility assessments or actions carry public accountability.",
  ],
];

const implementation = [
  {
    num: "01",
    title: "Discover",
    label: "Find the opportunity",
    text:
      "Identify public-sector processes where teams spend significant time searching records, reviewing documents, responding to requests, coordinating departments or managing repetitive administrative work.",
    left: "High administrative workload",
    right: "Information-heavy processes",
  },
  {
    num: "02",
    title: "Map",
    label: "Understand the process",
    text:
      "Map the people, departments, systems, records, policies, approval points and information requirements involved in the selected government workflow.",
    left: "Departments & systems",
    right: "Rules & approvals",
  },
  {
    num: "03",
    title: "Pilot",
    label: "Prove measurable value",
    text:
      "Deploy one focused workflow with clearly defined boundaries, appropriate access controls, measurable outcomes and human review before expanding the solution.",
    left: "Defined workflow",
    right: "Measured outcomes",
  },
  {
    num: "04",
    title: "Scale",
    label: "Expand what works",
    text:
      "Extend successful workflows across additional departments, services, agencies or administrative processes once value, security and governance requirements are established.",
    left: "More departments",
    right: "Broader adoption",
  },
];

const impact = [
  [
    "Faster Citizen Response",
    "Help service teams find relevant information and move citizen requests forward with less manual searching and coordination.",
  ],
  [
    "Lower Administrative Effort",
    "Reduce repetitive document handling, information gathering, case preparation and internal coordination across public-sector workflows.",
  ],
  [
    "Better Information Access",
    "Help authorized teams find relevant policies, records, procedures and institutional knowledge more efficiently.",
  ],
  [
    "More Consistent Processes",
    "Apply defined workflow rules and procedural requirements consistently across recurring administrative activities.",
  ],
  [
    "Improved Case Visibility",
    "Help teams identify missing information, pending actions, exceptions and cases that require attention.",
  ],
  [
    "Greater Operational Capacity",
    "Give public-sector teams more time to focus on citizens, policy implementation, complex cases and higher-value administrative work.",
  ],
];

const faqs = [
  {
    q: "What is Agentic AI in government?",
    a:
      "Agentic AI refers to AI systems that can understand a defined objective, work with relevant government information, perform multiple workflow steps and involve authorized people when judgment or approval is required. In the public sector, this can support citizen services, case management, records, procurement, compliance and internal administration.",
  },
  {
    q: "Can Agentic AI work with existing government systems?",
    a:
      "Yes. Agentic AI can be designed to work across existing government applications, case-management platforms, document repositories, enterprise systems, reporting environments and departmental databases rather than requiring agencies to replace their existing technology.",
  },
  {
    q: "Can AI make government decisions automatically?",
    a:
      "AI can support information gathering, case preparation, workflow coordination and administrative tasks, but decisions involving eligibility, public benefits, regulatory action, procurement approval or other significant public responsibilities should remain subject to appropriate authorization, controls and human oversight.",
  },
  {
    q: "How can AI improve citizen services?",
    a:
      "AI can help service teams understand incoming requests, retrieve relevant information, identify required documentation, prepare responses and route cases to the appropriate department. This can reduce repetitive administrative work while keeping service decisions with responsible personnel.",
  },
  {
    q: "Can Agentic AI help with public records?",
    a:
      "Yes. AI can help authorized teams search, organize and summarize large collections of policies, records, correspondence and institutional documents while keeping outputs connected to their underlying sources.",
  },
  {
    q: "How does Agentic AI handle sensitive government information?",
    a:
      "Government workflows should be designed around appropriate access controls, data-handling policies, authorization boundaries, auditability and human review. The exact controls should reflect the sensitivity and regulatory requirements of the specific public-sector environment.",
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

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-brand-secondary" />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
        {children}
      </span>
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

export default function GovernmentPublicSectorPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeImplementation, setActiveImplementation] = useState(0);

  const activeStep = implementation[activeImplementation];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">
      {/* ───────────────── HERO ───────────────── */}

      <section
        aria-label="Government and Public Sector AI"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
             
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Agentic AI Solutions for{" "}
              <span className="text-[#a095ff]">
                Government & Public Sector
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
                  Public services are
                  <br />
                  people-facing.
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
                  Fragmented records, repetitive administration and
                  cross-department coordination can slow down public
                  services and internal government operations.
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
                Government organizations operate across citizen services,
                public records, departments, agencies, procurement,
                regulatory requirements and internal administrative systems.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                The systems may contain the required information, but
                the work between them often still depends on people
                manually searching records, checking documents,
                coordinating departments and following up on cases.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                Citizen service teams process requests. Administrative
                teams review applications. Procurement teams manage
                documentation. Regulatory teams assess evidence.
                Departments coordinate information and approvals.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense helps connect these activities through
                intelligent workflows that can understand context,
                work with authorized information, perform defined tasks
                and involve people when public-sector judgment is required.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Less time searching and coordinating.
                  <br />
                  More capacity for public service.
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
                  Many public-sector environments.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Public-sector organizations depend on connected
                processes from citizen requests and casework to
                procurement, compliance, records and internal
                administration.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">
                {[
                  [
                    "01",
                    "Serve",
                    "Citizen requests, applications and public services",
                  ],
                  [
                    "02",
                    "Administer",
                    "Cases, records, correspondence and approvals",
                  ],
                  [
                    "03",
                    "Procure",
                    "Tenders, suppliers, contracts and documentation",
                  ],
                  [
                    "04",
                    "Govern",
                    "Regulations, compliance, evidence and reporting",
                  ],
                  [
                    "05",
                    "Coordinate",
                    "Departments, agencies and internal operations",
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
                  Better public services require more than connected
                  systems.
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
                  immediate public-sector value.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-white/55 leading-relaxed">
                Government workflows often involve large information
                volumes, multiple departments, formal procedures and
                approval points. Agentic AI can help connect the work
                between them.
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
              administrative tasks.
              <br />
              <span className="text-white/50">
                It is connecting the public-sector workflow around them.
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
              From public-sector
              <br />
              request to action.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Agentic AI can coordinate multiple workflow steps around
              a defined public-sector objective instead of treating
              every administrative task as an isolated automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              [
                "01",
                "Understand",
                "Identify the request, relevant context, available records, policies and applicable workflow rules.",
              ],
              [
                "02",
                "Coordinate",
                "Retrieve authorized information, perform defined tasks and move the case across connected systems.",
              ],
              [
                "03",
                "Validate",
                "Check information, evidence, required documents and workflow conditions before the next action.",
              ],
              [
                "04",
                "Escalate",
                "Bring the appropriate official or department into the process when judgment, approval or exception handling is required.",
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
              The system moves the administrative work forward.{" "}
              <span className="block sm:inline text-brand-primary/45 font-normal mt-1 sm:mt-0">
                Authorized public-sector teams remain in control of the
                decisions that matter.
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
                Your existing government
                <br />
                <span className="text-brand-primary">
                  technology becomes the foundation.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Agentic AI should not require public-sector organizations
                to abandon the systems they already depend on.
              </p>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Instead, it can operate as an intelligent layer across
                case management, document repositories, citizen service
                platforms, procurement systems, reporting environments
                and departmental information systems.
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
                      Citizen Service Systems
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Requests & service delivery
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Case & Records Systems
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Cases, records & documents
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Procurement Systems
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Tenders, suppliers & contracts
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Compliance & Reporting
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Evidence, reporting & oversight
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-7 border-t border-brand-primary/10">
            <p className="text-xl sm:text-2xl font-bold tracking-tight">
              Connected information.
              <br />
              <span className="text-brand-secondary">
                Coordinated public services.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense can help authorized teams access relevant
              information, execute defined workflow steps and move
              administrative cases forward without creating another
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
                In government,
                <br />
                <span className="text-brand-primary">
                  automation without control
                </span>
                <br />
                creates public risk.
              </h2>

              <div className="mt-8 rounded-xl bg-[#12103c] p-7 sm:p-8">
                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  AI can prepare.
                  <br />
                  AI can coordinate.
                  <br />
                  <span className="text-[#a095ff]">
                    Public officials remain accountable.
                  </span>
                </p>

                <p className="mt-5 text-sm text-white/50 leading-relaxed">
                  Public-sector AI should work within clearly defined
                  authorization boundaries, data-access controls and
                  escalation paths, especially when workflows involve
                  citizens, public funds, regulatory decisions or
                  sensitive records.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed max-w-2xl">
                Agentic workflows can be designed around government
                policies, access controls, source evidence, auditability
                and human approval points so automation improves
                administrative efficiency without removing accountability.
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
                AI should make public services faster
                <span className="text-brand-primary/45">
                  {" "}
                  without making accountability disappear.
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
                Public-sector AI adoption does not need to begin with
                organization-wide transformation. Start with one
                well-defined workflow, prove measurable value and
                expand within established governance requirements.
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
              Once measurable value, security and governance
              requirements are established, successful workflows can
              be extended across departments, agencies and services.
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
                Turn administrative effort into{" "}
                <span className="text-[#a095ff]">
                  public-sector capacity.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                The value of Agentic AI in government is not simply
                measured by how much content an AI system can produce.
                The meaningful question is how much administrative
                work can move forward with less manual effort while
                preserving accountability.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {impact.map(([title, text], index) => (
              <div
                key={title}
                className={`py-8 sm:py-10 px-6 sm:px-8 ${
                  index < 3 ? "border-b border-white/10" : ""
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
                  Ready to put governed agents into your public-sector
                  workflows?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us how your teams manage citizen services,
                  casework, records, procurement, compliance or internal
                  administration. We will identify where Agentic AI
                  can reduce operational friction while keeping
                  authorized teams in control.
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