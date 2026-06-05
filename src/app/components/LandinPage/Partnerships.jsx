import React from "react";

const partners = [
  {
    id: 1,
    name: "Xpace Technologies",
    logo: "/xpace white logo.png", 
    // Taller/Square logo gets a larger height
    sizeClass: "max-h-12 md:max-h-16", 
  },
  {
    id: 2,
    name: "Funuun",
    logo: "/Gemini_Generated_Image_563xrm563xrm563x-removebg-preview.png",
    // Very wide logo gets a smaller height so its width doesn't over-expand
    sizeClass: "max-h-8 md:max-h-20",
  },
  {
    id: 3,
    name: "AITHENTIC",
    logo: "/Gemini_Generated_Image_qa7eg1qa7eg1qa7e-removebg-preview.png",
    isWhite: true, 
    // Medium-wide logo
    sizeClass: "max-h-10 md:max-h-12",
  },
  {
    id: 4,
    name: "BRB Group",
    logo: "/BRB-LOGO.png",
    // Medium logo
    sizeClass: "max-h-12 md:max-h-18",
  }
];

export default function Partnerships() {
  return (
    <section 
      aria-labelledby="partnerships-heading"
      className="relative overflow-hidden bg-gradient-to-r from-[#0d133b] via-[#152374] to-[#0047d4] py-20 text-white font-sans"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        <h2 
          id="partnerships-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-10 sm:mb-16 tracking-tight leading-tight"
        >
          Our partnerships with <br className="hidden md:block" /> industry leaders
        </h2>

        <ul className="flex flex-col md:flex-row items-center justify-between w-full">
          {partners.map((partner, index) => (
            <li 
              key={partner.id} 
              className={`flex flex-1 w-full justify-center items-center h-28 md:h-32 py-6 md:py-0 ${
                index !== partners.length - 1 ? 'md:border-r border-white/20' : ''
              } ${
                index !== 0 ? 'border-t border-white/20 md:border-t-0' : ''
              }`}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                loading="lazy"
                // Replaced strict height with dynamic sizeClass and safety max-widths
                className={`w-auto object-contain px-4 lg:px- transition-transform hover:scale-105 duration-300 max-w-[160px] md:max-w-[220px] ${partner.sizeClass} ${
                  partner.isWhite ? 'brightness-0 invert' : ''
                }`}
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}