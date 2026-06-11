"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TeamHero        from "./components/TeamHero";
import TeamFilterBar   from "./components/TeamFilterBar";
import MemberCard      from "./components/MemberCard";
import MemberModal     from "./components/MemberModal";
import TeamJoinBanner  from "./components/TeamJoinBanner";
import { TEAM }        from "./components/teamConstants";

export default function OurTeamPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [selected,   setSelected]   = useState(null);

  const filtered = activeDept === "All"
    ? TEAM
    : TEAM.filter(m => m.department === activeDept);

  return (
    <main className="bg-white min-h-screen font-sans text-[#1a194d]">

      <TeamHero />

      <TeamFilterBar activeDept={activeDept} onSelect={setActiveDept} />

      {/* ── Team grid ─────────────────────────────────────────────────────── */}
      {/* Changed container from max-w-7xl to max-w-5xl to constrain row stretching */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center"
          >
            {filtered.map((member, i) => (
              <MemberCard
                key={member.id}
                member={member}
                index={i}
                onClick={setSelected}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 text-sm">
            No team members in this department yet.
          </div>
        )}
      </section>

      <TeamJoinBanner />

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <MemberModal member={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

    </main>
  );
}