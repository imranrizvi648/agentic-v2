"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================================
   Rapid Pilot Development
   AgenticSense Services Page

   Design system:
   - Same enterprise editorial layout
   - Same AgenticSense typography hierarchy
   - Same brand purple / indigo palette
   - Same heading sizes / weights / colors
   - Same spacing and borders
   - Minimal card usage
   - No numbered UI elements
   - No tags / pills
============================================================================ */

const hero = {
  headline: "Turn AI Ideas Into Working Business Pilots",
  sub:
    "AgenticSense helps organizations quickly turn promising AI opportunities into focused, working pilots that can be tested with real users, real workflows and real business requirements.",
  cta1: "Start a Pilot",
  cta2: "Explore Our Approach",
};

const pilotPrinciples = [
  {
    title: "Focused Use Case",
    body:
      "Start with a clearly defined business problem where AI can create meaningful value without creating unnecessary complexity.",
  },
  {
    title: "Real Workflow",
    body:
      "Design the pilot around how people actually work, including existing processes, information sources, systems and decision points.",
  },
  {
    title: "Working Solution",
    body:
      "Build something functional that users can interact with instead of stopping at concepts, presentations or technical demonstrations.",
  },
  {
    title: "Fast Validation",
    body:
      "Test the solution quickly with real scenarios to understand usefulness, adoption, performance and areas that need improvement.",
  },
  {
    title: "Measured Outcomes",
    body:
      "Define practical success measures so the organization can determine whether the pilot creates enough value to continue.",
  },
  {
    title: "Path to Scale",
    body:
      "Use pilot findings to define the technical, operational and governance foundations required for broader production deployment.",
  },
];

const capabilities = [
  [
    "Use Case Definition",
    "Clarify the business problem, target users, workflow scope and expected outcomes before development begins.",
  ],
  [
    "Rapid Prototyping",
    "Turn selected ideas into working AI experiences and workflow prototypes within a focused delivery cycle.",
  ],
  [
    "AI Engineering",
    "Build the models, agents, automation logic and application components required for the selected pilot.",
  ],
  [
    "Enterprise Integration",
    "Connect pilots with relevant data sources, APIs, applications and business information where required.",
  ],
  [
    "User Validation",
    "Test the solution with real users and scenarios to understand usability, accuracy, adoption and business fit.",
  ],
];

const approachSteps = [
  {
    title: "Frame",
    label: "Define the opportunity",
    text:
      "We establish the business objective, target workflow, users, available information and the specific problem the pilot needs to solve.",
    left: "Business problem",
    right: "Pilot definition",
  },
  {
    title: "Design",
    label: "Shape the experience",
    text:
      "We design the AI-enabled workflow, user experience, system interactions and success measures required to make the pilot useful.",
    left: "Target workflow",
    right: "Pilot experience",
  },
  {
    title: "Build",
    label: "Create the working pilot",
    text:
      "We rapidly engineer the selected AI capabilities, integrations and workflow components needed for users to test the solution in realistic scenarios.",
    left: "Working solution",
    right: "Real user testing",
  },
  {
    title: "Validate",
    label: "Learn and decide",
    text:
      "We evaluate the pilot against business and technical outcomes, capture user feedback and identify what should change before wider deployment.",
    left: "Pilot evidence",
    right: "Scale decision",
  },
];

const pilotAreas = [
  {
    title: "Knowledge & Research",
    text:
      "Build pilots that help teams search, summarize, compare and work with large volumes of internal information.",
  },
  {
    title: "Customer Operations",
    text:
      "Prototype AI-assisted experiences for customer requests, service workflows, information retrieval and support teams.",
  },
  {
    title: "Finance & Operations",
    text:
      "Test intelligent workflows that reduce repetitive work across finance, operations, procurement and other business functions.",
  },
  {
    title: "Document Workflows",
    text:
      "Validate AI capabilities for extracting, classifying, reviewing and routing information from business documents.",
  },
];

const outcomes = [
  [
    "Faster Validation",
    "Move from an AI idea to practical evidence quickly without committing to a full enterprise rollout from day one.",
  ],
  [
    "Reduced Delivery Risk",
    "Test assumptions, workflows and technical approaches before making larger implementation decisions.",
  ],
  [
    "Real User Feedback",
    "Understand how employees or customers actually interact with the AI solution in realistic scenarios.",
  ],
  [
    "Clearer Investment Decisions",
    "Use measurable pilot results to determine whether an AI initiative should be improved, expanded or stopped.",
  ],
  [
    "Stronger Production Foundations",
    "Identify integration, data, security, governance and operational requirements before scaling the solution.",
  ],
  [
    "Practical Business Value",
    "Focus pilot development on meaningful improvements in productivity, service, efficiency and decision-making.",
  ],
];

const faqs = [
  {
    q: "What is rapid pilot development?",
    a:
      "Rapid pilot development is a focused approach to building and testing an AI solution around a specific business problem. Instead of attempting a full enterprise implementation immediately, the organization validates the idea through a working solution, real users and measurable outcomes.",
  },
  {
    q: "How quickly can an AI pilot be developed?",
    a:
      "The timeline depends on the complexity of the workflow, integrations, data requirements and desired level of functionality. The objective is to keep the scope focused so that a useful working pilot can be created and tested without unnecessary development overhead.",
  },
  {
    q: "Is a pilot just a prototype?",
    a:
      "Not necessarily. A prototype may demonstrate an idea, while a business pilot is designed to test that idea in a realistic workflow. A pilot can include real data, users, integrations and measurable outcomes so the organization can make a more informed decision about the next stage.",
  },
  {
    q: "Can the pilot use our existing enterprise systems?",
    a:
      "Yes. Where appropriate, pilots can connect to existing applications, APIs, databases, document repositories and other enterprise information sources. This helps validate how the AI capability will work within the organization's actual operating environment.",
  },
  {
    q: "What happens after the pilot?",
    a:
      "The pilot produces evidence that can inform the next decision. Depending on the results, the organization may improve the workflow, expand the scope, prepare the solution for production or decide that the use case does not justify further investment.",
  },
  {
    q: "Can we start with one small use case?",
    a:
      "Yes. Starting with one focused use case is often the most practical way to validate AI value. A clearly scoped pilot can establish the technical, operational and governance lessons needed before expanding to additional workflows.",
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

export default function RapidPilotDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const activeApproach = approachSteps[activeStep];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ======================================================================
          HERO
      ======================================================================= */}

      <section
        aria-label="Rapid Pilot Development"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Turn AI Ideas Into{" "}
              <span className="text-[#a095ff]">
                Working Business Pilots
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

      {/* ======================================================================
          INTRO
      ======================================================================= */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                AI ideas are easy.
                <br />
                <span className="text-brand-primary">
                  Proving their value is harder.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm">
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  The Challenge
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Many organizations have promising AI ideas but lack a fast,
                  practical way to determine whether those ideas can work in
                  real business environments.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>From Idea</span>

                  <span className="font-bold text-brand-secondary">
                    To Evidence
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                A successful AI pilot should answer a business question,
                not simply demonstrate that AI technology exists.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                Organizations need to understand whether an AI capability can
                fit into a real workflow, help users perform meaningful work
                and produce measurable improvements before committing to a
                larger transformation initiative.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense combines rapid AI engineering with business
                workflow understanding so teams can move quickly from an
                opportunity to a working pilot that generates useful evidence.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Build quickly. Learn early. Scale what works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          PILOT PRINCIPLES
      ======================================================================= */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              A practical way to validate AI.
              <br />
              <span className="text-brand-primary">
                From idea to working evidence.
              </span>
            </h2>

            <p className="mt-7 text-base sm:text-lg text-brand-primary/65 leading-relaxed max-w-7xl mx-auto">
              Rapid pilots give organizations a focused environment to test
              AI capabilities against real business requirements. Instead of
              attempting to solve everything at once, we concentrate on the
              workflow where the opportunity is strongest.
            </p>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/50 leading-relaxed max-w-2xl mx-auto">
              The result is a working experience, real user feedback and
              practical evidence that can guide the next stage of investment.
            </p>

            <div className="mt-10 h-px w-20 bg-brand-secondary/50 mx-auto" />

            <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight text-brand-primary">
              The fastest path to confidence is focused experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          CAPABILITIES
      ======================================================================= */}

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

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Everything required
                <br />
                <span className="text-[#a095ff]">
                  to validate the opportunity.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">

              <p className="text-sm text-white/55 leading-relaxed">
                From defining the use case to building and testing the working
                experience, AgenticSense helps organizations move through
                pilot development without unnecessary complexity.
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
              A pilot should create evidence,
              <br />
              <span className="text-white/50">
                not another disconnected technology experiment.
              </span>
            </p>

          </div>
        </div>
      </section>

      {/* ======================================================================
          APPROACH
      ======================================================================= */}

      <section
        id="approach"
        className="py-16 sm:py-24 bg-white border-b border-brand-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14">

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary">
              From business opportunity
              <br />
              to validated AI pilot.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Our approach keeps pilot development focused on a real business
              problem, a practical workflow and evidence that can guide the
              next decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {[
              [
                "Frame",
                "Define the business problem, target users, workflow and outcomes that the pilot needs to address.",
              ],
              [
                "Design",
                "Shape the AI-enabled experience, workflow interactions and success measures before development.",
              ],
              [
                "Build",
                "Engineer the working AI capabilities, integrations and application components required for testing.",
              ],
              [
                "Validate",
                "Test with realistic scenarios, gather feedback and determine the strongest path forward.",
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
              Start with the question that matters.
              <span className="block sm:inline text-brand-primary font-normal mt-1 sm:mt-0">
                {" "}
                Then build the smallest useful solution that can answer it.
              </span>
            </p>

          </div>
        </div>
      </section>

      {/* ======================================================================
          PILOT AREAS
      ======================================================================= */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Test the opportunity.
                <br />
                <span className="text-brand-primary">
                  Learn where AI fits.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Rapid pilots can be applied across many information-heavy and
                workflow-driven areas where organizations need evidence before
                making larger technology decisions.
              </p>
            </div>

            <div className="lg:col-span-7">

              <div className="bg-white rounded-2xl border border-brand-primary/10 shadow-sm overflow-hidden">

                {pilotAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-6 sm:p-7 ${
                      index !== pilotAreas.length - 1
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
              Real workflow.
              <br />
              <span className="text-brand-secondary">
                Real users. Real evidence.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              The purpose of a pilot is to make AI tangible enough for an
              organization to learn what works, what needs improvement and
              what is required for responsible scale.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          INTERACTIVE DELIVERY MODEL
      ======================================================================= */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Move from concept
                <br />
                <span className="text-brand-primary">
                  to working evidence.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                A focused pilot lifecycle helps organizations move quickly
                while keeping development grounded in business requirements,
                user needs and measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <div className="border-t border-brand-primary/10">

                {approachSteps.map((step, index) => (
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
                  {activeApproach.title.charAt(0)}
                </span>

                <div className="relative z-10">

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                    {activeApproach.label}
                  </span>

                  <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight">
                    {activeApproach.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                    {activeApproach.text}
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="border-l-2 border-brand-secondary/40 pl-4">

                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                        Focus
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeApproach.left}
                      </p>
                    </div>

                    <div className="border-l-2 border-brand-primary/10 pl-4">

                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                        Outcome
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeApproach.right}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-brand-primary/10 pt-7">

            <p className="text-base sm:text-lg font-bold leading-relaxed">
              Build fast. Validate honestly.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Every pilot should make the next business decision easier by
              producing practical evidence instead of assumptions.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          GOVERNANCE
      ======================================================================= */}

      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
                Rapid does not mean
                <br />
                <span className="text-[#a095ff]">
                  uncontrolled.
                </span>
              </h2>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                Even a short AI pilot should consider security, data access,
                evaluation, human oversight and the operational requirements
                that may matter when the solution moves toward production.
              </p>

              <div className="mt-8 rounded-xl bg-white/[0.05] border border-white/10 p-7 sm:p-8">

                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Experiment quickly.
                  <br />
                  Evaluate carefully.
                  <br />
                  <span className="text-[#a095ff]">
                    Scale responsibly.
                  </span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">

              <div className="divide-y divide-white/10 border-y border-white/10">

                {[
                  [
                    "Data & Access",
                    "Use appropriate information sources and define how the pilot accesses business data and systems.",
                  ],
                  [
                    "Evaluation",
                    "Measure accuracy, usefulness, reliability and workflow performance against practical requirements.",
                  ],
                  [
                    "Human Review",
                    "Keep appropriate human decision points in the workflow where judgment, approval or verification is required.",
                  ],
                  [
                    "Security",
                    "Consider authentication, authorization, data handling and system boundaries during pilot development.",
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
                Speed should accelerate learning
                <span className="text-white/40">
                  {" "}
                  without compromising responsible delivery.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          OUTCOMES
      ======================================================================= */}

      <section className="py-16 sm:py-24 bg-white border-b border-brand-primary/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Turn experimentation into
                <br />
                <span className="text-brand-secondary">
                  informed decisions.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                A well-designed pilot gives leadership, users and technology
                teams evidence they can use to decide what should happen next.
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

      {/* ======================================================================
          FAQ + CTA
      ======================================================================= */}

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
                  Have an AI idea you want to test quickly?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us about the opportunity. We can help define the right
                  pilot scope, design the workflow and build a practical path
                  toward validation.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/contact"
                    className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                  >
                    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                    <span>
                      Discuss Your AI Pilot
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