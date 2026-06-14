import React from 'react';
import { Flag } from 'lucide-react';

const points = [
  "Enterprise AI agents built to automate complex business processes and enhance operational efficiency.",
  "Direct integration with SAP, Oracle, Microsoft, and other enterprise platforms through supported APIs.",
  "Deep domain expertise across finance, operations, and enterprise technology environments.",
  "Governed, secure, and scalable AI solutions designed for long-term business impact and compliance."
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#f3f4f6] py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">

        {/* LEFT: 7 cols */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-primary tracking-tight">Who we are</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight">
            An Agentic AI Company Built for Enterprise Production
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
            AgenticSense is built on the belief that the future of business will be powered by intelligent, adaptive and autonomous digital systems. We specialize in developing AI agents, ERP automation platforms, data intelligence solutions and digital transformation strategies that help enterprises operate more efficiently across the GCC, South Asia and Europe.
          </p>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            <strong>Mission:</strong> To empower businesses with intelligent AI systems that simplify work, improve decisions and accelerate growth.
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
              <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1000" alt="AgenticSense enterprise AI automation operations" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-400 [clip-path:polygon(100%_0%,_0%_100%,_100%_100%)]" />
            </div>
          </div>
          <div className="pt-2 sm:pt-4 max-w-sm self-end lg:self-start">
            <p className="text-slate-800 leading-relaxed text-sm sm:text-base">
              <span className="font-extrabold text-slate-900">Our Goal:</span> To become a trusted global technology partner for businesses adopting agentic AI and intelligent automation with production deployments, not stalled pilots.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
