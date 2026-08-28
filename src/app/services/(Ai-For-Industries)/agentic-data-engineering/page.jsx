"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

/* ============================================================================
   Agentic Data Engineering
   AgenticSense Service Sub-page

   Typography / color system aligned with the existing service pages.
   No FAQ section.
============================================================================ */

const capabilities = [
  {
    title: "Data Pipeline Automation",
    text: "Build reliable pipelines that collect, transform and move data between business systems without relying on repetitive manual work.",
  },
  {
    title: "Data Quality & Validation",
    text: "Detect missing, inconsistent or incorrect data before it reaches reports, applications or downstream processes.",
  },
  {
    title: "Data Transformation",
    text: "Turn raw information into clean, usable datasets by applying business logic, transformations and standardization automatically.",
  },
  {
    title: "Intelligent Data Monitoring",
    text: "Continuously monitor data flows and identify unusual changes, failures or quality issues before they become larger problems.",
  },
  {
    title: "AI-Assisted Data Workflows",
    text: "Use AI agents to understand data tasks, investigate issues and help coordinate the next step across complex data workflows.",
  },
];

const processSteps = [
  {
    title: "Connect",
    text: "Bring data together from databases, APIs, files, SaaS platforms and existing business systems.",
  },
  {
    title: "Understand",
    text: "Agents identify data structures, relationships, quality issues and the business context behind the information.",
  },
  {
    title: "Transform",
    text: "Data is cleaned, standardized, enriched and prepared according to the requirements of each workflow.",
  },
  {
    title: "Deliver",
    text: "Reliable data reaches analytics, applications, AI systems and operational processes in the format they need.",
  },
];

const useCases = [
  {
    title: "Data Warehouse & Lakehouse",
    text: "Automate ingestion and transformation so trusted data is continuously prepared for analytics and reporting.",
  },
  {
    title: "Business Intelligence",
    text: "Create cleaner and more consistent datasets for dashboards, KPIs and decision-making without repeated manual preparation.",
  },
  {
    title: "AI & Machine Learning",
    text: "Prepare high-quality training and inference data so AI systems can work with reliable and well-structured information.",
  },
  {
    title: "Operational Data Integration",
    text: "Move and synchronize information across ERP, CRM, applications and other operational systems while keeping data consistent.",
  },
];

export default function AgenticDataEngineeringPage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">
      {/* =====================================================================
          HERO
      ===================================================================== */}
      <section
        aria-label="Agentic Data Engineering"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Build data systems
                <span className="text-[#a095ff]">
                  {" "}
                  that keep working.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense uses intelligent automation to connect, clean,
                transform and move business data — helping teams spend less
                time fixing pipelines and more time using reliable information.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Discuss Your Data
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Data Engineering
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
                      Data flow
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#a095ff]" />
                  </div>

                  <div className="py-7">
                    <DataFlowItem
                      icon={<Database className="h-5 w-5 text-[#a095ff]" />}
                      title="Source systems"
                      text="ERP · CRM · APIs · files"
                    />

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <DataFlowItem
                      icon={<Sparkles className="h-5 w-5 text-[#a095ff]" />}
                      title="Agentic processing"
                      text="Clean · transform · validate"
                      active
                    />

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <DataFlowItem
                      icon={<ArrowRight className="h-5 w-5 text-[#a095ff]" />}
                      title="Business-ready data"
                      text="Analytics · AI · operations"
                    />
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Data intelligence layer
                      </span>
                      <span className="text-[10px] font-bold text-[#a095ff]">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTRO / MANIFESTO
      ===================================================================== */}
      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">
        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              The challenge isn't having more data.
              <span className="text-brand-secondary">
                {" "}
                It's making that data dependable.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The old flow
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                <span>Collect</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Clean</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Fix</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Repeat</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Modern businesses depend on data from many different places.
                When pipelines break, formats change or information becomes
                inconsistent, teams end up spending valuable time finding and
                fixing problems.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Agentic Data Engineering creates an intelligent layer around
                your data environment. It can help understand data, automate
                repetitive engineering work, identify problems and keep
                information moving reliably through the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CAPABILITIES
      ===================================================================== */}
      <section
        id="capabilities"
        className="py-16 sm:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                From raw information
                <br />
                <span className="text-brand-secondary">
                  to reliable business data.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              The data engineering layer covers the work required to make
              information clean, connected, usable and ready for action.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">
            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">
              <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/[0.06]">
                <Network className="h-5 w-5 text-brand-secondary" />
              </div>

              <h3 className="mt-7 text-xl sm:text-2xl font-bold">
                Connect the data landscape
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                Bring together information from databases, APIs, applications,
                files and cloud platforms so teams can work from connected
                data instead of isolated sources.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Connect
                <span className="h-px w-6 bg-brand-secondary/40" />
                Integrate
              </div>
            </div>

            <div className="lg:col-span-7 py-10 lg:pl-16">
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {capabilities.slice(1).map((item) => (
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
                    Intelligent orchestration
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    Agents can coordinate data tasks, investigate failures and
                    help move workflows forward when conditions change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTELLIGENCE
      ===================================================================== */}
      <section className="bg-slate-50/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Not just pipelines.
                <br />
                <span className="text-brand-secondary">
                  Understanding.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                Traditional data pipelines follow predefined instructions.
                Agentic data engineering adds intelligence around those
                pipelines so systems can understand context, investigate
                problems and support decisions about what should happen next.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative min-h-[420px]">
                {/* RAW DATA */}
                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.06)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      Incoming data
                    </span>

                    <Database className="h-4 w-4 text-brand-secondary" />
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between border-b border-brand-primary/10 pb-3">
                      <span className="text-xs text-brand-primary/50">
                        customer_id
                      </span>
                      <span className="text-xs font-bold">10482</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-brand-primary/10 pb-3">
                      <span className="text-xs text-brand-primary/50">
                        customer_name
                      </span>
                      <span className="text-xs font-bold">
                        Acme Industries
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-3">
                      <div className="h-10 border border-brand-primary/10" />
                      <div className="h-10 border border-brand-primary/10" />
                      <div className="h-10 border border-brand-primary/10" />
                    </div>

                    <div className="h-2 w-[62%] bg-brand-primary/10" />
                    <div className="h-2 w-[45%] bg-brand-primary/10" />
                  </div>
                </div>

                {/* AGENT */}
                <div className="absolute right-0 top-0 w-[54%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Data agent
                    </span>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Quality check
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        3 records need attention
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Transformation
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Standardizing customer data
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Pipeline status
                      </p>

                      <div className="mt-2 flex items-center gap-3">
                        <div className="h-1.5 flex-1 bg-white/15">
                          <div className="h-full w-[91%] bg-white" />
                        </div>

                        <span className="text-xs font-bold">91%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RESULT */}
                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-5 w-5 text-[#a095ff]" />

                    <div>
                      <p className="text-sm font-bold">
                        Data quality verified
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Ready for analytics and applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          HOW IT WORKS
      ===================================================================== */}
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
              Data enters.
              <br />
              <span className="text-[#a095ff]">
                Intelligence keeps it moving.
              </span>
            </h2>
          </div>

          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-white/10" />

            <div className="grid md:grid-cols-4 gap-10 md:gap-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative">
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
              Reliable data should not depend on someone constantly watching
              every pipeline.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Intelligent data operations
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          USE CASES
      ===================================================================== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Wherever data
                <span className="text-brand-secondary">
                  {" "}
                  needs to move reliably.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Agentic Data Engineering is useful wherever teams depend on
                information from multiple systems and need that information
                to remain clean, connected and ready to use.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
                Start with one flow
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

      {/* =====================================================================
          BUSINESS IMPACT
      ===================================================================== */}
      <section className="bg-slate-50/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mt-7 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The value of better data isn't another pipeline.
                <span className="text-brand-secondary">
                  {" "}
                  It's better decisions built on it.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                A stronger data foundation means fewer broken workflows,
                cleaner reporting, faster troubleshooting and information that
                can be trusted by people, applications and AI systems.
              </p>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">
            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Cleaner
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Data across systems
              </p>
            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Faster
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Issue detection
              </p>
            </div>

            <div className="py-9 sm:pl-8">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Better
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Data-driven decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          WHY AGENTICSENSE
      ===================================================================== */}
      <section className="py-16 sm:py-24 bg-white">
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
                Don't just move data.
                <br />
                <span className="text-brand-secondary">
                  Make it work harder.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 pt-1">
                    <Workflow className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Built around real business workflows
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Data engineering is connected to the business processes
                      that depend on the information, not treated as an
                      isolated technical task.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 pt-1">
                    <GitBranch className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Intelligent handling of change
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Agents can help identify changes in data structures,
                      investigate failures and surface issues before they
                      affect downstream systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 pt-1">
                    <Layers3 className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Works with your existing stack
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      The intelligence layer can work alongside existing
                      databases, warehouses, cloud platforms, APIs, ERP,
                      CRM and analytics environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CTA
      ===================================================================== */}
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
                Have data pipelines that should be smarter, cleaner or easier
                to manage?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us where your data comes from, where it needs to go and
                where your current process slows down. We can help identify
                opportunities for intelligent data engineering.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">
              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Discuss Your Data
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">
            {[
              "Data pipeline automation",
              "Data quality & validation",
              "AI-assisted engineering",
              "Cloud & enterprise integration",
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
   HERO DATA FLOW ITEM
============================================================================ */

function DataFlowItem({ icon, title, text, active = false }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-12 w-10 items-center justify-center border ${
          active
            ? "border-brand-secondary/30 bg-brand-secondary/10"
            : "border-white/15 bg-white/[0.04]"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-white">{title}</p>

        <p className="mt-1 text-xs text-white/35">{text}</p>
      </div>
    </div>
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