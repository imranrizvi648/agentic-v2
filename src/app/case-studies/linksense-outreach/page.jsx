"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────
   Case Study 03 · LinkSense  AI-Powered LinkedIn Outreach
   Detail page. Place at: app/case-studies/linksense-linkedin-outreach/page.jsx
   Clean report-style section headers (matches LeadSense & BRC pages).
──────────────────────────────────────────────────────────────────────── */

const NAVY = "#1a194d";
const INDIGO = "#625eff";

const snapshot = [
  { k: "Solution", v: "LinkSense  AI-Powered LinkedIn Outreach" },
  { k: "Powered By", v: "AgenticSense" },
  { k: "Category", v: "Sales Development & LinkedIn Lead Generation" },
  { k: "Headline Outcomes", v: "3× more profile views · 24/7 AI-powered outreach" },
  { k: "Contact", v: "info@agenticsense.co" },
];

const challenges = [
  "Generic outreach fails to create meaningful conversations because messages lack context and personalization",
  "Follow-ups are easy to miss, creating inconsistent engagement and lost opportunities",
  "Scaling outbound activity usually means adding more manual work, more people, or both",
  "Teams need a repeatable process that can operate continuously while keeping human sellers focused on qualified conversations",
];

const phases = [
  {
    n: "01",
    title: "Identify",
    body: "Build focused prospect lists around the right audience, role, industry, or account criteria  replacing ad hoc manual research with a structured targeting workflow.",
  },
  {
    n: "02",
    title: "Personalize",
    body: "Use AI-assisted messaging to create relevant outreach rather than one-size-fits-all copy, so every connection request and first message reflects the prospect's context.",
  },
  {
    n: "03",
    title: "Follow Up",
    body: "Keep prospects engaged with structured follow-up sequences so opportunities do not go cold between touches  running continuously without manual reminders.",
  },
  {
    n: "04",
    title: "Convert",
    body: "Surface replies and buying signals so sellers can focus on real conversations and move qualified opportunities forward instead of managing inbox noise.",
  },
];

const solution = [
  {
    title: "AI-Assisted Prospecting",
    items: [
      "Build targeted prospect lists by role, industry, or account",
      "Audience criteria defined once, applied continuously",
      "Eliminates repetitive manual search and list building",
      "Focuses outreach on the right buyers from the start",
      "Scales discovery without scaling headcount",
    ],
    note: "Structured targeting replaces ad hoc manual research, giving the outreach engine a consistent, high-quality prospect pool to work from.",
  },
  {
    title: "Personalized Outreach Messaging",
    items: [
      "AI-assisted connection requests and opening messages",
      "Outreach reflects prospect context, not generic templates",
      "Relevant messaging that creates real conversations",
      "Consistent tone aligned to brand and seller voice",
      "Reduces time spent writing and rewriting outreach copy",
    ],
    note: "The core value is not simply sending more messages  it is making each message worth receiving, so prospects are more likely to respond.",
  },
  {
    title: "Structured Follow-Up Sequences",
    items: [
      "Automated sequence-based follow-up after initial contact",
      "No opportunity goes cold due to missed follow-through",
      "Follow-up discipline maintained across large prospect lists",
      "Sequences run continuously, even outside working hours",
      "Consistent engagement at every stage of the outreach cycle",
    ],
    note: "Maintaining follow-up discipline across hundreds of prospects simultaneously is where most manual outreach breaks down  sequences solve this by design.",
  },
  {
    title: "Pipeline & Conversation Management",
    items: [
      "Surfaces replies and genuine buying signals",
      "Sellers focused on live conversations, not inbox management",
      "Repeatable always-on prospecting engine",
      "Improves top-of-funnel visibility and engagement",
      "More seller time for qualifying, nurturing, and closing",
    ],
    note: "LinkSense handles the mechanics of outreach so sales representatives can spend their time where human judgment matters most  in real buying conversations.",
  },
];

const metrics = [
  { metric: "3×", label: "More profile views per campaign" },
  { metric: "24/7", label: "Always-on AI-powered outreach" },
  { metric: "↑", label: "Replies, conversations & pipeline strength" },
];

const impactChecks = [
  "Creates a repeatable outbound motion that can run continuously",
  "Improves visibility and engagement at the top of the funnel",
  "Reduces repetitive prospecting work for sales representatives",
  "Helps teams maintain follow-up discipline across larger prospect lists",
  "Gives sellers more time to qualify, nurture, and close opportunities",
];

const beforeAfter = [
  { area: "Prospecting", before: "Manual search and list building", after: "Structured, AI-assisted targeting" },
  { area: "Messaging", before: "Generic templates", after: "Personalized AI-assisted outreach" },
  { area: "Follow-up", before: "Manual reminders", after: "Consistent sequence-based engagement" },
  { area: "Seller Time", before: "High administrative effort", after: "More time for live sales conversations" },
  { area: "Pipeline", before: "Inconsistent outbound volume", after: "Repeatable always-on prospecting engine" },
];

const capabilities = [
  "AI-Assisted Prospecting & Audience Targeting",
  "Personalized Outreach Messaging",
  "Structured Follow-Up Sequences",
  "Conversation & Reply Management",
  "Always-On Outreach Automation",
  "Top-of-Funnel Engagement Tracking",
  "Scalable Without Headcount Growth",
  "LinkedIn-Native Workflow",
  "Sales Pipeline Strengthening",
];

/* ── helpers ─────────────────────────────────────────────────────────────── */
const Check = ({ c = INDIGO, size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Arrow = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({ n, kicker, title }) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="inline-flex items-center justify-center w-7 h-7 text-[11px] font-black text-white"
          style={{ background: NAVY }}
        >
          {n}
        </span>
        <span className="typo-label" style={{ color: INDIGO }}>
          {kicker}
        </span>
      </div>
      <h2 className="typo-h2 max-w-3xl leading-[1.08]" style={{ color: NAVY }}>
        {title}
      </h2>
    </Reveal>
  );
}

function Section({ children, muted = false }) {
  return (
    <section className={`border-t border-slate-100 ${muted ? "bg-slate-50/60" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">{children}</div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function LinkSenseCaseStudy() {
  return (
    <main className="bg-white font-sans min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: NAVY }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#625eff]/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-[11px] font-bold uppercase tracking-[0.14em]">
            <Link
              href="/case-studies"
              className="text-white/40 hover:text-[#625eff] transition-colors flex items-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              All Case Studies
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/40">Case 03</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-[10px] font-black tracking-[0.16em] px-3 py-1.5 text-[#625eff] border border-[#625eff]/30 bg-[#625eff]/10">
                AI Agent Development
              </span>
              <span className="text-[10px] font-black tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">
                LinkedIn Outreach
              </span>
              <span className="text-[10px] font-black tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">
                LinkSense
              </span>
            </div>

            <h1 className="typo-h1 text-white mb-6">
              Scaling LinkedIn outreach with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #625eff, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-powered prospecting and always-on engagement.
              </span>
            </h1>

            <p className="typo-body text-white/60 max-w-2xl">
              LinkSense turns LinkedIn prospecting into a structured, AI-assisted workflow  coordinating
              discovery, personalized messaging, follow-up, and pipeline engagement as one continuous
              process, so sellers spend their time on real conversations, not repetitive admin.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-10 border-t border-white/10">
              {[
                { v: "3×", l: "Profile Views" },
                { v: "24/7", l: "AI Outreach" },
                { v: "↑", l: "Pipeline Strength" },
                { v: "↓", l: "Manual Prospecting" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white tracking-tight tabular-nums">{s.v}</div>
                  <div className="typo-label text-white/40 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 · OVERVIEW + SNAPSHOT ──────────────────────────────────────── */}
      <Section>
        <SectionHead n="01" kicker="Overview" title="LinkedIn prospecting built on repetition, not results" />
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 space-y-5">
            <p className="typo-body text-slate-600">
              Most LinkedIn prospecting is a collection of isolated manual actions  search, connect, message,
              remind, repeat. At any meaningful volume, the process becomes unmanageable: follow-ups get missed,
              messaging stays generic, and sales representatives spend more time on administrative tasks than
              actual selling.
            </p>
            <p className="typo-body text-slate-600">
              <span className="font-semibold" style={{ color: NAVY }}>LinkSense Powered by AgenticSense</span>{" "}
              is an AI-powered LinkedIn outreach platform designed to help sales teams identify prospects,
              personalize outreach, manage follow-ups, and keep conversations moving  without relying on
              repetitive manual prospecting.
            </p>
          </div>

          {/* Snapshot card */}
          <div className="lg:col-span-2">
            <div className="border border-slate-200 lg:sticky lg:top-24">
              <div className="px-5 py-4 flex items-center gap-3" style={{ background: NAVY }}>
                <span
                  className="flex items-center justify-center w-8 h-8 text-white"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-bold text-white leading-tight">At a Glance</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                    LinkSense · LinkedIn Outreach
                  </p>
                </div>
              </div>
              <dl>
                {snapshot.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-4 px-5 py-3 border-t border-slate-100"
                  >
                    <dt className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 shrink-0 pt-0.5">
                      {row.k}
                    </dt>
                    <dd
                      className="text-[12.5px] font-semibold text-right leading-snug"
                      style={{ color: NAVY }}
                    >
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="px-5 py-3 border-t border-slate-100 text-center">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  Powered by AgenticSense
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 02 · THE CHALLENGE ────────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="02" kicker="The Problem" title="The Challenge" />
        <p className="typo-body text-slate-600 max-w-3xl mb-8">
          Before an AI-assisted workflow, LinkedIn prospecting runs into the same recurring problems regardless
          of team size or industry. The issues compound as outreach volume grows:
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {challenges.map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="flex items-start gap-3 bg-white p-5 h-full">
                <span
                  className="flex items-center justify-center w-6 h-6 shrink-0 text-[11px] font-black text-white mt-0.5"
                  style={{ background: NAVY }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] text-slate-600 leading-relaxed">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="typo-body font-medium mt-8 max-w-3xl" style={{ color: NAVY }}>
          Scaling outbound the traditional way means scaling the problem  more manual work, more missed
          follow-ups, and less time for the conversations that actually close deals.
        </p>
      </Section>

      {/* ── 03 · HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section>
        <SectionHead n="03" kicker="The Workflow" title="One outreach workflow. Multiple sales outcomes." />
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200 hidden sm:block" />
          <div className="space-y-8">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="flex gap-5 sm:gap-6">
                  <div className="relative z-10 shrink-0">
                    <span
                      className="flex items-center justify-center w-8 h-8 text-[12px] font-black text-white"
                      style={{ background: INDIGO }}
                    >
                      {p.n}
                    </span>
                  </div>
                  <div className="pb-2">
                    <h3 className="text-[17px] font-bold mb-2 tracking-tight" style={{ color: NAVY }}>
                      {p.title}
                    </h3>
                    <p className="text-[14px] text-slate-600 leading-relaxed max-w-2xl">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 p-6 border border-slate-200 bg-slate-50/60 max-w-3xl">
            <p className="text-[14px] text-slate-600 leading-relaxed italic">
              "The core value is not simply sending more messages. It is creating a consistent outbound system
              that gives sellers more opportunities to have relevant conversations while reducing the repetitive
              work surrounding prospecting."
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── 04 · THE SOLUTION ─────────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="04" kicker="What We Built" title="The Solution" />
        <p className="typo-body text-slate-600 max-w-3xl mb-10">
          LinkSense coordinates discovery, connection, personalized messaging, follow-up, and pipeline
          engagement as one continuous process  replacing a collection of isolated manual actions with a
          single structured outreach workflow.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {solution.map((s, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <div className="bg-white border border-slate-200 p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[2px] w-5" style={{ background: INDIGO }} />
                  <h3 className="text-[15px] font-bold tracking-tight" style={{ color: NAVY }}>
                    {s.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 mb-5 flex-1">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 shrink-0" style={{ background: INDIGO }} />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="text-[12.5px] text-slate-500 italic leading-relaxed pt-4 border-t border-slate-100">
                  {s.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 05 · RESULTS & BUSINESS IMPACT ───────────────────────────────── */}
      <Section>
        <SectionHead n="05" kicker="Results" title="Results & Business Impact" />
        <p className="typo-body text-slate-600 max-w-3xl mb-10">
          LinkSense delivers measurable improvements in prospect visibility, outreach consistency, and seller
          efficiency. Outcomes reflect campaign performance across active deployments:
        </p>

        <div className="grid sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-10">
          {metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex flex-col justify-center p-8 h-full" style={{ background: NAVY }}>
                <span className="text-[2rem] sm:text-[2.4rem] font-black text-white tracking-tight leading-none">
                  {m.metric}
                </span>
                <span className="text-[11.5px] text-white/55 mt-3 leading-snug font-medium">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {impactChecks.map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0">
                <Check />
              </span>
              <p className="text-[14px] text-slate-600 leading-relaxed">{c}</p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-slate-400 italic mt-8 pt-6 border-t border-slate-100 max-w-3xl">
          Outcome figures represent campaign-level results and should be validated against specific deployment,
          audience, and measurement period.
        </p>
      </Section>

      {/* ── 06 · BEFORE VS AFTER ──────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="06" kicker="The Shift" title="Before vs After" />
        <div className="border border-slate-200 bg-white">
          <div className="hidden md:grid grid-cols-[0.9fr_1.4fr_1.4fr]" style={{ background: NAVY }}>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">Area</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50 border-l border-white/10">
              Traditional Outreach
            </div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#a78bfa] border-l border-white/10">
              With LinkSense
            </div>
          </div>
          {beforeAfter.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr_1.4fr] border-t border-slate-100"
            >
              <div
                className="px-5 py-4 text-[12px] font-bold uppercase tracking-wider bg-slate-50/70 md:bg-transparent"
                style={{ color: NAVY }}
              >
                {r.area}
              </div>
              <div className="px-5 py-4 text-[13.5px] text-slate-500 flex items-start gap-2 md:border-l border-slate-100">
                <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0 pt-0.5">
                  Before{" "}
                </span>
                {r.before}
              </div>
              <div
                className="px-5 py-4 text-[13.5px] font-medium flex items-start gap-2.5 md:border-l border-slate-100"
                style={{ color: NAVY }}
              >
                <span className="shrink-0 mt-0.5">
                  <Check size={14} />
                </span>
                {r.after}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 07 · BUSINESS IMPACT ──────────────────────────────────────────── */}
      <Section>
        <SectionHead n="07" kicker="Why It Mattered" title="Business Impact" />
        <div className="space-y-5 mx-auto max-w-7xl">
          <p className="typo-body text-slate-600">
            LinkSense turns LinkedIn prospecting from a collection of manual, time-intensive actions into a
            structured outbound system that runs continuously  giving sales teams more qualified conversations
            without increasing headcount or administrative burden.
          </p>
          <p className="typo-body text-slate-600">
            By automating the repetitive mechanics of prospecting  targeting, messaging, and follow-up  the
            platform frees sellers to focus on the part of the sales cycle that requires human judgment:
            qualifying interest, building relationships, and closing deals.
          </p>
          <p className="typo-body text-slate-600">
            Leadership gains a consistent, measurable outbound motion they can scale across the team, with
            improved top-of-funnel visibility and a pipeline that does not depend on individual follow-up
            discipline to stay active.
          </p>
        </div>
      </Section>

      {/* ── 08 · WHY LINKSENSE ────────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="08" kicker="The Platform" title="Why LinkSense" />
        <p className="typo-body text-slate-600 max-w-3xl mb-8">
          LinkSense is designed to automate the repetitive mechanics of LinkedIn prospecting without replacing
          the human side of selling. The platform's role is to create more opportunities for salespeople to
          engage where genuine interest appears. Core capabilities include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {capabilities.map((c, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-5">
              <span className="shrink-0">
                <Check size={14} />
              </span>
              <span className="text-[13.5px] font-medium leading-snug" style={{ color: NAVY }}>
                {c}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CLOSING STATEMENT ─────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <svg className="mx-auto mb-6" width="34" height="34" viewBox="0 0 24 24" fill={INDIGO} opacity="0.9">
                <path d="M9.5 4C6 4 3 7 3 10.5c0 3 2 5.5 5 5.5.3 0 .5 0 .8-.1-.6 1.5-2 2.6-3.8 3.1a.5.5 0 0 0 .2 1c3.9-.6 7-3.8 7-8.5V10c0-3.3-.9-6-4.5-6Zm10 0c-3.5 0-6.5 3-6.5 6.5 0 3 2 5.5 5 5.5.3 0 .5 0 .8-.1-.6 1.5-2 2.6-3.8 3.1a.5.5 0 0 0 .2 1c3.9-.6 7-3.8 7-8.5V10c0-3.3-.9-6-4.5-6Z" />
              </svg>
              <blockquote
                className="typo-h2 text-[1.35rem] sm:text-[1.7rem] leading-[1.35] font-medium"
                style={{ color: NAVY }}
              >
                "Automate connections. Engage smarter. Close more deals."
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-slate-200" />
                <p className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: INDIGO }}>
                  LinkSense · Powered by AgenticSense
                </p>
                <span className="h-px w-8 bg-slate-200" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20" style={{ background: NAVY }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="typo-label block mb-4" style={{ color: INDIGO }}>
            Powered by AgenticSense
          </span>
          <h2 className="typo-h2 text-white mb-4">Ready to transform your LinkedIn outreach?</h2>
          <p className="typo-body text-white/50 max-w-lg mx-auto mb-8">
            Deploy AI-powered prospecting agents that automate targeting, personalized outreach, and
            follow-up sequences  so your sales team focuses on conversations that close. Book a free demo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/proposal">
              <button
                className="flex items-center gap-2 px-8 py-3 font-semibold text-[15px] text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#625eff]/30"
                style={{ background: "linear-gradient(90deg, #625eff, #8b5cf6)" }}
              >
                Request a Proposal <Arrow />
              </button>
            </Link>
            <a href="mailto:info@agenticsense.co">
              <button className="px-8 py-3 font-semibold text-[15px] border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all duration-200">
                info@agenticsense.co
              </button>
            </a>
          </div>

          <div className="mt-12 pt-10 border-t border-white/10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/40 hover:text-[#625eff] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to all case studies
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}