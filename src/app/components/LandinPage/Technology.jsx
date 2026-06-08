"use client";

import React, { useRef, useState, useEffect } from "react";

const leftFeatures = [
  { title: "NetSuite", image: "/Gemini_Generated_Image_aq8ak2aq8ak2aq8a-removebg-preview.webp", subtitle: "Enterprise Integration" },
  { title: "Microsoft Fabric", image: "/microsoft-fusion.png", subtitle: "Enterprise Integration" },
  { title: "Oracle Fusion", image: "/image-removebg-preview.png", subtitle: "Enterprise Integration" },
  { title: "", redundantTitle: "Salesforce", image: "/salessforce.png", subtitle: "Enterprise Integration" },
];

const rightFeatures = [
  { title: "SAP BTP", image: "/sap-logo-svg.png", subtitle: "Enterprise Integration" },
  { title: "SAP S/4HANA", image: "/logo.png", subtitle: "Enterprise Integration" },
  { title: "Zoho", image: "/zoho-logo-web.png", subtitle: "Enterprise Integration" },
  { title: "Odoo", image: "/odoo_.png", subtitle: "Enterprise Integration" },
];

function AnimatedLine({ d, delay = 0, gradientId = "gradient", markerId }) {
  return (
    <g>
      {/* Background Track (Gray Line) */}
      <path
        d={d}
        stroke="#cbd5e1"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />

      {/* Animated Light Flow with Arrowhead */}
      <path
        d={d}
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={`url(#${markerId})`} 
        className="flow-line"
        style={{ animationDelay: `${delay}s` }}
      />

      <style jsx>{`
        .flow-line {
          stroke-dasharray: 60 180;
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
      ([entry]) => { if (entry.isIntersecting) setRender(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#eff2f9] py-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-400/10 blur-[120px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-brand-primary leading-tight">
            Technologies We Master
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center relative mt-10">
          
          {/* Left Cards */}
          <div className="flex flex-col gap-6 w-[280px] relative z-20">
            {leftFeatures.map((item, i) => <FeatureCard key={i} {...item} />)}
          </div>

          {/* Left Lines with Branching & Arrows */}
          <div className="w-56 h-[500px] relative z-10 -mx-6">
            {render && (
              <svg viewBox="0 0 200 500" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="grad-l" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                  {/* High Visibility Arrow Left */}
                  <marker id="arrow-l" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                  </marker>
                </defs>
                <AnimatedLine d="M 200 250 H 120 V 65 H 0" delay={0} gradientId="grad-l" markerId="arrow-l" />
                <AnimatedLine d="M 200 250 H 120 V 185 H 0" delay={1} gradientId="grad-l" markerId="arrow-l" />
                <AnimatedLine d="M 200 250 H 120 V 315 H 0" delay={2} gradientId="grad-l" markerId="arrow-l" />
                <AnimatedLine d="M 200 250 H 120 V 435 H 0" delay={3} gradientId="grad-l" markerId="arrow-l" />
              </svg>
            )}
          </div>

          {/* Central Hub */}
          <div className="relative z-30 shrink-0 mx-2">
            <div className="absolute inset-0 -m-8 bg-indigo-500/20 blur-xl rounded-full"></div>
            <div className="relative w-28 h-28 flex items-center justify-center group">
              <img src="/iconeee.png" alt="Logo" className="w-26 h-26 object-contain drop-shadow-xl" />
            </div>
          </div>

          {/* Right Lines with Branching & Arrows */}
          <div className="w-56 h-[500px] relative z-10 -mx-6">
            {render && (
              <svg viewBox="0 0 200 500" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="grad-r" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                  {/* High Visibility Arrow Right */}
                  <marker id="arrow-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                  </marker>
                </defs>
                <AnimatedLine d="M 0 250 H 80 V 65 H 200" delay={0.5} gradientId="grad-r" markerId="arrow-r" />
                <AnimatedLine d="M 0 250 H 80 V 185 H 200" delay={1.5} gradientId="grad-r" markerId="arrow-r" />
                <AnimatedLine d="M 0 250 H 80 V 315 H 200" delay={2.5} gradientId="grad-r" markerId="arrow-r" />
                <AnimatedLine d="M 0 250 H 80 V 435 H 200" delay={3.5} gradientId="grad-r" markerId="arrow-r" />
              </svg>
            )}
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 w-[280px] relative z-20">
            {rightFeatures.map((item, i) => <FeatureCard key={i} {...item} />)}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden max-w-2xl mx-auto mt-12">
          {[...leftFeatures, ...rightFeatures].map((item, i) => <FeatureCard key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, redundantTitle, image, subtitle }) {
  return (
    <div className="group relative w-full h-28 overflow-hidden rounded bg-slate-300/30 backdrop-blur-md shadow-lg border-[1px] p-[2px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
      <div className="relative w-full h-full border border-white/60 bg-white/70 rounded-sm shadow-[inset_0_4px_10px_rgba(255,255,255,1)] flex flex-col items-center justify-center p-3">
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/90 to-transparent pointer-events-none rounded-t-sm"></div>
        <div className="h-8 mb-2 flex items-center justify-center relative z-10 shrink-0">
          <img src={image} alt={title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex flex-col items-center text-center relative z-10">
          {redundantTitle ? (
            <>
              <h3 className="text-[10px] font-semibold text-slate-600 tracking-tight leading-none mb-0.5">{title}</h3>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-none">{redundantTitle}</h3>
            </>
          ) : (
            <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-0.5">{title}</h3>
          )}
          <p className="text-[10px] font-medium text-slate-600 mt-1">{subtitle || "Enterprise Integration"}</p>
        </div>
      </div>
    </div>
  );
}