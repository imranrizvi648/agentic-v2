"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================================
   Enterprise Integration
   AgenticSense Services Page

   Design system:
   - Enterprise editorial layout
   - AgenticSense typography hierarchy
   - Brand purple / indigo palette
   - Clean borders and generous spacing
   - Minimal card usage
   - No numbered UI elements
   - No tags / badges
============================================================================ */

const hero = {
  eyebrow: "Enterprise Integration · Services",
  headline: "Connect AI With the Enterprise Systems That Run Your Business",
  sub:
    "AgenticSense connects AI capabilities with enterprise applications, data sources and operational workflows so intelligent solutions can work within the systems your organization already depends on.",
  cta1: "Start Your Integration",
  cta2: "Explore Our Approach",
};

const integrationPillars = [
  {
    title: "Application Integration",
    body:
      "Connect AI capabilities with ERP, CRM, finance, HR, service and other enterprise applications already used across the organization.",
  },
  {
    title: "Data Integration",
    body:
      "Bring together structured and unstructured information from databases, documents, APIs and enterprise data platforms.",
  },
  {
    title: "Workflow Integration",
    body:
      "Embed AI into real business processes so information can move between people, systems and intelligent capabilities without unnecessary manual coordination.",
  },
  {
    title: "API & Service Connectivity",
    body:
      "Build reliable connections between AI services and existing APIs, internal platforms and external business services.",
  },
  {
    title: "Legacy System Connectivity",
    body:
      "Extend the value of older enterprise systems by creating practical integration layers around existing applications and processes.",
  },
  {
    title: "Integration Operations",
    body:
      "Monitor connections, manage failures, protect access and continuously improve integration performance after deployment.",
  },
];

const capabilities = [
  [
    "Application Connectivity",
    "Integrate AI workflows with ERP, CRM, HR, finance, service and other enterprise applications.",
  ],
  [
    "API Integration",
    "Connect AI agents and automation workflows with internal APIs, external services and business platforms.",
  ],
  [
    "Data Orchestration",
    "Move, transform and combine information from multiple enterprise sources into usable AI workflows.",
  ],
  [
    "Workflow Automation",
    "Coordinate actions across systems so AI can retrieve information, make decisions and trigger defined business processes.",
  ],
  [
    "Legacy Integration",
    "Create practical integration paths for older systems without requiring immediate replacement of existing technology.",
  ],
  [
    "Security & Control",
    "Apply authentication, authorization, access boundaries, monitoring and operational controls across integrations.",
  ],
];

const deliverySteps = [
  {
    title: "Assess",
    label: "Understand the environment",
    text:
      "We examine the existing applications, APIs, data sources, workflows and technical constraints involved in the integration. This creates a clear picture of how systems currently exchange information and where AI can be introduced.",
    left: "Current system landscape",
    right: "Integration opportunity map",
  },
  {
    title: "Design",
    label: "Define the integration architecture",
    text:
      "We define how AI capabilities will interact with enterprise systems, what information needs to move between them, where decisions occur and which controls are required.",
    left: "Integration architecture",
    right: "Defined system interactions",
  },
  {
    title: "Build",
    label: "Engineer the connections",
    text:
      "We develop the APIs, services, data flows and workflow components required to connect the AI solution with the organization's existing technology environment.",
    left: "Production integrations",
    right: "Connected AI workflow",
  },
  {
    title: "Operate",
    label: "Run and improve the integration",
    text:
      "We move integrations into controlled operation with monitoring, error handling, access controls and ongoing optimization so connected workflows remain reliable as business needs evolve.",
    left: "Operational integration",
    right: "Reliable enterprise workflow",
  },
];

const operatingModel = [
  {
    title: "Enterprise Applications",
    text:
      "Connect AI capabilities with the applications teams already use to manage finance, customers, operations, people, procurement and other business activities.",
  },
  {
    title: "Enterprise Data",
    text:
      "Bring together databases, documents, knowledge repositories, APIs and other information sources required to support intelligent workflows.",
  },
  {
    title: "Business Processes",
    text:
      "Place AI directly inside processes where information must be retrieved, interpreted, transformed, approved or transferred between systems.",
  },
  {
    title: "People & Teams",
    text:
      "Keep employees involved where human judgment, approval or exception handling is required while allowing connected AI workflows to manage repetitive coordination.",
  },
];

const outcomes = [
  [
    "Connected Enterprise Systems",
    "Create reliable connections between AI capabilities and the applications, data and services already running the business.",
  ],
  [
    "Less Manual Coordination",
    "Reduce repetitive movement of information between systems and allow AI workflows to handle defined operational steps.",
  ],
  [
    "Faster Information Flow",
    "Make relevant enterprise information available to AI workflows and employees without unnecessary system switching.",
  ],
  [
    "Extended Technology Value",
    "Connect modern AI capabilities with existing technology investments instead of replacing systems simply to introduce AI.",
  ],
  [
    "More Reliable Automation",
    "Build controlled integrations with clear access, error handling and monitoring so automated workflows can operate consistently.",
  ],
  [
    "Scalable AI Adoption",
    "Create integration foundations that allow successful AI workflows to expand across applications, departments and business functions.",
  ],
];

const faqs = [
  {
    q: "What does enterprise integration mean for AI?",
    a:
      "Enterprise integration means connecting AI capabilities with the applications, data sources, APIs and workflows an organization already uses. Instead of creating a separate AI environment, the goal is to make AI work within the existing technology and operating environment.",
  },
  {
    q: "Can AgenticSense integrate with existing ERP and CRM systems?",
    a:
      "Yes. AI workflows can be designed to interact with ERP, CRM, finance, HR, service and other enterprise applications through available APIs, services, databases or other appropriate integration mechanisms.",
  },
  {
    q: "Can you integrate AI with legacy systems?",
    a:
      "Yes. Existing systems do not necessarily need to be replaced before introducing AI. We can design integration layers that allow AI workflows to interact with legacy environments while respecting their technical and operational constraints.",
  },
  {
    q: "How do you keep integrations secure?",
    a:
      "Security is considered as part of the integration architecture. Depending on the environment, this can include authentication, authorization, access boundaries, data controls, monitoring, logging and human approval points.",
  },
  {
    q: "Can AI agents perform actions inside enterprise systems?",
    a:
      "Yes, where the required permissions and technical interfaces are available. Agents can be designed to retrieve information, update records, trigger workflows or coordinate defined actions while operating within controlled access boundaries.",
  },
  {
    q: "Do we need to replace our existing technology?",
    a:
      "Not necessarily. The objective is usually to connect AI with the technology already running the business. Integration can extend existing investments and create new intelligent capabilities without requiring immediate platform replacement.",
  },
];

/* ============================================================================
   HERO BACKGROUND
============================================================================ */

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

/* ============================================================================
   SECTION LABEL
============================================================================ */

function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`h-px w-8 ${
          light ? "bg-[#a095ff]" : "bg-brand-secondary"
        }`}
      />

      <span
        className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
          light ? "text-[#a095ff]" : "text-brand-secondary"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* ============================================================================
   FAQ ITEM
============================================================================ */

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
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs transition-all ${
            open === index
              ? "bg-brand-primary text-white rotate-45"
              : "bg-slate-100 text-brand-primary/60"
          }`}
        >
          +
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

/* ============================================================================
   PAGE
============================================================================ */

export default function EnterpriseIntegrationPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const activeDelivery = deliverySteps[activeStep];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ====================================================================
          HERO
      ==================================================================== */}

      <section
        aria-label="Enterprise Integration"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Connect AI With the Enterprise Systems That Run Your{" "}
              <span className="text-[#a095ff]">
                Business
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

                <span className="text-white/70">
                  →
                </span>
              </Link>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all bg-white/10 text-white border border-white/20 hover:bg-white/15"
              >
                {hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          INTRO
      ==================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                AI can be intelligent.
                <br />
                <span className="text-brand-primary">
                  Enterprise systems make it useful.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm">
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  Core Challenge
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Many AI initiatives struggle because the solution exists
                  separately from the applications, data and workflows where
                  the actual business work happens.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>Integration Friction</span>

                  <span className="font-bold text-brand-secondary">
                    AI → Enterprise
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                AI creates greater business value when it can work with the
                systems and information that already power the organization.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                Enterprise environments are built from many applications,
                databases, APIs, documents and operational processes. Without
                the right connections, even capable AI systems can remain
                isolated from the work they are intended to improve.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense connects AI capabilities with existing technology
                environments so intelligent workflows can retrieve information,
                coordinate actions and support defined business processes
                without creating another disconnected technology layer.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Connect intelligence to the systems where work happens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          INTEGRATION PILLARS
      ==================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              One integration layer.
              <br />
              <span className="text-brand-primary">
                Connected enterprise intelligence.
              </span>
            </h2>

            <p className="mt-7 text-base sm:text-lg text-brand-primary/65 leading-relaxed max-w-7xl mx-auto">
              Enterprise AI often depends on multiple systems working
              together. AgenticSense brings applications, data, APIs and
              workflows together so AI capabilities can operate within the
              environment your teams already use.
            </p>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/50 leading-relaxed max-w-2xl mx-auto">
              The objective is not to replace every existing system. It is to
              create reliable connections that allow intelligent capabilities
              to work across the technology landscape.
            </p>

            <div className="mt-10 h-px w-20 bg-brand-secondary/50 mx-auto" />

            <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight text-brand-primary">
              AI becomes more valuable when it can act across the enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CAPABILITIES
      ==================================================================== */}

      <section className="py-16 sm:py-20 bg-[#12103c] relative overflow-hidden">

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

              <SectionLabel light>
                Core Capabilities
              </SectionLabel>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Connect the systems
                <br />
                <span className="text-[#a095ff]">
                  required for AI at scale.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">

              <p className="text-sm text-white/55 leading-relaxed">
                From application connectivity to workflow orchestration,
                AgenticSense creates the technical foundations required for AI
                to operate reliably inside enterprise environments.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {capabilities.map(([title, text]) => (
              <article
                key={title}
                className="group relative min-h-[175px] p-6 rounded border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {title}
                </h3>

                <p className="text-sm text-white/55 leading-relaxed">
                  {text}
                </p>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-brand-secondary transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-brand-secondary/50 pl-5">

            <p className="max-w-3xl text-lg sm:text-xl font-bold text-white leading-relaxed">
              Integration is not simply about connecting technology.
              <br />

              <span className="text-white/50">
                It is about connecting intelligence to the way work actually
                happens.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          APPROACH
      ==================================================================== */}

      <section
        id="approach"
        className="py-16 sm:py-24 bg-white border-b border-brand-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14">

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary">
              From disconnected systems
              <br />
              to connected intelligence.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Our integration approach keeps technology decisions grounded in
              the business workflow, information requirements and operational
              outcomes the solution needs to support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {[
              [
                "Understand",
                "Map the existing applications, APIs, data sources, workflows and technical constraints.",
              ],
              [
                "Architect",
                "Define how AI capabilities will interact with enterprise systems and information.",
              ],
              [
                "Connect",
                "Build the integrations, services and data flows required for the target workflow.",
              ],
              [
                "Operationalize",
                "Deploy, monitor and improve the connected environment as adoption grows.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="flex flex-col"
              >
                <div className="h-px w-10 bg-brand-secondary mb-5" />

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
              Start with the workflow.
              <span className="block sm:inline text-brand-primary font-normal mt-1 sm:mt-0">
                {" "}
                Then connect the systems required to make it intelligent.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          OPERATING MODEL
      ==================================================================== */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Connect the enterprise.
                <br />
                <span className="text-brand-primary">
                  Not just individual systems.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                The most valuable AI workflows often depend on information
                and actions distributed across several applications and
                teams. Integration creates the connective layer required to
                make those workflows work as one process.
              </p>
            </div>

            <div className="lg:col-span-7">

              <div className="bg-white rounded-2xl border border-brand-primary/10 shadow-sm overflow-hidden">

                {operatingModel.map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-6 sm:p-7 ${
                      index !== operatingModel.length - 1
                        ? "border-b border-brand-primary/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-5">

                      <div className="mt-1 h-2 w-2 rounded-full bg-brand-secondary shrink-0" />

                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-brand-primary">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-brand-primary/55 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-7 border-t border-brand-primary/10">

            <p className="text-xl sm:text-2xl font-bold tracking-tight">
              Connected systems.
              <br />
              <span className="text-brand-secondary">
                Intelligent operations.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense creates practical integration foundations that
              allow AI capabilities to interact with the systems, information
              and people already involved in business operations.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          INTERACTIVE DELIVERY MODEL
      ==================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Move from system complexity
                <br />
                <span className="text-brand-primary">
                  to reliable connectivity.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                A focused integration lifecycle helps organizations reduce
                technical risk while creating a practical path from existing
                systems to connected AI-enabled workflows.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <div className="border-t border-brand-primary/10">

                {deliverySteps.map((step, index) => (
                  <button
                    type="button"
                    key={step.title}
                    onClick={() => setActiveStep(index)}
                    className={`w-full group flex items-center justify-between py-5 border-b border-brand-primary/10 text-left transition-all ${
                      activeStep === index
                        ? "text-brand-primary"
                        : "text-brand-primary/40"
                    }`}
                  >
                    <span className="text-lg font-bold tracking-tight">
                      {step.title}
                    </span>

                    <span
                      className={`text-lg transition-transform duration-200 ${
                        activeStep === index
                          ? "text-brand-secondary translate-x-1"
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

              <div className="relative min-h-[330px] bg-white border border-brand-primary/10 rounded-xl p-7 sm:p-10 overflow-hidden shadow-sm">

                <span className="absolute -right-8 -top-16 text-[170px] font-bold leading-none text-brand-primary/[0.025] pointer-events-none">
                  {activeDelivery.title.charAt(0)}
                </span>

                <div className="relative z-10">

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                    {activeDelivery.label}
                  </span>

                  <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight">
                    {activeDelivery.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                    {activeDelivery.text}
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="border-l-2 border-brand-secondary/40 pl-4">

                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                        Focus
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeDelivery.left}
                      </p>
                    </div>

                    <div className="border-l-2 border-brand-primary/10 pl-4">

                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                        Outcome
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeDelivery.right}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-brand-primary/10 pt-7">

            <p className="text-base sm:text-lg font-bold leading-relaxed">
              Connect with purpose. Operate with control.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Every integration should have a clear business purpose,
              controlled system interactions and a practical path into
              production operations.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          GOVERNANCE
      ==================================================================== */}

      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <SectionLabel light>
                Integration Control
              </SectionLabel>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
                Enterprise connectivity needs
                <br />
                <span className="text-[#a095ff]">
                  control by design.
                </span>
              </h2>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                Connected AI systems can interact with important enterprise
                information and applications. Integrations therefore need
                appropriate security, permissions, monitoring and operational
                safeguards from the beginning.
              </p>

              <div className="mt-8 rounded-xl bg-white/[0.05] border border-white/10 p-7 sm:p-8">

                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Connect intelligently.
                  <br />
                  Protect enterprise data.
                  <br />
                  <span className="text-[#a095ff]">
                    Operate with confidence.
                  </span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">

              <div className="divide-y divide-white/10 border-y border-white/10">

                {[
                  [
                    "Authentication",
                    "Establish secure mechanisms for systems and AI services to authenticate before accessing enterprise resources.",
                  ],
                  [
                    "Authorization",
                    "Define what AI workflows, services and users are allowed to access or change across connected systems.",
                  ],
                  [
                    "Data Protection",
                    "Control how enterprise information moves between applications, services and AI capabilities.",
                  ],
                  [
                    "Monitoring",
                    "Track integration activity, workflow performance, failures and exceptions after deployment.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-3 sm:gap-5 py-5"
                  >
                    <h3 className="font-bold text-xs sm:text-sm pt-0.5 text-white">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight text-white">
                Enterprise integration should accelerate the business
                <span className="text-white/40">
                  {" "}
                  without weakening security or control.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          OUTCOMES
      ==================================================================== */}

      <section className="py-16 sm:py-24 bg-white border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Turn system complexity into
                <br />
                <span className="text-brand-secondary">
                  connected capability.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                Integration creates value when systems, information and AI
                capabilities work together as part of the business process.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-brand-primary/10">

            {outcomes.map(([title, text], index) => (
              <div
                key={title}
                className={`py-8 sm:py-10 px-6 sm:px-8 ${
                  index < 3
                    ? "border-b border-brand-primary/10"
                    : ""
                } ${
                  index % 3 !== 2
                    ? "lg:border-r lg:border-brand-primary/10"
                    : ""
                } ${
                  index % 2 !== 1 && index % 3 !== 2
                    ? "md:border-r md:border-brand-primary/10 lg:border-r"
                    : ""
                }`}
              >

                <div className="h-px w-8 bg-brand-secondary/60 mb-5" />

                <h3 className="text-base sm:text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-brand-primary/55 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          FAQ + CTA
      ==================================================================== */}

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
                  Ready to connect AI with the systems that run your
                  enterprise?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us about your current systems, workflows and AI
                  objectives. We can help identify the right integration
                  approach and define a practical path toward connected,
                  production-ready AI.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/contact"
                    className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                  >
                    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                    <span>
                      Discuss Your Integration
                    </span>

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