"use client";

import React from "react";
import Link from "next/link";
// Make sure to install lucide-react: npm i lucide-react
import { Building2, HeartPulse, Home, ShoppingBag, GraduationCap } from "lucide-react";

// ==========================================
// DATA CONFIGURATIONS
// ==========================================



const challenges = [
  {
    sector: "Finance & Banking",
    challenge: "Large transaction volumes and manual reconciliation processes can create delays, operational inefficiencies, and increased risk of reporting errors.",
    outcome: "Automated reconciliation agents match transactions, post validated entries, and highlight exceptions for rapid review and resolution.",
  },
  {
    sector: "Healthcare",
    challenge: "Administrative complexity, documentation requirements, and claims processing workflows can slow revenue cycles and increase operational overhead.",
    outcome: "AI-powered revenue cycle solutions automate pre-authorizations, monitor claim status, and validate documentation throughout the care journey.",
  },
  {
    sector: "Real Estate",
    challenge: "Lead qualification, portfolio management, and transaction processing often require significant manual effort and inconsistent evaluation criteria.",
    outcome: "AI-driven qualification and analytics systems prioritize high-value opportunities and streamline property and portfolio operations.",
  },
  {
    sector: "E-commerce",
    challenge: "Inventory planning, pricing optimization, and customer demand forecasting require continuous analysis across large volumes of data.",
    outcome: "Intelligent pricing and inventory management solutions provide real-time recommendations and predictive replenishment capabilities.",
  },
  {
    sector: "Education",
    challenge: "Administrative workloads, student support requests, and compliance reporting can consume valuable institutional resources.",
    outcome: "AI-powered administrative assistants automate routine processes, improve student support, and reduce operational burdens across the institution.",
  },
];

// ==========================================
// MAIN COMBINED COMPONENT
// ==========================================

export default function DeepSectorPage() {
  return (
    <div className="w-full bg-white antialiased selection:bg-brand-secondary/30">
      
    

      {/* SECTION 3: SECTOR CHALLENGES (STACKING + HOVER OVERLAY) */}
      <section className="bg-white py-14 sm:py-20 md:py-14 sm:py-20 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
            
            {/* Left Column: Sticky Heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-40 self-start">
             
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight mb-6">
                The Problems That Generic AI Cannot Solve.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every sector has the same fundamental problem with off-the-shelf AI: it understands the vocabulary, not the operations. We build at the operational level — where the actual work happens.
              </p>
            </div>

            {/* Right Column: Cards Stacking and Sliding Hover Overlay */}
           {/* Right Column: Cards Stacking and Sliding Hover Overlay */}
<div className="lg:col-span-8 space-y-20 pb-12">
  {challenges.map((c, index) => (
    <div
      key={c.sector}
      className="sticky top-32 group relative rounded-lg border border-slate-200/80 bg-white overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)] hover:border-brand-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(26,25,77,0.08)] transition-all duration-300 grid grid-cols-1 md:grid-cols-12"
      style={{ zIndex: index + 1 }}
    >
      {/* Left Side: The Problem (اب ہور پر مدہم نہیں ہوگا، بلکہ بالکل صاف دیکھے گا) */}
      <div className="md:col-span-6 p-8 transition-colors duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-800">
            // {c.sector}
          </span>
        </div>
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
          The Problem
        </p>
        <p className="text-sm text-slate-800 font-medium leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
          {c.challenge}
        </p>
      </div>
      
      {/* Right Side: What We Build (With Slide-in Animated Overlay) */}
      <div className="md:col-span-6 p-8 relative border-t border-slate-100 md:border-t-0 md:border-l border-slate-200/60 flex flex-col justify-center overflow-hidden">
        
        {/* The Background Overlay Layer */}
        <div className="absolute inset-0 bg-brand-primary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
        
        {/* Content Layer */}
        <div className="relative z-10 transition-colors duration-300">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-secondary group-hover:text-slate-300 mb-2 transition-colors duration-300">
            What We Build
          </p>
          <p className="text-sm text-brand-primary font-bold leading-relaxed group-hover:text-white transition-colors duration-300">
            {c.outcome}
          </p>
        </div>

        {/* Interaction Arrow Icon */}
        <div className="absolute bottom-4 right-4 text-brand-secondary transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10 hidden md:block">
          <span className="text-base font-bold">→</span>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </section>

    </div>
  );
}