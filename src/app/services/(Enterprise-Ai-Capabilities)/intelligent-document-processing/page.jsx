"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  Layers3,
  ScanText,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

/* ============================================================================
   Intelligent Document Processing
   AgenticSense Service Sub-page
   Typography / color system aligned with Customer Service page.
   Existing IDP layout and visual structure preserved.
============================================================================ */

const capabilities = [
  {
    title: "Document Classification",
    text: "Identify what has arrived before deciding what should happen next. Invoices, contracts, forms and supporting documents are automatically recognized and routed.",
  },
  {
    title: "AI Data Extraction",
    text: "Turn unstructured pages into useful business information — fields, entities, tables, line items and relationships without depending on rigid templates.",
  },
  {
    title: "Validation & Controls",
    text: "Use business rules, reference data and confidence thresholds to determine whether information is ready for straight-through processing.",
  },
  {
    title: "Human Review",
    text: "Keep people involved where judgment matters. Exceptions and uncertain information can be routed to the right reviewer without stopping the entire workflow.",
  },
  {
    title: "Workflow Orchestration",
    text: "Move beyond extraction by connecting document intelligence with approvals, notifications, ERP updates and downstream operational actions.",
  },
];

const processSteps = [
  {
    title: "Receive",
    text: "Documents enter through email, portals, folders, APIs or existing applications.",
  },
  {
    title: "Understand",
    text: "AI identifies structure, meaning, entities and the context surrounding the document.",
  },
  {
    title: "Decide",
    text: "Rules and confidence determine what can move automatically and what needs attention.",
  },
  {
    title: "Act",
    text: "Validated information reaches the system, approval or operational action it belongs to.",
  },
];

const useCases = [
  {
    title: "Accounts Payable",
    text: "Invoices can be captured, checked against supplier and purchasing information, and routed for matching or exception handling.",
  },
  {
    title: "Contract Operations",
    text: "Extract dates, parties, obligations, renewal information and important clauses from agreements without manually reading every page.",
  },
  {
    title: "Customer Onboarding",
    text: "Process applications and supporting documents while identifying missing information before a customer record is created.",
  },
  {
    title: "Compliance",
    text: "Turn certificates, declarations and evidence documents into structured information with a traceable processing history.",
  },
];

const faqs = [
  {
    q: "What is Intelligent Document Processing?",
    a: "Intelligent Document Processing combines OCR, AI-based document understanding and business rules to interpret documents, extract relevant information, validate it and connect it to the next business action. Unlike basic OCR, it is designed to understand the meaning and context of information.",
  },
  {
    q: "What types of documents can be processed?",
    a: "Typical workflows include invoices, purchase orders, contracts, statements, applications, forms, certificates, compliance documents and other structured, semi-structured or unstructured business documents.",
  },
  {
    q: "Can scanned PDFs and image-based documents be processed?",
    a: "Yes. OCR can first convert scanned or image-based documents into machine-readable information, after which AI can interpret the structure and business meaning.",
  },
  {
    q: "What happens when the AI is not confident?",
    a: "Confidence thresholds can be configured so uncertain documents or fields are sent to a human reviewer. Straightforward cases can continue automatically while exceptions receive the appropriate attention.",
  },
  {
    q: "Can IDP work with existing ERP and CRM systems?",
    a: "Yes. The document intelligence layer can integrate with existing ERP, CRM, workflow, repository and internal applications through APIs and approved integration mechanisms.",
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

export default function IntelligentDocumentProcessingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* =====================================================================
          HERO
      ===================================================================== */}

      <section
        aria-label="Intelligent Document Processing"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-7">
                
              </div>

              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Make every document
                <span className="text-[#a095ff]">
                  {" "}
                  part of the workflow.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense turns invoices, contracts, forms and business
                documents into structured information and connected actions —
                so your teams spend less time handling paperwork and more time
                moving the business forward.
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
                  Explore IDP
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
                      Document flow
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#a095ff]" />
                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-end justify-center gap-1 border border-white/15 bg-white/[0.04] p-2">
                        <span className="h-4 w-1 bg-white/20" />
                        <span className="h-7 w-1 bg-[#a095ff]/70" />
                        <span className="h-5 w-1 bg-white/20" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Incoming document
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Invoice · 4 pages
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-brand-secondary/30 bg-brand-secondary/10">
                        <ScanText className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          AI understanding
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Fields · context · confidence
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
                          Business action
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Validate · route · execute
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex justify-between">
                      <span className="text-[10px]  tracking-[0.18em] text-white/30">
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

      {/* =====================================================================
          INTRO / MANIFESTO
      ===================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">

        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3">
             
            </div>

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              The problem isn't that documents are difficult to read.
              <span className="text-brand-secondary">
                {" "}
                It's that they still interrupt the work.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The old flow
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                <span>Email</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Open</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Read</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Copy</span>
              </div>
            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                A document enters the business and immediately becomes a
                manual task. Someone has to interpret it, find the important
                information, check it and decide where it goes.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Intelligent Document Processing changes that relationship.
                Instead of asking people to repeatedly translate documents
                into business data, the document becomes the starting point
                for an automated workflow.
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

              <div className="flex items-center gap-3">
               
              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                From a page of information
                <br />
                <span className="text-brand-secondary">
                  to a business decision.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              The intelligence layer covers the work that normally sits
              between receiving a document and taking action on it.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <h3 className="text-xl sm:text-2xl font-bold">
                Understand the document
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                Classification and AI extraction identify what the document
                contains and which information matters to the process around
                it.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Classification
                <span className="h-px w-6 bg-brand-secondary/40" />
                Extraction
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
                    Orchestration connects validated information with
                    approvals, notifications, ERP updates and operational
                    workflows.
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

              <div className="flex items-center gap-3">
                
              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Not just text.
                <br />
                <span className="text-brand-secondary">
                  Meaning.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                A useful document automation system has to understand more
                than individual words. It needs to recognize structure,
                relationships and whether the information makes sense for
                the process.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.06)]">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      Incoming invoice
                    </span>

                    <ScanText className="h-4 w-4 text-brand-secondary" />
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
                        Supplier
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Acme Industrial Ltd.
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Invoice value
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        $48,920.00
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Confidence
                      </p>

                      <div className="mt-2 flex items-center gap-3">

                        <div className="h-1.5 flex-1 bg-white/15">
                          <div className="h-full w-[94%] bg-white" />
                        </div>

                        <span className="text-xs font-bold">
                          94%
                        </span>

                      </div>
                    </div>

                  </div>
                </div>

                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">

                  <div className="flex items-center gap-4">

                    <ShieldCheck className="h-5 w-5 text-[#a095ff]" />

                    <div>
                      <p className="text-sm font-bold">
                        Validation passed
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Ready for downstream workflow
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
              A document enters.
              <br />
              <span className="text-[#a095ff]">
                The workflow takes over.
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
              Automation handles the predictable. People handle the
              exceptional.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Controlled automation
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

              <div className="flex items-center gap-3">
              
              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Wherever documents
                <span className="text-brand-secondary">
                  {" "}
                  slow the process down.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                IDP is most valuable where information arrives in volume,
                teams repeatedly interpret the same kinds of documents and
                the next business action is already known.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
                Start small
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

          <div className="flex items-center gap-3">
            
          </div>

          <div className="mt-7 grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The value isn't measured by how quickly a document is read.
                <span className="text-brand-secondary">
                  {" "}
                  It's measured by what happens after it is read.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Better document processing creates a cleaner operational
                chain: fewer repetitive tasks, earlier exceptions, more
                consistent decisions and information that reaches the right
                system without unnecessary handoffs.
              </p>

            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Less
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Manual document handling
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Earlier
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Exception visibility
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Better
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Connected business action
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
                Don't automate the document.
                <br />
                <span className="text-brand-secondary">
                  Automate the work around it.
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
                      Process-aware by design
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Extraction is only one step. AgenticSense connects
                      document understanding to the approvals, validations
                      and actions that surround the process.
                    </p>

                  </div>
                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Layers3 className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Human judgment where it matters
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Straightforward documents can move automatically while
                      uncertain cases are surfaced for human review.
                    </p>

                  </div>
                </div>

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Database className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-bold">
                      Designed for your existing environment
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      The intelligence layer can work alongside existing ERP,
                      CRM, repositories and operational systems rather than
                      forcing the business into a new process.
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

              <div className="flex items-center gap-3">
                
              </div>

              <h2 className="mt-7 max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Have a document-heavy process that should work differently?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us where documents enter your business, what happens to
                them today and where the process slows down. We can help map
                the opportunity for intelligent automation.
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
              "AI-powered extraction",
              "Business-rule validation",
              "Human exception handling",
              "ERP & CRM integration",
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