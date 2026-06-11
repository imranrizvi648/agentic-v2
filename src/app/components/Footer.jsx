"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaYoutube } from "react-icons/fa";
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
  { name: "ABOUT",    href: "/about" }, { name: "WHO WE ARE", href: "/about" },
  { name: "SERVICES", href: "/services" }, { name: "PROJECTS",   href: "/projects" },
  { name: "BLOG",     href: "/blog" }, { name: "PROPOSAL",    href: "/industries" },
];
const SOCIAL_LINKS = [
  { name: "Twitter / X", icon: <FaXTwitter size={12} />,   href: "#", hoverClass: "group-hover:bg-[#000000]" },
  { name: "Facebook",    icon: <FaFacebookF size={12} />,  href: "#", hoverClass: "group-hover:bg-[#1877F2]" },
  { name: "Instagram",   icon: <FaInstagram size={12} />,  href: "#", hoverClass: "group-hover:bg-[#E4405F]" },
  { name: "Linkedin",    icon: <FaLinkedinIn size={12} />, href: "#", hoverClass: "group-hover:bg-[#0A66C2]" },
  { name: "YouTube",     icon: <FaYoutube size={12} />,    href: "#", hoverClass: "group-hover:bg-[#FF0000]" },
];

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-12 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-6 md:px-1 font-sans border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Top 3-col grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-10">

          {/* Quick Links */}
          {/* Quick Links */}
<div className="space-y-5 sm:space-y-6 ml-15">
  <div className="flex items-center gap-2">
    <span className="w-2 h-2 bg-[#ff4d00] rounded-full" />
    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Quick Links</h3>
  </div>
  <div className="grid grid-cols-2 gap-2 sm:gap-3">
    {QUICK_LINKS.map((link, i) => (
      /* 🌟 UPDATE: <Link> component use karein href ke sath, aur <a> ko hata dein */
      <Link 
        key={i} 
        href={link.href}
        className="flex items-center justify-between bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group"
      >
        <span className="text-[9px] sm:text-[10px] font-black text-gray-700 tracking-wider truncate">
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
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 ml-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black uppercase">AGENTICSENSE</h1>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-xs">
              Building intelligent AI agents that help businesses automate work, make smarter decisions and scale faster  natively inside your ERP.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-5 sm:space-y-7 sm:col-span-2 md:col-span-1 md:pl-18 md:ml-10">
            <div className="flex items-center gap-2">
              
              <h3 className="text-lg font-bold text-gray-800 uppercase item-center text-center ">Contact</h3>
            </div>
            <div className="space-y-2 text-gray-700 text-sm font-semibold">
              <p className="hover:text-[#1e1b4b] cursor-pointer break-all">Email: info@agenticsense.co</p>
              <p>Phone: +92 (321) 3551490</p>
              <p className="text-gray-500 font-medium text-[13px]">UAE · Pakistan</p>
            </div>
          <Link href="/contact">
  <button className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-5 py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all group">
    <span className="text-xs font-black text-gray-800 uppercase tracking-widest">
      Contact Us
    </span>
    <div className="bg-[#1e1b4b] p-2 rounded-full text-white">
      <FaPhoneAlt size={10} />
    </div>
  </button>
</Link>
          </div>
        </div>

        {/* ── Social bar ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {SOCIAL_LINKS.map((social, i) => (
            <a key={i} href={social.href}
              className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group justify-between">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">{social.name}</span>
              <div className={`bg-[#1e1b4b] p-1.5 sm:p-2 rounded-full text-white transition-colors flex items-center justify-center ${social.hoverClass}`}>
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* ── Particle brand text + legal ────────────────────────────────── */}
       
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {/* ... aapka social links ka map function ... */}
        </div>

      </div> 

      {/* ── Particle brand text + legal (AB YEH FULL SCREEN HAI) ────────────────── */}
      <div className="flex flex-col items-center mt-5 mb-2 w-full overflow-hidden">
        <div className="relative w-full">

          <AgenticSenseParticleText />

          {/* ── DESKTOP ONLY: Absolute labels ── */}
          <span className="hidden lg:inline absolute bottom-[16%] left-[24%] text-[9px] xl:text-[11px] font-bold text-gray-500 uppercase   pointer-events-none z-10">
            ©2026 AgenticSense
          </span>
          <span className="hidden lg:inline absolute bottom-[16%] left-[56%] -translate-x-1/2 text-[9px] xl:text-[11px] font-bold uppercase whitespace-nowrap z-10">
            <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Terms and Conditions</a>
          </span>
          <span className="hidden lg:inline absolute bottom-[16%] right-[9%] text-[9px] xl:text-[11px] font-bold uppercase  whitespace-nowrap z-10">
            <a href="#" className="text-gray-500 hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
          </span>

          {/* Decorative asterisk */}
          <span aria-hidden="true" className="absolute top-0 right-[3%] text-[5vw] font-light leading-none text-gray-400 pointer-events-none select-none">*</span>
        </div>

        {/* ── TABLET + MOBILE (below lg) ── */}
        <div className="lg:hidden w-full flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-3 pb-1 px-4 text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-tight text-center">
          <span>©2026 AgenticSense.</span>
          <span className="text-gray-300" aria-hidden="true">·</span>
          <a href="#" className="hover:text-[#1e1b4b] transition-colors">Terms &amp; Conditions</a>
          <span className="text-gray-300" aria-hidden="true">·</span>
          <a href="#" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
        </div>
      </div>

    </footer> /* ← Main footer closing */
  );
});

export default Footer;