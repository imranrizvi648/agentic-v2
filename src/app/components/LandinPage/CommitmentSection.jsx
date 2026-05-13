"use client";
import React from "react";

const stats = [
  { value: "10+", label: "YEARS ON\nMARKET" },
  { value: "700+", label: "PROFESSIONALS\nON BOARD" },
  { value: "75%", label: "OF CLIENTS RETURN FOR\nLONG-TERM PARTNERSHIPS" },
  { value: "2", label: "GLOBAL\nOFFICES" },
];



export default function CommitmentSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a194d] py-15 text-white">
      {/* Secondary Glow Layer */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ 
          background: "radial-gradient(circle at 80% 20%, #625eff 0%, transparent 60%)" 
        }} 
      />

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        {/* Upper Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-18 gap-12">
          <div className="max-w-2xl">
            {/* Secondary Color Accent Bar */}
            <div className="w-12 h-1 bg-[#625eff] mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              We’re empowering <br /> the future <br />   
              <span className="text-white">with intelligent AI solutions.</span>
            </h2>
          </div>
            
          {/* Paragraph with Secondary Border and White/Secondary text mix */}
          <p className="text-lg text-white/60 max-w-sm pt-4 border-l border-[#625eff]/40 pl-6">
            We deliver cutting-edge artificial intelligence <span className="text-white">and automation
           strategies that scale</span> your operations and redefine digital excellence for global enterprises..
          </p>
        </div>

        {/* Stats Grid - White Values, Secondary Labels */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-white/10 py-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col px-10 py-2 items-start ${
                index !== 0 ? "md:border-l border-white/10" : ""
              }`}
            >
              {/* Pure White for the numbers to pop */}
              <span className="text-6xl font-bold tracking-tighter text-center mb-2 text-white">
                {stat.value}
              </span>
              {/* Secondary Color for the labels */}
              <span className="text-[11px] font-extrabold tracking-[0.25em] leading-relaxed whitespace-pre-line uppercase text-[#625eff]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        
      </div>

      {/* Subtle Top "Glass" Edge */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Decorative Blur Bottom Left (Secondary Color) */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#625eff]/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
}