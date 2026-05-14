"use client";

import React, { useRef, useState, useEffect } from "react";

// Updated data lists with redundant text for J.P.Morgan card and common subtitle
const leftFeatures = [
  { title: "NetSuite", image: "/Gemini_Generated_Image_aq8ak2aq8ak2aq8a-removebg-preview.webp", subtitle: "Enterprise Integration" },
  { title: "Microsoft Fabric", image: "/microsoft-fusion.png", subtitle: "Enterprise Integration" },
  { title: "Oracle Fusion", image: "/image-removebg-preview.png", subtitle: "Enterprise Integration" },
  { title: "J.P.Morgan", redundantTitle: "JP Morgan", image: "/logo-jpm-brown.png", subtitle: "Enterprise Integration" },
];

const rightFeatures = [
  { title: "SAP BTP", image: "/sap-logo-svg.png", subtitle: "Enterprise Integration" },
  { title: "SAP S/4HANA", image: "/logo.png", subtitle: "Enterprise Integration" },
  { title: "Zoho", image: "/zoho-logo-web.png", subtitle: "Enterprise Integration" },
  { title: "Odoo", image: "/odoo_.png", subtitle: "Enterprise Integration" },
];

function AnimatedLine({ d, delay = 0, gradientId = "gradient" }) {
  return (
    <g>
      {/* Background Track */}
      <path
        d={d}
        stroke="#e5e7eb" /* tailwind gray-200 */
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Animated Flowing Line */}
      <path
        d={d}
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        className="flow-line"
        style={{ animationDelay: `${delay}s` }}
      />

      <style jsx>{`
        .flow-line {
          stroke-dasharray: 40 200;
          animation: flow 4s linear infinite;
        }
        @keyframes flow {
          from { stroke-dashoffset: 240; }
          to { stroke-dashoffset: -240; }
        }
      `}</style>
    </g>
  );
}

export default function Technology() {
  const sectionRef = useRef(null);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRender(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eff2f9] py-20" // Light bluish-gray background to match image
    >
      {/* Professional Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-400/10 blur-[120px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
         

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Technologies We
              Master
            
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-xl text-center leading-relaxed font-medium">
            Modern enterprise platforms and cloud technologies powering our
            next-generation AI products and scalable business systems.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center relative mt-10">
          
          {/* Left Cards */}
          <div className="flex flex-col gap-6 w-[280px] relative z-20">
            {leftFeatures.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>

          {/* Left Flow Lines */}
          <div className="w-56 h-[500px] relative z-10 -mx-6">
            {render && (
              <svg viewBox="0 0 200 500" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="gradient-left" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <AnimatedLine d="M 200 250 C 120 250, 100 65, 0 65" delay={0} gradientId="gradient-left" />
                <AnimatedLine d="M 200 250 C 120 250, 100 185, 0 185" delay={1} gradientId="gradient-left" />
                <AnimatedLine d="M 200 250 C 120 250, 100 310, 0 310" delay={2} gradientId="gradient-left" />
                <AnimatedLine d="M 200 250 C 120 250, 100 435, 0 435" delay={3} gradientId="gradient-left" />
              </svg>
            )}
          </div>

          {/* Central Hub - Background removed, glow kept */}
          <div className="relative z-30 shrink-0 mx-2">
            {/* Light/Glow Effect (Pulsing Rings) */}
            <div className="absolute inset-0 -m-6 border border-indigo-500/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute inset-0 -m-10 border border-indigo-400/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
            <div className="absolute inset-0 -m-8 bg-indigo-500/20 blur-xl rounded-full z-0"></div>
            
            {/* Floating minimal hub (No White Background) */}
            <div className="relative w-28 h-28 flex items-center justify-center group z-10">
              <img
                src="/iconeee.png"
                alt="Central Hub Logo"
                className="w-20 h-20 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Flow Lines */}
          <div className="w-56 h-[500px] relative z-10 -mx-6">
            {render && (
              <svg viewBox="0 0 200 500" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <AnimatedLine d="M 0 250 C 80 250, 100 65, 200 65" delay={0.5} gradientId="gradient-right" />
                <AnimatedLine d="M 0 250 C 80 250, 100 185, 200 185" delay={1.5} gradientId="gradient-right" />
                <AnimatedLine d="M 0 250 C 80 250, 100 310, 200 310" delay={2.5} gradientId="gradient-right" />
                <AnimatedLine d="M 0 250 C 80 250, 100 435, 200 435" delay={3.5} gradientId="gradient-right" />
              </svg>
            )}
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 w-[280px] relative z-20">
            {rightFeatures.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>
          
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden max-w-2xl mx-auto mt-12">
          {[...leftFeatures, ...rightFeatures].map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, redundantTitle, image, subtitle }) {
  return (
    <div className="group relative w-full h-28 overflow-hidden rounded bg-slate-300/30 backdrop-blur-md shadow-lg border-[1px]  p-[2px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
      
      {/* Inner Glass Frame mimicking 3D border */}
      <div className="relative w-full h-full border border-white/60 bg-white/70 rounded-sm shadow-[inset_0_4px_10px_rgba(255,255,255,1)] flex flex-col items-center justify-center p-3">
        
        {/* Top Shine/Glare Effect */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/90 to-transparent pointer-events-none rounded-t-sm"></div>

        {/* Centered Image */}
        <div className="h-8 mb-2 flex items-center justify-center relative z-10 shrink-0">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Centered Text Content */}
        <div className="flex flex-col items-center text-center relative z-10">
          {redundantTitle ? (
            <>
              <h3 className="text-[10px] font-semibold text-slate-600 tracking-tight leading-none mb-0.5">
                {title}
              </h3>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-none">
                {redundantTitle}
              </h3>
            </>
          ) : (
            <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-0.5">
              {title}
            </h3>
          )}
          <p className="text-[10px] font-medium text-slate-600 mt-1">
            {subtitle || "Enterprise Integration"}
          </p>
        </div>
      </div>
    </div>
  );
}