"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const TAB_DATA = [
  {
    id: "why-folio3",
    label: "Why AgenticSense?",
    title: "Why AgenticSense",
    subtitle: "We Don’t Just Build AI. We Build What Your Business Needs.",
    description:
      "Choosing the right AI partner matters. At AgenticSense, we start with your business not the technology.\n\nWith 12+ years of experience in AI and automation, we build secure, integrated Agentic AI Systems that connect agents, data, workflows, and automation to solve real business challenges.\n\nWe don’t believe in AI for the sake of AI. If there’s a better or simpler solution, we’ll tell you.",
    extraInfo: "",
    points: [],
    footerText:
      "Our goal is simple: build intelligent systems that work, scale, and create real business impact.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800",
    isGridPoints: false,
    isSuccessLayout: false
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
    isGridPoints: true,
    isSuccessLayout: false
  },
  {
    id: "our-success",
    label: "Our Success",
    isSuccessLayout: true,
    footerText: "We help enterprises transform how operations actually run, delivering measurable impact across the globe.",
    successCards: [
      {
        id: 1,
        title: "20",
        plus: "+",
        subtitle: "Years",
        desc: "Our tech innovation ideology sets us apart. Two decades of hands-on business IT solutions and AI Development work back that up."
      },
      {
        id: 2,
        title: "20",
        plus: "+",
        subtitle: "Industries",
        desc: "Each industry gets its own modules, built by an AI Development Company that treats every sector differently."
      },
      {
        id: 3,
        title: "4",
        plus: "+",
        subtitle: "Continents",
        desc: "Our footprint spans four continents. We're an AI Development Company built for more than just the local market."
      },
      {
        id: 4,
        title: "150",
        plus: "+",
        subtitle: "Employees",
        desc: "AI Development, Support Services, and everything in between. That's what our team delivers, aiming for full customer satisfaction."
      }
    ]
  }
];

export default function FolioTabsSection() {
  const [activeTab, setActiveTab] = useState("why-folio3");
  const currentData = TAB_DATA.find((tab) => tab.id === activeTab) || TAB_DATA[0];

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
              style={{ color: activeTab === tab.id ? "#1a3556" : "#818388" }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1a3556]"
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
            className="w-full"
          >
            {currentData.isSuccessLayout ? (
              /* "OUR SUCCESS" COMPACT GRID LAYOUT */
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
                
                {/* Column 1: Title & Card 1 */}
                <div className="flex flex-col gap-5">
                  <div className="mb-1">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a3556] leading-tight">
                      Our
                    
                   
                      Success
                    </h2>
                    <p className="text-sm lg:text-base text-[#1a3556] font-bold mt-2 leading-snug">
                      The performance that matters the most.
                    </p>
                  </div>
                  <SuccessCard data={currentData.successCards[0]} />
                </div>

                {/* Column 2: Card 2 (Offset Downwards) */}
                <div className="flex flex-col gap-5 md:mt-16">
                  <SuccessCard data={currentData.successCards[1]} />
                </div>

                {/* Column 3: Card 3 & 4 Stacked */}
                <div className="flex flex-col gap-5">
                  <SuccessCard data={currentData.successCards[2]} />
                  <SuccessCard data={currentData.successCards[3]} />
                </div>

              </div>
            ) : (
              /* ORIGINAL LEFT/RIGHT LAYOUT FOR OTHER TABS */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
                <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="absolute -bottom-5 -right-5 w-full h-full bg-[#f8fafc] -z-10 rounded" />
                  <div className="relative z-10 w-full aspect-square overflow-hidden shadow-lg border border-slate-100 rounded">
                    <img
                      src={currentData.image}
                      alt={currentData.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#dc1e25] [clip-path:polygon(100%_0%,_0%_100%,_100%_100%)]" />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3556] tracking-tight">
                    {currentData.title}
                  </h2>

                  {currentData.subtitle && (
                    <h3 className="text-2xl font-bold text-slate-800 leading-snug">
                      {currentData.subtitle}
                    </h3>
                  )}

                  <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em] whitespace-pre-wrap">
                    {currentData.description}
                  </p>

                  {currentData.extraInfo && (
                    <p className="text-sm font-semibold text-slate-800 pt-1">
                      {currentData.extraInfo}
                    </p>
                  )}

                  {currentData.isGridPoints ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                      {currentData.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="text-xs font-bold text-slate-800 leading-tight">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3 pt-2">
                      {currentData.points?.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-xs font-bold text-slate-800 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM FIXED INTERACTION UNIT */}
        <div className="w-full flex flex-col items-center justify-center text-center mt-20 pt-8 border-t border-slate-100 space-y-5">
          <p className="text-xs md:text-sm font-bold text-[#1a3556] max-w-3xl leading-relaxed px-4">
            {currentData.footerText}
          </p>
          <Link href="/contact" className="inline-block">
            <button className="bg-[#1a3556] text-white rounded-xl px-6 py-2.5 text-xs font-bold transition hover:bg-[#dc1e25] shadow-sm cursor-pointer">
              Let's Connect
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SuccessCard({ data }) {
  return (
    <div className="flex flex-col shadow-sm rounded overflow-hidden max-w-[280px] mx-auto w-full">
      {/* Smaller Top Header */}
      <div className="bg-[#1a3556] text-white p-3.5 pb-4">
        <h3 className="flex items-start text-3xl font-extrabold tracking-tight">
          {data.title}
          <span className="text-[#dc1e25] text-xl font-bold ml-1">{data.plus}</span>
        </h3>
        <p className="text-lg font-bold mt-0.5 tracking-wide">
          {data.subtitle}
        </p>
      </div>
      
      {/* Smaller Bottom Content */}
      <div className="bg-white border-x border-b border-gray-100 p-3.5 flex flex-col items-start">
        <p className="text-[11px] text-gray-700 font-medium leading-relaxed mb-3">
          {data.desc}
        </p>
      
      </div>
    </div>
  );
}