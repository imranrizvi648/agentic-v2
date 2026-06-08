"use client";
import { motion } from "framer-motion";
import TeamHeroCanvas from "./TeamHeroCanvas";
import { STATS } from "./teamConstants";

const fadeUp = {
  hidden: { opacity:0, y:28 },
  show: (i=0) => ({ opacity:1, y:0, transition:{ delay:i*0.07, duration:0.55, ease:[0.22,1,0.36,1] } }),
};

export default function TeamHero() {
  return (
    <section
      aria-label="Our team page header"
      className="relative w-full h-[65vh] sm:h-[72vh] md:h-[82vh] bg-[#1a194d] overflow-hidden flex items-center font-sans"
    >
      <TeamHeroCanvas />

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(18,16,60,0.85)] via-[rgba(18,16,60,0.5)] to-transparent" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(26,25,77,0.75)] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#625eff]/30 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] animate-pulse" />
          <span className="text-[#625eff] text-xs font-bold uppercase tracking-[0.2em]">The People Behind the Work</span>
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-3xl mb-5">
          Meet the Team <br className="hidden sm:block" />
          Building <span className="text-[#625eff]">AgenticSense</span>.
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-xl mb-12 sm:mb-16">
          A tight-knit team of engineers, researchers, designers, and strategists obsessed with making enterprise AI actually work in production.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/10 pt-8 sm:pt-10">
          {STATS.map((s, i) => (
            <div key={s.label}
              className={`flex flex-col pr-4 sm:pr-10 ${i!==0?"pl-4 sm:pl-10 border-l border-white/10":""} ${i<2?"pb-6 md:pb-0 mb-0":""}`}>
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">{s.value}</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#625eff] uppercase tracking-widest mt-1 leading-tight">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(98,94,255,0.35)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
