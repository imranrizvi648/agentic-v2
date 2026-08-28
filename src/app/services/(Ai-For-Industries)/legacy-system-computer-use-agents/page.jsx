"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Monitor,
  MousePointer2,
  Workflow,
  ShieldCheck,
  Sparkles,
  Layers3,
  Database,
  TerminalSquare,
  Play,
} from "lucide-react";

/* ============================================================================
   Legacy System & Computer-Use Agents
   AgenticSense Service Sub-page

   Typography / color / spacing aligned with the existing
   AgenticSense service-page design system.
============================================================================ */

const capabilities = [
  {
    title: "Computer-Use Automation",
    text: "AI agents can interact with applications the way a person does — opening screens, selecting options, entering information and completing repetitive tasks.",
  },
  {
    title: "Legacy Application Access",
    text: "Connect automation to older business applications that may not have modern APIs or easy integration options.",
  },
  {
    title: "Screen Understanding",
    text: "Agents can understand application screens, fields, buttons and on-screen information before deciding what to do next.",
  },
  {
    title: "Task Execution",
    text: "Move beyond reading information. Agents can complete defined tasks across desktop applications, portals and legacy workflows.",
  },
  {
    title: "Controlled Automation",
    text: "Keep important processes under control with defined actions, validation steps, permissions and human review when needed.",
  },
];

const processSteps = [
  {
    title: "Observe",
    text: "The agent reads the application screen and identifies the information, controls and workflow currently available.",
  },
  {
    title: "Understand",
    text: "AI interprets what the screen means and determines the next step based on the task and business rules.",
  },
  {
    title: "Execute",
    text: "The agent interacts with the application by clicking, typing, navigating and completing the required task.",
  },
  {
    title: "Verify",
    text: "The result is checked before the workflow continues, with exceptions routed to a person when necessary.",
  },
];

const useCases = [
  {
    title: "Legacy ERP Operations",
    text: "Automate repetitive data entry, record updates and transaction tasks inside older ERP systems without rebuilding the entire application.",
  },
  {
    title: "Desktop Applications",
    text: "Use AI agents with Windows-based or desktop applications where traditional API integration is limited or unavailable.",
  },
  {
    title: "Data Transfer Between Systems",
    text: "Move information between applications that were never designed to communicate with each other through modern APIs.",
  },
  {
    title: "Back-Office Processing",
    text: "Automate repetitive operational work such as updating records, checking information and completing multi-step application workflows.",
  },
];

const agentCapabilities = [
  {
    title: "Works with the systems you already have",
    text: "You do not always need to replace a legacy application just because it was not built for modern automation.",
  },
  {
    title: "Understands screens, not just APIs",
    text: "Computer-use agents can work with visible interfaces, making them useful where direct system integration is difficult.",
  },
  {
    title: "Keeps people in control",
    text: "Critical actions can include validation, approval and human review so automation remains controlled and accountable.",
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
            "radial-gradient(circle at 82% 20%, rgba(98,94,255,0.26), transparent 32%), radial-gradient(circle at 15% 85%, rgba(70,65,170,0.16), transparent 35%)",
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

export default function LegacySystemComputerUseAgentsPage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ======================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="Legacy System & Computer-Use Agents"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">

              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Automate the systems
                <span className="text-[#a095ff]">
                  {" "}
                  you cannot easily replace.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense uses computer-use AI agents to work with legacy
                applications, desktop software and older business systems —
                helping teams automate repetitive work without waiting for
                every system to be modernized.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">

                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Discuss Your Workflow
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Automation
                  <ArrowDownIcon />
                </Link>

              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="hidden lg:block lg:col-span-4">

              <div className="relative ml-auto w-[290px]">

                <div className="absolute -left-8 top-12 h-28 w-28 rounded-full border border-[#a095ff]/20" />

                <div className="absolute -right-5 bottom-5 h-20 w-20 rounded-full border border-white/10" />

                <div className="relative border border-white/10 bg-white/[0.055] backdrop-blur-sm p-6">

                  <div className="flex items-center justify-between border-b border-white/10 pb-5">

                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                      Computer-use agent
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#a095ff]" />

                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <Monitor className="h-5 w-5 text-white/45" />
                      </div>

                      <div>

                        <p className="text-sm font-bold text-white">
                          Legacy application
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Existing desktop system
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
                          AI agent
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          See · understand · decide
                        </p>

                      </div>

                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-white/15">
                        <MousePointer2 className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>

                        <p className="text-sm font-bold text-white">
                          Task execution
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Navigate · enter · verify
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-5">

                    <div className="flex justify-between">

                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Agent status
                      </span>

                      <span className="text-[10px] font-bold text-[#a095ff]">
                        RUNNING
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          INTRO / MANIFESTO
      ====================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">

        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Legacy systems are not always the problem.
              <span className="text-brand-secondary">
                {" "}
                The manual work around them is.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The old flow
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">

                <span>Open</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Find</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Type</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Repeat</span>

              </div>

            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Many businesses still depend on applications that are too
                important to remove but too old to integrate easily. Teams
                often spend hours navigating these systems and repeating the
                same steps.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Computer-use agents offer another path. Instead of waiting
                for every legacy system to gain a modern API, AI can interact
                with the existing interface and complete defined tasks just
                as an experienced operator would.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          CAPABILITIES
      ====================================================================== */}

      <section
        id="capabilities"
        className="py-16 sm:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

            <div className="max-w-3xl">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Give AI access to the work
                <br />
                <span className="text-brand-secondary">
                  your legacy systems already perform.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              Computer-use agents help automate the interaction layer around
              older systems, allowing businesses to improve processes without
              rebuilding every application.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/[0.05]">
                  <Monitor className="h-5 w-5 text-brand-secondary" />
                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                    Automation foundation
                  </p>

                  <h3 className="mt-2 text-xl sm:text-2xl font-bold">
                    Work through the interface
                  </h3>

                </div>

              </div>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                When an application has no useful API, the interface itself
                can become the automation point. AI agents can understand
                screens, navigate workflows and perform defined tasks.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">

                Observe

                <span className="h-px w-6 bg-brand-secondary/40" />

                Execute

              </div>

            </div>

            <div className="lg:col-span-7 py-10 lg:pl-16">

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">

                {capabilities.slice(1, 3).map((item) => (
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
                    Intelligent task execution
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    Agents can follow defined workflows, enter information,
                    navigate multiple screens and complete repetitive
                    operational tasks.
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-brand-primary/10" />
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-bold">
                    Validation before action
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    Important actions can be checked against rules and
                    expected outcomes before the agent moves forward.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          COMPUTER USE VISUAL
      ====================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The screen becomes
                <br />
                <span className="text-brand-secondary">
                  the point of action.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                A computer-use agent does not need every application to have
                a modern API. It can work with the visible interface, reason
                about the current screen and follow the task it has been
                given.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-secondary">

                See

                <ArrowRight className="h-4 w-4" />

                Decide

                <ArrowRight className="h-4 w-4" />

                Act

              </div>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                {/* LEGACY APPLICATION */}

                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white shadow-[0_20px_60px_rgba(26,25,77,0.06)]">

                  <div className="flex items-center justify-between border-b border-brand-primary/10 px-6 py-4">

                    <div className="flex items-center gap-3">

                      <Monitor className="h-4 w-4 text-brand-primary/35" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                        Legacy application
                      </span>

                    </div>

                    <div className="flex gap-1">

                      <span className="h-2 w-2 rounded-full bg-brand-primary/10" />
                      <span className="h-2 w-2 rounded-full bg-brand-primary/10" />
                      <span className="h-2 w-2 rounded-full bg-brand-primary/10" />

                    </div>

                  </div>

                  <div className="p-7">

                    <div className="flex gap-5">

                      <div className="w-24 space-y-3">

                        <div className="h-2 w-full bg-brand-primary/10" />
                        <div className="h-2 w-[75%] bg-brand-primary/10" />
                        <div className="h-2 w-[88%] bg-brand-primary/10" />
                        <div className="h-2 w-[62%] bg-brand-primary/10" />

                      </div>

                      <div className="flex-1 space-y-4">

                        <div className="h-7 border border-brand-primary/10" />

                        <div className="grid grid-cols-2 gap-3">

                          <div className="h-9 border border-brand-primary/10" />
                          <div className="h-9 border border-brand-primary/10" />

                        </div>

                        <div className="flex justify-end">

                          <div className="h-8 w-20 bg-brand-primary/10" />

                        </div>

                      </div>

                    </div>

                    <div className="mt-7 flex items-center gap-3 border-t border-brand-primary/10 pt-5">

                      <span className="h-2 w-2 rounded-full bg-brand-secondary" />

                      <span className="text-[10px] uppercase tracking-[0.15em] text-brand-primary/35">
                        Transaction screen
                      </span>

                    </div>

                  </div>

                </div>

                {/* AGENT PANEL */}

                <div className="absolute right-0 top-0 w-[54%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white">

                  <div className="flex items-center gap-3">

                    <Sparkles className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Agent activity
                    </span>

                  </div>

                  <div className="mt-8 space-y-5">

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Current task
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Update customer record
                      </p>

                    </div>

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Agent action
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Navigating application
                      </p>

                    </div>

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Progress
                      </p>

                      <div className="mt-2 flex items-center gap-3">

                        <div className="h-1.5 flex-1 bg-white/15">

                          <div className="h-full w-[82%] bg-white" />

                        </div>

                        <span className="text-xs font-bold">
                          82%
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* RESULT PANEL */}

                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">

                  <div className="flex items-center gap-4">

                    <ShieldCheck className="h-5 w-5 text-[#a095ff]" />

                    <div>

                      <p className="text-sm font-bold">
                        Task completed
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Record updated and result verified
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
          HOW IT WORKS
      ====================================================================== */}

      <section
        id="how-it-works"
        className="bg-[#12103c] py-16 sm:py-24 text-white"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#a095ff]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a095ff]">
                How It Works
              </span>

            </div>

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              The agent sees the screen.
              <br />
              <span className="text-[#a095ff]">
                Then it gets the work done.
              </span>
            </h2>

          </div>

          <div className="mt-16 relative">

            <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-white/10" />

            <div className="grid md:grid-cols-4 gap-10 md:gap-6">

              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative"
                >

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-white/15 bg-[#12103c]">

                    <span className="text-xs font-bold text-[#a095ff]">
                      0{index + 1}
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
              Automation handles repetitive work. People stay in control of
              important decisions.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">

              Controlled computer use

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          COMPUTER-USE AGENTS
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-brand-secondary" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                  Computer-Use Agents
                </span>

              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Modern automation
                <br />
                <span className="text-brand-secondary">
                  for older systems.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Computer-use agents create an automation layer between your
                people and the applications they already use every day.
              </p>

            </div>

            <div className="lg:col-span-8">

              <div className="space-y-12">

                {agentCapabilities.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-6"
                  >

                    <div className="shrink-0 pt-1">

                      {index === 0 && (
                        <Monitor className="h-5 w-5 text-brand-secondary" />
                      )}

                      {index === 1 && (
                        <MousePointer2 className="h-5 w-5 text-brand-secondary" />
                      )}

                      {index === 2 && (
                        <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                      )}

                    </div>

                    <div>

                      <h3 className="text-base sm:text-lg font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                        {item.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          USE CASES
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-slate-50/50">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Wherever old systems
                <span className="text-brand-secondary">
                  {" "}
                  slow the work down.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Legacy-system automation is most useful where teams perform
                the same screen-based tasks repeatedly and replacing the
                underlying system is not practical.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">

                Start with one process

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

      {/* ======================================================================
          BUSINESS IMPACT
      ====================================================================== */}

      <section className="bg-white py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="mt-7 grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The goal isn't to replace every old system.
                <span className="text-brand-secondary">
                  {" "}
                  It's to remove the manual work around it.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Computer-use automation can reduce repetitive screen work,
                improve consistency and help teams spend their time on tasks
                that require real judgment instead of routine application
                navigation.
              </p>

            </div>

          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Less
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Repetitive screen work
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Faster
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Completion of routine tasks
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Better
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Use of existing systems
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          WHY AGENTICSENSE
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-slate-50/50">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-brand-secondary" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                  Why AgenticSense
                </span>

              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Don't wait for
                <br />
                <span className="text-brand-secondary">
                  modernization to start.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <div className="space-y-12">

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">

                    <Layers3 className="h-5 w-5 text-brand-secondary" />

                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Add an automation layer
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      AgenticSense can sit around existing applications and
                      automate selected workflows without requiring the
                      business to replace its core systems first.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">

                    <TerminalSquare className="h-5 w-5 text-brand-secondary" />

                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Handle difficult integration points
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Where APIs, connectors or modern interfaces are limited,
                      computer-use agents provide another way to interact with
                      the system.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">

                    <ShieldCheck className="h-5 w-5 text-brand-secondary" />

                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Keep automation controlled
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Define what an agent can do, where validation is
                      required and when a person needs to take over.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          CTA
      ====================================================================== */}

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

              <h2 className="mt-7 max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Have a legacy process that still depends on people clicking
                through the same screens?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us which systems your teams use, what they repeatedly
                do inside them and where the process slows down. We can help
                identify where computer-use agents can safely take over the
                repetitive work.
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">

              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Discuss Your Workflow
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">

            {[
              "Legacy application automation",
              "Computer-use AI agents",
              "Desktop workflow automation",
              "Human-controlled execution",
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