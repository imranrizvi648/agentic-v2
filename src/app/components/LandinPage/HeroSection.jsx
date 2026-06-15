"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Mic, Layers, Leaf, ChevronRight, Calendar, Users } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "AI Agents That Power Smarter Business Automation",
    description:
      "AgenticSense helps organizations automate workflows, improve decision-making, and scale operations through intelligent AI solutions designed for enterprise environments.",
    image: "/bg-1.webp",
    textColor: "text-white",
    buttonStyle:
      "bg-[#625eff] text-white hover:bg-[#5a52e0] shadow-[0_4px_20px_rgba(98,94,255,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] rounded-none",
    hasGuideCard: true,
    buttonText: "Book a Free Consultation",
        buttonLink: "/contact",
  },
  {
    id: 2,
    title: "Intelligent Automation for the Future of Work",
    description:
      "We build AI-driven systems that automate complex workflows, improve operational efficiency, and support scalable business transformation with measurable outcomes.",
    image: "/bg2.webp",
    textColor: "text-white",
    buttonStyle:
      "bg-[#625eff] text-white hover:bg-[#5a52e0] shadow-[0_4px_20px_rgba(98,94,255,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] rounded-none",
    hasWebinarCard: true,
    buttonText: "Explore AI Services",
        buttonLink: "/contact",
  },
  {
    id: 3,
    title: "Real AI Impact for Enterprise Systems",
    description:
      "AgenticSense partners with enterprises to deliver ERP-native AI solutions, finance automation, and intelligent workflows designed for production environments and measurable business value.",
    image: "/bg-3.webp",
    textColor: "text-white",
    buttonStyle:
      "bg-[#625eff] text-white hover:bg-[#5a52e0] shadow-[0_4px_20px_rgba(98,94,255,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] rounded-none",
    hasGlassCards: true,
    buttonText: "See Our Work in AI",
        buttonLink: "/contact",
  },
];
const AUTO_PLAY_DURATION = 6000;
const EASE_EXPO_OUT = [0.19, 1, 0.22, 1];
const EASE_IN_SOFT  = [0.4, 0, 0.6, 0];

const bgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
  exit:    { opacity: 0, transition: { duration: 1.0, ease: "easeIn"  } },
};

const leftVariants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { x: { duration: 1.35, ease: EASE_EXPO_OUT, delay: 0.2 }, opacity: { duration: 1.0, ease: "easeOut", delay: 0.2 } } },
  exit:    { opacity: 0, x: 30, transition: { x: { duration: 0.5, ease: EASE_IN_SOFT }, opacity: { duration: 0.4, ease: "easeIn" } } },
};

const rightVariants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { x: { duration: 1.35, ease: EASE_EXPO_OUT, delay: 0.35 }, opacity: { duration: 1.0, ease: "easeOut", delay: 0.35 } } },
  exit:    { opacity: 0, x: -30, transition: { x: { duration: 0.5, ease: EASE_IN_SOFT }, opacity: { duration: 0.4, ease: "easeIn" } } },
};

function useImagePreload(images) {
  useEffect(() => { images.forEach((src) => { const img = new Image(); img.src = src; }); }, []); // eslint-disable-line
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useImagePreload(slides.map((s) => s.image));

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => { setCurrent((prev) => (prev + 1) % slides.length); }, AUTO_PLAY_DURATION);
  }, []);

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, [startTimer]);
  const goTo = useCallback((index) => { setCurrent(index); startTimer(); }, [startTimer]);
  const isDarkSlide = slides[current].textColor === "text-white";

  return (
    <section className="relative h-screen min-h-[580px] w-full overflow-hidden bg-[#080714] select-none">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div key={`bg-${current}`} variants={bgVariants} initial="initial" animate="animate" exit="exit" className="absolute inset-0" style={{ willChange: "opacity" }}>
            <img src={slides[current].image} alt="AI automation background" aria-hidden="true" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0914]/50 via-transparent to-[#1a194d]/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center relative z-10 pt-16 sm:pt-8 pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-16 w-full">

          {/* Left: Text */}
          <div className="max-w-full lg:max-w-[620px] w-full pt-2 sm:pt-4 mt-4 sm:mt-10" style={{ minHeight: 300 }}>
            <div className="relative w-full" style={{ minHeight: 300 }}>
              <AnimatePresence mode="sync">
                <motion.div key={`left-${current}`} variants={leftVariants} initial="initial" animate="animate" exit="exit" className="absolute inset-0 flex flex-col justify-center" style={{ willChange: "opacity, transform" }}>
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight whitespace-pre-line mb-4 sm:mb-6 lg:mt-30 ${slides[current].textColor}`}>
                    {slides[current].title}
                  </h1>
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8 ${isDarkSlide ? "text-white/70" : "text-slate-500"}`}>
                    {slides[current].description}
                  </p>
                  <p className="text-xs text-white/40 mb-4 uppercase tracking-widest">
                    Built for startups, enterprises and future-ready organizations worldwide.
                  </p>
                  
                  {/* Modern Next.js Link syntax with motion button inside */}
                  <Link href={slides[current].buttonLink}>
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      className={`w-full max-w-[220px] sm:max-w-[280px] inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer ${slides[current].buttonStyle}`}
                    >
                      <span className="truncate">{slides[current].buttonText}</span>
                      <ArrowRight size={16} className="flex-shrink-0" />
                    </motion.button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Cards — desktop only */}
          <div className="hidden lg:block w-full max-w-[400px] mt-12 lg:mt-16" style={{ minHeight: 380 }}>
            <div className="relative w-full" style={{ minHeight: 380 }}>
              <AnimatePresence mode="sync">
                <motion.div key={`right-${current}`} variants={rightVariants} initial="initial" animate="animate" exit="exit" className="absolute inset-0 flex flex-col justify-center" style={{ willChange: "opacity, transform" }}>

                  {/* SLIDE 1 — Free Assessment Card */}
                  {slides[current].hasGuideCard && (
                    <div className="relative overflow-hidden rounded-2xl backdrop-blur-3xl bg-[#0c0a1c]/65 border border-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_40px_rgba(0,0,0,0.6),0_4px_20px_rgba(98,94,255,0.15)]">
                      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                      <div className="h-[3px] bg-gradient-to-r from-[#625eff] via-[#a095ff] to-transparent" />
                      <div className="relative flex items-center gap-4 px-5 pt-5 pb-4 border-b border-white/[0.08]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#625eff]/10 via-transparent to-[#1a194d]/20 pointer-events-none" />
                        <div className="relative z-10 w-12 h-12 rounded-xl flex-shrink-0 bg-[#625eff]/20 border border-[#625eff]/40 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_20px_rgba(98,94,255,0.3)]">
                          <FileText size={22} className="text-[#b4abff]" />
                        </div>
                        <div className="relative z-10">
                          <div className="text-[#b4abff] text-[10px] font-bold tracking-[0.18em] uppercase mb-0.5">Free Assessment</div>
                          <div className="text-white/80 text-[11px]">For enterprise teams</div>
                        </div>
                        <div className="relative z-10 ml-auto w-2 h-2 rounded-full bg-[#625eff] shadow-[0_0_8px_3px_rgba(98,94,255,0.6)]" />
                      </div>
                      <div className="p-5">
                        <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-[#625eff]/20 border border-[#625eff]/30 text-[#b4abff] text-[9px] font-bold tracking-widest uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] shadow-[0_0_5px_rgba(98,94,255,0.9)]" />No Cost · No Obligation
                        </div>
                        <h3 className="text-[18px] font-bold text-white mb-2 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">Finance Automation Assessment</h3>
                        <p className="text-white/70 text-[12px] leading-relaxed mb-4">We map your highest-value automation opportunity and show what an agent inside your ERP could do with it.</p>
                        <div className="h-[1px] bg-gradient-to-r from-[#625eff]/40 via-white/10 to-transparent mb-4" />
                        <Link href="/contact" className="group/btn inline-flex items-center gap-2 text-white font-semibold text-[13px] hover:text-[#a095ff] transition-colors duration-200">
                          Book Free Session <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 2 — Webinar Card */}
                  {slides[current].hasWebinarCard && (
                    <div className="relative overflow-hidden rounded-2xl backdrop-blur-3xl bg-[#0c0a1c]/65 border border-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_40px_rgba(0,0,0,0.6),0_4px_20px_rgba(98,94,255,0.15)]">
                      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                      <div className="h-[3px] bg-gradient-to-r from-[#625eff] via-[#a095ff] to-transparent" />
                      <div className="relative flex items-center gap-4 px-5 pt-5 pb-4 border-b border-white/[0.08]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#625eff]/10 via-transparent to-[#1a194d]/20 pointer-events-none" />
                        <div className="relative z-10 w-12 h-12 rounded-xl flex-shrink-0 bg-[#625eff]/20 border border-[#625eff]/40 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_20px_rgba(98,94,255,0.3)]">
                          <Users size={22} className="text-[#b4abff]" />
                        </div>
                        <div className="relative z-10">
                          <div className="text-[#b4abff] text-[10px] font-bold tracking-[0.18em] uppercase mb-0.5">Live Consultation</div>
                          <div className="text-white/80 text-[11px]">Enterprise AI Strategy</div>
                        </div>
                        <div className="relative z-10 ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 border border-green-400/30 flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-green-300 text-[9px] font-bold tracking-widest uppercase">Available</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-[#625eff]/20 border border-[#625eff]/30 text-[#b4abff] text-[9px] font-bold tracking-widest uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] shadow-[0_0_5px_rgba(98,94,255,0.9)]" />Free 30-Min Session
                        </div>
                        <h3 className="text-[18px] font-bold text-white mb-2 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">Plan Your AI Transformation with Confidence</h3>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1.5 text-white/60 text-[11px]"><Calendar size={11} /><span>Flexible Schedule</span></div>
                          <div className="flex items-center gap-1.5 text-white/60 text-[11px]"><Users size={11} /><span>No obligation</span></div>
                        </div>
                        <div className="h-[1px] bg-gradient-to-r from-[#625eff]/40 via-white/10 to-transparent mb-4" />
                        <Link href="/contact" className="group/btn inline-flex items-center gap-2 text-white font-semibold text-[13px] hover:text-[#a095ff] transition-colors duration-200">
                          Book a Consultation <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 3 — Results / Client Cards */}
                  {slides[current].hasGlassCards && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#625eff]/50 to-transparent" />
                        <span className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">Industries We Serve</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-[#625eff]/50 to-transparent" />
                      </div>
                      {[
                        { name: "Financial Services", sub: "AP / AR / GL Automation", icon: <Leaf size={20} className="text-[#b4abff]" /> },
                        { name: "Healthcare", sub: "Workflow & Document AI", icon: <Mic size={20} className="text-[#b4abff]" /> },
                        { name: "Manufacturing", sub: "ERP-Native Operations AI", icon: <Layers size={20} className="text-[#b4abff]" /> },
                      ].map((client, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.015 }}
                          className="relative group/card cursor-pointer overflow-hidden rounded-xl backdrop-blur-2xl bg-[#0c0a1c]/60 border border-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-[#110e29]/75 hover:border-[#625eff]/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_rgba(98,94,255,0.15)]">
                          <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#625eff]/[0.05] to-transparent pointer-events-none" />
                          <div className="flex items-center justify-between px-4 py-3.5 relative z-10">
                            <div className="flex items-center gap-3.5">
                              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.15] flex items-center justify-center flex-shrink-0">{client.icon}</div>
                              <div>
                                <span className="font-bold text-white text-[16px] tracking-wide block leading-tight">{client.name}</span>
                                <span className="text-white/60 text-[11px] font-medium">{client.sub}</span>
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/[0.1] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover/card:bg-[#625eff]/20 group-hover/card:border-[#625eff]/40 transition-all duration-300">
                              <ChevronRight size={15} className="text-white/60 group-hover/card:text-[#a095ff] transition-colors duration-300" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <div className="relative overflow-hidden rounded-xl mt-1 backdrop-blur-xl bg-[#0c0a1c]/60 border border-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.4)]">
                        <div className="grid grid-cols-3 divide-x divide-white/[0.08] px-1 py-3">
                          {[["ERP-Native", "Integration"], ["End-to-End", "Automation"], ["Production", "Deployed"]].map(([val, label]) => (
                            <div key={label} className="flex flex-col items-center gap-0.5 px-2">
                              <span className="text-[#b4abff] font-bold text-[12px] leading-none text-center">{val}</span>
                              <span className="text-white/50 text-[9px] font-medium uppercase tracking-wide">{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 px-4 sm:px-6 z-20">
        <div className="max-w-6xl mx-auto flex justify-center sm:justify-end">
          <div className="flex gap-3 sm:gap-4">
            {slides.map((_, index) => (
              <button key={index} onClick={() => goTo(index)} className="group py-4 focus:outline-none" aria-label={`Go to slide ${index + 1}`}>
                <div className={`h-[5px] w-8 sm:w-12 rounded-full overflow-hidden transition-colors duration-300 ${isDarkSlide ? "bg-white/15" : "bg-[#1a194d]/10"}`}>
                  {index === current && (
                    <motion.div key={`dot-${current}`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }} style={{ originX: 0 }} className="h-full w-full bg-gradient-to-r from-[#625eff] to-[#a095ff]" />
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