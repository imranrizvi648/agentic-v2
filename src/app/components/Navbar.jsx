"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import logo from "../../../public/iconeee.png"; // Importing logo from public folder

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-sm py-3"
          : "bg-white py-2 shadow-sm "
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between lg:justify-start lg:gap-16">
        
       {/* Logo Area */}
<div className="flex items-center gap-1 cursor-pointer">
  
  {/* Logo Image */}
  <Image
    src={logo}   
    alt="Logo"
    className="w-12 h-12 object-contain"
  />

  {/* Text */}
  <div className="flex flex-col leading-tight">
    <span className="text-md font-semibold text-black">
      AgenticSense
  

      
    </span>
  </div>

</div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 ">
            <NavLink text="Home" hasDropdown={false} />
          <NavLink text="About Us" hasDropdown={false} />
          <NavLink text="Services" hasDropdown={false} />
          <NavLink text="Solutions" hasDropdown={true} />
          <NavLink text="Industries" hasDropdown={false} />
          <NavLink text="Blogs" hasDropdown={false} />
           <NavLink text="Contact Us" hasDropdown={false} />
        </div>

        {/* Mobile Menu Icon (Hidden on Desktop) */}
        <div className="lg:hidden flex items-center">
          <button className="text-[#1B212D] hover:text-blue-600 transition-colors">
            <Menu size={28} />
          </button>
        </div>
        
        {/* Note: Agar right side par koi 'Contact Us' ka button add karna ho tou aap yahan ek aur div add kar sakte hain with 'ml-auto' class */}
      </div>
    </nav>
  );
}

// Reusable NavLink Component
function NavLink({ text, hasDropdown }) {
  return (
    <div className="group flex items-center gap-1 cursor-pointer text-[#334155] hover:text-blue-600 transition-colors">
      <span className="text-[15px] font-bold">{text}</span>
      {hasDropdown && (
        <ChevronDown 
          size={16} 
          strokeWidth={2} 
          className="text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" 
        />
      )}
    </div>
  );
}