import React from 'react';

const steps = [
  {
    num: "PHASE_01",
    title: "Sector Audit",
    body: "We map your industry's regulatory requirements, system landscape, data governance constraints and integration environment before any architecture decisions are made.",
  },
  {
    num: "PHASE_02",
    title: "Use-Case Design",
    body: "Sector-specific use cases prioritised by ROI and compliance feasibility. Success metrics, exception handling and human oversight points agreed in writing before build.",
  },
  {
    num: "PHASE_03",
    title: "Build & Integrate",
    body: "Agent development against your live industry systems and real data — proving performance in your environment, not a generic test sandbox, from sprint one.",
  },
  {
    num: "PHASE_04",
    title: "Govern & Deploy",
    body: "Production go-live with sector-appropriate audit logging, access controls, regulatory safeguards and human-in-the-loop checkpoints active from day one.",
  },
  {
    num: "PHASE_05",
    title: "Operate & Scale",
    body: "Ongoing monitoring, model retraining and process expansion — keeping your agents accurate, compliant and improving as your sector evolves.",
  },
];

export default function DeliveryStepsSection() {
  return (
    <section className="bg-white py-14 sm:py-20 md:py-14 sm:py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
           
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            A Process Built Around Your Sector's Reality.
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            Five phases — adapted to the specific compliance requirements, data constraints and integration landscape of your industry.
          </p>
        </div>

        {/* Zig-Zag Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Center Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-4">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1;

              return (
                <div 
                  key={step.num} 
                  className={`flex flex-col md:flex-row items-stretch relative w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Side (Left or Right) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex">
                    <div className="w-full bg-white border border-slate-200/80 p-6 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-slate-300 transition-colors duration-300">
                      <div>
                        {/* Header with Title and Phase badge */}
                        <div className="flex items-center justify-between mb-4 gap-4">
                          <h4 className="text-[15px] font-black tracking-wide text-[#0f2d59] uppercase">
                            {step.title}
                          </h4>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-sm tracking-wider">
                            {step.num}
                          </span>
                        </div>
                        
                        {/* Body text */}
                        <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Node / Square Indicator Box */}
                  <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-[14px] h-[14px] bg-white border-2 border-slate-300 flex items-center justify-center rounded-sm shadow-sm group-hover:border-slate-400">
                      <div className="w-1 h-1 bg-slate-400 rounded-sm" />
                    </div>
                  </div>

                  {/* Empty Side to balance layout on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}