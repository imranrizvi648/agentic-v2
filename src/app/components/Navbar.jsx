"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [activeTab,      setActiveTab]        = useState("Home");
  const [hoveredTab,       setHoveredTab]       = useState(null);
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isButtonHovered,  setIsButtonHovered]  = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ◄ UPDATED LOGIC: Jab tak user scroll nahi karega, text White hi rahega (taaki Hero aur About sections par visible ho)
  const useDarkText = isScrolled; 

  return (
    <nav className="fixed left-0 right-0 z-50 flex justify-center top-4 md:top-6 px-4 md:px-8">
      {/* ─────────────────────────────────────────────────────
          MAIN TRANSPARENT GLASS CAPSULE
      ───────────────────────────────────────────────────── */}
      <div
        className={`
          w-full max-w-[1240px] flex flex-col items-center justify-between
          rounded-full px-5 md:px-6 py-2.5 backdrop-blur
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled
            /* ── Scrolled State ── */
            ? "bg-white/[0.08] border border-white/[0.15] shadow-lg shadow-black/10" 
            /* ── Floating State ── */
            : "bg-white/[0.02] border border-white/[0.08]"
          }
        `}
      >
        <div className="w-full flex items-center justify-between relative">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group z-50">
            <div className="relative w-8 h-8 md:w-9 md:h-9 overflow-hidden">
              <img
                src="/iconeee.png"
                alt="Agenticsense Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className={`font-bold text-base md:text-lg tracking-wide transition-colors duration-300
              ${useDarkText ? "text-[#1a194d]" : "text-white"}`}>
              Agenticsense
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navItems.map((item) => {
              const isCurrentActive = activeTab === item.name || hoveredTab === item.name;
              
              return (
                <li
                  key={item.name}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onClick={() => setActiveTab(item.name)}
                >
                  <Link href={item.href}>
                    <div
                      className={`
                        relative flex items-center gap-1.5 px-4 py-2 
                        transition-all duration-300 rounded-full text-[13.5px] font-medium tracking-wide
                        ${isCurrentActive
                          ? useDarkText
                            ? "bg-black/[0.06] text-[#1a194d]"
                            : "bg-white/[0.08] text-white"
                          : useDarkText
                            ? "text-slate-600 hover:text-[#1a194d]"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      <span className="relative z-10">{item.name}</span>

                      {item.dropdown && (
                        <svg width="9" height="5" viewBox="0 0 10 6" fill="none"
                          className={`relative z-10 transition-transform duration-300 ${hoveredTab === item.name ? "rotate-180" : ""}`}>
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && hoveredTab === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[190px]
                          backdrop-blur-2xl border rounded-xl py-1.5 shadow-xl overflow-hidden z-50
                          ${useDarkText
                            ? "bg-white/90 border-black/[0.06]"
                            : "bg-[#0b0a14]/90 border-white/10"
                          }`}
                      >
                        {item.subItems?.map((sub) => (
                          <Link href={`${item.href}#${sub.toLowerCase().replace(" ", "-")}`} key={sub}>
                            <div className={`px-4 py-2 font-medium text-[13px] transition-colors
                              ${useDarkText
                                ? "text-slate-700 hover:bg-black/[0.04] hover:text-[#1a194d]"
                                : "text-white/80 hover:bg-white/[0.06] hover:text-white"
                              }`}>
                              {sub}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA Button ── */}
          <Link href="/contact" className="hidden lg:block">
            <button
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="relative flex items-center gap-2 px-5 py-2 rounded-full
                font-semibold text-[13.5px] transition-all duration-300 bg-[#625eff] text-white hover:bg-[#504be6] hover:scale-[1.02] shadow-sm"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Get In Touch
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </button>
          </Link>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden p-2 z-50 focus:outline-none transition-colors duration-300
              ${useDarkText ? "text-[#1a194d]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"/>
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
              transition={{ duration: 0.25 }}
              className={`w-full lg:hidden overflow-hidden mt-2.5 pt-2.5 border-t
                ${useDarkText ? "border-black/[0.06]" : "border-white/[0.08]"}`}
            >
              <ul className="flex flex-col py-1 gap-0.5">
                {navItems.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[14px] px-4 py-2 rounded-xl font-medium transition-colors
                        ${useDarkText
                          ? "text-slate-700 hover:bg-black/[0.04] hover:text-[#1a194d]"
                          : "text-white/85 hover:bg-white/[0.06] hover:text-white"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="mt-2 px-2 pb-1">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full flex justify-center items-center gap-2 bg-[#625eff] text-white py-2.5 rounded-full font-semibold text-[14px]">
                      Get In Touch
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