"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Activity,
  FileSearch,
  Clock3,
  CircleCheck,
  Database,
  Eye,
  GitBranch,
} from "lucide-react";

/* ============================================================================
   MONITORING & AUDIT TRAILS
   AgenticSense Services Page

   Typography aligned with Responsible AI Governance / Process Discovery:
   - Same font sizing hierarchy
   - Same font weights
   - Same line heights
   - Same tracking
   - Same editorial typography rhythm
============================================================================ */

const hero = {
  eyebrow: "Monitoring & Audit Trails · Services",
  headline: "Make Every AI Action Visible",
  sub:
    "AgenticSense helps organizations monitor AI behavior, capture meaningful audit trails and understand what happened across intelligent workflows so teams can operate with greater visibility, accountability and control.",
};

const visibilityPoints = [
  {
    title: "Operational Visibility",
    text:
      "Understand what AI systems are doing across workflows, applications and business processes as activity happens.",
    icon: Activity,
  },
  {
    title: "Traceable Decisions",
    text:
      "Capture the context behind important AI actions so teams can review what happened, when it happened and why.",
    icon: FileSearch,
  },
  {
    title: "Continuous Oversight",
    text:
      "Monitor activity over time to identify exceptions, unusual behavior and operational issues before they become larger problems.",
    icon: Eye,
  },
];

const monitoringAreas = [
  {
    title: "AI Activity Monitoring",
    text:
      "Track meaningful AI interactions, workflow actions and system events across enterprise environments.",
  },
  {
    title: "Decision & Action Trails",
    text:
      "Create traceable records around important decisions, recommendations, approvals and automated actions.",
  },
  {
    title: "User & Agent Activity",
    text:
      "Understand how users and AI agents interact with systems, information and business workflows.",
  },
  {
    title: "Exception Monitoring",
    text:
      "Surface failed actions, unexpected outcomes and workflow exceptions so teams can investigate quickly.",
  },
  {
    title: "Audit Evidence",
    text:
      "Maintain structured records that help teams review activity, investigate incidents and demonstrate operational control.",
  },
  {
    title: "Historical Analysis",
    text:
      "Use historical activity and audit data to identify patterns, recurring issues and opportunities to improve AI operations.",
  },
];

const auditLayers = [
  {
    title: "Capture",
    text:
      "Record meaningful events, actions, decisions and workflow transitions as AI systems operate.",
  },
  {
    title: "Connect",
    text:
      "Relate events to users, agents, workflows, systems, data sources and business processes.",
  },
  {
    title: "Review",
    text:
      "Give operational and governance teams a clear trail for investigating what happened and understanding context.",
  },
  {
    title: "Improve",
    text:
      "Turn monitoring insights into stronger workflows, controls, evaluations and operating practices.",
  },
];

const questions = [
  {
    q: "What are AI monitoring and audit trails?",
    a:
      "AI monitoring provides visibility into how intelligent systems behave during operation, while audit trails preserve meaningful records of actions, decisions, workflow events and exceptions. Together they help organizations understand and review AI activity.",
  },
  {
    q: "Why do enterprises need AI audit trails?",
    a:
      "Enterprise AI can interact with sensitive information, applications and business processes. Audit trails provide a reliable record of important activity so teams can investigate issues, review decisions and maintain operational accountability.",
  },
  {
    q: "What should an AI audit trail capture?",
    a:
      "The exact events depend on the workflow, but useful audit trails can include users, agents, timestamps, actions, workflow states, decisions, approvals, system responses, exceptions and relevant contextual information.",
  },
  {
    q: "Can monitoring be added to existing AI workflows?",
    a:
      "Yes. Existing AI workflows can be instrumented with appropriate event capture, monitoring, audit logging, exception tracking and review mechanisms without rebuilding the entire workflow.",
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

export default function MonitoringAuditTrailsPage() {
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
                Make Every AI
                <br />
                <span className="text-[#a095ff]">
                  Action Visible.
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
                  Build Your Monitoring Strategy
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#monitoring"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/15 sm:px-6"
                >
                  Explore Monitoring
                </a>
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
              <div className="relative ml-auto max-w-[330px]">

                <div className="absolute -inset-8 rounded-full bg-[#625eff]/10 blur-3xl" />

                <div className="relative border border-white/10 bg-white/[0.045] p-8 backdrop-blur-sm">

                  <div className="flex h-14 w-14 items-center justify-center border border-[#a095ff]/30 bg-[#a095ff]/10 text-[#a095ff]">
                    <Activity className="h-7 w-7" />
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-7 text-2xl font-bold leading-tight text-white">
                    What happens inside AI should never become a black box.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    Monitoring and audit trails turn AI activity into
                    observable, reviewable operational information.
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
                AI can act
                <br />
                at machine speed.
                <br />
                <span className="text-brand-secondary">
                  Teams still need visibility.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base font-semibold leading-relaxed text-brand-primary sm:text-lg">
                When AI becomes part of an enterprise workflow, knowing
                what happened becomes just as important as making the
                workflow work.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Agents can retrieve information, make recommendations,
                trigger actions and move work between systems. Without
                meaningful monitoring, those activities can become
                difficult to understand once they happen at scale.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                AgenticSense helps organizations create observable AI
                operations by connecting activity monitoring, event
                capture, audit trails and operational review.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl font-bold leading-relaxed text-brand-primary sm:text-2xl">
                  Visibility is not just about watching AI.
                  <span className="text-brand-secondary">
                    {" "}
                    It is about understanding it.
                  </span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ======================================================================
          VISIBILITY PRINCIPLES
      ====================================================================== */}

      <section
        id="monitoring"
        className="border-b border-brand-primary/10 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">

             

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                See the
                <br />
                activity.
                <br />
                <span className="text-brand-secondary">
                  Understand the context.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Effective monitoring connects individual events with
                the broader workflow so teams can understand activity
                instead of simply collecting logs.
              </p>

            </div>

            <div className="lg:col-span-8">

              <div className="grid grid-cols-1 gap-px border border-brand-primary/10 bg-brand-primary/10 md:grid-cols-3">

                {visibilityPoints.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group bg-white p-7 transition-all duration-300 hover:bg-slate-50 sm:p-8"
                    >

                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="text-[11px] font-bold tracking-[0.18em] text-brand-primary/25">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-8 text-lg font-bold tracking-tight text-brand-primary sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                        {item.text}
                      </p>

                      <div className="mt-8 h-px w-8 bg-brand-secondary transition-all duration-300 group-hover:w-14" />

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

         

            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.25rem]">
              Monitoring should create
              <br />
              <span className="text-[#a095ff]">
                clarity, not noise.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
              Enterprise environments already generate enormous
              amounts of technical information. AI monitoring should
              focus on meaningful events, relationships and outcomes
              that help teams understand how intelligent workflows
              actually operate.
            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Observable
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Make important AI activity visible across workflows,
                systems and operational environments.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Traceable
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Connect actions with users, agents, workflows and
                context so activity can be reconstructed.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Reviewable
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Give teams the information needed to investigate
                exceptions and evaluate operational outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          MONITORING AREAS
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-slate-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">

             

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Monitor what
                <br />
                matters across
                <br />
                <span className="text-brand-secondary">
                  the AI operation.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Monitoring should reflect the way AI is actually used
                inside the organization — across people, agents,
                systems, decisions and workflows.
              </p>

              <div className="mt-8 h-px w-16 bg-brand-secondary/60" />

              <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-brand-primary">
                The objective is simple:
                <span className="text-brand-secondary">
                  {" "}
                  turn AI activity into usable operational visibility.
                </span>
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">

                {monitoringAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group py-7 ${
                      index < monitoringAreas.length - 2
                        ? "border-b border-brand-primary/10"
                        : ""
                    }`}
                  >

                    <div className="mb-4 flex items-center justify-between">

                      <div className="flex items-center gap-3">
                        <span className="h-px w-7 bg-brand-secondary transition-all duration-300 group-hover:w-12" />

                        <CircleCheck className="h-4 w-4 text-brand-secondary/70" />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.18em] text-brand-primary/25">
                        0{index + 1}
                      </span>

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
          AUDIT TRAIL ARCHITECTURE
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-white py-16 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">

            

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                From isolated
                <br />
                events to
                <br />
                <span className="text-brand-secondary">
                  meaningful history.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                An audit trail becomes useful when individual events
                can be connected into a coherent picture of what the
                AI system did and how the workflow progressed.
              </p>

            </div>

            <div className="lg:col-span-8">

              <div className="relative">

                <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-brand-primary/10 sm:block" />

                <div className="space-y-0">

                  {auditLayers.map((item, index) => {
                    const icons = [
                      Database,
                      GitBranch,
                      FileSearch,
                      ArrowUpRight,
                    ];

                    const Icon = icons[index];

                    return (
                      <div
                        key={item.title}
                        className="group relative grid grid-cols-1 gap-6 border-t border-brand-primary/10 py-8 sm:grid-cols-[48px_1fr] sm:gap-8"
                      >

                        <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-white text-brand-secondary transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>

                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[10px] font-bold tracking-[0.18em] text-brand-secondary">
                              0{index + 1}
                            </span>

                            <span className="h-px w-5 bg-brand-secondary/40" />
                          </div>

                          <h3 className="mt-3 text-lg font-bold tracking-tight text-brand-primary sm:text-xl">
                            {item.title}
                          </h3>

                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-primary/60 sm:text-base">
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

        </div>
      </section>

      {/* ======================================================================
          CONTROL / MONITORING DIAGRAM
      ====================================================================== */}

      <section className="relative overflow-hidden bg-[#12103c] py-16 text-white sm:py-24">

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#625eff]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">

          

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Connect every
                <br />
                event to the
                <br />
                <span className="text-[#a095ff]">
                  bigger picture.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                Monitoring becomes significantly more valuable when
                events are connected to the workflow, actors and
                systems around them.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Check className="h-4 w-4 text-[#a095ff]" />
                  Event-level visibility
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Check className="h-4 w-4 text-[#a095ff]" />
                  Context-aware audit trails
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Check className="h-4 w-4 text-[#a095ff]" />
                  Exception investigation
                </div>

              </div>

            </div>

            <div className="lg:col-span-7">

              <div className="relative border border-white/10 bg-white/[0.035] p-7 sm:p-10">

                <div className="absolute left-8 top-8 h-2 w-2 bg-[#a095ff]" />
                <div className="absolute right-8 top-8 h-2 w-2 bg-white/20" />
                <div className="absolute bottom-8 left-8 h-2 w-2 bg-white/20" />
                <div className="absolute bottom-8 right-8 h-2 w-2 bg-[#a095ff]" />

                <div className="relative mx-auto max-w-xl py-5">

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                    <div className="border border-white/10 bg-white/[0.04] p-5">
                      <Clock3 className="h-5 w-5 text-[#a095ff]" />

                      <p className="mt-5 text-sm font-bold text-white">
                        Timestamp
                      </p>

                      <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                        When the event occurred
                      </p>
                    </div>

                    <div className="border border-[#a095ff]/20 bg-[#625eff]/10 p-5">

                      <Activity className="h-5 w-5 text-[#a095ff]" />

                      <p className="mt-5 text-sm font-bold text-white">
                        AI Action
                      </p>

                      <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                        What the system did
                      </p>
                    </div>

                    <div className="border border-white/10 bg-white/[0.04] p-5">

                      <Eye className="h-5 w-5 text-[#a095ff]" />

                      <p className="mt-5 text-sm font-bold text-white">
                        Context
                      </p>

                      <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                        Why the event matters
                      </p>
                    </div>

                  </div>

                  <div className="my-4 flex items-center justify-center">
                    <div className="h-8 w-px bg-white/10" />
                  </div>

                  <div className="border border-[#a095ff]/20 bg-[#625eff]/10 p-6 text-center">

                    <ShieldCheck className="mx-auto h-7 w-7 text-[#a095ff]" />

                    <p className="mt-4 text-base font-bold text-white">
                      Reviewable Audit Record
                    </p>

                    <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-white/40">
                      Connected activity that can be investigated,
                      evaluated and used for operational oversight.
                    </p>

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
                Move from
                <br />
                invisible activity to
                <br />
                <span className="text-brand-secondary">
                  accountable operations.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Strong monitoring gives technology, operations and
                governance teams the visibility they need to operate
                AI with greater confidence.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 md:grid-cols-3">

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Faster Investigation
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Give teams the context they need to understand
                exceptions and investigate operational issues faster.
              </p>

            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Stronger Accountability
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Establish a clear record of important AI actions,
                decisions, approvals and workflow outcomes.
              </p>

            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Greater Control
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Use operational insights to strengthen workflows,
                controls and the way AI is managed over time.
              </p>

            </div>

          </div>

          <div className="mt-10 flex flex-col gap-6 border-b border-brand-primary/10 pb-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-lg font-bold leading-relaxed tracking-tight sm:text-xl">
              You cannot govern what you cannot see.
              <span className="text-brand-secondary">
                {" "}
                Make AI activity observable.
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
                Understand AI activity
                <br />
                with greater clarity.
              </h2>

              <div className="space-y-0">

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

                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-secondary/5 blur-3xl"
                />

                <div className="relative z-10">

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary">
                    <FileSearch className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-[#1a3556] sm:text-2xl">
                    Ready to make your AI operations more observable?
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Tell us how your agents, AI workflows and enterprise
                    systems operate today. We will identify where
                    monitoring, audit trails and operational visibility
                    can strengthen control and accountability.
                  </p>

                  <div className="mt-6 space-y-3">

                    <Link
                      href="/contact"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-r from-[#171c50] via-[#2a308c] to-[#5956f6] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95"
                    >
                      Discuss Your Monitoring Needs
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