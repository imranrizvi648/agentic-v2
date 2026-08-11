"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    id: 1, slug: "leadsense-b2b-automation", category: "AI Agent Development", industry: "Technology", erp: "LeadSense",
    num: "01",
    title: "Multi-Agent Sales AI Cuts Manual Email Work by 60%",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    summary: "As inbound and outbound email volume grew, a B2B technology company deployed LeadSense Powered by AgenticSense to automate its entire sales communication workflow and free reps to focus on qualified prospects.",
    challenge: "A 15-person sales team handling 2,000+ prospects a month was buried in manual outreach, slow inbound responses, inconsistent follow-ups, and scattered campaign tooling with limited visibility into performance.",
    solution: "LeadSense deployed multiple AI agents for inbound engagement, outbound outreach, campaign management, and support each with its own inbox, knowledge base, scheduler, and guidelines. Agents personalize outreach, run follow-up sequences, qualify prospects, and escalate complex threads to humans.",
    results: [{ metric: "60%", label: "Manual email work ↓" }, { metric: "24/7", label: "AI engagement" }, { metric: "Hrs→Mins", label: "Response time" }, { metric: "2,000+", label: "Leads/month" }],
    quote: "Our team now spends more time building relationships and less time managing email workflows.",
    author: "Sales Operations Manager",
  },
  {
    id: 2, slug: "aljh-bank-reconciliation", category: "Finance Automation", industry: "Healthcare", erp: "Oracle",
    num: "02",
    title: "Month-End Bank Reconciliation Done in 55 Seconds",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    summary: "Abdul Latif Jameel Health spent days each month manually matching bank transactions against Oracle. The ALJH AI Agent now reads the statement, matches by rule, flags exceptions, and delivers a CFO-ready report in under a minute.",
    challenge: "Every month, the finance team manually matched dozens of transactions across three bank accounts main, payroll, and supplier payments against Oracle records, line by line. The entire monthly close waited on this single manual step.",
    solution: "The ALJH AI Agent reads the bank statement automatically, retrieves Oracle records, matches every transaction with accountant-friendly rules, flags exceptions with plain explanations, suggests journal entries for bank fees, verifies balances, and produces a signable, fully audited report.",
    results: [{ metric: "~55s", label: "Full reconciliation" }, { metric: "79%", label: "Auto-match rate" }, { metric: "3", label: "Bank accounts" }, { metric: "0%", label: "Hallucination" }],
    quote: "Every match is backed by a clear rule and a confidence score so the CFO can sign off with confidence.",
    author: "Automated Monthly Close · ALJH",
  },
  {
    id: 3, slug: "document-approval-automation", category: "Process Automation", industry: "Professional Services", erp: "NetSuite",
    num: "03",
    title: "Approval Turnaround Reduced 70% Zero Manual Touchpoints",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop",
    summary: "A large professional services firm had approval workflows spanning email, SharePoint, and NetSuite all manual. AgenticSense built agentic workflows that route, approve, and post documents end-to-end.",
    challenge: "Approval cycles averaged 6-8 days. Documents bounced between systems manually. No audit trail, no SLA visibility, constant chasing.",
    solution: "Agentic workflows connect NetSuite, SharePoint, and Outlook via official APIs. Documents are classified, routed to the correct approver, reminders sent automatically, and approved records posted back to NetSuite.",
    results: [{ metric: "70%", label: "Faster approvals" }, { metric: "6→1.8d", label: "Turnaround" }, { metric: "100%", label: "Audit trail" }, { metric: "0", label: "Manual routing" }],
    quote: "Agentic workflows that route approvals, process documents and update the systems of record end to end, with full traceability.",
    author: "Head of Digital Operations",
  },
  // {
  //   id: 4, slug: "fbr-invoice-automation", category: "Regulatory Compliance", industry: "Manufacturing", erp: "Custom ERP",
  //   num: "04",
  //   title: "100% FBR-Compliant Filing with Zero Manual Overhead",
  //   image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
  //   summary: "A Pakistani manufacturing company faced mounting FBR compliance risk. AgenticSense deployed InvoiceSense an agentic billing system that handles OCR extraction, STRN validation, and FBR filing automatically.",
  //   challenge: "The accounts team manually filed 800+ invoices monthly with FBR, spending 40+ hours per month. Error rates were high and penalty risk was growing.",
  //   solution: "InvoiceSense deployed as an overlay on the existing ERP. OCR extracts invoice data, validates STRN against FBR's live API, generates compliant QR codes, and submits all in under 90 seconds per invoice.",
  //   results: [{ metric: "100%", label: "FBR compliance" }, { metric: "40h→2h", label: "Filing time" }, { metric: "< 90s", label: "Per invoice" }, { metric: "0", label: "Penalty incidents" }],
  //   quote: "We went from dreading FBR deadlines to not thinking about them at all. The agent just handles it.",
  //   author: "Finance Manager",
  // },
  // {
  //   id: 5, slug: "healthcare-document-processing", category: "Document Processing", industry: "Healthcare", erp: "Oracle Health",
  //   num: "05",
  //   title: "5,000 Patient Documents Processed Per Day",
  //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  //   summary: "A regional hospital network needed to digitize decades of paper patient records into Oracle Health. AgenticSense deployed an IDP pipeline handling classification, extraction, and EHR posting at scale.",
  //   challenge: "250,000+ historical paper records needed digitization with 99%+ accuracy. Manual entry was projected to take 4 years. HIPAA compliance was non-negotiable.",
  //   solution: "A multi-agent IDP system classifies document types, extracts structured data, validates against patient master data, and posts to Oracle Health via HL7 FHIR with full encryption.",
  //   results: [{ metric: "5,000+", label: "Docs/day" }, { metric: "99.2%", label: "Accuracy" }, { metric: "4y→6mo", label: "Timeline" }, { metric: "100%", label: "HIPAA compliant" }],
  //   quote: "The accuracy and speed exceeded what we thought was possible with AI at this scale.",
  //   author: "Chief Information Officer",
  // },
  // {
  //   id: 6, slug: "real-estate-lead-automation", category: "AI Agent Development", industry: "Real Estate", erp: "Salesforce",
  //   num: "06",
  //   title: "Real Estate Group Qualifies 3× More Leads with AI Agent",
  //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  //   summary: "A UAE-based real estate group was losing high-intent leads due to slow follow-up. LeadSense responds within 2 minutes and qualifies leads through intelligent conversation in Arabic and English.",
  //   challenge: "Average lead response time was 4+ hours. Sales reps spent 60% of their time on unqualified leads. High-intent buyers were going to competitors who responded faster.",
  //   solution: "LeadSense integrated with Salesforce CRM and property portal. The agent responds within 2 minutes, qualifies through conversation, scores by intent, and hands off hot leads with full context.",
  //   results: [{ metric: "2 min", label: "Response time" }, { metric: "3×", label: "Qualified leads" }, { metric: "60%", label: "Time recovered" }, { metric: "38%", label: "Lead-to-viewing" }],
  //   quote: "Our sales team now only talks to people who are actually ready to buy. The agent handles everything else.",
  //   author: "Sales Director",
  // },
  // {
  //   id: 7, slug: "erp-hr-automation", category: "Process Automation", industry: "Enterprise", erp: "SAP B1 + Odoo",
  //   num: "07",
  //   title: "HR Onboarding Automated Across 3 Legal Entities",
  //   image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  //   summary: "A multi-entity enterprise group ran HR across SAP B1 and Odoo with no integration. AgenticSense built an agentic HR workflow that syncs employee data and automates onboarding.",
  //   challenge: "New hire onboarding required 47 manual steps across 3 systems. Payroll prep took 2 days each cycle. HR had no single view of headcount.",
  //   solution: "An agentic HR orchestrator syncs employee master data between SAP B1 and Odoo in real-time. Onboarding triggers automated workflows: IT provisioning, document collection, and payroll input preparation.",
  //   results: [{ metric: "47→6", label: "Onboarding steps" }, { metric: "2d→3h", label: "Payroll prep" }, { metric: "100%", label: "Data sync" }, { metric: "Zero", label: "Duplicate records" }],
  //   quote: "Onboarding used to take us a week. Now a new hire is fully set up in the systems before their first day.",
  //   author: "Group HR Director",
  // },
  // {
  //   id: 8, slug: "ecommerce-inventory-agent", category: "AI Agent Development", industry: "E-Commerce", erp: "NetSuite + Shopify",
  //   num: "08",
  //   title: "E-Commerce Eliminates Stockouts with Predictive Inventory Agent",
  //   image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=800&q=80",
  //   summary: "A multi-channel e-commerce operator was losing $200K+ annually to stockouts and overstock. An AI agent monitors sell-through rates and triggers purchase orders automatically.",
  //   challenge: "Inventory decisions were based on gut feel and spreadsheets. Stockouts on top SKUs during peak season cost significant revenue.",
  //   solution: "An inventory intelligence agent monitors Shopify sell-through rates, NetSuite stock levels, and supplier lead times in real-time. When reorder points are hit, the agent drafts and routes POs for one-click approval.",
  //   results: [{ metric: "94%", label: "Stockout eliminated" }, { metric: "$200K+", label: "Revenue recovered" }, { metric: "23%", label: "Carrying cost ↓" }, { metric: "Live", label: "Stock visibility" }],
  //   quote: "We stopped making inventory decisions based on spreadsheets from last week. The agent just handles it.",
  //   author: "Head of Operations",
  // },
  // {
  //   id: 9, slug: "ai-strategy-consulting", category: "AI Strategy", industry: "Financial Services", erp: "Multiple ERPs",
  //   num: "09",
  //   title: "Regional Bank Gets 18-Month AI Roadmap, First Agent Live in 6 Weeks",
  //   image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  //   summary: "A regional bank wanted to adopt AI but didn't know where to start. AgenticSense ran a 3-week readiness assessment, delivered a prioritized roadmap, then built the first agent in 6 weeks.",
  //   challenge: "Leadership had AI ambitions but no clarity on where to start. Multiple vendors were pitching solutions the bank didn't fully understand.",
  //   solution: "We ran a structured AI readiness assessment: mapped systems, interviewed 22 stakeholders, identified 14 automation opportunities, and scored them by ROI and buildability.",
  //   results: [{ metric: "18mo", label: "Roadmap delivered" }, { metric: "6 wks", label: "First agent live" }, { metric: "14", label: "Opportunities" }, { metric: "$2.4M", label: "Projected ROI" }],
  //   quote: "For the first time we had a clear picture of what AI could actually do for us not vendor promises, but a real plan.",
  //   author: "Chief Digital Officer",
  // },
  // {
  //   id: 10, slug: "supply-chain-analytics", category: "Data Intelligence", industry: "Manufacturing", erp: "Microsoft Fabric + SAP",
  //   num: "10",
  //   title: "Real-Time Supply Chain Intelligence on Microsoft Fabric",
  //   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  //   summary: "A mid-size manufacturer had data scattered across SAP, Excel, and 3 supplier portals. AgenticSense built a unified intelligence layer with AI-powered anomaly detection.",
  //   challenge: "Leadership had no real-time supply chain visibility. Monthly reporting took a week to compile. Disruptions were discovered late.",
  //   solution: "We unified data from SAP, supplier portals, and production systems into Microsoft Fabric. An anomaly detection agent monitors KPIs and alerts on deviations before they become crises.",
  //   results: [{ metric: "Live", label: "Supply visibility" }, { metric: "1wk→2h", label: "Report time" }, { metric: "73%", label: "Earlier detection" }, { metric: "5→1", label: "Data sources" }],
  //   quote: "We used to find out about supply chain problems after the damage was done. Now we know before they happen.",
  //   author: "VP of Operations",
  // },
];

const categories = ["All", "Finance Automation", "AI Agent Development", "Process Automation", "Regulatory Compliance", "Document Processing", "AI Strategy", "Data Intelligence"];
const industries  = ["All Industries", "Technology", "Professional Services", "Manufacturing", "Healthcare", "Real Estate", "Enterprise", "E-Commerce", "Financial Services"];

// ── Modal ─────────────────────────────────────────────────────────────────
function CaseModal({ cs, onClose }) {
  if (!cs) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={e => e.stopPropagation()}
          className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl"
        >
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #1a194d, #625eff)" }} />
          <div className="p-8 border-b border-slate-100 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-[#625eff]/10 text-[#625eff] border border-[#625eff]/20">{cs.category}</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{cs.industry} · {cs.erp}</span>
              </div>
              <h2 className="text-xl font-bold text-[#1a194d] leading-snug tracking-tight max-w-xl">{cs.title}</h2>
            </div>
            <button onClick={onClose} className="flex-shrink-0 p-2 hover:bg-slate-100 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a194d" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div className="p-8 space-y-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">Results</p>
              <div className="grid grid-cols-4 gap-3">
                {cs.results.map((r, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 bg-[#1a194d]">
                    <span className="text-xl font-bold text-white tracking-tight">{r.metric}</span>
                    <span className="text-[9px] text-white/50 mt-1.5 uppercase tracking-wider font-bold leading-tight">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">The Challenge</p>
              <p className="text-[14px] text-slate-600 leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">Our Solution</p>
              <p className="text-[14px] text-slate-600 leading-relaxed">{cs.solution}</p>
            </div>
            <div className="bg-slate-50 border-l-[3px] border-[#625eff] p-6">
              <p className="text-[15px] text-[#1a194d] italic leading-relaxed font-medium">"{cs.quote}"</p>
              <p className="text-[11px] text-[#625eff] mt-3 font-bold uppercase tracking-wider"> {cs.author}</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Link href="/proposal">
                <button className="flex items-center gap-2 px-6 py-2.5 font-semibold text-[14px] bg-gradient-to-r from-[#1a194d] to-[#625eff] text-white hover:shadow-lg hover:shadow-[#625eff]/20 transition-all duration-300">
                  Start a similar project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </Link>
              <button onClick={onClose} className="px-6 py-2.5 text-[14px] font-semibold text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-[#1a194d] transition-all duration-200">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Card (redesigned same fonts/colors, cleaner modern layout) ────────────
function CaseCard({ cs, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.19, 1, 0.22, 1] }}
      className="group"
    >
      <Link href={`/case-studies/${cs.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border border-slate-200
          transition-shadow duration-300 group-hover:shadow-[0_18px_50px_-18px_rgba(26,25,77,0.35)]">
          <img
            src={cs.image}
            alt={cs.title}
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
          />
          {/* scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a194d]/85 via-[#1a194d]/10 to-transparent" />

          {/* case number chip */}
          <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1">
            Case {cs.num}
          </span>

          {/* hero metric + arrow on image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[26px] font-black text-white leading-none tracking-tight">{cs.results[0].metric}</span>
              <span className="text-[9px] text-white/70 uppercase tracking-wider font-bold">{cs.results[0].label}</span>
            </div>
            <span className="flex items-center justify-center w-9 h-9 bg-[#625eff] text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="pt-5">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#625eff]">{cs.category}</span>
            <span className="text-slate-300 text-[10px]">·</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{cs.erp}</span>
          </div>

          <h3 className="text-[17px] sm:text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#1a194d] mb-4 line-clamp-2">
            {cs.title}
          </h3>

          {/* animated divider */}
          <div className="relative h-px w-full bg-slate-200 overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-full bg-[#625eff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </div>

          <div className="flex items-center justify-between pt-3.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{cs.industry}</span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1a194d] group-hover:gap-2.5 transition-all duration-200">
              View case study
              <svg className="text-[#625eff] transition-transform group-hover:translate-x-0.5" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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
    const indMatch = activeIndustry === "All Industries" || cs.industry === activeIndustry;
    return catMatch && indMatch;
  });

  return (
    <main className="bg-white font-sans min-h-screen">

      {/* ── HERO (unchanged) ────────────────────────────────────────────── */}
      <section className="bg-[#1a194d] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#625eff]/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
           
            <h1 className="typo-h1 text-white mb-5">
              Real deployments.<br />
              <span style={{ background: "linear-gradient(135deg, #625eff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Measurable outcomes.
              </span>
            </h1>
            <p className="typo-body text-white/60 max-w-xl">
              Every case study here is a live production system not a proof of concept. Real enterprise environments, real ERPs, real results.
            </p>
            <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-white/10">
              {[{ v: "10+", l: "Production deployments" }, { v: "6", l: "ERP platforms" }, { v: "8", l: "Industries served" }, { v: "100%", l: "In live production" }].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tight">{s.v}</span>
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
            Showing <span className="text-[#1a194d] font-bold">{filtered.length}</span> case {filtered.length === 1 ? "study" : "studies"}
          </p>
          {(activeCategory !== "All" || activeIndustry !== "All Industries") && (
            <button onClick={() => { setActiveCategory("All"); setActiveIndustry("All Industries"); }}
              className="text-[12px] font-semibold text-[#625eff] hover:underline uppercase tracking-wider">
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-400 text-lg">No case studies match your filters.</p>
            <button onClick={() => { setActiveCategory("All"); setActiveIndustry("All Industries"); }}
              className="mt-4 text-[#625eff] font-semibold hover:underline">Clear filters</button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            <AnimatePresence>
              {filtered.map((cs, i) => (
                <CaseCard key={cs.id} cs={cs} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* ── CTA (unchanged) ─────────────────────────────────────────────── */}
      <section className="bg-[#1a194d] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="typo-label text-[#625eff] block mb-4">Work with us</span>
          <h2 className="typo-h2 text-white mb-4">Ready to be the next case study?</h2>
          <p className="typo-body text-white/50 max-w-lg mx-auto mb-8">
            Tell us your challenge. We will scope a production-ready AI solution and give you a clear roadmap no vague promises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/proposal">
              <button className="flex items-center gap-2 px-8 py-3 font-semibold text-[15px] bg-gradient-to-r from-[#625eff] to-[#8b5cf6] text-white hover:shadow-xl hover:shadow-[#625eff]/30 transition-all duration-300">
                Request a Proposal
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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