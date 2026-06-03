"use client";

import React from "react";

const impactStats = [
  { val: "84%", label: "Less time spent on invoice workflows" },
  { val: "16 hrs", label: "Returned to the finance team weekly" },
  { val: "3–5 wks", label: "Average timeline from pilot to production" },
  { val: "100%", label: "Of agent operations securely audit-logged" },
];

export default function ImpactStatsSection() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat overflow-hidden select-none"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')"
      }}
    >
      {/* 
        Solid premium brand overlay using deep brand primary (#1a194d) 
        This merges the architectural background image with a luxurious deep tech look while guaranteeing accessibility.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a194d]/95 via-[#1a194d]/90 to-[#1a194d]/95 pointer-events-none z-0" />

      {/* Structural technical dividers matching high-end hardware styling */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {}
        {/* 
          1px solid gaps are generated using border color rules and fully square corners (rounded-none).
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#625eff]/20 border border-[#625eff]/25 rounded-none overflow-hidden">
          {impactStats.map((s, idx) => (
            <div 
              key={s.label} 
              className="bg-[#1a194d]/85 hover:bg-[#1a194d]/75 backdrop-blur-sm p-8 sm:p-10 transition-all duration-300 relative group"
            >
              {/* Secondary color accent top line on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#625eff] transition-all duration-300" />

              {/* Bold numbers colored in crisp white transitioning to secondary brand purple */}
              <div className="text-4xl sm:text-5xl font-mono font-black text-white mb-3 tracking-tight group-hover:text-[#625eff] transition-colors duration-200">
                {s.val}
              </div>

              {/* Label using monospaced clear uppercase structure */}
              <div className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest leading-relaxed">
                {s.label}
              </div>

              {/* Technical token labels */}
              <div className="absolute bottom-2 right-2 text-[8px] font-mono text-white/5 group-hover:text-[#625eff]/20 select-none pointer-events-none transition-colors">
                MTRC_0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider text-center sm:text-left">
            // METRIC METHODOLOGY: CALIBRATED AND VERIFIED VIA LIVE OPERATIONAL AUDITS
          </p>
          <span className="text-[9px] font-mono text-white/40 border border-white/10 bg-white/5 px-2.5 py-1 rounded-none uppercase select-none tracking-widest shrink-0">
            Audit Level Standard
          </span>
        </div>

      </div>
    </section>
  );
}