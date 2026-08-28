"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    slug: "leadsense-b2b-automation",
    category: "AI Agent Development",
    industry: "Technology",
    erp: "LeadSense",
    num: "01",
    title: "Multi-Agent Sales AI Cuts Manual Email Work by 60%",
    image: "/caseStudies/leadsensee.webp",
    imgPos: "object-center",
    summary:
      "As inbound and outbound email volume grew, a B2B technology company deployed LeadSense Powered by AgenticSense to automate its entire sales communication workflow and free reps to focus on qualified prospects.",
    challenge:
      "A 15-person sales team handling 2,000+ prospects a month was buried in manual outreach, slow inbound responses, inconsistent follow-ups, and scattered campaign tooling with limited visibility into performance.",
    solution:
      "LeadSense deployed multiple AI agents for inbound engagement, outbound outreach, campaign management, and support each with its own inbox, knowledge base, scheduler, and guidelines. Agents personalize outreach, run follow-up sequences, qualify prospects, and escalate complex threads to humans.",
    results: [
      { metric: "60%", label: "Manual email work ↓" },
      { metric: "24/7", label: "AI engagement" },
      { metric: "Hrs→Mins", label: "Response time" },
      { metric: "2,000+", label: "Leads/month" },
    ],
    quote:
      "Our team now spends more time building relationships and less time managing email workflows.",
    author: "Sales Operations Manager",
  },
  {
    id: 2,
    slug: "aljh-bank-reconciliation",
    category: "Finance Automation",
    industry: "Healthcare",
    erp: "Oracle",
    num: "02",
    title: "Month-End Bank Reconciliation Done in 55 Seconds",
    image: "/caseStudies/Alj.webp",
    imgPos: "object-center",
    summary:
      "Abdul Latif Jameel Health spent days each month manually matching bank transactions against Oracle. The ALJH AI Agent now reads the statement, matches by rule, flags exceptions, and delivers a CFO-ready report in under a minute.",
    challenge:
      "Every month, the finance team manually matched dozens of transactions across three bank accounts main, payroll, and supplier payments against Oracle records, line by line. The entire monthly close waited on this single manual step.",
    solution:
      "The ALJH AI Agent reads the bank statement automatically, retrieves Oracle records, matches every transaction with accountant-friendly rules, flags exceptions with plain explanations, suggests journal entries for bank fees, verifies balances, and produces a signable, fully audited report.",
    results: [
      { metric: "~55s", label: "Full reconciliation" },
      { metric: "79%", label: "Auto-match rate" },
      { metric: "3", label: "Bank accounts" },
      { metric: "0%", label: "Hallucination" },
    ],
    quote:
      "Every match is backed by a clear rule and a confidence score so the CFO can sign off with confidence.",
    author: "Automated Monthly Close · ALJH",
  },
  {
    id: 3,
    slug: "brc-grn-gl-automation",
    category: "Finance Automation",
    industry: "Manufacturing",
    erp: "SAP B1",
    num: "03",
    title: "Six AP & GL Workflows Fully Automated in SAP Business One",
    image: "/caseStudies/brccasestudies.jpg",
    imgPos: "object-center",
    summary:
      "BRC deployed a single AI automation platform to handle six high-volume, document-heavy financial workflows — GRN invoicing, landed cost reconciliation, bulk GL entries, and monthly salary postings — all posting directly into SAP Business One with no manual approval gate.",
    challenge:
      "Each posting workflow required cross-referencing multiple documents by hand — commercial invoices, GRNs, customs Bayan declarations, bank statements, and routing tables — across six very different processes. At this volume, manual processing meant slower postings, inconsistent handling, and a real risk of data-entry error reaching SAP directly.",
    solution:
      "One automation platform, six modules, each posting directly to SAP B1 through the same validate-then-post discipline: Upload → Parse → Reconcile / Validate → Build Payload → Post to SAP → Verify. Every module has its own sequential validation chain, duplicate detection, and a live dashboard surfacing every failure with reason, step, and timestamp.",
    results: [
      { metric: "6", label: "SAP modules automated" },
      { metric: "0%", label: "Amount tolerance" },
      { metric: "0", label: "Silent failures" },
      { metric: "100%", label: "Duplicate detection" },
    ],
    quote:
      "The system handles postings we used to process manually across multiple staff members. Validation catches every mismatch before it reaches SAP.",
    author: "Finance Operations Lead — BRC",
  },
  {
    id: 4,
    slug: "linksense-outreach",
    category: "AI Agent Development",
    industry: "Technology",
    erp: "LinkSense",
    num: "04",
    title: "Always-On LinkedIn Outreach Delivering 3× More Profile Views",
    image: "/caseStudies/linksense.webp",
    imgPos: "object-center",
    summary:
      "LinkSense turns LinkedIn prospecting into a structured, AI-assisted workflow — coordinating discovery, personalized messaging, follow-up, and pipeline engagement as one continuous process, so sellers spend their time on real conversations, not repetitive admin.",
    challenge:
      "LinkedIn prospecting at scale is a collection of isolated manual actions — search, connect, message, remind, repeat. Follow-ups get missed, messaging stays generic, and sales representatives spend more time on administrative tasks than actual selling.",
    solution:
      "LinkSense coordinates the full outreach cycle — AI-assisted audience targeting, personalized connection requests and opening messages, structured follow-up sequences, and conversation management — running continuously so sellers focus on replies and buying signals, not inbox management.",
    results: [
      { metric: "3×", label: "Profile views" },
      { metric: "24/7", label: "AI outreach" },
      { metric: "↑", label: "Pipeline strength" },
      { metric: "↓", label: "Manual prospecting" },
    ],
    quote: "Automate connections. Engage smarter. Close more deals.",
    author: "LinkSense · Powered by AgenticSense",
  },
];

const categories = [
  "All",
  "Finance Automation",
  "AI Agent Development",
  "Process Automation",
  "Regulatory Compliance",
  "Document Processing",
  "AI Strategy",
  "Data Intelligence",
];
const industries = [
  "All Industries",
  "Technology",
  "Professional Services",
  "Manufacturing",
  "Healthcare",
  "Real Estate",
  "Enterprise",
  "E-Commerce",
  "Financial Services",
];

// ── Modal ─────────────────────────────────────────────────────────────────
function CaseModal({ cs, onClose }) {
  if (!cs) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl"
        >
          <div
            className="h-[3px]"
            style={{ background: "linear-gradient(90deg, #1a194d, #625eff)" }}
          />
          <div className="p-8 border-b border-slate-100 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-[#625eff]/10 text-[#625eff] border border-[#625eff]/20">
                  {cs.category}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {cs.industry} · {cs.erp}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1a194d] leading-snug tracking-tight max-w-xl">
                {cs.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 hover:bg-slate-100 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a194d"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="p-8 space-y-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
                Results
              </p>
              <div className="grid grid-cols-4 gap-3">
                {cs.results.map((r, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-4 bg-[#1a194d]"
                  >
                    <span className="text-xl font-bold text-white tracking-tight">
                      {r.metric}
                    </span>
                    <span className="text-[9px] text-white/50 mt-1.5 uppercase tracking-wider font-bold leading-tight">
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">
                The Challenge
              </p>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                {cs.challenge}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">
                Our Solution
              </p>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                {cs.solution}
              </p>
            </div>
            <div className="bg-slate-50 border-l-[3px] border-[#625eff] p-6">
              <p className="text-[15px] text-[#1a194d] italic leading-relaxed font-medium">
                "{cs.quote}"
              </p>
              <p className="text-[11px] text-[#625eff] mt-3 font-bold uppercase tracking-wider">
                {" "}
                {cs.author}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Link href="/proposal">
                <button className="flex items-center gap-2 px-6 py-2.5 font-semibold text-[14px] bg-gradient-to-r from-[#1a194d] to-[#625eff] text-white hover:shadow-lg hover:shadow-[#625eff]/20 transition-all duration-300">
                  Start a similar project
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </Link>
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-[14px] font-semibold text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-[#1a194d] transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────
function CaseCard({ cs, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.07,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="group"
    >
      <Link href={`/case-studies/${cs.slug}`} className="block">
        {/* ── Image container ── */}
        <div
          className="relative w-full overflow-hidden bg-[#1a194d] border border-slate-200 transition-shadow duration-300 group-hover:shadow-[0_18px_50px_-18px_rgba(26,25,77,0.35)]"
          style={{ aspectRatio: "16/10" }}
        >
          <img
            src={cs.image}
            alt={cs.title}
            className={`
              w-full h-full object-cover object-top
              transition-transform duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)]
              group-hover:scale-[1.04]
            `}
          />

          {/* dark scrim — stronger at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a194d]/90 via-[#1a194d]/20 to-[#1a194d]/10" />

          {/* case number chip */}
          <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1">
            Case {cs.num}
          </span>

          {/* hero metric + hover arrow */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[26px] font-black text-white leading-none tracking-tight drop-shadow-sm">
                {cs.results[0].metric}
              </span>
              <span className="text-[9px] text-white/70 uppercase tracking-wider font-bold">
                {cs.results[0].label}
              </span>
            </div>
            <span className="flex items-center justify-center w-9 h-9 bg-[#625eff] text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>

        {/* ── Text content ── */}
        <div className="pt-5">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#625eff]">
              {cs.category}
            </span>
            <span className="text-slate-300 text-[10px]">·</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {cs.erp}
            </span>
          </div>

          <h3 className="text-[17px] sm:text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#1a194d] mb-4 line-clamp-2">
            {cs.title}
          </h3>

          {/* animated underline divider */}
          <div className="relative h-px w-full bg-slate-200 overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-full bg-[#625eff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </div>

          <div className="flex items-center justify-between pt-3.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {cs.industry}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1a194d] group-hover:gap-2.5 transition-all duration-200">
              View case study
              <svg
                className="text-[#625eff] transition-transform group-hover:translate-x-0.5"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All Industries");

  const filtered = caseStudies.filter((cs) => {
    const catMatch = activeCategory === "All" || cs.category === activeCategory;
    const indMatch =
      activeIndustry === "All Industries" || cs.industry === activeIndustry;
    return catMatch && indMatch;
  });

  return (
    <main className="bg-white font-sans min-h-screen">
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a194d] pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#625eff]/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="typo-h1 text-white mb-5">
              Real deployments.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #625eff, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Measurable outcomes.
              </span>
            </h1>
            <p className="typo-body text-white/60 max-w-xl">
              Every case study here is a live production system not a proof of
              concept. Real enterprise environments, real ERPs, real results.
            </p>
            <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-white/10">
              {[
                { v: "10+", l: "Production deployments" },
                { v: "6", l: "ERP platforms" },
                { v: "8", l: "Industries served" },
                { v: "100%", l: "In live production" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {s.v}
                  </span>
                  <span className="typo-label text-white/40 mt-1">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GRID ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="flex items-center justify-between mb-10">
          <p className="text-[13px] text-slate-400 font-medium">
            Showing{" "}
            <span className="text-[#1a194d] font-bold">{filtered.length}</span>{" "}
            case {filtered.length === 1 ? "study" : "studies"}
          </p>
          {(activeCategory !== "All" ||
            activeIndustry !== "All Industries") && (
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveIndustry("All Industries");
              }}
              className="text-[12px] font-semibold text-[#625eff] hover:underline uppercase tracking-wider"
            >
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-400 text-lg">
              No case studies match your filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveIndustry("All Industries");
              }}
              className="mt-4 text-[#625eff] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            <AnimatePresence>
              {filtered.map((cs, i) => (
                <CaseCard key={cs.id} cs={cs} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a194d] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="typo-label text-[#625eff] block mb-4">
            Work with us
          </span>
          <h2 className="typo-h2 text-white mb-4">
            Ready to be the next case study?
          </h2>
          <p className="typo-body text-white/50 max-w-lg mx-auto mb-8">
            Tell us your challenge. We will scope a production-ready AI solution
            and give you a clear roadmap no vague promises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/proposal">
              <button className="flex items-center gap-2 px-8 py-3 font-semibold text-[15px] bg-gradient-to-r from-[#625eff] to-[#8b5cf6] text-white hover:shadow-xl hover:shadow-[#625eff]/30 transition-all duration-300">
                Request a Proposal
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 font-semibold text-[15px] border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all duration-200">
                Talk to us first
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
