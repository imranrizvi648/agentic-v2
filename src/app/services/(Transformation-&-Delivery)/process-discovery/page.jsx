"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================================
   Process Discovery
   AgenticSense Services Page

   Design system:
   - Same enterprise editorial layout
   - Same AgenticSense typography hierarchy
   - Same brand purple / indigo palette
   - Same clean borders and generous spacing
   - Same minimal card usage
   - No numbered UI elements
============================================================================ */

const hero = {
  eyebrow: "Process Discovery · Services",
  headline: "Understand How Work Really Happens Before You Transform It",
  sub:
    "AgenticSense helps organizations understand how work moves across people, processes, systems and information, revealing operational friction and identifying where AI, automation and intelligent workflows can create measurable value.",
  cta1: "Start Your Process Discovery",
  cta2: "Explore Our Approach",
};

const transformationPillars = [
  {
    title: "Process Mapping",
    body:
      "Create a clear view of how work moves from initiation to completion across teams, systems, decisions and information.",
  },
  {
    title: "Workflow Analysis",
    body:
      "Understand how work is actually performed, including manual activities, handoffs, approvals, exceptions and dependencies.",
  },
  {
    title: "System & Data Discovery",
    body:
      "Identify the applications, data sources and information flows that support each stage of the business process.",
  },
  {
    title: "Bottleneck Identification",
    body:
      "Find delays, repetitive activities, unnecessary steps, rework and process friction that affect operational performance.",
  },
  {
    title: "Automation Opportunity",
    body:
      "Identify where intelligent automation, AI agents, integrations and workflow improvements can reduce manual effort.",
  },
  {
    title: "Transformation Prioritization",
    body:
      "Turn process findings into practical opportunities prioritized by business impact, feasibility and transformation potential.",
  },
];

const capabilities = [
  [
    "Process Mapping",
    "Visualize activities, decisions, handoffs, systems and dependencies across important business workflows.",
  ],
  [
    "Workflow Analysis",
    "Understand where employees spend time searching, reviewing, entering, checking and coordinating information.",
  ],
  [
    "System Analysis",
    "Map applications, integrations, data sources and system interactions supporting operational work.",
  ],
  [
    "Friction Analysis",
    "Identify delays, repetitive work, rework, duplicate activities and unnecessary process complexity.",
  ],
  [
    "AI Opportunity",
    "Discover where AI agents, intelligent automation and decision support can improve existing workflows.",
  ],
];

const deliverySteps = [
  {
    title: "Discover",
    label: "Understand the current process",
    text:
      "We begin by understanding the business objective, existing workflow, teams involved, systems used and information required to complete the process. This creates a clear foundation for deeper analysis.",
    left: "Business context",
    right: "Current-state understanding",
  },
  {
    title: "Map",
    label: "Make the workflow visible",
    text:
      "We map activities, decisions, approvals, handoffs, information flows and system interactions to create a practical view of how work moves from beginning to end.",
    left: "Workflow structure",
    right: "Process visibility",
  },
  {
    title: "Analyze",
    label: "Identify process friction",
    text:
      "We examine the workflow to identify bottlenecks, manual effort, repeated work, unnecessary steps, information gaps and dependencies that affect performance.",
    left: "Process friction",
    right: "Improvement opportunities",
  },
  {
    title: "Prioritize",
    label: "Define what should change",
    text:
      "We evaluate improvement opportunities based on business value, feasibility, complexity and AI or automation potential, creating a focused path toward transformation.",
    left: "Opportunity assessment",
    right: "Transformation priorities",
  },
];

const operatingModel = [
  {
    title: "People",
    text:
      "Understand who performs each activity, where decisions are made and how teams coordinate work across organizational boundaries.",
  },
  {
    title: "Processes",
    text:
      "Understand the activities, approvals, exceptions, dependencies and handoffs that determine how work gets completed.",
  },
  {
    title: "Systems",
    text:
      "Identify the applications, platforms and tools employees use to create, retrieve, update and move information.",
  },
  {
    title: "Information",
    text:
      "Trace how documents, data and business knowledge move through the workflow and where information gaps create friction.",
  },
];

const outcomes = [
  [
    "Clearer Workflows",
    "Create a shared understanding of how processes actually operate across teams, systems and information.",
  ],
  [
    "Reduced Manual Work",
    "Identify repetitive activities that consume employee time and can be simplified, automated or intelligently handled.",
  ],
  [
    "Better Automation Decisions",
    "Focus automation efforts on workflows where technology can create meaningful operational value.",
  ],
  [
    "Stronger AI Opportunities",
    "Discover processes where AI can interpret information, support decisions or execute defined activities.",
  ],
  [
    "Improved System Alignment",
    "Understand how applications and information flows can work together more effectively.",
  ],
  [
    "Practical Transformation Roadmap",
    "Convert discovery findings into prioritized opportunities and a clear path toward implementation.",
  ],
];

const faqs = [
  {
    q: "What is process discovery?",
    a:
      "Process discovery is the structured examination of how work actually happens inside an organization. It looks at people, activities, decisions, systems, information and handoffs to create a clear understanding of the current process before changes are made.",
  },
  {
    q: "Why is process discovery important before AI implementation?",
    a:
      "AI works best when it is applied to a clearly understood business workflow. Process discovery helps identify where AI can create meaningful value and prevents organizations from automating inefficient or poorly understood processes.",
  },
  {
    q: "What types of processes can AgenticSense analyze?",
    a:
      "Process discovery can be applied to finance, customer service, procurement, HR, operations, document-heavy workflows, knowledge work and other business processes involving people, systems and information.",
  },
  {
    q: "Can process discovery identify automation opportunities?",
    a:
      "Yes. A major outcome of process discovery is identifying repetitive, rule-based and information-heavy activities that may benefit from workflow automation, AI agents, system integration or decision support.",
  },
  {
    q: "Do you analyze existing enterprise systems?",
    a:
      "Yes. The discovery process considers applications, databases, APIs, document repositories and other technology components involved in the workflow so recommendations fit the existing operating environment.",
  },
  {
    q: "What happens after process discovery?",
    a:
      "The findings can be used to define a future-state workflow, prioritize automation and AI opportunities, estimate transformation value and create a practical roadmap for implementation.",
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

export default function ProcessDiscoveryPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const activeDelivery = deliverySteps[activeStep];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">
      {/* =====================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="Process Discovery"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">
           

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Understand How Work Really Happens Before You Transform It
              <span className="text-[#a095ff]">
                .
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
                You cannot improve.
                <br />
                <span className="text-brand-primary">
                  What you cannot see.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm">
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  Core Challenge
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Many organizations know that their processes are slow,
                  manual or difficult to manage, but lack a clear view of
                  where the friction actually exists.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>
                    Process Visibility
                  </span>

                  <span className="font-bold text-brand-secondary">
                    Reality → Insight
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                Business processes often look simple in documentation but
                become much more complex in real operational environments.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                Work moves between people, teams, applications, documents and
                conversations. Employees may repeat tasks, manually transfer
                information, wait for approvals or use workarounds that are
                not visible in formal process documentation.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense brings visibility to these workflows by examining
                how work actually happens and identifying the areas where
                process improvement, AI, automation and integration can create
                measurable value.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Understand the work.
                  <br />
                  Improve what matters.
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
              One discovery process.
              <br />
              <span className="text-brand-primary">
                A clearer view of the work.
              </span>
            </h2>

            <p className="mt-7 text-base sm:text-lg text-brand-primary/65 leading-relaxed max-w-7xl mx-auto">
              Process discovery connects business context, workflow analysis,
              technology understanding and operational insight to create a
              practical picture of how work actually gets done.
            </p>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/50 leading-relaxed max-w-5xl mx-auto">
              Rather than documenting processes for documentation's sake, we
              focus on understanding where effort is being spent, where work
              slows down and where better technology can make a meaningful
              difference.
            </p>

            <div className="mt-10 h-px w-20 bg-brand-secondary/50 mx-auto" />

            <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight text-brand-primary">
              Discovery becomes valuable when it leads to better decisions.
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
          

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Build a complete picture
                <br />
                <span className="text-[#a095ff]">
                  of how work gets done.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-white/55 leading-relaxed">
                From workflow mapping to opportunity analysis, AgenticSense
                helps organizations understand the operational and technical
                foundations behind important business processes.
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
              Process discovery is not just documentation.
              <br />
              <span className="text-white/50">
                It is the foundation for better transformation decisions.
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
              From business process
              <br />
              to transformation insight.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Our discovery model keeps the analysis grounded in a real
              business process, the people involved, the technology supporting
              it and the outcomes the organization wants to improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              [
                "Understand",
                "Assess the business objective, current workflow, teams involved, information sources and operational constraints.",
              ],
              [
                "Map",
                "Define the activities, decisions, handoffs, systems and information flows that make up the process.",
              ],
              [
                "Analyze",
                "Identify bottlenecks, manual effort, rework, delays, dependencies and opportunities for improvement.",
              ],
              [
                "Prioritize",
                "Evaluate opportunities based on business impact, feasibility and potential for AI, automation or integration.",
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
              Start with how work happens today.
              <span className="block sm:inline text-brand-primary font-normal mt-1 sm:mt-0">
                {" "}
                Then define where it can become better tomorrow.
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
                Understand the work.
                <br />
                <span className="text-brand-primary">
                  Not just the workflow.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                The highest-value process insights often come from looking
                beyond the formal workflow and understanding the people,
                systems and information that support it.
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
              Better process visibility.
              <br />
              <span className="text-brand-secondary">
                Better transformation decisions.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense connects process insight with practical
              opportunities for AI, automation, integration and operational
              improvement.
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
                Move from process complexity
                <br />
                <span className="text-brand-primary">
                  to actionable insight.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                A focused discovery lifecycle helps organizations understand
                the current process, uncover friction and establish a clear
                direction for improvement.
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
              Discover with purpose. Improve with clarity.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Every discovery should produce useful insight that supports
              better decisions and a practical path toward transformation.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          GOVERNANCE / RESPONSIBLE DISCOVERY
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel light>
                Responsible Discovery
              </SectionLabel>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
                Better insight needs
                <br />
                <span className="text-[#a095ff]">
                  the right context.
                </span>
              </h2>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                Process discovery should create useful visibility without
                losing sight of security, business context, employee
                responsibilities and operational realities.
              </p>

              <div className="mt-8 rounded-xl bg-white/[0.05] border border-white/10 p-7 sm:p-8">
                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Understand carefully.
                  <br />
                  Analyze objectively.
                  <br />
                  <span className="text-[#a095ff]">
                    Improve intelligently.
                  </span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {[
                  [
                    "Business Context",
                    "Understand why the process exists, what outcome it supports and what constraints influence how work is performed.",
                  ],
                  [
                    "Data & Information",
                    "Identify the information required by the workflow while considering how data moves between people and systems.",
                  ],
                  [
                    "Human Responsibilities",
                    "Recognize where people provide judgment, approval, expertise or oversight rather than treating every activity as automation.",
                  ],
                  [
                    "Operational Reality",
                    "Account for exceptions, workarounds and real-world dependencies that may not appear in formal process documentation.",
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
                Good discovery creates visibility
                <span className="text-white/40">
                  {" "}
                  without losing sight of the people and business behind the
                  process.
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
                Turn process discovery into
                <br />
                <span className="text-brand-secondary">
                  measurable opportunity.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                Process discovery creates value when organizations can use
                what they learn to improve operations, prioritize technology
                investments and build better workflows.
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

            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                  Start a Conversation
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-brand-primary tracking-tight leading-tight">
                  Ready to understand where your processes can improve?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us about a workflow that feels slow, manual or
                  difficult to manage. We can help understand the current
                  process, identify friction and uncover opportunities for AI,
                  automation and workflow improvement.
                </p>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                  >
                    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                    <span>
                      Discuss Your Process
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