"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "AI Agents That\nPower Smarter Business Automation.",
    description: "AgenticSense helps businesses automate workflows, improve decision-making and scale operations with intelligent AI agent solutions.",
    bg: "bg-[radial-gradient(circle_at_center,_#ffffff_0%,#d1dbff_45%,#b8c4f5_100%)]",
    textColor: "text-[#0A0D38]",
    buttonStyle: "bg-[#716bff] hover:bg-[#5a52e0] text-white shadow-lg shadow-[#716bff]/20",
    hasWebinarCard: true,
    hasPrimarySVG: true,
    buttonText: "Book a Free Consultation",
  },
  {
    id: 2,
    title: "Reimagine your\nbusiness with AI.",
    description: "tixel helps businesses connect AI to real workflows and develop intelligent solutions that learn, adapt, and scale.",
    bg: "bg-[linear-gradient(135deg,#1a194d_0%,#121139_50%,#25236e_100%)]",
    textColor: "text-white",
    buttonStyle: "bg-white text-[#1a194d] hover:bg-gray-100 shadow-lg shadow-white/10",
    hasGuideCard: true,
    hasSVGShade: true,
    buttonText: "Explore AI Services",
  },
  {
    id: 3,
    title: "Reimagine your\nbusiness with AI.",
    description: "tixel partnered with Canvs AI to achieve tenfold scalability, faster insights, and $120K in savings through an optimized AI and cloud architecture.",
    bg: "bg-white",
    textColor: "text-[#1a194d]",
    buttonStyle: "bg-[#625eff] hover:bg-[#5248e0] text-white",
    hasSuccessCards: true,
    buttonText: "See our work in AI",
  },
];

const AUTO_PLAY_DURATION = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_DURATION);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0D38]">
      
      {/* Background - Crossfade (Black flash fix) */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className={`absolute inset-0 ${slides[current].bg}`}
          >
            {/* Slide 1 SVG */}
            {slides[current].hasPrimarySVG && (
              <div className="absolute inset-0 overflow-hidden opacity-5">
                <svg className="absolute -left-20 -top-20 w-[600px] h-[600px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#1a194d" d="M44.7,-76.4C58.3,-69.2,70.2,-57.4,78.6,-43.8C87,-30.1,91.9,-15.1,91.5,-0.2C91.1,14.6,85.4,29.2,76.5,41.9C67.7,54.7,55.7,65.5,41.9,73.1C28.1,80.7,14,85.1,-0.5,86C-15,86.9,-30.1,84.3,-43.5,76.5C-56.9,68.7,-68.6,55.7,-76.3,41C-84.1,26.3,-87.8,9.9,-86,-6C-84.2,-21.9,-76.9,-37.3,-66.2,-49.4C-55.5,-61.5,-41.4,-70.3,-27.3,-77.2C-13.2,-84.1,0.9,-89.1,14.7,-88.4C28.5,-87.7,42.4,-81.3,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
                <svg className="absolute right-0 bottom-0 w-[800px] h-[800px] opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="100" cy="100" r="40" fill="#1a194d" />
                </svg>
              </div>
            )}

            {/* Slide 2 SVG */}
            {slides[current].hasSVGShade && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 w-[70%] h-[80%] bg-white/10 blur-[140px] rounded-full" />
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 800" fill="none">
                  <path d="M-100 600C200 500 400 800 800 400C1200 0 1500 200 1600 100" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
                  <path d="M-100 650C300 550 500 850 900 450C1300 50 1600 250 1700 150" stroke="white" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content - Smooth Animation */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-8 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 w-full"
          >
            {/* Left Side */}
            <div className="max-w-[620px] pt-4 mt-10">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className={`text-[46px] md:text-[45px] font-bold leading-[1.08] tracking-[-1.5px] whitespace-pre-line mb-6 ${slides[current].textColor}`}
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={`text-[18px] leading-relaxed max-w-xl mb-8 ${current === 1 ? 'text-white/80' : 'text-slate-600'}`}
              >
                {slides[current].description}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`flex items-center gap-3 px-8 py-4 rounded-none font-semibold text-lg transition-all ${slides[current].buttonStyle}`}
              >
                {slides[current].buttonText}
                <ArrowRight size={22} />
              </motion.button>
            </div>

            {/* Right Side Cards */}
            <div className="hidden lg:block w-full max-w-[380px] mt-12 lg:mt-20">
              <AnimatePresence mode="wait">
                {slides[current].hasWebinarCard && (
                  <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white shadow-2xl rounded-none border-t-4 border-[#625eff] overflow-hidden"
                  >
                    {/* Webinar Card Content */}
                    <div className="h-48 bg-[#1a194d] flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#625eff]/20 to-transparent" />
                      <span className="text-white/20 text-xs tracking-widest uppercase font-bold">Preview Area</span>
                    </div>
                    <div className="p-8">
                      <div className="text-[#625eff] text-xs font-bold tracking-widest mb-2 uppercase">Upcoming Session</div>
                      <h3 className="text-xl font-bold text-[#1a194d] mb-4 leading-tight">How Agentic AI is Changing Business Workflows</h3>
                      <button className="text-[#1a194d] font-bold flex items-center gap-2 border-b-2 border-[#625eff] pb-1 hover:gap-3 transition-all">
                        Register Free <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {slides[current].hasGuideCard && (
                  <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-none p-8 shadow-2xl text-white"
                  >
                    <FileText size={32} className="text-white mb-6" />
                    <h3 className="text-2xl font-bold mb-4">C-Suite Guide to AI in 2026</h3>
                    <p className="text-white/70 mb-6 text-sm leading-relaxed">Strategic insights for leaders implementing AI at enterprise scale.</p>
                    <a href="#" className="flex items-center gap-2 font-bold hover:gap-3 transition-all">
                      Download Whitepaper <ArrowRight size={20} />
                    </a>
                  </motion.div>
                )}

                {slides[current].hasSuccessCards && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {["CCOF", "vocable.", "BBJ La Tavola"].map((client, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="bg-white border-l-4 border-[#625eff] p-5 flex items-center justify-between shadow-md cursor-pointer"
                      >
                        <span className="font-bold text-[#1a194d] text-lg">{client}</span>
                        <ArrowRight size={20} className="text-[#625eff]" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-0 right-0 px-6 z-20">
        <div className="max-w-6xl mx-auto flex justify-end">
          <div className="flex gap-4">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setCurrent(index)} className="group py-4">
                <div className={`h-[6px] w-12 rounded-full transition-all ${current === 1 ? 'bg-white/20' : 'bg-[#1a194d]/10'}`}>
                  {index === current && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                      className={`h-full rounded-full ${current === 1 ? 'bg-white' : 'bg-[#625eff]'}`}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}