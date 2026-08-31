import React from 'react';
import { Activity, Gauge } from 'lucide-react';

const points = [
  "Agentic AI systems built to automate complex, multi-step business processes and drive operational efficiency.",
  "AI agents designed to reason, make decisions, use tools, and take meaningful action—not simply generate responses.",
  "Seamless integration with enterprise platforms, applications, APIs, and existing business workflows.",
  "Intelligent systems that connect data, agents, automation, and processes to create end-to-end business solutions.",
  "Secure, governed, and scalable Agentic AI architectures designed for enterprise environments and long-term growth.",
  "Practical AI solutions built around real business challenges, with a focus on measurable outcomes rather than AI for the sake of AI."
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
    description: "To shape a future where Agentic AI makes businesses smarter, more adaptive, and ready for what’s next."
  }
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#f3f4f6] py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">

        {/* LEFT: 7 cols */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:sticky lg:top-24">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a3556] tracking-[-0.02em]">Who We Are</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-[1.1] tracking-[-0.025em]">
            An Agentic AI Company Built for the Real World
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-[1.65] tracking-[-0.005em] max-w-2xl">
            AgenticSense is an Agentic AI company focused on helping enterprises move from AI experimentation to intelligent, autonomous systems that create real business impact.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-[1.65] tracking-[-0.005em] max-w-2xl">
            We believe the future of business isn’t just about using AI to answer questions or automate individual tasks. It’s about building intelligent systems that can understand context, make decisions, take action, and work alongside people.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-[1.65] tracking-[-0.005em] max-w-2xl">
            We design and build complete Agentic AI Systems that bring AI agents, enterprise data, business workflows, automation, and existing technology together into one intelligent ecosystem.
          </p>
          
          <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-sm font-bold text-slate-800 leading-snug">{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 space-y-3 text-slate-700 text-base sm:text-lg leading-[1.65]">
            <p className="font-semibold text-slate-900">
              At AgenticSense, we’re not interested in adding another AI tool to your technology stack.
            </p>
            <p>
              We build intelligent systems that become part of how your business works.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              From understanding your processes to designing, developing, integrating, and continuously improving your Agentic AI System, we work as a technology partner not simply a vendor.
            </p>
          </div>
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
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1a3556]">
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