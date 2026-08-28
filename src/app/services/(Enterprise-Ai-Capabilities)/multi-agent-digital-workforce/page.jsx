"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  GitBranch,
  Layers3,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================================
   Multi-Agent Digital Workforce
   AgenticSense Service Sub-page

   Design system:
   - Same typography / spacing / colors as other AgenticSense service pages
   - No tags / badges
   - No FAQ
   - Editorial enterprise layout
============================================================================ */

const capabilities = [
  {
    title: "Specialized AI Agents",
    text: "Give different agents focused responsibilities such as research, analysis, customer support, operations, finance or document work.",
  },
  {
    title: "Agent Collaboration",
    text: "Let specialized agents share context, pass tasks between one another and work together toward a common business outcome.",
  },
  {
    title: "Work Coordination",
    text: "Coordinate complex processes by deciding which agent should act, what information it needs and what should happen next.",
  },
  {
    title: "Shared Business Context",
    text: "Agents can work from the same approved knowledge, business rules and operational context so decisions remain connected across the workflow.",
  },
  {
    title: "Human Oversight",
    text: "Keep people involved when judgment, approval or exception handling is important while agents manage the work around those decisions.",
  },
];

const workforceSteps = [
  {
    number: "01",
    title: "Receive",
    text: "A business request, event or task enters the digital workforce and is interpreted in context.",
  },
  {
    number: "02",
    title: "Delegate",
    text: "The coordinating layer determines which specialized agent should handle each part of the work.",
  },
  {
    number: "03",
    title: "Collaborate",
    text: "Agents research, analyze, create, validate or execute their assigned tasks while sharing relevant context.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "The completed work is assembled, checked and delivered to the right person, system or downstream process.",
  },
];

const useCases = [
  {
    title: "Finance & Operations",
    text: "Coordinate agents across financial analysis, invoice workflows, reconciliations, reporting and operational follow-ups.",
  },
  {
    title: "Customer Service",
    text: "Combine research, case analysis, response generation and system actions to help service teams resolve requests faster.",
  },
  {
    title: "Research & Intelligence",
    text: "Use multiple specialized agents to gather information, compare sources, analyze findings and prepare useful business insights.",
  },
  {
    title: "Enterprise Operations",
    text: "Create digital teams that coordinate repetitive knowledge work across departments, applications and business processes.",
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
            "radial-gradient(circle at 82% 20%, rgba(98,94,255,0.27), transparent 32%), radial-gradient(circle at 14% 82%, rgba(70,65,170,0.16), transparent 35%)",
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

export default function MultiAgentDigitalWorkforcePage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ====================================================================
          HERO
      ==================================================================== */}

      <section
        aria-label="Multi-Agent Digital Workforce"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">

              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Build a digital workforce
                <span className="text-[#a095ff]">
                  {" "}
                  that works together.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense brings together specialized AI agents that can
                collaborate across tasks, systems and business functions —
                creating a digital workforce designed around how your
                organization actually operates.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">

                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Build Your Digital Workforce
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Multi-Agent Systems
                  <ArrowDownIcon />
                </Link>

              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="hidden lg:block lg:col-span-4">

              <div className="relative ml-auto w-[300px]">

                <div className="absolute -left-10 top-10 h-28 w-28 rounded-full border border-[#a095ff]/20" />

                <div className="absolute -right-6 bottom-5 h-20 w-20 rounded-full border border-white/10" />

                <div className="relative border border-white/10 bg-white/[0.055] backdrop-blur-sm p-6">

                  <div className="flex items-center justify-between border-b border-white/10 pb-5">

                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                      Digital workforce
                    </span>

                    <span className="flex items-center gap-2 text-[10px] text-white/35">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a095ff]" />
                      Active
                    </span>

                  </div>

                  <div className="relative py-7">

                    {/* CONNECTION LINES */}

                    <div className="absolute left-[19px] top-[59px] h-[125px] w-px bg-white/10" />

                    <div className="absolute left-[19px] top-[122px] h-px w-[36px] bg-white/10" />

                    <div className="space-y-6">

                      <div className="relative flex items-center gap-4">

                        <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-brand-secondary/30 bg-brand-secondary/10">
                          <Network className="h-4 w-4 text-[#a095ff]" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white">
                            Coordinator
                          </p>

                          <p className="mt-1 text-xs text-white/35">
                            Plan · delegate · monitor
                          </p>
                        </div>

                      </div>

                      <div className="ml-7 grid grid-cols-2 gap-3">

                        <div className="border border-white/10 bg-white/[0.025] p-3">
                          <p className="text-[11px] font-bold text-white/75">
                            Research
                          </p>

                          <p className="mt-1 text-[9px] text-white/30">
                            Finding
                          </p>
                        </div>

                        <div className="border border-white/10 bg-white/[0.025] p-3">
                          <p className="text-[11px] font-bold text-white/75">
                            Analysis
                          </p>

                          <p className="mt-1 text-[9px] text-white/30">
                            Reasoning
                          </p>
                        </div>

                        <div className="border border-white/10 bg-white/[0.025] p-3">
                          <p className="text-[11px] font-bold text-white/75">
                            Operations
                          </p>

                          <p className="mt-1 text-[9px] text-white/30">
                            Execution
                          </p>
                        </div>

                        <div className="border border-white/10 bg-white/[0.025] p-3">
                          <p className="text-[11px] font-bold text-white/75">
                            Support
                          </p>

                          <p className="mt-1 text-[9px] text-white/30">
                            Response
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-5">

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Agents working
                      </span>

                      <span className="text-[10px] font-bold text-[#a095ff]">
                        4 active
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
              One agent can help with a task.
              <span className="text-brand-secondary">
                {" "}
                A workforce can run the process.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The old model
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">

                <span>One task</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>One tool</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>One result</span>

              </div>

            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Real business work rarely belongs to one task or one
                department. A single request may require research, analysis,
                decisions, system updates and communication before it is
                complete.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                A multi-agent digital workforce allows those responsibilities
                to be distributed across specialized agents that collaborate
                with each other. Instead of asking one AI system to do
                everything, each agent can focus on what it does best.
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
                From individual agents
                <br />
                <span className="text-brand-secondary">
                  to a connected digital workforce.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              Multiple specialized agents can work together under a shared
              orchestration layer to handle more complex business work.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/[0.05]">
                <UsersRound className="h-5 w-5 text-brand-secondary" />
              </div>

              <h3 className="mt-7 text-xl sm:text-2xl font-bold">
                Give every agent a role
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                Research, analysis, operations and customer support do not
                need to be handled by the same AI. Specialized agents can
                focus on specific responsibilities and contribute to a larger
                business process.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Specialize
                <span className="h-px w-6 bg-brand-secondary/40" />
                Coordinate
                <span className="h-px w-6 bg-brand-secondary/40" />
                Deliver
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
          WORKFORCE VISUAL
      ==================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The power is not in
                <br />
                <span className="text-brand-secondary">
                  one agent.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                It comes from giving different agents clear responsibilities
                and connecting them through a common business objective.
                Complex work can then move from one capability to another
                without losing context.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[430px]">

                {/* CENTRAL COORDINATOR */}

                <div className="absolute left-[28%] top-[145px] w-[42%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white z-10">

                  <div className="flex items-center gap-3">

                    <Network className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Workforce coordinator
                    </span>

                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    Decide what happens next
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-white/50">
                    Understand the objective, delegate work and bring results
                    together.
                  </p>

                </div>

                {/* CONNECTING LINES */}

                <div className="absolute left-[49%] top-[78px] h-[70px] w-px bg-brand-secondary/20" />

                <div className="absolute left-[49%] bottom-[76px] h-[68px] w-px bg-brand-secondary/20" />

                <div className="absolute left-[16%] top-[218px] h-px w-[12%] bg-brand-secondary/20" />

                <div className="absolute right-[16%] top-[218px] h-px w-[12%] bg-brand-secondary/20" />

                {/* TOP AGENT */}

                <div className="absolute left-[31%] top-0 w-[36%] border border-brand-primary/10 bg-white p-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center border border-brand-primary/10">
                      <Sparkles className="h-4 w-4 text-brand-secondary" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Research Agent
                      </p>

                      <p className="mt-1 text-[10px] text-brand-primary/40">
                        Find · gather · compare
                      </p>
                    </div>

                  </div>

                </div>

                {/* LEFT AGENT */}

                <div className="absolute left-0 top-[178px] w-[30%] border border-brand-primary/10 bg-white p-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center border border-brand-primary/10">
                      <Layers3 className="h-4 w-4 text-brand-secondary" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Analysis
                      </p>

                      <p className="mt-1 text-[10px] text-brand-primary/40">
                        Reason · evaluate
                      </p>
                    </div>

                  </div>

                </div>

                {/* RIGHT AGENT */}

                <div className="absolute right-0 top-[178px] w-[30%] border border-brand-primary/10 bg-white p-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center border border-brand-primary/10">
                      <Zap className="h-4 w-4 text-brand-secondary" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Operations
                      </p>

                      <p className="mt-1 text-[10px] text-brand-primary/40">
                        Execute · update
                      </p>
                    </div>

                  </div>

                </div>

                {/* BOTTOM AGENT */}

                <div className="absolute left-[31%] bottom-0 w-[38%] border border-brand-primary/10 bg-[#12103c] p-5 text-white">

                  <div className="flex items-center gap-3">

                    <ShieldCheck className="h-4 w-4 text-[#a095ff]" />

                    <div>
                      <p className="text-sm font-bold">
                        Human review
                      </p>

                      <p className="mt-1 text-[10px] text-white/40">
                        Approve · decide · escalate
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
              A business request comes in.
              <br />
              <span className="text-[#a095ff]">
                A digital workforce takes it forward.
              </span>
            </h2>

          </div>

          <div className="mt-16 relative">

            <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-white/10" />

            <div className="grid md:grid-cols-4 gap-10 md:gap-6">

              {workforceSteps.map((step) => (
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
              Each agent has a role. The workforce has one shared objective.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Coordinated intelligence
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
                A digital workforce
                <span className="text-brand-secondary">
                  {" "}
                  wherever work gets complex.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Multi-agent systems are especially useful when work crosses
                functions, requires different types of reasoning or involves
                several systems before reaching an outcome.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
                Start focused
                <ArrowRight className="h-4 w-4" />
                Expand
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

          <div className="grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The value comes from
                <span className="text-brand-secondary">
                  {" "}
                  coordination.
                </span>
                <br />
                Not just automation.
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                When specialized agents can work together, organizations can
                automate larger pieces of knowledge work while keeping the
                right people involved in decisions that matter.
              </p>

            </div>

          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                More
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Work handled by AI
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Better
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Coordination across tasks
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Clearer
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Human oversight
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
                Don't build
                <br />
                <span className="text-brand-secondary">
                  isolated AI agents.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Build a connected workforce where every agent has a clear
                responsibility and contributes to the same business outcome.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="space-y-12">

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <UsersRound className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Give agents clear responsibilities
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Each agent can be designed around a specific capability
                      or business responsibility instead of expecting one
                      system to handle every type of work.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <GitBranch className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Connect the work between agents
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Orchestration allows agents to pass information, trigger
                      the next task and contribute to a larger process without
                      losing the overall objective.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Keep the workforce accountable
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Business rules, approvals, monitoring and human review
                      can remain part of the system so autonomy does not mean
                      losing control.
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
                Have a business process that is too complex for a single
                automation?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us which teams, tasks and systems are involved. We can
                help design a multi-agent digital workforce that divides the
                work intelligently and brings everything back together.
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">

              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Build Your Digital Workforce
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">

            {[
              "Specialized AI agents",
              "Multi-agent orchestration",
              "Cross-system collaboration",
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