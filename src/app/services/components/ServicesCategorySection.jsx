"use client";

import React, { useState } from "react";

const Link = ({ href, children, className, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Navigating to: ${href}`);
  };

  return (
    <a 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

const categories = [
  {
    label: "Core AI Services",
    code: "CORE_SERVICES",
    services: [
      {
        id: "agentic-ai-finance",
        number: "01",
        title: "Agentic AI for the Office of Finance",
        slug: "/services/agentic-ai-finance",
        overviewLead: "Finance automation fails when it stops at extraction. Our agents go all the way — they capture, validate, match, post and reconcile inside your ERP.",
        badges: ["SAP Business One", "Oracle Fusion", "Microsoft Fabric"],
        bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" // Finance/accounting desk
      },
      {
        id: "erp-crm-ai-integration",
        number: "02",
        title: "Enterprise ERP & CRM AI Integration",
        slug: "/services/erp-crm-ai-integration",
        overviewLead: "Most AI integrations rely on third-party middleware that breaks. We take a different position: if an official API exists, we use it.",
        badges: ["SAP", "Oracle Fusion", "NetSuite"],
        bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" // Server racks
      },
      {
        id: "intelligent-document-processing",
        number: "03",
        title: "IDP & Invoice Automation",
        slug: "/services/intelligent-document-processing",
        overviewLead: "Vendor invoices, receipts, and forms handled instantly — extracting with vision AI, validating, and posting directly into your system of record.",
        badges: ["Vision AI", "ERP Matching", "Direct Posting"],
        bgImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" // Clean paperwork/documents
      },
      {
        id: "custom-ai-agent-development",
        number: "04",
        title: "Custom AI Agent Development",
        slug: "/services/custom-ai-agent-development",
        overviewLead: "We build agents for approval chains spanning multiple systems and complex reconciliations that need to reason across multiple data sources.",
        badges: ["LangGraph", "FastAPI", "Claude / GPT"],
        bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" // Abstract tech coding lines
      },
    ],
  },
  {
    label: "Intelligence & Automation",
    code: "INTEL_AUTO",
    services: [
      {
        id: "conversational-ai-enterprise-copilots",
        number: "05",
        title: "Conversational AI & Copilots",
        slug: "/services/conversational-ai-enterprise-copilots",
        overviewLead: "Don't wait on analysts to pull data from Oracle Fusion. Let internal teams query records instantly using plain language.",
        badges: ["MS Teams", "Outlook", "Secure DB Query"],
        bgImage: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80" // Chat screen/UI reference
      },
      {
        id: "business-process-automation",
        number: "06",
        title: "Process Automation Beyond Finance",
        slug: "/services/business-process-automation",
        overviewLead: "Automate repetitive, rules-based work across your entire operations — approval chains, document routing, and supply chain decisions.",
        badges: ["Procurement", "HR Onboarding", "Supply Chain"],
        bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" // Modern supply chain center
      },
      {
        id: "data-intelligence-decision-analytics",
        number: "07",
        title: "Data Intelligence & Analytics",
        slug: "/services/data-intelligence-decision-analytics",
        overviewLead: "Dashboards show what happened. Decision agents tell you what to do. We build predictive models starting from your existing data sources.",
        badges: ["Fabric", "Oracle Analytics", "Azure AI"],
        bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" // Charts/business dashboard
      },
    ],
  },
  {
    label: "Strategy & Operations",
    code: "STRAT_OPS",
    services: [
      {
        id: "agentic-ai-strategy-consulting",
        number: "08",
        title: "Agentic AI Strategy Consulting",
        slug: "/services/agentic-ai-strategy-consulting",
        overviewLead: "Solve the readiness problem before deploying. We analyze your data structures, ERP APIs, and custom compliance rules.",
        badges: ["GCC", "South Asia", "Europe Readiness"],
        bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" // Boardroom strategy meeting
      },
      {
        id: "ai-governance-security-mlops",
        number: "09",
        title: "AI Governance, Security & MLOps",
        slug: "/services/ai-governance-security-mlops",
        overviewLead: "Every agent we ship has complete audit logging, granular access controls, human-in-the-loop checkpoints, and live active monitoring.",
        badges: ["Audit Trails", "HITL Controls", "MLOps Guard"],
        bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" // Digital security/lock visualization
      },
    ],
  },
];

export default function ServicesCategorySection() {
  const [selectedTab, setSelectedTab] = useState("ALL");

  const filteredCategories = selectedTab === "ALL" 
    ? categories 
    : categories.filter(cat => cat.code === selectedTab);

  return (
    <section className="bg-white py-16 border-b border-slate-100 relative overflow-hidden font-sans select-none">
      
      {/* Structural technical grid lines */}
      <div className="absolute inset-y-0 left-[6%] w-px bg-slate-50 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[6%] w-px bg-slate-50 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        
        {}
        <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#625eff]" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400">
                CAPABILITIES CATALOGUE // VOL. 02
              </span>
            </div>
            <h2 className="text-2xl sm:text-3.5xl font-black tracking-tight text-[#1a194d] leading-none uppercase">
              Nine Services, One Operating Principle.
            </h2>
          </div>
          <div className="max-w-xs md:text-right">
            <p className="text-[11px] text-slate-500 leading-normal font-medium">
              Agentic AI that ships to production and runs directly where your enterprise operations happen.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-wrap gap-1 border-b border-slate-100 pb-2">
          <button
            onClick={() => setSelectedTab("ALL")}
            className={`px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-150 rounded-none border ${
              selectedTab === "ALL"
                ? "bg-[#1a194d] border-[#1a194d] text-white"
                : "border-transparent text-slate-400 hover:text-[#1a194d] hover:border-slate-200"
            }`}
          >
            [ All Capabilities ]
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.code}
              onClick={() => setSelectedTab(cat.code)}
              className={`px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-150 rounded-none border ${
                selectedTab === cat.code
                  ? "bg-[#625eff] border-[#625eff] text-white"
                  : "border-transparent text-slate-400 hover:text-[#625eff] hover:border-slate-200"
              }`}
            >
              {cat.label.split(" & ")[0]}
            </button>
          ))}
        </div>

        {}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => (
            <div key={cat.label} className="space-y-4">
              
              {/* Category Marker with Monospaced Details */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1a194d]" />
                  <h3 className="text-[11px] font-mono font-black uppercase tracking-[0.15em] text-[#1a194d]">
                    {cat.label}
                  </h3>
                </div>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                  // {cat.code}
                </span>
              </div>

              {/* Grid System with strictly sharp geometry and compact density */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.services.map((s) => (
                  <Link
                    key={s.id}
                    href={s.slug}
                    className="group bg-white p-5 hover:bg-slate-50/40 border border-slate-200 transition-all duration-200 flex flex-col justify-between relative rounded-none hover:border-[#625eff]/60 overflow-hidden"
                  >
                    {/* Background Image Watermark: Clean, subtle, low opacity grayscale image overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out opacity-[0.05] group-hover:opacity-[0.15] group-hover:scale-105 pointer-events-none filter grayscale contrast-[1.2] mix-blend-multiply"
                      style={{ backgroundImage: `url(${s.bgImage})` }}
                    />

                    {/* Top border line indicator that activates on hover */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#625eff] transition-all" />
                    
                    <div className="space-y-4 relative z-10">
                      {/* Top metadata row */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold tracking-wider text-slate-400 px-2 py-0.5 border border-slate-100 bg-white/80 group-hover:border-[#625eff]/20 group-hover:text-[#625eff] transition-all">
                          SYSTEM NO. {s.number}
                        </span>
                        
                        <span className="w-6 h-6 border border-slate-200 text-slate-400 flex items-center justify-center font-mono text-xs rounded-none bg-white/85 group-hover:border-[#625eff] group-hover:bg-[#625eff] group-hover:text-white transition-all duration-200">
                          →
                        </span>
                      </div>

                      {/* Service Title */}
                      <h4 className="text-[15px] font-bold text-[#1a194d] group-hover:text-[#625eff] transition-colors leading-tight uppercase tracking-tight">
                        {s.title}
                      </h4>

                      {/* Trimmed down overview text for clean, professional data density */}
                      <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                        {s.overviewLead}
                      </p>
                    </div>

                    {/* Compact sharp badges */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 relative z-10">
                      {s.badges.map((badge) => (
                        <span 
                          key={badge} 
                          className="text-[9px] font-mono text-slate-500 bg-white/90 border border-slate-200 px-2 py-0.5 rounded-none uppercase tracking-wide group-hover:bg-white"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>

        {}
        <div className="border border-slate-200 p-6 bg-white relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-none">
          <div className="absolute top-0 right-0 w-16 h-px bg-[#625eff]" />
          <div className="absolute top-0 right-0 w-px h-16 bg-[#625eff]" />

          <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed tracking-wider">
            // Ready to define enterprise agents? Let&apos;s map out your systems.
          </p>
          <Link 
            href="/contact" 
            className="bg-[#1a194d] hover:bg-[#625eff] text-white font-mono text-[10px] font-bold uppercase py-3 px-5 rounded-none transition-all duration-150 tracking-widest border border-transparent"
          >
            Request Architecture Audit
          </Link>
        </div>

      </div>
    </section>
  );
}