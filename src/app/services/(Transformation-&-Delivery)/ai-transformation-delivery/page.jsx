"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================================
   AI Transformation & Delivery
   AgenticSense Services Page

   Design system:
   - Enterprise editorial layout
   - AgenticSense typography hierarchy
   - Brand purple / indigo palette
   - Clean borders and generous spacing
   - Minimal card usage
   - No numbered UI elements
============================================================================ */

const hero = {
  eyebrow: "AI Transformation & Delivery · Services",
  headline: "From AI Strategy to Enterprise-Ready Transformation",
  sub:
    "AgenticSense helps organizations move from AI ambition to measurable business outcomes by identifying high-value opportunities, designing intelligent workflows and delivering AI solutions that fit into real operating environments.",
  cta1: "Start Your AI Transformation",
  cta2: "Explore Our Approach",
};

const transformationPillars = [
  {
    title: "AI Opportunity Discovery",
    body:
      "Identify where AI can create measurable value across business functions, customer operations, knowledge work and complex workflows.",
  },
  {
    title: "Transformation Strategy",
    body:
      "Translate business priorities into a practical AI roadmap covering use cases, capabilities, data, technology, governance and adoption.",
  },
  {
    title: "Intelligent Workflow Design",
    body:
      "Redesign processes around AI agents, automation and human collaboration instead of simply adding AI to existing manual steps.",
  },
  {
    title: "AI Solution Engineering",
    body:
      "Build and integrate production-ready AI solutions that work with enterprise applications, data sources and operational systems.",
  },
  {
    title: "Deployment & Adoption",
    body:
      "Move validated AI solutions into real environments with controlled deployment, user enablement, monitoring and continuous improvement.",
  },
  {
    title: "Scale & Optimization",
    body:
      "Expand successful AI initiatives across functions and business units while continuously improving performance, adoption and measurable value.",
  },
];

const capabilities = [
  [
    "Strategy",
    "AI roadmaps, opportunity assessment, use-case prioritization and transformation planning.",
  ],
  [
    "Design",
    "Agentic workflows, human-in-the-loop processes, operating models and experience design.",
  ],
  [
    "Engineering",
    "AI agents, intelligent automation, integrations, data workflows and enterprise applications.",
  ],
  [
    "Deployment",
    "Production implementation, controlled rollout, monitoring and operational enablement.",
  ],
  [
    "Governance",
    "Access controls, evaluation, oversight, responsible AI practices and operational safeguards.",
  ],
];

const deliverySteps = [
  {
    title: "Discover",
    label: "Understand the opportunity",
    text:
      "We assess business priorities, existing processes, technology environments and information flows to identify where AI can create meaningful operational or commercial value.",
    left: "Business priorities",
    right: "AI opportunity map",
  },
  {
    title: "Design",
    label: "Shape the transformation",
    text:
      "We define the target workflow, AI capabilities, human responsibilities, integration requirements and measurable outcomes before moving into implementation.",
    left: "Target operating model",
    right: "Defined AI workflow",
  },
  {
    title: "Build",
    label: "Engineer the solution",
    text:
      "We develop and integrate the AI solution with the systems, data and processes required for the selected business workflow.",
    left: "Production architecture",
    right: "Working AI solution",
  },
  {
    title: "Deploy",
    label: "Move into operations",
    text:
      "We introduce the solution through a controlled rollout with appropriate governance, monitoring, user enablement and operational support.",
    left: "Controlled deployment",
    right: "Operational adoption",
  },
];

const operatingModel = [
  {
    title: "Business Functions",
    text:
      "Transform repetitive, information-heavy workflows across finance, customer service, operations, HR, procurement and other enterprise functions.",
  },
  {
    title: "Customer Operations",
    text:
      "Use AI to understand requests, retrieve information, coordinate service workflows and support customer-facing teams.",
  },
  {
    title: "Knowledge Work",
    text:
      "Help teams search, interpret, summarize and act on large volumes of enterprise information and institutional knowledge.",
  },
  {
    title: "Enterprise Operations",
    text:
      "Connect people, systems and information across workflows that traditionally depend on manual coordination and follow-up.",
  },
];

const outcomes = [
  [
    "Faster Transformation",
    "Move from AI experimentation toward focused initiatives with defined business outcomes and delivery paths.",
  ],
  [
    "Higher Operational Capacity",
    "Reduce repetitive knowledge work and allow teams to focus more time on complex and higher-value activities.",
  ],
  [
    "Better Process Intelligence",
    "Give organizations greater visibility into how work moves across people, systems and information.",
  ],
  [
    "Connected AI Workflows",
    "Move beyond isolated AI tools toward coordinated workflows that can execute multiple defined steps.",
  ],
  [
    "Controlled Enterprise Adoption",
    "Introduce AI through measurable pilots, governance controls and progressive expansion.",
  ],
  [
    "Measurable Business Value",
    "Connect AI initiatives to operational efficiency, service quality, productivity and other business outcomes.",
  ],
];

const faqs = [
  {
    q: "What does AI transformation mean for an enterprise?",
    a:
      "AI transformation means redesigning selected business processes and operating models around AI capabilities rather than simply introducing another AI tool. It can involve strategy, workflow redesign, AI agents, automation, data, integrations, governance and organizational adoption.",
  },
  {
    q: "Does AgenticSense only provide AI consulting?",
    a:
      "No. AgenticSense combines transformation strategy with solution design and delivery. The engagement can cover opportunity discovery, workflow design, AI engineering, integrations, deployment and optimization depending on the organization's needs.",
  },
  {
    q: "How do you identify the right AI use cases?",
    a:
      "We look at business impact, process complexity, information requirements, automation potential, feasibility, risk and measurable outcomes. The goal is to prioritize use cases where AI can solve a meaningful business problem rather than pursuing AI adoption for its own sake.",
  },
  {
    q: "Can AI solutions work with existing enterprise systems?",
    a:
      "Yes. AI solutions can be designed around existing enterprise applications, databases, document repositories, APIs and operational systems. The objective is to integrate AI into the existing operating environment rather than creating another disconnected technology layer.",
  },
  {
    q: "How do you manage AI governance?",
    a:
      "AI initiatives should have clearly defined access, authorization, evaluation, monitoring and human oversight mechanisms. Governance requirements are considered as part of solution design and deployment rather than being added after implementation.",
  },
  {
    q: "Can we start with one AI use case?",
    a:
      "Yes. A focused pilot is often the most practical starting point. Once the workflow demonstrates measurable value and the required technical and governance foundations are established, the approach can be extended to additional processes and business functions.",
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

export default function AITransformationDeliveryPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const activeDelivery = deliverySteps[activeStep];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* =====================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="AI Transformation and Delivery"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

        

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              From AI Strategy to{" "}
              <span className="text-[#a095ff]">
                Enterprise-Ready Transformation
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
                href="#approach"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all bg-white/10 text-white border border-white/20 hover:bg-white/15"
              >
                {hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTRO
      ====================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

           

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                AI adoption is easy.
                <br />
                <span className="text-brand-primary">
                  Enterprise transformation is harder.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm">
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  Core Challenge
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Many organizations have access to AI tools but struggle to
                  turn experimentation into integrated, governed and measurable
                  business outcomes.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>Transformation Friction</span>

                  <span className="font-bold text-brand-secondary">
                    Strategy → Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                Successful AI transformation requires more than selecting
                models or deploying isolated AI applications.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                Organizations need to understand where AI can create real
                value, redesign workflows around those opportunities and
                connect intelligent capabilities with the systems and people
                already running the business.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense brings strategy, workflow design, AI engineering,
                integration and delivery together so organizations can move
                from individual experiments toward scalable AI-enabled
                operations.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Turn AI potential into operational capability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          TRANSFORMATION PILLARS
          RIGHT SIDE NUMBERED LIST REMOVED
      ====================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">

           

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              One transformation partner.
              <br />
              <span className="text-brand-primary">
                From opportunity to operation.
              </span>
            </h2>

            <p className="mt-7 text-base sm:text-lg text-brand-primary/65 leading-relaxed max-w-7xl mx-auto">
              AI transformation spans strategy, process design, technology,
              delivery and adoption. AgenticSense connects these disciplines
              around measurable business outcomes, helping organizations move
              from identifying an opportunity to embedding AI into the way
              work actually gets done.
            </p>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/50 leading-relaxed max-w-2xl mx-auto">
              Rather than treating transformation as a sequence of disconnected
              initiatives, we create a practical path that connects business
              priorities with intelligent workflows, enterprise technology,
              responsible deployment and long-term optimization.
            </p>

            <div className="mt-10 h-px w-20 bg-brand-secondary/50 mx-auto" />

            <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight text-brand-primary">
              Strategy becomes meaningful when it reaches operations.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================================
          CAPABILITIES
      ====================================================================== */}

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
                Build the capabilities
                <br />
                <span className="text-[#a095ff]">
                  required for AI at scale.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-white/55 leading-relaxed">
                From strategic direction to production delivery, AgenticSense
                helps organizations build the technical and operational
                foundations required to make AI useful in the real world.
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
              AI transformation is not a technology project alone.
              <br />
              <span className="text-white/50">
                It is a change in how work gets done.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================================
          APPROACH
      ====================================================================== */}

      <section
        id="approach"
        className="py-16 sm:py-24 bg-white border-b border-brand-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14">

         

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary">
              From business challenge
              <br />
              to AI-enabled operation.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Our delivery model keeps transformation grounded in a real
              business problem, a defined workflow and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {[
              [
                "Understand",
                "Assess the business objective, current workflow, information sources and operational constraints.",
              ],
              [
                "Design",
                "Define the AI-enabled workflow, system interactions, human responsibilities and success measures.",
              ],
              [
                "Engineer",
                "Build the AI capabilities, integrations and workflow components required for production use.",
              ],
              [
                "Operationalize",
                "Deploy, monitor, enable users and continuously improve the solution as adoption grows.",
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
              Start with a measurable business outcome.
              <span className="block sm:inline text-brand-primary font-normal mt-1 sm:mt-0">
                {" "}
                Then build the AI capability required to achieve it.
              </span>
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================================
          OPERATING MODEL
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">


              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Transform the work.
                <br />
                <span className="text-brand-primary">
                  Not just the technology.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                The highest-value AI opportunities often exist inside
                information-heavy workflows where people spend significant
                time searching, interpreting, coordinating and moving work
                between systems.
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
              Intelligent workflows.
              <br />
              <span className="text-brand-secondary">
                Measurable business outcomes.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense connects AI capabilities to the operational work
              that matters, helping organizations move from isolated
              experimentation toward practical enterprise adoption.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE DELIVERY MODEL
      ====================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">

            

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Move from ambition
                <br />
                <span className="text-brand-primary">
                  to measurable delivery.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                A focused transformation lifecycle helps organizations reduce
                delivery risk while creating a clear path from strategy to
                production.
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
              Build with purpose. Deliver with control.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Every transformation initiative should have a defined objective,
              measurable outcomes and a practical path into operations.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================================
          GOVERNANCE
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <SectionLabel light>
                Responsible AI
              </SectionLabel>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
                Enterprise AI needs
                <br />
                <span className="text-[#a095ff]">
                  control by design.
                </span>
              </h2>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                Scaling AI requires more than technical capability. Solutions
                need appropriate access, evaluation, monitoring, human
                oversight and operational controls.
              </p>

              <div className="mt-8 rounded-xl bg-white/[0.05] border border-white/10 p-7 sm:p-8">

                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Build intelligently.
                  <br />
                  Deploy responsibly.
                  <br />
                  <span className="text-[#a095ff]">
                    Scale with confidence.
                  </span>
                </p>

              </div>

            </div>

            <div className="lg:col-span-7">

              <div className="divide-y divide-white/10 border-y border-white/10">

                {[
                  [
                    "Access & Security",
                    "Define how AI systems access enterprise information, applications and operational environments.",
                  ],
                  [
                    "Evaluation",
                    "Establish measurable criteria for quality, reliability, performance and workflow outcomes.",
                  ],
                  [
                    "Human Oversight",
                    "Keep appropriate human review and authorization points within workflows where judgment is required.",
                  ],
                  [
                    "Monitoring",
                    "Track AI behavior, workflow performance, exceptions and operational outcomes after deployment.",
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
                Transformation should accelerate the business
                <span className="text-white/40">
                  {" "}
                  without compromising control.
                </span>
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          OUTCOMES
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-white border-b border-brand-primary/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            <div className="lg:col-span-7">

         

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Turn AI investment into
                <br />
                <span className="text-brand-secondary">
                  measurable capability.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                AI transformation creates value when intelligent capabilities
                become part of how teams actually work.
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

      {/* =====================================================================
          FAQ + CTA
      ====================================================================== */}

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
                  Ready to turn your AI ambition into an enterprise
                  transformation?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us where your organization sees AI opportunity. We can
                  help identify the right use cases, shape the transformation
                  roadmap and define a practical path toward delivery.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/contact"
                    className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                  >
                    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                    <span>
                      Discuss Your AI Transformation
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