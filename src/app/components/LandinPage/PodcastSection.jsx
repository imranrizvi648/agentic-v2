"use client";
import React, { useState } from "react";

// Mock data
const podcasts = [
  {
    id: 1,
    partner: "aws",
    title: "AI Agents That Run Inside Your ERP: How It Actually Works",
    speakers: "Chomchana Trevai | Umair Javed",
    // Make sure to use transparent PNG cutouts of speakers here
    image: "/podcast-img4.png.bv.webp", 
    videoId: "dQw4w9WgXc",
  },
  {
    id: 2,
    partner: "intel",
    title: "Why Finance AI Pilots Fail Before Production",
    speakers: "Ezequiel Lanza | Haseeb Khan",
    image: "/podcast-img4.png.bv.webp",
    videoId: "dQw4w9WgXc",
  },
  {
    id: 3,
    partner: "vmware",
    title: "ERP-Native AI: The Difference Between a Demo and a System",
    speakers: "Joe Baguley | Umair Javed | Yasir Rizwan",
    image: "/podcast-img4.png.bv.webp",
    videoId: "dQw4w9WgXc",
  },
  {
    id: 4,
    partner: "servicenow",
    title: "Agentic AI vs Traditional Automation: What Every CTO Should Know",
    speakers: "Chris Traylor | Haseeb Khan",
    image: "/podcast-img4.png.bv.webp",
    videoId: "dQw4w9WgXc",
  }
];

// Pre-defined heights for the waveform bars
const waveHeights = [
  15, 25, 10, 40, 30, 50, 40, 60, 45, 75, 60, 90, 70, 100, 80, 50, 85, 45, 
  95, 65, 80, 55, 70, 40, 60, 35, 50, 25, 40, 20, 30, 15, 25, 10
];

export default function PodcastSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section 
      aria-labelledby="podcast-heading"
      className="py-16 md:py-24 bg-white font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 
            id="podcast-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight"
          >
            Conversations that go beyond the code
          </h2>
          <button 
            aria-label="View all podcasts"
            className="px-6 py-2.5 border border-gray-300 rounded-md font-semibold text-sm text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            All podcasts
          </button>
        </div>

        {/* Podcast Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {podcasts.map((podcast) => (
            <article 
              key={podcast.id}
              onClick={() => setActiveVideo(podcast.videoId)}
              className="group relative bg-[#1a194d] rounded-none overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl flex flex-col aspect-square w-full mx-auto"
            >
              {/* Top Header (Logos & Pill) */}
              <div className="p-2 flex justify-between items-center z-20 flex-shrink-0 w-full">
                <div className="flex items-center gap-2 md:gap-3 text-white">
                  <span className="font-bold text-base md:text-xl leading-none">
                    {podcast.partner}
                  </span>
                  <div className="w-[1.5px] h-3.5 bg-white/60"></div>
                  <span className="font-bold text-base md:text-lg leading-none tracking-tight ">
                   Agentic
                  </span>
                </div>
                <div className="bg-[#1a194d] text-white text-[9px] md:text-[10px] font-bold px-2.5 py-1 md:py-1.5 rounded-full uppercase tracking-wider hover:bg-[#3b75ff] transition-colors">
                  Podcast
                </div>
              </div>

              {/* Center Image Area - FULL WIDTH */}
              <div className="relative flex-grow flex items-end justify-center w-full overflow-hidden z-10">
                <img 
                  src={podcast.image} 
                  alt={`Speakers for ${podcast.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-bottom"
                />
                
                {/* Hover Waveform overlay over the image */}
                <div className="absolute bottom-0 left-0 right-0 h-[35px] md:h-[35px] w-full flex items-end justify-center gap-[2px] md:gap-[3px] px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {waveHeights.map((height, index) => (
                    <div 
                      key={index} 
                      className="w-[2px] md:w-[3px] bg-white rounded-full transition-all duration-300 ease-out origin-bottom"
                      style={{ 
                        height: `${height}%`,
                        animation: `wave-pulse 1.2s ease-in-out infinite ${index * 0.05}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Bottom Text Area - FIXED HEIGHT */}
              {/* Changed to fixed height (h-[90px] md:h-[105px]) so all cards align perfectly */}
              <div className="relative z-30 bg-[#1a194d] px-4 md:px-5 flex gap-3 md:gap-4 items-center flex-shrink-0 w-full h-[80px] md:h-[70px]">
                {/* Play Button */}
                <div className="w-10 h-10 md:w-[42px] md:h-[42px] min-w-[40px] md:min-w-[42px] rounded-full bg-[#ccff00] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[5px] md:border-t-[6px] border-t-transparent border-l-[8px] md:border-l-[10px] border-l-[#0b4ddb] border-b-[5px] md:border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-white font-medium text-[14px] md:text-[15px] leading-[1.25] mb-1.5 line-clamp-2 pr-1">
                    {podcast.title}
                  </h3>
                  <p className="text-white/80 text-[10px] md:text-[11px] font-normal tracking-wide line-clamp-1">
                    {podcast.speakers}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setActiveVideo(null)}
            aria-label="Close modal background"
          ></div>
          
          <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl aspect-video z-10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 z-50 p-2 text-white hover:text-[#ccff00] transition-colors"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Waveform Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave-pulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.6); }
        }
      `}} />
    </section>
  );
}