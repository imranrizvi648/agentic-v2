"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt,FaEnvelope, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const AgenticSenseParticleText = dynamic(
  () => import("./Agenticsenseparticletext"),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full select-none" style={{ lineHeight: 1 }} aria-hidden="true">
        <div style={{
          fontSize: "13vw", fontWeight: 900,
          letterSpacing: "-0.06em", lineHeight: 1.14,
          color: "transparent", userSelect: "none", pointerEvents: "none",
        }}>
          AgenticSense
        </div>
      </div>
    ),
  }
);

const QUICK_LINKS = [
  { name: "ABOUT",     href: "/about" }, { name: "WHO WE ARE", href: "/about" },
  { name: "SERVICES", href: "/services" }, { name: "PROJECTS",   href: "/industries" },
  { name: "BLOG",     href: "/blog" }, { name: "PROPOSAL",   href: "/proposal" },
];

const SOCIAL_LINKS = [
  { name: "Facebook",   icon: <FaFacebookF size={12} />,  href: "https://www.facebook.com/agenticsense", hoverClass: "group-hover:bg-[#1877F2]" },
  { name: "Instagram",  icon: <FaInstagram size={12} />,  href: "https://www.instagram.com/agenticsense", hoverClass: "group-hover:bg-[#E4405F]" },
  { name: "Linkedin",   icon: <FaLinkedinIn size={12} />, href: "https://www.linkedin.com/company/agenticsense", hoverClass: "group-hover:bg-[#0A66C2]" },
  { name: "YouTube",    icon: <FaYoutube size={12} />,    href: "https://www.youtube.com/@AgenticSense", hoverClass: "group-hover:bg-[#FF0000]" },
  {
    name: "X",
    icon: <FaXTwitter size={12} />,
    href: "https://x.com/AgenticSense",
    hoverClass: "group-hover:bg-black",
  },
{
  name: "Contact",
  icon: <FaPhoneAlt size={12} />,
  href: "https://wa.me/923213551490",
  hoverClass: "group-hover:bg-blue-600",
},
];

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-12 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-6 md:px-1 font-sans border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Top 3-col grid ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-10 w-full sm:items-start">

          {/* Quick Links */}
          <div className="space-y-5 sm:space-y-6 w-full max-w-sm sm:max-w-none sm:ml-12 md:ml-16">
            <div className="flex justify-center sm:justify-start items-center">
              <h3 className="text-base font-bold text-gray-800 tracking-[-0.01em]">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
              {QUICK_LINKS.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href}
                  className="flex items-center justify-between bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group"
                >
                  <span className="text-[9px] sm:text-[10px] font-bold text-gray-700 tracking-wider truncate">
                    {link.name}
                  </span>
                  <div className="flex-shrink-0 bg-[#1e1b4b] p-1 sm:p-1.5 rounded-full text-white">
                    <HiOutlineArrowUpRight size={10} strokeWidth={2} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Brand centre */}
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 sm:ml-10 order-first sm:order-none">
            <h1 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-black">AGENTICSENSE</h1>
            <p className="text-sm text-gray-600 leading-[1.65] tracking-[-0.005em] max-w-xl">
              A Journey Towards Intelligent Transformation

AgenticSense is an Agentic AI and Modern AI company, helping enterprises transform the way they work through intelligent, connected, and autonomous Agentic AI systems.</p>
          </div>

          {/* Contact */}
          <div className="space-y-5 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 md:col-span-1 md:pl-12 md:ml-10 w-full">
            <div className="flex justify-center sm:justify-start items-center w-full">
              <h3 className="text-base font-bold text-gray-800 tracking-[-0.01em]">Contact</h3>
            </div>
            <div className="space-y-2 text-gray-700 text-sm font-semibold w-full -mt-3">
              <p className="hover:text-[#1e1b4b] cursor-pointer break-all">Email: info@agenticsense.co</p>
              <p>Phone: +92 (321) 3551490</p>

              <div className="pt-2 space-y-1">
                <span className="block text-sm font-bold text-gray-800">Office</span>
                <span className="block text-xs font-bold text-gray-700">Primary engineering</span>
                <p className="text-gray-500 font-medium text-[12px]">Karachi Pakistan</p>
                <span className="block text-xs font-bold text-gray-700 pt-1">
                  Regional delivery &amp; partnerships hub
                </span>
                <p className="text-gray-500 font-medium text-[12px]">USA, UK, Saudia Arabia, UAE</p>
              </div>
            </div>
           
          </div>
        </div>

        {/* ── Social bar ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mt-17">
          {SOCIAL_LINKS.map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              target="_blank"             
              rel="noopener noreferrer"   
              className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group justify-between"
            >
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">{social.name}</span>
              <div className={`bg-[#1e1b4b] p-1.5 sm:p-2 rounded-full text-white transition-colors flex items-center justify-center ${social.hoverClass}`}>
                {social.icon}
              </div>
            </a>
          ))}
        </div>

      </div> 

      {/* ── Particle brand text + legal (FULL SCREEN) ────────────────── */}
     {/* ── Particle brand text + legal (FULL SCREEN) ────────────────── */}
<div className="flex flex-col items-center mt-5 mb-1 w-full overflow-hidden">
  <div className="relative w-full">

    <AgenticSenseParticleText />

    {/* ── DESKTOP ONLY: Absolute labels ── */}
   {/* ── DESKTOP ONLY: Absolute labels ── */}
<span className="hidden lg:inline absolute bottom-4 left-[20%] xl:left-[22%] 2xl:left-[24%] text-[9px] xl:text-[10px] 2xl:text-[11px] font-bold text-gray-500 uppercase pointer-events-none z-10">
  ©2026 AgenticSense
</span>

<span className="hidden lg:inline absolute bottom-4 left-[50%] -translate-x-1/2 text-[9px] xl:text-[10px] 2xl:text-[11px] font-bold uppercase whitespace-nowrap z-10">
  <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">
    Terms and Conditions
  </a>
</span>

<span className="hidden lg:inline absolute bottom-4 right-[6%] xl:right-[7%] 2xl:right-[8%] text-[9px] xl:text-[10px] 2xl:text-[11px] font-bold uppercase whitespace-nowrap z-10">
  <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">
    Privacy Policy
  </a>
</span>
    {/* Decorative asterisk */}
   
  </div>

  {/* ── TABLET + MOBILE (below lg) ── */}
  <div className="lg:hidden w-full flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1 pb-1 px-4 text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-tight text-center">
    <span>©2026 AgenticSense</span>
    <span className="text-gray-300" aria-hidden="true">·</span>
    <a href="#" className="hover:text-[#1e1b4b] transition-colors">Terms &amp; Conditions</a>
    <span className="text-gray-300" aria-hidden="true">·</span>
    <a href="#" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
  </div>
</div>

    </footer>
  );
});

export default Footer;