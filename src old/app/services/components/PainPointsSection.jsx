"use client";

import React, { useState } from 'react';

const styleVariables = `
  :root {
    --color-brand-primary: #1a194d;
    --color-brand-secondary: #625eff;
  }
  
  /* Customized sleek range slider track for the boxy ROI tool */
  input[type="range"]::-webkit-slider-runnable-track {
    background: #f1f5f9;
    height: 4px;
    border-radius: 0px;
  }
  input[type="range"]::-webkit-slider-thumb {
    background: var(--color-brand-secondary);
    border: none;
    width: 12px;
    height: 12px;
    border-radius: 0px;
    cursor: pointer;
    margin-top: -4px;
    transition: background 0.15s ease;
  }
  input[type="range"]::-webkit-slider-thumb:hover {
    background: var(--color-brand-primary);
  }
`;

export default function PainPointsSection() {
  const [viewMode, setViewMode] = useState('standard'); // 'standard' or 'impact'
  const [hoursSpent, setHoursSpent] = useState(30);
  const [hourlyRate, setHourlyRate] = useState(55);

  const painPoints = [
    {
      id: "01",
      category: "FINANCIAL PIPELINES",
      problem: "Your finance team keys the same invoice data two or three times.",
      solution: "An AP agent captures, matches and posts it once — straight into your ERP.",
      impact: "Saves 15 Hours / Wk",
      metric: "99.2% Capture Precision",
      // Custom minimal architectural SVG
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" d="M3 3h18v18H3V3zm6 6h6m-6 4h6m-6 4h3" />
        </svg>
      )
    },
    {
      id: "02",
      category: "DELIVERY RISK",
      problem: "AI pilots dazzle in a demo, then quietly never reach production.",
      solution: "We build for production from day one, on your live stack — not for the demo.",
      impact: "100% Live Deploy",
      metric: "Zero Simulated Sandboxes",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" d="M12 3v18M3 12h18M12 3l9 9-9 9-9-9 9-9z" />
        </svg>
      )
    },
    {
      id: "03",
      category: "WORKFLOW INTEGRATION",
      problem: "Your 'automation' still needs someone clicking through SAP screens.",
      solution: "Full end-to-end automation is our hard standard — the agent finishes the job.",
      impact: "0% Manual Action",
      metric: "Autonomous Core Integration",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" d="M4 4h16v16H4V4zm4 4l8 8M16 8l-8 8" />
        </svg>
      )
    },
    {
      id: "04",
      category: "PERIOD CLOSE",
      problem: "Month-end close swallows a week your team never gets back.",
      solution: "Close-orchestration agents prepare journals, reconcile and flag variances in the background.",
      impact: "1-Day Close Cycle",
      metric: "Continuous Sync Audits",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" d="M8 2v4M16 2v4M3 6h18v15H3V6zm5 6h8" />
        </svg>
      )
    },
    {
      id: "05",
      category: "ERP INTELLIGENCE",
      problem: "The answers are in your ERP, but no one can get them without IT.",
      solution: "A copilot lets your team ask in plain language and get answers from real records.",
      impact: "Instant SQL/Queries",
      metric: "Self-Serve Execution",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: "06",
      category: "SYSTEM ROBUSTNESS",
      problem: "Connectors break every time the ERP updates.",
      solution: "We build on official APIs, so your automation survives the next upgrade.",
      impact: "99.99% Live Uptime",
      metric: "Zero Maintenance Overhead",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  /* Calculation formula metrics */
  const annualLoss = hoursSpent * hourlyRate * 52;
  const standardAgentEfficiency = 0.84; // 84% operational recovery rate
  const annualSavings = Math.round(annualLoss * standardAgentEfficiency);

  return (
    <section className="bg-white py-14 sm:py-20 md:py-24 text-[#1a194d] relative overflow-hidden font-sans select-none">
      <style dangerouslySetInnerHTML={{ __html: styleVariables }} />

      {/* Modern thin structured grid guidelines to frame the section elegantly */}
      <div className="absolute inset-y-0 left-[8%] w-px bg-slate-100 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[8%] w-px bg-slate-100 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:px-12 lg:px-16 relative z-10">

        {}
        <div className="border-b border-slate-200 pb-12 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
           
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mx-auto max-w-4xl leading-tight">
              You Don&apos;t Have an AI Problem. <br />
              You HaveExpensive, Repetitive Work.
            </h2>
          </div>

          {/* Minimalist Tab/Toggle Controller with Sharp Edges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="inline-flex bg-slate-100 p-1 rounded-none border border-slate-200/60">
              <button
                onClick={() => setViewMode('standard')}
                className={`py-2 px-4 rounded-none font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-150 ${
                  viewMode === 'standard'
                    ? 'bg-[#1a194d] text-white'
                    : 'text-slate-500 hover:text-[#1a194d]'
                }`}
              >
                Standard view
              </button>
              <button
                onClick={() => setViewMode('impact')}
                className={`py-2 px-4 rounded-none font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-150 flex items-center gap-2 ${
                  viewMode === 'impact'
                    ? 'bg-[#625eff] text-white'
                    : 'text-slate-500 hover:text-[#1a194d]'
                }`}
              >
                <span className={`w-1.5 h-1.5 ${viewMode === 'impact' ? 'bg-white' : 'bg-[#625eff]'}`} />
                Impact Metrics
              </button>
            </div>
          </div>
        </div>

        {}
        {/* The gap-px background trick creates perfect, crisp 1px division borders between cells without bulky card margins */}
        <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-t border-b border-l border-r border-slate-200 mb-16">
          {painPoints.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 hover:bg-slate-50/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Card Header Info */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <span className="font-mono text-[10px] tracking-widest text-slate-400">
                    {item.id} // {item.category}
                  </span>
                  
                  {/* Smooth View Mode Indicator */}
                  <div className="text-slate-400 transition-colors duration-300 group-hover:text-[#625eff]">
                    {item.icon}
                  </div>
                </div>

                {/* Legacy System / Problem State */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold tracking-wider text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-none border border-slate-200">
                      [01 / LEGACY]
                    </span>
                  </div>
                  <p className="text-[13.5px] font-medium text-slate-500 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Dynamic Alignment Arrow Line */}
                <div className="h-px bg-slate-100 my-5 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#625eff]" />
                </div>

                {/* Agent System / Solution State */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold tracking-wider text-[#625eff] bg-indigo-50 px-1.5 py-0.5 rounded-none border border-indigo-100">
                      [02 / AGENT]
                    </span>
                  </div>
                  <p className="text-[14px] font-bold text-[#1a194d] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Dynamic Overlay Metrics Section for View Mode Switches */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between min-h-[30px]">
                {viewMode === 'impact' ? (
                  <div className="w-full flex items-center justify-between animate-fadeIn">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#625eff] font-bold">
                      {item.impact}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {item.metric}
                    </span>
                  </div>
                ) : (
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                    Status: <span className="text-[#625eff] font-bold">Ready to Match</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="border border-slate-200 p-8 sm:p-12 bg-white relative mb-12">
          {/* Accent geometric block to make the UI look engineered rather than generic */}
          <div className="absolute top-0 right-0 w-24 h-px bg-[#625eff]" />
          <div className="absolute top-0 right-0 w-px h-24 bg-[#625eff]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#625eff] font-bold uppercase block">
                ANALYSIS & MODELING
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-primary leading-tight uppercase">
                Active ERP Waste <br />Calculator
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Compounding operational inefficiencies in manual ledger keying, broken pipeline APIs, and latency inside SAP terminals yield significant financial leakage. Select your variables to observe true cost adjustments.
              </p>
            </div>

            {/* Slider Inputs System with Boxy Geometry */}
            <div className="lg:col-span-4 space-y-8 bg-slate-50 p-6 border border-slate-100">
              
              {/* Slider 1: Hours */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500 uppercase tracking-wider">Weekly Lost Hours</span>
                  <span className="text-[#1a194d] font-bold">{hoursSpent} HRS</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="200" 
                  value={hoursSpent} 
                  onChange={(e) => setHoursSpent(Number(e.target.value))}
                  className="w-full bg-slate-200 appearance-none h-1 cursor-pointer outline-none"
                />
              </div>

              {/* Slider 2: Rate */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500 uppercase tracking-wider">Resource Rate</span>
                  <span className="text-[#1a194d] font-bold">${hourlyRate}/HR</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="150" 
                  value={hourlyRate} 
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full bg-slate-200 appearance-none h-1 cursor-pointer outline-none"
                />
              </div>
            </div>

            {/* Simulated Live Outputs with Strict Editorial Formatting */}
            <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6 lg:text-right">
              <div className="space-y-1">
                <span className="text-slate-400 font-mono text-[10px] tracking-wider uppercase block">
                  Est. Annual ERP Waste
                </span>
                <span className="text-3xl font-bold text-[#1a194d] font-mono">
                  ${annualLoss.toLocaleString()}
                </span>
              </div>

              <div className="p-4 bg-slate-50 border-l-2 border-[#625eff] space-y-1 text-left lg:text-right lg:border-l-0 lg:border-r-2 lg:border-[#625eff]">
                <span className="text-[#625eff] font-mono text-[10px] tracking-wider uppercase block font-bold">
                  Recovered Agent Capital
                </span>
                <span className="text-3xl font-extrabold text-[#625eff] font-mono">
                  ${annualSavings.toLocaleString()}
                </span>
              </div>
            </div>

          </div>
        </div>

        {}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-slate-200">
          <p className="text-[11px] font-mono text-slate-400 leading-relaxed uppercase">
            // Models are calibrated on standard AP pipelines, active syncing thresholds, and continuous ledger processes.
          </p>
          <button className="bg-[#1a194d] hover:bg-[#625eff] text-white font-mono text-xs font-bold uppercase py-4 px-4 sm:px-6 rounded-none transition-all duration-150 tracking-wider active:translate-y-px shrink-0">
            Audit ERP Workflows
          </button>
        </div>

      </div>
    </section>
  );
}

// Global wrap simulation for seamless mounting
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <PainPointsSection />
    </div>
  );
}