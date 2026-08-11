"use client";

import Link from "next/link";
import Image from "next/image";

const sectors = [
  { label: "Finance & Banking", icon: "", color: "text-amber-400" },
  { label: "Healthcare", icon: "", color: "text-emerald-400" },
  { label: "Real Estate", icon: "", color: "text-sky-400" },
  { label: "E-commerce", icon: "", color: "text-violet-400" },
  { label: "Education", icon: "", color: "text-rose-400" },
];

export default function HeroSection() {
  return ( 
    <section className="relative h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/industry.webp"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
           <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.02] tracking-[-0.03em] mb-2 mt-15">
  AI Solutions Built for the Demands of Your Industry
</h1>

<p className="text-base sm:text-lg text-white/80 leading-[1.65] tracking-[-0.005em] max-w-lg mb-4">
  We deliver production-ready AI solutions tailored to the workflows, compliance requirements, and data structures that drive your industry, with seamless integration into your core business systems.
</p>

<p className="text-base text-white/60 leading-[1.65] tracking-[-0.005em] max-w-lg mb-10">
  Serving organizations across multiple industries with proven deployments, deep domain expertise, and AI solutions designed around the systems your business depends on every day.
</p>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Pehla Button: Linked to /proposal */}
              <Link
                href="/proposal"
                className="inline-flex items-center gap-2 bg-[#1a194d] text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-none transition-colors"
              >
                Book a Sector Assessment →
              </Link>

              {/* Dusra Button: Now linked to /contact with updated industry text */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-none border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact an Industry Expert
              </Link>
            </div>
          </div>

          {/* Right Cards */}
          <div className="hidden lg:grid gap-3">
            {sectors.map((sector) => (
              <div
                key={sector.label}
                className="flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 rounded px-4 sm:px-6 py-3 hover:bg-white/15 transition-all"
              >
                <span className={`text-2xl w-10 text-center ${sector.color}`}>
                  {sector.icon}
                </span>

                <div className="flex-1">
                  <p className="text-sm font-bold text-white">
                    {sector.label}
                  </p>
                </div>

                <span className="text-white/50">→</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}