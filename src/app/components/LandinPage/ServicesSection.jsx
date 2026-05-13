"use client";

import React from "react";

const servicesData = [
  {
    id: "ai",
    title: "AI & Data\nInnovation",
    description: "Specialized in Generative AI consulting, custom AI agents, and data science solutions.",
    tags: ["AI Agent Development", "Data Intelligence", "GenAI Models"],
    imageUrl: "https://images.unsplash.com/photo-1599110906885-b024c90c2773?auto=format&fit=crop&q=80&w=800",
    accentColor: "bg-blue-600",
  },
  {
    id: "engineering",
    title: "Automation\nExcellence",
    description: "Custom software development, cloud architecture, and robust API system integrations.",
    tags: ["PROCESS AUTO", "ENTERPRISE AI", "WORKFLOW SYNC"],
    imageUrl: "https://plus.unsplash.com/premium_photo-1661344293198-cbf16ca09796?auto=format&fit=crop&q=80&w=800",
    accentColor: "bg-slate-900",
  },
  {
    id: "cloud",
    title: "Strategic\nAI Solutions",
    description: "Secure cloud migration services, data protection, and compliance audits.",
    tags: ["AI Consulting", "Digital Strategy", "ROI Analysis"],
    imageUrl: "https://images.unsplash.com/photo-1688699846375-46e74a026d3d?auto=format&fit=crop&q=80&w=800",
    accentColor: "bg-blue-500",
  },
  {
    id: "strategy",
    title: "Conversational\nAI",
    description: "Strategic digital transformation and agile coaching for business growth.",
    tags: ["Chatbot Dev", "Multi-lingual", "24/7 Support"],
    imageUrl: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?auto=format&fit=crop&q=80&w=800",
    accentColor: "bg-teal-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our AI & Automation <span className="text-[#1a194d]">Services</span>
          </h2>
         
          <p className="mt-6 text-slate-600 text-lg max-w-2xl leading-relaxed">
            Bridging the gap between complex technology and business growth through bespoke AI solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-[400px] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Main Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:blur-xs"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />

              {/* Glass Overlay (Visible on Hover) */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <h3 className="text-2xl font-bold text-white leading-tight mb-3 whitespace-pre-line drop-shadow-md">
                  {service.title}
                </h3>

                <p className="text-gray-100 text-sm leading-relaxed mb-6 opacity-0 max-h-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {service.tags.map((tag) => (
                    <div 
                      key={tag}
                      className="flex items-center justify-between px-3 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-[11px] font-bold text-white uppercase tracking-wider"
                    >
                      {tag}
                      <div className={`w-2 h-2 rounded-full ${service.accentColor} border border-white/50 shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}