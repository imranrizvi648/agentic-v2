import React from 'react';
import { Flag, Activity, Gauge, Lock } from 'lucide-react';

const points = [
  "Enterprise AI agents built to automate complex business processes and enhance operational efficiency.",
  "Direct integration with SAP, Oracle, Microsoft, and other enterprise platforms through supported APIs.",
  "Deep domain expertise across finance, operations, and enterprise technology environments.",
  "Governed, secure, and scalable AI solutions designed for long-term business impact and compliance."
];

const cardsData = [
  {
    icon: Activity,
    title: "Our Mission",
    description: "To empower enterprises with intelligent, agentic AI solutions that simplify complexity, automate what matters, and unlock measurable business impact turning ambitious ideas into scalable, real-world systems."
  },
  {
    icon: Gauge,
    title: "Our Vision",
    description: "To be the world's most trusted technology partner in Agentic AI recognized for building autonomous, intelligent systems that redefine how businesses operate, compete, and grow in an AI-driven future."
  },
  {
    icon: Lock,
    title: "Our Promise",
    description: "To deliver intelligent, secure, and scalable AI solutions that create lasting value combining innovation with transparency, reliability, and a commitment to your long-term success."
  }
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#f3f4f6] py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">

        {/* LEFT: 7 cols */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:sticky lg:top-24">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-primary tracking-[-0.02em]">Who we are</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-[1.1] tracking-[-0.025em]">
            An Agentic AI Company Built for Enterprise Production
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-[1.65] tracking-[-0.005em] max-w-2xl">
            AgenticSense is built on the belief that the future of business will be powered by intelligent, adaptive and autonomous digital systems. We specialize in developing AI agents, ERP automation platforms, data intelligence solutions and digital transformation strategies across the GCC, South Asia and Europe.
          </p>
          
          <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-sm font-bold text-slate-800 leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: 5 cols (Full Overlap Stacking Cards) */}
        <div className="lg:col-span-5 flex flex-col gap-10 relative pb-24">
          {cardsData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index} 
                className="sticky top-24 bg-white rounded-md p-6 sm:px-8 shadow-sm border border-slate-200 transition-all duration-300"
                style={{
                  zIndex: index + 1
                }}
              >
              <div className="flex items-center gap-4 mb-3">
  <div className="w-10 h-10 rounded-md bg-[#1a3556] text-white flex items-center justify-center shrink-0">
    <IconComponent className="w-5 h-5" />
  </div>
  <h4 className="text-xl sm:text-2xl font-bold text-brand-primary">
    {card.title}
  </h4>
</div>
                
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}