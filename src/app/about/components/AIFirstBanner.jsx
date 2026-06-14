"use client";

import React from 'react';
import Link from 'next/link'; // Next.js Link component import kiya
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

export default function AIFirstBanner() {
  return (
    <section className="w-full bg-[#1a194d] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-24 font-sans relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-white/20 via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            We're{' '}
            <span className="relative inline-block text-white">
              AI–first
             
            </span>
            , built with responsibility
          </h2>
          <div>
            {/* Button ko Link ke sath wrap kiya */}
            <Link href="/contact" className="inline-block">
              <button className="inline-flex items-center gap-3 bg-white text-slate-900 font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-sm transition-all hover:bg-slate-100 group text-sm shadow-sm cursor-pointer">
                Our Agentic AI Approach
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>

      <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-white/90 text-[15px] lg:text-base leading-relaxed max-w-2xl lg:pl-6">
  <p>
    At AgenticSense, we help organizations deploy enterprise AI solutions that automate complex business processes, improve operational efficiency, and support better decision-making across the enterprise.
  </p>

  <p>
    Our solutions integrate directly with leading ERP, CRM, and business platforms, including SAP Business One, Oracle Fusion Cloud, and Microsoft technologies through supported APIs, ensuring secure, scalable, and reliable connectivity.
  </p>

  <p className="font-medium text-white">
    Security, governance, compliance, and operational reliability are embedded throughout every implementation, providing organizations with the visibility, control, and confidence required for enterprise-scale AI adoption.
  </p>
</div>
      </div>

      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20">
        <div className="p-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all">
          <SlidersHorizontal className="w-4 h-4 text-white" />
        </div>
      </div>
    </section>
  );
}