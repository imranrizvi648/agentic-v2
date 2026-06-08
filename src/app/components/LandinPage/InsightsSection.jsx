"use client";
import React, { useRef } from "react";

// Mock Data for Insights
const insightsData = [
  {
    id: 1,
    type: "ARTICLE",
    tagBg: "bg-indigo-100",
    tagColor: "text-indigo-600",
    title: "Why Finance AI Pilots Fail — And What to Do Instead",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=350",
    href: "/blog/why-finance-ai-pilots-fail",
  },
  {
    id: 2,
    type: "WHITEPAPER",
    tagBg: "bg-gray-100",
    tagColor: "text-gray-600",
    title: "Agentic AI vs Traditional Automation: What's the Difference?",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=350",
    href: "/blog",
  },
  {
    id: 3,
    type: "ARTICLE",
    tagBg: "bg-blue-100",
    tagColor: "text-blue-600",
    title: "How AI Agents Are Closing the Month-End Faster",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=350",
    href: "/blog",
  },
  {
    id: 4,
    type: "WHITEPAPER",
    tagBg: "bg-gray-100",
    tagColor: "text-gray-600",
    title: "C-Suite Guide to Agentic AI in 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=350",
    href: "/blog",
  },
  {
    id: 5,
    type: "ARTICLE",
    tagBg: "bg-blue-100",
    tagColor: "text-blue-600",
    title: "Top 10 Business Processes You Can Automate with AI Agents",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=600&h=350",
    href: "/blog",
  },
  {
    id: 6,
    type: "WEBINAR",
    tagBg: "bg-pink-100",
    tagColor: "text-pink-600",
    title: "How AI Chatbots Improve Customer Support and Sales",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600&h=350",
    href: "/blog",
  },
];

export default function InsightsSection() {
  const scrollContainerRef = useRef(null);

  // Scroll function for next/prev buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Jitna scroll karna chahte hain ek click pe. 
      // Yahan approximately 1 card ki width li hai.
      const scrollAmount = 320; 
      
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">
            Latest insights & resources
          </h2>
          
          {/* Controls Area */}
          <div className="flex items-center gap-2">
            {/* All Insights Button */}
            <button className="px-4 py-2 border border-gray-300 rounded text-sm font-semibold text-[#0b4ddb] hover:bg-gray-50 transition-colors whitespace-nowrap mr-2">
              All insights
            </button>
            
            {/* Left Arrow */}
            <button 
              onClick={() => scroll("left")}
              aria-label="Previous items"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => scroll("right")}
              aria-label="Next items"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        {/* Added utility classes to hide default scrollbars but keep scrolling functional */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {insightsData.map((item) => (
            <article 
              key={item.id} 
              className="flex flex-col min-w-[280px] md:min-w-[300px] w-[280px] md:w-[300px] snap-start cursor-pointer group"
            >
              {/* Image Box */}
              <div className="w-full aspect-[16/9] mb-4 overflow-hidden bg-gray-100 border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Tag / Pill */}
              <div className="mb-3">
                <span className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider rounded uppercase ${item.tagBg} ${item.tagColor}`}>
                  {item.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-brand-primary font-semibold text-base leading-snug group-hover:text-brand-secondary transition-colors line-clamp-3">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}