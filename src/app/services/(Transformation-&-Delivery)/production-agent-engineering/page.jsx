"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================================
   Production Agent Engineering
   AgenticSense Services Page

   Design system:
   - Same enterprise editorial layout
   - Same typography hierarchy
   - Same brand purple / indigo palette
   - Same spacing, borders and visual rhythm
   - Minimal card usage
   - No numbered UI elements
   - No tags / badges
============================================================================ */

const hero = {
  eyebrow: "Production Agent Engineering · Services",
  headline: "From AI Concepts to Production-Ready Agents",
  sub:
    "AgenticSense engineers intelligent agents that can reason through tasks, work with enterprise systems and execute defined workflows reliably inside real business environments.",
  cta1: "Build Your AI Agent",
  cta2: "Explore Our Approach",
};

const transformationPillars = [
  {
    title: "Agent Architecture",
    body:
      "Design reliable agent architectures around business objectives, task complexity, tools, context and required levels of autonomy.",
  },
  {
    title: "Tool & System Integration",
    body:
      "Connect agents with enterprise applications, APIs, databases, documents and operational systems so they can work with real business information.",
  },
  {
    title: "Workflow Orchestration",
    body:
      "Create structured workflows that allow agents to reason, use tools, hand work between components and complete defined business tasks.",
  },
  {
    title: "Agent Engineering",
    body:
      "Build production-grade agents with clear instructions, tool access, memory, guardrails, error handling and reliable execution patterns.",
  },
  {
    title: "Evaluation & Reliability",
    body:
      "Test agent behavior against realistic scenarios to improve accuracy, consistency, task completion and operational reliability.",
  },
  {
    title: "Production Deployment",
    body:
      "Move validated agents into controlled enterprise environments with monitoring, access controls, human oversight and continuous optimization.",
  },
];

const capabilities = [
  [
    "Agent Design",
    "Task-oriented agent architectures, reasoning flows, instructions, context management and autonomy models.",
  ],
  [
    "Tool Integration",
    "APIs, databases, enterprise applications, search systems, documents and external tools connected to agent workflows.",
  ],
  [
    "Workflow Engineering",
    "Multi-step task execution, routing, orchestration, human handoffs and exception handling.",
  ],
  [
    "Knowledge & Context",
    "Enterprise knowledge retrieval, contextual grounding and information access required for reliable decisions.",
  ],
  [
    "Evaluation",
    "Scenario testing, task success measurement, quality evaluation and continuous agent improvement.",
  ],
  [
    "Production Operations",
    "Monitoring, logging, permissions, safeguards and operational controls for deployed AI agents.",
  ],
];

const deliverySteps = [
  {
    title: "Discover",
    label: "Define the agent opportunity",
    text:
      "We identify the business task, understand how it is performed today and determine where an agent can create meaningful value without introducing unnecessary complexity.",
    left: "Business task",
    right: "Agent opportunity",
  },
  {
    title: "Architect",
    label: "Design the agent system",
    text:
      "We define the agent's responsibilities, tools, context, workflow, system interactions, human checkpoints and technical architecture required for production.",
    left: "Agent architecture",
    right: "Defined execution model",
  },
  {
    title: "Engineer",
    label: "Build the production agent",
    text:
      "We develop the agent, integrate the required tools and systems, establish workflow logic and build the controls required for dependable task execution.",
    left: "Working agent",
    right: "Integrated workflow",
  },
  {
    title: "Deploy",
    label: "Operate and improve",
    text:
      "We introduce the agent into a controlled production environment with monitoring, evaluation, governance and continuous improvement based on real usage.",
    left: "Production deployment",
    right: "Operational agent",
  },
];

const operatingModel = [
  {
    title: "Task Automation",
    text:
      "Agents can handle defined knowledge-intensive tasks such as research, information retrieval, analysis, coordination and operational follow-up.",
  },
  {
    title: "Enterprise Systems",
    text:
      "Agents can interact with APIs, business applications, databases and other systems to retrieve information and perform approved actions.",
  },
  {
    title: "Knowledge Work",
    text:
      "Agents can search, interpret and organize enterprise information to help teams complete complex tasks faster.",
  },
  {
    title: "Human Collaboration",
    text:
      "Agents can prepare work, recommend actions and execute approved steps while keeping people involved where judgment or authorization is required.",
  },
];

const outcomes = [
  [
    "Higher Task Completion",
    "Automate defined business tasks through agents that can reason across multiple steps and use the tools required to complete the work.",
  ],
  [
    "Reduced Manual Effort",
    "Reduce repetitive searching, analysis, coordination and follow-up so teams can spend more time on higher-value work.",
  ],
  [
    "Connected AI Execution",
    "Move beyond standalone chat experiences by connecting AI capabilities directly with operational workflows and enterprise systems.",
  ],
  [
    "Faster Response",
    "Allow agents to retrieve information, process requests and initiate defined actions without waiting for every step to be performed manually.",
  ],
  [
    "Controlled Autonomy",
    "Introduce agent autonomy with clear permissions, human approval points, evaluation and operational safeguards.",
  ],
  [
    "Scalable AI Operations",
    "Create reusable agent capabilities that can be extended across workflows, teams and business functions over time.",
  ],
];

const faqs = [
  {
    q: "What is production agent engineering?",
    a:
      "Production agent engineering is the process of designing, building, integrating and deploying AI agents that can perform defined business tasks reliably in real operating environments. It goes beyond creating a prototype by addressing integrations, evaluation, security, monitoring and operational reliability.",
  },
  {
    q: "How is an AI agent different from a chatbot?",
    a:
      "A chatbot primarily responds to user messages. An AI agent can be designed to reason through a task, use approved tools, retrieve information, interact with systems and complete multiple steps toward a defined outcome.",
  },
  {
    q: "Can agents work with existing enterprise systems?",
    a:
      "Yes. Production agents can be connected to APIs, databases, enterprise applications, document repositories, search systems and other approved tools. The goal is to make the agent useful inside the existing technology environment.",
  },
  {
    q: "How do you make agents reliable?",
    a:
      "Reliability comes from clear task boundaries, strong instructions, grounded information, controlled tool access, workflow design, evaluation, error handling, monitoring and appropriate human oversight.",
  },
  {
    q: "Can an agent take actions automatically?",
    a:
      "Yes, when the workflow and governance requirements allow it. Actions can be restricted by permissions, approval checkpoints and predefined rules so that the level of autonomy matches the business risk.",
  },
  {
    q: "Can we start with one production agent?",
    a:
      "Yes. Starting with one focused workflow is often the best approach. A successful agent can establish the technical and governance foundations needed to expand into additional workflows later.",
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

export default function ProductionAgentEngineeringPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const activeDelivery = deliverySteps[activeStep];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* =====================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="Production Agent Engineering"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              From AI Concepts to{" "}
              <span className="text-[#a095ff]">
                Production-Ready Agents
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

      {/* =====================================================================
          INTRO
      ====================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                Building an AI agent is easy.
                <br />
                <span className="text-brand-primary">
                  Building one for production is harder.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm">
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  Core Challenge
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Many AI agents work well in demonstrations but struggle
                  when they need to operate with real data, enterprise
                  systems, business rules and production expectations.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>Engineering Friction</span>

                  <span className="font-bold text-brand-secondary">
                    Prototype → Production
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                Production AI agents need more than a capable model.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                They need clear responsibilities, reliable workflows,
                access to the right information and tools, controlled
                system interactions and a well-defined operating model.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense combines agent architecture, workflow
                engineering, enterprise integration, evaluation and
                deployment so AI agents can move from experimental
                environments into real business operations.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Engineer agents for the work that matters.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          TRANSFORMATION PILLARS
      ====================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              One engineering partner.
              <br />
              <span className="text-brand-primary">
                From agent design to production.
              </span>
            </h2>

            <p className="mt-7 text-base sm:text-lg text-brand-primary/65 leading-relaxed max-w-7xl mx-auto">
              Production agents require architecture, integrations,
              workflow logic, evaluation and operational controls.
              AgenticSense brings these disciplines together to create
              agents that are designed around real business tasks.
            </p>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/50 leading-relaxed max-w-2xl mx-auto">
              Instead of treating an agent as a standalone AI feature,
              we engineer it as part of the workflow, technology
              environment and operating model where the work actually
              happens.
            </p>

            <div className="mt-10 h-px w-20 bg-brand-secondary/50 mx-auto" />

            <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight text-brand-primary">
              Production value begins with production thinking.
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
                Engineer the capabilities
                <br />
                <span className="text-[#a095ff]">
                  required for production agents.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-white/55 leading-relaxed">
                From agent architecture to production operations,
                AgenticSense builds the technical foundations required
                for AI agents to perform useful work reliably inside
                enterprise environments.
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
              Production agents need engineering discipline.
              <br />
              <span className="text-white/50">
                Not just better prompts.
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
              From business task
              <br />
              to production agent.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Our engineering model keeps the agent focused on a real
              business task while creating the technical foundation
              required for reliable production execution.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {[
              [
                "Understand",
                "Define the business task, current workflow, information requirements and operational constraints.",
              ],
              [
                "Architect",
                "Design the agent responsibilities, tools, context, system interactions and human checkpoints.",
              ],
              [
                "Engineer",
                "Build the agent, integrations and workflow components required for dependable production use.",
              ],
              [
                "Operationalize",
                "Deploy, monitor, evaluate and continuously improve the agent as real usage grows.",
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
              Start with a real business task.
              <span className="block sm:inline text-brand-primary font-normal mt-1 sm:mt-0">
                {" "}
                Then engineer the agent required to perform it reliably.
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
                Build the agent around
                <br />
                <span className="text-brand-primary">
                  the work it needs to perform.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                The strongest production agents are designed around
                specific business tasks where information, decisions,
                tools and actions need to come together.
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
              Intelligent agents.
              <br />
              <span className="text-brand-secondary">
                Reliable execution.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense connects agent intelligence with the
              operational work that matters, helping organizations move
              from experimental AI toward dependable enterprise
              execution.
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
                Move from agent concept
                <br />
                <span className="text-brand-primary">
                  to production execution.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                A focused engineering lifecycle helps organizations
                reduce technical risk while creating a clear path from
                business opportunity to operational AI.
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
              Engineer with purpose. Deploy with control.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Every production agent should have a clear responsibility,
              measurable outcomes, controlled access and a practical
              path into operations.
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
                Responsible Agent Operations
              </SectionLabel>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
                Production agents need
                <br />
                <span className="text-[#a095ff]">
                  control by design.
                </span>
              </h2>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                Agents that interact with enterprise systems need
                appropriate permissions, evaluation, monitoring,
                human oversight and operational safeguards.
              </p>

              <div className="mt-8 rounded-xl bg-white/[0.05] border border-white/10 p-7 sm:p-8">

                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Engineer intelligently.
                  <br />
                  Operate responsibly.
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
                    "Access & Permissions",
                    "Control how agents access enterprise information, applications, APIs and operational environments.",
                  ],
                  [
                    "Evaluation",
                    "Measure agent quality, reliability, task completion and behavior against realistic business scenarios.",
                  ],
                  [
                    "Human Oversight",
                    "Keep appropriate review and authorization points within workflows where decisions or actions require human judgment.",
                  ],
                  [
                    "Monitoring",
                    "Track agent activity, workflow performance, exceptions, failures and operational outcomes after deployment.",
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
                Agent autonomy should increase business capacity
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
                Turn AI agents into
                <br />
                <span className="text-brand-secondary">
                  measurable business capability.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                Agents create value when they reliably perform useful
                work, connect with the systems teams already use and
                operate within appropriate controls.
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
                  Ready to turn an AI concept into a production agent?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us about the business task you want to automate.
                  We can help define the agent architecture, connect
                  the required systems and establish a practical path
                  toward production.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/contact"
                    className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                  >
                    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                    <span>
                      Discuss Your Agent
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