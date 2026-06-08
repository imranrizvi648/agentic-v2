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
        bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "erp-crm-ai-integration",
        number: "02",
        title: "Enterprise ERP & CRM AI Integration",
        slug: "/services/erp-crm-ai-integration",
        overviewLead: "Most AI integrations rely on third-party middleware that breaks. We take a different position: if an official API exists, we use it.",
        badges: ["SAP", "Oracle Fusion", "NetSuite"],
        bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "intelligent-document-processing",
        number: "03",
        title: "IDP & Invoice Automation",
        slug: "/services/intelligent-document-processing",
        overviewLead: "Vendor invoices, receipts, and forms handled instantly — extracting with vision AI, validating, and posting directly into your system of record.",
        badges: ["Vision AI", "ERP Matching", "Direct Posting"],
        bgImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "custom-ai-agent-development",
        number: "04",
        title: "Custom AI Agent Development",
        slug: "/services/custom-ai-agent-development",
        overviewLead: "We build agents for approval chains spanning multiple systems and complex reconciliations that need to reason across multiple data sources.",
        badges: ["LangGraph", "FastAPI", "Claude / GPT"],
        bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
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
        bgImage: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "business-process-automation",
        number: "06",
        title: "Process Automation Beyond Finance",
        slug: "/services/business-process-automation",
        overviewLead: "Automate repetitive, rules-based work across your entire operations — approval chains, document routing, and supply chain decisions.",
        badges: ["Procurement", "HR Onboarding", "Supply Chain"],
        bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "data-intelligence-decision-analytics",
        number: "07",
        title: "Data Intelligence & Analytics",
        slug: "/services/data-intelligence-decision-analytics",
        overviewLead: "Dashboards show what happened. Decision agents tell you what to do. We build predictive models starting from your existing data sources.",
        badges: ["Fabric", "Oracle Analytics", "Azure AI"],
        bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
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
        bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "ai-governance-security-mlops",
        number: "09",
        title: "AI Governance, Security & MLOps",
        slug: "/services/ai-governance-security-mlops",
        overviewLead: "Every agent we ship has complete audit logging, granular access controls, human-in-the-loop checkpoints, and live active monitoring.",
        badges: ["Audit Trails", "HITL Controls", "MLOps Guard"],
        bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
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
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-14 sm:py-12 sm:py-10 sm:py-14 md:py-16 md:py-20 border-b border-slate-100 relative overflow-hidden font-sans select-none">
      
      {/* Background Glows for Depth */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#625eff]" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400">
                CAPABILITIES CATALOGUE // VOL. 02
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mx-auto max-w-4xl leading-tight">
              Our Services.
            </h2>
          </div>
         
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-slate-100 pb-2">
          <button
            onClick={() => setSelectedTab("ALL")}
            className={`px-5 py-2.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-200 rounded-none border ${
              selectedTab === "ALL"
                ? "bg-[#1a194d] border-[#1a194d] text-white shadow-md"
                : "border-transparent text-slate-400 hover:text-[#1a194d] hover:border-slate-200"
            }`}
          >
            [ All Capabilities ]
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.code}
              onClick={() => setSelectedTab(cat.code)}
              className={`px-5 py-2.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-200 rounded-none border ${
                selectedTab === cat.code
                  ? "bg-[#625eff] border-[#625eff] text-white shadow-md"
                  : "border-transparent text-slate-400 hover:text-[#625eff] hover:border-slate-200"
              }`}
            >
              {cat.label.split(" & ")[0]}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {filteredCategories.map((cat) => (
            <div key={cat.label} className="space-y-6">
              
              {/* Category Marker */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1a194d]" />
                  <h3 className="text-[11px] font-mono font-black uppercase tracking-[0.15em] text-brand-primary">
                    {cat.label}
                  </h3>
                </div>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                  // {cat.code}
                </span>
              </div>

              {/* Smooth Layered 3D Floating Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {cat.services.map((s) => (
                  <Link
                    key={s.id}
                    href={s.slug}
                    className="group bg-white/80 backdrop-blur-sm p-6 border border-slate-200/80 hover:border-[#625eff]/50 transition-all duration-300 ease-out flex flex-col justify-between relative rounded-none overflow-hidden shadow-[0_4px_20px_-4px_rgba(26,25,77,0.06),0_1px_4px_-1px_rgba(26,25,77,0.03)] hover:shadow-[0_20px_40px_-8px_rgba(98,94,255,0.18),0_1px_10px_-2px_rgba(98,94,255,0.06)] hover:-translate-y-2"
                  >
                    {/* Background Image Overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-105 pointer-events-none filter grayscale contrast-[1.1] mix-blend-multiply"
                      style={{ backgroundImage: `url(${s.bgImage})` }}
                    />

                    {/* Interactive Top Border Glow */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-[#625eff] group-hover:to-indigo-400 transition-all duration-300" />
                    
                    <div className="space-y-5 relative z-10">
                      {/* Top metadata row */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold tracking-wider text-slate-400 px-2 py-0.5 border border-slate-100 bg-white/90 group-hover:border-[#625eff]/20 group-hover:text-[#625eff] transition-all">
                          SYSTEM NO. {s.number}
                        </span>
                        
                        <span className="w-7 h-7 border border-slate-200 text-slate-400 flex items-center justify-center font-mono text-sm rounded-none bg-white group-hover:border-[#625eff] group-hover:bg-[#625eff] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                          →
                        </span>
                      </div>

                      {/* Service Title */}
                      <h4 className="text-[15px] font-bold text-[#1a194d] group-hover:text-[#625eff] transition-colors leading-tight uppercase tracking-tight">
                        {s.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                        {s.overviewLead}
                      </p>
                    </div>

                    {/* Badges Section */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 relative z-10">
                      {s.badges.map((badge) => (
                        <span 
                          key={badge} 
                          className="text-[9px] font-mono text-slate-500 bg-slate-50/50 border border-slate-200/60 px-2 py-0.5 rounded-none uppercase tracking-wide group-hover:bg-white group-hover:text-slate-600 group-hover:border-slate-300 transition-all"
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

        {/* Premium Footer CTA Banner */}
        <div className="border border-slate-200/80 p-6 bg-gradient-to-r from-white via-slate-50/50 to-white relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
          <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-[#625eff] to-transparent" />
          <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-[#625eff] to-transparent" />

          <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed tracking-wider">
            // Ready to define enterprise agents? Let&apos;s map out your systems.
          </p>
          <Link 
            href="/contact" 
            className="bg-[#1a194d] hover:bg-[#625eff] text-white font-mono text-[10px] font-bold uppercase py-3.5 px-4 sm:px-6 rounded-none transition-all duration-300 tracking-widest shadow-sm hover:shadow-[0_10px_20px_-5px_rgba(98,94,255,0.4)] hover:-translate-y-0.5"
          >
            Request Architecture Audit
          </Link>
        </div>

      </div>
    </section>
  );
}