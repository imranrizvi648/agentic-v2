"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ── Services Mega Menu ────────────────────────────────────────────────────────
const servicesMegaMenu = [
  {
    id: "AI for Business Functions",
    label: "Agentic AI for Business Functions",
    href: "/services/agentic-ai-finance",
    subServices: [
      {
        title: "Sales & Revenue",
        href: "/services/sales-revenue-ai",
        desc: "Optimize sales, leads and revenue with AI."
      },
      {
        title: "Customer Service",
        href: "/services/customer-service-ai",
        desc: "Automate support and resolve customer requests faster."
      },
      {
        title: "HR & Workforce",
        href: "/services/hr-workforce-ai",
        desc: "Streamline hiring, onboarding and employee support."
      },
      {
        title: "Procurement & Supply Chain",
        href: "/services/procurement-supply-chain-ai",
        desc: "Optimize vendors, purchasing, inventory and supply chains."
      },
      {
        title: "Operations & Shared Services",
        href: "/services/operations-automation-ai",
        desc: "Automate repetitive workflows, approvals and requests."
      },
      {
        title: "IT & Security",
        href: "/services/it-security-ai",
        desc: "Accelerate IT support, incident response and security operations."
      },
      {
        title: "Executive Intelligence",
        href: "/services/executive-intelligence-ai",
        desc: "Turn business data into clear, decision-ready insights."
      },
    ],
    spotlight: {
  title: "How Agentic AI Is Transforming Business Functions",
  cta: "Explore Business AI",
  img: "/megaMenue/ai-and-data-innovation.png",
}
  },

  {
    id: "Enterprise AI Capabilities",
    label: "Enterprise Agentic AI Capabilities",
    href: "/services/business-process-automation",
    subServices: [
      {
        title: "Intelligent Document Processing",
        href: "/services/intelligent-document-processing",
        desc: "Extract, validate and process data from documents."
      },
      {
        title: "Enterprise Knowledge & Evidence Agents",
        href: "/services/enterprise-knowledge-evidence-agents",
        desc: "Deliver trusted answers from approved enterprise knowledge."
      },
      {
        title: "Custom AI Workflow Agents",
        href: "/services/custom-ai-workflow-agents",
        desc: "Build AI agents around your workflows and business rules."
      },
      {
        title: "Multi-Agent Digital Workforce",
        href: "/services/multi-agent-digital-workforce",
        desc: "Coordinate AI agents across complex business workflows."
      },
      {
        title: "Voice & Conversational AI",
        href: "/services/voice-conversational-ai",
        desc: "Build intelligent voice, chat and messaging experiences."
      },
      {
        title: "Multilingual & Regional AI",
        href: "/services/multilingual-regional-ai",
        desc: "Create AI experiences for local languages and markets."
      },
      {
        title: "ERP, CRM & Enterprise Integration",
        href: "/services/erp-crm-enterprise-integration",
        desc: "Connect AI agents with ERP, CRM and enterprise systems."
      },
      {
        title: "Data Intelligence & Predictive Agents",
        href: "/services/data-intelligence-predictive-agents",
        desc: "Detect patterns, anomalies and trends across business data."
      },
      {
        title: "Legacy-System Computer-Use Agents",
        href: "/services/legacy-system-computer-use-agents",
        desc: "Automate approved legacy systems without modern APIs."
      },
      {
        title: "Agentic Data Engineering",
        href: "/services/agentic-data-engineering",
        desc: "Automate data pipelines, quality checks and issue resolution."
      },
      {
        title: "Specialized AI & ML Development",
        href: "/services/specialized-ai-ml-development",
        desc: "Develop custom AI and ML solutions for specific needs."
      },
      {
        title: "Private & On-Premise Agentic AI",
        href: "/services/private-on-premise-agentic-ai",
        desc: "Deploy secure AI in private or on-premise environments."
      },
    ],
   spotlight: {
  title: "Building Intelligent AI Systems for Enterprise Workflows",
  cta: "Explore Enterprise AI",
  img: "/megaMenue/automation-excellence.png",
},
  },

  {
    id: "AI For Industries",
    label: "Agentic AI For Industries",
    href: "/services/agentic-ai-strategy-consulting",
    subServices: [
      {
        title: "Banking & Financial Services",
        href: "/services/banking-financial-services",
        desc: "AI solutions built for banking and financial operations."
      },
      {
        title: "Healthcare & Pharmaceutical",
        href: "/services/healthcare-pharmaceutical",
        desc: "AI solutions for healthcare and pharmaceutical workflows."
      },
      {
        title: "Manufacturing & FMCG",
        href: "/services/manufacturing-fmcg",
        desc: "AI solutions for manufacturing and FMCG operations."
      },
      {
        title: "Retail & Distribution",
        href: "/services/retail-distribution",
        desc: "AI solutions for smarter retail and distribution."
      },
      {
        title: "Logistics & Transportation",
        href: "/services/logistics-transportation",
        desc: "AI solutions for logistics, transport and delivery."
      },
      {
        title: "Construction & Real Estate",
        href: "/services/construction-real-estate",
        desc: "AI solutions for construction and real estate operations."
      },
      {
        title: "Agriculture & Food",
        href: "/services/agriculture-food",
        desc: "AI solutions for agriculture and food businesses."
      },
      {
        title: "Government & Public Sector",
        href: "/services/government-public-sector",
        desc: "AI solutions for public services and government operations."
      },
      {
        title: "Energy & Utilities",
        href: "/services/energy-utilities",
        desc: "AI solutions for energy, utilities and infrastructure."
      },
      {
        title: "Professional Services",
        href: "/services/professional-services",
        desc: "AI solutions for professional and knowledge-based services."
      },
      {
        title: "Education",
        href: "/services/education",
        desc: "AI solutions for smarter education and learning."
      },
      {
        title: "Technology & Telecom",
        href: "/services/technology-telecom",
        desc: "AI solutions for technology and telecom operations."
      },
    ],
   spotlight: {
  title: "How AI Is Transforming Industries and Business Operations",
  cta: "Explore Industry AI",
  img: "/megaMenue/strategic.png",
},
  },

  {
    id: "AI Transformation & Delivery",
    label: "Agentic AI Transformation & Delivery",
    href: "/services/ai-governance-security-mlops",
    subServices: [
      {
        title: "Agentic AI Strategy & Readiness",
        href: "/services/ai-transformation-delivery",
        desc: "Build a practical roadmap for enterprise AI adoption."
      },
      {
        title: "Process Discovery",
        href: "/services/process-discovery",
        desc: "Identify high-value processes ready for AI automation."
      },
      {
        title: "AI Opportunity Mapping",
        href: "/services/ai-opportunity-mapping",
        desc: "Find and prioritize the best AI use cases."
      },
      {
        title: "Rapid Pilot Development",
        href: "/services/rapid-pilot-development",
        desc: "Turn promising AI ideas into working pilots quickly."
      },
      {
        title: "Production Agent Engineering",
        href: "/services/production-agent-engineering",
        desc: "Build reliable AI agents ready for enterprise production."
      },
      {
        title: "Enterprise Integration",
        href: "/services/enterprise-integration",
        desc: "Connect AI solutions with your existing enterprise systems."
      },
    ],
   spotlight: {
  title: "From AI Strategy to Production-Ready Agentic Systems",
  cta: "Explore AI Transformation",
  img: "/megaMenue/ai-governance-security.png",
},
  },

  {
    id: "Trust & Managed Agentic AI",
    label: "Trust & Governance Agentic AI",
    href: "/services/ai-governance-security-mlops",
    subServices: [
      {
        title: "Responsible AI Governance",
        href: "/services/responsible-ai-governance",
        desc: "Keep AI responsible, transparent and aligned with policy."
      },
      {
        title: "Human-in-the-Loop Controls",
        href: "/services/human-in-the-loop",
        desc: "Keep people involved in critical AI decisions."
      },
      {
        title: "Agent Identity & Access",
        href: "/services/agent-identity-access",
        desc: "Control what AI agents can access and perform."
      },
      {
        title: "Evaluation & Testing",
        href: "/services/evaluation-testing",
        desc: "Test AI systems for accuracy, safety and reliability."
      },
      {
        title: "Monitoring & Audit Trails",
        href: "/services/monitoring-audit-trails",
        desc: "Monitor AI activity with traceable audit records."
      },
      {
        title: "Managed Agent Operations",
        href: "/services/managed-agent-operations",
        desc: "Continuously manage, monitor and optimize AI agents."
      },
    ],
    spotlight: {
  title: "Building Secure, Governed and Reliable AI Agents",
  cta: "Explore Trusted AI",
  img: "/megaMenue/ai-governance-security.png",
}
  },
];

// ── Industries Mega Menu ──────────────────────────────────────────────────────
const industriesMegaMenu = [
  {
    id: "Finance And Banking", label: "Finance & Banking", href: "/industries/finance-and-banking",
    subServices: [
      { title: "Algorithmic Insights", href: "/industries/finance-and-banking", desc: "Analyze heavy market structures and optimize data ingestion routines." },
      { title: "Risk Mitigation", href: "/industries/finance-and-banking", desc: "Automate custom fraud detection pipelines and structure balance audits." },
      { title: "Financial Bots", href: "/industries/finance-and-banking", desc: "Secure multi-lingual customer support frameworks for immediate account assistance." },
    ],
    spotlight: { title: "The Future of Smart Data Management in Capital Markets", cta: "Download Playbook", img: "/megaMenue/finance-and-banking.jpg" },
  },
  {
    id: "Healthcare", label: "Healthcare", href: "/industries/healthcare",
    subServices: [
      { title: "Medical Analytics", href: "/industries/healthcare", isNew: true, desc: "Enhance patient care with predictive modeling and structured data paths." },
      { title: "Clinical Automation", href: "/industries/healthcare", desc: "Streamline patient scheduling, data integration, and compliance checks." },
      { title: "Patient Care Agents", href: "/industries/healthcare", desc: "Deploy intelligent chatbots for immediate non-clinical frontline support." },
    ],
    spotlight: { title: "Transforming Modern Healthcare with Agentic Frameworks", cta: "Read Industry Report", img: "/megaMenue/healthcare.png" },
  },
  {
    id: "Real Estate", label: "Real Estate", href: "/industries/real-estate",
    subServices: [
      { title: "Property Valuation", href: "/industries/real-estate", desc: "Automate data matching trends across historical geo-location points." },
      { title: "Lead Ingestion", href: "/industries/real-estate", desc: "Qualify high-value real estate leads through conversational AI workflows." },
      { title: "Portfolio Sync", href: "/industries/real-estate", desc: "Synchronize multiple asset entries into central internal ERPs." },
    ],
    spotlight: { title: "Maximizing Digital Assets and Property Returns via Advanced AI", cta: "Watch Webinar", img: "/megaMenue/real-estate.png" },
  },
  {
    id: "E-commerce", label: "E-commerce", href: "/industries/e-commerce",
    subServices: [
      { title: "Dynamic Pricing", href: "/industries/e-commerce", desc: "Utilize predictive models to adjust product store values automatically." },
      { title: "Checkout Workflows", href: "/industries/e-commerce", desc: "Identify conversion bottlenecks and structure flawless UX patterns." },
      { title: "Inventory Sync", href: "/industries/e-commerce", desc: "Connect modern warehouses and clear system silos instantly with AI middleware." },
    ],
    spotlight: { title: "Scaling Modern Enterprise Stores to New Peaks", cta: "View Case Study", img: "/megaMenue/ecommerce.png" },
  },
  {
    id: "Education", label: "Education", href: "/industries/education",
    subServices: [
      { title: "Adaptive Learning", href: "/industries/education", desc: "Structure customized progress matrices for personalized student tracking." },
      { title: "Workflow Management", href: "/industries/education", desc: "Automate grading checks, syllabus structures, and resource distributions." },
      { title: "Virtual Advisors", href: "/industries/education", desc: "Provide around-the-clock structural campus guidance via natural language engines." },
    ],
    spotlight: { title: "Reimagining Digital Education Ecosystems globally", cta: "Get White Paper", img: "/megaMenue/education.png" },
  },
];

// ── Products Mega Menu ────────────────────────────────────────────────────────
const productsMegaMenu = [
  {
    id: "leadsense", label: "Leadsense", href: "/our-product/leadsense",
    subServices: [
      { title: "AI Email Auto-Responder", href: "/our-product/leadsense", desc: "First-priority AI that drafts context-aware replies within seconds of inbound queries." },
      { title: "CRM Sync & Lead Enrichment", href: "/our-product/leadsense", desc: "Verified leads pushed straight to HubSpot, Salesforce, or your CRM with enriched context." },
    ],
    spotlight: { title: "How Leadsense hits 2-minute reply times for enterprise sales.", cta: "Explore Leadsense", img: "/megaMenue/leadSensedashboard.webp" },
  },
  {
    id: "liaison", label: "Liaison", href: "/our-product/liaison",
    subServices: [
      { title: "Enterprise AI Chatbot", href: "/our-product/liaison", desc: "Multi-tenant conversational hub across web, WhatsApp, and social channels." },
      { title: "Instant Knowledge Lookup", href: "/our-product/liaison", desc: "RAG-powered answers grounded in your documentation with clean handoff to human agents." },
    ],
    spotlight: { title: "Resolve 85% of inbound inquiries without touching a human queue.", cta: "Explore Liaison", img: "/megaMenue/liaisondashboard.webp" },
  },
  {
    id: "Linksense", label: "Linksense", href: "/our-product/linksense",
    subServices: [
      { title: "LinkedIn Outreach Agent", href: "/our-product/linkedinagent", desc: "Scrapes target profiles and sends personalized connection requests at scale, safely." },
      { title: "Auto-Response & Follow-ups", href: "/our-product/linkedinagent", desc: "Warm conversational touchpoints inside LinkedIn chat with account-safety throttles." },
    ],
    spotlight: { title: "38% average connection accept rate across our pilot customers.", cta: "Explore Linkedinagent", img: "/megaMenue/linkdineadashboard.webp" },
  },
  {
    id: "invoicesense", label: "Invoicesense", href: "/our-product/invoicesense",
    subServices: [
      { title: "FBR-Compliant Billing Agent", href: "/our-product/invoicesense", desc: "OCR-driven invoice processing with automatic FBR filing, QR verification and STRN validation." },
      { title: "Bank Reconciliation & Follow-ups", href: "/our-product/invoicesense", desc: "Auto-matched transactions and polite payment reminders via WhatsApp and email." },
    ],
    spotlight: { title: "100% FBR regulatory compliance with zero manual filing overhead.", cta: "Explore Invoicesense", img: "/megaMenue/invoicesensedashboard.webp" },
  },
];

const navItems = [
  { name: "Home",         href: "/",            dropdown: false },
  { name: "Services",     href: "/services",    dropdown: true  },
  { name: "Product",      href: "/our-product", dropdown: true  },
  { name: "Industries",   href: "/industries",  dropdown: true  },
  { name: "Our Insights", href: "#",            dropdown: true  },
  { name: "About",        href: "/about",       dropdown: false },
  { name: "Our Team",     href: "/our-team",    dropdown: false },
  { name: "Contact Us",   href: "/contact",     dropdown: false },
];

export default function Navbar() {
  const pathname = usePathname();

  const [hoveredTab, setHoveredTab] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

  const [activeServicesTab, setActiveServicesTab] = useState(servicesMegaMenu[0].id);
  const [activeProductsTab, setActiveProductsTab] = useState(productsMegaMenu[0].id);
  const [activeIndustriesTab, setActiveIndustriesTab] = useState(industriesMegaMenu[0].id);

  const isLightPage =
    pathname === "/proposal" ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/case-studies") ||
    pathname === "/our-product/leadsense" ||
    pathname === "/our-product/liaison" ||
    pathname === "/our-product/linkedinagent" ||
    pathname === "/our-product/invoicesense";

  const useDarkTheme = isScrolled || isLightPage;
  const useDarkText = useDarkTheme;

  const getActiveTab = () => {
    if (pathname === "/") return "Home";
    const match = navItems.find((item) => item.href !== "/" && pathname.startsWith(item.href));
    return match ? match.name : null;
  };
  const activeTab = getActiveTab();

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:80px;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  const currentServicesData = servicesMegaMenu.find((i) => i.id === activeServicesTab) || servicesMegaMenu[0];
  const currentProductsData = productsMegaMenu.find((i) => i.id === activeProductsTab) || productsMegaMenu[0];
  const currentIndustriesData = industriesMegaMenu.find((i) => i.id === activeIndustriesTab) || industriesMegaMenu[0];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex justify-center 
        transition-[padding,top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${useDarkTheme ? "top-0 px-0" : "top-4 md:top-6 px-4 md:px-8"}`}
    >
      <div
        className={`
          w-full flex flex-col items-center justify-between relative py-2
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            useDarkTheme
              ? `max-w-[100%] px-6 md:px-10 py-1.5 rounded-none bg-white/70 backdrop-blur-2xl border-b border-black/[0.03] shadow-[0_4px_24px_rgba(26,25,77,0.07),inset_0_-1px_0_rgba(0,0,0,0.04)]`
              : `max-w-[1240px] px-5 md:px-8 py-1 rounded-none bg-white/[0.02] backdrop-blur-xl border border-white/[0.14]`
          }
        `}
      >
        {!useDarkTheme && (
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none" />
        )}

        <div className="w-full flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group z-50">
            <div className="relative w-7 h-7 md:w-8 md:h-8 overflow-hidden">
              <img src="/iconeee.png" alt="Agenticsense Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className={`font-bold text-base md:text-lg tracking-wide transition-colors duration-300 ${useDarkText ? "text-[#1a194d]" : "text-white"}`}>
              AgenticSense
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5" onMouseLeave={() => setHoveredTab(null)}>
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${item.dropdown ? "static" : "relative"} cursor-pointer`}
                onMouseEnter={() => setHoveredTab(item.name)}
              >
                <Link href={item.href}>
                  <div
                    className={`
                      relative flex items-center gap-1.5 px-3 py-3 transition-all duration-300
                      ${activeTab === item.name || hoveredTab === item.name
                        ? useDarkText
                          ? "bg-[#1a194d]/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_0_0_1px_rgba(26,25,77,0.08)]"
                          : "bg-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : ""
                      }
                      ${useDarkText ? "text-slate-700 hover:text-[#1a194d]" : "text-white/80 hover:text-white"}
                    `}
                  >
                    {activeTab === item.name && (
                      <>
                        <div className={`absolute top-1.5 left-1.5 w-2 h-2 border-t-[1.5px] border-l-[1.5px] rounded-tl-[2px] ${useDarkText ? "border-[#1a194d]" : "border-white"}`} />
                        <div className={`absolute bottom-1.5 right-1.5 w-2 h-2 border-b-[1.5px] border-r-[1.5px] rounded-br-[2px] ${useDarkText ? "border-[#1a194d]" : "border-white"}`} />
                      </>
                    )}
                    {hoveredTab === item.name && activeTab !== item.name && (
                      <div className="absolute inset-1 pointer-events-none">
                        <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className={`absolute top-0 left-0 h-[1px] ${useDarkText ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className={`absolute top-0 left-0 w-[1px] ${useDarkText ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className={`absolute bottom-0 right-0 h-[1px] ${useDarkText ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className={`absolute bottom-0 right-0 w-[1px] ${useDarkText ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                      </div>
                    )}
                    <span className="relative z-10 text-[14px] font-medium">{item.name}</span>
                    {item.dropdown && (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`relative z-10 transition-transform duration-300 ${hoveredTab === item.name ? "rotate-180" : ""}`}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </Link>

                {/* Services Mega Menu */}
{item.name === "Services" && item.dropdown && (
  <AnimatePresence>
    {hoveredTab === item.name && (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className={`absolute top-full left-0 right-0 mx-auto mt-4 w-[92vw] max-w-[1280px] 
          max-h-[min(78vh,640px)] flex rounded-xl overflow-hidden border shadow-2xl z-50 backdrop-blur-2xl
          ${useDarkText ? "bg-white border-slate-200 text-slate-800" : "bg-[#0b0a14]/95 border-white/10 text-white"}`}
      >
        {/* LEFT – Categories */}
        <div className={`w-[22%] flex flex-col p-4 gap-0.5 border-r overflow-y-auto
          ${useDarkText ? "bg-slate-50/60 border-slate-100" : "bg-white/[0.02] border-white/5"}`}>
          {servicesMegaMenu.map((menuItem) => (
            <button
              key={menuItem.id}
              onMouseEnter={() => setActiveServicesTab(menuItem.id)}
              onClick={() => setActiveServicesTab(menuItem.id)}
              className={`flex items-center justify-between px-3.5 py-2.5 text-left font-semibold text-[13px] rounded-lg transition-all duration-200
                ${activeServicesTab === menuItem.id
                  ? (useDarkText ? "bg-[#625eff]/10 text-[#625eff]" : "bg-white/10 text-white")
                  : "hover:bg-slate-100/60 dark:hover:bg-white/5 opacity-80"}`}
            >
              <span className="leading-tight">{menuItem.label}</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`flex-shrink-0 transition-transform duration-200 ${activeServicesTab === menuItem.id ? "translate-x-0.5" : ""}`}>
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>

        {/* MIDDLE – 3 columns */}
        <div className="w-[56%] p-5 grid grid-cols-3 gap-x-6 gap-y-4 items-start content-start overflow-y-auto">
          {currentServicesData.subServices.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              onClick={() => setHoveredTab(null)}
              className="group/item flex flex-col gap-1 cursor-pointer"
            >
              <h4 className="font-bold text-[13.5px] leading-snug flex items-center gap-1.5 group-hover/item:text-[#625eff] transition-colors">
                {sub.title}
                {sub.isNew && (
                  <span className="bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                    New
                  </span>
                )}
              </h4>
              <p className={`text-[12px] leading-relaxed ${useDarkText ? "text-slate-500" : "text-slate-400"}`}>
                {sub.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* RIGHT – Spotlight */}
        <div className={`w-[22%] p-5 flex flex-col justify-between border-l
          ${useDarkText ? "bg-slate-50/40 border-slate-100" : "bg-white/[0.01] border-white/5"}`}>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Spotlight</span>
            <div className="mt-3 relative rounded-lg overflow-hidden border border-white/5 aspect-[16/10] bg-gradient-to-br from-[#625eff]/20 to-purple-600/20 flex items-center justify-center shadow-sm max-h-[120px]">
              {currentServicesData.spotlight.img ? (
                <img
                  src={currentServicesData.spotlight.img}
                  alt="Spotlight"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-slate-500">Banner Asset</span>
              )}
            </div>
            <h5 className="mt-3.5 font-bold text-[12.5px] leading-snug">
              {currentServicesData.spotlight.title}
            </h5>
          </div>
          <Link
            href={currentServicesData.href}
            onClick={() => setHoveredTab(null)}
            className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-[#625eff] hover:underline"
          >
            {currentServicesData.spotlight.cta}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)}

                {/* Product Mega Menu */}
                {item.name === "Product" && item.dropdown && (
                  <AnimatePresence>
                    {hoveredTab === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className={`absolute top-full left-0 right-0 mx-auto mt-4 w-[90vw] max-w-[1200px] min-h-[410px] flex rounded overflow-hidden border shadow-2xl z-50 backdrop-blur-2xl
                          ${useDarkText ? "bg-white border-slate-200 text-slate-800" : "bg-[#0b0a14]/95 border-white/10 text-white"}`}
                      >
                        <div className={`w-[25%] flex flex-col p-5 gap-1 border-r ${useDarkText ? "bg-slate-50/50 border-slate-100" : "bg-white/[0.02] border-white/5"}`}>
                          {productsMegaMenu.map((menuItem) => (
                            <button
                              key={menuItem.id}
                              onMouseEnter={() => setActiveProductsTab(menuItem.id)}
                              onClick={() => setActiveProductsTab(menuItem.id)}
                              className={`flex items-center justify-between px-4 py-3 text-left font-semibold text-[13.5px] rounded-lg transition-all duration-200
                                ${activeProductsTab === menuItem.id ? (useDarkText ? "bg-[#625eff]/10 text-[#625eff]" : "bg-white/10 text-white") : "hover:bg-slate-100/50 dark:hover:bg-white/5 opacity-80"}`}
                            >
                              <span>{menuItem.label}</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${activeProductsTab === menuItem.id ? "translate-x-1" : ""}`}>
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          ))}
                        </div>
                        <div className="w-[50%] p-8 grid grid-cols-2 gap-x-8 gap-y-6 items-start content-start">
                          {currentProductsData.subServices.map((sub, idx) => (
                            <Link key={idx} href={sub.href} onClick={() => setHoveredTab(null)} className="group/item flex flex-col gap-1.5 cursor-pointer">
                              <h4 className="font-bold text-[14.5px] flex items-center gap-2 group-hover/item:text-[#625eff] transition-colors">{sub.title}</h4>
                              <p className={`text-[12.5px] leading-relaxed ${useDarkText ? "text-slate-500" : "text-slate-400"}`}>{sub.desc}</p>
                            </Link>
                          ))}
                        </div>
                        <div className={`w-[25%] p-8 flex flex-col justify-between border-l ${useDarkText ? "bg-slate-50/40 border-slate-100" : "bg-white/[0.01] border-white/5"}`}>
                          <div className="flex flex-col justify-start">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Spotlight</span>
                            <div className="mt-3 relative rounded-lg overflow-hidden border border-white/5 aspect-[16/10] bg-gradient-to-br from-[#625eff]/20 to-purple-600/20 flex items-center justify-center shadow-sm max-h-[140px]">
                              {currentProductsData.spotlight.img ? (
                                <img src={currentProductsData.spotlight.img} alt="Spotlight" className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xs text-slate-500">Banner Asset</span>
                              )}
                            </div>
                            <h5 className="mt-4 font-bold text-[13px] leading-snug tracking-normal">{currentProductsData.spotlight.title}</h5>
                          </div>
                          <Link href={currentProductsData.href} onClick={() => setHoveredTab(null)} className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-[#625eff] hover:underline pt-1">
                            {currentProductsData.spotlight.cta}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Industries Mega Menu */}
                {item.name === "Industries" && item.dropdown && (
                  <AnimatePresence>
                    {hoveredTab === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className={`absolute top-full left-0 right-0 mx-auto mt-4 w-[90vw] max-w-[1200px] min-h-[410px] flex rounded overflow-hidden border shadow-2xl z-50 backdrop-blur-2xl
                          ${useDarkText ? "bg-white border-slate-200 text-slate-800" : "bg-[#0b0a14]/95 border-white/10 text-white"}`}
                      >
                        <div className={`w-[25%] flex flex-col p-5 gap-1 border-r ${useDarkText ? "bg-slate-50/50 border-slate-100" : "bg-white/[0.02] border-white/5"}`}>
                          {industriesMegaMenu.map((menuItem) => (
                            <button
                              key={menuItem.id}
                              onMouseEnter={() => setActiveIndustriesTab(menuItem.id)}
                              onClick={() => setActiveIndustriesTab(menuItem.id)}
                              className={`flex items-center justify-between px-4 py-3 text-left font-semibold text-[13.5px] rounded-lg transition-all duration-200
                                ${activeIndustriesTab === menuItem.id ? (useDarkText ? "bg-[#625eff]/10 text-[#625eff]" : "bg-white/10 text-white") : "hover:bg-slate-100/50 dark:hover:bg-white/5 opacity-80"}`}
                            >
                              <span>{menuItem.label}</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${activeIndustriesTab === menuItem.id ? "translate-x-1" : ""}`}>
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          ))}
                        </div>
                        <div className="w-[50%] p-8 grid grid-cols-2 gap-x-8 gap-y-6 items-start content-start">
                          {currentIndustriesData.subServices.map((sub, idx) => (
                            <Link key={idx} href={sub.href} onClick={() => setHoveredTab(null)} className="group/item flex flex-col gap-1.5 cursor-pointer">
                              <h4 className="font-bold text-[14.5px] flex items-center gap-2 group-hover/item:text-[#625eff] transition-colors">{sub.title}</h4>
                              <p className={`text-[12.5px] leading-relaxed ${useDarkText ? "text-slate-500" : "text-slate-400"}`}>{sub.desc}</p>
                            </Link>
                          ))}
                        </div>
                        <div className={`w-[25%] p-8 flex flex-col justify-between border-l ${useDarkText ? "bg-slate-50/40 border-slate-100" : "bg-white/[0.01] border-white/5"}`}>
                          <div className="flex flex-col justify-start">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Spotlight</span>
                            <div className="mt-3 relative rounded-lg overflow-hidden border border-white/5 aspect-[16/10] bg-gradient-to-br from-[#625eff]/20 to-purple-600/20 flex items-center justify-center shadow-sm max-h-[140px]">
                              {currentIndustriesData.spotlight.img ? (
                                <img src={currentIndustriesData.spotlight.img} alt="Spotlight" className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xs text-slate-500">Banner Asset</span>
                              )}
                            </div>
                            <h5 className="mt-4 font-bold text-[13px] leading-snug tracking-normal">{currentIndustriesData.spotlight.title}</h5>
                          </div>
                          <Link href={currentIndustriesData.href} onClick={() => setHoveredTab(null)} className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-[#625eff] hover:underline pt-1">
                            {currentIndustriesData.spotlight.cta}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Our Insights Mega Menu */}
                {item.name === "Our Insights" && item.dropdown && (
                  <AnimatePresence>
                    {hoveredTab === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className={`absolute top-full mt-4 w-[360px] rounded overflow-hidden border shadow-2xl z-50 backdrop-blur-2xl
                          ${useDarkText ? "bg-white border-slate-200 text-slate-800" : "bg-[#0b0a14]/95 border-white/10 text-white"}`}
                      >
                        <div className="p-2">
                          <Link
                            href="/blog"
                            onClick={() => setHoveredTab(null)}
                            className={`group/ins flex items-start gap-3 p-2 rounded-lg transition-all duration-200 ${useDarkText ? "hover:bg-[#625eff]/[0.06]" : "hover:bg-white/[0.06]"}`}
                          >
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-bold text-[14.5px] mb-1 group-hover/ins:text-[#625eff] transition-colors ${useDarkText ? "text-[#1a194d]" : "text-white"}`}>
                                Blog
                              </h4>
                            </div>
                          </Link>
                          <div className={`mx-4 my-1 h-px ${useDarkText ? "bg-slate-100" : "bg-white/[0.06]"}`} />
                          <Link
                            href="/case-studies"
                            onClick={() => setHoveredTab(null)}
                            className={`group/ins flex items-start gap-2 p-2 rounded-lg transition-all duration-200 ${useDarkText ? "hover:bg-[#625eff]/[0.06]" : "hover:bg-white/[0.06]"}`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className={`font-bold text-[14.5px] group-hover/ins:text-[#625eff] transition-colors ${useDarkText ? "text-[#1a194d]" : "text-white"}`}>
                                  Case Studies
                                </h4>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/proposal" className="hidden lg:block">
            <button
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="relative flex items-center gap-2 px-6 py-2.5 rounded font-semibold text-[14px] transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#1a194d] to-[#625eff] text-white hover:shadow-lg hover:shadow-[#625eff]/20 cursor-pointer"
            >
              {!isButtonHovered && (
                <>
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-white/60 rounded-tl-[2px]" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-white/60 rounded-br-[2px]" />
                  <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                </>
              )}
              {isButtonHovered && (
                <div className="absolute inset-1 pointer-events-none">
                  <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className="absolute top-0 left-0 h-[1px] bg-white/70" />
                  <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className="absolute top-0 left-0 w-[1px] bg-white/70" />
                  <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className="absolute bottom-0 right-0 h-[1px] bg-white/70" />
                  <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className="absolute bottom-0 right-0 w-[1px] bg-white/70" />
                </div>
              )}
              <span className="relative z-10 flex items-center gap-2">
                Request Proposal
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 z-50 focus:outline-none transition-colors duration-300 ${useDarkText ? "text-[#1a194d]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full lg:hidden overflow-hidden mt-3 pt-3 border-t ${useDarkText ? "border-black/[0.06]" : "border-white/[0.10]"}`}
            >
              <ul className="flex flex-col py-2 gap-1">
                {navItems.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <div className="flex items-center justify-between w-full rounded-lg">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex-1 px-4 py-2.5 font-medium text-[15px] transition-colors
                          ${useDarkText ? "text-slate-700 hover:bg-[#1a194d]/[0.06] hover:text-[#1a194d]" : "text-white/85 hover:bg-white/[0.08] hover:text-white"}`}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (item.name === "Services") setMobileServicesOpen(!mobileServicesOpen);
                            if (item.name === "Product") setMobileProductsOpen(!mobileProductsOpen);
                            if (item.name === "Industries") setMobileIndustriesOpen(!mobileIndustriesOpen);
                            if (item.name === "Our Insights") setMobileInsightsOpen(!mobileInsightsOpen);
                          }}
                          className={`p-3 mr-2 transition-transform duration-300
                            ${useDarkText ? "text-slate-600" : "text-white/70"}
                            ${(item.name === "Services" && mobileServicesOpen) ||
                            (item.name === "Product" && mobileProductsOpen) ||
                            (item.name === "Industries" && mobileIndustriesOpen) ||
                            (item.name === "Our Insights" && mobileInsightsOpen)
                              ? "rotate-180"
                              : ""}`}
                        >
                          <svg width="12" height="8" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {item.name === "Services" && item.dropdown && (
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pl-6 pr-4 gap-2 border-l border-slate-500/20 ml-4 my-1 overflow-hidden"
                          >
                            {servicesMegaMenu.flatMap((cat) =>
                              cat.subServices.map((sub) => (
                                <Link
                                  key={sub.href + sub.title}
                                  href={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`py-1.5 text-[14px] font-semibold transition-colors ${useDarkText ? "text-slate-600 hover:text-[#625eff]" : "text-white/75 hover:text-white"}`}
                                >
                                  {sub.title}
                                </Link>
                              ))
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {item.name === "Product" && item.dropdown && (
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pl-6 pr-4 gap-2 border-l border-slate-500/20 ml-4 my-1 overflow-hidden"
                          >
                            {productsMegaMenu.map((prod) => (
                              <Link
                                key={prod.id}
                                href={prod.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`py-1.5 text-[14px] font-semibold transition-colors ${useDarkText ? "text-slate-600 hover:text-[#625eff]" : "text-white/75 hover:text-white"}`}
                              >
                                {prod.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {item.name === "Industries" && item.dropdown && (
                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pl-6 pr-4 gap-2 border-l border-slate-500/20 ml-4 my-1 overflow-hidden"
                          >
                            {industriesMegaMenu.map((ind) => (
                              <Link
                                key={ind.id}
                                href={ind.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`py-1.5 text-[14px] font-semibold transition-colors ${useDarkText ? "text-slate-600 hover:text-[#625eff]" : "text-white/75 hover:text-white"}`}
                              >
                                {ind.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {item.name === "Our Insights" && item.dropdown && (
                      <AnimatePresence>
                        {mobileInsightsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pl-6 pr-4 gap-2 border-l border-slate-500/20 ml-4 my-1 overflow-hidden"
                          >
                            <Link
                              href="/blog"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`py-1.5 text-[14px] font-semibold transition-colors ${useDarkText ? "text-slate-600 hover:text-[#625eff]" : "text-white/75 hover:text-white"}`}
                            >
                              Blog
                            </Link>
                            <Link
                              href="/case-studies"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`py-1.5 text-[14px] font-semibold transition-colors ${useDarkText ? "text-slate-600 hover:text-[#625eff]" : "text-white/75 hover:text-white"}`}
                            >
                              Case Studies
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}

                <li className="mt-3 px-4 pb-2">
                  <Link href="/proposal" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="relative w-full flex justify-center items-center gap-2 bg-[#625eff] text-white px-7 py-3 rounded-xl font-semibold text-[15px] overflow-hidden shadow-[0_4px_20px_rgba(98,94,255,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]">
                      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                      Get In Touch
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}