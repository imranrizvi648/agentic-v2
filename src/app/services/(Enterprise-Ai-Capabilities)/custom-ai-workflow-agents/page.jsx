"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  GitBranch,
  Layers3,
  Play,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================================
   Custom AI Workflow Agents
   AgenticSense Service Sub-page
   Same design system as Intelligent Document Processing / Knowledge Agents
============================================================================ */

const capabilities = [
  {
    title: "Workflow Understanding",
    text: "Understand how work moves across your business, including decisions, approvals, handoffs and the information needed at each stage.",
  },
  {
    title: "Task Orchestration",
    text: "Coordinate multiple steps, systems and actions so work can move forward without people manually managing every transition.",
  },
  {
    title: "Business Rules",
    text: "Combine AI reasoning with your existing business rules, policies and conditions so agents know what should happen in different situations.",
  },
  {
    title: "System Actions",
    text: "Let agents work with the systems your teams already use, from business applications and databases to internal tools and APIs.",
  },
  {
    title: "Human Approval",
    text: "Keep people involved where judgment matters. Agents can prepare work, surface decisions and request approval before sensitive actions are completed.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    text: "The agent receives a request, business event or piece of work and determines what needs to happen.",
  },
  {
    number: "02",
    title: "Plan",
    text: "It identifies the right steps, information, rules and systems required to complete the task.",
  },
  {
    number: "03",
    title: "Execute",
    text: "The agent carries out the workflow across connected systems while handling each step in context.",
  },
  {
    number: "04",
    title: "Review",
    text: "Results are checked against business rules and routed to a person whenever human judgment is required.",
  },
];

const useCases = [
  {
    title: "Finance Operations",
    text: "Automate repetitive finance workflows such as invoice handling, exception review, reconciliations and approval coordination.",
  },
  {
    title: "Customer Operations",
    text: "Help service teams manage requests by gathering information, updating systems, coordinating actions and keeping cases moving.",
  },
  {
    title: "Procurement",
    text: "Coordinate supplier requests, purchase workflows, approvals and supporting information across procurement processes.",
  },
  {
    title: "Internal Operations",
    text: "Turn repetitive internal processes into guided workflows that connect people, information and business systems.",
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
            "radial-gradient(circle at 80% 18%, rgba(98,94,255,0.27), transparent 31%), radial-gradient(circle at 12% 82%, rgba(70,65,170,0.16), transparent 35%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#12103c]/90 via-[#12103c]/55 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a194d] to-transparent" />
    </div>
  );
}

/* ============================================================================
   PAGE
============================================================================ */

export default function CustomAIWorkflowAgentsPage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ====================================================================
          HERO
      ==================================================================== */}

      <section
        aria-label="Custom AI Workflow Agents"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Build AI agents
                <span className="text-[#a095ff]">
                  {" "}
                  around the way your business works.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense builds custom AI workflow agents that understand
                your processes, make decisions, use business systems and move
                work forward — while keeping your teams in control.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Design Your Workflow
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Workflow Agents
                  <ArrowDownIcon />
                </Link>
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="hidden lg:block lg:col-span-4">
              <div className="relative ml-auto w-[300px]">

                <div className="absolute -left-10 top-16 h-28 w-28 rounded-full border border-[#a095ff]/20" />

                <div className="absolute -right-7 bottom-6 h-20 w-20 rounded-full border border-white/10" />

                <div className="relative border border-white/10 bg-white/[0.055] backdrop-blur-sm p-6">

                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                      Workflow execution
                    </span>

                    <span className="flex items-center gap-2 text-[10px] text-white/35">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a095ff]" />
                      Running
                    </span>
                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <Workflow className="h-5 w-5 text-white/60" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Business request
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Understand · classify · plan
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-brand-secondary/30 bg-brand-secondary/10">
                        <Sparkles className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Agent reasoning
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Rules · context · decisions
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15">
                        <Zap className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Workflow action
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Execute · update · route
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Agent status
                      </span>

                      <span className="text-[10px] font-bold text-[#a095ff]">
                        3 actions completed
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          INTRO
      ==================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">

        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">

            <h2 className="mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Your workflows already exist.
              <span className="text-brand-secondary">
                {" "}
                AI should learn how to run them.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The manual flow
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">

                <span>Receive</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Check</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Decide</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Act</span>

              </div>

            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Most business processes are made up of many small decisions,
                system updates, approvals and handoffs. Even when every step
                follows a clear pattern, people often have to coordinate the
                entire process manually.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Custom AI workflow agents can take on that coordination. They
                understand what needs to happen, choose the appropriate next
                step, work with connected systems and involve people when
                their judgment is needed.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          CAPABILITIES
      ==================================================================== */}

      <section
        id="capabilities"
        className="py-16 sm:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

            <div className="max-w-3xl">

              <h2 className="mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                From business processes
                <br />
                <span className="text-brand-secondary">
                  to intelligent execution.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              Custom agents combine reasoning, business rules and system
              actions to move work through the processes that matter most.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/[0.05]">
                <Workflow className="h-5 w-5 text-brand-secondary" />
              </div>

              <h3 className="mt-7 text-xl sm:text-2xl font-bold">
                Build around your process
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                Instead of forcing your business into a generic automation
                template, custom agents can be designed around your existing
                workflows, systems, rules and decision points.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Process
                <span className="h-px w-6 bg-brand-secondary/40" />
                Intelligence
                <span className="h-px w-6 bg-brand-secondary/40" />
                Action
              </div>

            </div>

            <div className="lg:col-span-7 py-10 lg:pl-16">

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">

                {capabilities.slice(0, 4).map((item) => (
                  <div key={item.title}>

                    <div className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-brand-primary/10" />
                    </div>

                    <h3 className="mt-5 text-base sm:text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      {item.text}
                    </p>

                  </div>
                ))}

                <div>

                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-brand-primary/10" />
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-bold">
                    {capabilities[4].title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    {capabilities[4].text}
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          WORKFLOW INTELLIGENCE
      ==================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                AI that can
                <br />
                <span className="text-brand-secondary">
                  actually do the work.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                A useful workflow agent needs more than the ability to
                generate text. It needs to understand the task, reason about
                what should happen next and interact with the systems where
                the work actually happens.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                {/* PROCESS */}

                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.06)]">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      Business workflow
                    </span>

                    <Workflow className="h-4 w-4 text-brand-secondary" />

                  </div>

                  <div className="mt-8 space-y-5">

                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center border border-brand-primary/10">
                        <span className="text-xs font-bold">01</span>
                      </div>

                      <div className="flex-1">
                        <div className="h-2 w-[72%] bg-brand-primary/10" />
                        <div className="mt-2 h-1.5 w-[48%] bg-brand-primary/[0.06]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center border border-brand-primary/10">
                        <span className="text-xs font-bold">02</span>
                      </div>

                      <div className="flex-1">
                        <div className="h-2 w-[58%] bg-brand-primary/10" />
                        <div className="mt-2 h-1.5 w-[38%] bg-brand-primary/[0.06]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center border border-brand-primary/10">
                        <span className="text-xs font-bold">03</span>
                      </div>

                      <div className="flex-1">
                        <div className="h-2 w-[66%] bg-brand-primary/10" />
                        <div className="mt-2 h-1.5 w-[44%] bg-brand-primary/[0.06]" />
                      </div>
                    </div>

                  </div>

                </div>

                {/* AGENT */}

                <div className="absolute right-0 top-0 w-[54%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white">

                  <div className="flex items-center gap-3">

                    <Sparkles className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Agent reasoning
                    </span>

                  </div>

                  <div className="mt-8 space-y-5">

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Current task
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Review request
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Next action
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        Route for approval
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Decision confidence
                      </p>

                      <div className="mt-2 flex items-center gap-3">

                        <div className="h-1.5 flex-1 bg-white/15">
                          <div className="h-full w-[92%] bg-white" />
                        </div>

                        <span className="text-xs font-bold">
                          High
                        </span>

                      </div>
                    </div>

                  </div>

                </div>

                {/* SYSTEM ACTION */}

                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">

                  <div className="flex items-center gap-4">

                    <Settings2 className="h-5 w-5 text-[#a095ff]" />

                    <div>
                      <p className="text-sm font-bold">
                        System action completed
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Workflow updated and next step triggered
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          HOW IT WORKS
      ==================================================================== */}

      <section
        id="how-it-works"
        className="bg-[#12103c] py-16 sm:py-24 text-white"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl">

            <h2 className="mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              A business task comes in.
              <br />
              <span className="text-[#a095ff]">
                The agent moves it forward.
              </span>
            </h2>

          </div>

          <div className="mt-16 relative">

            <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-white/10" />

            <div className="grid md:grid-cols-4 gap-10 md:gap-6">

              {workflowSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative"
                >

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-white/15 bg-[#12103c]">

                    <span className="text-xs font-bold text-[#a095ff]">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-base sm:text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

          <div className="mt-20 border-t border-white/10 pt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

            <p className="text-sm text-white/40">
              The agent handles the workflow. Your team stays in control of
              important decisions.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Intelligent execution
              <ArrowRight className="h-4 w-4" />
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          USE CASES
      ==================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <h2 className="mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Wherever work
                <span className="text-brand-secondary">
                  {" "}
                  moves across systems.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Custom workflow agents are useful when processes involve
                repetitive decisions, multiple systems, information gathering
                or frequent handoffs between teams.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
                Start focused
                <ArrowRight className="h-4 w-4" />
                Scale
              </div>

            </div>

            <div className="lg:col-span-8">

              <div className="grid sm:grid-cols-2 gap-x-12">

                {useCases.map((item, index) => (
                  <div
                    key={item.title}
                    className={`py-8 ${
                      index < 2
                        ? "border-b border-brand-primary/10"
                        : ""
                    }`}
                  >

                    <div className="flex items-start justify-end gap-5">
                      <ArrowUpRight className="h-4 w-4 text-brand-primary/20" />
                    </div>

                    <h3 className="mt-7 text-base sm:text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          BUSINESS IMPACT
      ==================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="mt-0 grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The goal isn't simply
                <span className="text-brand-secondary">
                  {" "}
                  automation.
                </span>
                <br />
                It's better execution.
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Well-designed workflow agents reduce manual coordination,
                shorten process cycles and help teams spend more time on work
                that requires human judgment.
              </p>

            </div>

          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Faster
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Workflow execution
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Smarter
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Process decisions
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Less
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Manual coordination
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          WHY AGENTICSENSE
      ==================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5">

              <h2 className="mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Don't just automate
                <br />
                <span className="text-brand-secondary">
                  individual tasks.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Connect the decisions, systems and actions that make up the
                complete workflow.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="space-y-12">

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <GitBranch className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Design around the real workflow
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      We map the actual process, including business rules,
                      exceptions, approvals and system dependencies before
                      defining what the agent should handle.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Keep people in control
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Agents can operate independently where appropriate while
                      routing important decisions, exceptions and approvals to
                      the people responsible for them.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Layers3 className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Connect what you already use
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Workflow agents can work alongside existing enterprise
                      applications, APIs, databases and internal tools rather
                      than forcing teams to rebuild their technology stack.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          CTA
      ==================================================================== */}

      <section className="relative overflow-hidden bg-[#12103c] py-16 sm:py-24 text-white">

        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-brand-secondary/15"
        />

        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-brand-secondary/10 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-8">

              <h2 className="mt-0 max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Have a workflow that still depends on too much manual work?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us how the process works today, where your teams spend
                time and which systems are involved. We can help identify
                where a custom AI workflow agent can make the biggest impact.
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">

              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Design Your Workflow
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">

            {[
              "Custom workflow agents",
              "Business process orchestration",
              "System integration",
              "Human-in-the-loop control",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-white/45"
              >
                <Check className="h-3.5 w-3.5 text-[#a095ff]" />
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

/* ============================================================================
   SMALL HERO ICON
============================================================================ */

function ArrowDownIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center">
      <span className="h-1.5 w-1.5 border-b border-r border-white rotate-45 -translate-y-[2px]" />
    </span>
  );
}