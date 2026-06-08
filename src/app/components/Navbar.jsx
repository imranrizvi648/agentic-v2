"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ── Services Mega Menu ────────────────────────────────────────────────────────
const servicesMegaMenu = [
  {
    id: "AI and Data Innovation",
    label: "AI & Data Innovation",
    href: "/services/agentic-ai-finance",
    subServices: [
      {
        title: "Agentic AI for the Office of Finance",
        href: "/services/agentic-ai-finance",
        isNew: true,
        desc: "AI agents that own AP, AR, GL and month-end close — end to end, natively inside your ERP.",
      },
      {
        title: "Enterprise ERP & CRM-Native AI Integration",
        href: "/services/erp-crm-ai-integration",
        desc: "Connect AI agents directly to SAP B1, Oracle Fusion, NetSuite and Salesforce via official APIs.",
      },
      {
        title: "Intelligent Document Processing",
        href: "/services/intelligent-document-processing",
        desc: "Turn unstructured invoices and vendor documents into posted, reconciled ERP transactions.",
      },
    ],
    spotlight: {
      title: "Generative AI in Business Operations: C-Suite AI Adoption Strategies",
      cta: "Get the white paper",
      img: "/ai-and-data-innovation.png",
    },
  },
  {
    id: "Automation Excellence",
    label: "Automation Excellence",
    href: "/services/business-process-automation",
    subServices: [
      {
        title: "Business Process Automation Beyond Finance",
        href: "/services/business-process-automation",
        desc: "Extend agentic AI into procurement, HR, supply chain and IT operations.",
      },
      {
        title: "Custom AI Agent Development",
        href: "/services/custom-ai-agent-development",
        desc: "Bespoke multi-agent systems built with LangGraph, FastAPI and enterprise-grade LLMs.",
      },
      {
        title: "Conversational AI & Enterprise Copilots",
        href: "/services/conversational-ai-enterprise-copilots",
        desc: "Let your teams query ERP data in plain language — permission-aware, grounded in live records.",
      },
    ],
    spotlight: {
      title: "Modernizing Legacy Apps for the AI Era",
      cta: "Watch Now",
      img: "/automation-excellence.png",
    },
  },
  {
    id: "Strategic AI Solution",
    label: "Strategic AI Solution",
    href: "/services/agentic-ai-strategy-consulting",
    subServices: [
      {
        title: "Agentic AI Strategy & Readiness Consulting",
        href: "/services/agentic-ai-strategy-consulting",
        desc: "A prioritised roadmap built on what is actually buildable in your environment.",
      },
      {
        title: "Data Intelligence & Decision Analytics",
        href: "/services/data-intelligence-decision-analytics",
        desc: "Predictive analytics, anomaly detection and decision-support agents on Microsoft Fabric and Oracle.",
      },
    ],
    spotlight: {
      title: "How Businesses Can Move Past the AI Pilot Phase",
      cta: "Watch Now",
      img: "/strategic.png",
    },
  },
  {
    id: "Conversational AI",
    label: "AI Governance & Security",
    href: "/services/ai-governance-security-mlops",
    subServices: [
      {
        title: "AI Governance, Security & MLOps",
        href: "/services/ai-governance-security-mlops",
        desc: "Audit-ready agents — monitored, controlled and accountable from day one.",
      },
    ],
    spotlight: {
      title: "The Ultimate Guide to Boost Application Performance",
      cta: "Read More",
      img: "/ai-governance-security.png",
    },
  },
];

// ── Industries Mega Menu ──────────────────────────────────────────────────────
const industriesMegaMenu = [
  {
    id: "Finance And Banking",
    label: "Finance & Banking",
    href: "/industries/finance-and-banking",
    subServices: [
      {
        title: "Algorithmic Insights",
        href: "/industries/finance-and-banking",
        desc: "Analyze heavy market structures and optimize data ingestion routines.",
      },
      {
        title: "Risk Mitigation",
        href: "/industries/finance-and-banking",
        desc: "Automate custom fraud detection pipelines and structure balance audits.",
      },
      {
        title: "Financial Bots",
        href: "/industries/finance-and-banking",
        desc: "Secure multi-lingual customer support frameworks for immediate account assistance.",
      },
    ],
    spotlight: {
      title: "The Future of Smart Data Management in Capital Markets",
      cta: "Download Playbook",
      img: "/finance-and-banking.jpg",
    },
  },
  {
    id: "Healthcare",
    label: "Healthcare",
    href: "/industries/healthcare",
    subServices: [
      {
        title: "Medical Analytics",
        href: "/industries/healthcare",
        isNew: true,
        desc: "Enhance patient care with predictive modeling and structured data paths.",
      },
      {
        title: "Clinical Automation",
        href: "/industries/healthcare",
        desc: "Streamline patient scheduling, data integration, and compliance checks.",
      },
      {
        title: "Patient Care Agents",
        href: "/industries/healthcare",
        desc: "Deploy intelligent chatbots for immediate non-clinical frontline support.",
      },
    ],
    spotlight: {
      title: "Transforming Modern Healthcare with Agentic Frameworks",
      cta: "Read Industry Report",
      img: "/healthcare.png",
    },
  },
  {
    id: "Real Estate",
    label: "Real Estate",
    href: "/industries/real-estate",
    subServices: [
      {
        title: "Property Valuation",
        href: "/industries/real-estate",
        desc: "Automate data matching trends across historical geo-location points.",
      },
      {
        title: "Lead Ingestion",
        href: "/industries/real-estate",
        desc: "Qualify high-value real estate leads through conversational AI workflows.",
      },
      {
        title: "Portfolio Sync",
        href: "/industries/real-estate",
        desc: "Synchronize multiple asset entries into central internal ERPs.",
      },
    ],
    spotlight: {
      title: "Maximizing Digital Assets and Property Returns via Advanced AI",
      cta: "Watch Webinar",
      img: "/Real-estate.png",
    },
  },
  {
    id: "E-commerce",
    label: "E-commerce",
    href: "/industries/e-commerce",
    subServices: [
      {
        title: "Dynamic Pricing",
        href: "/industries/e-commerce",
        desc: "Utilize predictive models to adjust product store values automatically.",
      },
      {
        title: "Checkout Workflows",
        href: "/industries/e-commerce",
        desc: "Identify conversion bottlenecks and structure flawless UX patterns.",
      },
      {
        title: "Inventory Sync",
        href: "/industries/e-commerce",
        desc: "Connect modern warehouses and clear system silos instantly with AI middleware.",
      },
    ],
    spotlight: {
      title: "Scaling Modern Enterprise Stores to New Peaks",
      cta: "View Case Study",
      img: "/ecommerce.png",
    },
  },
  {
    id: "Education",
    label: "Education",
    href: "/industries/education",
    subServices: [
      {
        title: "Adaptive Learning",
        href: "/industries/education",
        desc: "Structure customized progress matrices for personalized student tracking.",
      },
      {
        title: "Workflow Management",
        href: "/industries/education",
        desc: "Automate grading checks, syllabus structures, and resource distributions.",
      },
      {
        title: "Virtual Advisors",
        href: "/industries/education",
        desc: "Provide around-the-clock structural campus guidance via natural language engines.",
      },
    ],
    spotlight: {
      title: "Reimagining Digital Education Ecosystems globally",
      cta: "Get White Paper",
      img: "/education.png",
    },
  },
];

const navItems = [
  { name: "Home",       href: "/",          dropdown: false },
  { name: "Services",   href: "/services",  dropdown: true  },
  { name: "Industries", href: "/industries", dropdown: true  },
  { name: "Blog",       href: "/blog",       dropdown: false },
  { name: "About",      href: "/about",      dropdown: false },
  { name: "Our Team",   href: "/our-team",   dropdown: false },
  { name: "Contact Us", href: "/contact",    dropdown: false },
];

export default function Navbar() {
  const pathname = usePathname();

  const [hoveredTab,       setHoveredTab]       = useState(null);
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isButtonHovered,  setIsButtonHovered]  = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile Dropdowns states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const [activeServicesTab,   setActiveServicesTab]   = useState(servicesMegaMenu[0].id);
  const [activeIndustriesTab, setActiveIndustriesTab] = useState(industriesMegaMenu[0].id);

  // Updated logic: Contact removed, Blog added for permanent light header view
  const isLightPage = pathname === "/proposal" || pathname.startsWith("/blog");
  const useDarkTheme = isScrolled || isLightPage;

  const getActiveTab = () => {
    if (pathname === "/") return "Home";
    const match = navItems.find(
      (item) => item.href !== "/" && pathname.startsWith(item.href)
    );
    return match ? match.name : null;
  };
  const activeTab = getActiveTab();

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText =
      "position:absolute;top:80px;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => { observer.disconnect(); sentinel.remove(); };
  }, []);

  const currentServicesData   = servicesMegaMenu.find((i) => i.id === activeServicesTab)   || servicesMegaMenu[0];
  const currentIndustriesData = industriesMegaMenu.find((i) => i.id === activeIndustriesTab) || industriesMegaMenu[0];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex justify-center
        transition-[padding,top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${useDarkTheme ? "top-0 px-0" : "top-4 md:top-6 px-4 md:px-8"}`}
    >
      <div
        className={`
          w-full flex flex-col items-center justify-between relative
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${useDarkTheme
            ? `max-w-[100%] px-6 md:px-10 py-3
               rounded-none
               bg-white/70 backdrop-blur-2xl
               border-b border-black/[0.03]
               shadow-[0_4px_24px_rgba(26,25,77,0.07),inset_0_-1px_0_rgba(0,0,0,0.04)]`
            : `max-w-[1240px] px-5 md:px-8 py-2.5
               rounded-none
               bg-white/[0.02] backdrop-blur-xl
               border border-white/[0.14]
            `
          }
        `}
      >
        {!useDarkTheme && (
          <div className="absolute top-0 left-6 right-6 h-[1px]
                          bg-gradient-to-r from-transparent via-white/40 to-transparent
                          rounded-full pointer-events-none" />
        )}

        <div className="w-full flex items-center justify-between relative">

          {/* ── Logo ──────────────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group z-50">
            <div className="relative w-9 h-9 md:w-10 md:h-10 overflow-hidden">
              <img
                src="/iconeee.png"
                alt="Agenticsense Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className={`font-bold text-lg md:text-xl tracking-wide transition-colors duration-300
              ${useDarkTheme ? "text-[#1a194d]" : "text-white"}`}>
              AgenticSense
            </span>
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────────────────── */}
          <ul
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${item.dropdown ? "static" : "relative"} cursor-pointer`}
                onMouseEnter={() => setHoveredTab(item.name)}
              >
                <Link href={item.href}>
                  <div
                    className={`
                      relative flex items-center gap-1.5 px-4 py-2.5
                      transition-all duration-300
                      ${activeTab === item.name || hoveredTab === item.name
                        ? useDarkTheme
                          ? "bg-[#1a194d]/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_0_0_1px_rgba(26,25,77,0.08)]"
                          : "bg-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : ""
                      }
                      ${useDarkTheme ? "text-slate-700 hover:text-[#1a194d]" : "text-white/80 hover:text-white"}
                    `}
                  >
                    {activeTab === item.name && (
                      <>
                        <div className={`absolute top-1.5 left-1.5 w-2 h-2
                          border-t-[1.5px] border-l-[1.5px] rounded-tl-[2px]
                          ${useDarkTheme ? "border-[#1a194d]" : "border-white"}`} />
                        <div className={`absolute bottom-1.5 right-1.5 w-2 h-2
                          border-b-[1.5px] border-r-[1.5px] rounded-br-[2px]
                          ${useDarkTheme ? "border-[#1a194d]" : "border-white"}`} />
                      </>
                    )}

                    {hoveredTab === item.name && activeTab !== item.name && (
                      <div className="absolute inset-1 pointer-events-none">
                        <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className={`absolute top-0 left-0 h-[1px] ${useDarkTheme ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className={`absolute top-0 left-0 w-[1px] ${useDarkTheme ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className={`absolute bottom-0 right-0 h-[1px] ${useDarkTheme ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className={`absolute bottom-0 right-0 w-[1px] ${useDarkTheme ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                      </div>
                    )}

                    <span className="relative z-10 text-[14px] font-medium">{item.name}</span>

                    {item.dropdown && (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                        className={`relative z-10 transition-transform duration-300 ${hoveredTab === item.name ? "rotate-180" : ""}`}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </Link>

                {/* ── MEGA MENU: SERVICES ──────────────────────────────────── */}
                {item.name === "Services" && item.dropdown && (
                  <AnimatePresence>
                    {hoveredTab === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className={`absolute top-full left-0 right-0 mx-auto mt-4 w-[90vw] max-w-[1200px] min-h-[410px] flex rounded overflow-hidden border shadow-2xl z-50 backdrop-blur-2xl
                          ${useDarkTheme
                            ? "bg-white border-slate-200 text-slate-800"
                            : "bg-[#0b0a14]/95 border-white/10 text-white"
                          }`}
                      >
                        {/* LEFT: Categories */}
                        <div className={`w-[25%] flex flex-col p-5 gap-1 border-r ${useDarkTheme ? "bg-slate-50/50 border-slate-100" : "bg-white/[0.02] border-white/5"}`}>
                          {servicesMegaMenu.map((menuItem) => (
                            <button
                              key={menuItem.id}
                              onMouseEnter={() => setActiveServicesTab(menuItem.id)}
                              onClick={() => setActiveServicesTab(menuItem.id)}
                              className={`flex items-center justify-between px-4 py-3 text-left font-semibold text-[13.5px] rounded-lg transition-all duration-200
                                ${activeServicesTab === menuItem.id
                                  ? useDarkTheme
                                    ? "bg-[#625eff]/10 text-[#625eff]"
                                    : "bg-white/10 text-white"
                                  : "hover:bg-slate-100/50 dark:hover:bg-white/5 opacity-80"
                                }`}
                            >
                              <span>{menuItem.label}</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                                className={`transition-transform duration-200 ${activeServicesTab === menuItem.id ? "translate-x-1" : ""}`}>
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          ))}
                        </div>

                        {/* CENTER: Sub-services */}
                        <div className="w-[50%] p-8 grid grid-cols-2 gap-x-8 gap-y-6 items-start content-start">
                          {currentServicesData.subServices.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.href}
                              onClick={() => setHoveredTab(null)}
                              className="group/item flex flex-col gap-1.5 cursor-pointer"
                            >
                              <h4 className="font-bold text-[14.5px] flex items-center gap-2 group-hover/item:text-[#625eff] transition-colors">
                                {sub.title}
                                {sub.isNew && (
                                  <span className="bg-blue-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                    New
                                  </span>
                                )}
                              </h4>
                              <p className={`text-[12.5px] leading-relaxed ${useDarkTheme ? "text-slate-500" : "text-slate-400"}`}>
                                {sub.desc}
                              </p>
                            </Link>
                          ))}
                        </div>

                        {/* RIGHT: Spotlight */}
                        <div className={`w-[25%] p-8 flex flex-col justify-between border-l ${useDarkTheme ? "bg-slate-50/40 border-slate-100" : "bg-white/[0.01] border-white/5"}`}>
                          <div className="flex flex-col justify-start">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Spotlight</span>
                            <div className="mt-3 relative rounded-lg overflow-hidden border border-white/5 aspect-[16/10] bg-gradient-to-br from-[#625eff]/20 to-purple-600/20 flex items-center justify-center shadow-sm max-h-[140px]">
                              {currentServicesData.spotlight.img ? (
                                <img src={currentServicesData.spotlight.img} alt="Spotlight" className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xs text-slate-500">Banner Asset</span>
                              )}
                            </div>
                            <h5 className="mt-4 font-bold text-[13px] leading-snug tracking-normal">
                              {currentServicesData.spotlight.title}
                            </h5>
                          </div>
                          <Link href="#" className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-[#625eff] hover:underline pt-1">
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

                {/* ── MEGA MENU: INDUSTRIES ────────────────────────────────── */}
                {item.name === "Industries" && item.dropdown && (
                  <AnimatePresence>
                    {hoveredTab === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className={`absolute top-full left-0 right-0 mx-auto mt-4 w-[90vw] max-w-[1200px] min-h-[410px] flex rounded overflow-hidden border shadow-2xl z-50 backdrop-blur-2xl
                          ${useDarkTheme
                            ? "bg-white border-slate-200 text-slate-800"
                            : "bg-[#0b0a14]/95 border-white/10 text-white"
                          }`}
                      >
                        {/* LEFT: Industry categories */}
                        <div className={`w-[25%] flex flex-col p-5 gap-1 border-r ${useDarkTheme ? "bg-slate-50/50 border-slate-100" : "bg-white/[0.02] border-white/5"}`}>
                          {industriesMegaMenu.map((menuItem) => (
                            <button
                              key={menuItem.id}
                              onMouseEnter={() => setActiveIndustriesTab(menuItem.id)}
                              onClick={() => setActiveIndustriesTab(menuItem.id)}
                              className={`flex items-center justify-between px-4 py-3 text-left font-semibold text-[13.5px] rounded-lg transition-all duration-200
                                ${activeIndustriesTab === menuItem.id
                                  ? useDarkTheme
                                    ? "bg-[#625eff]/10 text-[#625eff]"
                                    : "bg-white/10 text-white"
                                  : "hover:bg-slate-100/50 dark:hover:bg-white/5 opacity-80"
                                }`}
                            >
                              <span>{menuItem.label}</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                                className={`transition-transform duration-200 ${activeIndustriesTab === menuItem.id ? "translate-x-1" : ""}`}>
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          ))}
                        </div>

                        {/* CENTER: Industry sub-items */}
                        <div className="w-[50%] p-8 grid grid-cols-2 gap-x-8 gap-y-6 items-start content-start">
                          {currentIndustriesData.subServices.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.href}
                              onClick={() => setHoveredTab(null)}
                              className="group/item flex flex-col gap-1.5 cursor-pointer"
                            >
                              <h4 className="font-bold text-[14.5px] flex items-center gap-2 group-hover/item:text-[#625eff] transition-colors">
                                {sub.title}
                              </h4>
                              <p className={`text-[12.5px] leading-relaxed ${useDarkTheme ? "text-slate-500" : "text-slate-400"}`}>
                                {sub.desc}
                              </p>
                            </Link>
                          ))}
                        </div>

                        {/* RIGHT: Industry spotlight */}
                        <div className={`w-[25%] p-8 flex flex-col justify-between border-l ${useDarkTheme ? "bg-slate-50/40 border-slate-100" : "bg-white/[0.01] border-white/5"}`}>
                          <div className="flex flex-col justify-start">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Spotlight</span>
                            <div className="mt-3 relative rounded-lg overflow-hidden border border-white/5 aspect-[16/10] bg-gradient-to-br from-[#625eff]/20 to-purple-600/20 flex items-center justify-center shadow-sm max-h-[140px]">
                              {currentIndustriesData.spotlight.img ? (
                                <img src={currentIndustriesData.spotlight.img} alt="Spotlight" className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xs text-slate-500">Banner Asset</span>
                              )}
                            </div>
                            <h5 className="mt-4 font-bold text-[13px] leading-snug tracking-normal">
                              {currentIndustriesData.spotlight.title}
                            </h5>
                          </div>
                          <Link
                            href={currentIndustriesData.href}
                            onClick={() => setHoveredTab(null)}
                            className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-[#625eff] hover:underline pt-1"
                          >
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
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ───────────────────────────────────────────────── */}
          <Link href="/proposal" className="hidden lg:block">
            <button
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg
                font-semibold text-[14px] transition-all duration-300 overflow-hidden
                ${isButtonHovered
                  ? useDarkTheme
                    ? "bg-[#1a194d]/[0.08] text-[#1a194d] shadow-[inset_0_0_0_1px_rgba(26,25,77,0.15)]"
                    : "bg-white/[0.12] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                  : "bg-[#625eff] text-white"
                }`}
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
                  <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className={`absolute top-0 left-0 h-[1px] ${useDarkTheme ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                  <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className={`absolute top-0 left-0 w-[1px] ${useDarkTheme ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                  <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }} className={`absolute bottom-0 right-0 h-[1px] ${useDarkTheme ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                  <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }} className={`absolute bottom-0 right-0 w-[1px] ${useDarkTheme ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                </div>
              )}
              <span className="relative z-10 flex items-center gap-2">
                Request Proposal
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </button>
          </Link>

          {/* ── Mobile Hamburger ──────────────────────────────────────────── */}
          <button
            className={`lg:hidden p-2 z-50 focus:outline-none transition-colors duration-300
              ${useDarkTheme ? "text-[#1a194d]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* ── Mobile Dropdown Wrapper ───────────────────────────────────────── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full lg:hidden overflow-hidden mt-3 pt-3 border-t
                ${useDarkTheme ? "border-black/[0.06]" : "border-white/[0.10]"}`}
            >
              <ul className="flex flex-col py-2 gap-1">
                {navItems.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    
                    {/* Item Main Block */}
                    <div className="flex items-center justify-between w-full rounded-lg">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex-1 px-4 py-2.5 font-medium text-[15px] transition-colors
                          ${useDarkTheme
                            ? "text-slate-700 hover:bg-[#1a194d]/[0.06] hover:text-[#1a194d]"
                            : "text-white/85 hover:bg-white/[0.08] hover:text-white"
                          }`}
                      >
                        {item.name}
                      </Link>

                      {/* Dropdown Arrow Toggles for Mobile explicitly */}
                      {item.dropdown && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (item.name === "Services") setMobileServicesOpen(!mobileServicesOpen);
                            if (item.name === "Industries") setMobileIndustriesOpen(!mobileIndustriesOpen);
                          }}
                          className={`p-3 mr-2 transition-transform duration-300
                            ${useDarkTheme ? "text-slate-600" : "text-white/70"}
                            ${(item.name === "Services" && mobileServicesOpen) || (item.name === "Industries" && mobileIndustriesOpen) ? "rotate-180" : ""}`}
                        >
                          <svg width="12" height="8" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Mobile Services Submenu Inner Logic */}
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
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`py-1.5 text-[14px] font-semibold transition-colors
                                    ${useDarkTheme ? "text-slate-600 hover:text-[#625eff]" : "text-white/75 hover:text-white"}`}
                                >
                                  {sub.title}
                                </Link>
                              ))
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Mobile Industries Submenu Inner Logic */}
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
                                className={`py-1.5 text-[14px] font-semibold transition-colors
                                  ${useDarkTheme ? "text-slate-600 hover:text-[#625eff]" : "text-white/75 hover:text-white"}`}
                              >
                                {ind.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}

                {/* Mobile CTA */}
                <li className="mt-3 px-4 pb-2">
                  <Link href="/proposal" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="relative w-full flex justify-center items-center gap-2
                      bg-[#625eff] text-white px-7 py-3 rounded-xl
                      font-semibold text-[15px] overflow-hidden
                      shadow-[0_4px_20px_rgba(98,94,255,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]">
                      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                      Get In Touch
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
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