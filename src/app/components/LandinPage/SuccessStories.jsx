"use client";
import React, { useRef } from "react";

const cases = [
  {
    id: 1,
    title: "Streamlined ABB's operations with Salesforce and Azure integration",
    tags: ["Machinery Manufacturing", "Salesforce Implementation"],
    logo: "ABB", 
    quote: "tkxel shared our vision right from the get go, and helped us achieve the unthinkable.",
    author: "Pam Chitwood",
    role: "Product Manager, ABB",
    image: "https://i.pravatar.cc/150?u=1",
    caseImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "23% increase in sales team productivity with a customized CSR system",
    tags: ["Manufacturing", "Engineering"],
    logo: "knowles",
    quote: "WATCH TESTIMONIAL",
    author: "Nick Drogo",
    role: "Global Director IT, Knowles",
    image: "https://i.pravatar.cc/150?u=2",
    caseImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    isVideo: true,
  },
  {
    id: 3,
    title: "Drives 5X Revenue Growth Through Seamless Digital Transformation",
    tags: ["Food & Beverages", "Digital Transformation"],
    logo: "LEADING CHAIN",
    quote: "tkxel modernized our industry, unified ordering, and reduced manual work.",
    author: "Sarah Jenkins",
    role: "Director of Technology",
    image: "https://i.pravatar.cc/150?u=3",
    caseImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
  },
];

export default function SuccessStories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getTagStyle = (tag) => {
    const brandTags = ["Salesforce Implementation", "Engineering", "Digital Transformation"];
    if (brandTags.includes(tag)) {
      // Hardcoded Secondary #625eff
      return "border-[#625eff]/20 text-[#625eff] bg-[#625eff]/5";
    }
    return "border-slate-200 text-slate-500 bg-white";
  };

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-4xl font-bold text-brand-primary tracking-tight">
            Featured success stories.
          </h2>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 border border-slate-300 rounded-md font-medium text-sm text-[#1a194d] hover:bg-slate-50 transition-all whitespace-nowrap">
              All case studies
            </button>
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")} 
                className="p-2.5 border border-slate-300 rounded-md hover:border-[#625eff] hover:text-[#625eff] transition-colors text-slate-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scroll("right")} 
                className="p-2.5 border border-slate-300 rounded-md hover:border-[#625eff] hover:text-[#625eff] transition-colors text-slate-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {cases.map((item) => (
            <article 
              key={item.id} 
              className="group relative flex-shrink-0 w-[90vw] sm:w-[540px] hover:w-[720px] transition-[width] duration-500 ease-in-out border border-slate-300 rounded-none p-8 md:p-5 bg-white hover:shadow  overflow-hidden snap-start flex flex-col min-h-[500px]"
            >
              <div className="w-[380px] flex-shrink-0 flex flex-col h-full relative z-10">
                <div className="mb-10">
                  <h3 className="text-2xl md:text-[28px] font-semibold text-[#1a194d] leading-[1.3] mb-6">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`px-4 py-1 rounded-full text-[11px] font-bold border uppercase tracking-wider ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-auto">
                   <span className="text-3xl font-black text-[#625eff] tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity uppercase">
                     {item.logo}
                   </span>
                </div>

                <div className="border-t border-slate-100 pt-6 h-[140px] flex-shrink-0">
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 flex-shrink-0 relative">
                      <img src={item.image} alt={item.author} className="rounded-full object-cover w-full h-full border border-slate-50" />
                      {item.isVideo && (
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                          <div className="w-5 h-5 bg-[#625eff] rounded-full flex items-center justify-center pl-0.5 text-white text-[10px]">▶</div>
                        </div>
                      )}
                    </div>
                    <div>
                      {item.isVideo ? (
                        <p className="text-[11px] font-bold text-[#625eff] mb-2 tracking-widest uppercase">{item.quote}</p>
                      ) : (
                        <p className="text-[14px] text-slate-600 leading-relaxed mb-3 line-clamp-3 italic">"{item.quote}"</p>
                      )}
                      <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-[#1a194d]">{item.author}</span>
                        <span className="text-[13px] text-slate-400 mt-0.5">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Image Box */}
              <div className="absolute top-10 right-10 w-[240px] h-[160px] opacity-0 translate-x-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 z-20">
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