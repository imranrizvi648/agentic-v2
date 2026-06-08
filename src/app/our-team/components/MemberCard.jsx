"use client";
import { motion } from "framer-motion";
import { DEPT_ACCENT, DEPT_TEXT } from "./teamConstants";
import { IconArrowUpRight } from "./TeamIcons";

const fadeUp = {
  hidden: { opacity:0, y:28 },
  show: (i=0) => ({ opacity:1, y:0, transition:{ delay:i*0.07, duration:0.55, ease:[0.22,1,0.36,1] } }),
};

export default function MemberCard({ member, index, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once:true, margin:"-60px" }}
      custom={index % 4}
      onClick={() => onClick(member)}
      className="group relative cursor-pointer bg-white border border-slate-100 overflow-hidden hover:border-[#625eff]/30 hover:shadow-[0_12px_40px_rgba(98,94,255,0.12)] transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-square bg-slate-100">
        <img
          src={member.image} alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a194d]/80 via-[#1a194d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-sm ${DEPT_TEXT[member.department]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${DEPT_ACCENT[member.department]}`} />
            {member.department}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest">
            View Profile <IconArrowUpRight size={12} />
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-extrabold text-[#1a194d] leading-snug mb-0.5 group-hover:text-[#625eff] transition-colors">
          {member.name}
        </h3>
        <p className="text-[11px] text-slate-400 font-semibold mb-3 leading-tight">{member.role}</p>
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map(tag => (
            <span key={tag} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-100 text-slate-400 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
