"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  UsersRound,
  UserCheck,
  Eye,
  GitBranch,
  ShieldCheck,
  CircleCheck,
  MessageSquareText,
} from "lucide-react";

/* ============================================================================
   HUMAN-IN-THE-LOOP
   AgenticSense Services Page

   Typography aligned with Responsible AI Governance / Process Discovery:
   - Same font sizing hierarchy
   - Same font weights
   - Same line heights
   - Same tracking
   - Same editorial typography rhythm
============================================================================ */

const hero = {
  eyebrow: "Human-in-the-Loop · Services",
  headline: "Keep People in Control of AI",
  sub:
    "AgenticSense designs AI workflows where people remain involved at the moments that require judgment, approval, context or accountability — without turning automation into a manual process.",
};

const principles = [
  {
    title: "Human Judgment",
    text:
      "Keep people involved when decisions require context, interpretation or professional judgment that AI should not make independently.",
    icon: UserCheck,
  },
  {
    title: "Meaningful Oversight",
    text:
      "Create clear intervention points where people can review, approve, correct or redirect AI-generated work before important actions occur.",
    icon: Eye,
  },
  {
    title: "Controlled Autonomy",
    text:
      "Give agents room to operate independently while defining clear boundaries for when human involvement becomes necessary.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  {
    title: "Approval Workflows",
    text:
      "Introduce human approval steps before sensitive decisions, external communications or high-impact business actions are executed.",
  },
  {
    title: "Exception Handling",
    text:
      "Route unusual, ambiguous or low-confidence cases to the right person instead of forcing AI to resolve situations outside its operating boundaries.",
  },
  {
    title: "Confidence-Based Escalation",
    text:
      "Use confidence signals, business rules and workflow conditions to determine when an agent should continue or request human review.",
  },
  {
    title: "Human Review Interfaces",
    text:
      "Design focused review experiences that give people the context, evidence and recommendations they need to make decisions quickly.",
  },
  {
    title: "Agent Handoffs",
    text:
      "Move work between AI agents and human operators without losing context, conversation history, decisions or workflow state.",
  },
  {
    title: "Correction & Feedback",
    text:
      "Capture human corrections and decisions so teams can improve workflows, evaluation criteria and future agent behavior.",
  },
];

const workflowStages = [
  {
    title: "AI handles the routine",
    text:
      "Agents process repetitive work, gather information, interpret inputs and prepare recommendations within defined operating boundaries.",
  },
  {
    title: "People handle what matters",
    text:
      "When judgment, authorization or contextual understanding is required, the workflow brings the right person into the process.",
  },
  {
    title: "AI continues with context",
    text:
      "Once a decision is made, the agent can continue the workflow using the human decision and relevant context rather than restarting the process.",
  },
];

const outcomes = [
  {
    title: "Faster Decisions",
    text:
      "Reduce the amount of routine work people handle while keeping important decisions with the right human owner.",
  },
  {
    title: "Safer Automation",
    text:
      "Prevent agents from making uncontrolled decisions by establishing explicit boundaries for autonomy and escalation.",
  },
  {
    title: "Better Adoption",
    text:
      "Give teams confidence that AI supports their work without removing the human accountability built into critical processes.",
  },
];

const questions = [
  {
    q: "What is human-in-the-loop AI?",
    a:
      "Human-in-the-loop AI is an approach where people remain involved in selected parts of an AI workflow. AI can automate routine work while humans review, approve, correct or make decisions when judgment and accountability are required.",
  },
  {
    q: "Does human oversight reduce automation?",
    a:
      "Not necessarily. Well-designed human-in-the-loop workflows automate the majority of routine work and bring people into the process only when their involvement adds meaningful value.",
  },
  {
    q: "When should an AI agent involve a human?",
    a:
      "Human intervention can be triggered by factors such as low confidence, sensitive decisions, policy requirements, unusual cases, financial impact, customer sensitivity or actions that require explicit authorization.",
  },
  {
    q: "Can human-in-the-loop work with autonomous agents?",
    a:
      "Yes. Human oversight can be designed as part of an agent's operating boundaries. Agents can act autonomously within defined permissions and escalate to people when a workflow reaches a condition that requires intervention.",
  },
];

/* ============================================================================
   HERO BACKGROUND
============================================================================ */

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
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

export default function HumanInTheLoopPage() {
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

              <SectionLabel light>
                {hero.eyebrow}
              </SectionLabel>

              <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Keep People
                <br />
                <span className="text-[#a095ff]">
                  in Control of AI.
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
                  Design Human Oversight
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
                    <UsersRound className="h-7 w-7" />
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-7 text-2xl font-bold leading-tight text-white">
                    Autonomy should know when to ask for help.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    The strongest AI workflows combine machine speed
                    with human judgment at the moments that matter.
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

              <SectionLabel>
                Human Oversight
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                AI can move
                <br />
                work forward.
                <br />
                <span className="text-brand-secondary">
                  People keep it accountable.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p className="text-base font-semibold leading-relaxed text-brand-primary sm:text-lg">
                Not every business decision should be fully automated.
                The challenge is knowing where human involvement adds
                value and designing the workflow around it.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                AgenticSense helps organizations create AI workflows
                that distinguish between routine execution and moments
                that require human judgment, authorization or contextual
                understanding.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Instead of forcing people to supervise every step,
                we design focused intervention points where humans
                can review, approve, correct or redirect AI-generated
                work.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl font-bold leading-relaxed text-brand-primary sm:text-2xl">
                  The goal is not to keep humans in every step.
                  <span className="text-brand-secondary">
                    {" "}
                    It is to keep them in the right steps.
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

              <SectionLabel>
                Design Principles
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Human involvement
                <br />
                should be
                <br />
                <span className="text-brand-secondary">
                  intentional.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Human-in-the-loop systems work best when intervention
                is designed around business risk, decision ownership
                and the actual value of human judgment.
              </p>

            </div>

            <div className="lg:col-span-8">

              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">

                {principles.map((item) => {
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
              A Different Approach to Automation
            </SectionLabel>

            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.25rem]">
              Automation should create
              <br />
              <span className="text-[#a095ff]">
                leverage, not remove judgment.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
              Fully automated workflows are not always the right answer.
              Some processes contain decisions where context, customer
              relationships, financial impact or professional judgment
              matter.
            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Automate
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Let agents handle repetitive work, information gathering
                and routine workflow execution.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Escalate
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Bring people into the process when predefined conditions
                require judgment or authorization.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Continue
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Allow AI to continue the workflow after a human decision
                without losing context or momentum.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          CAPABILITIES
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-slate-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">

              <SectionLabel>
                Human-in-the-Loop Capabilities
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Connect human
                <br />
                judgment
                <br />
                <span className="text-brand-secondary">
                  with AI execution.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Human oversight becomes useful when it is connected
                directly to workflow logic, permissions and operational
                context.
              </p>

              <div className="mt-8 h-px w-16 bg-brand-secondary/60" />

              <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-brand-primary">
                The objective is simple:
                <span className="text-brand-secondary">
                  {" "}
                  automate more while keeping meaningful decisions human.
                </span>
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">

                {capabilities.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group py-7 ${
                      index < capabilities.length - 2
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
          WORKFLOW
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <SectionLabel>
              Operating Model
            </SectionLabel>

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              A workflow where
              <br />
              AI and people
              <br />
              <span className="text-brand-secondary">
                work together.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-primary/65 sm:text-base">
              Human-in-the-loop design should feel like a natural extension
              of the workflow rather than a separate approval system that
              constantly interrupts automation.
            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 lg:grid-cols-3">

            {workflowStages.map((item, index) => (
              <div
                key={item.title}
                className={`relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 ${
                  index !== workflowStages.length - 1
                    ? "border-b border-brand-primary/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >

                <div className="mb-6 flex items-center justify-between">

                  <span className="text-[11px] font-bold tracking-[0.2em] text-brand-secondary">
                    0{index + 1}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-brand-primary/25" />

                </div>

                <div className="mb-6 h-px w-10 bg-brand-secondary" />

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
              The best human-in-the-loop systems make intervention
              <span className="text-brand-secondary">
                {" "}
                precise, contextual and purposeful.
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
                Decision Architecture
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Put people
                <br />
                where judgment
                <br />
                <span className="text-[#a095ff]">
                  creates value.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                Human involvement becomes scalable when the workflow
                knows what should be automated, what should be reviewed
                and what requires explicit approval.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Automated routine work
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Context-aware escalation
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Human authorization
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Context-preserving handoff
              </div>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[390px] border border-white/10 bg-white/[0.035] p-7 sm:p-10">

                <div className="absolute left-8 top-8 h-2 w-2 bg-[#a095ff]" />
                <div className="absolute right-8 top-8 h-2 w-2 bg-white/20" />
                <div className="absolute bottom-8 left-8 h-2 w-2 bg-white/20" />
                <div className="absolute bottom-8 right-8 h-2 w-2 bg-[#a095ff]" />

                <div className="flex min-h-[330px] items-center justify-center">

                  <div className="relative w-full max-w-lg">

                    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a095ff]/15" />

                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a095ff]/20" />

                    <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#a095ff]/30 bg-[#625eff]/15 text-[#a095ff]">
                      <UsersRound className="h-10 w-10" />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        AI Agent
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        Handles routine work
                      </p>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Human
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        Makes key decisions
                      </p>
                    </div>

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Escalation
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        When intervention is needed
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Continuation
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        AI resumes with context
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

              <SectionLabel>
                Business Outcomes
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Make AI more
                <br />
                autonomous
                <br />
                <span className="text-brand-secondary">
                  without losing control.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Human-in-the-loop design gives organizations a practical
                path to increase automation while preserving the judgment,
                ownership and accountability that critical workflows require.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 md:grid-cols-3">

            {outcomes.map((item, index) => (
              <div
                key={item.title}
                className={`px-6 py-8 sm:px-8 sm:py-10 lg:px-10 ${
                  index !== 0
                    ? "border-t border-brand-primary/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >

                <div className="mb-6 flex items-center justify-between">
                  <span className="h-px w-10 bg-brand-secondary" />

                  <MessageSquareText className="h-4 w-4 text-brand-primary/25" />
                </div>

                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  {item.title}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-10 flex flex-col gap-6 border-b border-brand-primary/10 pb-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-lg font-bold leading-relaxed tracking-tight sm:text-xl">
              The goal is not to automate every decision.
              <span className="text-brand-secondary">
                {" "}
                It is to automate everything that should be automated.
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

              <SectionLabel>
                Common Questions
              </SectionLabel>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a3556] sm:text-4xl">
                Human-in-the-loop,
                <br />
                explained.
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

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/5 blur-3xl" />

                <div className="relative z-10">

                  <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary">
                    <UserCheck className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold leading-snug tracking-tight text-[#1a3556] sm:text-2xl">
                    Ready to design AI workflows with the right human checkpoints?
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Tell us where your teams spend time reviewing,
                    approving, correcting or making decisions today.
                    We will identify what AI can handle independently
                    and where human judgment should remain part of the workflow.
                  </p>

                  <div className="mt-6 space-y-3">

                    <Link
                      href="/contact"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-r from-[#171c50] via-[#2a308c] to-[#5956f6] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95"
                    >
                      Design Your AI Workflow
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

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