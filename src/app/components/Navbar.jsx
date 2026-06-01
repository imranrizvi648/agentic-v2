"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home",       href: "/",          dropdown: false, subItems: ["Home 1", "Home 2"] },
  { name: "Services",   href: "/services",  dropdown: false, subItems: ["Services", "Single Service"] },
  { name: "Solutions",  href: "/solutions", dropdown: false, subItems: ["Solutions", "Single Solution"] },
  { name: "Industries", href: "/industries",dropdown: false, subItems: ["About Us", "Team"] },
  { name: "Blog",       href: "/blog",      dropdown: false, subItems: ["Pricing", "FAQ", "404 Error"] },
  { name: "About",      href: "/about",     dropdown: false, subItems: ["Careers", "Single Career"] },
  { name: "Contact Us", href: "/contact",   dropdown: false },
];

export default function Navbar() {
  const [activeTab,        setActiveTab]        = useState("Home");
  const [hoveredTab,       setHoveredTab]       = useState(null);
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isButtonHovered,  setIsButtonHovered]  = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText =
      "position:absolute;top:80px;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => { observer.disconnect(); sentinel.remove(); };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex justify-center
        transition-[padding,top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isScrolled ? "top-0 px-0" : "top-4 md:top-6 px-4 md:px-8"}`}
    >
      {/* ─────────────────────────────────────────────────────
          MAIN CONTAINER
          Floating (dark hero) → full glassmorphism panel
          Scrolled (white page) → frosted white glass bar
      ───────────────────────────────────────────────────── */}
      <div
        className={`
          w-full flex flex-col items-center justify-between
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled
            /* ── Scrolled: frosted white glass ── */
            ? `max-w-[100%] px-6 md:px-10 py-3
               rounded-none
               bg-white/70 backdrop-blur-2xl
               border-b border-black/[0.03]
               shadow-[0_4px_24px_rgba(26,25,77,0.07),inset_0_-1px_0_rgba(0,0,0,0.04)]`
            /* ── Floating: dark glass panel ── */
            : `max-w-[1240px] px-5 md:px-8 py-2.5
               rounded-none
               bg-white/[0.02] backdrop-blur-xl
               border border-white/[0.14]
            `
          }
        `}
      >
        {/* Top shine streak — only when floating */}
        {!isScrolled && (
          <div className="absolute top-0 left-6 right-6 h-[1px]
                          bg-gradient-to-r from-transparent via-white/40 to-transparent
                          rounded-full pointer-events-none" />
        )}

        <div className="w-full flex items-center justify-between relative">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group z-50">
            <div className="relative w-9 h-9 md:w-10 md:h-10 overflow-hidden">
              <img
                src="/iconeee.png"
                alt="Agenticsense Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className={`font-bold text-lg md:text-xl tracking-wide transition-colors duration-300
              ${isScrolled ? "text-[#1a194d]" : "text-white"}`}>
              Agenticsense
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredTab(item.name)}
                onClick={() => setActiveTab(item.name)}
              >
                <Link href={item.href}>
                  <div
                    className={`
                      relative flex items-center gap-1.5 px-4 py-2.5 
                      transition-all duration-300
                      ${activeTab === item.name || hoveredTab === item.name
                        ? isScrolled
                          /* scrolled active/hover bg */
                          ? "bg-[#1a194d]/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_0_0_1px_rgba(26,25,77,0.08)]"
                          /* floating active/hover bg — mini glass pill */
                          : "bg-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : ""
                      }
                      ${isScrolled ? "text-slate-700 hover:text-[#1a194d]" : "text-white/80 hover:text-white"}
                    `}
                  >
                    {/* Active: corner accent marks */}
                    {activeTab === item.name && (
                      <>
                        <div className={`absolute top-1.5 left-1.5 w-2 h-2
                          border-t-[1.5px] border-l-[1.5px] rounded-tl-[2px]
                          ${isScrolled ? "border-[#1a194d]" : "border-white"}`} />
                        <div className={`absolute bottom-1.5 right-1.5 w-2 h-2
                          border-b-[1.5px] border-r-[1.5px] rounded-br-[2px]
                          ${isScrolled ? "border-[#1a194d]" : "border-white"}`} />
                      </>
                    )}

                    {/* Hover: animated border draw */}
                    {hoveredTab === item.name && activeTab !== item.name && (
                      <div className="absolute inset-1 pointer-events-none">
                        <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }}
                          className={`absolute top-0 left-0 h-[1px] ${isScrolled ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }}
                          className={`absolute top-0 left-0 w-[1px] ${isScrolled ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }}
                          className={`absolute bottom-0 right-0 h-[1px] ${isScrolled ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                        <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }}
                          className={`absolute bottom-0 right-0 w-[1px] ${isScrolled ? "bg-[#1a194d]/40" : "bg-white/70"}`} />
                      </div>
                    )}

                    <span className="relative z-10 text-[14px] font-medium">{item.name}</span>

                    {item.dropdown && (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                        className={`relative z-10 transition-transform duration-300 ${hoveredTab === item.name ? "rotate-180" : ""}`}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && hoveredTab === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 min-w-[200px]
                        backdrop-blur-2xl border rounded-xl py-2 shadow-2xl overflow-hidden z-50
                        ${isScrolled
                          ? "bg-white/80 border-[#1a194d]/10 shadow-[0_8px_32px_rgba(26,25,77,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]"
                          : "bg-[#1a1625]/70 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]"
                        }`}
                    >
                      {/* Dropdown top shine */}
                      <div className="absolute top-0 left-4 right-4 h-[1px]
                        bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                      {item.subItems?.map((sub) => (
                        <Link href={`${item.href}#${sub.toLowerCase().replace(" ", "-")}`} key={sub}>
                          <div className={`px-5 py-2.5 font-medium text-[14px] transition-colors
                            ${isScrolled
                              ? "text-slate-700 hover:bg-[#1a194d]/[0.05] hover:text-[#1a194d]"
                              : "text-white/80 hover:bg-white/[0.08] hover:text-white"
                            }`}>
                            {sub}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA Button ── */}
          <Link href="/contact" className="hidden lg:block">
            <button
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg
                font-semibold text-[14px] transition-all duration-300 overflow-hidden
                ${isButtonHovered
                  ? isScrolled
                    ? "bg-[#1a194d]/[0.08] text-[#1a194d] shadow-[inset_0_0_0_1px_rgba(26,25,77,0.15)]"
                    : "bg-white/[0.12] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                  : "bg-[#625eff] text-white "
                }`}
            >
              {/* Resting: corner marks */}
              {!isButtonHovered && (
                <>
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-white/60 rounded-tl-[2px]" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-white/60 rounded-br-[2px]" />
                  {/* Shine streak on button */}
                  <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                </>
              )}

              {/* Hover: animated border draw */}
              {isButtonHovered && (
                <div className="absolute inset-1 pointer-events-none">
                  <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }}
                    className={`absolute top-0 left-0 h-[1px] ${isScrolled ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                  <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }}
                    className={`absolute top-0 left-0 w-[1px] ${isScrolled ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                  <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.28 }}
                    className={`absolute bottom-0 right-0 h-[1px] ${isScrolled ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                  <motion.span initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.28 }}
                    className={`absolute bottom-0 right-0 w-[1px] ${isScrolled ? "bg-[#1a194d]/50" : "bg-white/70"}`} />
                </div>
              )}

              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </button>
          </Link>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden p-2 z-50 focus:outline-none transition-colors duration-300
              ${isScrolled ? "text-[#1a194d]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* ── Mobile Dropdown ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full lg:hidden overflow-hidden mt-3 pt-3 border-t
                ${isScrolled ? "border-black/[0.06]" : "border-white/[0.10]"}`}
            >
              <ul className="flex flex-col py-2 gap-1">
                {navItems.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-lg font-medium text-[15px] transition-colors
                        ${isScrolled
                          ? "text-slate-700 hover:bg-[#1a194d]/[0.06] hover:text-[#1a194d]"
                          : "text-white/85 hover:bg-white/[0.08] hover:text-white"
                        }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="flex flex-col pl-8 pr-4">
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub}
                            href={`${item.href}#${sub.toLowerCase().replace(" ", "-")}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`py-1.5 text-[14px] transition-colors
                              ${isScrolled ? "text-slate-500 hover:text-[#1a194d]" : "text-white/55 hover:text-white"}`}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}

                {/* Mobile CTA */}
                <li className="mt-3 px-4 pb-2">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="relative w-full flex justify-center items-center gap-2
                      bg-[#625eff] text-white px-7 py-3 rounded-xl
                      font-semibold text-[15px] overflow-hidden
                      shadow-[0_4px_20px_rgba(98,94,255,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]">
                      {/* Shine */}
                      <div className="absolute top-0 left-6 right-6 h-[1px]
                        bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                      Get In Touch
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}