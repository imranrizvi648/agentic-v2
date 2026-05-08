"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "AI Agents That \nPower Smarter Business Automation.",
    description: "AgenticSense helps businesses automate workflows, improve decision-making and scale operations with intelligent AI agent solutions",
    bg: "bg-white",
    accent: "text-blue-600",
    hasWebinarCard: true, 
    hasLogos: true,
    buttonText: "Book a Free Consultation",
  },
  {
    id: 2,
    title: "Reimagine your\nbusiness with AI.",
    description: "tixel helps businesses connect AI to real workflows and develop intelligent solutions that learn, adapt, and scale.",
    bg: "bg-[#0047FF]",
    accent: "text-white",
    hasServicePills: true, 
    hasGuideCard: true,
    buttonText: "Explore AI services",
  },
  {
    id: 3,
    title: "Reimagine your\nbusiness with AI.",
    description: "tixel partnered with Canvs AI to achieve tenfold scalability, faster insights, and $120K in savings through an optimized AI and cloud architecture.",
    bg: "bg-white",
    accent: "text-[#0047FF]",
    hasSuccessCards: true,
    buttonText: "See our work in AI",
  },
];

const AUTO_PLAY_DURATION = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // FIX: Changed setInterval to setTimeout and added [current] as dependency
  // Ab har slide change hone pe timer fresh start hoga aur line sync rahegi.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_DURATION);
    
    return () => clearTimeout(timer);
  }, [current]);

  const services = [
    "AI Agents", "GenAI Consulting", "AI Workshops", 
    "AI PoC & MVP", "Intelligent Automation", "MLOps"
  ];

  return (
    <section className={`relative h-screen w-full overflow-hidden transition-colors duration-[1500ms] ease-in-out ${slides[current].bg}`}>
      
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {current === 0 && (
            <motion.div key="bg1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="absolute top-[-20%] right-1/4 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[140px] opacity-30" />
          )}
          {current === 1 && (
            <motion.div key="bg2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="absolute top-0 right-[-10%] w-[900px] h-[900px] bg-blue-400 rounded-full blur-[160px] opacity-20" />
          )}
          {current === 2 && (
            <motion.div 
              key="bg3" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 1.05 }} 
              transition={{ duration: 1.5, ease: "easeOut" }} 
              className="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] bg-[#0047FF] rounded-full blur-[130px] opacity-75" 
            />
          )}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center pb-28 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} 
            className="flex justify-between items-center w-full mt-10"
          >
            {/* Left Content Area */}
            <div className="max-w-2xl mt-10">
              <h1 className={`text-5xl md:text-[54px] font-bold mb-6 leading-[1.05] whitespace-pre-line tracking-tight ${current === 1 ? 'text-white' : 'text-[#1B212D]'}`}>
                {slides[current].title}
              </h1>
              <p className={`text-[19px] mb-8 leading-relaxed max-w-xl ${current === 1 ? 'text-white/90' : 'text-slate-600'}`}>
                {slides[current].description}
              </p>
              
              <div className="mb-4">
                {current === 1 ? (
                  <button className="flex items-center gap-2 bg-white text-[#0047FF] px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-all shadow-lg">
                    {slides[current].buttonText} <ArrowRight size={20} />
                  </button>
                ) : (
                  <button className={`flex items-center gap-2 px-8 py-4 rounded-sm font-medium transition-all ${current === 2 ? 'bg-[#0047FF] hover:bg-blue-800 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                    {slides[current].buttonText} <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Right Area Cards */}
            <div className="hidden lg:block">
              {slides[current].hasWebinarCard && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="w-[340px] bg-[#0E1E47] text-white rounded-lg overflow-hidden shadow-2xl">
                  <div className="h-44 bg-blue-900/50 flex items-center justify-center">
                    <span className="text-white/20 text-sm">Speaker Image</span>
                  </div>
                  <div className="p-6 -mt-8 relative bg-[#0E1E47]">
                    <div className="inline-flex items-center gap-2 bg-[#FF2B5E] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                       <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Webinar
                    </div>
                    <h3 className="text-xl font-bold mb-4 leading-tight">How Agentic AI is Changing Business Workflows</h3>
                    <a href="#" className="text-sm font-medium flex items-center gap-1 hover:text-blue-300 transition-colors">Register Now <ArrowRight size={14}/></a>
                  </div>
                </motion.div>
              )}

              {slides[current].hasGuideCard && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="w-[360px] bg-white text-[#1B212D] rounded-2xl p-8 shadow-2xl relative">
                   <div className="flex justify-between items-start mb-8">
                     <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-[#0047FF]">
                        <FileText size={24} />
                     </div>
                     <span className="text-[10px] bg-blue-50 text-[#0047FF] font-bold px-2 py-1 rounded uppercase">New Guide</span>
                   </div>
                   <h3 className="text-2xl font-bold leading-tight mb-4">C-Suite Guide to AI Businesses in 2026</h3>
                   <p className="text-gray-500 text-sm mb-8 leading-relaxed">C-Suite Guide to AI for Business in 2026</p>
                   <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#0047FF] group">
                     Get the whitepaper <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Area */}
        <div className="absolute bottom-10 left-0 right-0 px-6 flex flex-col md:flex-row justify-between items-end gap-6 z-20">
          
          <div className="w-full max-w-5xl">
            {slides[current].hasLogos && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="hidden md:block">
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] mb-4 uppercase">Recognized By</p>
                <div className="flex items-center gap-10 opacity-80 grayscale brightness-0">
                  <div className="font-black text-xl">Inc. 5000</div>
                  <div className="font-serif font-bold text-2xl">Forbes</div>
                  <div className="font-black text-2xl tracking-tighter">IW</div>
                  <div className="font-serif font-bold text-sm">FT TIMES</div>
                </div>
              </motion.div>
            )}

            {slides[current].hasServicePills && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="hidden md:block">
                <p className="text-[11px] text-white/60 font-bold tracking-[0.2em] mb-4 uppercase">Our Gen AI Services</p>
                <div className="flex flex-wrap gap-3">
                  {services.map((service, i) => (
                    <span key={i} className="px-4 py-2 border border-white/20 rounded-sm text-white/90 text-sm font-medium hover:bg-white/10 cursor-default transition-colors">
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {slides[current].hasSuccessCards && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="hidden md:block">
                <p className="text-[11px] text-gray-400 font-bold tracking-[0.2em] mb-3 uppercase">Our AI Success</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-between border border-gray-200 bg-white px-5 py-3 w-[180px] hover:border-[#0047FF] transition-colors cursor-pointer group shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-100 rounded-sm flex items-center justify-center"><div className="w-2 h-2 bg-green-700 rounded-full"></div></div>
                      <span className="font-bold text-green-800 tracking-tight">CCOF</span>
                    </div>
                    <ArrowRight size={16} className="text-[#0047FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                  </div>
                  <div className="flex items-center justify-between border border-gray-200 bg-white px-5 py-3 w-[180px] hover:border-[#0047FF] transition-colors cursor-pointer group shadow-sm">
                    <span className="font-bold text-xl tracking-tighter">vocable.</span>
                    <ArrowRight size={16} className="text-[#0047FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                  </div>
                  <div className="flex items-center justify-between border border-gray-200 bg-white px-5 py-3 w-[180px] hover:border-[#0047FF] transition-colors cursor-pointer group shadow-sm">
                    <span className="font-serif text-gray-400 text-xs tracking-widest uppercase">BBJ La Tavola</span>
                    <ArrowRight size={16} className="text-[#0047FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* FIX: Progress Indicators - Now perfectly synced with setTimeout */}
          <div className="flex gap-3 mb-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`group cursor-pointer relative h-1 w-12 overflow-hidden transition-colors ${current === 1 ? 'bg-white/30' : 'bg-gray-200'}`}
              >
                {index === current && (
                  <motion.div
                    key={`progress-${current}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    // Strict linear timing
                    transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                    className={`absolute top-0 left-0 h-full ${current === 1 ? 'bg-white' : 'bg-[#0047FF]'}`}
                  />
                )}
                {index < current && <div className={`absolute inset-0 ${current === 1 ? 'bg-white' : 'bg-[#0047FF]'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}