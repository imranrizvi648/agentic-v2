"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================================
   AI Opportunity Mapping
   AgenticSense Services Page

   Design system:
   - Same enterprise editorial layout
   - Same AgenticSense typography hierarchy
   - Same brand purple / indigo palette
   - Same borders and spacing
   - Minimal card usage
   - No numbered UI elements
   - No tags / badges
============================================================================ */

const hero = {
  headline: "Turn Business Challenges into High-Value AI Opportunities",
  sub:
    "AgenticSense helps organizations identify where AI can create meaningful business value by analyzing workflows, information flows, operational friction and automation potential.",
  cta1: "Map Your AI Opportunities",
  cta2: "Explore Our Approach",
};

const opportunityPillars = [
  {
    title: "Business Challenge Analysis",
    body:
      "Understand the business problems, operational bottlenecks and recurring challenges that could benefit from intelligent solutions.",
  },
  {
    title: "Workflow Assessment",
    body:
      "Examine how work moves across people, processes, systems and information to uncover areas where AI can improve execution.",
  },
  {
    title: "AI Use-Case Identification",
    body:
      "Translate observed challenges into practical AI opportunities across functions, workflows and customer-facing operations.",
  },
  {
    title: "Value & Feasibility Assessment",
    body:
      "Evaluate potential business impact, technical feasibility, data requirements, complexity and implementation considerations.",
  },
  {
    title: "Opportunity Prioritization",
    body:
      "Create a focused view of the opportunities that offer the strongest combination of business value, feasibility and strategic relevance.",
  },
  {
    title: "AI Opportunity Roadmap",
    body:
      "Turn prioritized opportunities into a practical roadmap that defines where to start, what to build and how to scale.",
  },
];

const capabilities = [
  [
    "Business Analysis",
    "Understand strategic priorities, operational challenges and the business outcomes AI should support.",
  ],
  [
    "Process Discovery",
    "Map workflows, handoffs, decisions and information flows to identify where intelligent capabilities can improve work.",
  ],
  [
    "Use-Case Design",
    "Shape practical AI use cases around real business problems instead of starting with technology alone.",
  ],
  [
    "Value Assessment",
    "Assess potential impact through productivity, efficiency, service quality, revenue and other measurable outcomes.",
  ],
  [
    "Feasibility",
    "Evaluate data availability, systems, integrations, complexity, risks and the technical foundations required.",
  ],
];

const deliverySteps = [
  {
    title: "Discover",
    label: "Understand the business",
    text:
      "We begin by understanding business priorities, operational challenges, existing processes and the areas where teams spend significant time handling information, decisions and coordination.",
    left: "Business priorities",
    right: "Opportunity context",
  },
  {
    title: "Map",
    label: "Identify AI opportunities",
    text:
      "We examine workflows, information flows and recurring activities to identify where AI, automation or intelligent agents could improve the way work is performed.",
    left: "Current workflows",
    right: "AI opportunity map",
  },
  {
    title: "Prioritize",
    label: "Focus on what matters",
    text:
      "Potential opportunities are assessed against business value, feasibility, complexity, risk and strategic importance so teams can focus on initiatives with the strongest potential.",
    left: "Opportunity assessment",
    right: "Prioritized use cases",
  },
  {
    title: "Roadmap",
    label: "Create the path forward",
    text:
      "We organize prioritized opportunities into a practical roadmap that connects near-term initiatives with the capabilities, technology and governance required for broader AI adoption.",
    left: "AI roadmap",
    right: "Transformation path",
  },
];

const operatingModel = [
  {
    title: "Business Functions",
    text:
      "Identify AI opportunities across finance, HR, procurement, operations, sales and other information-heavy enterprise functions.",
  },
  {
    title: "Customer Operations",
    text:
      "Find opportunities to improve customer support, request handling, knowledge retrieval and service coordination.",
  },
  {
    title: "Knowledge Work",
    text:
      "Identify activities where teams spend time searching, reviewing, summarizing, interpreting and organizing enterprise information.",
  },
  {
    title: "Cross-System Workflows",
    text:
      "Uncover opportunities where employees repeatedly move information between applications, databases, documents and operational systems.",
  },
];

const outcomes = [
  [
    "Clear AI Priorities",
    "Create a focused view of where AI can create the greatest value instead of pursuing disconnected experiments.",
  ],
  [
    "Better Investment Decisions",
    "Evaluate AI initiatives using business impact, feasibility, complexity and strategic relevance.",
  ],
  [
    "Reduced AI Experimentation",
    "Move away from technology-led experimentation toward practical opportunities grounded in real business needs.",
  ],
  [
    "Connected Use Cases",
    "Understand how individual AI opportunities can connect across workflows, teams and enterprise systems.",
  ],
  [
    "Practical Roadmap",
    "Create a clear path from opportunity identification to pilot, implementation and broader adoption.",
  ],
  [
    "Measurable Business Value",
    "Connect AI opportunities to productivity, efficiency, service quality and other meaningful business outcomes.",
  ],
];

const faqs = [
  {
    q: "What is AI opportunity mapping?",
    a:
      "AI opportunity mapping is the process of identifying where AI can create meaningful value across an organization. It involves analyzing business challenges, workflows, information flows, automation potential and feasibility to determine which opportunities are worth pursuing.",
  },
  {
    q: "How do you identify the right AI opportunities?",
    a:
      "We look at business priorities, process complexity, information requirements, repetitive work, decision points, automation potential, feasibility and measurable outcomes. The goal is to find opportunities where AI can solve a meaningful business problem.",
  },
  {
    q: "Do you analyze existing business processes?",
    a:
      "Yes. Existing workflows are an important part of opportunity mapping. Understanding how work is currently performed helps reveal repetitive activities, information bottlenecks, manual handoffs and areas where AI can improve execution.",
  },
  {
    q: "How do you prioritize AI use cases?",
    a:
      "Potential use cases are assessed based on expected business value, technical feasibility, complexity, data availability, risk and strategic relevance. This creates a practical priority view instead of treating every AI idea equally.",
  },
  {
    q: "Can AI opportunity mapping cover multiple departments?",
    a:
      "Yes. Opportunity mapping can cover individual departments or an entire organization. Looking across functions can also reveal opportunities where AI can connect workflows and information between teams.",
  },
  {
    q: "What happens after the opportunities are identified?",
    a:
      "The prioritized opportunities can be organized into an AI roadmap covering pilots, solution design, implementation, integrations, governance and future expansion. This creates a practical path from discovery to delivery.",
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

export default function AIOpportunityMappingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const activeDelivery = deliverySteps[activeStep];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ====================================================================
          HERO
      ===================================================================== */}

      <section
        aria-label="AI Opportunity Mapping"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Turn Business Challenges into{" "}
              <span className="text-[#a095ff]">
                High-Value AI Opportunities
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
      ===================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                AI possibilities are everywhere.
                <br />
                <span className="text-brand-primary">
                  Knowing where to start is harder.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm">

                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  Core Challenge
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Organizations often have many ideas for using AI but lack a
                  clear way to determine which opportunities can create real
                  business value.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>Opportunity Friction</span>

                  <span className="font-bold text-brand-secondary">
                    Ideas → Priorities
                  </span>
                </div>

              </div>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                The right AI strategy starts with understanding where the
                business actually needs improvement.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                AI opportunity mapping helps organizations look beyond
                individual AI tools and examine the processes, information and
                operational challenges where intelligent capabilities could
                create measurable value.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense connects business analysis, process discovery,
                AI use-case design and value assessment to create a clear view
                of where AI should be applied and where investment should be
                focused.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Find the right opportunities before building the solution.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          OPPORTUNITY PILLARS
      ===================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              One clear view of your AI potential.
              <br />
              <span className="text-brand-primary">
                From business challenge to priority.
              </span>
            </h2>

            <p className="mt-7 text-base sm:text-lg text-brand-primary/65 leading-relaxed max-w-7xl mx-auto">
              AI opportunity mapping brings business priorities, workflows,
              technology and value assessment together to identify the areas
              where AI can make the greatest difference.
            </p>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/50 leading-relaxed max-w-2xl mx-auto">
              Instead of starting with a technology and searching for a
              problem, we start with the business and identify where
              intelligent capabilities can improve the way work gets done.
            </p>

            <div className="mt-10 h-px w-20 bg-brand-secondary/50 mx-auto" />

            <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight text-brand-primary">
              The strongest AI initiatives start with the right opportunity.
            </p>

          </div>
        </div>
      </section>

      {/* ====================================================================
          CAPABILITIES
      ===================================================================== */}

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
                Identify the opportunities
                <br />
                <span className="text-[#a095ff]">
                  that matter most.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm text-white/55 leading-relaxed">
                AgenticSense helps organizations move from broad AI ambition
                to a focused understanding of where intelligent capabilities
                can create practical business value.
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
              Better AI decisions begin with better opportunity visibility.
              <br />

              <span className="text-white/50">
                Know where value exists before you decide what to build.
              </span>
            </p>

          </div>

        </div>
      </section>

      {/* ====================================================================
          APPROACH
      ===================================================================== */}

      <section
        id="approach"
        className="py-16 sm:py-24 bg-white border-b border-brand-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14">

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary">
              From business challenge
              <br />
              to prioritized AI opportunity.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Our approach keeps opportunity discovery grounded in real
              business needs, current workflows and measurable outcomes.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {[
              [
                "Understand",
                "Assess business priorities, current processes, information sources and operational challenges.",
              ],
              [
                "Map",
                "Examine workflows, decisions, handoffs and information movement to identify AI opportunities.",
              ],
              [
                "Prioritize",
                "Evaluate opportunities according to value, feasibility, complexity, risk and strategic importance.",
              ],
              [
                "Roadmap",
                "Create a practical path from prioritized opportunities toward pilots, implementation and scale.",
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
              Start with the business problem.

              <span className="block sm:inline text-brand-primary font-normal mt-1 sm:mt-0">
                {" "}
                Then identify the AI opportunity capable of solving it.
              </span>
            </p>

          </div>

        </div>
      </section>

      {/* ====================================================================
          OPERATING MODEL
      ===================================================================== */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Look across the work.
                <br />

                <span className="text-brand-primary">
                  Not just individual tasks.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                The strongest AI opportunities often appear when looking at
                complete workflows rather than isolated tasks. Understanding
                how people, systems and information interact can reveal larger
                opportunities for intelligent transformation.
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
              The right opportunity.
              <br />

              <span className="text-brand-secondary">
                The right starting point.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense helps organizations understand where AI can have
              the greatest impact and create a focused path toward practical
              implementation.
            </p>

          </div>

        </div>
      </section>

      {/* ====================================================================
          INTERACTIVE DELIVERY MODEL
      ===================================================================== */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Move from AI ideas
                <br />

                <span className="text-brand-primary">
                  to focused opportunities.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                A structured opportunity lifecycle helps organizations reduce
                uncertainty and create a practical path from business
                challenges to prioritized AI initiatives.
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
              Discover with purpose. Prioritize with confidence.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Every AI opportunity should have a clear business reason,
              measurable potential and a practical path toward execution.
            </p>

          </div>

        </div>
      </section>

      {/* ====================================================================
          GOVERNANCE
      ===================================================================== */}

      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <SectionLabel light>
                Responsible AI
              </SectionLabel>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
                Opportunity selection needs
                <br />

                <span className="text-[#a095ff]">
                  responsible evaluation.
                </span>
              </h2>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                Not every AI opportunity should be pursued. Strong opportunity
                mapping considers data, access, risk, feasibility and human
                oversight before an initiative moves toward implementation.
              </p>

              <div className="mt-8 rounded-xl bg-white/[0.05] border border-white/10 p-7 sm:p-8">

                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Identify carefully.
                  <br />
                  Prioritize intelligently.
                  <br />

                  <span className="text-[#a095ff]">
                    Build responsibly.
                  </span>
                </p>

              </div>

            </div>

            <div className="lg:col-span-7">

              <div className="divide-y divide-white/10 border-y border-white/10">

                {[
                  [
                    "Data Readiness",
                    "Understand whether the information required for an AI opportunity is available, accessible and suitable for the intended workflow.",
                  ],
                  [
                    "Feasibility",
                    "Evaluate technology, integrations, infrastructure and implementation requirements before prioritizing an opportunity.",
                  ],
                  [
                    "Risk Assessment",
                    "Consider operational, security, compliance and business risks associated with different AI use cases.",
                  ],
                  [
                    "Human Oversight",
                    "Identify where people should remain involved in decisions, approvals and exception handling.",
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
                The best opportunity is not simply the most exciting idea
                <span className="text-white/40">
                  {" "}
                  — it is the one that can create meaningful value responsibly.
                </span>
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          OUTCOMES
      ===================================================================== */}

      <section className="py-16 sm:py-24 bg-white border-b border-brand-primary/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Turn AI possibilities into
                <br />

                <span className="text-brand-secondary">
                  focused business priorities.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                AI opportunity mapping creates clarity around where
                intelligent capabilities can create value and how those
                opportunities should move forward.
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
      ===================================================================== */}

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
                  Ready to identify where AI can create the greatest value?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us where your organization sees AI potential. We can
                  help analyze the opportunity landscape, prioritize the most
                  valuable use cases and define a practical path toward
                  implementation.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/contact"
                    className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                  >

                    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                    <span>
                      Map Your AI Opportunities
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