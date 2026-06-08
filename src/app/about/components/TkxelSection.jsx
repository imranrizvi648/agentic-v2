"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SERVICES_DATA = [
  { id: 1, title: "We deploy AI agents natively inside your ERP and CRM", description: "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.", linkText: "See Our Services", graphicType: "star" },
  { id: 2, title: "We automate finance, procurement, HR and supply chain workflows", description: "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.", linkText: "See Automation Services", graphicType: "ring" },
  { id: 3, title: "We build custom AI agents for workflows your existing tools cannot handle", description: "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.", linkText: "See Custom AI Development", graphicType: "sphere" },
  { id: 4, title: "We govern every agent with audit logging, access control and monitoring from day one", description: "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.", linkText: "See Governance & Security", graphicType: "star" }
];

export default function TkxelSection() {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      SERVICES_DATA.forEach((item) => {
        const element = document.getElementById(`service-card-${item.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) setActiveId(item.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderGraphic = (type) => {
    const baseStyle = "w-30 h-30 bg-[#625eff] blur-[1px] shadow-xl shadow-blue-500/10";
    switch (type) {
      case "star": return <div className={`${baseStyle} [clip-path:polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)]`} />;
      case "ring": return <div className={`${baseStyle} rounded-full border-[20px] border-blue-600 bg-transparent`} />;
      case "sphere": return <div className={`${baseStyle} rounded-full bg-gradient-to-r from-cyan-400 to-blue-600`} />;
      default: return null;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 max-w-6xl mx-auto relative">

        {/* LEFT: Sticky */}
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)] flex flex-col justify-between py-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-brand-primary mb-4">
              Agentic AI, Finance Expertise <br className="hidden sm:block" /> and Enterprise Delivery
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-sm mb-5 sm:mb-6">
              Every engagement starts with your data, your ERP and measurable outcomes — agreed in writing before a line of code.
            </p>
            <button className="flex items-center gap-2 border border-slate-900 rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-slate-950 hover:text-white group">
              Explore all services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="mt-8 lg:mt-0 pt-6 border-t border-slate-100">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">Enabled by our partnerships</span>
            <div className="flex flex-wrap gap-4 sm:gap-5 items-center opacity-60 text-sm">
              <span className="font-bold">AWS</span>
              <span className="font-bold">Oracle Fusion</span>
              <span className="font-bold">SAP B1</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Scrolling Cards */}
        <div className="space-y-8 sm:space-y-12 pb-[15vh]">
          {SERVICES_DATA.map((item) => (
            <div key={item.id} id={`service-card-${item.id}`}
              className={`p-5 sm:p-6 rounded-md border transition-all duration-300 flex flex-col space-y-5 sm:space-y-6 bg-slate-50/50
                ${activeId === item.id ? 'border-[#625eff] shadow-md shadow-blue-500/5 bg-white' : 'border-slate-200'}`}>
              <div className="h-32 sm:h-40 flex items-center justify-start relative pl-2">
                <AnimatePresence mode="wait">
                  {activeId === item.id && (
                    <motion.div key={item.id} initial={{ opacity: 0, scale: 0.7, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.8, rotate: 20 }} transition={{ duration: 0.4, ease: "easeOut" }} className="origin-center">
                      {renderGraphic(item.graphicType)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-brand-primary leading-snug">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                <div className="pt-1 sm:pt-2">
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider group">
                    {item.linkText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
