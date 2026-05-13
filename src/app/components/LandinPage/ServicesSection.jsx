"use client";

import React from "react";

const servicesData = [
  {
    id: "ai",

    title: "AI & Data\nInnovation",

    description:
      "Specialized in Generative AI consulting, custom AI agents, and data science solutions.",

    tags: ["AI Agent Development", "Data Intelligence", "GenAI Models"],

    imageUrl:
      "https://images.unsplash.com/photo-1599110906885-b024c90c2773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8?auto=format&fit=crop&q=80&w=800",

    liquidColor: "rgba(37, 99, 235, 0.4)",
  },

  {
    id: "engineering",

    title: "Automation\nExcellence",

    description:
      "Custom software development, cloud architecture, and robust API system integrations.",

    tags: ["PROCESS AUTO", "ENTERPRISE AI", "WORKFLOW SYNC"],

    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661344293198-cbf16ca09796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8?auto=format&fit=crop&q=80&w=800",

    liquidColor: "rgba(15, 23, 42, 0.7)",
  },

  {
    id: "cloud",

    title: "Strategic\nAI Solutions",

    description:
      "Secure cloud migration services, data protection, and compliance audits.",

    tags: ["AI Consulting", "Digital Strategy", "ROI Analysis"],

    imageUrl:
      "https://images.unsplash.com/photo-1688699846375-46e74a026d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=800",

    liquidColor: "rgba(59, 130, 246, 0.3)",
  },

  {
    id: "strategy",

    title: "Conversational\nAI",

    description:
      "Strategic digital transformation and agile coaching for business growth.",

    tags: ["Chatbot Dev", "Multi-lingual", "24/7 Support"],

    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&q=80&w=800",

    liquidColor: "rgba(20, 184, 166, 0.3)",
  },
];

export default function ServicesSection() {
  return (
    <>
      <style>{`

        /* --- MAIN SECTION --- */

        .services-wrapper {

          background-color: #ffffff; /* SET TO WHITE */

          padding: 100px 24px;

          min-height: 100vh;

          font-family: sans-serif;

        }



        /* --- GLASS BLOCK CORE --- */

       .glass-block {

  position: relative;

  height: 380px; /* Height ko 480px se kam karke 380px kiya gaya hai */

  border-radius: 12px;

  overflow: hidden;

  background: #fdfdfd;

  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  box-shadow: 

    0 15px 35px rgba(0,0,0,0.08),

    0 5px 15px rgba(0,0,0,0.04);

  border: 1px solid rgba(0, 0, 0, 0.05);

}



        .glass-block:hover {

          transform: translateY(-12px);

          box-shadow: 0 40px 70px rgba(0,0,0,0.12);

        }



        /* --- THICK GLASS EDGE EFFECT --- */

        .glass-edge {

          position: absolute;

          inset: 0;

          z-index: 10;

          pointer-events: none;

          /* This mimics the refraction on the sides of the block */

          border: 10px solid transparent;

          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent 20%, transparent 80%, rgba(255,255,255,0.4)) border-box;

          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);

          -webkit-mask-composite: destination-out;

          mask-composite: exclude;

        }



        /* --- SURFACE SHINE --- */

        .glass-glare {

          position: absolute;

          inset: 0;

          z-index: 5;

          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(255,255,255,0.1) 100%);

          pointer-events: none;

        }



        /* --- LIQUID GLOW --- */

        .liquid-core {

          position: absolute;

          bottom: -15%;

          left: -20%;

          right: -20%;

          height: 60%;

          z-index: 2;

          filter: blur(50px);

          transition: all 0.8s ease;

          opacity: 0.6;

        }



        .glass-block:hover .liquid-core {

          height: 90%;

          bottom: -5%;

          opacity: 0.9;

        }



        /* --- TAGS (Matches Image) --- */

        .service-tag-pill {

  display: flex;

  align-items: center;

  justify-content: space-between;

  width: 100%;

  padding: 8px 14px; /* Padding kam ki gayi hai taaki chhote card mein fit ho */

  margin-top: 4px;   /* Margin kam kiya gaya hai */

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(15px);

  border: 1px solid rgba(255, 255, 255, 0.2);

  border-radius: 50px;

  color: white;

  font-size: 10px;   /* Font size halka sa chhota kiya hai */

  font-weight: 700;

  letter-spacing: 0.8px;

  text-transform: uppercase;

  opacity: 0;

  transform: translateY(20px);

  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

}



        .glass-block:hover .service-tag-pill {

          opacity: 1;

          transform: translateY(0);

        }



        .pill-circle {

          width: 14px;

          height: 14px;

          border-radius: 50%;

          border: 2px solid rgba(255, 255, 255, 0.5);

        }

      `}</style>

      <section className="services-wrapper">
        <div className="container mx-auto">
          {/* Header */}

          <div className="mb-16">
            <h2
              id="services-main-heading"
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Our AI & Automation{" "}
              <span className="text-blue-600">Services</span>
            </h2>

            <div className="h-1.5 w-20 bg-blue-600 mt-4 rounded-full" />

            <p className="mt-6 text-slate-600 text-lg max-w-2xl leading-relaxed">
              Bridging the gap between complex technology and business growth
              through bespoke AI solutions.
            </p>
          </div>

          {/* Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
            {servicesData.map((service) => (
              <article key={service.id} className="glass-block">
                {/* Visual Layers */}

                <div className="glass-edge" />

                <div className="glass-glare" />

                {/* Background Refraction Image */}

                <div
                  className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.imageUrl})`,

                    backgroundSize: "cover",

                    backgroundPosition: "center",

                    filter: "brightness(0.65) contrast(1.1)",
                  }}
                />

                {/* The Liquid Effect */}

                <div
                  className="liquid-core"
                  style={{ background: service.liquidColor }}
                />

                {/* Content Overlay */}

                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white leading-tight mb-4 whitespace-pre-line">
                    {service.title}
                  </h3>

                  <p className="text-slate-200 text-xs leading-relaxed mb-6 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-24">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-1">
                    {service.tags.map((tag, i) => (
                      <div
                        key={tag}
                        className="service-tag-pill"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <span>{tag}</span>

                        <div className="pill-circle" />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
