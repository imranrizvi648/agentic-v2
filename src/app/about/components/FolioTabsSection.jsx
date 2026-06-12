"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Next.js Link import kiya
import { motion, AnimatePresence } from 'framer-motion';
import { Flag } from 'lucide-react';

const TAB_DATA = [
  {
    id: "why-folio3",
    label: "Why AgenticSense?",
    title: "We started AgenticSense",
    subtitle: "To Close the Gap Between AI Potential and Enterprise Reality",
    description: "Most AI projects dazzle in a demo, then quietly never reach production. AgenticSense was founded to solve exactly that problem. We are an agentic AI services company headquartered in Dubai with a delivery centre in Karachi, focused on one thing: production-grade AI agents that integrate directly with enterprise platforms and deliver measurable results.",
    extraInfo: "Our founding conviction is simple:",
    points: [
      "Build AI agents that complete workflows end to end — not tools that assist a step and hand it back.",
      "Integrate natively with ERP and CRM through official APIs — not fragile middleware.",
      "Go finance-first: AP, AR, GL, reconciliations and the month-end close at posting level.",
      "Govern every agent from day one: audit logging, access control, human-in-the-loop checkpoints.",
      "Deliver production systems, not slide decks — measured against outcomes agreed before we start."
    ],
    footerText: "We become your AI execution partner — embedded intelligence operating continuously on your behalf across the workflows that matter most.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800",
    isGridPoints: false
  },
  {
    id: "what-we-do",
    label: "What We Do",
    title: "We Build Agentic AI That Runs Where Your Business Actually Runs",
    subtitle: "",
    description: "AgenticSense specializes in developing AI agents, ERP-native automation platforms, data intelligence solutions and digital transformation strategies. We serve enterprises across the GCC, South Asia and Europe — from distribution groups and investment firms to healthcare networks and manufacturing operations.",
    extraInfo: "Our nine core services:",
    points: [
      "Agentic AI for the Office of Finance",
      "Enterprise ERP & CRM AI Integration",
      "Intelligent Document Processing & Invoice Automation",
      "Custom AI Agent Development",
      "Conversational AI & Enterprise Copilots",
      "Business Process Automation",
      "Data Intelligence & Decision Analytics",
      "Agentic AI Strategy & Readiness Consulting",
      "AI Governance, Security & MLOps"
    ],
    footerText: "Each service is built to the same hard standard: full end-to-end automation, no manual steps in the middle, and governance built in from the start.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    isGridPoints: true
  },
  {
    id: "our-strength",
    label: "Our Strength",
    title: "Our Strength",
    subtitle: "ERP-Native Expertise, Finance-First Depth, Enterprise Security",
    description: "AgenticSense combines deep agentic AI capability with certified ERP integration expertise:",
    extraInfo: "",
    points: [
      "SAP Business One: native Service Layer REST API and SAP HANA integration — posting-level finance automation.",
      "Oracle Fusion Cloud: REST APIs, OCI GenAI Agents and AI Agent Studio — finance copilots and operations agents.",
      "Microsoft Fabric & Azure AI Foundry: data engineering, predictive analytics and model services.",
      "NetSuite, Odoo, Zoho, Salesforce: official REST APIs — no third-party connectors, no middleware.",
      "Security by design: Microsoft Entra ID / Azure AD, OCI access control, full audit logging on every agent action."
    ],
    footerText: "From AP automation that posts straight to your ERP, to finance copilots that answer in plain language — we don't just implement AI. We transform how your operations run.",
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