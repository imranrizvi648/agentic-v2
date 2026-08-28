"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  LockKeyhole,
  UserRoundCheck,
  KeyRound,
  Fingerprint,
  CircleCheck,
} from "lucide-react";

/* ============================================================================
   AGENT IDENTITY & ACCESS
   AgenticSense Services Page

   Typography aligned with Responsible AI Governance / Process Discovery:
   - Same font sizing hierarchy
   - Same font weights
   - Same line heights
   - Same tracking
   - Same editorial typography rhythm
============================================================================ */

const hero = {
  eyebrow: "Agent Identity & Access · Services",
  headline: "Give Every AI Agent the Right Access",
  sub:
    "AgenticSense helps organizations establish identity, permissions and access controls for AI agents so intelligent systems can work across enterprise environments without compromising security or accountability.",
};

const identityPrinciples = [
  {
    title: "Verified Agent Identity",
    text:
      "Give every AI agent a defined identity so organizations can understand which agent is acting, what it is allowed to do and where its actions originate.",
    icon: Fingerprint,
  },
  {
    title: "Least-Privilege Access",
    text:
      "Limit agents to the information, applications and actions required for their assigned responsibilities instead of granting broad enterprise access.",
    icon: LockKeyhole,
  },
  {
    title: "Human-Backed Authorization",
    text:
      "Keep people involved when sensitive actions require approval, escalation or business judgment before an agent can proceed.",
    icon: UserRoundCheck,
  },
];

const accessAreas = [
  {
    title: "Agent Identity Management",
    text:
      "Define persistent identities for agents and establish how those identities are authenticated, represented and managed across enterprise environments.",
  },
  {
    title: "Authentication & Credentials",
    text:
      "Design secure authentication patterns for agents interacting with applications, APIs, services and enterprise resources.",
  },
  {
    title: "Role & Permission Models",
    text:
      "Translate business responsibilities into explicit permissions that determine which information agents can access and which actions they can perform.",
  },
  {
    title: "Context-Aware Access",
    text:
      "Adapt access decisions according to the agent, user, workflow, resource, action and surrounding business context.",
  },
  {
    title: "Privileged Action Controls",
    text:
      "Introduce additional controls around high-impact activities such as financial actions, system changes, customer updates and sensitive data access.",
  },
  {
    title: "Access Monitoring & Audit",
    text:
      "Maintain visibility into agent access, authorization events and actions so security teams can investigate and review activity.",
  },
];

const lifecycle = [
  {
    title: "Identify",
    text:
      "Establish who each agent is, what responsibility it has and which enterprise environment it belongs to before granting access.",
  },
  {
    title: "Authorize",
    text:
      "Determine what the agent can access and which actions it can perform based on role, context, workflow and business requirements.",
  },
  {
    title: "Monitor",
    text:
      "Continuously observe access patterns, authorization decisions and agent actions so permissions remain aligned as systems evolve.",
  },
];

const questions = [
  {
    q: "What is agent identity and access?",
    a:
      "Agent identity and access is the framework used to establish who an AI agent is, what it is authorized to access and which actions it can perform. It brings identity, authentication, permissions and monitoring into the architecture of enterprise AI systems.",
  },
  {
    q: "Why do AI agents need their own identities?",
    a:
      "Agents can retrieve information, call APIs, update systems and execute workflows. Giving them identifiable identities makes those actions traceable and allows organizations to apply permissions without relying on shared or overly broad credentials.",
  },
  {
    q: "How is agent access different from traditional user access?",
    a:
      "AI agents can operate continuously, interact with multiple systems and take actions programmatically. Their access model therefore needs to consider not only who initiated an activity, but also which agent is acting, what workflow it is executing and what action it is attempting.",
  },
  {
    q: "Can agent identity controls work with existing enterprise systems?",
    a:
      "Yes. Agent identity and access controls can be designed around existing applications, APIs, identity providers and authorization systems so organizations can strengthen AI security without rebuilding their entire enterprise environment.",
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

export default function AgentIdentityAccessPage() {
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

              <SectionLabel light>
                {hero.eyebrow}
              </SectionLabel>

              <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Give Every AI Agent
                <br />
                <span className="text-[#a095ff]">
                  the Right Access.
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
                  Secure Your Agent Workforce
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#architecture"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/15 sm:px-6"
                >
                  Explore Agent Access
                </a>
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
              <div className="relative ml-auto max-w-[330px]">

                <div className="absolute -inset-8 rounded-full bg-[#625eff]/10 blur-3xl" />

                <div className="relative border border-white/10 bg-white/[0.045] p-8 backdrop-blur-sm">

                  <div className="flex h-14 w-14 items-center justify-center border border-[#a095ff]/30 bg-[#a095ff]/10 text-[#a095ff]">
                    <Fingerprint className="h-7 w-7" />
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-7 text-2xl font-bold leading-tight text-white">
                    Every agent should have an identity.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    Secure agentic systems begin with knowing who is
                    acting, what they can access and which actions they
                    are authorized to perform.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-[#a095ff]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a095ff]" />
                    Designed for enterprise AI
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

              <SectionLabel>
                Agent Identity
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                AI agents can
                <br />
                take action.
                <br />
                <span className="text-brand-secondary">
                  They need identity.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">

              <p className="text-base font-semibold leading-relaxed text-brand-primary sm:text-lg">
                Enterprise agents increasingly interact with data,
                applications and business workflows. Access cannot
                depend on broad permissions or shared credentials.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                As agents move beyond simple assistants and begin
                retrieving information, calling APIs, updating systems
                and executing workflows, organizations need to know
                exactly which agent is acting and what it is permitted
                to do.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                AgenticSense helps organizations establish identity,
                authentication and authorization models that connect
                AI agents to enterprise security without creating
                unnecessary friction.
              </p>

              <div className="mt-8 border-l-2 border-brand-secondary/50 pl-5">
                <p className="text-xl font-bold leading-relaxed text-brand-primary sm:text-2xl">
                  Identity is not an add-on to agentic AI.
                  <span className="text-brand-secondary">
                    {" "}
                    It is part of the architecture.
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          IDENTITY PRINCIPLES
      ====================================================================== */}

      <section
        id="architecture"
        className="border-b border-brand-primary/10 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">

              <SectionLabel>
                Identity Architecture
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Access should be
                <br />
                based on
                <br />
                <span className="text-brand-secondary">
                  explicit trust.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Secure agentic systems combine clear identity,
                constrained permissions and human accountability.
              </p>
            </div>

            <div className="lg:col-span-8">

              <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">

                {identityPrinciples.map((item) => {
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

            <SectionLabel light>
              Identity Without Excessive Privilege
            </SectionLabel>

            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.25rem]">
              Give agents enough access
              <br />
              <span className="text-[#a095ff]">
                to do their job. No more.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
              Agentic systems should not inherit unrestricted access simply
              because they are connected to an enterprise environment.
              AgenticSense helps organizations establish permission models
              that reflect the actual responsibilities of each agent.
            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Identity
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Know which agent is acting and maintain a clear identity
                throughout its workflow.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Permission
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Define what information and actions are available to
                each agent.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Accountability
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Keep agent activity traceable so important actions can
                be reviewed and governed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          ACCESS AREAS
      ====================================================================== */}

      <section className="border-b border-brand-primary/10 bg-slate-50/60 py-16 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">

              <SectionLabel>
                Access Controls
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Identity that
                <br />
                connects
                <br />
                <span className="text-brand-secondary">
                  with enterprise security.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Agent access needs to work with the systems,
                applications and security practices already operating
                across the organization.
              </p>

              <div className="mt-8 h-px w-16 bg-brand-secondary/60" />

              <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-brand-primary">
                The objective is simple:
                <span className="text-brand-secondary">
                  {" "}
                  make secure access part of normal agent operation.
                </span>
              </p>
            </div>

            <div className="lg:col-span-7">

              <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">

                {accessAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group py-7 ${
                      index < accessAreas.length - 2
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

            <SectionLabel>
              Agent Access Lifecycle
            </SectionLabel>

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Identity follows
              <br />
              the life of the
              <span className="text-brand-secondary">
                {" "}
                agent.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-primary/65 sm:text-base">
              Access should not be defined once and forgotten. As agents
              change responsibilities, workflows and connected systems,
              their identities and permissions need to remain aligned.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 lg:grid-cols-3">

            {lifecycle.map((item, index) => (
              <div
                key={item.title}
                className={`relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 ${
                  index !== lifecycle.length - 1
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
              Secure agent access should evolve with the workflow,
              <span className="text-brand-secondary">
                {" "}
                not remain static.
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

              <SectionLabel light>
                Agent Access Architecture
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Connect identity
                <br />
                to every
                <br />
                <span className="text-[#a095ff]">
                  important action.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                Agent identity becomes powerful when it connects
                directly with authentication, authorization and
                operational controls.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Verified agent identity
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Least-privilege authorization
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white">
                <Check className="h-4 w-4 text-[#a095ff]" />
                Continuous access oversight
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
                      <ShieldCheck className="h-10 w-10" />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Identity
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        Who is acting
                      </p>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Authorization
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        What can happen
                      </p>
                    </div>

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Authentication
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        Verify the agent
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs font-bold text-white">
                        Audit
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        What the agent did
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

              <SectionLabel>
                Business Outcomes
              </SectionLabel>

              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Move from connected
                <br />
                agents to
                <br />
                <span className="text-brand-secondary">
                  controlled execution.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm leading-relaxed text-brand-primary/65 sm:text-base">
                Strong agent identity and access controls give security,
                technology and business teams greater confidence as
                autonomous systems become more deeply integrated.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-y border-brand-primary/10 md:grid-cols-3">

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Reduced Exposure
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Reduce unnecessary permissions and limit the blast
                radius of agent actions.
              </p>

            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Clear Visibility
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Give security teams a clearer view of which agents
                are accessing systems and performing actions.
              </p>

            </div>

            <div className="border-t border-brand-primary/10 px-6 py-8 sm:px-8 sm:py-10 md:border-l md:border-t-0 lg:px-10">

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Safer Scale
              </p>

              <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                Expand agent deployments without giving every
                intelligent system unrestricted enterprise access.
              </p>

            </div>

          </div>

          <div className="mt-10 flex flex-col gap-6 border-b border-brand-primary/10 pb-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-lg font-bold leading-relaxed tracking-tight sm:text-xl">
              The goal is not to stop agents from acting.
              <span className="text-brand-secondary">
                {" "}
                It is to make every action appropriately controlled.
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

              <SectionLabel>
                Frequently Asked Questions
              </SectionLabel>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a3556] sm:text-4xl">
                Common questions
              </h2>

              <div className="space-y-4">

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

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                    <KeyRound className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-[#1a3556] sm:text-2xl">
                    Ready to secure your AI agent workforce?
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Tell us which agents you are deploying, what systems
                    they need to access and which actions they need to
                    perform. We will help map the identity, authorization
                    and oversight model required for secure enterprise
                    execution.
                  </p>

                  <div className="mt-6 space-y-3">

                    <Link
                      href="/contact"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-r from-[#171c50] via-[#2a308c] to-[#5956f6] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95"
                    >
                      Discuss Your Agent Architecture
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 px-6 py-3.5 text-sm font-semibold text-[#1a3556] transition-all hover:bg-slate-100"
                    >
                      View All Services
                    </Link>

                  </div>

                  <div className="mt-7 grid grid-cols-1 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Agent identities
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Least privilege
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Authorization
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CircleCheck className="h-4 w-4 text-brand-secondary" />
                      Auditability
                    </div>

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