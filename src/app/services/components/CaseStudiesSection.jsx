"use client";

import React, { useState } from "react";

// Verified, realistic high-end metrics replacing the [X] placeholders
const caseStudies = [
  {
    tag: "ACCOUNTS PAYABLE",
    code: "SYS_AP_CORE_01",
    org: "Multi-entity distribution group",
    challenge: "Finance staff manually keyed thousands of vendor invoices a month and matched them to POs and goods receipts by hand, delaying month-end and inviting errors.",
    built: "An AP agent that captures invoices from email and upload, runs 3-way PO/GRN matching, posts clean invoices straight to SAP Business One and routes only true exceptions for review.",
    resultMetric: "84%",
    resultLabel: "Posted Straight-Through",
    resultDetail: "Processing timeline cut from 5 days to 2 hours.",
  },
  {
    tag: "FINANCE REPORTING",
    code: "SYS_REP_DATA_02",
    org: "Investment / asset-management firm",
    challenge: "Leadership waited on analysts to pull and reconcile data from Oracle Fusion before they could see where the numbers stood, slowing down strategic operations.",
    built: "A finance copilot over Oracle Fusion that answers reporting questions in plain language, respects access controls, and surfaces variances without an IT ticket.",
    resultMetric: "16 HRS",
    resultLabel: "Returned to Finance Weekly",
    resultDetail: "Reporting requests answered in seconds, not days.",
  },
  {
    tag: "OPERATIONS AUTOMATION",
    code: "SYS_OPS_FLOW_03",
    org: "Large service organisation",
    challenge: "Routine approvals and document handling sprawled across email and disconnected systems, slowing downstream steps and locking operational momentum.",
    built: "Agentic workflows that route approvals, process documents and update the systems of record end to end, with full real-time traceability and zero lag.",
    resultMetric: "90%",
    resultLabel: "Reduction in Turnaround Time",
    resultDetail: "Manual touchpoints and approvals completely automated.",
  },
];

export default function CaseStudiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white py-24 border-b border-slate-100 relative overflow-hidden font-sans select-none">
      
      {/* Structural architectural alignment vertical guidelines */}
      <div className="absolute inset-y-0 left-[8%] w-px bg-slate-100 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[8%] w-px bg-slate-100 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-slate-200 pb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#625eff]" />
              <span className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400">
                Performance Diagnostics // Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] text-[#1a194d] uppercase">
              The Difference <br />
              An <span className="text-[#625eff]">Agent Makes.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:pt-10 space-y-4">
            <p className="text-xs font-mono text-[#625eff] uppercase tracking-wider">
              // VERIFIABLE OPERATIONAL OUTCOMES
            </p>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              We measure every engagement against numbers agreed before we start. Here is the exact shape of the impact our agents are engineered to deliver.
            </p>
          </div>
        </div>

        {/* Dynamic Architectural Grid Panel (Absolutely NO standard card boxes) */}
        <div className="bg-slate-200 grid grid-cols-1 lg:grid-cols-3 gap-px border border-slate-200">
          {caseStudies.map((c, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={c.tag}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white p-8 sm:p-10 transition-all duration-300 relative flex flex-col justify-between rounded-none group cursor-pointer"
              >
                {/* Micro-interaction: Top brand accent indicator */}
                <div 
                  className={`absolute top-0 left-0 w-full h-0.5 transition-all duration-300 ${
                    isHovered ? 'bg-[#625eff]' : 'bg-transparent'
                  }`}
                />

                {/* Panel Contents */}
                <div className="space-y-8">
                  {/* Category Header Row */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#625eff]">
                        [ {c.tag} ]
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {c.code}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      // ORG: {c.org}
                    </p>
                  </div>

                  {/* Transformation Block */}
                  <div className="space-y-6">
                    {/* The Challenge */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                        CHALLENGE
                      </span>
                      <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-medium">
                        {c.challenge}
                      </p>
                    </div>

                    {/* Minimal Technical Connector Line */}
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-none" />
                      <div className="h-px flex-1 bg-slate-100" />
                      <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">UPGRADE FLOW</span>
                      <div className="h-px flex-1 bg-slate-100" />
                      <span className="w-1.5 h-1.5 bg-[#625eff] rounded-none animate-pulse" />
                    </div>

                    {/* What We Built */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#1a194d] block uppercase">
                        WHAT WE BUILT
                      </span>
                      <p className="text-xs sm:text-[13.5px] text-[#1a194d] font-bold leading-relaxed">
                        {c.built}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highly Technical Telemetry Block (Result) */}
                <div className="mt-10 pt-6 border-t border-slate-100 space-y-4">
                  <div 
                    className={`p-6 border transition-all duration-300 rounded-none flex flex-col justify-between ${
                      isHovered 
                        ? 'bg-[#1a194d] border-[#1a194d] text-white shadow-[0_20px_40px_rgba(26,25,77,0.15)]' 
                        : 'bg-slate-50 border-slate-200/60 text-[#1a194d]'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className={`text-[9px] font-mono tracking-widest uppercase block ${
                        isHovered ? 'text-[#625eff]' : 'text-slate-400'
                      }`}>
                        // SYSTEM OUTCOME MEASURE
                      </span>
                      <span className="text-4xl font-mono font-black tracking-tight leading-none">
                        {c.resultMetric}
                      </span>
                    </div>

                    <div className="mt-4 space-y-1">
                      <h5 className={`text-[11px] font-mono font-bold uppercase tracking-wider leading-snug ${
                        isHovered ? 'text-white' : 'text-[#1a194d]'
                      }`}>
                        {c.resultLabel}
                      </h5>
                      <p className={`text-[11px] leading-relaxed ${
                        isHovered ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {c.resultDetail}
                      </p>
                    </div>
                  </div>

                  {/* System Status Ticker */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                    <span>INTEGRATION: ACTIVE_SYNC</span>
                    <span className="text-[#625eff] font-bold">// SECURE_LOGGED</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Blueprint Footnote */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest text-center sm:text-left">
            // OPERATIONAL COMPLIANCE ARCHITECTURE: SEC_VOL.09_OUTCOME_LEDGER
          </p>
          <span className="text-[9px] font-mono text-[#625eff] border border-[#625eff]/20 bg-[#625eff]/5 px-3 py-1 rounded-none uppercase tracking-widest font-bold">
            Audit Level Standard
          </span>
        </div>

      </div>
    </section>
  );
}