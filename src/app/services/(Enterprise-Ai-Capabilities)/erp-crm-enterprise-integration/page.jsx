"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Layers3,
  RefreshCw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================================
   ERP, CRM & Enterprise Integration
   AgenticSense Service Sub-page

   Design system aligned with the existing AgenticSense service pages.
============================================================================ */

const integrationCapabilities = [
  {
    title: "ERP Connectivity",
    text: "Connect AI workflows with ERP platforms so operational information can move between intelligent processes and the systems that run the business.",
  },
  {
    title: "CRM Integration",
    text: "Bring customer, account, opportunity and service information into AI-powered workflows without forcing teams to work across disconnected tools.",
  },
  {
    title: "System-to-System Workflows",
    text: "Coordinate information and actions across multiple enterprise applications so a process can continue from one system to the next.",
  },
  {
    title: "Data Synchronization",
    text: "Keep important information aligned across connected applications and reduce repetitive manual updates between systems.",
  },
  {
    title: "Business Process Orchestration",
    text: "Connect AI decisions with approvals, transactions, notifications and downstream actions already used across the enterprise.",
  },
];

const integrationFlow = [
  {
    number: "01",
    title: "Connect",
    text: "Identify the enterprise systems, data and processes that need to work together.",
  },
  {
    number: "02",
    title: "Understand",
    text: "AI agents interpret information from connected systems and understand what the process requires.",
  },
  {
    number: "03",
    title: "Coordinate",
    text: "The right information and action move between systems according to business rules and workflow logic.",
  },
  {
    number: "04",
    title: "Complete",
    text: "The process finishes in the appropriate enterprise system with the relevant context and traceability.",
  },
];

const useCases = [
  {
    title: "Finance Operations",
    text: "Connect finance workflows with ERP data to support invoice processing, approvals, reconciliations and reporting activities.",
  },
  {
    title: "Sales & Customer Operations",
    text: "Bring CRM information into intelligent workflows so teams can respond faster and keep customer processes moving.",
  },
  {
    title: "Procurement",
    text: "Connect supplier information, purchase workflows and ERP transactions to reduce manual handoffs across procurement operations.",
  },
  {
    title: "Service & Case Management",
    text: "Combine customer, case and operational information so service teams can resolve requests with the right context.",
  },
  {
    title: "Supply Chain",
    text: "Coordinate information across planning, inventory, purchasing and operational systems to support faster decisions.",
  },
  {
    title: "Enterprise Reporting",
    text: "Bring information from multiple business applications together so teams can work from a more complete operational picture.",
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

export default function ErpCrmEnterpriseIntegrationPage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ======================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="ERP, CRM & Enterprise Integration"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">
              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Connect enterprise
                <span className="text-[#a095ff]">
                  {" "}
                  systems to intelligent action.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense connects AI-powered workflows with ERP, CRM and
                enterprise applications so information can move where it is
                needed, decisions can trigger action and business processes
                can continue without disconnected handoffs.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Discuss Your Integration
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Integration
                  <ArrowDownIcon />
                </Link>
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="hidden lg:block lg:col-span-4">
              <div className="relative ml-auto w-[300px]">

                <div className="absolute -left-8 top-16 h-24 w-24 rounded-full border border-[#a095ff]/20" />
                <div className="absolute -right-7 bottom-8 h-20 w-20 rounded-full border border-white/10" />

                <div className="relative border border-white/10 bg-white/[0.055] backdrop-blur-sm p-6">

                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                      Enterprise connection
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#a095ff]" />
                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <Database className="h-5 w-5 text-white/60" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          ERP
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Finance · operations · data
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-brand-secondary/30 bg-brand-secondary/10">
                        <Workflow className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          AI workflow
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Understand · decide · coordinate
                        </p>
                      </div>
                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-10 items-center justify-center border border-white/15">
                        <RefreshCw className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          CRM
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Customer · cases · revenue
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Connected workflow
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
          INTRO
      ====================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">
        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Your enterprise already has
              <span className="text-brand-secondary">
                {" "}
                the systems.
              </span>
              <br />
              The challenge is making them work together.
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The disconnected flow
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                <span>System</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Export</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Copy</span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span>Update</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Enterprise processes often cross several applications.
                Finance may depend on ERP data, sales may depend on CRM data,
                and operations may rely on information spread across multiple
                systems.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Integration turns those disconnected steps into connected
                workflows. AgenticSense can interpret information, coordinate
                actions and pass the right context between systems so teams
                spend less time moving information manually.
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

          <div className="grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Integration that connects
                <br />
                <span className="text-brand-secondary">
                  the whole workflow.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="max-w-xl ml-auto text-sm leading-relaxed text-brand-primary/60">
                Instead of treating enterprise applications as isolated
                destinations, the integration layer helps information and
                actions move between them as part of one business process.
              </p>
            </div>

          </div>

          <div className="mt-16 border-y border-brand-primary/10">

            <div className="grid lg:grid-cols-5">

              {integrationCapabilities.map((item, index) => (
                <div
                  key={item.title}
                  className={`py-9 px-6 first:pl-0 lg:border-r border-brand-primary/10 ${
                    index === integrationCapabilities.length - 1
                      ? "lg:border-r-0"
                      : ""
                  }`}
                >
                  <span className="text-xs font-bold text-brand-secondary">
                    0{index + 1}
                  </span>

                  <h3 className="mt-7 text-base sm:text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-brand-primary/60">
                    {item.text}
                  </p>

                  <div className="mt-8">
                    <span className="block h-px w-8 bg-brand-secondary/40" />
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ======================================================================
          INTEGRATION VISUAL
      ====================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                One process.
                <br />
                <span className="text-brand-secondary">
                  Multiple systems.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                A connected workflow does not require every application to
                become the same. Each system can continue doing what it does
                best while the integration layer coordinates the information
                moving between them.
              </p>

              <div className="mt-9 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-secondary">
                Connected by intelligence
                <ArrowRight className="h-4 w-4" />
              </div>

            </div>


            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                {/* ERP */}

                <div className="absolute left-0 top-0 w-[48%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.05)]">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      ERP system
                    </span>

                    <Database className="h-4 w-4 text-brand-secondary" />
                  </div>

                  <div className="mt-8 space-y-4">

                    <div className="flex items-center justify-between border-b border-brand-primary/10 pb-3">
                      <span className="text-xs text-brand-primary/45">
                        Invoice
                      </span>
                      <span className="text-xs font-bold">
                        INV-2048
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-brand-primary/10 pb-3">
                      <span className="text-xs text-brand-primary/45">
                        Vendor
                      </span>
                      <span className="text-xs font-bold">
                        Acme Ltd.
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-primary/45">
                        Status
                      </span>
                      <span className="text-xs font-bold text-brand-secondary">
                        Ready
                      </span>
                    </div>

                  </div>

                </div>


                {/* AI LAYER */}

                <div className="absolute right-0 top-[82px] w-[56%] bg-brand-secondary p-7 text-white">

                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      AI orchestration
                    </span>
                  </div>

                  <div className="mt-8">

                    <p className="text-lg font-bold">
                      Understand & coordinate
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      Information is interpreted and the next action is
                      determined using the connected business workflow.
                    </p>

                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="border border-white/15 p-3">
                      <p className="text-[10px] uppercase tracking-widest text-white/40">
                        Context
                      </p>
                      <p className="mt-2 text-sm font-bold">
                        Matched
                      </p>
                    </div>

                    <div className="border border-white/15 p-3">
                      <p className="text-[10px] uppercase tracking-widest text-white/40">
                        Action
                      </p>
                      <p className="mt-2 text-sm font-bold">
                        Approved
                      </p>
                    </div>

                  </div>

                </div>


                {/* CRM */}

                <div className="absolute bottom-0 left-[18%] w-[58%] border border-brand-primary/10 bg-[#12103c] p-7 text-white">

                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-4 w-4 text-[#a095ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                      CRM update
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    <div>
                      <p className="text-sm font-bold">
                        Customer record
                      </p>

                      <p className="mt-1 text-xs text-white/35">
                        Next step updated automatically
                      </p>
                    </div>

                    <span className="text-xs font-bold text-[#a095ff]">
                      SYNCED
                    </span>

                  </div>

                </div>


                {/* CONNECTION LINE */}

                <div className="absolute left-[44%] top-[43%] h-20 w-px bg-brand-secondary/25" />

                <div className="absolute left-[43.25%] top-[53%] h-3 w-3 rounded-full border-2 border-brand-secondary bg-slate-50" />

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

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                From connected systems
                <br />
                <span className="text-[#a095ff]">
                  to completed processes.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm sm:text-base leading-relaxed text-white/50">
                Integration is most valuable when it removes the manual work
                between systems. The workflow becomes a connected sequence
                instead of a collection of isolated steps.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="divide-y divide-white/10 border-y border-white/10">

                {integrationFlow.map((step) => (
                  <div
                    key={step.number}
                    className="grid sm:grid-cols-[90px_180px_1fr] gap-5 py-7"
                  >

                    <span className="text-xs font-bold text-[#a095ff]">
                      {step.number}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/45">
                      {step.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

          <div className="mt-16 border-t border-white/10 pt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

            <p className="text-sm text-white/40">
              Your existing systems remain in place. The intelligence layer
              connects the work happening between them.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">
              Connected enterprise
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
                Integration where
                <span className="text-brand-secondary">
                  {" "}
                  work crosses systems.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Connect the applications behind finance, sales, procurement,
                service and operations so teams can work with the information
                they need without constantly switching between systems.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
                Connect
                <ArrowRight className="h-4 w-4" />
                Coordinate
                <ArrowRight className="h-4 w-4" />
                Complete
              </div>

            </div>


            <div className="lg:col-span-8">

              <div className="grid sm:grid-cols-2 border-t border-brand-primary/10">

                {useCases.map((item, index) => (
                  <div
                    key={item.title}
                    className={`py-8 ${
                      index % 2 === 0
                        ? "sm:pr-10 sm:border-r border-brand-primary/10"
                        : "sm:pl-10"
                    } ${
                      index < 4
                        ? "border-b border-brand-primary/10"
                        : ""
                    }`}
                  >

                    <div className="flex items-start justify-between">

                      <span className="text-xs font-bold text-brand-secondary">
                        0{index + 1}
                      </span>

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

          <div className="grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                The goal isn't more integrations.
                <span className="text-brand-secondary">
                  {" "}
                  It's better-connected work.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                When systems work together, teams spend less time transferring
                information and more time completing the work that actually
                matters.
              </p>

            </div>

          </div>


          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Less
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Manual data movement
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Faster
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Cross-system processes
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Clearer
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Enterprise workflows
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
                Don't replace your
                <br />
                <span className="text-brand-secondary">
                  enterprise stack.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-primary/60">
                Build an intelligence layer around the systems your business
                already depends on.
              </p>

            </div>


            <div className="lg:col-span-7">

              <div className="space-y-11">

                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <Layers3 className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Work with existing systems
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Connect ERP, CRM, databases, applications and other
                      enterprise platforms instead of forcing teams to abandon
                      the tools they already use.
                    </p>
                  </div>

                </div>


                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <GitBranch className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Connect complex processes
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Coordinate multi-step workflows that cross departments,
                      applications and business rules without creating more
                      manual handoffs.
                    </p>
                  </div>

                </div>


                <div className="flex gap-6">

                  <div className="shrink-0 pt-1">
                    <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Keep control visible
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      Integration workflows can respect existing permissions,
                      approvals and business rules so automation works within
                      the controls your enterprise already relies on.
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

              <h2 className="max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Your business systems shouldn't
                <span className="text-[#a095ff]">
                  {" "}
                  work in isolation.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us which ERP, CRM and enterprise applications your teams
                rely on today and where information gets stuck between them.
                We can help identify where intelligent integration can remove
                the biggest operational bottlenecks.
              </p>

            </div>


            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">

              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Discuss Your Integration
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>


          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">

            {[
              "ERP integration",
              "CRM connectivity",
              "Cross-system workflows",
              "Enterprise process orchestration",
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