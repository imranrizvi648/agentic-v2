"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  LockKeyhole,
  Eye,
  Scale,
  CircleCheck,
} from "lucide-react";

/* ============================================================================
   RESPONSIBLE AI GOVERNANCE
   AgenticSense Services Page

   Typography aligned with Process Discovery:
   - Same font sizing hierarchy
   - Same font weights
   - Same line heights
   - Same tracking
   - Same editorial typography rhythm

   Existing Responsible AI Governance layout/design preserved.
============================================================================ */

const hero = {
  eyebrow: "Responsible AI Governance · Services",
  headline: "Build AI Systems People Can Trust",
  sub:
    "AgenticSense helps organizations establish practical AI governance that protects information, manages risk and keeps intelligent systems accountable as they move from experimentation into real operations.",
};

const governancePrinciples = [
  {
    title: "Security by Design",
    text:
      "Define how AI systems access enterprise information, applications and sensitive operational environments from the beginning.",
    icon: LockKeyhole,
  },
  {
    title: "Human Accountability",
    text:
      "Keep meaningful human oversight where decisions require judgment, authorization or contextual understanding.",
    icon: Eye,
  },
  {
    title: "Measured Reliability",
    text:
      "Evaluate AI systems against clear standards for quality, accuracy, consistency and business performance.",
    icon: Scale,
  },
];

const governanceAreas = [
  {
    title: "AI Risk & Policy",
    text:
      "Create practical governance policies that define acceptable AI usage, responsibilities, risk levels and approval requirements.",
  },
  {
    title: "Access & Data Controls",
    text:
      "Control what AI systems can access, what information they can retrieve and which enterprise actions they are authorized to perform.",
  },
  {
    title: "Evaluation & Testing",
    text:
      "Establish repeatable evaluation processes to understand model behavior, workflow quality, reliability and failure conditions.",
  },
  {
    title: "Human Oversight",
    text:
      "Design review and approval points into workflows where human judgment, accountability or escalation is required.",
  },
  {
    title: "Monitoring & Auditability",
    text:
      "Track system behavior, decisions, exceptions and operational outcomes so organizations can understand how AI is performing.",
  },
  {
    title: "Continuous Governance",
    text:
      "Keep governance aligned as models, workflows, data sources, users and business requirements evolve over time.",
  },
];

const lifecycle = [
  {
    title: "Before deployment",
    text:
      "Understand the intended use, business impact, information requirements and potential risks before an AI capability enters production.",
  },
  {
    title: "During operation",
    text:
      "Monitor behavior, access, workflow outcomes and human intervention so issues can be identified before they become operational problems.",
  },
  {
    title: "As systems evolve",
    text:
      "Review changing models, data, integrations and workflows to ensure governance remains effective as AI adoption expands.",
  },
];

const questions = [
  {
    q: "What is responsible AI governance?",
    a:
      "Responsible AI governance is the framework of policies, controls, evaluation processes and human oversight that helps organizations use AI safely, reliably and accountably. It connects technical controls with business responsibilities and operational requirements.",
  },
  {
    q: "Why is AI governance important for enterprises?",
    a:
      "Enterprise AI can interact with sensitive information, business processes and operational systems. Governance helps organizations control access, evaluate reliability, manage risk and establish accountability before AI becomes deeply embedded in day-to-day operations.",
  },
  {
    q: "Does governance slow down AI adoption?",
    a:
      "Effective governance should do the opposite. Clear policies, approval paths, evaluation methods and technical controls reduce uncertainty and make it easier to move successful AI initiatives into production with confidence.",
  },
  {
    q: "Can governance be added to existing AI systems?",
    a:
      "Yes. Existing AI solutions can be assessed and strengthened with appropriate access controls, evaluation, monitoring, human oversight, auditability and operational policies.",
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
      <div className="absolute inset-0 bg-[#15133d]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(8,7,32,0.9) 0%, rgba(21,19,61,0.45) 48%, rgba(55,49,132,0.34) 100%)",
        }}
      />

      <div
        className="absolute -right-32 -top-32 h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(112,105,255,0.27) 0%, rgba(112,105,255,0.08) 38%, transparent 70%)",
        }}
      />

      <div
        className="absolute left-[42%] top-[30%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(86,79,218,0.13) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#111032]/95 via-[#171540]/65 to-transparent" />

      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#15133d] to-transparent" />

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#7069ff]/50 to-transparent" />
    </div>
  );
}

/* ============================================================================
   SECTION LABEL
============================================================================ */

function SectionLabel({ children, light = false }) {
  return (
    <div className="mb-4 flex items-center gap-3">
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

function Question({ item, index, open, setOpen }) {
  const isOpen = open === index;

  return (
    <div className="border-b border-brand-primary/10">
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : index)}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span className="text-sm font-bold leading-snug text-brand-primary">
          {item.q}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs transition-all duration-300 ${
            isOpen
              ? "rotate-45 bg-brand-primary text-white"
              : "bg-slate-100 text-brand-primary/60"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] pb-5"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-sm leading-relaxed text-brand-primary/65">
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

export default function ResponsibleAIGovernancePage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <main className="bg-white font-sans text-brand-primary selection:bg-brand-secondary/20">

      {/* ======================================================================
          HERO
      ====================================================================== */}

      <section className="relative flex min-h-[62vh] w-full items-center overflow-hidden md:min-h-[78vh]">
        <HeroBackground />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">

            <div className="lg:col-span-8">
            

              <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Build AI Systems
                <br />
                <span className="text-[#a095ff]">
                  People Can Trust.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                {hero.sub}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-secondary/20 transition-all hover:opacity-90 sm:px-6"
                >
                  Build Your AI Governance

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#framework"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/15 sm:px-6"
                >
                  Explore the Framework
                </a>
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
              <div className="relative ml-auto max-w-[330px]">
                <div className="absolute -inset-8 rounded-full bg-[#625eff]/10 blur-3xl" />

                <div className="relative border border-white/10 bg-white/[0.045] p-8 backdrop-blur-sm">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#a095ff]/30 bg-[#a095ff]/10 text-[#a095ff]">
                    <ShieldCheck className="h-7 w-7" />
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-7 text-2xl font-bold leading-tight text-white">
                    Trust should be engineered into AI.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    Governance becomes stronger when security,
                    accountability and evaluation are part of the
                    architecture from the beginning.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-[#a095ff]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a095ff]" />
                    Designed for enterprise AI
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          INTRO
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-slate-50/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">
              

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                AI creates new
                <br />
                possibilities.
                <br />
                <span className="text-brand-secondary">
                  It also creates new responsibility.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base font-semibold leading-relaxed text-brand-primary sm:text-lg">
                Enterprise AI cannot be treated as another software
                feature when it can access information, influence
                decisions and execute business workflows.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                As organizations introduce AI into finance, customer
                operations, knowledge work and enterprise processes,
                questions around access, reliability, accountability and
                oversight become part of the technology architecture.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                AgenticSense helps organizations answer those questions
                before they become operational problems. We combine
                governance strategy with practical technical controls,
                evaluation and workflow design.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl font-bold leading-relaxed text-brand-primary sm:text-2xl">
                  Responsible AI is not a final checkpoint.
                  <span className="text-brand-secondary">
                    {" "}
                    It is part of the system.
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          PRINCIPLES
      ====================================================================== */}

      <section
        id="framework"
        className="border-b border-brand-primary/10 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">
              

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Trust is built
                <br />
                through
                <span className="text-brand-secondary">
                  {" "}
                  deliberate design.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Strong governance connects technical safeguards with
                the people and processes responsible for using AI.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">

                {governancePrinciples.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group grid grid-cols-1 gap-6 py-8 sm:grid-cols-[72px_1fr] sm:gap-8"
                    >
                      <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-brand-primary sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          DARK STATEMENT
      ====================================================================== */}

      <section className="relative overflow-hidden bg-[#12103c] py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#625eff]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#8b83ff]/5 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl">
            <SectionLabel light>
              A Different Approach to Governance
            </SectionLabel>

            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.25rem]">
              Governance should create
              <br />
              <span className="text-[#a095ff]">
                confidence, not complexity.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
              AI governance becomes difficult when policies exist
              separately from the systems they are supposed to control.
              AgenticSense brings governance into architecture,
              workflows and operations so controls become part of how
              AI actually works.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Secure
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Protect information and control what AI systems can
                access and execute.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Explainable
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Make AI behavior easier to evaluate, understand and
                review.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Accountable
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Establish clear human responsibility around important
                AI-enabled decisions and actions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          GOVERNANCE AREAS
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-slate-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">
             

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Governance that
                <br />
                connects policy
                <br />
                <span className="text-brand-secondary">
                  with execution.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Responsible AI requires more than documentation. It
                needs practical mechanisms that work inside real
                enterprise environments.
              </p>

              <div className="mt-8 h-px w-16 bg-brand-secondary/60" />

              <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-brand-primary">
                The objective is simple:
                <span className="text-brand-secondary">
                  {" "}
                  make responsible behavior part of normal AI operation.
                </span>
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">

                {governanceAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group py-7 ${
                      index < governanceAreas.length - 2
                        ? "border-b border-brand-primary/10"
                        : ""
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-7 bg-brand-secondary transition-all duration-300 group-hover:w-12" />

                      <CircleCheck className="h-4 w-4 text-brand-secondary/70" />
                    </div>

                    <h3 className="text-base font-bold tracking-tight text-brand-primary sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-brand-primary/60">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          LIFECYCLE
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
         

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Governance follows
              <br />
              the life of the
              <span className="text-brand-secondary">
                {" "}
                AI system.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-primary/65 sm:text-base">
              Responsible AI cannot stop when a solution goes live.
              Governance must continue as systems operate, change and
              become more deeply integrated into business workflows.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 lg:grid-cols-3">

            {lifecycle.map((item, index) => (
              <div
                key={item.title}
                className={`relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 ${
                  index !== lifecycle.length - 1
                    ? "border-b border-brand-primary/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="h-px w-10 bg-brand-secondary" />

                  <ArrowUpRight className="h-4 w-4 text-brand-primary/25" />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-brand-primary sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10 border-l-2 border-brand-secondary/50 pl-5">
            <p className="max-w-3xl text-xl font-bold leading-relaxed text-brand-primary sm:text-2xl">
              Responsible AI is a continuous operating discipline,
              <span className="text-brand-secondary">
                {" "}
                not a one-time compliance exercise.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ======================================================================
          CONTROL ARCHITECTURE
      ====================================================================== */}

      <section className="relative overflow-hidden bg-[#12103c] py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#625eff]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">
              <SectionLabel light>
                Control Architecture
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Put the right
                <br />
                controls in the
                <br />
                <span className="text-[#a095ff]">
                  right place.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                Governance becomes practical when controls are connected
                directly to the way an AI workflow operates.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Business-aligned governance
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Technical enforcement
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Continuous operational oversight
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative min-h-[390px] border border-white/10 bg-white/[0.035] p-7 sm:p-10">

                <div className="absolute left-8 top-8 h-2 w-2 bg-[#a095ff]" />
                <div className="absolute right-8 top-8 h-2 w-2 bg-white/20" />
                <div className="absolute bottom-8 left-8 h-2 w-2 bg-white/20" />
                <div className="absolute bottom-8 right-8 h-2 w-2 bg-[#a095ff]" />

                <div className="flex h-full min-h-[330px] items-center justify-center">
                  <div className="relative w-full max-w-lg">

                    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a095ff]/15" />

                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a095ff]/20" />

                    <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#a095ff]/30 bg-[#625eff]/15 text-[#a095ff]">
                      <ShieldCheck className="h-10 w-10" />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Access
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        Who can use AI
                      </p>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Evaluation
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        How AI performs
                      </p>
                    </div>

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Oversight
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        Where humans review
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Monitoring
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        What happens after launch
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          OUTCOMES
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-7">
             

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Move from AI
                <br />
                experimentation to
                <br />
                <span className="text-brand-secondary">
                  trusted adoption.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Good governance gives leadership and operational teams
                greater confidence to expand AI without losing visibility,
                control or accountability.
              </p>
            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 md:grid-cols-3">

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Greater Confidence
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Give leadership clearer visibility into how AI is being
                used and where responsibility sits.
              </p>
            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Safer Scale
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Expand successful AI workflows while maintaining
                appropriate technical and operational controls.
              </p>
            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Clear Accountability
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Establish clear responsibilities for AI systems,
                decisions, approvals and operational outcomes.
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-col gap-6 border-b border-brand-primary/10 pb-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-lg font-bold leading-relaxed tracking-tight sm:text-xl">
              The goal is not to prevent AI from moving fast.
              <span className="text-brand-secondary">
                {" "}
                It is to make responsible progress possible.
              </span>
            </p>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-secondary"
            >
              Talk to our team

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* ======================================================================
          FAQ + CTA
      ====================================================================== */}

      <section className="bg-slate-50/60 py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
      
      {/* Left Column: FAQ Section */}
      <div className="lg:col-span-7">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a3556] sm:text-4xl">
          Common questions
        </h2>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <Question
              key={item.q}
              item={item}
              index={index}
              open={openQuestion}
              setOpen={setOpenQuestion}
            />
          ))}
        </div>
      </div>

      {/* Right Column: CTA Card */}
      <div className="lg:col-span-5">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold leading-snug tracking-tight text-[#1a3556] sm:text-2xl">
              Ready to put governed agents on your revenue workflows?
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Tell us how your team researches accounts, updates CRM, qualifies opportunities and prepares proposals. We will map where agents can reduce friction while keeping relationship owners in control of outreach and commercial decisions.
            </p>

            <div className="mt-6 space-y-3">
              {/* Primary Gradient / Solid Button */}
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-r from-[#171c50] via-[#2a308c] to-[#5956f6] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95"
              >
                Discuss Your Workflow
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary Outline/Light Button */}
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 px-6 py-3.5 text-sm font-semibold text-[#1a3556] transition-all hover:bg-slate-100"
              >
                View All Services
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