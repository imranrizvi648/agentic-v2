"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Education
   AgenticSense Industry Page

   Typography / colors / spacing / layout aligned with existing
   AgenticSense industry pages.
───────────────────────────────────────────────────────────────────────────── */

const hero = {
  eyebrow: "08 · Industries · Education",
  headline: "Agentic AI Solutions for Education",
  sub:
    "Educational institutions manage student services, admissions, academic records, faculty operations, learning resources, administration and large volumes of information across departments. AgenticSense helps education teams connect fragmented information and coordinate defined workflows while keeping academic judgment, sensitive decisions and institutional accountability with authorized people.",
  cta1: "Explore an AI Opportunity",
  cta2: "Explore Priority Workflows",
};

const workflows = [
  {
    num: "01",
    title: "Student Services",
    body:
      "Help student service teams understand requests, retrieve relevant information, prepare responses and route cases to the appropriate department or service channel.",
  },
  {
    num: "02",
    title: "Admissions & Enrollment",
    body:
      "Organize applications, supporting documents and applicant information to help teams identify missing requirements, prepare cases and move enrollment workflows forward.",
  },
  {
    num: "03",
    title: "Academic Administration",
    body:
      "Support academic teams with course information, academic records, scheduling, requests and administrative processes that require coordination across departments.",
  },
  {
    num: "04",
    title: "Learning Resources",
    body:
      "Help authorized teams organize and retrieve institutional knowledge, policies, course materials, academic resources and educational information while preserving source context.",
  },
  {
    num: "05",
    title: "Faculty & Staff Operations",
    body:
      "Coordinate repetitive administrative workflows involving faculty requests, documentation, approvals, internal communication and departmental processes.",
  },
  {
    num: "06",
    title: "Compliance & Institutional Reporting",
    body:
      "Assist education teams in organizing evidence, reviewing requirements, preparing reports and tracking recurring compliance activities for human validation.",
  },
];

const environments = [
  {
    title: "Student-Facing Services",
    text:
      "Support high-volume student interactions by helping teams understand requests, retrieve information, prepare responses and route cases to the right service area.",
  },
  {
    title: "Academic Administration",
    text:
      "Connect information across academic departments, programs, courses, records, approvals and administrative workflows without adding another disconnected operational layer.",
  },
  {
    title: "Admissions & Enrollment",
    text:
      "Support application workflows involving applicant information, documentation, eligibility requirements, communications and enrollment coordination.",
  },
  {
    title: "Institutional Operations",
    text:
      "Help education organizations coordinate faculty, staff, finance, compliance, reporting, facilities and internal administrative processes.",
  },
];

const governance = [
  [
    "01",
    "Access & Authorization",
    "Define who can access student, academic and institutional information, which workflows AI can support and which actions require authorization from designated personnel.",
  ],
  [
    "02",
    "Student Data Protection",
    "Control how student, faculty, academic and administrative information is accessed, processed and used across AI-assisted workflows.",
  ],
  [
    "03",
    "Source & Traceability",
    "Keep AI-assisted outputs connected to source records, policies and supporting information so teams can understand where information originated.",
  ],
  [
    "04",
    "Human Academic Judgment",
    "Keep educators, administrators and authorized institutional personnel involved wherever decisions require academic judgment, approval or institutional accountability.",
  ],
];

const implementation = [
  {
    num: "01",
    title: "Discover",
    label: "Find the opportunity",
    text:
      "Identify education processes where teams spend significant time searching records, reviewing applications, responding to student requests, coordinating departments or managing repetitive administrative work.",
    left: "High administrative workload",
    right: "Information-heavy processes",
  },
  {
    num: "02",
    title: "Map",
    label: "Understand the process",
    text:
      "Map the people, departments, systems, records, policies, academic requirements, approval points and information flows involved in the selected education workflow.",
    left: "Departments & systems",
    right: "Rules & approvals",
  },
  {
    num: "03",
    title: "Pilot",
    label: "Prove measurable value",
    text:
      "Deploy one focused workflow with clearly defined boundaries, appropriate access controls, measurable outcomes and human review before expanding the solution across the institution.",
    left: "Defined workflow",
    right: "Measured outcomes",
  },
  {
    num: "04",
    title: "Scale",
    label: "Expand what works",
    text:
      "Extend successful workflows across additional departments, campuses, programs, student services or institutional processes once value, security and governance requirements are established.",
    left: "More departments",
    right: "Broader adoption",
  },
];

const impact = [
  [
    "Faster Student Response",
    "Help service teams find relevant information and respond to student requests with less manual searching and departmental coordination.",
  ],
  [
    "Lower Administrative Effort",
    "Reduce repetitive document handling, information gathering, case preparation and internal coordination across education workflows.",
  ],
  [
    "Better Information Access",
    "Help authorized teams find relevant policies, academic information, procedures, records and institutional knowledge more efficiently.",
  ],
  [
    "More Consistent Processes",
    "Apply defined workflow rules and institutional procedures consistently across recurring administrative activities.",
  ],
  [
    "Improved Case Visibility",
    "Help teams identify missing information, pending actions, exceptions and student or administrative cases that require attention.",
  ],
  [
    "Greater Institutional Capacity",
    "Give educators and administrative teams more time to focus on students, teaching, academic priorities and higher-value institutional work.",
  ],
];

const faqs = [
  {
    q: "What is Agentic AI in education?",
    a:
      "Agentic AI refers to AI systems that can understand a defined objective, work with relevant institutional information, perform multiple workflow steps and involve authorized people when judgment or approval is required. In education, this can support student services, admissions, academic administration, records, faculty operations and institutional workflows.",
  },
  {
    q: "Can Agentic AI work with existing education systems?",
    a:
      "Yes. Agentic AI can be designed to work across existing student information systems, learning platforms, document repositories, admissions systems, academic databases, reporting environments and departmental applications rather than requiring institutions to replace their existing technology.",
  },
  {
    q: "Can AI make academic decisions automatically?",
    a:
      "AI can support information gathering, case preparation, administrative coordination and repetitive tasks, but decisions involving academic progression, admissions, disciplinary matters, student eligibility or other significant institutional responsibilities should remain subject to appropriate authorization, policies and human oversight.",
  },
  {
    q: "How can AI improve student services?",
    a:
      "AI can help service teams understand incoming requests, retrieve relevant information, identify required documentation, prepare responses and route cases to the appropriate department. This can reduce repetitive administrative work while keeping institutional decisions with responsible personnel.",
  },
  {
    q: "Can Agentic AI help with academic records?",
    a:
      "Yes. AI can help authorized teams search, organize and summarize academic policies, records, procedures, correspondence and institutional documents while keeping outputs connected to their underlying sources.",
  },
  {
    q: "How does Agentic AI handle sensitive student information?",
    a:
      "Education workflows should be designed around appropriate access controls, data-handling policies, authorization boundaries, auditability and human review. The exact controls should reflect the sensitivity and regulatory requirements of the specific institution and workflow.",
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

export default function EducationPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeImplementation, setActiveImplementation] = useState(0);

  const activeStep = implementation[activeImplementation];

  return (
    <main className="bg-white text-brand-primary selection:bg-brand-secondary/20">

      {/* ───────────────── HERO ───────────────── */}

      <section
        aria-label="Education AI"
        className="relative w-full min-h-[62vh] sm:min-h-[70vh] md:min-h-[78vh] overflow-hidden flex items-center font-sans"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Agentic AI Solutions for{" "}
              <span className="text-[#a095ff]">
                Education
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

      {/* ───────────────── INDUSTRY CONTEXT ───────────────── */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight leading-tight">
                  Education is
                  <br />
                  people-centered.
                  <br />
                  The information is everywhere.
                </h2>
              </div>

              <div className="p-6 rounded-xl bg-white border border-brand-primary/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-secondary/5 rounded-full blur-xl pointer-events-none" />

                <p className="text-xs uppercase tracking-wider font-semibold text-brand-secondary mb-1">
                  Core Bottleneck
                </p>

                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Fragmented student information, repetitive administration
                  and cross-department coordination can slow down student
                  services and institutional operations.
                </p>

                <div className="mt-4 pt-3 border-t border-brand-primary/10 flex items-center justify-between text-xs text-brand-primary/50">
                  <span>Operational Friction</span>

                  <span className="font-bold text-brand-secondary">
                    Manual Coordination
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base sm:text-lg font-semibold leading-relaxed text-brand-primary">
                Educational institutions operate across student services,
                admissions, academic departments, faculty operations,
                records, learning resources and administrative systems.
              </p>

              <p className="mt-6 text-sm text-brand-primary/65 leading-relaxed">
                The systems may contain the required information, but
                the work between them often still depends on people
                manually searching records, checking documents,
                responding to requests and coordinating departments.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                Student service teams process requests. Admissions teams
                review applications. Academic teams manage records and
                courses. Faculty and administrative teams handle approvals,
                documentation and institutional processes.
              </p>

              <p className="mt-4 text-sm text-brand-primary/65 leading-relaxed">
                AgenticSense helps connect these activities through
                intelligent workflows that can understand context,
                work with authorized information, perform defined tasks
                and involve people when academic or institutional judgment
                is required.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-brand-primary">
                  Less time searching and coordinating.
                  <br />
                  More capacity for students and learning.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── OPERATING ENVIRONMENTS ───────────────── */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-4 lg:sticky lg:top-8 self-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                One intelligent layer.
                <br />
                <span className="text-brand-primary">
                  Many education environments.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Educational organizations depend on connected processes
                from student requests and admissions to academic records,
                faculty operations and institutional administration.
              </p>
            </div>

            <div className="lg:col-span-8">

              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">

                {[
                  [
                    "01",
                    "Serve",
                    "Student requests, applications and support services",
                  ],
                  [
                    "02",
                    "Educate",
                    "Courses, academic resources and learning information",
                  ],
                  [
                    "03",
                    "Administer",
                    "Records, correspondence, approvals and academic operations",
                  ],
                  [
                    "04",
                    "Enroll",
                    "Admissions, applications, requirements and enrollment",
                  ],
                  [
                    "05",
                    "Coordinate",
                    "Faculty, departments and institutional operations",
                  ],
                ].map(([num, title, text]) => (
                  <div
                    key={num}
                    className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6"
                  >
                    <span className="text-[11px] font-bold tracking-widest text-brand-secondary font-mono w-8">
                      {num}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight sm:w-32">
                      {title}
                    </h3>

                    <p className="text-sm text-brand-primary/55 leading-relaxed">
                      {text}
                    </p>

                    <span className="hidden sm:block ml-auto text-brand-primary/20 group-hover:text-brand-secondary transition-colors">
                      →
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-8">
                <p className="text-base sm:text-lg font-bold leading-relaxed">
                  Better education experiences require more than connected
                  systems.
                  <br />
                  <span className="text-brand-primary/45">
                    They require coordinated action around information.
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── WORKFLOWS ───────────────── */}

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
                  immediate value in education.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm text-white/55 leading-relaxed">
                Education workflows often involve large information
                volumes, multiple departments, recurring administrative
                processes and approval points. Agentic AI can help
                connect the work between them.
              </p>
            </div>

          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {workflows.map((item) => (
              <article
                key={item.num}
                className="group relative min-h-[175px] p-6 rounded border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#a095ff] font-mono">
                  {item.num}
                </span>

                <h3 className="mt-4 text-sm font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-white/55 leading-relaxed">
                  {item.body}
                </p>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-brand-secondary transition-all duration-500 group-hover:w-full" />
              </article>
            ))}

          </div>

          <div className="mt-10 border-l-2 border-brand-secondary/50 pl-5">
            <p className="max-w-3xl text-lg sm:text-xl font-bold text-white leading-relaxed">
              The opportunity is not simply automating individual
              administrative tasks.
              <br />
              <span className="text-white/50">
                It is connecting the education workflow around them.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ───────────────── WORKFLOW MODEL ───────────────── */}

      <section className="py-16 sm:py-24 bg-white border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14">

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary">
              From education
              <br />
              request to action.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              Agentic AI can coordinate multiple workflow steps around
              a defined educational objective instead of treating every
              administrative task as an isolated automation.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {[
              [
                "01",
                "Understand",
                "Identify the request, relevant student or institutional context, available records, policies and applicable workflow rules.",
              ],
              [
                "02",
                "Coordinate",
                "Retrieve authorized information, perform defined tasks and move the case across connected education systems.",
              ],
              [
                "03",
                "Validate",
                "Check information, supporting documents, requirements and workflow conditions before the next action.",
              ],
              [
                "04",
                "Escalate",
                "Bring the appropriate educator, administrator or department into the process when judgment, approval or exception handling is required.",
              ],
            ].map(([num, title, text]) => (
              <div key={num} className="flex flex-col">

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-brand-secondary tracking-widest">
                    {num}
                  </span>

                  <div className="h-px w-8 bg-brand-secondary/30" />
                </div>

                <h3 className="text-lg font-bold text-brand-primary tracking-tight mb-2">
                  {title}
                </h3>

                <p className="text-sm text-brand-primary/65 leading-relaxed">
                  {text}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-16 pt-8 border-t border-brand-primary/10">
            <p className="text-base sm:text-lg font-bold leading-relaxed text-brand-primary">
              The system moves administrative work forward.{" "}
              <span className="block sm:inline text-brand-primary/45 font-normal mt-1 sm:mt-0">
                Educators and authorized institutional teams remain in
                control of the decisions that matter.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ───────────────── SYSTEMS ───────────────── */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Your existing education
                <br />
                <span className="text-brand-primary">
                  technology becomes the foundation.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Agentic AI should not require educational institutions
                to abandon the systems they already depend on.
              </p>

              <p className="mt-4 text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Instead, it can operate as an intelligent layer across
                student information systems, learning platforms,
                admissions systems, document repositories, academic
                databases and institutional reporting environments.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-primary/10 shadow-sm">

                <div className="mb-6 pb-6 border-b border-brand-primary/10 flex items-center justify-between">

                  <div>
                    <p className="text-sm font-bold text-brand-primary">
                      AgenticSense
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-brand-primary/40 font-mono">
                      Intelligent Layer
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary">
                    Active Bridge
                  </span>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Student Information Systems
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Students, records & services
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Learning Platforms
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Courses, content & learning
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Admissions Systems
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Applications & enrollment
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-brand-primary/5">
                    <p className="text-sm font-bold text-brand-primary">
                      Academic & Reporting Systems
                    </p>

                    <p className="mt-1 text-xs text-brand-primary/50">
                      Records, reporting & oversight
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 pt-7 border-t border-brand-primary/10">

            <p className="text-xl sm:text-2xl font-bold tracking-tight">
              Connected information.
              <br />
              <span className="text-brand-secondary">
                Better education operations.
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-brand-primary/65 leading-relaxed">
              AgenticSense can help authorized teams access relevant
              information, execute defined workflow steps and move
              student and administrative cases forward without creating
              another isolated technology silo.
            </p>

          </div>

        </div>
      </section>

      {/* ───────────────── GOVERNANCE ───────────────── */}

      <section className="py-16 sm:py-24 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
                In education,
                <br />
                <span className="text-brand-primary">
                  automation without control
                </span>
                <br />
                can create institutional risk.
              </h2>

              <div className="mt-8 rounded-xl bg-[#12103c] p-7 sm:p-8">

                <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                  AI can prepare.
                  <br />
                  AI can coordinate.
                  <br />

                  <span className="text-[#a095ff]">
                    Educators remain accountable.
                  </span>
                </p>

                <p className="mt-5 text-sm text-white/50 leading-relaxed">
                  Education AI should work within clearly defined
                  authorization boundaries, data-access controls and
                  escalation paths, especially when workflows involve
                  students, academic records, admissions or sensitive
                  institutional information.
                </p>

              </div>

            </div>

            <div className="lg:col-span-7">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed max-w-2xl">
                Agentic workflows can be designed around institutional
                policies, access controls, source evidence, auditability
                and human approval points so automation improves
                operational efficiency without removing accountability.
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
                AI should make education operations faster
                <span className="text-brand-primary/45">
                  {" "}
                  without removing human judgment.
                </span>
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ───────────────── IMPLEMENTATION ───────────────── */}

      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Start focused.
                <br />
                Scale what works.
              </h2>
            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-brand-primary/65 leading-relaxed">
                Education AI adoption does not need to begin with
                institution-wide transformation. Start with one
                well-defined workflow, prove measurable value and
                expand within established governance requirements.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <div className="border-t border-brand-primary/10">

                {implementation.map((step, index) => (
                  <button
                    type="button"
                    key={step.num}
                    onClick={() => setActiveImplementation(index)}
                    className={`w-full group flex items-center justify-between py-5 border-b border-brand-primary/10 text-left transition-all ${
                      activeImplementation === index
                        ? "text-brand-primary"
                        : "text-brand-primary/40"
                    }`}
                  >
                    <div className="flex items-center gap-5">

                      <span className="text-[11px] font-mono font-bold tracking-widest text-brand-secondary">
                        {step.num}
                      </span>

                      <span className="text-lg font-bold tracking-tight">
                        {step.title}
                      </span>

                    </div>

                    <span
                      className={`transition-colors ${
                        activeImplementation === index
                          ? "text-brand-secondary"
                          : "text-brand-primary/20"
                      }`}
                    >
                      →
                    </span>
                  </button>
                ))}

              </div>

            </div>

            <div className="lg:col-span-8">

              <div className="relative min-h-[330px] bg-white border border-brand-primary/10 rounded-xl p-7 sm:p-10 overflow-hidden">

                <span className="absolute -right-4 -top-10 text-[180px] font-bold leading-none text-brand-primary/[0.025] pointer-events-none">
                  {activeStep.num}
                </span>

                <div className="relative z-10">

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                    {activeStep.label}
                  </span>

                  <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight">
                    {activeStep.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm sm:text-base text-brand-primary/60 leading-relaxed">
                    {activeStep.text}
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="border-l-2 border-brand-secondary/40 pl-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary/45">
                        Focus
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeStep.left}
                      </p>
                    </div>

                    <div className="border-l-2 border-brand-primary/10 pl-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary/45">
                        Outcome
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {activeStep.right}
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-brand-primary/10 pt-7">

            <p className="text-base sm:text-lg font-bold leading-relaxed">
              Prove the workflow before expanding it.
            </p>

            <p className="text-sm text-brand-primary/50 max-w-md leading-relaxed">
              Once measurable value, security and governance
              requirements are established, successful workflows can
              be extended across departments, campuses, programs and
              student services.
            </p>

          </div>

        </div>
      </section>

      {/* ───────────────── IMPACT ───────────────── */}

      <section className="py-16 sm:py-24 bg-[#12103c] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight max-w-2xl">
                Turn administrative effort into{" "}
                <span className="text-[#a095ff]">
                  educational capacity.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                The value of Agentic AI in education is not simply
                measured by how much content an AI system can produce.
                The meaningful question is how much administrative
                work can move forward with less manual effort while
                preserving academic and institutional accountability.
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

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#a095ff] font-mono">
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

      {/* ───────────────── FAQ + CTA ───────────────── */}

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
                  Ready to put governed agents into your education
                  workflows?
                </h3>

                <p className="mt-3 text-sm text-brand-primary/60 leading-relaxed">
                  Tell us how your teams manage student services,
                  admissions, academic records, faculty operations,
                  learning resources or institutional administration.
                  We will identify where Agentic AI can reduce
                  operational friction while keeping authorized teams
                  in control.
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