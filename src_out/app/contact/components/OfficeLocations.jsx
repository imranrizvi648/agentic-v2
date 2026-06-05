"use client";
import React, { useState } from "react";
import { Phone, MapPin } from "lucide-react";

const LOCATIONS = {
  USA: {
    address: "11921 Freedom Drive, Suite 550\nReston, VA 20190",
    rep: { name: "Lara Kazan", role: "Business Development Executive", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" },
    phone: "+1 394 849 2309", flag: "🇺🇸",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.5323565293375!2d-77.35923982343886!3d38.95750247171121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b648174dfb2955%3A0x6e90e447bdf2f58!2s11921%20Freedom%20Dr%20%23550%2C%20Reston%2C%20VA%2020190%2C%20USA!5e0!3m2!1sen!2s!4v1717250000000!5m2!1sen!2s",
  },
  Pakistan: {
    address: "Main Boulevard, Phase 6, DHA\nLahore, Punjab 54000",
    rep: { name: "Zain Ahmed", role: "Regional Account Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" },
    phone: "+92 42 111 222 333", flag: "🇵🇰",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.564789023412!2d74.4428889!3d31.4807491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190b21a3ab39fb%3A0xefef484a0d9b4395!2sDHA%20Phase%206%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717250000000!5m2!1sen!2s",
  },
};

export default function OfficeLocations() {
  const [active, setActive] = useState("USA");
  const loc = LOCATIONS[active];

  return (
    <section className="bg-white font-sans px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24" style={{ fontFamily: "'Geist Sans', ui-sans-serif, system-ui, sans-serif" }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#625eff] mb-0">Our Offices</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] text-[#1a194d] mt-2.5">Where to find us</h2>
        </div>

        {/* Map container — responsive height */}
        <div className="relative rounded-[20px] overflow-hidden border border-[#eeecfc] shadow-[0_8px_40px_rgba(26,25,77,0.10)]" style={{ height: "clamp(420px,60vh,520px)" }}>

          <iframe src={loc.mapUrl} width="100%" height="100%" style={{ border: 0, display: "block", position: "absolute", inset: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${active} office map`} />

          {/* Tab switcher */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-10 flex gap-2">
            {Object.keys(LOCATIONS).map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all"
                style={{
                  border: `1.5px solid ${active === tab ? "#625eff" : "rgba(255,255,255,0.6)"}`,
                  background: active === tab ? "#1a194d" : "rgba(255,255,255,0.92)",
                  color: active === tab ? "#fff" : "#1a194d",
                  backdropFilter: "blur(8px)",
                  boxShadow: active === tab ? "0 4px 16px rgba(26,25,77,0.25)" : "0 2px 8px rgba(0,0,0,0.08)",
                }}>
                <span>{LOCATIONS[tab].flag}</span>{tab}
              </button>
            ))}
          </div>

          {/* Info card — responsive positioning */}
          <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bottom-3 sm:bottom-5 z-10 w-[240px] sm:w-[280px] bg-white/97 border border-[#eeecfc] rounded-2xl shadow-[0_8px_40px_rgba(26,25,77,0.14)] p-5 sm:p-7 flex flex-col gap-4 sm:gap-6 overflow-y-auto" style={{ backdropFilter: "blur(12px)" }}>
            {/* Header */}
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xl sm:text-2xl">{loc.flag}</span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1a194d]">{active}</h3>
              </div>
              <div className="w-8 h-0.5 rounded bg-[#625eff]" />
            </div>

            {/* Address */}
            <div>
              <p className="text-[0.6rem] font-bold tracking-[0.16em] uppercase text-[#9ca3af] mb-2">Address</p>
              <div className="flex gap-2 items-start">
                <MapPin size={13} color="#625eff" className="mt-0.5 flex-shrink-0" />
                <p className="text-[0.78rem] sm:text-[0.82rem] text-[#374151] leading-[1.65] whitespace-pre-line">{loc.address}</p>
              </div>
            </div>

            {/* Rep */}
            <div>
              <p className="text-[0.6rem] font-bold tracking-[0.16em] uppercase text-[#9ca3af] mb-2.5">Sales Representative</p>
              <div className="flex items-center gap-3">
                <img src={loc.rep.image} alt={loc.rep.name} className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover flex-shrink-0" style={{ filter: "grayscale(30%)", border: "2px solid #eeecfc" }} />
                <div>
                  <p className="text-[0.78rem] sm:text-[0.82rem] font-bold text-[#1a194d]">{loc.rep.name}</p>
                  <p className="text-[0.68rem] sm:text-[0.7rem] text-[#9ca3af] mt-0.5">{loc.rep.role}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <p className="text-[0.6rem] font-bold tracking-[0.16em] uppercase text-[#9ca3af] mb-2">Call Us</p>
              <a href={`tel:${loc.phone.replace(/\s/g,"")}`} className="inline-flex items-center gap-2 text-[0.82rem] sm:text-[0.85rem] font-bold text-[#1a194d] no-underline hover:text-[#625eff] transition-colors">
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg" style={{ background: "rgba(98,94,255,0.08)", border: "1px solid rgba(98,94,255,0.18)" }}>
                  <Phone size={12} color="#625eff" />
                </span>
                {loc.phone}
              </a>
            </div>

            {/* CTA */}
            <a href="/contact" className="flex items-center justify-center gap-1.5 mt-auto px-4 py-3 rounded-xl no-underline text-[0.75rem] sm:text-[0.78rem] font-bold tracking-[0.04em] text-white"
              style={{ background: "linear-gradient(135deg,#1a194d,#2d2b7a)", boxShadow: "0 4px 16px rgba(26,25,77,0.2)" }}>
              Get Directions <MapPin size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
