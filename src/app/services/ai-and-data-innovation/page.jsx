"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIDataInnovationPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Structured Core Content mapped explicitly for deep keyword density (SEO Friendly)
  const coreServices = [
    {
      title: "AI Agents",
      badge: "Most Requested",
      slug: "ai-agents",
      desc: "Deploy context-aware virtual processors capable of independent multi-step execution. Our AI agents interface directly with internal systems, parsing complex transaction flows, executing data validation steps, and eliminating hours of manual overhead.",
      keywords: ["Autonomous Workflows", "Contextual LLM Routing", "Cognitive Automation Engine"]
    },
    {
      title: "Intelligent Automation",
      badge: "Scale Architecture",
      slug: "intelligent-automation",
      desc: "Supercharge your business operations by injecting machine intelligence into legacy software stacks. From processing disorganized document structures to syncing multi-tenant records across dynamic cloud nodes, we eliminate system silos.",
      keywords: ["Process Standardization", "Enterprise Pipeline Optimization", "Legacy Stacks Modernization"]
    },
    {
      title: "GenAI Models",
      badge: "Custom Training",
      slug: "genai-models",
      desc: "Own your proprietary intelligence. We engineer fine-tuned, specialized enterprise models trained on your isolated business logs, enforcing strict structural validations to completely eliminate system hallucinations and token leaks.",
      keywords: ["Proprietary Data Ingestion", "Strict JSON Schema Guards", "Fine-Tuning Architecture"]
    }
  ];

  return (
    <div className="bg-[#0b0a14] text-white min-h-screen font-sans overflow-x-hidden selection:bg-[#625eff]/30 selection:text-white">
      
      {/* ────────────────────────────────────────────────────────
          1. HERO HEADER SECTION (SEO Optimized H1 Layer)
          ──────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-4 md:px-8 max-w-[1240px] mx-auto text-center relative z-10">
        {/* Ambient Premium Lighting */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#625eff]/10 rounded-full blur-[140px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
        >
          <span className="w-1.5 h-1.5 bg-[#625eff] rounded-full" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Enterprise AI Layer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-[950px] mx-auto bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent"
        >
          AI & Data Innovation Infrastructure for Enterprise Scaling
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-slate-400 text-base md:text-lg max-w-[700px] mx-auto leading-relaxed font-medium"
        >
          Eliminate operational friction, unify data pipelines, and scale transaction integrity with specialized large language models and independent agentic computing architectures.
        </motion.p>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. CORE GRID ARRAY: MAPPED SUB-SERVICES
          ──────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-xl p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-all duration-300 hover:border-white/[0.14] overflow-hidden group"
            >
              {/* Glowing Background Accent Loop */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#625eff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Text Layout */}
              <div className="max-w-[750px] relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm text-[#625eff] font-bold tracking-wider">// 0{index + 1}</span>
                  <span className="bg-[#625eff]/10 text-[#625eff] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-widest">
                    {service.badge}
                  </span>
                </div>
                
                {/* Semantic H2 Tags for robust search engine indexing */}
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-white group-hover:text-[#625eff] transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-slate-400 text-[14px] md:text-[15px] leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>

                {/* Keyword Tag Pill Container (SEO Booster) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.keywords.map((kw, idx) => (
                    <span key={idx} className="bg-white/[0.02] border border-white/5 text-slate-400 text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Dynamic Link Trigger */}
              <div className="flex-shrink-0 relative z-10 w-full lg:w-auto">
                <Link href={`/services/${service.slug}`}>
                  <button className="w-full lg:w-auto flex items-center justify-center gap-3 bg-white/[0.03] border border-white/10 hover:border-white/20 text-white font-bold text-[13.5px] px-6 py-4 rounded-xl transition-all duration-300 group-hover:bg-[#625eff] group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(98,94,255,0.25)]">
                    Explore Configuration
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </Link>
              </div>

              {/* Box Corner Accent Flags */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[1px] h-4 bg-white/10 group-hover:bg-[#625eff]/40 transition-colors" />
                <div className="absolute top-0 right-0 h-[1px] w-4 bg-white/10 group-hover:bg-[#625eff]/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. SPOTLIGHT STRATEGIC MARKETING PANEL
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 max-w-[1240px] mx-auto border-t border-white/[0.06] relative z-10">
        <div className="border border-white/[0.08] bg-[#0e0d1a]/60 rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden relative">
          
          {/* Internal visual geometry lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

          {/* Left Column Text details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#625eff] uppercase mb-2 block">
              Featured Insights // White Paper
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-4">
              Generative AI in Business Operations: C-Suite AI Adoption Strategies
            </h3>
            <p className="text-slate-400 text-[14px] md:text-[15px] leading-relaxed mb-6 font-medium">
              Download our tactical engineering blueprint detailing security protocols, dynamic orchestration layer routing models, and resource budgeting structures built for current enterprise systems.
            </p>
            <Link href="#">
              <button className="flex items-center gap-2 text-[14px] font-bold text-[#625eff] hover:underline group">
                Get the white paper
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Right Column High-Fi Image Fallback Wrapper */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full aspect-[16/10] rounded-xl border border-white/5 bg-gradient-to-br from-[#625eff]/20 via-purple-600/10 to-transparent flex items-center justify-center shadow-inner overflow-hidden group/img">
              <img 
                src="/spotlight-ai.png" 
                alt="Generative AI Adoption Cover Mockup" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                onError={(e) => {
                  // Fallback state rendering if server resource isn't bound yet
                  e.target.style.display = "none";
                  document.getElementById("spotlight-fallback").style.display = "flex";
                }}
              />
              <div id="spotlight-fallback" className="hidden absolute inset-0 flex-col justify-center items-center text-center p-6 bg-[#090812]/90">
                <span className="font-mono text-xs text-[#625eff] bg-[#625eff]/10 px-3 py-1 rounded-full mb-3">SYSTEM_ASSET_SECURE</span>
                <p className="text-[12px] text-slate-500 font-bold max-w-[220px]">C-Suite Strategy Playbook Matrix Interface</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. FOOTER CLOSING CALL TO ACTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 md:px-8 text-center max-w-[700px] mx-auto relative z-10 mb-12">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight">Accelerate Your Core Engineering</h3>
        <p className="text-slate-400 mt-3 mb-8 text-[14px] md:text-[15px] font-medium leading-relaxed">
          Partner with our team to configure standalone artificial intelligence workflows mapped precisely around your operational KPIs.
        </p>
        <Link href="/contact">
          <button className="bg-[#625eff] text-white px-8 py-4 rounded-xl font-bold text-[14px] transition-all duration-300 shadow-[0_4px_24px_rgba(98,94,255,0.3)] hover:opacity-95">
            Connect with an Architect
          </button>
        </Link>
      </section>

    </div>
  );
}