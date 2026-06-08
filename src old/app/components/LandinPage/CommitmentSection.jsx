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
    <section className="relative overflow-hidden bg-[#1a194d] py-12 sm:py-16 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 20%, #625eff 0%, transparent 60%)" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Upper Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 sm:mb-16 md:mb-18 gap-8 sm:gap-12">
          <div className="max-w-2xl">
            <div className="w-12 h-1 bg-[#625eff] mb-6 sm:mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              We're empowering <br /> the future <br />
              <span className="text-white">with intelligent AI solutions.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/60 max-w-sm pt-0 sm:pt-4 border-l border-[#625eff]/40 pl-5 sm:pl-6">
            We deliver cutting-edge artificial intelligence{" "}
            <span className="text-white">and automation strategies that scale</span> your operations and redefine digital excellence for global enterprises.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-white/10 py-10 sm:py-16">
          {stats.map((stat, index) => (
            <div key={index}
              className={`flex flex-col px-4 sm:px-8 md:px-10 py-4 sm:py-2 items-start
                ${index !== 0 ? "md:border-l border-white/10" : ""}
                ${index % 2 !== 0 ? "border-l border-white/10 md:border-l-0" : ""}
                ${index < 2 ? "pb-6 md:pb-2 border-b border-white/10 md:border-b-0" : "pt-6 md:pt-2"}
              `}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-2 text-white">{stat.value}</span>
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] leading-relaxed whitespace-pre-line uppercase text-[#625eff]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#625eff]/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
}
