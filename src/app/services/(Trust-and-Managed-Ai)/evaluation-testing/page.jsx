"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  FlaskConical,
  CircleCheck,
  ChartNoAxesCombined,
  SearchCheck,
  Gauge,
  AlertTriangle,
} from "lucide-react";

/* ============================================================================
   EVALUATION & TESTING
   AgenticSense Services Page

   Typography aligned with the existing AgenticSense service system:
   - Same font sizing hierarchy
   - Same font weights
   - Same line heights
   - Same tracking
   - Same editorial typography rhythm
=============================================

=============================== */

const hero = {
  eyebrow: "Evaluation & Testing · Services",
  headline: "Know How Your AI Performs Before It Matters",
  sub:
    "AgenticSense helps organizations evaluate AI systems against meaningful business, technical and operational standards so teams can understand reliability, identify failure conditions and deploy intelligent systems with greater confidence.",
};

const evaluationPrinciples = [
  {
    title: "Test Against Real Work",
    text:
      "Evaluate AI systems using realistic tasks, workflows and business scenarios rather than relying only on generic model benchmarks.",
    icon: FlaskConical,
  },
  {
    title: "Measure What Matters",
    text:
      "Define evaluation criteria around accuracy, consistency, relevance, safety, latency and business outcomes that reflect the system's actual purpose.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Find Failure Before Production",
    text:
      "Expose weak behavior, edge cases and unexpected outcomes before AI systems become deeply embedded in operational workflows.",
    icon: SearchCheck,
  },
];

const evaluationAreas = [
  {
    title: "Evaluation Frameworks",
    text:
      "Define repeatable evaluation frameworks that connect AI behavior to technical requirements, business objectives and operational expectations.",
  },
  {
    title: "Accuracy & Quality Testing",
    text:
      "Measure how consistently AI produces useful, relevant and correct outputs across representative enterprise scenarios.",
  },
  {
    title: "Agent & Workflow Testing",
    text:
      "Evaluate how agents reason, use tools, follow workflows and complete multi-step tasks across real enterprise environments.",
  },
  {
    title: "Safety & Failure Testing",
    text:
      "Probe systems for unsafe behavior, unexpected responses, boundary conditions and failure modes that could create operational risk.",
  },
  {
    title: "Performance Evaluation",
    text:
      "Assess response time, consistency, throughput and operational behavior under different workloads and usage conditions.",
  },
  {
    title: "Continuous Evaluation",
    text:
      "Keep testing active after deployment so organizations can detect performance changes as models, prompts, data and workflows evolve.",
  },
];

const lifecycle = [
  {
    title: "Define",
    text:
      "Establish what good performance means by identifying use cases, evaluation criteria, expected outcomes and unacceptable behavior.",
  },
  {
    title: "Test",
    text:
      "Run representative scenarios, edge cases and adversarial conditions to understand how the system behaves across different situations.",
  },
  {
    title: "Improve",
    text:
      "Use evaluation results to refine prompts, workflows, models, controls and system architecture before repeating the evaluation cycle.",
  },
];

const questions = [
  {
    q: "What is AI evaluation and testing?",
    a:
      "AI evaluation and testing is the process of measuring how an AI system behaves against defined quality, reliability, safety and business requirements. It helps organizations understand whether a system is ready for production and where additional controls or improvements are needed.",
  },
  {
    q: "Why are traditional AI benchmarks not enough?",
    a:
      "General benchmarks can provide useful signals, but enterprise systems operate inside specific workflows and business contexts. Evaluation should therefore include realistic tasks, organization-specific requirements and the consequences of incorrect or inconsistent behavior.",
  },
  {
    q: "Can AI agents be evaluated differently from standard models?",
    a:
      "Yes. Agents can make decisions, call tools, retrieve information and execute multi-step workflows. Their evaluation therefore needs to consider not only the quality of individual responses but also tool usage, workflow completion, decision paths and action outcomes.",
  },
  {
    q: "Should AI evaluation continue after deployment?",
    a:
      "Yes. AI systems can change as models, prompts, data sources, integrations and workflows evolve. Continuous evaluation helps organizations detect regressions and maintain expected levels of quality and reliability over time.",
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

export default function EvaluationTestingPage() {
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
                Know How Your AI Performs
                <br />
                <span className="text-[#a095ff]">
                  Before It Matters.
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
                  Evaluate Your AI Systems
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
                    <ChartNoAxesCombined className="h-7 w-7" />
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-7 text-2xl font-bold leading-tight text-white">
                    AI should be measured, not assumed.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    Evaluation makes AI behavior visible by testing
                    systems against real expectations, real workflows
                    and real failure conditions.
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
                AI can look
                <br />
                impressive.
                <br />
                <span className="text-brand-secondary">
                  Production is different.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p className="text-base font-semibold leading-relaxed text-brand-primary sm:text-lg">
                Enterprise AI needs to perform consistently inside
                real workflows, under real constraints and against
                meaningful business expectations.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                A system can produce impressive demonstrations while
                still failing on edge cases, misunderstanding context,
                using tools incorrectly or producing inconsistent
                outcomes once it is connected to real enterprise data.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                AgenticSense helps organizations establish evaluation
                practices that reveal how AI actually behaves before
                and after deployment, turning testing into an ongoing
                engineering discipline.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">

                <p className="text-xl font-bold leading-relaxed text-brand-primary sm:text-2xl">
                  Confidence should come from evidence.
                  <span className="text-brand-secondary">
                    {" "}
                    Not assumptions.
                  </span>
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          EVALUATION PRINCIPLES
      ====================================================================== */}

      <section
        id="framework"
        className="border-b border-brand-primary/10 bg-white py-16 sm:py-24"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">

              

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Test for
                <br />
                the behavior
                <br />
                <span className="text-brand-secondary">
                  that matters.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Effective evaluation connects technical testing
                with the actual responsibilities and outcomes of
                an AI system.
              </p>

            </div>

            <div className="lg:col-span-8">

              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">

                {evaluationPrinciples.map((item) => {
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
              A Different Approach to Testing
            </SectionLabel>

            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.25rem]">
              Don't just test the model.
              <br />
              <span className="text-[#a095ff]">
                Test the system.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
              Enterprise AI is more than a model. It is prompts, data,
              tools, retrieval, workflows, permissions and human
              interactions working together. AgenticSense evaluates
              these connected behaviors so organizations can understand
              how the complete system performs.
            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">

            <div>

              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Realistic
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Test representative tasks and scenarios instead of
                relying only on generic benchmarks.
              </p>

            </div>

            <div>

              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Repeatable
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Establish consistent evaluation methods that can be
                repeated as systems change.
              </p>

            </div>

            <div>

              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Actionable
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Turn evaluation results into improvements across
                models, workflows and controls.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          EVALUATION AREAS
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-slate-50/60 py-16 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">

            

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Measure AI across
                <br />
                the dimensions
                <br />
                <span className="text-brand-secondary">
                  that affect operations.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                A meaningful evaluation program looks beyond response
                quality and considers the complete behavior of the
                AI-enabled workflow.
              </p>

              <div className="mt-8 h-px w-16 bg-brand-secondary/60" />

              <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-brand-primary">
                The objective is simple:
                <span className="text-brand-secondary">
                  {" "}
                  know where AI performs well and where it needs control.
                </span>
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">

                {evaluationAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group py-7 ${
                      index < evaluationAreas.length - 2
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
          EVALUATION LIFECYCLE
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-white py-16 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

           

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Evaluation should
              <br />
              be part of the
              <span className="text-brand-secondary">
                {" "}
                AI lifecycle.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-primary/65 sm:text-base">
              Testing should not happen only before launch. Continuous
              evaluation helps teams understand whether AI continues
              to meet expectations as models, data, prompts and
              workflows change.
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
              The best evaluation systems turn failures into learning,
              <span className="text-brand-secondary">
                {" "}
                not surprises.
              </span>
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================================
          TESTING ARCHITECTURE
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
                Testing Architecture
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Turn AI behavior
                <br />
                into measurable
                <br />
                <span className="text-[#a095ff]">
                  evidence.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                Evaluation becomes more useful when tests connect
                directly to the inputs, outputs, decisions and
                outcomes that matter to the business.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Representative test scenarios
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Measurable evaluation criteria
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Actionable failure analysis
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
                      <Gauge className="h-10 w-10" />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">

                      <p className="text-xs font-bold text-white">
                        Inputs
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        What enters the system
                      </p>

                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">

                      <p className="text-xs font-bold text-white">
                        Outputs
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        What AI produces
                      </p>

                    </div>

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">

                      <p className="text-xs font-bold text-white">
                        Behavior
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        How AI responds
                      </p>

                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">

                      <p className="text-xs font-bold text-white">
                        Outcome
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        What actually happened
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
                  measurable confidence.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Strong evaluation practices give technical and
                business teams better evidence for deciding where
                AI is ready, where it needs improvement and where
                additional controls are required.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 md:grid-cols-3">

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Better Reliability
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Identify inconsistent behavior and improve AI
                performance against meaningful enterprise scenarios.
              </p>

            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Earlier Risk Detection
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Surface edge cases, failure conditions and unsafe
                behaviors before they become operational problems.
              </p>

            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Faster Improvement
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Use measurable results to guide changes across
                models, prompts, workflows and system controls.
              </p>

            </div>

          </div>

          <div className="mt-10 flex flex-col gap-6 border-b border-brand-primary/10 pb-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-lg font-bold leading-relaxed tracking-tight sm:text-xl">
              The goal is not to test AI for the sake of testing.
              <span className="text-brand-secondary">
                {" "}
                It is to know when AI is ready to be trusted.
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

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

            {/* FAQ */}

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

            {/* CTA */}

            <div className="lg:col-span-5">

              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-secondary/5 blur-3xl" />

                <div className="relative z-10">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                    <SearchCheck className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-[#1a3556] sm:text-2xl">
                    Ready to test your AI before it reaches production?
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Tell us what your AI system is expected to do,
                    which workflows it supports and where reliability
                    matters most. We will help define an evaluation
                    approach built around your real requirements.
                  </p>

                  <div className="mt-6 space-y-3">

                    <Link
                      href="/contact"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-r from-[#171c50] via-[#2a308c] to-[#5956f6] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95"
                    >
                      Discuss Your Evaluation Strategy
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 px-6 py-3.5 text-sm font-semibold text-[#1a3556] transition-all hover:bg-slate-100"
                    >
                      View All Services
                    </Link>

                  </div>

                  <div className="mt-7 grid grid-cols-1 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Model evaluation
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Agent testing
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Failure analysis
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Continuous evaluation
                    </div>

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