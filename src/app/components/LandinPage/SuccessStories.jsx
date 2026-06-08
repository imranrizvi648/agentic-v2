"use client";
import React, { useRef } from "react";

const cases = [
  { id: 1, title: "Multi-entity distribution group: 80% of invoices posted straight-through inside SAP Business One", tags: ["Financial Services", "AP Automation"], logo: "Enterprise Finance", quote: "AgenticSense delivered a working AP agent inside our SAP environment faster than we thought possible — and it actually runs in production.", author: "Finance Director", role: "Director of Finance Operations", image: "https://i.pravatar.cc/150?u=1", caseImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Investment firm finance copilot: Oracle Fusion data answered in seconds, not analyst-hours", tags: ["Investment Management", "Finance Copilot"], logo: "Asset Management", quote: "They understand finance at the level of the posting logic, not just the buzzwords. That is rare.", author: "CFO", role: "Chief Financial Officer", image: "https://i.pravatar.cc/150?u=2", caseImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "Large service organisation: approval and document turnaround reduced with zero manual touchpoints", tags: ["Professional Services", "Process Automation"], logo: "Service Enterprise", quote: "Agentic workflows that route approvals, process documents and update the systems of record — end to end, with full traceability.", author: "Operations Director", role: "Head of Digital Operations", image: "https://i.pravatar.cc/150?u=3", caseImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" },
];

export default function SuccessStories() {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: direction === "left" ? -500 : 500, behavior: "smooth" });
  };
  const getTagStyle = (tag) => {
    const brandTags = ["Salesforce Implementation", "Engineering", "Digital Transformation"];
    return brandTags.includes(tag) ? "border-[#625eff]/20 text-[#625eff] bg-[#625eff]/5" : "border-slate-200 text-slate-500 bg-white";
  };

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight">Featured success stories.</h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 sm:py-2.5 border border-slate-300 rounded-md font-medium text-sm text-[#1a194d] hover:bg-slate-50 transition-all whitespace-nowrap">All case studies</button>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="p-2 sm:p-2.5 border border-slate-300 rounded-md hover:border-[#625eff] hover:text-[#625eff] transition-colors text-slate-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={() => scroll("right")} className="p-2 sm:p-2.5 border border-slate-300 rounded-md hover:border-[#625eff] hover:text-[#625eff] transition-colors text-slate-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 sm:pb-12" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {cases.map((item) => (
            <article key={item.id}
              className="group relative flex-shrink-0 w-[85vw] sm:w-[480px] md:w-[540px] hover:md:w-[720px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-slate-300 rounded-none p-6 sm:p-7 md:p-5 bg-white hover:shadow overflow-hidden snap-start flex flex-col min-h-[440px] sm:min-h-[500px]">
              <div className="w-full sm:w-[340px] md:w-[380px] flex-shrink-0 flex flex-col h-full relative z-10">
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-primary leading-snug mb-4 sm:mb-6">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className={`px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border uppercase tracking-wider ${getTagStyle(tag)}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-auto">
                  <span className="text-2xl sm:text-3xl font-black text-[#625eff] tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity uppercase">{item.logo}</span>
                </div>
                <div className="border-t border-slate-100 pt-5 sm:pt-6 h-[130px] sm:h-[140px] flex-shrink-0">
                  <div className="flex gap-4 sm:gap-5 items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 relative">
                      <img src={item.image} alt={item.author} className="rounded-full object-cover w-full h-full border border-slate-50" />
                      {item.isVideo && (
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                          <div className="w-5 h-5 bg-[#625eff] rounded-full flex items-center justify-center pl-0.5 text-white text-[10px]">▶</div>
                        </div>
                      )}
                    </div>
                    <div>
                      {item.isVideo
                        ? <p className="text-[11px] font-bold text-[#625eff] mb-2 tracking-widest uppercase">{item.quote}</p>
                        : <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed mb-3 line-clamp-3 italic">"{item.quote}"</p>
                      }
                      <div className="flex flex-col">
                        <span className="text-[14px] sm:text-[15px] font-bold text-[#1a194d]">{item.author}</span>
                        <span className="text-[12px] sm:text-[13px] text-slate-400 mt-0.5">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute top-10 right-10 w-[240px] h-[160px] opacity-0 translate-x-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-x-0 z-20">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  <img src={item.caseImage} alt="Case Detail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#1a194d]/10 group-hover:backdrop-blur-[1px] transition-all" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max">
                    <button className="bg-white px-4 py-2 rounded-full text-[11px] font-bold text-[#1a194d] flex items-center gap-1.5 shadow-md hover:text-[#625eff] transition-colors uppercase">
                      View case study
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
