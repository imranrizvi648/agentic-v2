"use client";
import { motion } from "framer-motion";
import { DEPT_ACCENT, DEPT_TEXT } from "./teamConstants";
import { IconArrowUpRight } from "./TeamIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function MemberCard({ member, index, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={index % 3}
      onClick={() => onClick(member)}
      className="group relative w-full max-w-sm mx-auto cursor-pointer bg-white border border-slate-100 overflow-hidden hover:border-[#625eff]/30 hover:shadow-[0_12px_40px_rgba(98,94,255,0.12)] transition-all duration-500"
    >
      {/* Image Section */}
     <div className="relative overflow-hidden h-[280px] sm:h-[320px] bg-slate-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a194d]/80 via-[#1a194d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Department Badge */}
        {/* <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-sm ${
              DEPT_TEXT[member.department] || "text-slate-500"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                DEPT_ACCENT[member.department] || "bg-slate-400"
              }`}
            />
            {member.department}
          </span>
        </div> */}

        {/* Hover CTA */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest">
            View Profile <IconArrowUpRight size={12} />
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-extrabold text-[#1a194d] leading-snug mb-0.5 group-hover:text-[#625eff] transition-colors">
          {member.name}
        </h3>

        <p className="text-[11px] text-slate-400 font-semibold mb-4 leading-tight">
          {member.role}
        </p>

        {/* Role Section */}
        {member.description && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-700">
                Role
              </span>
              <div className="h-[1px] flex-1 bg-slate-100" />
            </div>

            <p className="text-[11px] text-slate-500 font-medium leading-relaxed line-clamp-3">
              {member.description}
            </p>
          </div>
        )}

        {/* Skills Section */}
        {/* <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-700">
              Skills
            </span>
            <div className="h-[1px] flex-1 bg-slate-100" />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {member.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-100 text-slate-400 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}