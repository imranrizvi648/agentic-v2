import React from "react";

// Top row data (5 items)
const topRecognitions = [
  {
    id: 1,
    title: "America's Fastest Growing Company",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Inc._5000_logo.svg/512px-Inc._5000_logo.svg.png",
  },
  {
    id: 2,
    title: "Top 100 Inspiring Workplaces 2025",
    logo: "https://placehold.co/150x150/ffffff/000000.png?text=Top+100\nWorkplaces",
  },
  {
    id: 3,
    title: "Forbes Coaches Council",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/512px-Forbes_logo.svg.png",
  },
  {
    id: 4,
    title: "Financial Times",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Financial_Times_corporate_logo.svg/512px-Financial_Times_corporate_logo.svg.png",
  },
  {
    id: 5,
    title: "Mogul People Leader",
    logo: "https://placehold.co/150x150/ffffff/000000.png?text=Mogul+100",
  },
];

// Bottom row data (4 items)
const bottomRecognitions = [
  {
    id: 6,
    title: "ISO 27001 Certified",
    logo: "https://placehold.co/150x150/ffffff/00529B.png?text=ISO\n27001",
  },
  {
    id: 7,
    title: "ISO 20000 Certified",
    logo: "https://placehold.co/150x150/ffffff/00529B.png?text=ISO\n20000",
  },
  {
    id: 8,
    title: "ISO 9001 Certified",
    logo: "https://placehold.co/150x150/ffffff/00529B.png?text=ISO\n9001",
  },
  {
    id: 9,
    title: "CMMI DEV 3 Certified",
    logo: "https://placehold.co/150x150/ffffff/00529B.png?text=CMMI\nDEV+3",
  },
];

export default function Recognitions() {
  return (
    <section 
      id="recognition" 
      aria-labelledby="recognition-heading" 
      className="pb-15 bg-white text-center font-sans border-b border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* SEO Friendly Heading */}
        <h2 
          id="recognition-heading" 
          className="text-4xl md:text-[44px] font-extrabold text-[#1B212D] mb-20 tracking-tight mx-auto max-w-4xl leading-[1.2]"
        >
          We’ve been recognized by <br className="hidden md:block" /> the best, year after year
        </h2>

        <div className="flex flex-col w-full">
          {/* Top Row - 5 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 border-b border-gray-300">
            {topRecognitions.map((item, index) => (
              <article 
                key={item.id} 
                className={`flex flex-col justify-start items-center px-4 py-8 md:p-8 hover:bg-gray-50 transition-colors ${
                  index !== 0 ? "md:border-l border-gray-300" : ""
                } ${
                  // Mobile borders setup
                  index % 2 !== 0 ? "border-l border-gray-300" : ""
                }`}
              >
                <h3 className="text-[11px] font-bold text-gray-800 uppercase tracking-[0.15em] mb-8 min-h-[32px] flex items-center text-center leading-relaxed max-w-[180px]">
                  {item.title}
                </h3>
                <div className="h-20 w-full flex items-center justify-center">
                  <img 
                    src={item.logo} 
                    alt={`${item.title} Logo`} 
                    loading="lazy"
                    className="max-h-full max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Row - 4 Columns */}
          {/* Isko max-w de kar center kiya hai taake layout exactly image jaisa lage */}
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1100px] mx-auto w-full">
            {bottomRecognitions.map((item, index) => (
              <article 
                key={item.id} 
                className={`flex flex-col justify-start items-center px-4 py-8 md:p-8 hover:bg-gray-50 transition-colors ${
                  index !== 0 ? "md:border-l border-gray-300" : ""
                } ${
                  // Mobile borders setup
                  index % 2 !== 0 ? "border-l border-gray-300" : ""
                }`}
              >
                <h3 className="text-[11px] font-bold text-gray-800 uppercase tracking-[0.15em] mb-8 min-h-[32px] flex items-center text-center leading-relaxed max-w-[160px]">
                  {item.title}
                </h3>
                <div className="h-20 w-full flex items-center justify-center">
                  <img 
                    src={item.logo} 
                    alt={`${item.title} Logo`} 
                    loading="lazy"
                    className="max-h-full max-w-[100px] object-contain" 
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}