"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2 } from "lucide-react";

const countryCodes = [
  { code: '+92', name: 'PK', full: 'Pakistan' },
  { code: '+1', name: 'US/CA', full: 'USA/Canada' },
  { code: '+44', name: 'UK', full: 'United Kingdom' },
  { code: '+971', name: 'AE', full: 'UAE' },
  { code: '+91', name: 'IN', full: 'India' },
  { code: '+61', name: 'AU', full: 'Australia' },
  { code: '+65', name: 'SG', full: 'Singapore' },
  { code: '+966', name: 'SA', full: 'Saudi Arabia' },
  { code: '+974', name: 'QA', full: 'Qatar' },
  { code: '+49', name: 'DE', full: 'Germany' },
  { code: '+33', name: 'FR', full: 'France' },
  { code: '+31', name: 'NL', full: 'Netherlands' },
  { code: '+60', name: 'MY', full: 'Malaysia' },
  { code: '+20', name: 'EG', full: 'Egypt' },
  { code: '+27', name: 'ZA', full: 'South Africa' },
  { code: '+90', name: 'TR', full: 'Turkey' },
  { code: '+81', name: 'JP', full: 'Japan' },
  { code: '+852', name: 'HK', full: 'Hong Kong' },
  { code: '+39', name: 'IT', full: 'Italy' },
  { code: '+34', name: 'ES', full: 'Spain' },
  { code: '+41', name: 'CH', full: 'Switzerland' },
  { code: '+64', name: 'NZ', full: 'New Zealand' },
  { code: '+353', name: 'IE', full: 'Ireland' }, // Fixed the typo here from flex to full
  { code: '+46', name: 'SE', full: 'Sweden' },
  { code: '+47', name: 'NO', full: 'Norway' },
  { code: '+45', name: 'DK', full: 'Denmark' },
  { code: '+32', name: 'BE', full: 'Belgium' },
  { code: '+43', name: 'AT', full: 'Austria' },
  { code: '+55', name: 'BR', full: 'Brazil' },
  { code: '+52', name: 'MX', full: 'Mexico' },
  { code: '+86', name: 'CN', full: 'China' },
  { code: '+82', name: 'KR', full: 'South Korea' },
  { code: '+62', name: 'ID', full: 'Indonesia' },
  { code: '+63', name: 'PH', full: 'Philippines' },
  { code: '+66', name: 'TH', full: 'Thailand' },
  { code: '+84', name: 'VN', full: 'Vietnam' },
  { code: '+94', name: 'LK', full: 'Sri Lanka' },
  { code: '+880', name: 'BD', full: 'Bangladesh' },
  { code: '+977', name: 'NP', full: 'Nepal' },
  { code: '+965', name: 'KW', full: 'Kuwait' },
  { code: '+968', name: 'OM', full: 'Oman' },
  { code: '+973', name: 'BH', full: 'Bahrain' },
  { code: '+962', name: 'JO', full: 'Jordan' },
  { code: '+961', name: 'LB', full: 'Lebanon' },
].sort((a, b) => a.full.localeCompare(b.full));

function CustomCountryDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    const char = e.key.toLowerCase();
    if (char.length === 1 && isOpen) {
      const targetIndex = countryCodes.findIndex(item => item.full.toLowerCase().startsWith(char));
      if (targetIndex !== -1) {
        const element = document.getElementById(`item-${value}-${targetIndex}`);
        if (element) element.scrollIntoView({ block: 'nearest' });
      }
    }
  };

  const selectedItem = countryCodes.find(item => item.code === value) || countryCodes[0];

  return (
    <div className="relative w-[95px] h-full" ref={containerRef} onKeyDown={handleKeyDown}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full pl-3 pr-6 py-3 text-sm font-semibold text-slate-600 bg-transparent border-r border-slate-200 focus:outline-none flex items-center justify-between cursor-pointer select-none"
      >
        <span>{selectedItem.code}</span>
        <span className="absolute right-2 inset-y-0 flex items-center pointer-events-none text-slate-400">
          <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-[240px] mt-1 bg-white border border-slate-200 rounded shadow-xl z-50 max-h-48 overflow-y-auto">
          {countryCodes.map((item, index) => (
            <div
              key={index}
              id={`item-${value}-${index}`}
              onClick={() => {
                onChange(item.code);
                setIsOpen(false);
              }}
              className={`px-3 py-2 text-xs cursor-pointer flex justify-between items-center hover:bg-slate-100 transition-colors ${item.code === value ? 'bg-indigo-50 font-bold text-[#625eff]' : 'text-slate-700'}`}
            >
              <span className="truncate pr-2">{item.full}</span>
              <span className="text-slate-400 flex-shrink-0 font-medium">{item.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RFPPage() {
  const [budget, setBudget]   = useState(1000); 
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");
  const [showToast, setShowToast] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCodeContact: '+92',
    contactNumber: '',
    countryCodeWeapon: '+92',
    countryCodeWhatsapp: '+92',
    whatsappNumber: '',
    identity: '',
    companyName: '',
    projectBrief: ''
  });

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (e) => {
    const val = Number(e.target.value);
    if (val <= 10000) {
      setBudget(Math.round(val / 1000) * 1000 || 1000);
    } else if (val <= 100000) {
      setBudget(Math.round(val / 5000) * 5000);
    } else if (val <= 500000) {
      setBudget(Math.round(val / 25000) * 25000);
    } else {
      setBudget(Math.round(val / 50000) * 50000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type:        "proposal",
          name:        formData.name,
          email:       formData.email,
          phone:       `${formData.countryCodeContact} ${formData.contactNumber}`,
          whatsapp:    `${formData.countryCodeWhatsapp} ${formData.whatsappNumber}`,
          identity:    formData.identity,
          company:     formData.companyName,
          projectBrief:formData.projectBrief,
          budget:      budget,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      
      setSubmitted(true);
      setShowToast(true);

      setFormData({
        name: '',
        email: '',
        countryCodeContact: '+92',
        contactNumber: '',
        countryCodeWhatsapp: '+92',
        whatsappNumber: '',
        identity: '',
        companyName: '',
        projectBrief: ''
      });
      setBudget(1000);

      setTimeout(() => setSubmitted(false), 4000);

    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-primary py-12 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      
      {/* --- CUSTOM THEME TOAST NOTIFICATION (TOP RIGHT) --- */}
      <div 
        className={`fixed top-5 right-5 z-50 flex items-center gap-3 bg-[#1a194d] border border-[#625eff]/30 text-white px-5 py-4 rounded-[12px] shadow-[0_12px_40px_rgba(26,25,77,0.25)] transition-all duration-300 transform ${
          showToast ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#625eff]/20 border border-[#625eff]">
          <CheckCircle2 size={14} className="text-[#625eff]" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold tracking-wide">Proposal Sent!</p>
          <p className="text-xs text-gray-300">We will review your brief and reply within 24 hours.</p>
        </div>
        <button 
          onClick={() => setShowToast(false)}
          className="ml-4 p-1 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      </div>
      {/* ---------------------------------------------------- */}

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

        {/* ── LEFT: BRANDING ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 border-l-4 border-brand-secondary pl-5 sm:pl-6 md:pl-8">
          <div className="space-y-3 sm:space-y-4">
           
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-brand-primary leading-[1.1] tracking-tight">
              Transform Your Vision Into Reality.
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-500 max-w-lg">
              Ready to innovate? Tell us about your project. Whether it's a new product,
              a digital transformation, or a complex integration, AgenticSense is your
              strategic partner.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-100 max-w-md">
            <h3 className="text-base font-bold text-brand-primary flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-brand-secondary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Why Start Now?
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-500">
              {[
                'NDA available, your data and systems details stay confidential',
                'Response within 24 business hours',
                'Prioritised roadmap with measurable success metrics',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT: FORM CARD ────────────────────────────────────────────────── */}
        <div className="lg:col-span-7 bg-white rounded-none shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-brand-primary px-4 sm:px-6 py-4 flex justify-between items-center border-b-4 border-brand-secondary">
            <h2 className="text-white font-extrabold tracking-wide uppercase text-sm sm:text-base">
              Project Inquiry
            </h2>
            <span className=" text-white text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest whitespace-nowrap">
              Priority Review
            </span>
          </div>

          <form className="p-4 sm:p-6 space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </span>
                <input
                  type="text" required placeholder="Name*"
                  name="name" value={formData.name} onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-brand-secondary text-sm text-brand-primary placeholder-slate-400 transition-colors"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </span>
                <input
                  type="email" required placeholder="E-mail*"
                  name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-brand-secondary text-sm text-brand-primary placeholder-slate-400 transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Contact & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex bg-slate-50 border border-slate-200 rounded overflow-visible focus-within:border-brand-secondary transition-colors relative items-center">
                <CustomCountryDropdown 
                  value={formData.countryCodeContact}
                  onChange={(val) => setFormData(prev => ({ ...prev, countryCodeContact: val }))}
                />
                <input
                  type="tel" required placeholder="Contact Number*"
                  name="contactNumber" value={formData.contactNumber} onChange={handleInputChange}
                  className="w-full min-w-0 px-3 py-3 bg-transparent focus:outline-none text-sm text-brand-primary placeholder-slate-400"
                />
              </div>

              <div className="flex bg-slate-50 border border-slate-200 rounded overflow-visible focus-within:border-brand-secondary transition-colors relative items-center">
                <CustomCountryDropdown 
                  value={formData.countryCodeWhatsapp}
                  onChange={(val) => setFormData(prev => ({ ...prev, countryCodeWhatsapp: val }))}
                />
                <input
                  type="tel" placeholder="WhatsApp Number"
                  name="whatsappNumber" value={formData.whatsappNumber} onChange={handleInputChange}
                  className="w-full min-w-0 px-3 py-3 bg-transparent focus:outline-none text-sm text-brand-primary placeholder-slate-400"
                />
              </div>
            </div>

            {/* Row 3: Identity & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
                <select
                  name="identity" required value={formData.identity}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-8 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-brand-secondary text-slate-500 text-sm appearance-none transition-colors cursor-pointer"
                >
                  <option value="" disabled>How do you identify?*</option>
                  <option value="startup">Startup Founder / Co-Founder</option>
                  <option value="enterprise_exec">Enterprise Executive (C-Level / VP)</option>
                  <option value="product_manager">Product Manager / Director</option>
                  <option value="agency">Agency Owner / Strategic Partner</option>
                  <option value="investor">Venture Capitalist / Angel Investor</option>
                  <option value="ngo_govt">Non-Profit / Government Representative</option>
                  <option value="individual">Individual Developer / Consultant</option>
                   <option value="other">Other</option>
                </select>
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/>
                  </svg>
                </span>
                <input
                  type="text" placeholder="Company Name"
                  name="companyName" value={formData.companyName} onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-brand-secondary text-sm text-brand-primary placeholder-slate-400 transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Budget Slider */}
            <div className="space-y-2 pt-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black tracking-wider uppercase text-brand-primary flex items-center gap-1.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Project Budget
                </label>
                <span className="text-base sm:text-lg font-extrabold text-brand-primary">
                  {budget >= 1000000 ? "$1,000,000+" : `$${budget.toLocaleString()}`}
                </span>
              </div>
              <input
                type="range" 
                min="1000" 
                max="1000000" 
                value={budget} 
                onChange={handleBudgetChange}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#625eff]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>$1,000</span>
                <span>$250k</span>
                <span>$500k</span>
                <span>$750k</span>
                <span>$1M+</span>
              </div>
            </div>

            {/* Row 5: Project Brief */}
            <div className="relative">
              <span className="absolute top-3 left-3 text-slate-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10"/>
                </svg>
              </span>
              <textarea
                name="projectBrief" required
                value={formData.projectBrief} onChange={handleInputChange}
                placeholder="Your Project Brief*"
                rows="4"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-secondary text-sm text-brand-primary placeholder-slate-400 resize-none transition-colors"
              />
            </div>

            {/* Row 6: Submit */}
            {error && <p className="text-red-500 text-xs mb-2 font-medium">{error}</p>}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-primary hover:bg-[#2d2b7a] text-white font-bold text-xs uppercase tracking-widest py-4 rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
            >
              {submitted ? "Proposal Sent ✓" : loading ? "Sending…" : "Send Message"}
              {!submitted && !loading && (
                <svg className="w-3.5 h-3.5 rotate-45 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              )}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}