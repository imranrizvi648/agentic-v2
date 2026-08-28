"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  FileSearch,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

/* ============================================================================
   Enterprise Knowledge & Evidence Agents
   AgenticSense Service Sub-page

   Design system aligned with Intelligent Document Processing page.
============================================================================ */

const capabilities = [
  {
    title: "Knowledge Discovery",
    text: "Find the information that matters across documents, reports, policies, records and internal knowledge sources without searching through everything manually.",
  },
  {
    title: "Evidence Retrieval",
    text: "Agents locate the supporting information behind an answer and connect it back to the source so teams can understand where the result came from.",
  },
  {
    title: "Contextual Understanding",
    text: "Go beyond keyword search. Agents understand questions, business context and relationships between different pieces of information.",
  },
  {
    title: "Source Validation",
    text: "Compare information across approved sources, identify conflicts and surface the evidence that supports a recommendation or response.",
  },
  {
    title: "Knowledge Workflows",
    text: "Turn knowledge into action by connecting findings with reviews, approvals, case management and downstream business processes.",
  },
];

const processSteps = [
  {
    title: "Ask",
    text: "A user or business process asks a question, requests evidence or starts a knowledge task.",
  },
  {
    title: "Search",
    text: "The agent searches approved knowledge sources and identifies the information most relevant to the request.",
  },
  {
    title: "Verify",
    text: "Sources are compared and the supporting evidence is checked before an answer or recommendation is produced.",
  },
  {
    title: "Act",
    text: "The result is delivered with context and evidence, or passed into the next business workflow.",
  },
];

const useCases = [
  {
    title: "Policy & Compliance",
    text: "Help teams quickly find the policies, procedures and supporting evidence they need to make compliant decisions.",
  },
  {
    title: "Research & Analysis",
    text: "Bring together information from reports, studies and internal documents so analysts can spend more time understanding the result.",
  },
  {
    title: "Customer & Case Support",
    text: "Give service teams fast access to the right account, product and case information without searching multiple systems.",
  },
  {
    title: "Operational Knowledge",
    text: "Make internal procedures, technical documents and business knowledge easier to find, understand and apply.",
  },
];

const faqs = [
  {
    q: "What are Enterprise Knowledge & Evidence Agents?",
    a: "They are AI agents designed to search enterprise knowledge, understand business questions and return useful answers with supporting evidence from approved sources.",
  },
  {
    q: "What sources can the agents work with?",
    a: "Agents can work with documents, policies, reports, knowledge bases, repositories and other approved enterprise information sources, depending on the integration.",
  },
  {
    q: "Can the agent show where an answer came from?",
    a: "Yes. Evidence-based workflows can connect answers and findings back to the source information used to produce them, helping teams review and trust the result.",
  },
  {
    q: "Can different teams use the same knowledge platform?",
    a: "Yes. Knowledge access can be organized around business roles, approved sources and specific workflows so different teams can work with the information relevant to them.",
  },
  {
    q: "Can it connect with existing enterprise systems?",
    a: "Yes. The knowledge layer can work alongside existing applications, repositories, CRM, ERP, case-management and other business systems through approved integrations.",
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

export default function EnterpriseKnowledgeEvidenceAgentsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ====================================================================
          HERO
      ==================================================================== */}

      <section
        aria-label="Enterprise Knowledge & Evidence Agents"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-7">
              
              </div>

              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Turn enterprise knowledge
                <span className="text-[#a095ff]">
                  {" "}
                  into trusted action.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense helps teams find, understand and verify
                information across their enterprise — giving people useful
                answers with the evidence behind them, instead of making them
                search through disconnected sources.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Discuss Your Knowledge
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Knowledge Agents
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
                      Knowledge request
                    </span>

          
                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <Search className="h-5 w-5 text-white/60" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Business question
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Search · context · intent
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-brand-secondary/30 bg-brand-secondary/10">
                        <FileSearch className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Evidence found
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Sources · relevance · context
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15">
                        <ArrowRight className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Trusted answer
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Explain · verify · act
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Evidence layer
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
          INTRO / MANIFESTO
      ==================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">

        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3">
             
            </div>

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Your business already has the answers.
              <span className="text-brand-secondary">
                {" "}
                Finding them is the problem.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The old flow
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                <span>Search</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Open</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Read</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Compare</span>
              </div>

            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Important business knowledge is often spread across
                documents, policies, reports, systems and shared repositories.
                People spend valuable time looking for the right information
                before they can actually use it.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Knowledge agents change that experience. Instead of simply
                searching for keywords, an agent can understand the question,
                find relevant sources, connect the evidence and present the
                result in a form people can use.
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

              <div className="flex items-center gap-3">
               
              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                From scattered information
                <br />
                <span className="text-brand-secondary">
                  to useful knowledge.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              The intelligence layer helps people discover information,
              understand its context and verify the evidence before acting on
              it.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <h3 className="text-xl sm:text-2xl font-bold">
                Find what matters
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                Knowledge agents search across approved enterprise sources
                and identify the information that is most relevant to the
                question or task.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Discovery
                <span className="h-px w-6 bg-brand-secondary/40" />
                Relevance
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
                    Connect the next action
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                    Move from an answer to action by connecting knowledge
                    findings with approvals, cases, reviews and existing
                    business workflows.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          INTELLIGENCE
      ==================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <div className="flex items-center gap-3">
               
              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Not just answers.
                <br />
                <span className="text-brand-secondary">
                  Evidence.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                Enterprise decisions often need more than a quick answer.
                Teams need to know why the answer is relevant, where the
                information came from and whether the evidence supports it.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                {/* SOURCE DOCUMENT */}

                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.06)]">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      Policy document
                    </span>

                    <FileSearch className="h-4 w-4 text-brand-secondary" />

                  </div>

                  <div className="mt-8 space-y-4">

                    <div className="h-2 w-[65%] bg-brand-primary/10" />

                    <div className="h-2 w-[42%] bg-brand-primary/10" />

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

                {/* AI RESULT */}

                <div className="absolute right-0 top-0 w-[54%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white">

                  <div className="flex items-center gap-3">

                    <Sparkles className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Agent finding
                    </span>

                  </div>

                  <div className="mt-8 space-y-5">

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Relevant source
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Operations Policy
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Evidence match
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        96%
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Source confidence
                      </p>

                      <div className="mt-2 flex items-center gap-3">

                        <div className="h-1.5 flex-1 bg-white/15">
                          <div className="h-full w-[94%] bg-white" />
                        </div>

                        <span className="text-xs font-bold">
                          High
                        </span>

                      </div>
                    </div>

                  </div>
                </div>

                {/* VALIDATION */}

                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">

                  <div className="flex items-center gap-4">

                    <ShieldCheck className="h-5 w-5 text-[#a095ff]" />

                    <div>
                      <p className="text-sm font-bold">
                        Evidence verified
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Supporting source identified
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

            <div className="flex items-center gap-3">

             

            </div>

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              A question comes in.
              <br />
              <span className="text-[#a095ff]">
                Evidence guides the answer.
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
              The agent finds the information. Your team stays in control of
              the decision.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Evidence-led intelligence
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

              <div className="flex items-center gap-3">


              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Wherever people
                <span className="text-brand-secondary">
                  {" "}
                  need trusted information.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Knowledge agents are useful wherever teams spend time
                searching across documents, systems and internal sources before
                making a decision.
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

          <div className="flex items-center gap-3">


          </div>

          <div className="mt-7 grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The value isn't just finding information.
                <span className="text-brand-secondary">
                  {" "}
                  It's making better use of it.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Better access to enterprise knowledge means less time spent
                searching, stronger evidence behind decisions and a clearer
                path from information to action.
              </p>

            </div>

          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Faster
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Knowledge discovery
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Clearer
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Evidence behind answers
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Better
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Knowledge-driven action
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

              <div className="flex items-center gap-3">

               

              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Don't just build
                <br />
                <span className="text-brand-secondary">
                  another search box.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <div className="space-y-12">

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Search className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Understand the question
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      The agent looks beyond exact keywords to understand what
                      the user is actually trying to find or accomplish.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Keep evidence visible
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Answers can remain connected to their supporting sources,
                      helping teams review information before relying on it.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Database className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Work with your existing knowledge
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      The intelligence layer can work alongside existing
                      repositories, applications and enterprise systems rather
                      than requiring teams to replace everything they already
                      use.
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

              <div className="flex items-center gap-3">


              </div>

              <h2 className="mt-7 max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Spending too much time looking for information your business
                already has?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us where your teams search today, which knowledge sources
                matter and where decisions slow down. We can help identify
                where evidence-based agents can make the biggest difference.
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">

              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Discuss Your Knowledge
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">

            {[
              "Enterprise knowledge discovery",
              "Evidence-backed answers",
              "Source validation",
              "Business workflow integration",
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