import React from 'react';
import { Flag } from 'lucide-react';

const points = [
  "We are long-term partners who invest in understanding your business.",
  "We deliver intelligent, platform-specific solutions beyond just resources.",
  "We are problem-solvers across industries; we deeply understand the advance technology.",
  "We are big believers in AI's potential, bigger believers in human potential."
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#f3f4f6] py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">

        {/* LEFT: 7 cols */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Who we are</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight">
            A Multi-Division Technology Enterprise Built for Depth with an AI-first Approach
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
            We are an AI-powered technology partner with specialized divisions, official partnerships with NetSuite, Salesforce, Microsoft, and AWS, and a client portfolio that includes Fortune 500 enterprises across agriculture, healthcare, retail, and energy.
          </p>
          <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0"><Flag className="w-4 h-4 text-red-500 fill-red-500" /></div>
                <span className="text-sm font-bold text-slate-800 leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: 5 cols */}
        <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
          <div className="relative self-end w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full bg-white -z-0" />
            <div className="relative z-10 w-full aspect-[4/3] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1000" alt="City Skyline" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-400 [clip-path:polygon(100%_0%,_0%_100%,_100%_100%)]" />
            </div>
          </div>
          <div className="pt-2 sm:pt-4 max-w-sm self-end lg:self-start">
            <p className="text-slate-800 leading-relaxed text-sm sm:text-base">
              <span className="font-extrabold text-slate-900">Our Goal:</span> To help organizations operate faster, scale smarter, and compete harder using AI, data, and the right enterprise platforms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
