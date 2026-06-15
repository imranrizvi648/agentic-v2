"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    id: "ai",
    title: "AI and Data Innovation",
    description:
      "Enterprise AI agents embedded in SAP & Oracle. Automate your workflows with full auditability.",
    tags: [
      { name: "Enterprise ERP & CRM-Native AI Integration", path: "/services/erp-crm-ai-integration" },
      { name: "Agentic AI for the Office of Finance", path: "/services/agentic-ai-finance" },
      { name: "Intelligent Document Processing", path: "/services/intelligent-document-processing" }
    ],
    imageUrl: "/Ai-and-data-annovation.jpg"
  },
  {
    id: "engineering",
    title: "Automation Excellence",
    description:
      "End-to-end automation solutions that connect AI agents directly to enterprise systems using official APIs, eliminating middleware dependencies and improving system reliability.",
    tags: [
      { name: "Business Process Automation Beyond Finance", path: "/services/business-process-automation" },
      { name: "Custom AI Agent Development", path: "/services/custom-ai-agent-development" },
      { name: "Conversational AI & Enterprise Copilots", path: "/services/conversational-ai-enterprise-copilots" }
    ],
    imageUrl: "/AutomationExcellence.jpg"
  },
  {
    id: "cloud",
    title: "Strategic AI Solution",
    description:
      "Multi-agent enterprise systems designed around your workflows, data architecture, and governance requirements to deliver scalable and production-ready AI capabilities.",
    tags: [
      { name: "Agentic AI Strategy & Readiness Consulting", path: "/services/agentic-ai-strategy-consulting" },
      { name: "Data Intelligence & Decision Analytics", path: "/services/data-intelligence-decision-analytics" }
    ],
    imageUrl: "/strategic-Ai.webp"
  },
  {
    id: "AI Governance & Security",
    title: "AI Governance & Security",
    description:
      "Secure, permission-aware AI systems that provide natural language access to enterprise data while maintaining compliance, governance, and full audit control.",
    tags: [
      { name: "AI Governance, Security & MLOps", path: "/services/ai-governance-security-mlops" }
    ],
    imageUrl: "/AI-governance.webp"
  },
];

export default function ServicesSection() {
  // Mobile par clicked card track karne ke liye state
  const [activeCard, setActiveCard] = useState(null);

  const handleCardToggle = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-brand-primary tracking-tight">
            Our AI & Automation Services
          </h2>
          <p className="mt-4 sm:mt-6 text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            Nine production-grade services. One operating principle: agentic AI that ships to production and runs where the work happens. Finance-first. Enterprise-ready.
          </p>
        </div>

        {/* VIP Sharp Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map(({ id, title, description, tags, imageUrl }) => {
            const isSelected = activeCard === id;

            return (
              <div 
                key={id}
                onClick={() => handleCardToggle(id)}
                className={`group relative h-[380px] sm:h-[420px] md:h-[420px] overflow-hidden rounded-none border bg-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer
                  ${isSelected 
                    ? "shadow-[0_20px_40px_rgba(98,94,255,0.15)] border-[#625eff]/60" 
                    : "border-slate-200/80 hover:shadow-[0_20px_40px_rgba(98,94,255,0.15)] hover:border-[#625eff]/60"
                  }`}
              >
                
                {/* ── Background Image Layer ── */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={imageUrl} 
                    alt={title}
                    fill
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                    className={`object-cover object-center transition-transform duration-1000 ease-out
                      ${isSelected ? "scale-105" : "scale-100 group-hover:scale-105"}`}
                    priority={id === "ai"}
                  />
                </div>

                {/* Dynamic Overlays */}
                {/* Default Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/10 transition-opacity duration-500
                  ${isSelected ? "opacity-0" : "group-hover:opacity-0"}`} 
                />
                
                {/* Hover/Active Premium Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-b from-[#0c0a21]/75 via-[#0c0a21]/85 to-[#050412]/95 backdrop-blur-[2px]
                  ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} 
                />
                
                {/* Top Linear Highlight Tracking */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#625eff] to-transparent transform transition-transform duration-500
                  ${isSelected ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} 
                />

                {/* ── Resting State ── */}
                <div className={`absolute bottom-0 inset-x-0 p-6 z-10 transition-all duration-500 ease-in-out
                  ${isSelected 
                    ? "opacity-0 translate-y-4" 
                    : "opacity-100 group-hover:opacity-0 group-hover:translate-y-4"
                  }`}
                >
                  <span className="inline-block w-8 h-[2px] bg-[#625eff] mb-3" />
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {title}
                  </h3>
                </div>

                {/* ── VIP Hover / Active State ── */}
                <div className={`absolute inset-0 z-20 flex flex-col justify-end p-5 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                  ${isSelected 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  
                  <div className="w-full">
              
                    
                    <h3 className="text-xl font-extrabold tracking-tight text-white mb-2.5 drop-shadow-sm">
                      {title}
                    </h3>
                    
                    <p className="text-slate-200 text-[12px] sm:text-[13px] leading-relaxed mb-4 font-normal drop-shadow-sm">
                      {description}
                    </p>
                    
                    {/* Premium Translucent Links */}
                    <div className="space-y-1.5 max-h-[190px] overflow-y-auto no-scrollbar" onClick={(e) => e.stopPropagation()}>
                      {tags.map((tag) => (
                        <Link 
                          key={tag.name} 
                          href={tag.path}
                          className="flex items-center justify-between p-2.5 rounded-none bg-white/[0.06] border border-white/10 hover:bg-[#625eff] hover:border-[#625eff] backdrop-blur-md transition-all duration-300 group/item"
                        >
                          <span className="text-[10px] font-semibold text-white uppercase tracking-wider truncate pr-2">
                            {tag.name}
                          </span>
                          
                          <svg 
                            className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-white transform group-hover/item:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}