"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────
   Case Study 02 · The ALJH AI Agent Powered by AgenticSense
   Automated bank reconciliation. Same theme (navy #1a194d + indigo #625eff,
   typo-* classes). Cleaner, report-style section headers (no side rail).
   Place at: app/case-studies/aljh-bank-reconciliation/page.jsx
──────────────────────────────────────────────────────────────────────── */

const NAVY = "#1a194d";
const INDIGO = "#625eff";

const snapshot = [
  { k: "Client", v: "Abdul Latif Jameel Health (ALJH)" },
  { k: "Parent Group", v: "Abdul Latif Jameel Group" },
  { k: "Industry", v: "Healthcare" },
  { k: "Region", v: "Saudi Arabia" },
  { k: "Accounting System", v: "Oracle" },
  { k: "Scope", v: "3 Bank Accounts Main, Payroll, Supplier Payments" },
  { k: "Process Automated", v: "Monthly Bank Reconciliation" },
];

const challenges = [
  "Every transaction matched by hand, line by line, across spreadsheets and Oracle screens",
  "Uncertainty on individual transactionswas this the right customer payment, the right salary batch?",
  "Unexplained charges (e.g., small bank fees) requiring manual investigation",
  "Internal transfers between accounts needing manual identification",
  "The entire monthly close waiting on this single, manual step",
  "Any small error meaning a fresh manual search to find it",
];

const steps = [
  { n: "01", title: "Statement Received & Uploaded", body: "The bank sends the monthly statement, which is uploaded into the client's Oracle system.", tag: "Currently manual automating this handoff is the next phase." },
  { n: "02", title: "Automated Reading", body: "The system reads the bank statement automatically." },
  { n: "03", title: "Oracle Record Retrieval", body: "It fetches every relevant record from the client's Oracle accounting system." },
  { n: "04", title: "Rule-Based Matching", body: "It matches each bank transaction to its Oracle counterpart using clear, accountant-friendly rules." },
  { n: "05", title: "Exception Flagging", body: "Anything that doesn't match is flagged, with a plain explanation of why." },
  { n: "06", title: "Journal Entry Suggestions", body: "For bank fees, the system suggests a journal entry to record them properly." },
  { n: "07", title: "Balance Verification", body: "Closing balances are checked to make sure everything adds up." },
  { n: "08", title: "CFO-Ready Report", body: "A clean, signable report is produced for the CFO with a full audit trail behind it." },
];

const results = [
  { metric: "~55 sec", label: "To complete a full month's reconciliation" },
  { metric: "79%", label: "Of transactions matched automatically" },
  { metric: "3", label: "Bank accounts reconciled in a single run" },
  { metric: "0%", label: "Chance of the AI hallucinating a number" },
  { metric: "100%", label: "Of matches backed by a rule + confidence score" },
  { metric: "Full", label: "Audit trail for every transaction, every run" },
];

const beforeAfter = [
  { area: "Time to Reconcile", before: "Days of manual work each month", after: "~55 seconds, automatically" },
  { area: "Matching Method", before: "Manual, line-by-line comparison", after: "Rule-based automatic matching" },
  { area: "Unmatched Items", before: "Found late, investigated manually", after: "Flagged instantly with an explanation" },
  { area: "Bank Fees", before: "Manually researched and booked", after: "Journal entry automatically suggested" },
  { area: "Balance Checks", before: "Manually verified", after: "Automatically verified every run" },
  { area: "Reporting", before: "Assembled by hand for the CFO", after: "Clean, CFO-ready report generated automatically" },
  { area: "Traceability", before: "Limited, scattered across spreadsheets", after: "Full audit trail on every transaction" },
];

const reliability = [
  "Automated bank statement reading",
  "Live Oracle accounting system integration",
  "Rule-based, accountant-friendly matching logic",
  "Exception flagging with plain-language explanations",
  "Automatic bank-fee journal entry suggestions",
  "Closing balance verification",
  "Confidence score on every matched transaction",
  "Full audit trail for every transaction, every run",
  "Zero hallucinated figures  every number is rule-derived",
];

/* ── helpers ─────────────────────────────────────────────────────────────── */
const Check = ({ c = INDIGO, size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const Arrow = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
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

/* Clean, report-style section header number chip + kicker + title */
function SectionHead({ n, kicker, title }) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-7 h-7 text-[11px] font-black text-white" style={{ background: NAVY }}>{n}</span>
        <span className="typo-label" style={{ color: INDIGO }}>{kicker}</span>
      </div>
      <h2 className="typo-h2 max-w-3xl leading-[1.08]" style={{ color: NAVY }}>{title}</h2>
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
export default function ALJHCaseStudy() {
  return (
    <main className="bg-white font-sans min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: NAVY }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#625eff]/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-[11px] font-bold uppercase tracking-[0.14em]">
            <Link href="/case-studies" className="text-white/40 hover:text-[#625eff] transition-colors flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
              All Case Studies
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/40">Case 02</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.16em] px-3 py-1.5 text-[#625eff] border border-[#625eff]/30 bg-[#625eff]/10">Finance Automation</span>
              <span className="text-[10px] font-black uppercase tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">Oracle</span>
              <span className="text-[10px] font-black uppercase tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">Healthcare · KSA</span>
            </div>

            <h1 className="typo-h1 text-white mb-6">
              A month of bank reconciliation,{" "}
              <span style={{ background: "linear-gradient(135deg, #625eff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                done in 55 seconds.
              </span>
            </h1>

            <p className="typo-body text-white/60 max-w-2xl">
              Abdul Latif Jameel Health spent days every month manually matching bank transactions against Oracle.
              The ALJH AI Agent now reads the statement, matches by clear rules, flags exceptions, and delivers a
              CFO-ready report end to end in under a minute.
            </p>

            {/* quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-10 border-t border-white/10">
              {[
                { v: "~55s", l: "Full Reconciliation" },
                { v: "79%", l: "Auto-Match Rate" },
                { v: "3", l: "Bank Accounts" },
                { v: "0%", l: "Hallucinated Figures" },
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
        <SectionHead n="01" kicker="Overview" title="Days of manual matching, every single month" />
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 space-y-5">
            <p className="typo-body text-slate-600">
              A large healthcare company in Saudi Arabia had a problem: every month, their finance team spent days
              manually matching every transaction on their bank statements against their Oracle accounting records.
              It was slow, repetitive, and stressful and the entire monthly close waited on it.
            </p>
            <p className="typo-body text-slate-600">
              We built a system that does the same job in about one minute. It reads the bank statement automatically,
              matches transactions using clear rules any accountant would follow, flags the handful that need human
              attention, and produces a clean report the CFO can sign off onevery month, forever.
            </p>
            <p className="typo-body text-slate-600">
              The client, <span className="font-semibold" style={{ color: NAVY }}>Abdul Latif Jameel Health (ALJH)</span>,
              is part of the Abdul Latif Jameel Group a well-known name across the Middle East spanning automotive
              distribution, energy, health, and education.
            </p>
          </div>

          {/* Snapshot card */}
          <div className="lg:col-span-2">
            <div className="border border-slate-200 lg:sticky lg:top-24">
              <div className="px-5 py-4 flex items-center gap-3" style={{ background: NAVY }}>
                <span className="flex items-center justify-center w-8 h-8 text-white" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                </span>
                <div>
                  <p className="text-[13px] font-bold text-white leading-tight">Client Snapshot</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Healthcare · Saudi Arabia</p>
                </div>
              </div>
              <dl>
                {snapshot.map((row, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 px-5 py-3 border-t border-slate-100">
                    <dt className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 shrink-0 pt-0.5">{row.k}</dt>
                    <dd className="text-[12.5px] font-semibold text-right leading-snug" style={{ color: NAVY }}>{row.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="px-5 py-3 border-t border-slate-100 text-center">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">Powered by AgenticSense</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 02 · THE CHALLENGE ────────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="02" kicker="The Problem" title="The Challenge" />
        <p className="typo-body text-slate-600 max-w-3xl mb-8">
          At the end of every month, the finance team had to confirm that every amount moving through three bank
          accounts main, payroll, and supplier payments was correctly recorded in Oracle. Each account carried
          dozens of transactions: customer payments, salary batches, supplier settlements, and bank fees.
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {challenges.map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="flex items-start gap-3 bg-white p-5 h-full">
                <span className="flex items-center justify-center w-6 h-6 shrink-0 text-[11px] font-black text-white mt-0.5" style={{ background: NAVY }}>{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[14px] text-slate-600 leading-relaxed">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="typo-body font-medium mt-8 max-w-3xl" style={{ color: NAVY }}>
          This wasn't work anyone enjoyed and it wasn't work anyone should be doing by hand in 2026.
        </p>
      </Section>

      {/* ── 03 · HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section>
        <SectionHead n="03" kicker="How It Works" title="Eight structured steps, one minute end-to-end" />
        <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.05}>
              <div className="bg-white p-6 h-full flex gap-4">
                <span className="text-[15px] font-black tabular-nums shrink-0" style={{ color: INDIGO }}>{s.n}</span>
                <div>
                  <h3 className="text-[15px] font-bold mb-1.5 tracking-tight" style={{ color: NAVY }}>{s.title}</h3>
                  <p className="text-[13.5px] text-slate-600 leading-relaxed">{s.body}</p>
                  {s.tag && (
                    <p className="mt-2.5 inline-block text-[11px] font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200">{s.tag}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 55s callout */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex items-center gap-4 p-5 border border-[#625eff]/25 bg-[#625eff]/[0.05]">
            <span className="flex items-center justify-center w-11 h-11 shrink-0 text-white" style={{ background: INDIGO }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
            </span>
            <p className="text-[14px] leading-relaxed" style={{ color: NAVY }}>
              <span className="font-bold">Steps 3 through 8</span> reading the statement, matching against Oracle, flagging exceptions,
              and producing the final report run in <span className="font-bold" style={{ color: INDIGO }}>about 55 seconds</span>, end to end.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── 04 · RESULTS ──────────────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="04" kicker="Results" title="Numbers from a live production run" />
        <p className="typo-body text-slate-600 max-w-3xl mb-10">
          These figures come from an actual production run of the system in January 2026 not a demo or a projection.
          All numbers are real and can be substantiated on request.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {results.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="flex flex-col justify-center p-7 h-full" style={{ background: NAVY }}>
                <span className="text-[2rem] sm:text-[2.4rem] font-black text-white tracking-tight leading-none tabular-nums">{r.metric}</span>
                <span className="text-[11.5px] text-white/55 mt-3 leading-snug font-medium">{r.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 05 · BEFORE VS AFTER ──────────────────────────────────────────── */}
      <Section>
        <SectionHead n="05" kicker="The Shift" title="Before vs After" />
        <div className="border border-slate-200 bg-white">
          <div className="hidden md:grid grid-cols-[0.9fr_1.4fr_1.4fr]" style={{ background: NAVY }}>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">Area</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50 border-l border-white/10">Before the Agent</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#a78bfa] border-l border-white/10">After the Agent</div>
          </div>
          {beforeAfter.map((r, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr_1.4fr] border-t border-slate-100">
              <div className="px-5 py-4 text-[12px] font-bold uppercase tracking-wider bg-slate-50/70 md:bg-transparent" style={{ color: NAVY }}>{r.area}</div>
              <div className="px-5 py-4 text-[13.5px] text-slate-500 flex items-start gap-2 md:border-l border-slate-100">
                <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0 pt-0.5">Before </span>{r.before}
              </div>
              <div className="px-5 py-4 text-[13.5px] font-medium flex items-start gap-2.5 md:border-l border-slate-100" style={{ color: NAVY }}>
                <span className="shrink-0 mt-0.5"><Check size={14} /></span>{r.after}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 06 · BUSINESS IMPACT ──────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="06" kicker="Why It Mattered" title="Business Impact" />
        <div className="space-y-5 max-w-7xl mx-auto">
          <p className="typo-body text-slate-600">
            By automating the most repetitive part of the monthly close, the finance team gets back days of work every
            single month time that now goes toward analysis and decision-making instead of line-by-line matching.
          </p>
          <p className="typo-body text-slate-600">
            Because every match is backed by a clear rule and a confidence score, the CFO can sign off with confidence,
            and any exception comes with a plain-language explanation instead of a mystery to chase down.
          </p>
          <p className="typo-body text-slate-600">
            The system is designed to be extended: today it covers three accounts and monthly reconciliation, with
            statement-upload automation planned as the next phase.
          </p>
        </div>
      </Section>

      {/* ── 07 · WHY IT'S RELIABLE ────────────────────────────────────────── */}
      <Section>
        <SectionHead n="07" kicker="Trust By Design" title="Why it's reliable" />
        <p className="typo-body text-slate-600 max-w-3xl mb-8">
          The agent is built to be trustworthy first and fast second. Core capabilities include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {reliability.map((c, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-5">
              <span className="shrink-0 mt-0.5"><Check size={14} /></span>
              <span className="text-[13.5px] font-medium leading-snug" style={{ color: NAVY }}>{c}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CLOSING TAGLINE ───────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Reveal>
            <span className="typo-label block mb-5" style={{ color: INDIGO }}>The ALJH AI Agent</span>
            <h2 className="typo-h2 leading-[1.1]" style={{ color: NAVY }}>
              Days of work.<br className="sm:hidden" /> Done in a minute. Every month.
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8 text-[12px] font-bold uppercase tracking-[0.14em] text-slate-400">
              <span>55-Second Reconciliation</span>
              <span className="hidden sm:inline text-slate-200">·</span>
              <span>79% Auto-Match</span>
              <span className="hidden sm:inline text-slate-200">·</span>
              <span>Full Audit Trail</span>
              <span className="hidden sm:inline text-slate-200">·</span>
              <span>Zero Hallucination</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20" style={{ background: NAVY }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="typo-label block mb-4" style={{ color: INDIGO }}>Powered by AgenticSense</span>
          <h2 className="typo-h2 text-white mb-4">Automate your monthly close.</h2>
          <p className="typo-body text-white/50 max-w-lg mx-auto mb-8">
            If reconciliation, matching, or financial reporting is eating your team's time, we'll scope a
            production-ready agent  rule-based, auditable, and CFO-ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/proposal">
              <button className="flex items-center gap-2 px-8 py-3 font-semibold text-[15px] text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#625eff]/30"
                style={{ background: "linear-gradient(90deg, #625eff, #8b5cf6)" }}>
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
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/40 hover:text-[#625eff] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
              Back to all case studies
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
