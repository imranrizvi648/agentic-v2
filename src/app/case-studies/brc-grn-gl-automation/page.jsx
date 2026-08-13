"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────
   Case Study 02 · BRC GRN Invoice & GL Automation System
   Detail page. Place at: app/case-studies/brc-grn-gl-automation/page.jsx
   Clean report-style section headers (matches the LeadSense page).
──────────────────────────────────────────────────────────────────────── */

const NAVY = "#1a194d";
const INDIGO = "#625eff";

const snapshot = [
  { k: "Client", v: "BRC" },
  { k: "ERP Platform", v: "SAP Business One (SAP B1)" },
  { k: "Region", v: "Saudi Arabia" },
  { k: "Modules Automated", v: "GRN Invoicing · Landed Cost · Mobile GL · Transport GL · Electricity GL · MPS" },
  { k: "Automation Model", v: "Fully autonomous agent  no manual approval gate" },
  { k: "Governance", v: "Zero-percent amount tolerance, role-based access, full audit trail" },
];

const challenges = [
  "Vendor invoices manually matched line-by-line against open GRNs before AP posting",
  "Three customs brokers with different invoice structures, reconciled against SAP Landed Cost by hand",
  "Bulk telecom payments reconciled between SNB bank statements and per-subscriber Excel sheets",
  "Transport and electricity bills manually routed to correct GL accounts and cost centers",
  "Manpower salary invoices manually calculated and grouped per branch, division, and cost center",
  "No centralized visibility when a document failed to process correctly",
];

const phases = [
  { n: "01", title: "Workflow Discovery", body: "Each of the six posting workflows was mapped end-to-end  source documents, SAP data dependencies, validation rules, and failure modes  to define exactly what the automation platform needed to enforce." },
  { n: "02", title: "Module Architecture", body: "Six dedicated modules were built on a shared validate-then-post pipeline: GRN Invoice, Landed Cost (Sultan, Excellence, Alwatanya), Mobile GL, Transport GL, Electricity GL, and MPS Salary Invoicing." },
  { n: "03", title: "Validation Engine Build", body: "Each module received its own sequential validation chain. For GRN Invoicing alone, five hard-fail checks run before an AP Invoice is ever created  including zero-percent amount tolerance and quantity cap enforcement." },
  { n: "04", title: "SAP Integration & Governance", body: "Direct SAP B1 posting was wired for all six modules, with duplicate detection, role-based access control, posting date rules, and a live operations dashboard surfacing every failure with reason, step, and timestamp." },
];

const solution = [
  {
    title: "GRN Invoice Automation (A)",
    items: [
      "Reads vendor PDF invoices automatically",
      "Fetches matching SAP GRN records",
      "Runs 5 sequential validation checks",
      "Duplicate check on CardCode + invoice number",
      "Posts AP Invoice directly to SAP B1",
    ],
    note: "No invoice is posted until it clears all five hard-fail checks  vendor code, invoice validity, line matching, quantity cap, and amount tolerance.",
  },
  {
    title: "Landed Cost Processing (B)",
    items: [
      "Broker-specific logic for Sultan, Excellence, Alwatanya",
      "Reconciles against SAP Landed Cost document",
      "Calculates customs duty, freight, and incidentals",
      "Posts up to four AP Invoices per import",
      "Auto-reconciled amounts, no manual entry",
    ],
    note: "Each customs broker has a different invoice structure; the module handles all three formats within a single reconciliation pipeline.",
  },
  {
    title: "GL Bulk Automation (C.1–C.3)",
    items: [
      "Mobile/Telecom: SNB bank PDF vs. Excel allocation",
      "Posts one balanced Journal Entry per transaction",
      "Transport: Najd delivery note extraction & SAP PI",
      "Electricity: SEC meter routing to GL, cost center, division",
      "Keyed on unique Bank Transaction ID to block duplicates",
    ],
    note: "Three separate GL workflows  mobile, transport, electricity  unified under one bulk posting discipline with automated reconciliation and duplicate protection.",
  },
  {
    title: "MPS Manpower Salary Invoicing (C.4)",
    items: [
      "Parses multi-sheet monthly salary workbooks",
      "Groups costs by Division and Cost Center",
      "Posts one Service Purchase Invoice per branch",
      "Handles multiple manpower providers",
      "Automated monthly cycle  no manual calculation",
    ],
    note: "What previously required manual per-branch calculation across multiple providers now runs in one consistent posting cycle every month.",
  },
];

const metrics = [
  { metric: "6", label: "SAP modules automated end to end" },
  { metric: "0%", label: "Tolerance on invoice-to-GRN amount matching" },
  { metric: "0", label: "Silent failures  every failed job is surfaced" },
];

const impactChecks = [
  "100% of modules with built-in duplicate detection",
  "5 sequential checks before every GRN posting",
  "Full audit trail on every posting, every module",
  "Fully autonomous, SAP-native posting with no manual approval gate",
];

const beforeAfter = [
  { area: "AP Invoicing", before: "Manual GRN-to-invoice matching", after: "5-check automated validation, then posting" },
  { area: "Landed Cost", before: "Manual reconciliation per broker", after: "Broker-specific logic, auto-reconciled to SAP LC" },
  { area: "Bulk GL Entries", before: "Manual bank-to-Excel reconciliation", after: "Automated 4-check reconciliation, balanced JE" },
  { area: "Salary Invoicing", before: "Manual per-branch calculation", after: "One posting per branch, grouped automatically" },
  { area: "Duplicate Postings", before: "Relied on manual diligence", after: "Blocked automatically on every module" },
  { area: "Failed Documents", before: "Could go unnoticed", after: "Surfaced on dashboard with reason and step" },
  { area: "Posting Date", before: "Manually judged", after: "DocDate = max(GRN date, Invoice date), enforced by rule" },
];

const capabilities = [
  "Fully Autonomous SAP B1 Posting",
  "GRN Invoice Validation (5-Check Chain)",
  "Multi-Broker Landed Cost Reconciliation",
  "Bulk GL Journal Entry Automation",
  "Manpower Salary Invoice Processing",
  "Zero-Percent Amount Tolerance Enforcement",
  "Duplicate Detection on Every Module",
  "Live Operations Failure Dashboard",
  "Role-Based Access Control",
];

const validationRows = [
  { n: "1", check: "Vendor Code", rule: "PDF CardCode must exactly equal GRN CardCode", outcome: "Hard fail  no posting" },
  { n: "2", check: "Invoice Number Validity", rule: "Must come from supplier's commercial invoice only", outcome: "Hard fail  wrong source" },
  { n: "3", check: "All GRN Lines Matched", rule: "Every open GRN line paired to an invoice line by unit price", outcome: "Hard fail  unmatched line" },
  { n: "4", check: "Quantity Cap", rule: "Invoice quantity ≤ GRN remaining open quantity", outcome: "Hard fail  quantity exceeds receipt" },
  { n: "5", check: "Amount Tolerance", rule: "Invoice line total must match GRN line total within tolerance", outcome: "Hard fail  amount exceeds tolerance" },
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
export default function BRCCaseStudy() {
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
            <span className="text-white/40">Case 02</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-[10px] font-black tracking-[0.16em] px-3 py-1.5 text-[#625eff] border border-[#625eff]/30 bg-[#625eff]/10">
                AI Agent Development
              </span>
              <span className="text-[10px] font-black tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">
                Finance Automation
              </span>
              <span className="text-[10px] font-black tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">
                SAP Business One
              </span>
            </div>

            <h1 className="typo-h1 text-white mb-6">
              Fully autonomous AP & GL posting{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #625eff, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                with zero-tolerance validation in SAP B1.
              </span>
            </h1>

            <p className="typo-body text-white/60 max-w-2xl">
              BRC deployed a single AI automation platform to handle six high-volume, document-heavy financial
              workflows  GRN invoicing, landed cost reconciliation, bulk GL entries, and monthly salary postings
               all posting directly into SAP Business One with no manual approval gate.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-10 border-t border-white/10">
              {[
                { v: "6", l: "Modules Automated" },
                { v: "0%", l: "Amount Tolerance" },
                { v: "0", l: "Silent Failures" },
                { v: "SAP B1", l: "Native Posting" },
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
        <SectionHead n="01" kicker="Overview" title="Six high-volume workflows, all processed by hand" />
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 space-y-5">
            <p className="typo-body text-slate-600">
              BRC runs a high volume of recurring financial postings in SAP Business One: vendor invoices matched
              against Goods Receipt Notes, import Landed Cost documents from three different customs brokers, bulk
              journal entries for mobile, transport, and electricity payments, and monthly salary invoices from
              manpower service providers across every branch.
            </p>
            <p className="typo-body text-slate-600">
              We built a single automation platform {" "}
              <span className="font-semibold" style={{ color: NAVY }}>
                the BRC GRN &amp; GL Automation System
              </span>{" "}
               that reads source documents (PDFs, Excel workbooks, bank statements), validates them against
              SAP's own records, and posts directly to SAP B1. No module posts anything until it has passed a
              strict, computationally-enforced set of checks.
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
                  <p className="text-[13px] font-bold text-white leading-tight">System Snapshot</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                    BRC · SAP Business One
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
          Each posting workflow required cross-referencing multiple documents by hand  commercial invoices,
          GRNs, customs Bayan declarations, bank statements, and routing tables  across six very different
          processes:
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
          At this volume, manual processing meant slower postings, inconsistent handling between staff, and a
          real risk of data-entry error reaching SAP directly.
        </p>
      </Section>

      {/* ── 03 · IMPLEMENTATION ───────────────────────────────────────────── */}
      <Section>
        <SectionHead n="03" kicker="How We Deployed" title="Four structured phases, minimal disruption" />
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
      </Section>

      {/* ── 04 · THE SOLUTION ─────────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="04" kicker="What We Built" title="The Solution" />
        <p className="typo-body text-slate-600 max-w-3xl mb-10">
          One automation platform, six modules, each posting directly to SAP Business One through the same
          validate-then-post discipline: Upload → Parse → Reconcile / Validate → Build Payload → Post to SAP →
          Verify.
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

      {/* ── 05 · VALIDATION IN PRACTICE ───────────────────────────────────── */}
      <Section>
        <SectionHead n="05" kicker="Under the Hood" title="Validation in Practice  GRN Invoicing" />
        <p className="typo-body text-slate-600 max-w-3xl mb-8">
          The GRN Invoice module alone runs five sequential checks before an AP Invoice is ever created. Any
          single failure is a hard stop  the document is blocked, not posted incorrectly:
        </p>
        <div className="border border-slate-200 bg-white">
          <div className="hidden md:grid grid-cols-[0.3fr_0.9fr_1.8fr_1fr]" style={{ background: NAVY }}>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">#</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50 border-l border-white/10">Check</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50 border-l border-white/10">Rule</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#a78bfa] border-l border-white/10">Fail Outcome</div>
          </div>
          {validationRows.map((r, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[0.3fr_0.9fr_1.8fr_1fr] border-t border-slate-100">
              <div
                className="px-5 py-4 text-[13px] font-black flex items-center justify-center md:justify-start"
                style={{ color: INDIGO }}
              >
                {r.n}
              </div>
              <div
                className="px-5 py-4 text-[13px] font-bold leading-snug md:border-l border-slate-100"
                style={{ color: NAVY }}
              >
                {r.check}
              </div>
              <div className="px-5 py-4 text-[13.5px] text-slate-500 md:border-l border-slate-100 leading-relaxed">
                {r.rule}
              </div>
              <div className="px-5 py-4 text-[12.5px] font-semibold md:border-l border-slate-100 text-red-500">
                {r.outcome}
              </div>
            </div>
          ))}
        </div>
        <p className="typo-body font-medium mt-8 max-w-3xl" style={{ color: NAVY }}>
          Wrong extractions cannot become wrong postings  a bad vendor code, amount, or quantity fails
          validation instead of posting incorrectly.
        </p>
      </Section>

      {/* ── 06 · OPERATIONAL IMPACT ───────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="06" kicker="Results" title="Governance at a Glance" />
        <p className="typo-body text-slate-600 max-w-3xl mb-10">
          The platform's reliability comes from its governance design, not from trusting the AI's extraction
          blindly. Every module is built to the same standard:
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
          Governance figures reflect the platform's enforcement configuration and design constraints  not
          statistical estimates.
        </p>
      </Section>

      {/* ── 07 · BEFORE VS AFTER ──────────────────────────────────────────── */}
      <Section>
        <SectionHead n="07" kicker="The Shift" title="Before vs After" />
        <div className="border border-slate-200 bg-white">
          <div className="hidden md:grid grid-cols-[0.9fr_1.4fr_1.4fr]" style={{ background: NAVY }}>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">Area</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50 border-l border-white/10">
              Before Automation
            </div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#a78bfa] border-l border-white/10">
              After Automation
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

      {/* ── 08 · BUSINESS IMPACT ──────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="08" kicker="Why It Mattered" title="Business Impact" />
        <div className="space-y-5 max-w-7xl mx-auto">
          <p className="typo-body text-slate-600">
            Six previously manual, document-heavy workflows now run through one consistent pipeline 
            reducing the time and staff attention needed to keep AP, landed cost, bulk GL, and salary postings
            current in SAP.
          </p>
          <p className="typo-body text-slate-600">
            Because validation is strict and computational, an AI extraction error becomes a blocked posting,
            not a wrong one in SAP  the finance team resubmits a corrected document instead of chasing down
            a bad entry after the fact.
          </p>
          <p className="typo-body text-slate-600">
            The system is built to scale: new brokers, branches, or bill types extend the same
            validate-then-post pattern rather than requiring a new manual process.
          </p>
        </div>
      </Section>

      {/* ── 09 · WHY IT'S RELIABLE ────────────────────────────────────────── */}
      <Section>
        <SectionHead n="09" kicker="The Platform" title="Why It's Reliable" />
        <p className="typo-body text-slate-600 max-w-3xl mb-8">
          The platform is designed as a fully autonomous agent  but reliability comes from strict, auditable
          controls, not from trust in the AI alone. Core capabilities include:
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

      {/* ── CLIENT FEEDBACK ───────────────────────────────────────────────── */}
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
                "The system handles postings we used to process manually across multiple staff members. Validation
                catches every mismatch before it reaches SAP, so our finance team spends time reviewing
                exceptions  not chasing down incorrect entries."
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-slate-200" />
                <p className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: INDIGO }}>
                  Finance Operations Lead  BRC
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
          <h2 className="typo-h2 text-white mb-4">Ready to automate your financial operations?</h2>
          <p className="typo-body text-white/50 max-w-lg mx-auto mb-8">
            Deploy intelligent AI agents that post directly to SAP Business One  with strict validation
            controls, duplicate protection, and full audit trails built in. Let's scope your deployment.
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