"use client";

import React from "react";

export default function DeliveryStepsSection() {
  const deliverySteps = [
    { num: "01", title: "Discover", body: "We align on business goals, map high-value use cases, and assess your data, systems and controls — separating what is deployable today from what needs to be built." },
    { num: "02", title: "Design", body: "We define the target architecture, integration approach, governance model and success metrics, agreed in writing before the build begins." },
    { num: "03", title: "Build", body: "We develop the agents against your real data and real integration constraints — proving the system works beyond a demo, with controls baked in." },
    { num: "04", title: "Deploy", body: "We integrate, test and ship to your production environment with monitoring, audit logging and human-in-the-loop safeguards in place." },
    { num: "05", title: "Scale", body: "We expand coverage across processes and functions, tune performance, and provide ongoing support, retraining and optimisation." },
  ];

  return (
    <section className="bg-white py-24 border-b border-slate-100 font-sans relative overflow-hidden select-none">
      
      {/* Structural technical grid lines */}
      <div className="absolute inset-y-0 left-[6%] w-px bg-slate-50 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[6%] w-px bg-slate-50 pointer-events-none hidden xl:block" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
           
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1a194d] uppercase leading-none">
              A Disciplined Path from Idea to a System Your Teams Trust
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-[11px] text-slate-500 leading-normal font-medium">
              Every engagement follows the same five-phase delivery — from discovery to ongoing production.
            </p>
          </div>
        </div>

        {/* Master Pipeline Wrapper */}
        <div className="relative">
          
          {/* Centered Straight Engineering Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-slate-200 via-slate-200/40 to-transparent transform md:-translate-x-1/2 pointer-events-none" />

          {/* Steps Loop */}
          <div className="space-y-12 relative">
            {deliverySteps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={step.num} 
                  className={`flex flex-col md:flex-row items-stretch w-full relative group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Left / Right Card Container */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end md:group-odd:pr-12 md:group-even:pl-12 pl-12 md:pl-0">
                    <div className="w-full max-w-md bg-white border border-slate-200/80 p-5 group-hover:border-[#625eff]/50 transition-all duration-300 shadow-[0_4px_15px_-3px_rgba(26,25,77,0.02)] hover:shadow-[0_12px_30px_-6px_rgba(98,94,255,0.1)] relative rounded-none hover:-translate-y-1">
                      
                      {/* Top Tiny Accent bar inside card */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#1a194d] transition-all duration-300" />
                      
                      <div className="space-y-2">
                        {/* Title and Badge row */}
                        <div className="flex items-center justify-between">
                          <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#1a194d] group-hover:text-[#1a194d] transition-colors">
                            {step.title}
                          </h4>
                          <span className="font-mono text-[9px] text-slate-400 font-bold px-1.5 py-0.5 bg-slate-50 border border-slate-100 uppercase">
                            PHASE_{step.num}
                          </span>
                        </div>
                        
                        {/* Body content */}
                        <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Absolute Center Node (Sharp Box Node instead of generic circle) */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-4 h-4 border-2 border-slate-300 bg-white transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-300 group-hover:border-[#625eff] group-hover:bg-[#625eff] group-hover:rotate-45 rounded-none shadow-sm">
                    {/* Inner core dot that lights up */}
                    <div className="w-1 h-1 bg-slate-400 group-hover:bg-white transition-colors" />
                  </div>

                  {/* Empty Side for layout symmetry in Desktop */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

        {/* Micro System Log Footer */}
        <div className="mt-16 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-wider">
          <span>// PIPELINE_STATUS: OPERATIONAL</span>
          <span className="hidden sm:inline">CYCLE_VERIFIED // 2026</span>
        </div>

      </div>
    </section>
  );
}