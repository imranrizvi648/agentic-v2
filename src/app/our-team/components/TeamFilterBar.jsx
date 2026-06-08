"use client";
import { DEPARTMENTS, TEAM } from "./teamConstants";

export default function TeamFilterBar({ activeDept, onSelect }) {
  return (
    <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth:"none" }}>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-2 whitespace-nowrap flex-shrink-0">Filter</span>
          {DEPARTMENTS.map(dept => (
            <button key={dept} onClick={() => onSelect(dept)}
              className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 flex-shrink-0 ${
                activeDept===dept ? "bg-[#1a194d] text-white shadow-md" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}>
              {dept}
              {dept!=="All" && (
                <span className="ml-1.5 opacity-50">
                  {TEAM.filter(m=>m.department===dept).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
