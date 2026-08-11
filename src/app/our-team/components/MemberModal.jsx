"use client";
import { motion } from "framer-motion";
import { DEPT_ACCENT, DEPT_TEXT } from "./teamConstants";
import { IconLinkedin, IconTwitter, IconGitBranch, IconX } from "./TeamIcons";

const modalAnim = {
  hidden: { opacity:0, scale:0.94, y:20 },
  show:   { opacity:1, scale:1,    y:0,  transition:{ duration:0.35, ease:[0.22,1,0.36,1] } },
  exit:   { opacity:0, scale:0.96, y:10, transition:{ duration:0.2 } },
};

export default function MemberModal({ member, onClose }) {
  if (!member) return null;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
    >
      <div className="absolute inset-0 bg-[#1a194d]/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        variants={modalAnim} initial="hidden" animate="show" exit="exit"
        className="relative z-10 bg-white w-full max-w-2xl overflow-hidden shadow-2xl"
      >
        <div className="h-1 bg-gradient-to-r from-[#1a194d] via-[#625eff] to-[#a095ff]" />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-square sm:aspect-auto sm:min-h-[340px] bg-slate-100">
            <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a194d]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
             
            </div>
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <button onClick={onClose} className="mb-6 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#1a194d] transition-colors flex items-center justify-center">
                <IconX />
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a194d] leading-tight mb-1">{member.name}</h2>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${DEPT_TEXT[member.department]}`}>{member.role}</p>
              <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em] mb-5">{member.bio}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {member.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-100 text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            {/* Yahan changes kiye hain - Ab links new tab mein khulenge */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {member.social.linkedin && (
                <a 
                  href={member.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1a194d] text-white text-xs font-bold rounded hover:bg-[#625eff] transition-colors"
                >
                  <IconLinkedin /> LinkedIn
                </a>
              )}
              {member.social.twitter && (
                <a 
                  href={member.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded hover:bg-slate-200 transition-colors"
                >
                  <IconTwitter /> Twitter
                </a>
              )}
              {member.social.github && (
                <a 
                  href={member.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded hover:bg-slate-200 transition-colors"
                >
                  <IconGitBranch /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}