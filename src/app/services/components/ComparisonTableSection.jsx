"use client";

import React from "react";

export default function ComparisonTableSection() {
 const comparisonData = [
  {
    dim: "Integration",
    them: "Dependent on third-party connectors and middleware",
    us: "Direct integrations using official SAP, Oracle, and Microsoft APIs"
  },
  {
    dim: "Automation",
    them: "Automates individual tasks but still requires manual intervention",
    us: "End-to-end workflow automation with minimal human involvement"
  },
  {
    dim: "Domain Expertise",
    them: "General-purpose AI solutions",
    us: "Deep expertise in finance, ERP systems, and enterprise operations"
  },
  {
    dim: "Delivery",
    them: "Separate consulting and implementation teams",
    us: "A single team responsible from strategy through deployment and support"
  },
  {
    dim: "Deployment",
    them: "Proof-of-concept focused engagements",
    us: "Production-ready solutions deployed in live enterprise environments"
  },
  {
    dim: "Governance",
    them: "Governance and controls added later in the process",
    us: "Security, auditability, and governance built in from the beginning"
  },
];

  return (
    <section className="bg-white py-14 sm:py-20 md:py-24 border-b border-slate-100 font-sans relative overflow-hidden select-none">
      
      {/* Background Grid Accent Lines */}
      <div className="absolute inset-y-0 left-[6%] w-px bg-slate-50 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[6%] w-px bg-slate-50 pointer-events-none hidden xl:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
           
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-primary uppercase leading-tight">
              Most AI Firms Advise, Then Hand Off. We Strategise, Build, Integrate and Run.
            </h2>
          </div>
          <div className="max-w-xs md:text-right hidden sm:block">
            
          </div>
        </div>

        {/* Premium Geometric Table Container */}
        <div className="overflow-x-auto rounded-none border border-slate-200/80 bg-white shadow-[0_4px_20px_-4px_rgba(26,25,77,0.03)]">
          <table className="w-full text-sm min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="text-left py-5 px-4 sm:px-6 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 w-1/5">
                  Dimension
                </th>
                <th className="text-left py-5 px-4 sm:px-6 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 w-2/5">
                  Typical AI Vendor
                </th>
                <th className="text-left py-5 px-4 sm:px-6 text-[11px] font-mono font-black uppercase tracking-widest text-[#625eff] bg-slate-50 w-2/5 border-l border-slate-200 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#625eff]" />
                   AgenticSense
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row) => (
                <tr 
                  key={row.dim} 
                  className="group hover:bg-slate-50/40 transition-all duration-200"
                >
                  {/* Dimension Name */}
                  <td className="py-5 px-4 sm:px-6 font-bold text-[#1a194d] text-[13px] uppercase tracking-tight transition-colors group-hover:text-[#625eff]">
                    {row.dim}
                  </td>
                  
                  {/* Typical Vendor (Them) */}
                  <td className="py-5 px-4 sm:px-6 text-slate-400 text-[13px] font-medium pr-10 line-clamp-2 md:line-clamp-none">
                    {row.them}
                  </td>
                  
                  {/* AgenticSense (Us) - Highlighted Column */}
                  <td className="py-5 px-4 sm:px-6 text-[13.5px] font-semibold text-slate-800 bg-slate-50/20 group-hover:bg-[#625eff]/[0.02] border-l border-slate-200 relative transition-all duration-300 pl-8">
                    
                    {/* Tiny Left Indicator Stripe on Hover */}
                    <div className="absolute inset-y-0 left-0 w-0 bg-[#625eff] group-hover:w-1 transition-all duration-200" />
                    
                    {/* Text Container with Subtle Pop effect */}
                    <div className="flex items-start gap-2.5 transform transition-transform duration-300 group-hover:translate-x-1">
                      <span className="text-[#625eff] opacity-0 scale-70 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 font-mono text-[11px] mt-0.5">
                        [✓]
                      </span>
                      <span className="group-hover:text-[#1a194d] transition-colors">
                        {row.us}
                      </span>
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote Micro-Details */}
        <div className="mt-4 flex justify-between items-center px-2">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
            // Operational benchmark based on production metrics.
          </p>
          <p className="text-[10px] font-mono text-slate-300 uppercase tracking-wide hidden sm:block">
            CONFIDENTIAL // SYSTEM INTERNAL
          </p>
        </div>

      </div>
    </section>
  );
}