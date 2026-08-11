
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────
   Case Study 01 · LeadSense Powered by AgenticSense
   Detail page. Place at: app/case-studies/leadsense-b2b-automation/page.jsx
   Clean report-style section headers (matches the ALJH page).
──────────────────────────────────────────────────────────────────────── */

const NAVY = "#1a194d";
const INDIGO = "#625eff";

const snapshot = [
  { k: "Industry", v: "B2B Technology Services (Anonymized)" },
  { k: "Company Size", v: "80+ Employees" },
  { k: "Sales Team", v: "15 Representatives" },
  { k: "Monthly Lead Volume", v: "2,000+ Prospects" },
  { k: "Primary Channels", v: "Email, Website Inquiries, Referrals" },
  { k: "Region", v: "North America & Middle East" },
];

const challenges = [
  "Manual prospect outreach and follow-ups",
  "Slow response times for inbound inquiries",
  "Inconsistent customer engagement",
  "Difficulty managing multiple outreach campaigns",
  "Limited visibility into campaign performance",
  "Administrative workload reducing selling time",
];

const phases = [
  { n: "01", title: "Workflow Assessment", body: "The existing sales workflow was reviewed to identify repetitive tasks, communication bottlenecks, and opportunities for automation." },
  { n: "02", title: "AI Agent Configuration", body: "Dedicated AI agents were created for inbound engagement, outbound outreach, campaign management, and support each with its own inbox, knowledge base, meeting scheduler, email identity, and response guidelines." },
  { n: "03", title: "Knowledge Base Integration", body: "Company documentation, FAQs, service information, and sales material were integrated into LeadSense so AI agents could provide accurate and consistent responses." },
  { n: "04", title: "Campaign Launch & Optimization", body: "Outbound campaigns were launched while dashboards monitored engagement, reply rates, meeting bookings, and campaign performance for continuous optimization." },
];

const solution = [
  { title: "AI Sales Agents", items: ["Outbound prospecting", "Inbound inquiries", "Lead qualification", "Follow-up emails", "Meeting scheduling"], note: "Each agent maintained conversation history and worked autonomously while following company guidelines." },
  { title: "Intelligent Email Automation", items: ["Personalized outreach emails", "Scheduled follow-up sequences", "Responded to inbound emails", "Qualified prospects", "Escalated complex threads to humans"], note: "This enabled 24/7 engagement while maintaining consistent communication quality." },
  { title: "Campaign Management", items: ["Launch campaigns", "Pause or resume outreach", "Track email performance", "Monitor engagement", "Optimize follow-up strategies"], note: "Sales teams managed all outreach from a single centralized dashboard." },
  { title: "Analytics & Insights", items: ["Email activity & reply rates", "Campaign performance", "Lead generation & meetings", "AI confidence scores", "Knowledge base utilization"], note: "Real-time dashboards helped sales leaders make informed, data-driven decisions." },
];

const metrics = [
  { metric: "60%", label: "Reduction in manual email workload" },
  { metric: "Hrs → Mins", label: "Improvement in response times" },
  { metric: "24/7", label: "Continuous AI-powered engagement" },
];

const impactChecks = [
  "Improved campaign visibility through centralized analytics",
  "Increased consistency in outbound communication",
  "Faster lead qualification and routing",
  "More time for reps to focus on high-value conversations",
];

const beforeAfter = [
  { area: "Outreach", before: "Manual email outreach", after: "AI-powered automated outreach" },
  { area: "Follow-ups", before: "Inconsistent follow-ups", after: "Intelligent follow-up sequences" },
  { area: "Response Time", before: "Delayed responses", after: "Near real-time AI responses" },
  { area: "Tooling", before: "Multiple disconnected tools", after: "Centralized AI platform" },
  { area: "Analytics", before: "Limited analytics", after: "Live performance dashboards" },
  { area: "Campaigns", before: "Manual campaign management", after: "Automated campaign optimization" },
  { area: "Team Focus", before: "Administrative workload", after: "More time spent selling" },
];

const capabilities = [
  "Multi-Agent AI Architecture", "Inbound & Outbound Email Automation", "Campaign Management",
  "Lead Qualification", "Knowledge Base Integration", "Real-Time Analytics",
  "Meeting Scheduling", "CRM-Ready Workflows", "Enterprise Security Controls",
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
export default function LeadSenseCaseStudy() {
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
            <span className="text-white/40">Case 01</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-[10px] font-black  tracking-[0.16em] px-3 py-1.5 text-[#625eff] border border-[#625eff]/30 bg-[#625eff]/10">AI Agent Development</span>
              <span className="text-[10px] font-black  tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">Sales Automation</span>
              <span className="text-[10px] font-black  tracking-[0.16em] px-3 py-1.5 text-white/60 border border-white/15">LeadSense</span>
            </div>

            <h1 className="typo-h1 text-white mb-6">
              Scaling B2B sales with{" "}
              <span style={{ background: "linear-gradient(135deg, #625eff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AI-powered multi-agent automation.
              </span>
            </h1>

            <p className="typo-body text-white/60 max-w-2xl">
              As inbound and outbound email volume grew, a B2B technology company deployed LeadSense Powered by AgenticSense 
              to automate its entire sales communication workflow and free reps to focus on qualified prospects.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-10 border-t border-white/10">
              {[
                { v: "60%", l: "Manual Work ↓" },
                { v: "24/7", l: "AI Engagement" },
                { v: "2,000+", l: "Leads / Month" },
                { v: "15", l: "Sales Reps" },
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
        <SectionHead n="01" kicker="Overview" title="Thousands of sales emails, all handled by hand" />
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 space-y-5">
            <p className="typo-body text-slate-600">
              As the company's customer base expanded, managing thousands of inbound and outbound email conversations
              became increasingly difficult. Sales representatives spent significant time on repetitive administrative
              tasks instead of engaging qualified prospects.
            </p>
            <p className="typo-body text-slate-600">
              To improve efficiency without expanding the sales team, the company implemented{" "}
              <span className="font-semibold" style={{ color: NAVY }}>LeadSense Powered by AgenticSense</span>,
              an AI-powered multi-agent email automation platform that runs the full communication workflow.
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
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">B2B Technology Services</p>
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
          The organization relied heavily on manual email communication throughout the sales process. As monthly lead
          volume kept climbing, this created several operational challenges that limited scalability and productivity:
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
          As monthly lead volume kept rising, these issues directly capped how far the team could scale.
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
                    <span className="flex items-center justify-center w-8 h-8 text-[12px] font-black text-white" style={{ background: INDIGO }}>{p.n}</span>
                  </div>
                  <div className="pb-2">
                    <h3 className="text-[17px] font-bold mb-2 tracking-tight" style={{ color: NAVY }}>{p.title}</h3>
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
          LeadSense automated the organization's complete email communication workflow using multiple AI agents working together.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {solution.map((s, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <div className="bg-white border border-slate-200 p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[2px] w-5" style={{ background: INDIGO }} />
                  <h3 className="text-[15px] font-bold tracking-tight" style={{ color: NAVY }}>{s.title}</h3>
                </div>
                <ul className="space-y-2.5 mb-5 flex-1">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 shrink-0" style={{ background: INDIGO }} />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="text-[12.5px] text-slate-500 italic leading-relaxed pt-4 border-t border-slate-100">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 05 · OPERATIONAL IMPACT ───────────────────────────────────────── */}
      <Section>
        <SectionHead n="05" kicker="Results" title="Early Operational Impact" />
        <p className="typo-body text-slate-600 max-w-3xl mb-10">
          Following implementation, the organization observed measurable improvements across daily sales operations.
        </p>

        <div className="grid sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-10">
          {metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex flex-col justify-center p-8 h-full" style={{ background: NAVY }}>
                <span className="text-[2rem] sm:text-[2.4rem] font-black text-white tracking-tight leading-none">{m.metric}</span>
                <span className="text-[11.5px] text-white/55 mt-3 leading-snug font-medium">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {impactChecks.map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0"><Check /></span>
              <p className="text-[14px] text-slate-600 leading-relaxed">{c}</p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-slate-400 italic mt-8 pt-6 border-t border-slate-100 max-w-3xl">
          Outcomes represent observed operational improvements and may vary depending on organization size, campaign strategy, and deployment.
        </p>
      </Section>

      {/* ── 06 · BEFORE VS AFTER ──────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="06" kicker="The Shift" title="Before vs After" />
        <div className="border border-slate-200 bg-white">
          <div className="hidden md:grid grid-cols-[0.9fr_1.4fr_1.4fr]" style={{ background: NAVY }}>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">Area</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50 border-l border-white/10">Before LeadSense</div>
            <div className="px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#a78bfa] border-l border-white/10">After LeadSense</div>
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

      {/* ── 07 · BUSINESS IMPACT ──────────────────────────────────────────── */}
      <Section>
        <SectionHead n="07" kicker="Why It Mattered" title="Business Impact" />
        <div className="space-y-5 max-w-3xl">
          <p className="typo-body text-slate-600">
            By automating repetitive communication tasks, LeadSense enabled the organization to streamline sales
            operations without increasing operational complexity.
          </p>
          <p className="typo-body text-slate-600">
            The sales team shifted its focus from manual email management to relationship building, opportunity
            qualification, and revenue generation.
          </p>
          <p className="typo-body text-slate-600">
            Leadership also gained far greater visibility into sales performance, campaign effectiveness, and customer
            engagement through real-time analytics.
          </p>
        </div>
      </Section>

      {/* ── 08 · WHY LEADSENSE ────────────────────────────────────────────── */}
      <Section muted>
        <SectionHead n="08" kicker="The Platform" title="Why LeadSense" />
        <p className="typo-body text-slate-600 max-w-3xl mb-8">
          LeadSense is an AI-powered multi-agent platform built to automate modern sales operations. Core capabilities include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {capabilities.map((c, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-5">
              <span className="shrink-0"><Check size={14} /></span>
              <span className="text-[13.5px] font-medium leading-snug" style={{ color: NAVY }}>{c}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CLIENT FEEDBACK ───────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <svg className="mx-auto mb-6" width="34" height="34" viewBox="0 0 24 24" fill={INDIGO} opacity="0.9"><path d="M9.5 4C6 4 3 7 3 10.5c0 3 2 5.5 5 5.5.3 0 .5 0 .8-.1-.6 1.5-2 2.6-3.8 3.1a.5.5 0 0 0 .2 1c3.9-.6 7-3.8 7-8.5V10c0-3.3-.9-6-4.5-6Zm10 0c-3.5 0-6.5 3-6.5 6.5 0 3 2 5.5 5 5.5.3 0 .5 0 .8-.1-.6 1.5-2 2.6-3.8 3.1a.5.5 0 0 0 .2 1c3.9-.6 7-3.8 7-8.5V10c0-3.3-.9-6-4.5-6Z" /></svg>
              <blockquote className="typo-h2 text-[1.35rem] sm:text-[1.7rem] leading-[1.35] font-medium" style={{ color: NAVY }}>
                “LeadSense helped us streamline our sales communication by automating repetitive tasks while keeping
                customer interactions timely and consistent. Our team now spends more time building relationships and
                less time managing email workflows.”
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-slate-200" />
                <p className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: INDIGO }}>Sales Operations Manager</p>
                <span className="h-px w-8 bg-slate-200" />
              </div>
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
          <h2 className="typo-h2 text-white mb-4">Ready to transform your sales operations?</h2>
          <p className="typo-body text-white/50 max-w-lg mx-auto mb-8">
            Deploy intelligent AI agents that automate sales communication, customer engagement, and campaign management 
            with human oversight built in. Let's scope your deployment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/proposal">
              <button className="flex items-center gap-2 px-8 py-3 font-semibold text-[15px] text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#625eff]/30"
                style={{ background: "linear-gradient(90deg, #625eff, #8b5cf6)" }}>
                Request a Proposal <Arrow />
              </button>
            </Link>
            <a href="mailto:mraheel@agenticsense.co">
              <button className="px-8 py-3 font-semibold text-[15px] border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all duration-200">
                mraheel@agenticsense.co
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