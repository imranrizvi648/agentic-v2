"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  Layers3,
  LineChart,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  Workflow,
  TrendingUp,
} from "lucide-react";

/* ============================================================================
   Data Intelligence & Predictive Agents
   AgenticSense Service Sub-page

   Typography / color / spacing aligned with the existing
   AgenticSense service-page design system.
============================================================================ */

const capabilities = [
  {
    title: "Data Consolidation",
    text: "Bring information from business systems, databases, files and operational sources into one reliable intelligence layer.",
  },
  {
    title: "Real-Time Data Understanding",
    text: "Turn changing business data into clear signals by understanding patterns, relationships and what is happening across operations.",
  },
  {
    title: "Predictive Intelligence",
    text: "Use historical and current data to identify trends, forecast outcomes and highlight situations that may need attention.",
  },
  {
    title: "AI Decision Support",
    text: "Give teams useful answers, recommendations and business context instead of making them search through reports and dashboards.",
  },
  {
    title: "Predictive Agents",
    text: "Deploy AI agents that continuously monitor data, detect important changes and help trigger the right action before a problem grows.",
  },
];

const processSteps = [
  {
    title: "Connect",
    text: "Business data enters from ERP, CRM, databases, applications, files and other trusted sources.",
  },
  {
    title: "Understand",
    text: "AI brings the information together and identifies relationships, trends and important business signals.",
  },
  {
    title: "Predict",
    text: "Models and intelligence identify what is likely to happen and where the business may need to respond.",
  },
  {
    title: "Act",
    text: "AI agents surface recommendations, notify the right people or connect predictions with the next business action.",
  },
];

const useCases = [
  {
    title: "Demand Forecasting",
    text: "Use historical sales, current activity and market signals to understand future demand and support better planning decisions.",
  },
  {
    title: "Operational Monitoring",
    text: "Continuously monitor business data to identify unusual activity, delays, risks and changes that need attention.",
  },
  {
    title: "Financial Intelligence",
    text: "Identify trends in revenue, costs, cash flow and financial activity so teams can make decisions with better visibility.",
  },
  {
    title: "Customer Intelligence",
    text: "Understand customer behaviour, changing needs and potential risks to help teams respond earlier and more effectively.",
  },
];

const agentCapabilities = [
  {
    title: "Always watching",
    text: "Predictive agents can continuously monitor selected business signals instead of waiting for someone to open a report.",
  },
  {
    title: "Focused on what matters",
    text: "Agents can identify meaningful changes and reduce the noise created by large volumes of business data.",
  },
  {
    title: "Connected to action",
    text: "Predictions become more useful when they can notify teams, create tasks or connect with existing workflows.",
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

export default function DataIntelligencePredictiveAgentsPage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ======================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="Data Intelligence & Predictive Agents"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">

              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Turn business data
                <span className="text-[#a095ff]">
                  {" "}
                  into the next decision.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense connects business data, predictive intelligence
                and AI agents to help teams understand what is happening,
                see what may happen next and respond earlier.
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
                  Explore Intelligence
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
                      Intelligence flow
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#a095ff]" />
                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <Database className="h-5 w-5 text-white/45" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Business data
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          ERP · CRM · systems
                        </p>
                      </div>

                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-brand-secondary/30 bg-brand-secondary/10">
                        <BrainCircuit className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          AI intelligence
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Patterns · signals · trends
                        </p>
                      </div>

                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-white/15">
                        <TrendingUp className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Predictive action
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Predict · recommend · act
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Intelligence layer
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

      {/* ======================================================================
          INTRO / MANIFESTO
      ====================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">

        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              The challenge isn't having enough data.
              <span className="text-brand-secondary">
                {" "}
                It's knowing what the data is telling you.
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

                <span>Report</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Review</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>React</span>
              </div>

            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Most businesses already have more data than their teams can
                comfortably use. The problem is finding the important signal,
                understanding what it means and knowing when action is needed.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Data intelligence changes this by turning disconnected
                information into useful business insight. Predictive agents
                can then take that intelligence further by continuously
                watching for changes and helping teams respond at the right
                time.
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
                From raw business data
                <br />
                <span className="text-brand-secondary">
                  to useful business intelligence.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              The intelligence layer helps teams move from disconnected data
              and static reporting toward continuous understanding,
              prediction and action.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/20 bg-brand-secondary/[0.05]">
                  <Database className="h-5 w-5 text-brand-secondary" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                    Intelligence foundation
                  </p>

                  <h3 className="mt-2 text-xl sm:text-2xl font-bold">
                    Understand your data
                  </h3>
                </div>

              </div>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                Bring information together from the systems your business
                already uses. AI helps identify relationships, patterns and
                signals that are difficult to see when information remains
                spread across different places.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Connect

                <span className="h-px w-6 bg-brand-secondary/40" />

                Understand
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
                    Predictive intelligence
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    Turn business history and current signals into forecasts,
                    early warnings and clearer decisions about what may happen
                    next.
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-brand-primary/10" />
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-bold">
                    Connect the next action
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    Recommendations and predictions can connect with people,
                    workflows and existing business systems.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          INTELLIGENCE VISUAL
      ====================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Don't just see
                <br />
                <span className="text-brand-secondary">
                  what happened.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                Data becomes more valuable when it can help explain what is
                happening now, what may happen next and where the business
                should pay attention.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-secondary">
                Data

                <ArrowRight className="h-4 w-4" />

                Prediction

                <ArrowRight className="h-4 w-4" />

                Action
              </div>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                {/* DATA PANEL */}

                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.06)]">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      Business data
                    </span>

                    <Database className="h-4 w-4 text-brand-secondary" />

                  </div>

                  <div className="mt-8 space-y-5">

                    <div className="flex items-end gap-2 h-24">

                      <div className="w-5 h-[35%] bg-brand-primary/10" />

                      <div className="w-5 h-[52%] bg-brand-primary/10" />

                      <div className="w-5 h-[42%] bg-brand-primary/10" />

                      <div className="w-5 h-[68%] bg-brand-secondary/20" />

                      <div className="w-5 h-[58%] bg-brand-primary/10" />

                      <div className="w-5 h-[82%] bg-brand-secondary/30" />

                      <div className="w-5 h-[72%] bg-brand-primary/10" />

                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2">

                      <div className="h-2 bg-brand-primary/10" />

                      <div className="h-2 bg-brand-primary/10" />

                      <div className="h-2 bg-brand-primary/10" />

                    </div>

                    <div className="flex items-center gap-3 pt-2">

                      <span className="h-2 w-2 rounded-full bg-brand-secondary" />

                      <span className="text-[10px] uppercase tracking-[0.15em] text-brand-primary/35">
                        Current business signals
                      </span>

                    </div>

                  </div>

                </div>

                {/* AI PANEL */}

                <div className="absolute right-0 top-0 w-[54%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white">

                  <div className="flex items-center gap-3">

                    <Sparkles className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      AI prediction
                    </span>

                  </div>

                  <div className="mt-8 space-y-5">

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Demand trend
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Increasing next month
                      </p>

                    </div>

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Forecast
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        +18.4%
                      </p>

                    </div>

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Confidence
                      </p>

                      <div className="mt-2 flex items-center gap-3">

                        <div className="h-1.5 flex-1 bg-white/15">
                          <div className="h-full w-[91%] bg-white" />
                        </div>

                        <span className="text-xs font-bold">
                          91%
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* ACTION PANEL */}

                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">

                  <div className="flex items-center gap-4">

                    <ShieldCheck className="h-5 w-5 text-[#a095ff]" />

                    <div>

                      <p className="text-sm font-bold">
                        Action recommended
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Review inventory before demand increases
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
              Data enters.
              <br />
              <span className="text-[#a095ff]">
                Intelligence starts working.
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
              Move from reactive reporting to earlier, more informed action.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Predictive intelligence
              <ArrowRight className="h-4 w-4" />
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          PREDICTIVE AGENTS
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-brand-secondary" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                  Predictive Agents
                </span>

              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Don't wait for
                <br />
                <span className="text-brand-secondary">
                  the report.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Predictive agents can continuously watch the signals that
                matter to your business and bring important changes to the
                surface before teams have to search for them.
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
                        <Workflow className="h-5 w-5 text-brand-secondary" />
                      )}

                      {index === 1 && (
                        <BrainCircuit className="h-5 w-5 text-brand-secondary" />
                      )}

                      {index === 2 && (
                        <ArrowRight className="h-5 w-5 text-brand-secondary" />
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
                Wherever better
                <span className="text-brand-secondary">
                  {" "}
                  prediction
                </span>
                {" "}
                can improve the decision.
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Data intelligence is most valuable when the business already
                has important decisions to make and the right information can
                help teams make them earlier.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
                Start with one signal

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
                The value of intelligence isn't more dashboards.
                <span className="text-brand-secondary">
                  {" "}
                  It's better decisions at the right time.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Better data intelligence gives teams clearer visibility,
                earlier warnings and stronger context for everyday decisions.
                Predictive agents can take that value further by helping the
                business respond before an issue becomes a larger problem.
              </p>

            </div>

          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Earlier
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Visibility into business changes
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Smarter
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Data-driven decisions
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Faster
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Response to important signals
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
                Don't just build
                <br />
                <span className="text-brand-secondary">
                  another dashboard.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <div className="space-y-12">

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">

                    <Database className="h-5 w-5 text-brand-secondary" />

                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Work with the data you already have
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      AgenticSense can work across existing ERP, CRM,
                      databases, applications and operational data instead of
                      requiring the business to replace everything.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">

                    <LineChart className="h-5 w-5 text-brand-secondary" />

                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Turn information into useful signals
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      The goal is not simply to show more information. AI
                      helps identify the patterns, trends and changes that
                      matter to the people making decisions.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">

                    <Layers3 className="h-5 w-5 text-brand-secondary" />

                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Connect prediction with action
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Predictions become more valuable when they can connect
                      with alerts, workflows, teams and existing business
                      processes.
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
                Have business data that could help you see what comes next?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us where your data lives, which decisions take the most
                time and where earlier insight could make a difference. We can
                help identify where predictive intelligence and AI agents can
                create value.
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
              "Data intelligence",
              "Predictive analytics",
              "AI decision support",
              "Predictive AI agents",
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