import React from "react";

// Top row data (5 items)
const topRecognitions = [
  {
    id: 1,
    title: "SAP Business One Partner",
    logo: "https://placehold.co/150x150/0a5dab/ffffff.png?text=SAP+B1",
  },
  {
    id: 2,
    title: "Oracle Fusion Cloud",
    logo: "https://placehold.co/150x150/c74634/ffffff.png?text=Oracle+Fusion",
  },
  {
    id: 3,
    title: "Microsoft Fabric Partner",
    logo: "https://placehold.co/150x150/00adef/ffffff.png?text=Microsoft+Fabric",
  },
  {
    id: 4,
    title: "LangGraph Certified",
    logo: "https://placehold.co/150x150/1c1c1c/ffffff.png?text=LangGraph",
  },
  {
    id: 5,
    title: "Azure AI Foundry",
    logo: "https://placehold.co/150x150/0078d4/ffffff.png?text=Azure+AI",
  },
];

// Bottom row data (4 items)
const bottomRecognitions = [
  {
    id: 6,
    title: "NetSuite Integration",
    logo: "https://placehold.co/150x150/009fdf/ffffff.png?text=NetSuite",
  },
  {
    id: 7,
    title: "Salesforce Partner",
    logo: "https://placehold.co/150x150/00a1e0/ffffff.png?text=Salesforce",
  },
  {
    id: 8,
    title: "Odoo Integration",
    logo: "https://placehold.co/150x150/714b67/ffffff.png?text=Odoo",
  },
  {
    id: 9,
    title: "OCI GenAI Agents",
    logo: "https://placehold.co/150x150/c74634/ffffff.png?text=OCI+GenAI",
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-12 sm:mb-20 tracking-tight mx-auto max-w-4xl leading-[1.2]"
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