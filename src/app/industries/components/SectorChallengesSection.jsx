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
    challenge: "Thousands of daily transactions reconciled by spreadsheet — material errors found at month-end, not before.",
    outcome: "Straight-through reconciliation agents that post matched entries automatically and surface only genuine breaks.",
  },
  {
    sector: "Healthcare",
    challenge: "Pre-authorisation delays and documentation gaps adding weeks to cash collection, straining clinical capacity.",
    outcome: "Revenue cycle agents that submit pre-auth, track claim status and check documentation completeness at point of care.",
  },
  {
    sector: "Real Estate",
    challenge: "Senior agents spending 60% of their week on lead qualification — inconsistently, without scoring criteria.",
    outcome: "AI qualification that scores every inbound lead against your portfolio criteria and routes high-intent prospects immediately.",
  },
  {
    sector: "E-commerce",
    challenge: "Pricing decisions made in last week's spreadsheet, inventory ordered on intuition, stockouts discovered at checkout.",
    outcome: "Dynamic pricing and predictive replenishment agents that operate continuously — not on a weekly review cycle.",
  },
  {
    sector: "Education",
    challenge: "Faculty time consumed by administrative work — grading routine assessments, processing enrolment queries, compiling compliance reports.",
    outcome: "Administrative agents that own the operational load end to end, returning contact time to the educators who need it.",
  },
];

// ==========================================
// MAIN COMBINED COMPONENT
// ==========================================

export default function DeepSectorPage() {
  return (
    <div className="w-full bg-white antialiased selection:bg-brand-secondary/30">
      
    

      {/* SECTION 3: SECTOR CHALLENGES (STACKING + HOVER OVERLAY) */}
      <section className="bg-white py-24 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            
            {/* Left Column: Sticky Heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-40 self-start">
             
              <h2 className="text-4xl font-black text-brand-primary tracking-tight leading-tight mb-6">
                The Problems That Generic AI Cannot Solve.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every sector has the same fundamental problem with off-the-shelf AI: it understands the vocabulary, not the operations. We build at the operational level — where the actual work happens.
              </p>
            </div>

            {/* Right Column: Cards Stacking and Sliding Hover Overlay */}
            <div className="lg:col-span-8 space-y-20 pb-12">
              {challenges.map((c, index) => (
                <div
                  key={c.sector}
                  className="sticky top-32 group relative rounded-lg border border-slate-200/80 bg-white overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)] hover:border-brand-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(26,25,77,0.08)] transition-all duration-300 grid grid-cols-1 md:grid-cols-12"
                  style={{ zIndex: index + 1 }}
                >
                  {/* Left Side: The Problem (Stays crisp on white) */}
                  <div className="md:col-span-6 p-8 transition-opacity duration-300 group-hover:opacity-40">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                        // {c.sector}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                      The Problem
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
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