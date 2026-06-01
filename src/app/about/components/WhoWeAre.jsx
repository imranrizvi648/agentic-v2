import React from 'react';
import Image from 'next/image';
import { Flag } from 'lucide-react'; // Flag icon ke liye

const points = [
  "We are long-term partners who invest in understanding your business.",
  "We deliver intelligent, platform-specific solutions beyond just resources.",
  "We are problem-solvers across industries; we deeply understand the advance technology.",
  "We are big believers in AI's potential, bigger believers in human potential."
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#f3f4f6] py-24 px-8 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT CONTENT - 7 Columns */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who we are</h2>
          
          <h3 className="text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight">
            A Multi-Division Technology Enterprise Built for Depth with an AI-first Approach
          </h3>
          
          <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
            We are an AI-powered technology partner with specialized divisions, 
            official partnerships with NetSuite, Salesforce, Microsoft, and AWS, and a 
            client portfolio that includes Fortune 500 enterprises across agriculture, 
            healthcare, retail, and energy.
          </p>

          <ul className="space-y-4 pt-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className="mt-1">
                  <Flag className="w-4 h-4 text-red-500 fill-red-500" />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-snug">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CONTENT - 5 Columns */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Image Container with Yellow Accent */}
          <div className="relative self-end w-full max-w-md">
            {/* The white background box behind the image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-white -z-0" />
            
            {/* The Image itself */}
            <div className="relative z-10 w-full aspect-[4/3] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1000" 
                alt="City Skyline"
                className="w-full h-full object-cover"
              />
              {/* Small Yellow corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-400 [clip-path:polygon(100%_0%,_0%_100%,_100%_100%)]" />
            </div>
          </div>

          {/* Our Goal Text */}
          <div className="pt-4 max-w-sm self-end lg:self-start">
            <p className="text-slate-800 leading-relaxed">
              <span className="font-extrabold text-slate-900">Our Goal:</span> To help organizations operate faster, 
              scale smarter, and compete harder using AI, data, and the right enterprise platforms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}