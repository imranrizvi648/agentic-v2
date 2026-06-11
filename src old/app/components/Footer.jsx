"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

// ── Lazy-load the heavy canvas ────────────────────────────────────────────────
const AgenticSenseParticleText = dynamic(
  () => import("./Agenticsenseparticletext"),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full select-none" style={{ lineHeight: 1 }} aria-hidden="true">
        <div
          style={{
            fontSize: "13vw", fontWeight: 900,
            letterSpacing: "-0.06em", lineHeight: 1.14,
            color: "transparent", userSelect: "none", pointerEvents: "none",
          }}
        >
          AgenticSense
        </div>
      </div>
    ),
  }
);

// Yahan aap apne real routes/links add kar sakte hain
const QUICK_LINKS = [
  { name: "ABOUT",       href: "#about" }, 
  { name: "WHO WE ARE",  href: "#who-we-are" },
  { name: "SERVICES",    href: "#services" }, 
  { name: "PROJECTS",    href: "#projects" },
  { name: "BLOG",        href: "#blog" }, 
  { name: "PRICING",     href: "#pricing" },
];

const SOCIAL_LINKS = [
  { name: "Twitter / X", icon: <FaXTwitter size={12} />,   href: "https://x.com",         hoverClass: "group-hover:bg-[#000000]" },
  { name: "Facebook",    icon: <FaFacebookF size={12} />,  href: "https://facebook.com",  hoverClass: "group-hover:bg-[#1877F2]" },
  { name: "Instagram",   icon: <FaInstagram size={12} />,  href: "https://instagram.com", hoverClass: "group-hover:bg-[#E4405F]" },
  { name: "Linkedin",    icon: <FaLinkedinIn size={12} />, href: "https://linkedin.com",  hoverClass: "group-hover:bg-[#0A66C2]" },
  { name: "YouTube",     icon: <FaYoutube size={12} />,    href: "https://youtube.com",   hoverClass: "group-hover:bg-[#FF0000]" },
];

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-12 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-6 md:px-10 font-sans border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Responsive Grid System: Mobile (1 Col) -> Tablet (2 Col) -> Laptop (3 Col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-14 mb-10">

          {/* Quick Links Section */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff4d00] rounded-full" />
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {QUICK_LINKS.map((link, i) => (
                <a key={i} href={link.href}
                  className="flex items-center justify-between bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group">
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-700 tracking-wider truncate">{link.name}</span>
                  <div className="flex-shrink-0 bg-[#1e1b4b] p-1 sm:p-1.5 rounded-full text-white">
                    <HiOutlineArrowUpRight size={10} strokeWidth={2} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Center Brand Text: Mobile/Tablet friendly spacing */}
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 sm:justify-center md:justify-start">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black uppercase">QUINN LINK</h1>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-xs">
              Crafting digital experiences with clarity and purpose. Designing visuals that reflect identity and innovation.
            </p>
          </div>

          {/* Contact Section: Spans 2 columns on Tablet view to stay aligned */}
          <div className="space-y-5 sm:space-y-7 sm:col-span-2 md:col-span-1 md:pl-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1e1b4b] rounded-full" />
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Contact</h3>
            </div>
            <div className="space-y-2 text-gray-700 text-sm font-semibold">
              <p className="hover:text-[#1e1b4b] cursor-pointer break-all">
                <a href="mailto:agntics@studio.com">Email: agntics@studio.com</a>
              </p>
              <p>
                <a href="tel:+925550107">Phone: +(92) 555-0107</a>
              </p>
              <p className="text-gray-500 font-medium text-[13px]">4517 Washington Ave. Kentucky 39495</p>
            </div>
            <a href="mailto:agntics@studio.com" className="inline-flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-5 py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all group">
              <span className="text-xs font-black text-gray-800 uppercase tracking-widest">Contact Us</span>
              <div className="bg-[#1e1b4b] p-2 rounded-full text-white"><FaPhoneAlt size={10} /></div>
            </a>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {SOCIAL_LINKS.map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group justify-between">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">{social.name}</span>
              <div className={`bg-[#1e1b4b] p-1.5 sm:p-2 rounded-full text-white transition-colors flex items-center justify-center ${social.hoverClass}`}>
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Particle & Legal Area */}
        <div className="flex flex-col items-center mt-5 mb-2 w-full overflow-hidden">
          <div className="relative w-full">

            <AgenticSenseParticleText />

            {/* Absolute positioned items for Desktop/Laptop */}
            <span className="hidden sm:inline absolute bottom-[18%] left-[24%] text-[9px] md:text-[11px] font-bold text-gray-500 uppercase tracking-tighter whitespace-nowrap pointer-events-none z-10">
              ©2026 AgenticSense Design Studio.
            </span>
            <span className="hidden sm:inline absolute bottom-[18%] left-[56%]  -translate-x-1/2 text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
              <a href="#terms" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Terms and Conditions</a>
            </span>
            <span className="hidden sm:inline absolute bottom-[18%] right-[9%] text-[9px] md:text-[11px] font-bold uppercase tracking-tighter whitespace-nowrap z-10">
              <a href="#privacy" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
            </span>

            <span aria-hidden="true"
              className="absolute top-0 right-[3%] text-[5vw] font-light leading-none text-gray-400 pointer-events-none select-none">
              *
            </span>
          </div>

          {/* Mobile view copyright/legal links */}
          <div className="sm:hidden flex flex-wrap justify-center gap-4 mt-2 text-[10px] font-bold text-gray-700 uppercase tracking-tight">
            <span>©2026 AgenticSense.</span>
            <a href="#terms" className="hover:text-[#1e1b4b] transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;