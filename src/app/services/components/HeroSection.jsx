"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center pt-28 pb-16">
      
      {/* ── Background Image ── */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Replace this path with your actual image file located in the public folder
          backgroundImage: "url('/service.png')" 
        }}
      />

      {/* ── Dark Overlay (Ensures text stays readable over any image) ── */}
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />

      {/* ── Content Container ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 sm:px-12 lg:px-16 w-full grid grid-cols-1 gap-8">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] text-white max-w-4xl">
          AI Agents That Run Inside the Systems{" "}
          <span className="text-[#1a194d]">
            You Already Use.
          </span>
        </h1>

        {/* Paragraphs */}
        <div className="max-w-2xl space-y-4">
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            AgenticSense designs, builds and deploys custom agentic AI that operates 
            natively inside your ERP — automating finance, operations and decision-making 
            from end to end.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-white/50">
            No half-finished demos. No manual steps in the middle of a workflow. No brittle 
            third-party connectors.{" "}
            <span className="font-semibold text-indigo-200 block sm:inline mt-2 sm:mt-0">
              Trusted by enterprises across the GCC, South Asia and Europe to put agentic AI into production — safely.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          
          {/* Pehla Button: Proposal Page Ke Liye */}
          <Link
            href="/proposal"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold text-sm px-7 py-4 rounded-none shadow-lg hover:bg-indigo-500 active:scale-[0.98] transition-all duration-200"
          >
            Book a Free Consultation →
          </Link>
          
          {/* Dusra Button: Contact Page Ke Liye */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.03] text-white/90 font-bold text-sm px-7 py-4 rounded-none border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-200"
          >
            See How We Work
          </Link>
          
        </div>

      </div>
    </section>
  );
}