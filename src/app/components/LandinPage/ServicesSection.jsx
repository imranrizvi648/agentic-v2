"use client";
import React from "react";

const servicesData = [
  {
    id: "ai",
    title: "AI & Data\nInnovation", 
    description: "Specialized in Generative AI consulting, custom AI agents, and data science solutions.",
    tags: [
      "AI Agent Development",
      "Data Intelligence Solutions",
      "Generative AI Models",
    ],
    graphic: (
      <svg width="240" height="240" viewBox="0 0 240 240" aria-hidden="true">
        <defs>
          <linearGradient id="aiSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* Gradient from Secondary to Primary */}
            <stop offset="0%" stopColor="#625eff" />
            <stop offset="100%" stopColor="#1a194d" />
          </linearGradient>
        </defs>
        <path
          d="M120 20 C140 80, 160 100, 220 120 C160 140, 140 160, 120 220 C100 160, 80 140, 20 120 C80 100, 100 80, 120 20 Z"
          fill="url(#aiSparkleGrad)"
        />
        <path
          d="M120 20 C140 80, 160 100, 220 120 C160 140, 140 160, 120 220 C100 160, 80 140, 20 120 C80 100, 100 80, 120 20 Z"
          fill="url(#aiSparkleGrad)"
          filter="blur(10px)"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    id: "engineering",
    title: "Automation\nExcellence", 
    description: "Custom software development, cloud architecture, and robust API system integrations.",
    tags: ["Business Process Automation", "Enterprise AI Integration", "Workflow Automation", "API & System Sync",],
    graphic: (
      <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true">
        <defs>
          <linearGradient id="grad-eng" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a194d" />
            <stop offset="100%" stopColor="#625eff" />
          </linearGradient>
        </defs>
        <circle cx="90" cy="90" r="55" stroke="url(#grad-eng)" strokeWidth="35" fill="none" />
      </svg>
    ),
  },
 {
    id: "cloud",
    title: "Strategic\nAI Solutions", 
    description: "Secure cloud migration services, data protection, and compliance audits for AWS, Azure, and GCP.",
    tags: ["AI Consulting Services", "Digital Strategy", "ROI Analysis"],
    graphic: (
      <div className="grid grid-cols-2 gap-4" aria-hidden="true">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="w-[60px] h-[60px] rounded-full" 
            style={{ 
              background: "linear-gradient(135deg, #625eff 0%, #1a194d 100%)",
              boxShadow: "inset -8px -8px 16px rgba(0,0,0,0.1), 0 10px 20px rgba(98, 94, 255, 0.2)" 
            }} 
          />
        ))}
      </div>
    ),
  },
  {
    id: "strategy",
    title: "Conversational AI",
    description: "Strategic digital transformation, product roadmapping, and agile coaching for business growth.",
    tags: ["AI Chatbot Development", "Multi-lingual Agent", "24/7 Customer Support",],
    graphic: (
      <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true">
        <defs>
          <linearGradient id="grad-strat" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#625eff" />
            <stop offset="100%" stopColor="#1a194d" />
          </linearGradient>
        </defs>
        <path d="M40 140 V40 C40 40, 90 40, 90 90 C90 140, 140 140, 140 90 V140 Z" fill="url(#grad-strat)" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#F8F9FB]" aria-labelledby="services-main-heading">
      <div className="container mx-auto px-6">
        
        <div className="mb-16">
          <h2 id="services-main-heading" className="text-4xl font-bold text-brand-primary tracking-tight">
            Our AI and Automation Services
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl text-lg">
            We bridge the gap between complex technology and business growth through specialized 
            AI, Cloud, and Engineering services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-white border-l border-t border-gray-200">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="group relative h-[420px] border-r border-b border-gray-200 overflow-hidden bg-white hover:z-10 transition-all duration-700 ease-out hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              {/* === GRAPHIC LAYER === */}
              <div 
                className="absolute inset-0 flex items-start justify-center pt-16 transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:blur-[8px] group-hover:opacity-30" 
                aria-hidden="true"
              >
                {service.graphic}
              </div>

              {/* === CONTENT LAYER === */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <p className="sr-only">{service.description}</p>

                <h3 className="text-[26px] font-bold text-center text-brand-primary leading-tight mb-8 transform transition-transform duration-900 ease-in-out group-hover:-translate-y-40 whitespace-pre-line">
                  {service.title}
                </h3>

                <div 
                  className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2.5 transform translate-y-16 opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                  role="list"
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[12px] text-brand-primary font-semibold hover:border-brand-secondary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}