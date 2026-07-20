"use client";

import React from "react";
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useParams } from "next/navigation";

/**
 * ============================================================
 *  FONT: Inter (Google Fonts)
 *  IMAGES: /public/*.webp
 *  FILE LOCATION: app/our-product/[id]/page.jsx
 * ============================================================
 */

const EXTENDED_PRODUCTS_DB = {
  leadsense: {
    name: "Leadsense",
    role: "AI Email Assistant",
    tagline:
      "Responds instantly with personalized email conversations that keep every lead engaged.",
    extendedDesc:
      "Leadsense focuses on speed to lead. It acts as an autonomous inbox manager that monitors incoming B2B queries, drafts context-aware personalized responses instantly, and follows up dynamically to make sure you are always the first to reply.",
    dashboardImg: "/leadSensedashboard.webp",
    features: [
      "First-priority AI auto-responses tailored to incoming lead intent",
      "Dynamic personalization analyzing sender company profile on the fly",
      "Automated fallback and escalation alerts for human intervention",
      "Seamless inbox sync protecting deliverability and domain authority",
    ],
    metrics: [
      { value: "2 Min", text: "Avg Response Time" },
      { value: "98%", text: "Inbox Deliverability" },
    ],
    integrationDesc:
      "Designed to fit seamlessly into your existing workflows, helping your team automate tasks, improve efficiency, and scale operations with confidence.",

    onboarding: {
      eyebrow: "Inbox Onboarding",
      title: "Handing your inbox to Leadsense.",
      subtitle:
        "Set up in minutes, customize your AI assistant to match your business, and start automating customer conversations from day one.",
      steps: [
  {
    title: "Connect your account",
    desc:
      "Securely connect your Google account in just a few clicks and get started without any complicated setup.",
  },
  {
    title: "Configure your assistant",
    desc:
      "Customize your AI assistant with your business information, preferred communication style, and response preferences to match your brand.",
    dials: [
      { label: "Communication Style", value: "Professional", pct: 80 },
      { label: "Automation Level", value: "Balanced", pct: 65 },
    ],
  },
  {
    title: "Let AI handle conversations",
    desc:
      "Your assistant responds to customer messages, answers common questions, and keeps conversations moving while bringing important requests to your attention.",
  },
],
    },
    security: {
      title: "Secure by default for every customer conversation.",
      desc:
        "Your business communications remain private, protected, and reliable, giving you the confidence to automate customer engagement without compromising security.",
    },
  },

  liaison: {
    name: "Liaison",
    role: "Enterprise CRM based AI Platform",
    tagline:
      "A unified hub to handle conversations across every Website your customers use.",
    extendedDesc:
      "Liaison is an intelligent multi-tenant AI chatbot platform that integrates seamlessly with your website, leveraging a custom knowledge base to deliver instant, context-aware support. It also enables visitors to book meetings directly within the chat, alongside a range of powerful business automation features.",
    dashboardImg: "/liaisondashboard.webp",
    features: [
      "Multi-tenant architecture for multiple agents under one workspace",
      "Omnichannel sync across Websites",
      "Instant RAG context lookup from your documentation",
      "Smooth handoff to human support agents when needed",
    ],
    metrics: [
      { value: "90+%", text: "Instant Solved Inquiries" },
      { value: "24/7", text: "Customer Care" },
    ],
    integrationDesc:
      "Designed to fit seamlessly into your existing workflows, helping your team automate tasks, improve efficiency, and scale operations with confidence.",

    onboarding: {
      eyebrow: "Chatbot Onboarding",
      title: "From script tag to solved tickets in an afternoon.",
      subtitle:
        "Embed the widget, index your knowledge base, and let Liaison quietly resolve most conversations before your team ever sees them.",
      steps: [
        {
          title: "Embed on your site",
          desc:
            "Drop one script tag into your website. The widget appears instantly for all visitors, no rebuild needed.",
        },
        {
          title: "Feed the knowledge base",
          desc:
            "Point Liaison at your docs, PDFs, or a URL. RAG index built in minutes, ready to answer.",
          dials: [
            { label: "Answer style", value: "Concise", pct: 75 },
            { label: "Human handoff threshold", value: "Moderate", pct: 50 },
          ],
        },
        {
          title: "Resolve conversations",
          desc:
            "Liaison handles 85% of inbound queries end-to-end. Only complex or high-stakes cases are routed to your team.",
        },
      ],
    },
    security: {
      title: "Isolated per tenant, encrypted per conversation.",
      desc:
        "Every customer conversation is isolated per tenant and no data crosses workspace boundaries. Chat transcripts are encrypted at rest and purged on your retention schedule.",
    },
  },

 linkdsense: {
  name: "Linkdsense",
  role: "LinkedIn Outreach Agent",
  tagline:
    "Discover ideal prospects and automate meaningful LinkedIn engagement at scale.",

  extendedDesc:
    "Linkdsense intelligently discovers high-value prospects, engages them with personalized interactions, and nurtures conversations that help your team build stronger business relationships at scale.",

  dashboardImg: "/linkdineadashboard.webp",

  features: [
  "Discover qualified prospects that match your ideal audience",
  "Automate meaningful LinkedIn engagement at scale",
  "Build stronger relationships with personalized interactions",
  "AI-Powered Conversation Management System",
],

  metrics: [
    { value: "85+% upto", text: "Connection Acceptance Rate" },
    { value: "10×", text: "Faster Prospect Discovery" },
  ],

  integrationDesc:
    "Designed to fit seamlessly into your existing workflows, helping your team automate tasks, improve efficiency, and scale operations with confidence.",

  onboarding: {
    eyebrow: "Outreach Onboarding",
    title: "Your AI-powered LinkedIn outreach assistant.",
    subtitle:
      "Connect your LinkedIn account, define your ideal audience, and start building meaningful relationships with intelligent outreach.",

    steps: [
      {
        title: "Connect your account",
        desc:
          "Securely connect your LinkedIn account and get started in just a few clicks.",
      },
      {
        title: "Define your audience",
        desc:
          "Choose your ideal industries, job roles, company sizes, and locations so your outreach stays focused on the right prospects.",
        dials: [
          { label: "Target Audience", value: "Highly Focused", pct: 85 },
          { label: "Outreach Activity", value: "Balanced", pct: 55 },
        ],
      },
      {
        title: "Automate engagement",
        desc:
          "Send personalized connection requests, follow up with prospects, and manage conversations automatically while staying consistent with your outreach strategy.",
      },
    ],
  },

  security: {
    title: "Built with enterprise-grade security.",
    desc:
      "Your account and business data remain private and protected, giving you the confidence to automate LinkedIn outreach with secure, reliable access.",
  },
},

  invoicesense: {
    name: "Invoicesense",
    role: "FBR-Compliant Billing Agent",
    tagline:
      "Automated tax invoicing, sales logging, and stress-free compliance.",
    extendedDesc:
      "InvoiceSense is an intelligent financial operations platform that automates invoicing, tax compliance, financial reporting, and regulatory workflows. It integrates seamlessly with FBR systems and enterprise finance operations to streamline accounting processes at scale.",
    dashboardImg: "/invoicesensedashboard.webp",
    features: [
  "Automated FBR-compliant invoice generation and validation",
  "Seamless real-time integration with FBR digital invoicing system",
  "AI-powered tax calculation, sales tax mapping, and invoice accuracy checks",
  "Live compliance dashboard, submission status, and audit-ready reporting",
],
    metrics: [
      { value: "100%", text: "FBR Regulatory Compliance" },
      { value: "92%", text: "On-Time Payments" },
    ],
    integrationDesc:
      "Designed to fit seamlessly into your existing workflows, helping your team automate tasks, improve efficiency, and scale operations with confidence.",

    onboarding: {
      eyebrow: "Compliance Onboarding",
      title: "FBR-ready invoicing without changing your billing flow.",
      subtitle:
        "Link your STRN, set billing rules, and let InvoiceSense handle FBR submission, QR verification, and reconciliation automatically.",
      steps: [
        {
          title: "Link to FBR Digital Invoicing",
          desc:
            "Connect your STRN and tax profile once. Every invoice flows through the official FBR system.",
        },
        {
          title: "Set billing rules",
          desc:
            "Configure invoice templates, tax rates, item mapping, and payment terms based on your existing workflow.",
          dials: [
            { label: "Sales tax rate", value: "18% PST", pct: 90 },
            { label: "Follow-up reminders", value: "Weekly", pct: 45 },
          ],
        },
        {
          title: "Compliance runs itself",
          desc:
            "Invoices are generated, QR-verified, submitted to FBR, and reconciled against tax records with minimal manual effort.",
        },
      ],
    },
    security: {
      title: "Audit-ready ledgers with FBR-grade compliance.",
      desc:
        "Every invoice is signed, QR-stamped with FBR verification, and stored under audit-ready ledgers. STRN and PST credentials are encrypted at rest and never exposed to LLM processing.",
    },
  },
};

/* ---------- Small inline icon set (no emoji, no symbols) ---------- */
const Icon = {
  ArrowLeft: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Layers: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Cpu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  ),
  Target: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Plug: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22v-5" /><path d="M9 7V2" /><path d="M15 7V2" />
      <path d="M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" />
    </svg>
  ),
  Settings: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

export default function ProductDetailPage() {
  const routeParams = useParams();
  const rawId = routeParams?.id;
  const id = (Array.isArray(rawId) ? rawId[0] : rawId || "leadsense")
    .toString()
    .toLowerCase();

  const product = EXTENDED_PRODUCTS_DB[id];

  if (!product) {
    return (
      <div
        className="min-h-screen bg-[#FAFAF9] flex items-center justify-center text-brand-primary"
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif" }}
      >
        <div className="text-center space-y-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            404 / Module
          </p>
          <p className="font-semibold text-lg">Module not found.</p>
          <a
            href="/our-product"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline"
          >
            <Icon.ArrowLeft className="w-4 h-4" />
            Back to Registry
          </a>
        </div>
      </div>
    );
  }

  const onboarding = product.onboarding;
  const stage1 = onboarding.steps[0];
  const stage2 = onboarding.steps[1];
  const stage3 = onboarding.steps[2];

  return (
    <main
      className="relative min-h-screen bg-[#FAFAF9] text-brand-primary antialiased selection:bg-brand-secondary/10 selection:text-brand-primary pb-32"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" }}
    >
      {/* Subtle grid backdrop (no gradients) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,15,40,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,40,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[80rem] mx-auto px-6 sm:px-8 pt-24">

        {/* Back Navigation */}
        <div className="mb-14">
          <a
            href="/our-product"
            className="group inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 hover:text-brand-primary transition-colors duration-200 bg-white hover:bg-white px-5 py-2.5 rounded-lg border border-slate-200 shadow-[0_1px_0_rgba(15,15,40,0.02)]"
          >
            <Icon.ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Registry Index
          </a>
        </div>

        {/* ============================= HERO ============================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-28">

          {/* Left: Identity */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Module / {product.name}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.02] text-brand-primary">
                {product.name}.
              </h1>

              <p className="text-base sm:text-lg font-medium text-slate-500 tracking-tight">
                {product.role}
              </p>
            </div>

            <p className="text-slate-700 text-lg sm:text-xl leading-[1.55] font-normal max-w-xl tracking-[-0.01em]">
              {product.tagline}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200 max-w-md">
              {product.metrics.map((m, i) => (
                <div key={i}>
                  <span className="text-3xl font-bold text-brand-primary tracking-tight block">
                    {m.value}
                  </span>
                  <p className="text-[11px] font-semibold uppercase text-slate-500 tracking-[0.14em] mt-1">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
  href="/contact"
      className="inline-flex items-center gap-2 bg-brand-primary text-white text-sm font-semibold py-3 px-5 rounded-lg hover:bg-brand-primary/90 transition-colors shadow-[0_1px_2px_rgba(15,15,40,0.15)]"

              >
  Provision this module
  <ArrowRight className="w-4 h-4" />
</Link>
              {/* <a
                href="#architecture"
                className="inline-flex items-center gap-2 bg-white text-brand-primary text-sm font-semibold py-3 px-5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                See how it works
              </a> */}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-brand-secondary/10 blur-3xl" />
            </div>

            <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-[0_20px_60px_-20px_rgba(15,15,40,0.18)]">
              <div className="h-9 bg-slate-50 border-b border-slate-200 flex items-center px-3.5 gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              
              </div>

              <img
                src={product.dashboardImg}
                alt={`${product.name} dashboard`}
                className="w-full h-auto block"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 shadow-[0_8px_20px_-8px_rgba(15,15,40,0.15)]">
           
             
            </div>
          </div>
        </section>

        {/* ========================= ARCHITECTURE + STACK ========================= */}
        <div id="architecture" className="space-y-6 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            <section className="md:col-span-8 bg-white border border-slate-200 rounded-xl p-8 lg:p-10">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-1.5 rounded-md bg-slate-50 border border-slate-200 text-brand-primary">
                  <Icon.Cpu className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  System Architecture
                </span>
              </div>

              <p className="text-slate-700 leading-[1.65] text-base sm:text-lg font-normal max-w-2xl tracking-[-0.005em]">
                {product.extendedDesc}
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-xl font-bold text-brand-primary">Autonomous</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Runs without oversight</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-primary">Auditable</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Every decision logged</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-primary">Isolated</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Per-tenant workspace</div>
                </div>
              </div>
            </section>

            {/* Integration Stack — dynamic paragraph text kept, tech chips REMOVED */}
            <section className="md:col-span-4 bg-white border border-slate-200 rounded-xl p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-md bg-slate-50 border border-slate-200 text-brand-primary">
                  <Icon.Layers className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Built for Modern Businesses
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {product.integrationDesc}
              </p>
            </section>
          </div>

          {/* ============= CAPABILITIES ============= */}
          <section className="bg-white border border-slate-200 rounded-xl p-8 lg:p-10">
            <div className="flex items-center gap-2.5 mb-8 pb-6 border-b border-slate-200">
              <div className="p-1.5 rounded-md bg-slate-50 border border-slate-200 text-brand-primary">
                <Icon.Target className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Operational Scope and Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {product.features && product.features.map((f, i) => (
                <div key={i} className="group">
                  <div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-primary mb-4 group-hover:border-brand-primary/40 transition-colors">
                    <span className="text-[11px] font-bold tracking-tight">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-brand-primary text-[15px] leading-[1.55] font-medium tracking-[-0.005em]">
                    {f}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= ONBOARDING / PIPELINE (DYNAMIC) ================= */}
          <section className="relative w-full overflow-hidden bg-brand-primary rounded-xl py-16 px-6 sm:px-10 text-white">

            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 max-w-3xl mb-14">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                {onboarding.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 tracking-[-0.025em] leading-[1.1]">
                {onboarding.title}
              </h2>
              <p className="text-white/60 text-base font-normal leading-relaxed mt-4 max-w-xl">
                {onboarding.subtitle}
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* STAGE 01 */}
              <div className="relative bg-white/[0.04] border border-white/10 rounded-xl p-7 flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Stage 01</span>
                  <Icon.Plug className="w-4 h-4 text-white/40" />
                </div>
                <div>
                  <div className="text-6xl font-bold tracking-[-0.04em] leading-none text-white mb-6">
                    01
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                    {stage1.title}
                  </h3>
                  <p className="text-white/55 text-[13px] font-normal leading-relaxed">
                    {stage1.desc}
                  </p>
                </div>
              </div>

              {/* STAGE 02 — dynamic dials */}
              <div className="relative bg-white/[0.04] border border-white/10 rounded-xl p-7 flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Stage 02</span>
                  <Icon.Settings className="w-4 h-4 text-white/40" />
                </div>
                <div>
                  {stage2.dials && (
                    <div className="mb-6 space-y-2.5">
                      {stage2.dials.map((dial, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between text-[11px] text-white/50 font-medium">
                            <span>{dial.label}</span>
                            <span className="text-white/80">{dial.value}</span>
                          </div>
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                            <div
                              className="h-full bg-white/70 rounded-full"
                              style={{ width: `${dial.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                    {stage2.title}
                  </h3>
                  <p className="text-white/55 text-[13px] font-normal leading-relaxed">
                    {stage2.desc}
                  </p>
                </div>
              </div>

              {/* STAGE 03 */}
              <div className="relative bg-white text-brand-primary rounded-xl p-7 flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Stage 03</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-600">Live</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 mb-6 h-14">
                    {[35, 55, 40, 68, 50, 78, 62, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-brand-primary/80 rounded-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-primary mb-2 tracking-tight">
                    {stage3.title}
                  </h3>
                  <p className="text-slate-600 text-[13px] font-normal leading-relaxed">
                    {stage3.desc}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================ ENTERPRISE SECURITY (DYNAMIC) ================ */}
          <section className="bg-white border border-slate-200 rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200">
                  <Icon.Shield className="w-3 h-3 text-brand-primary" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Enterprise Ready
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary tracking-[-0.025em] leading-[1.1]">
                  {product.security.title}
                </h2>
                <p className="text-slate-600 text-base font-normal leading-relaxed max-w-lg">
                  {product.security.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "SOC2 Type II compliant infrastructure",
                    "End-to-end AES-256 data encryption",
                    "99.99 percent guaranteed SLA uptime",
                    "Zero data retention on LLM processing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-primary font-medium text-sm">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                        <Icon.Check className="w-3 h-3 text-emerald-600" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-brand-primary tracking-tight mb-1.5">256-bit</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Encryption Level</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-brand-primary tracking-tight mb-1.5">&lt; 50ms</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">API Latency</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-brand-primary tracking-tight mb-1.5">Zero Trust</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Security Architecture</div>
                </div>
                <div className="bg-brand-primary p-6 rounded-xl flex flex-col justify-between">
                  <div className="text-base font-semibold text-white tracking-tight">Trust Center</div>
                  <a href="#" className="text-white/80 text-xs font-semibold hover:text-white transition-colors flex items-center gap-1.5 mt-2">
                    Read documentation
                    <Icon.ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ================ FOOTER CTA ================ */}
          <footer className="bg-white border border-slate-200 rounded-xl p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-[-0.025em]">
                Ready to deploy {product.name}?
              </h3>
              <p className="text-slate-600 text-base font-normal">
                Provision a dedicated environment and API access in under five minutes.
              </p>
            </div>

           <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
  {/* Primary Button */}
  <Link
    href="/contact"
    className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-semibold py-3 px-6 tracking-tight transition-colors rounded-lg w-full sm:w-auto shadow-[0_1px_2px_rgba(15,15,40,0.15)]"
  >
    Provision Module
    <Icon.ArrowRight className="w-4 h-4" />
  </Link>

  {/* Secondary White Button */}
  <Link
    href="/contact"
    className="inline-flex items-center justify-center bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-brand-primary text-sm font-semibold py-3 px-6 tracking-tight transition-colors rounded-lg w-full sm:w-auto"
  >
    Book a Sync
  </Link>
</div>
          </footer>
        </div>
      </div>
    </main>
  );
}