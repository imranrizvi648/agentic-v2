import React from 'react';
import { Lightbulb, ShieldCheck, Target, Award, Users } from 'lucide-react';

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore emerging AI technologies to deliver forward-thinking, future-ready solutions."
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "We build long-term partnerships through transparency, reliability, and consistent delivery."
  },
  {
    icon: Target,
    title: "Impact",
    description: "We measure success by the real business outcomes we create — not just the technology we deploy."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standard in every project, from strategy to execution."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, aligning AI solutions with your goals every step of the way."
  }
];

export default function CoreValues() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-22 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
  <h2 className="about-heading">
    Our <span className="text-brand-primary">Core Values</span>
  </h2>

  <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
    We are guided by innovation, integrity, and a commitment to delivering
    intelligent solutions that create lasting value for our clients.
  </p>
</div>
        {/* 5 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 justify-center">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className={`p-6 sm:px-8 sm:py-4 rounded-sm border border-slate-300 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  index === 3 ? "lg:col-start-1 lg:ml-auto lg:w-full" : ""
                } ${index === 4 ? "lg:col-start-2 lg:w-full" : ""}`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-wide ">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}