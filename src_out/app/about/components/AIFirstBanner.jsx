import React from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

export default function AIFirstBanner() {
  return (
    <section className="w-full bg-[#1a194d] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-24 font-sans relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-white/20 via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            We're{' '}
            <span className="relative inline-block text-white">
              AI–first
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-indigo-300/60 rounded" />
            </span>
            , built with responsibility
          </h2>
          <div>
            <button className="inline-flex items-center gap-3 bg-white text-slate-900 font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-sm transition-all hover:bg-slate-100 group text-sm shadow-sm">
              Our AI–first approach
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-white/90 text-[15px] lg:text-base leading-relaxed max-w-2xl lg:pl-6">
          <p>Being AI–first at tkxel does not mean adding AI everywhere. It means applying intelligence where it improves decisions, reduces friction, and strengthens systems over time.</p>
          <p>We embed AI into products, platforms, and operations in ways that are governed, secure, and aligned to business readiness, from early strategy and validation to production–grade.</p>
          <p className="font-medium text-white">Our role is to help organisations get the balance right.</p>
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
