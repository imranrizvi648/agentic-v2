"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Settings2,
  Activity,
  Users,
  ShieldCheck,
  CircleCheck,
  RefreshCw,
  LifeBuoy,
} from "lucide-react";

/* ============================================================================
   MANAGED AGENT OPERATIONS
   AgenticSense Services Page

   Typography aligned with Responsible AI Governance / Process Discovery:
   - Same font sizing hierarchy
   - Same font weights
   - Same line heights
   - Same tracking
   - Same editorial typography rhythm
============================================================================ */

const hero = {
  eyebrow: "Managed Agent Operations · Services",
  headline: "Keep AI Agents Running Reliably",
  sub:
    "AgenticSense helps organizations operate, monitor and continuously improve AI agents after deployment so intelligent workflows remain reliable, secure and aligned with business needs.",
};

const operatingPrinciples = [
  {
    title: "Operational Reliability",
    text:
      "Keep production agents available, consistent and ready to perform the work they were designed to handle.",
    icon: Activity,
  },
  {
    title: "Human Control",
    text:
      "Give teams clear intervention, escalation and approval mechanisms when agents encounter exceptions or uncertain situations.",
    icon: Users,
  },
  {
    title: "Continuous Improvement",
    text:
      "Use operational signals, outcomes and observed behavior to continuously improve agent performance over time.",
    icon: RefreshCw,
  },
];

const operationsAreas = [
  {
    title: "Agent Health Monitoring",
    text:
      "Monitor agent availability, workflow execution, failures and operational signals across production environments.",
  },
  {
    title: "Incident & Exception Management",
    text:
      "Identify failed tasks, unexpected behavior and workflow exceptions so issues can be investigated and resolved quickly.",
  },
  {
    title: "Performance Optimization",
    text:
      "Review execution patterns, response quality and workflow performance to identify opportunities for improvement.",
  },
  {
    title: "Human Escalation",
    text:
      "Route situations that require judgment, authorization or intervention to the appropriate human owner.",
  },
  {
    title: "Agent Updates & Change Management",
    text:
      "Manage changes to prompts, models, tools, workflows and integrations without losing operational visibility.",
  },
  {
    title: "Operational Reporting",
    text:
      "Provide teams with a clear view of agent activity, outcomes, exceptions and service performance.",
  },
];

const operatingLifecycle = [
  {
    title: "Observe",
    text:
      "Understand what agents are doing in production, how workflows are performing and where exceptions are occurring.",
  },
  {
    title: "Respond",
    text:
      "Investigate failures, intervene when necessary and restore workflows when operational issues occur.",
  },
  {
    title: "Improve",
    text:
      "Use operational evidence to refine agents, workflows, controls and integrations as business requirements evolve.",
  },
];

const questions = [
  {
    q: "What are managed agent operations?",
    a:
      "Managed agent operations provide the ongoing operational layer required to keep AI agents reliable after deployment. This includes monitoring, incident handling, human escalation, performance improvement, change management and operational reporting.",
  },
  {
    q: "Why do AI agents need ongoing operations?",
    a:
      "Production environments change continuously. Models, data sources, applications, APIs, business rules and workflows can all change. Ongoing operations help ensure agents continue to perform reliably as those conditions evolve.",
  },
  {
    q: "Can AgenticSense manage agents already in production?",
    a:
      "Yes. Existing agent environments can be assessed and supported with monitoring, operational controls, exception management, performance analysis and continuous improvement processes.",
  },
  {
    q: "Does managed operations replace our internal team?",
    a:
      "Not necessarily. Managed agent operations can complement internal teams by providing the operational processes, monitoring and support needed to keep agent systems dependable while your teams retain business ownership and decision authority.",
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

export default function ManagedAgentOperationsPage() {
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
                Keep AI Agents
                <br />
                <span className="text-[#a095ff]">
                  Running Reliably.
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
                  Manage Your AI Operations
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#operations"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/15 sm:px-6"
                >
                  Explore Operations
                </a>
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
              <div className="relative ml-auto max-w-[330px]">

                <div className="absolute -inset-8 rounded-full bg-[#625eff]/10 blur-3xl" />

                <div className="relative border border-white/10 bg-white/[0.045] p-8 backdrop-blur-sm">

                  <div className="flex h-14 w-14 items-center justify-center border border-[#a095ff]/30 bg-[#a095ff]/10 text-[#a095ff]">
                    <Settings2 className="h-7 w-7" />
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-7 text-2xl font-bold leading-tight text-white">
                    Production AI needs operational discipline.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    Reliable agents require more than deployment. They need
                    monitoring, intervention, support and continuous improvement.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-[#a095ff]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a095ff]" />
                    Built for production AI
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
                Deployment is only
                <br />
                the beginning.
                <br />
                <span className="text-brand-secondary">
                  Operations keep it working.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p className="text-base font-semibold leading-relaxed text-brand-primary sm:text-lg">
                AI agents operate inside changing business environments where
                data, systems, APIs, models and workflows constantly evolve.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Once an agent moves into production, organizations need more
                than a successful deployment. They need visibility into agent
                behavior, mechanisms for handling failures and processes for
                keeping performance aligned with business expectations.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                AgenticSense provides the operational layer that helps teams
                monitor, support and continuously improve AI agents across
                production workflows.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl font-bold leading-relaxed text-brand-primary sm:text-2xl">
                  Production reliability is not a deployment milestone.
                  <span className="text-brand-secondary">
                    {" "}
                    It is an ongoing discipline.
                  </span>
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          OPERATING PRINCIPLES
      ====================================================================== */}

      <section
        id="operations"
        className="border-b border-brand-primary/10 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">

          

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Reliable agents
                <br />
                need
                <span className="text-brand-secondary">
                  {" "}
                  active operations.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Managed operations connect technical monitoring with the
                people, processes and decisions required to keep AI useful
                in production.
              </p>

            </div>

            <div className="lg:col-span-8">

              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">

                {operatingPrinciples.map((item) => {
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

        
        

            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.25rem]">
              Operations should create
              <br />
              <span className="text-[#a095ff]">
                stability, not overhead.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
              AI operations become difficult when monitoring, support and
              improvement happen separately from the workflows agents are
              responsible for. AgenticSense connects operational visibility
              with the systems, people and processes that keep agents working.
            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Visible
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Understand agent activity, workflow execution and operational
                outcomes.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Responsive
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Detect failures and exceptions early so teams can respond
                before they become larger operational problems.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Improving
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Turn operational evidence into better agent behavior,
                workflows and controls.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          OPERATIONS AREAS
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-slate-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">

             

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Everything required
                <br />
                to keep agents
                <br />
                <span className="text-brand-secondary">
                  production-ready.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Managed agent operations provide the practical support layer
                between deployment and dependable long-term performance.
              </p>

              <div className="mt-8 h-px w-16 bg-brand-secondary/60" />

              <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-brand-primary">
                The objective is simple:
                <span className="text-brand-secondary">
                  {" "}
                  keep intelligent workflows dependable as the business changes.
                </span>
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">

                {operationsAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group py-7 ${
                      index < operationsAreas.length - 2
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
              Operations follow
              <br />
              the life of the
              <span className="text-brand-secondary">
                {" "}
                agent.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-primary/65 sm:text-base">
              Managed operations are not limited to incident response.
              They create a continuous loop of observation, intervention and
              improvement that keeps AI systems aligned with production needs.
            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 lg:grid-cols-3">

            {operatingLifecycle.map((item, index) => (
              <div
                key={item.title}
                className={`relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 ${
                  index !== operatingLifecycle.length - 1
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
              Reliable AI operations are a continuous feedback loop,
              <span className="text-brand-secondary">
                {" "}
                not a support function added after deployment.
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

          

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Put the right
                <br />
                operational layer
                <br />
                <span className="text-[#a095ff]">
                  around every agent.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                Managed operations become effective when monitoring,
                response, human intervention and improvement are connected
                to the actual agent workflow.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Production monitoring
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Incident response
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Continuous optimization
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
                      <Settings2 className="h-10 w-10" />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Monitor
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        What agents are doing
                      </p>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Respond
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        When something changes
                      </p>
                    </div>

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Support
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        Where humans intervene
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Improve
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        How agents get better
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
                Move from deployed
                <br />
                agents to
                <br />
                <span className="text-brand-secondary">
                  dependable operations.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Strong agent operations give business and technology teams
                greater confidence that production AI will remain observable,
                supportable and useful as demand grows.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 md:grid-cols-3">

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Greater Reliability
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Keep production agents available and performing consistently
                across critical business workflows.
              </p>
            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Faster Response
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Identify operational issues earlier and give teams clear
                mechanisms for investigation and intervention.
              </p>
            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Continuous Improvement
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Turn production insights into better agent behavior,
                workflows and operational performance.
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-col gap-6 border-b border-brand-primary/10 pb-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-lg font-bold leading-relaxed tracking-tight sm:text-xl">
              The goal is not simply to keep agents online.
              <span className="text-brand-secondary">
                {" "}
                It is to keep them useful, reliable and ready for real work.
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

              <div>
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

                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary">
                    <LifeBuoy className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-bold leading-snug tracking-tight text-[#1a3556] sm:text-2xl">
                    Need a stronger operating layer for your AI agents?
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Tell us which agents are already in production, where
                    your team sees operational friction and which workflows
                    need stronger monitoring or support. We will map the
                    operational layer required to keep your agents reliable
                    as adoption grows.
                  </p>

                  <div className="mt-6 space-y-3">

                    <Link
                      href="/contact"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-r from-[#171c50] via-[#2a308c] to-[#5956f6] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95"
                    >
                      Discuss Your Agent Operations
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