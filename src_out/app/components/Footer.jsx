import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  const quickLinks = [
    { name: "ABOUT", href: "#" }, { name: "WHO WE ARE", href: "#" },
    { name: "SERVICES", href: "#" }, { name: "PROJECTS", href: "#" },
    { name: "BLOG", href: "#" }, { name: "PRICING", href: "#" },
  ];

  const socialLinks = [
    { name: "Twitter / X", icon: <FaXTwitter size={12} />, href: "#", hoverClass: "group-hover:bg-[#000000]" },
    { name: "Facebook", icon: <FaFacebookF size={12} />, href: "#", hoverClass: "group-hover:bg-[#1877F2]" },
    { name: "Instagram", icon: <FaInstagram size={12} />, href: "#", hoverClass: "group-hover:bg-[#E4405F]" },
    { name: "Linkedin", icon: <FaLinkedinIn size={12} />, href: "#", hoverClass: "group-hover:bg-[#0A66C2]" },
    { name: "YouTube", icon: <FaYoutube size={12} />, href: "#", hoverClass: "group-hover:bg-[#FF0000]" },
  ];

  return (
    <footer className="bg-[#f3f3f3] pt-12 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-6 md:px-10 font-sans border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-10">
          {/* Quick Links */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff4d00] rounded-full"></span>
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {quickLinks.map((link, i) => (
                <a key={i} href={link.href} className="flex items-center justify-between bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group">
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-700 tracking-wider truncate">{link.name}</span>
                  <div className="flex-shrink-0 bg-[#1e1b4b] p-1 sm:p-1.5 rounded-full text-white">
                    <HiOutlineArrowUpRight size={10} strokeWidth={2} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Center brand */}
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black uppercase">QUINN LINK</h1>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-xs">
              Crafting digital experiences with clarity and purpose. Designing visuals that reflect identity and innovation.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-5 sm:space-y-7 sm:col-span-2 md:col-span-1 md:pl-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1e1b4b] rounded-full"></span>
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">Contact</h3>
            </div>
            <div className="space-y-2 text-gray-700 text-sm font-semibold">
              <p className="hover:text-[#1e1b4b] cursor-pointer break-all">Email: agntics@studio.com</p>
              <p>Phone: +(92) 555-0107</p>
              <p className="text-gray-500 font-medium text-[13px]">4517 Washington Ave. Kentucky 39495</p>
            </div>
            <button className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-5 py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all group">
              <span className="text-xs font-black text-gray-800 uppercase tracking-widest">Contact Us</span>
              <div className="bg-[#1e1b4b] p-2 rounded-full text-white"><FaPhoneAlt size={10} /></div>
            </button>
          </div>
        </div>

        {/* Social Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.href} className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-all group justify-between">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">{social.name}</span>
              <div className={`bg-[#1e1b4b] p-1.5 sm:p-2 rounded-full text-white transition-colors flex items-center justify-center ${social.hoverClass}`}>{social.icon}</div>
            </a>
          ))}
        </div>

        {/* Big brand text — responsive */}
        <div className="flex flex-col items-center mt-5 mb-6 w-full overflow-hidden">
          <div className="relative select-none text-center w-full">
            <h2 className="text-[13vw] font-black tracking-[-0.06em] text-gray-950 leading-none inline-block relative">

              <span className="relative tracking-normal">
                Ag
                <span className="hidden sm:inline absolute bottom-0 left-full -translate-y-4 text-[9px] md:text-[11px] font-bold text-gray-900 uppercase tracking-tighter whitespace-nowrap">
                  ©2025 AgenticSense Design Studio.
                </span>
              </span>

              <span className="relative tracking-normal">
                enticSen
                <span className="hidden sm:inline absolute bottom-0 left-[50%] -translate-x-1/2 -translate-y-4 text-[9px] md:text-[11px] font-bold text-gray-900 uppercase tracking-tighter whitespace-nowrap">
                  <a href="#" className="hover:text-[#1e1b4b] transition-colors">Terms and Conditions</a>
                </span>
              </span>

              <span className="relative tracking-normal">
                se
                <span className="absolute -top-[15%] -right-[35%] text-[5vw] font-light leading-none">*</span>
                <span className="hidden sm:inline absolute bottom-0 right-14 md:right-20 -translate-y-4 text-[9px] md:text-[11px] font-bold text-gray-900 uppercase tracking-tighter whitespace-nowrap">
                  <a href="#" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
                </span>
              </span>
            </h2>
          </div>

          {/* Mobile-only legal links */}
          <div className="sm:hidden flex flex-wrap justify-center gap-4 mt-3 text-[10px] font-bold text-gray-700 uppercase tracking-tight">
            <span>©2025 AgenticSense.</span>
            <a href="#" className="hover:text-[#1e1b4b] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1e1b4b] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
