"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Banking & Financial Services
   Typography aligned with Customer Service page.
   Layout / sections / design remain unchanged.
───────────────────────────────────────────────────────────────────────────── */

const hero = {
  eyebrow: "03 · Industries · Banking & Financial Services",
  headline: "Agentic AI Solutions for Banking & Financial Services",
  sub: "Banking is built on information customer documents, financial records, policies, applications, transactions and operational data. AgenticSense helps financial institutions turn that information into coordinated action across document readiness, onboarding, credit-case preparation, reporting, collections and employee knowledge workflows while keeping sensitive decisions under human control.",
  cta1: "Explore an AI Opportunity",
  cta2: "Explore Priority Workflows",
};

const workflows = [
  {
    num: "01",
    title: "Customer Onboarding",
    body: "Move submitted customer documents toward a review-ready state through completeness checks, information extraction, classification and exception handling.",
  },
  {
    num: "02",
    title: "Credit Case Preparation",
    body: "Bring together financial information, customer records and supporting documentation to create structured cases for qualified credit teams to review.",
  },
  {
    num: "03",
    title: "Collections Support",
    body: "Help teams organize cases, identify follow-up priorities and prepare relevant customer information according to defined business rules.",
  },
  {
    num: "04",
    title: "Management Reporting",
    body: "Reduce the manual effort involved in gathering information, validating evidence and preparing recurring operational and management reports.",
  },
  {
    num: "05",
    title: "Policy & SOP Assistance",
    body: "Give employees grounded access to approved policies, procedures and institutional knowledge without forcing them to search through disconnected repositories.",
  },
  {
    num: "06",
    title: "Complaint & Service Routing",
    body: "Understand incoming customer requests, identify their context and move them toward the appropriate team or operational workflow.",
  },
];

const faqs = [
  {
    q: "What is Agentic AI in banking?",
    a: "Agentic AI refers to AI systems that can understand a defined objective, work with relevant information, perform multiple workflow steps and escalate tasks to people when human judgment is required. In banking, this can support onboarding, document processing, case preparation, reporting and employee knowledge workflows.",
  },
  {
    q: "Can Agentic AI work with our existing banking systems?",
    a: "Yes. Agentic AI can be designed to work across existing core banking, CRM, loan origination, document management, reporting and data environments rather than requiring organizations to replace their existing infrastructure.",
  },
  {
    q: "Can AI make lending decisions automatically?",
    a: "AI can support the preparation and analysis of lending information, but material lending decisions should remain subject to appropriate human oversight, organizational policies and applicable regulatory requirements.",
  },
  {
    q: "How can sensitive financial information be protected?",
    a: "AI workflows can be designed around access controls, data-handling policies, security requirements, data residency considerations, auditability and defined authorization boundaries.",
  },
  {
    q: "Can we start with a single workflow?",
    a: "Yes. Starting with one high-value workflow is an effective way to establish measurable value, validate governance requirements and build organizational confidence before expanding.",
  },
  {
    q: "Which banking processes are good candidates for AI automation?",
    a: "Processes involving high document volumes, repetitive information gathering, structured case preparation, knowledge retrieval, workflow routing and recurring reporting are often strong candidates.",
  },
];

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
            "linear-gradient(135deg, rgba(6,5,28,0.58) 0%, rgba(26,25,77,0) 50%, rgba(10,8,38,0.42) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 90% 0%, rgba(98,94,255,0.24) 0%, rgba(98,94,255,0.06) 45%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,16,60,0.84)] via-[rgba(18,16,60,0.48)] to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(26,25,77,0.7)] to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.4)] to-transparent" />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-brand-secondary" />

      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
        {children}
      </span>
    </div>
  );
}

function FAQItem({ item, index, open, setOpen }) {
  return (
    <div className="border-b border-brand-primary/10">
      <button
        type="button"
        onClick={() => setOpen(open === index ? null : index)}
        className="w-full flex items-center justify-between gap-5 py-5 text-left"
      >
        <span className="text-sm font-bold text-brand-primary leading-snug">
          {item.q}
        </span>

        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-primary/70 text-xs transition-all ${
            open === index
              ? "rotate-180 bg-brand-primary text-white"
              : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open === index
            ? "grid-rows-[1fr] pb-5"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-sm text-brand-primary/65 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BankingFinancialServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* HERO */}
      <section
        aria-label="Banking and Financial Services AI"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

            

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Agentic AI Solutions for{" "}
              <span className="text-[#a095ff]">
                Banking & Financial Services
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-2xl mb-10">
              {hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all hover:opacity-90 bg-brand-secondary text-white shadow-sm shadow-brand-secondary/30"
              >
                {hero.cta1}
                <span className="text-white/70">→</span>
              </Link>

              <a
                href="#workflows"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-md transition-all bg-white/10 text-white border border-white/20 hover:bg-white/15"
              >
                {hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY CONTEXT */}
      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5 lg:sticky lg:top-8">
             

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                Banking is digital.
                <br />
                <span className="text-brand-primary">
                  The work behind it is still complex.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                Modern financial institutions operate across core banking
                platforms, CRM systems, loan applications, document
                repositories, reporting environments and multiple internal
                teams.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                The technology is connected in many places. The work often
                isn't.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                Employees still spend significant time searching for
                information, checking documents, preparing cases, moving data
                between systems and coordinating routine requests.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                Agentic AI creates an opportunity to change that. Instead of
                using AI simply to generate text or answer questions,
                AgenticSense helps organizations build workflows where AI can
                understand context, work with business information, perform
                defined tasks and bring people into the process when judgment
                is required.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Less time moving information.
                  <br />
                  <span className="text-brand-secondary">
                    More time acting on it.
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE / PUBLIC */}
      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
        

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              One technology approach.
              <br />
              <span className="text-brand-primary">
                Different financial environments.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Financial institutions operate under different mandates,
              customer expectations and regulatory frameworks. Whether the
              objective is commercial growth, operational efficiency or public
              financial delivery, AI must fit the environment in which it
              operates.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2">

            <div className="pb-10 lg:pb-0 lg:pr-16 lg:border-r border-brand-primary/10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Private Sector
              </span>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight">
                Improve operations without losing control.
              </h3>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Commercial banks, financial service providers and lending
                organizations can use Agentic AI to improve customer
                onboarding, servicing, collections, operational reporting and
                employee productivity.
              </p>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                The focus is on reducing repetitive operational work while
                maintaining appropriate controls around customer information,
                transactions and financial processes.
              </p>
            </div>

            <div className="pt-10 lg:pt-0 lg:pl-16">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Public Sector
              </span>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight">
                Build transparency into financial workflows.
              </h3>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Development banks, public financial institutions and regulated
                financial programs can use AI to improve document processing,
                case preparation, policy access and operational transparency.
              </p>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Workflows can be designed around clear evidence, defined
                procedures and accountable human review.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-brand-primary/10">
            <p className="max-w-3xl text-base sm:text-lg font-bold leading-relaxed">
              Different institutions have different priorities. But every
              financial organization needs AI that can operate with context,
              controls and accountability.
            </p>
          </div>

        </div>
      </section>

      {/* ONLY CARD SECTION */}
      <section
        id="workflows"
        className="py-16 sm:py-20 bg-[#12103c] relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#625eff]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

         

          <div className="max-w-3xl">

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Where Agentic AI can create{" "}
             
                immediate value.
            
            </h2>

            <p className="mt-5 text-sm text-white/55 leading-relaxed">
              Banking workflows rarely exist inside a single system. A
              customer request may begin with a document, move through several
              teams, require information from multiple platforms and
              eventually reach a human decision-maker.
            </p>

          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {workflows.map((item) => (
              <article
                key={item.num}
                className="group relative min-h-[170px] p-6 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <div className="mt-1">

                  <span className="block text-[11px] font-bold tracking-widest text-brand-secondary mb-2 font-mono">
                    {item.num}
                  </span>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/55 leading-relaxed">
                    {item.body}
                  </p>

                </div>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-brand-secondary transition-all duration-500 group-hover:w-full" />
              </article>
            ))}

          </div>

          <div className="mt-10 border-l-2 border-brand-secondary/50 pl-5">
            <p className="max-w-3xl text-lg sm:text-xl font-bold text-white leading-relaxed">
              The opportunity is not simply automating individual tasks. It is
              connecting the workflow around them.
            </p>
          </div>

        </div>
      </section>

      {/* SYSTEMS */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">


              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Your existing technology
                <br />
                <span className="text-brand-primary">
                  becomes the foundation.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Agentic AI should not require a financial institution to
                abandon the systems it already depends on.
              </p>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Instead, AI can operate across the existing technology
                environment and help information move between systems,
                workflows and people.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[430px] sm:min-h-[500px] flex items-center justify-center">

                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-secondary/20 bg-[#12103c] flex items-center justify-center text-center shadow-xl">
                  <div>
                    <p className="text-sm font-bold text-white">
                      AgenticSense
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                      Intelligent Layer
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 top-[7%] -translate-x-1/2 text-center">
                  <p className="text-sm font-bold">
                    Core Banking
                  </p>

                  <p className="mt-1 text-xs text-brand-primary/50">
                    Accounts & transactions
                  </p>
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
                  <p className="text-sm font-bold">
                    CRM & Contact Center
                  </p>

                  <p className="mt-1 text-xs text-brand-primary/50">
                    Customer context
                  </p>
                </div>

                <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 text-center">
                  <p className="text-sm font-bold">
                    Reporting & Data
                  </p>

                  <p className="mt-1 text-xs text-brand-primary/50">
                    Business information
                  </p>
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-left">
                  <p className="text-sm font-bold">
                    Documents
                  </p>

                  <p className="mt-1 text-xs text-brand-primary/50">
                    Policies & evidence
                  </p>
                </div>

                <div className="absolute inset-[18%] rounded-full border border-dashed border-brand-primary/10" />

                <div className="absolute inset-[31%] rounded-full border border-brand-secondary/10" />

              </div>

            </div>
          </div>

          <div className="mt-12 pt-7 border-t border-brand-primary/10">

            <p className="text-xl sm:text-2xl font-bold tracking-tight">
              Connected information.
              <br />
              <span className="text-brand-primary">
                Coordinated action.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense can act as an intelligent layer across these
              environments — helping teams access the right information,
              execute defined workflow steps and move cases forward without
              creating another isolated technology silo.
            </p>

          </div>

        </div>
      </section>

     {/* GOVERNANCE */}
{/* GOVERNANCE */}
{/* GOVERNANCE */}
<section className="py-16 sm:py-24 border-b border-brand-primary/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Image & Main Header */}
      <div className="lg:col-span-5 space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
          In financial services,
          <br />
          <span className="text-brand-primary">
            automation without control
          </span>
          <br />
          isn't innovation.
        </h2>

        {/* Professional Unsplash Image */}
        <div className="overflow-hidden rounded-xl border border-brand-primary/10 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" 
            alt="Secure financial tech architecture and governance" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Column: Descriptions & Governance List (Covering all aspects in 4 points) */}
      <div className="lg:col-span-7">
        <p className="text-lg sm:text-xl font-bold leading-tight">
          AI can prepare.
          <br />
          AI can assist.
          <br />
          <span className="text-brand-secondary">
            Humans remain accountable.
          </span>
        </p>

        <p className="mt-5 text-xs sm:text-sm text-brand-primary/65 leading-relaxed">
          Financial institutions handle sensitive information and make
          decisions that can have significant consequences for customers
          and organizations. That makes governance part of the
          architecture — not something added after deployment.
        </p>

        <div className="mt-6">
          {[
            [
              "Customer identity & consent",
              "Ensure sensitive information is accessed, used, and protected within defined organizational requirements.",
            ],
            [
              "Data residency & protection",
              "Support appropriate requirements for how and where financial data is processed securely.",
            ],
            [
              "Evidence & source grounding",
              "Keep AI outputs connected to underlying documents while maintaining complete traceability and auditability.",
            ],
            [
              "Risk, testing & human approval",
              "Evaluate workflows for operational risks while keeping qualified personnel involved for final decisions.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              className="grid grid-cols-[30px_1fr] sm:grid-cols-[40px_190px_1fr] gap-3 sm:gap-4 py-3.5 border-b border-brand-primary/10"
            >
              <span className="text-[10px] font-bold tracking-widest text-brand-secondary font-mono pt-0.5">
                0{index + 1}
              </span>

              <h3 className="font-bold text-xs sm:text-sm pt-0.5">
                {title}
              </h3>

              <p className="col-span-2 sm:col-span-1 text-xs sm:text-sm text-brand-primary/60 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-lg sm:text-xl font-bold tracking-tight">
          AI should make financial teams faster
          <span className="text-brand-primary">
            {" "}
            not make accountability disappear.
          </span>
        </p>

      </div>
    </div>
  </div>
</section>

      {/* ENGAGEMENT */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

        

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Start with one workflow.
              <br />
              <span className="text-brand-primary">
                Prove the value. Scale with confidence.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Successful AI adoption does not have to begin with an
              organization-wide transformation. A focused workflow can provide
              a practical starting point.
            </p>

          </div>

          <div className="mt-12 relative">

            <div className="absolute hidden lg:block left-0 right-0 top-7 h-px bg-brand-primary/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

              {[
                [
                  "01",
                  "Discover",
                  "Identify operational processes where high volumes, repetitive work, fragmented information or slow case preparation create measurable opportunities.",
                ],
                [
                  "02",
                  "Design",
                  "Map the workflow across people, systems, data, decisions and controls to determine where AI can safely participate.",
                ],
                [
                  "03",
                  "Deploy",
                  "Implement the selected workflow with defined boundaries, human approval points and measurable outcomes.",
                ],
                [
                  "04",
                  "Scale",
                  "Extend successful workflows across additional teams, processes and use cases once measurable value has been established.",
                ],
              ].map(([num, title, text]) => (
                <div key={num} className="relative">

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-brand-primary/10 text-xs font-bold text-brand-secondary">
                    {num}
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                    {text}
                  </p>

                </div>
              ))}

            </div>
          </div>

          <div className="mt-12 border-l-2 border-brand-secondary/50 pl-5">
            <p className="text-base sm:text-lg font-bold leading-relaxed">
              The objective isn't to automate everything.
              <br />
              <span className="text-brand-primary/45">
                It's to automate the right things well.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



    {/* Header & Description Grid with Proper Alignment */}
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
      <div className="lg:col-span-7">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-12 max-w-2xl">
          Turn operational effort into{" "}
          <span className="text-[#a095ff]">
            organizational capacity.
          </span>
        </h2>
      </div>

      <div className="lg:col-span-5">
        <p className="text-sm sm:text-base text-white/55 leading-relaxed">
          The value of Agentic AI is not simply measured by how much
          content an AI system can generate. For financial institutions,
          the more meaningful question is how much work teams can move
          forward with less manual effort.
        </p>
      </div>
    </div>

    {/* 3-Column Grid Cards */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
      {[
        [
          "Faster case preparation",
          "Reduce the time teams spend gathering, organizing and reviewing information.",
        ],
        [
          "Lower operational effort",
          "Automate repetitive information-handling and coordination activities.",
        ],
        [
          "Better knowledge access",
          "Make approved policies, procedures and institutional knowledge easier to use.",
        ],
        [
          "More consistent workflows",
          "Apply defined processes and business rules across recurring activities.",
        ],
        [
          "Greater operational visibility",
          "Create clearer workflow trails and evidence around automated activities.",
        ],
        [
          "More capacity for higher-value work",
          "Give teams more time to focus on customers, analysis, judgment and decisions.",
        ],
      ].map(([title, text], index) => (
        <div
          key={title}
          className={`py-8 sm:py-10 px-6 sm:px-8 ${
            index < 3 ? "border-b border-white/10" : ""
          } ${
            index % 3 !== 2 ? "lg:border-r lg:border-white/10" : ""
          } ${
            index % 2 !== 1 && index % 3 !== 2 ? "md:border-r md:border-white/10 lg:border-r" : ""
          }`}
        >
          <span className="text-[11px] font-bold tracking-widest text-[#a095ff] font-mono">
            0{index + 1}
          </span>
          <h3 className="mt-3 text-base sm:text-lg font-bold">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/55 leading-relaxed">
            {text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* FAQ + CTA */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* FAQ */}
            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-primary mb-6">
                Common questions
              </h2>

              <div className="space-y-0">

                {faqs.slice(0, 3).map((item, index) => (
                  <FAQItem
                    key={item.q}
                    item={item}
                    index={index}
                    open={openFaq}
                    setOpen={setOpenFaq}
                  />
                ))}

              </div>
            </div>

            {/* CTA */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-7">

              <h3 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-tight leading-tight">
                Ready to put governed agents on your financial workflows?
              </h3>

              <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                Tell us how your team processes compliance checks, reviews
                risk assessments, and manages customer documentation. We will
                map where agents can reduce friction while keeping financial
                officers in control of approvals and sensitive decisions.
              </p>

              <div className="mt-6 space-y-3">

                <Link
                  href="/contact"
                  className="relative group w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-lg text-white bg-gradient-to-r from-[#1a3556] via-[#28328c] to-[#4f46e5] shadow-md hover:opacity-95 transition-all overflow-hidden"
                >
                  <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/50 pointer-events-none" />

                  <span>
                    Discuss Your Workflow
                  </span>

                  <span className="text-white/80 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>

                  <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/50 pointer-events-none" />
                </Link>

                <Link
                  href="/services"
                  className="w-full inline-flex items-center justify-center font-bold text-sm px-6 py-3.5 rounded-lg text-brand-primary bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  View All Services
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}