"use client";
import React, { useRef } from "react";
import Link from "next/link";

const cases = [
  {
    id: 1,
    slug: "leadsense-b2b-automation",
    title: "B2B tech firm: multi-agent sales AI cut manual email work by 60% across a 15-rep team",
    tags: ["Technology", "AI Agent Development"],
    logo: "B2B Technology",
    quote: "Our team now spends more time building relationships and less time managing email workflows.",
    author: "Sales Ops Manager",
    role: "Sales Operations Manager",
    caseImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    slug: "aljh-bank-reconciliation",
    title: "Healthcare group: a month of bank reconciliation automated into 55 seconds inside Oracle",
    tags: ["Healthcare", "Finance Automation"],
    logo: "ALJH Health",
    quote: "Every match is backed by a clear rule and a confidence score so the CFO can sign off with confidence.",
    author: "Finance Team",
    role: "Automated Monthly Close · ALJH",
    caseImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    slug: "document-approval-automation",
    title: "Large service organisation: approval and document turnaround reduced with zero manual touchpoints",
    tags: ["Professional Services", "Process Automation"],
    logo: "Service Enterprise",
    quote: "Agentic workflows that route approvals, process documents and update the systems of record end to end, with full traceability.",
    author: "Operations Director",
    role: "Head of Digital Operations",
    caseImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
  },
];

export default function SuccessStories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -500 : 500, behavior: "smooth" });
    }
  };

  const getTagStyle = (tag) => {
    const brandTags = ["AI Agent Development", "Finance Automation", "Process Automation"];
    return brandTags.includes(tag)
      ? "border-[#625eff]/20 text-[#625eff] bg-[#625eff]/5"
      : "border-slate-200 text-slate-500 bg-white";
  };

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary tracking-[-0.025em] leading-[1.1]">
            Featured success stories.
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/case-studies">
              <button className="px-4 sm:px-6 py-2 sm:py-2.5 border border-slate-300 rounded-md font-medium text-sm text-[#1a194d] hover:bg-slate-50 transition-all whitespace-nowrap">
                All case studies
              </button>
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 sm:p-2.5 border border-slate-300 rounded-md hover:border-[#625eff] hover:text-[#625eff] transition-colors text-slate-400"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 sm:p-2.5 border border-slate-300 rounded-md hover:border-[#625eff] hover:text-[#625eff] transition-colors text-slate-400"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 sm:pb-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((item) => (
            <article
              key={item.id}
              className="
                group relative flex-shrink-0
                w-[85vw] sm:w-[480px] md:w-[520px]
                md:hover:w-[680px]
                transition-[width,box-shadow]
                duration-[520ms]
                ease-[cubic-bezier(0.4,0,0.2,1)]
                border border-slate-200
                hover:border-slate-300
                rounded-md p-6 sm:p-7 md:p-6
                bg-white
                hover:shadow-[0_8px_32px_rgba(26,25,77,0.08)]
                overflow-hidden snap-start
                flex flex-col
                min-h-[440px] sm:min-h-[500px]
              "
            >
              {/* Left content column fixed width so it never shifts */}
              <div className="w-full sm:w-[340px] md:w-[360px] flex-shrink-0 flex flex-col h-full relative z-10">

                {/* Title + tags */}
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-primary leading-snug mb-4 sm:mb-5">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border uppercase tracking-wider ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Mobile-only link (right hover panel is desktop only) */}
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="md:hidden inline-flex items-center gap-1.5 mt-5 text-[12px] font-bold uppercase tracking-wider text-[#1a194d] hover:text-[#625eff] transition-colors"
                  >
                    View case study
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                {/* Logo / company name */}
                <div className="mb-auto">
                  <span className="text-2xl font-bold text-[#625eff] tracking-[-0.03em] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    {item.logo}
                  </span>
                </div>

                {/* Quote + author */}
                <div className="border-t border-slate-100 pt-5 sm:pt-6 flex-shrink-0">
                  <div className="flex gap-4 sm:gap-5 items-start">
                    {/* Avatar */}
                    <div className="w-12 h-12 sm:w-13 sm:h-13 flex-shrink-0 rounded-full bg-slate-100 border border-slate-200 flex items-end justify-center overflow-hidden">
                      <svg className="w-full h-full text-slate-400 translate-y-[4px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-500 leading-relaxed mb-3 line-clamp-3 italic">
                        "{item.quote}"
                      </p>
                      <span className="block text-[14px] font-bold text-[#1a194d]">{item.author}</span>
                      <span className="block text-[13px] text-slate-400 mt-0.5">{item.role}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right panel fades in on hover, no translate jerk */}
              <div
                className="
                  hidden md:flex
                  absolute top-0 right-0
                  w-[280px] h-full
                  flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                  duration-[400ms]
                  delay-[120ms]
                  ease-in-out
                  z-20 p-6
                "
              >
                <div className="relative w-full h-[190px] rounded-sm overflow-hidden shadow-xl border border-slate-200">
                  <img
                    src={item.caseImage}
                    alt="Case study"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-[#1a194d]/15" />

                  {/* CTA button */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max">
                    <Link href={`/case-studies/${item.slug}`}>
                      <button className="bg-white px-4 py-2 text-[11px] font-bold text-[#1a194d] flex items-center gap-1.5 shadow-md hover:text-[#625eff] transition-colors uppercase border border-slate-100">
                        View case study
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Small descriptor below image */}
                <p className="mt-4 text-[12px] text-slate-400 text-center leading-relaxed px-2">
                  Read the full case study to see the implementation detail and results.
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}