"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Healthcare & Pharmaceuticals
   Typography / colors / sizing aligned with Banking & Financial Services.
   Layout intentionally varied to keep industry pages visually distinct.
───────────────────────────────────────────────────────────────────────────── */

const hero = {
  eyebrow: "04 · Industries · Healthcare & Pharmaceuticals",
  headline: "Agentic AI Solutions for Healthcare & Pharmaceuticals",
  sub:
    "Healthcare and pharmaceutical organizations operate across clinical information, patient documentation, research data, regulatory requirements, operational records and complex workflows. AgenticSense helps teams turn fragmented information into coordinated action across patient administration, document workflows, research support, compliance, reporting and employee knowledge while keeping clinical and regulated decisions under appropriate human control.",
  cta1: "Explore an AI Opportunity",
  cta2: "Explore Healthcare Workflows",
};

const healthcareWorkflows = [
  {
    num: "01",
    title: "Patient Documentation",
    body:
      "Organize, classify and extract relevant information from patient and administrative documents so teams can spend less time preparing records and more time supporting care operations.",
  },
  {
    num: "02",
    title: "Prior Authorization Support",
    body:
      "Bring together required documentation, identify missing information and prepare structured cases for qualified teams to review and submit.",
  },
  {
    num: "03",
    title: "Clinical Administration",
    body:
      "Reduce repetitive administrative work by coordinating information across defined workflows while keeping clinical judgment with qualified professionals.",
  },
  {
    num: "04",
    title: "Pharma Research Support",
    body:
      "Help research and scientific teams locate, organize and summarize approved information across large document collections and knowledge repositories.",
  },
  {
    num: "05",
    title: "Regulatory & Compliance",
    body:
      "Support teams in gathering evidence, tracking requirements and preparing recurring compliance activities with clear source references and human review.",
  },
  {
    num: "06",
    title: "Patient & Service Routing",
    body:
      "Understand incoming requests, identify their operational context and route them toward the appropriate service, team or workflow.",
  },
];

const healthcareAreas = [
  {
    title: "Healthcare Providers",
    text:
      "Hospitals, clinics and healthcare networks can use Agentic AI to reduce administrative friction across documentation, patient services, reporting, scheduling support and internal knowledge workflows.",
  },
  {
    title: "Pharmaceutical Organizations",
    text:
      "Pharma teams can apply AI to research support, regulatory documentation, quality processes, knowledge retrieval and information-heavy operational workflows.",
  },
  {
    title: "Life Sciences Operations",
    text:
      "Life sciences organizations can connect information across research, quality, regulatory and commercial environments while maintaining defined governance and approval boundaries.",
  },
  {
    title: "Healthcare Administration",
    text:
      "Administrative teams can automate repetitive information-handling activities, improve case preparation and make institutional policies easier to access and apply.",
  },
];

const governance = [
  [
    "01",
    "Privacy & Access",
    "Control how sensitive healthcare information is accessed, processed and shared according to defined organizational requirements.",
  ],
  [
    "02",
    "Data Protection",
    "Design workflows around appropriate security, data-handling and residency requirements for sensitive healthcare and pharmaceutical information.",
  ],
  [
    "03",
    "Source Grounding",
    "Keep AI-generated outputs connected to approved documents, records and knowledge sources so teams can understand where information came from.",
  ],
  [
    "04",
    "Human Oversight",
    "Keep qualified healthcare, scientific, regulatory and operational professionals involved wherever judgment or approval is required.",
  ],
];

const implementationSteps = [
  [
    "01",
    "Discover",
    "Identify information-heavy workflows where administrative effort, fragmented systems or repetitive documentation create measurable operational friction.",
  ],
  [
    "02",
    "Map",
    "Understand the people, systems, information, decisions and controls involved before defining where AI should participate.",
  ],
  [
    "03",
    "Pilot",
    "Deploy one focused workflow with clear boundaries, approval points and measurable operational outcomes.",
  ],
  [
    "04",
    "Scale",
    "Extend proven workflows across additional departments, teams and use cases once value and governance requirements are established.",
  ],
];

const impact = [
  [
    "Reduced administrative effort",
    "Automate repetitive information-handling activities and reduce the manual work required to move routine cases forward.",
  ],
  [
    "Faster information access",
    "Help healthcare and pharmaceutical teams find approved information without searching through disconnected repositories.",
  ],
  [
    "More consistent workflows",
    "Apply defined processes, business rules and approval requirements across recurring operational activities.",
  ],
  [
    "Better documentation readiness",
    "Prepare structured information and identify missing evidence before cases reach the next stage of review.",
  ],
  [
    "Improved operational visibility",
    "Create clearer workflow trails and evidence around AI-assisted activities and human approvals.",
  ],
  [
    "More capacity for people",
    "Give clinical, scientific, regulatory and administrative teams more time for work that requires expertise and judgment.",
  ],
];

const faqs = [
  {
    q: "What is Agentic AI in healthcare?",
    a:
      "Agentic AI refers to AI systems that can understand a defined objective, work with relevant information, perform multiple workflow steps and involve people when human judgment is required. In healthcare, this can support administrative, documentation, research, compliance and knowledge workflows without replacing qualified clinical decision-making.",
  },
  {
    q: "Can Agentic AI work with existing healthcare systems?",
    a:
      "Yes. Agentic AI can be designed to work across existing healthcare information systems, document repositories, CRM platforms, reporting environments, research databases and other approved enterprise systems rather than requiring organizations to replace their existing technology.",
  },
  {
    q: "Can AI make clinical decisions automatically?",
    a:
      "AI can assist with information gathering, organization and workflow preparation, but clinical decisions should remain with appropriately qualified healthcare professionals and follow applicable organizational, legal and regulatory requirements.",
  },
  {
    q: "How can sensitive patient information be protected?",
    a:
      "Healthcare AI workflows can be designed around access controls, data-handling policies, security requirements, authorization boundaries, auditability and appropriate data-processing practices. The exact controls should be aligned with the organization's requirements and applicable regulations.",
  },
  {
    q: "Can pharmaceutical teams use Agentic AI for research?",
    a:
      "Yes. Agentic AI can support research teams with document discovery, knowledge retrieval, evidence organization, literature workflows and structured information preparation while keeping scientific interpretation and material decisions with qualified professionals.",
  },
  {
    q: "Can we start with one healthcare workflow?",
    a:
      "Yes. Starting with one focused workflow is often the most practical approach. It allows the organization to establish measurable value, validate governance requirements and build confidence before expanding to additional processes.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Hero Background
───────────────────────────────────────────────────────────────────────────── */

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

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */

export default function HealthcarePharmaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* HERO */}
      <section
        aria-label="Healthcare and Pharmaceuticals AI"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">


            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Agentic AI Solutions for{" "}
              <span className="text-[#a095ff]">
                Healthcare & Pharmaceuticals
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

      {/* INDUSTRY INTRO */}
      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">
            

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                Healthcare is information-rich.
                <br />
                <span className="text-brand-secondary">
                  The work around it is complex.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                Healthcare and pharmaceutical organizations operate across
                clinical records, patient documentation, research material,
                regulatory evidence, operational systems and specialized
                knowledge.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                The information exists across many systems and teams, but
                moving that information through a workflow can still require
                significant manual effort.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                Teams may spend hours locating documents, preparing cases,
                checking information, answering internal questions, compiling
                reports and coordinating routine requests.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense helps organizations move beyond AI that simply
                generates content. Our approach connects AI to defined
                workflows so it can understand context, work with approved
                information, perform specific tasks and involve people when
                expertise or judgment is required.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Less administrative friction.
                  <br />
                  <span className="text-brand-secondary">
                    More capacity for expertise.
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* HEALTHCARE ECOSYSTEM */}
      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4 lg:sticky lg:top-8 self-start">
         

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                One AI approach.
                <br />
                <span className="text-brand-primary">
                  Multiple healthcare environments.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Healthcare and life sciences organizations have different
                operating models, but many face the same challenge:
                information must move accurately between people, systems and
                processes.
              </p>
            </div>

            <div className="lg:col-span-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-xl overflow-hidden">

                {healthcareAreas.map((item, index) => (
                  <article
                    key={item.title}
                    className="bg-white p-7 sm:p-8 group hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-[11px] font-bold tracking-widest text-brand-secondary font-mono">
                      0{index + 1}
                    </span>

                    <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm text-brand-primary/60 leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-6 h-px w-8 bg-brand-secondary transition-all duration-300 group-hover:w-16" />
                  </article>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOWS */}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">
       

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Where Agentic AI can create
                <br />
                <span className="text-[#a095ff]">
                  practical operational value.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-white/55 leading-relaxed">
                Healthcare workflows often cross departments, information
                systems and approval points. Agentic AI can help coordinate
                these steps while maintaining clearly defined boundaries.
              </p>
            </div>

          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {healthcareWorkflows.map((item) => (
              <article
                key={item.num}
                className="group relative min-h-[185px] p-6 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <span className="block text-[11px] font-bold tracking-widest text-brand-secondary mb-3 font-mono">
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
              The opportunity is not replacing healthcare expertise.
              <br />
              <span className="text-white/50">
                It is giving experts better workflows around it.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* AI WORKFLOW */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">
        

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              From information
            
                to coordinated action.
            
            </h2>

            <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Agentic AI can coordinate multiple steps around a defined
              objective rather than treating every activity as an isolated
              automation.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            {[
              [
                "01",
                "Understand",
                "Identify the objective, context, relevant information and workflow rules before taking action.",
              ],
              [
                "02",
                "Coordinate",
                "Retrieve approved information, perform defined tasks and move the workflow through connected steps.",
              ],
              [
                "03",
                "Escalate",
                "Bring qualified people into the process whenever approval, interpretation or professional judgment is required.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="relative rounded-xl border border-brand-primary/10 p-7 sm:p-8 bg-slate-50/60"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12103c] text-white text-[11px] font-bold font-mono">
                  {num}
                </span>

                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {title}
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

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
                Agentic AI does not have to become another isolated platform.
                It can operate as an intelligent layer across the technology
                environments healthcare and pharmaceutical organizations
                already depend on.
              </p>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                The objective is to help information move between systems,
                workflows and people while maintaining defined access,
                security and approval boundaries.
              </p>
            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[430px] flex items-center justify-center">

                <div className="absolute left-1/2 top-1/2 h-48 w-48 sm:h-52 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-secondary/20 bg-[#12103c] flex items-center justify-center text-center shadow-xl">
                  <div>
                    <p className="text-sm font-bold text-white">
                      AgenticSense
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                      Intelligent Layer
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 top-[5%] -translate-x-1/2 text-center">
                  <p className="text-sm font-bold">
                    EHR / Clinical Systems
                  </p>
                  <p className="mt-1 text-xs text-brand-primary/50">
                    Patient information
                  </p>
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
                  <p className="text-sm font-bold">
                    Pharma & Research
                  </p>
                  <p className="mt-1 text-xs text-brand-primary/50">
                    Scientific knowledge
                  </p>
                </div>

                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center">
                  <p className="text-sm font-bold">
                    Reporting & Analytics
                  </p>
                  <p className="mt-1 text-xs text-brand-primary/50">
                    Operational insight
                  </p>
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-left">
                  <p className="text-sm font-bold">
                    Documents
                  </p>
                  <p className="mt-1 text-xs text-brand-primary/50">
                    Records & evidence
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
              <span className="text-brand-secondary">
                Coordinated healthcare workflows.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense can help teams access relevant information,
              execute defined workflow steps and move cases forward without
              creating another disconnected technology silo.
            </p>

          </div>

        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

   

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
                In healthcare,
                <br />
                <span className="text-brand-primary">
                  automation without governance
                </span>
                <br />
                is not enough.
              </h2>

              <div className="mt-8 rounded-xl bg-[#12103c] p-7 sm:p-8">
                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  AI can prepare.
                  <br />
                  AI can assist.
                  <br />
                  <span className="text-[#a095ff]">
                    Experts remain accountable.
                  </span>
                </p>

                <p className="mt-5 text-sm text-white/50 leading-relaxed">
                  Healthcare and pharmaceutical workflows can involve sensitive
                  information and decisions with significant consequences.
                  Governance therefore needs to be part of the workflow
                  architecture from the beginning.
                </p>
              </div>

            </div>

            <div className="lg:col-span-7">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed max-w-2xl">
                Agentic AI should operate within clear boundaries. The system
                should know what information it can access, which actions it
                can perform and when a qualified professional needs to take
                over.
              </p>

              <div className="mt-7">

                {governance.map(([num, title, text]) => (
                  <div
                    key={title}
                    className="grid grid-cols-[34px_1fr] sm:grid-cols-[40px_190px_1fr] gap-3 sm:gap-4 py-4 border-b border-brand-primary/10"
                  >
                    <span className="text-[10px] font-bold tracking-widest text-brand-secondary font-mono pt-0.5">
                      {num}
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
                AI should make healthcare teams faster
                <span className="text-brand-primary/45">
                  {" "}
                  without making accountability disappear.
                </span>
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">
    

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Start focused.
                <br />
                <span className="text-brand-secondary">
                  Scale with evidence.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                AI adoption does not need to begin with an organization-wide
                transformation. A focused workflow creates a practical way to
                establish value, validate governance and build confidence.
              </p>
            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {implementationSteps.map(([num, title, text]) => (
              <article
                key={num}
                className="relative bg-white border border-brand-primary/10 rounded-xl p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-widest text-brand-secondary font-mono">
                    {num}
                  </span>

                  <span className="h-px w-10 bg-brand-primary/10" />
                </div>

                <h3 className="mt-8 text-lg font-bold tracking-tight">
                  {title}
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  {text}
                </p>
              </article>
            ))}

          </div>

          <div className="mt-12 border-l-2 border-brand-secondary/50 pl-5">
            <p className="text-base sm:text-lg font-bold leading-relaxed">
              The objective isn't to automate every healthcare process.
              <br />
              <span className="text-brand-primary/45">
                It's to automate the right work responsibly.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            <div className="lg:col-span-7">


              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight max-w-2xl">
                Turn operational effort into
                <span className="text-[#a095ff]">
                  {" "}
                  organizational capacity.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                The value of Agentic AI is not simply how much content it can
                generate. For healthcare and pharmaceutical organizations, the
                more meaningful question is how much work teams can move
                forward with less repetitive effort.
              </p>

            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">

            {impact.map(([title, text], index) => (
              <div
                key={title}
                className={`py-8 sm:py-10 px-6 sm:px-8 ${
                  index < 3 ? "border-b border-white/10" : ""
                } ${
                  index % 3 !== 2
                    ? "lg:border-r lg:border-white/10"
                    : ""
                } ${
                  index % 2 !== 1 && index % 3 !== 2
                    ? "md:border-r md:border-white/10 lg:border-r"
                    : ""
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* FAQ */}

            <div className="lg:col-span-7">


              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-primary mb-6">
                Common questions
              </h2>

              <div className="space-y-0">

                {faqs.slice(0, 4).map((item, index) => (
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

            <div className="lg:col-span-5">

              <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-7">

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                  Start a Conversation
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-brand-primary tracking-tight leading-tight">
                  Ready to put governed agents into your healthcare workflows?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us how your teams manage patient documentation,
                  research information, regulatory processes or operational
                  workflows. We will identify where Agentic AI can reduce
                  friction while keeping qualified professionals in control.
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
        </div>
      </section>

    </main>
  );
}