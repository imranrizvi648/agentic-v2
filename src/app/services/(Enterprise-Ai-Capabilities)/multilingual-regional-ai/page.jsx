"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Languages,
  MessageSquareText,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

/* ============================================================================
   Multilingual & Regional AI
   AgenticSense Service Sub-page

   Design system aligned with the existing service pages.
============================================================================ */

const capabilities = [
  {
    title: "Multilingual Understanding",
    text: "Understand customer requests, documents and business conversations across multiple languages without forcing every interaction into a single language.",
  },
  {
    title: "Regional Language Support",
    text: "Adapt AI experiences to the languages, expressions and communication patterns people actually use in different markets and regions.",
  },
  {
    title: "Cross-Language Knowledge",
    text: "Find and connect information across sources written in different languages so teams can work with a broader view of their enterprise knowledge.",
  },
  {
    title: "Context-Aware Translation",
    text: "Translate business content while preserving the meaning, terminology and context that matter to the conversation or workflow.",
  },
  {
    title: "Multilingual Workflows",
    text: "Connect multilingual interactions to customer service, operations, knowledge, document and business workflows without creating separate processes for every language.",
  },
];

const processSteps = [
  {
    title: "Understand",
    text: "The AI identifies the language, intent and context behind the user's request.",
  },
  {
    title: "Interpret",
    text: "The request is interpreted using the right linguistic and business context for that region.",
  },
  {
    title: "Respond",
    text: "The system produces a clear response in the language that best fits the user and situation.",
  },
  {
    title: "Act",
    text: "The interaction can continue into the same business workflow, regardless of the language used.",
  },
];

const useCases = [
  {
    title: "Customer Service",
    text: "Give customers a more natural support experience by allowing them to communicate in the language they are most comfortable using.",
  },
  {
    title: "Regional Operations",
    text: "Support distributed teams with AI that understands local language and business context across different operating regions.",
  },
  {
    title: "Multilingual Knowledge",
    text: "Help employees find and understand information across policies, documents, procedures and knowledge sources written in different languages.",
  },
  {
    title: "Global Business",
    text: "Create consistent AI experiences across markets while allowing each region to communicate naturally in its preferred language.",
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

export default function MultilingualRegionalAIPage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ======================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="Multilingual & Regional AI"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                AI that speaks your
                <span className="text-[#a095ff]">
                  {" "}
                  customers' language.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense helps organizations build AI experiences that
                understand different languages, regional context and the way
                people naturally communicate — making intelligent systems more
                accessible across markets and teams.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Discuss Your AI Strategy
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Multilingual AI
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
                      Multilingual request
                    </span>

                    <Globe2 className="h-4 w-4 text-white/30" />
                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <Languages className="h-5 w-5 text-white/60" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          User language
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Language · region · intent
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
                          Context understood
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Meaning · context · terminology
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15">
                        <MessageSquareText className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Natural response
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Respond · assist · act
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Regional intelligence
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
          INTRO
      ====================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">

        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              The world does not speak
              <span className="text-brand-secondary">
                {" "}
                one language.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The challenge
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                <span>Language</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Context</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Meaning</span>
              </div>
            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Global organizations serve customers and employees across
                different languages, cultures and regions. Yet many AI systems
                still work best when everyone communicates in the same way.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Multilingual and regional AI changes that experience. Instead
                of treating language as a translation step, AI can understand
                the language, intent and context together — creating more
                natural interactions while keeping business processes
                consistent.
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

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                One intelligence layer.
                <br />
                <span className="text-brand-secondary">
                  Many ways to communicate.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              Build AI experiences that adapt to language and regional context
              while staying connected to the same enterprise knowledge and
              business workflows.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <h3 className="text-xl sm:text-2xl font-bold">
                Understand people naturally
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                AI can interpret requests across languages and regional
                communication styles so users do not have to change the way
                they speak to fit the technology.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Language
                <span className="h-px w-6 bg-brand-secondary/40" />
                Context
              </div>

            </div>

            <div className="lg:col-span-7 py-10 lg:pl-16">

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">

                {capabilities.slice(2).map((item) => (
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
                    {capabilities[0].title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    {capabilities[0].text}
                  </p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          INTELLIGENCE
      ====================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Translation is only
                <br />
                <span className="text-brand-secondary">
                  the beginning.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                Real multilingual intelligence requires more than converting
                words from one language to another. The system needs to
                understand meaning, business terminology, regional context and
                the intent behind the interaction.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                {/* LANGUAGE INPUT */}

                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.06)]">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      Regional conversation
                    </span>

                    <Languages className="h-4 w-4 text-brand-secondary" />

                  </div>

                  <div className="mt-8 space-y-4">

                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 border border-brand-primary/10 flex items-center justify-center">
                        <Globe2 className="h-4 w-4 text-brand-primary/40" />
                      </div>

                      <div className="h-2 w-[45%] bg-brand-primary/10" />
                    </div>

                    <div className="h-2 w-[62%] bg-brand-primary/10" />

                    <div className="grid grid-cols-3 gap-3 pt-5">

                      <div className="h-12 border border-brand-primary/10" />
                      <div className="h-12 border border-brand-primary/10" />
                      <div className="h-12 border border-brand-primary/10" />

                    </div>

                    <div className="grid grid-cols-4 gap-3 pt-2">

                      <div className="h-2 bg-brand-primary/10" />
                      <div className="h-2 bg-brand-primary/10" />
                      <div className="h-2 bg-brand-primary/10" />
                      <div className="h-2 bg-brand-primary/10" />

                    </div>

                  </div>
                </div>

                {/* AI INTERPRETATION */}

                <div className="absolute right-0 top-0 w-[54%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white">

                  <div className="flex items-center gap-3">

                    <Sparkles className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      AI interpretation
                    </span>

                  </div>

                  <div className="mt-8 space-y-5">

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Language
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Regional language
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Intent
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        Understood
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Business context
                      </p>

                      <div className="mt-2 flex items-center gap-3">

                        <div className="h-1.5 flex-1 bg-white/15">
                          <div className="h-full w-[92%] bg-white" />
                        </div>

                        <span className="text-xs font-bold">
                          Clear
                        </span>

                      </div>
                    </div>

                  </div>
                </div>

                {/* RESULT */}

                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">

                  <div className="flex items-center gap-4">

                    <MessageSquareText className="h-5 w-5 text-[#a095ff]" />

                    <div>

                      <p className="text-sm font-bold">
                        Natural response
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Language matched to the user
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

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Different language.
              <br />

              <span className="text-[#a095ff]">
                Same intelligent experience.
              </span>
            </h2>

          </div>

          <div className="mt-16 relative">

            <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-white/10" />

            <div className="grid md:grid-cols-4 gap-10 md:gap-6">

              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="relative"
                >

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-white/15 bg-[#12103c]">
                    <span className="h-2 w-2 rounded-full bg-[#a095ff]" />
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
              Users communicate naturally. Your business keeps one connected
              intelligence layer.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Regional intelligence
              <ArrowRight className="h-4 w-4" />
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          USE CASES
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Built for organizations
                <span className="text-brand-secondary">
                  {" "}
                  that operate across markets.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Multilingual AI becomes valuable wherever customers, employees
                or business knowledge cross language and regional boundaries.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
                One platform
                <ArrowRight className="h-4 w-4" />
                Many regions
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

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="mt-7 grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Better language support creates
                <span className="text-brand-secondary">
                  {" "}
                  better access to AI.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                When people can interact with AI in the language they naturally
                use, organizations can reach more customers, support more teams
                and make enterprise intelligence easier to access.
              </p>

            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Wider
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Access to AI
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Natural
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Customer interactions
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Consistent
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Enterprise intelligence
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          WHY AGENTICSENSE
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Don't just translate
                <br />

                <span className="text-brand-secondary">
                  the conversation.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <div className="space-y-12">

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Languages className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Understand the language
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      The AI can work with different languages so users can
                      interact naturally instead of adapting their language to
                      the system.
                    </p>

                  </div>
                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Globe2 className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Respect regional context
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Regional terminology, communication patterns and local
                      context can be considered alongside the language itself.
                    </p>

                  </div>
                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Workflow className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Keep the business workflow connected
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Multilingual interactions can continue into existing
                      customer, knowledge, operational and business workflows
                      without creating disconnected regional systems.
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
                Serving customers across languages and regions?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us which markets you operate in, which languages your
                customers and teams use, and where language creates friction.
                We can help identify where multilingual AI can create the
                biggest impact.
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">

              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Discuss Your AI Strategy
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">

            {[
              "Multilingual AI experiences",
              "Regional language understanding",
              "Cross-language knowledge",
              "Connected business workflows",
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