import React from "react";

const partners = [
  {
    id: 1,
    name: "Microsoft Solutions Partner",
    // Yahan apne actual logo ka path dijiye ga
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Microsoft_Solutions_Partner_badge.svg/512px-Microsoft_Solutions_Partner_badge.svg.png", 
  },
  {
    id: 2,
    name: "Google Cloud Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png",
  },
  {
    id: 3,
    name: "Salesforce Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
    // Image mein Salesforce aur AWS white hain, isliye ek flag rakh letay hain
    isWhite: true, 
  },
  {
    id: 4,
    name: "AWS Partner Network",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
    isWhite: true,
  }
];

export default function Partnerships() {
  return (
    <section 
      aria-labelledby="partnerships-heading"
      // Rich blue gradient aur radial glow mix
      className="relative overflow-hidden bg-gradient-to-r from-[#1a194d] via-[#25248b] to-[#0041C2] py-24 text-white"
    >
      {/* Background radial glow exactly like the image */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 20%, rgba(255,255,255,0.12) 0%, transparent 50%)'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* SEO Friendly Heading */}
        <h2 
          id="partnerships-heading"
          className="text-3xl md:text-[44px] font-bold text-center mb-20 tracking-tight leading-tight"
        >
          Our partnerships with <br className="hidden md:block" /> industry leaders
        </h2>

        {/* Semantic List for Screen Readers & Search Engines */}
        <ul className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] mx-auto">
          {partners.map((partner, index) => (
            <li 
              key={partner.id} 
              // md:border-r border-white/20 is se same waisi hi vertical lines aayengi
              className={`flex w-full md:w-1/4 justify-center items-center py-8 md:py-2 h-[100px] ${
                index !== partners.length - 1 ? 'md:border-r md:border-white/20' : ''
              } ${
                index !== 0 ? 'border-t border-white/20 md:border-t-0' : ''
              }`}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} Certification Logo`} 
                loading="lazy"
                // Agar aapke paas colored logos hain aur white chahiye toh isWhite flag use hoga (ya direct white SVG use kar lena)
                className={`max-h-12 w-auto object-contain transition-transform hover:scale-105 duration-300 ${
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