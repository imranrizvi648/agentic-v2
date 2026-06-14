"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Next.js Link import kiya
import { motion, AnimatePresence } from 'framer-motion';
import { Flag } from 'lucide-react';

const TAB_DATA = [
  {
    id: "why-folio3",
    label: "Why AgenticSense?",
    title: "We founded AgenticSense",
    subtitle: "To bridge the gap between AI potential and enterprise execution",
    description:
      "Most AI initiatives succeed in pilots but fail to scale into production. AgenticSense was created to address this gap. We are an agentic AI services company headquartered in Dubai with a delivery center in Karachi, focused on building production-grade AI systems that integrate with enterprise platforms and deliver measurable business outcomes.",
    extraInfo: "Our core principles:",
    points: [
      "Build AI agents that execute workflows end to end, not tools that only assist individual steps.",
      "Integrate natively with ERP and CRM systems through official APIs, avoiding fragile middleware.",
      "Focus on finance-first processes including AP, AR, GL, reconciliations, and month-end close at posting level.",
      "Embed governance from day one with audit logging, access controls, and human-in-the-loop checkpoints.",
      "Deliver production systems with measurable outcomes defined before implementation begins."
    ],
    footerText:
      "We act as your AI execution partner, embedding intelligent systems directly into your operations to continuously support critical business workflows.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800",
    isGridPoints: false
  },
  {
    id: "what-we-do",
    label: "What We Do",
    title: "We Build Enterprise AI Where Your Business Operates",
    subtitle: "",
    description:
      "AgenticSense develops AI agents, ERP-native automation systems, data intelligence platforms, and digital transformation solutions for enterprises across the GCC, South Asia, and Europe, including distribution, financial services, healthcare, and manufacturing sectors.",
    extraInfo: "Our core service areas:",
    points: [
      "Agentic AI for Finance Operations",
      "ERP & CRM AI Integration",
      "Document Processing & Invoice Automation",
      "Custom AI Agent Development",
      "Enterprise Copilots & Conversational AI",
      "Business Process Automation",
      "Data Intelligence & Decision Analytics",
      "AI Strategy & Readiness Consulting",
      "AI Governance, Security & MLOps"
    ],
    footerText:
      "Every solution follows the same standard: full workflow automation, no manual steps in execution, and governance built in from the start.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    isGridPoints: true
  },
  {
    id: "our-strength",
    label: "Our Strength",
    title: "Our Strength",
    subtitle: "ERP-native expertise, finance-first depth, enterprise-grade security",
    description:
      "AgenticSense combines advanced agentic AI capabilities with deep enterprise system integration expertise across leading platforms:",
    extraInfo: "",
    points: [
      "SAP Business One: Service Layer APIs and SAP HANA integration for finance-level automation.",
      "Oracle Fusion Cloud: REST APIs and OCI AI services for enterprise copilots and operations automation.",
      "Microsoft Fabric & Azure AI: data engineering, analytics, and AI model deployment at scale.",
      "NetSuite, Odoo, Zoho, Salesforce: native API-based integrations without middleware dependencies.",
      "Security-first architecture with Entra ID, OCI IAM, and full audit logging across all agent actions."
    ],
    footerText:
      "From AP automation that posts directly into ERP systems to intelligent copilots that respond in natural language, we help enterprises transform how operations actually run.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=800",
    isGridPoints: false
  }
];

export default function FolioTabsSection() {
  const [activeTab, setActiveTab] = useState("why-folio3");
  const currentData = TAB_DATA.find(tab => tab.id === activeTab);

  return (
    <section className="w-full bg-white text-gray-900 font-sans py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* TAB HEADERS NAVIGATION */}
        <div className="w-full border-b border-slate-200 flex justify-start items-center gap-12 mb-16 overflow-x-auto scrollbar-none">
          {TAB_DATA.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-3 text-sm font-bold tracking-wide transition-colors whitespace-nowrap cursor-pointer"
              style={{ color: activeTab === tab.id ? '#0f172a' : '#64748b' }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* TAB CONTENT HOUSING */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start"
          >
            
            {/* LEFT SIDE: Image Block Layering */}
            <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0">
              {/* Backing Card Box */}
              <div className="absolute -bottom-5 -right-5 w-full h-full bg-[#f8fafc] -z-10 rounded" />
              
              {/* Main Image Frame */}
              <div className="relative z-10 w-full aspect-square overflow-hidden shadow-lg border border-slate-100 rounded">
                <img 
                  src={currentData.image} 
                  alt={currentData.label}
                  className="w-full h-full object-cover"
                />
                {/* Yellow Accent Wedge */}
                <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#ecc94b] [clip-path:polygon(100%_0%,_0%_100%,_100%_100%)]" />
              </div>
            </div>

            {/* RIGHT SIDE: Typography & Lists */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">
                {currentData.title}
              </h2>
              
              {currentData.subtitle && (
                <h3 className="text-2xl font-bold text-slate-800 leading-snug">
                  {currentData.subtitle}
                </h3>
              )}
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentData.description}
              </p>

              {currentData.extraInfo && (
                <p className="text-sm font-semibold text-slate-800 pt-1">
                  {currentData.extraInfo}
                </p>
              )}

              {/* Conditional Layout Strategy for Point Lists */}
              {currentData.isGridPoints ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                  {currentData.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Flag className="w-3.5 h-3.5 text-red-500 fill-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs font-bold text-slate-800 leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3 pt-2">
                  {currentData.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Flag className="w-3.5 h-3.5 text-red-500 fill-red-500 mt-1 flex-shrink-0" />
                      <span className="text-xs font-bold text-slate-800 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* BOTTOM FIXED INTERACTION UNIT */}
        <div className="w-full flex flex-col items-center justify-center text-center mt-20 pt-8 border-t border-slate-100 space-y-5">
          <p className="text-xs md:text-sm font-bold text-slate-800 max-w-3xl leading-relaxed px-4">
            {currentData.footerText}
          </p>
          
          {/* Button wrapped seamlessly inside Next.js Link wrapper */}
          <Link href="/contact" className="inline-block">
            <button className="border border-slate-900 rounded-xl px-4 sm:px-6 py-2 text-xs font-bold transition hover:bg-slate-950 hover:text-white shadow-sm cursor-pointer">
              Let's Connect
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}