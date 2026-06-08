"use client";
import React, { useState } from 'react';

export default function RFPPage() {
  const [budget, setBudget] = useState(1000);
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-brand-primary py-12 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

        {/* ── LEFT: BRANDING & TRUST ──────────────────────────────────────────── */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 border-l-4 border-brand-secondary pl-5 sm:pl-6 md:pl-8">
          <div className="space-y-3 sm:space-y-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-brand-secondary rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
              Let's Collaborate
            </div>

            {/* H1 — unified system */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-brand-primary leading-[1.1] tracking-tight">
              Transform Your{' '}
              Vision
              Into Reality.
            </h1>

            {/* Lead paragraph */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-500 max-w-lg">
              Ready to innovate? Tell us about your project. Whether it's a new product,
              a digital transformation, or a complex integration, AgenticSense is your
              strategic partner.
            </p>
          </div>

          {/* Why Start Now Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-100 max-w-md">
            <h3 className="text-base font-bold text-brand-primary flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-brand-secondary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Why Start Now?
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-500">
              {[
                'Strict NDA Protection Guaranteed',
                'Response within 24 Hours',
                'Detailed Proposal & Roadmap',
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

          {/* Form Header */}
          <div className="bg-brand-primary px-4 sm:px-6 py-4 flex justify-between items-center border-b-4 border-brand-secondary">
            <h2 className="text-white font-extrabold tracking-wide uppercase text-sm sm:text-base">
              Project Inquiry
            </h2>
            <span className=" text-white text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest whitespace-nowrap">
              Priority Review
            </span>
          </div>

          {/* Form Body */}
          <form className="p-4 sm:p-6 space-y-4 sm:space-y-5">

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
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-brand-secondary text-sm text-brand-primary placeholder-slate-400 transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Contact & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex bg-slate-50 border border-slate-200 rounded overflow-hidden focus-within:border-brand-secondary transition-colors">
                <select
                  name="countryCodeContact" value={formData.countryCodeContact}
                  onChange={handleInputChange}
                  className="bg-transparent px-3 py-3 text-sm font-medium text-slate-600 border-r border-slate-200 focus:outline-none"
                >
                  <option value="+92">+92</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                </select>
                <input
                  type="tel" placeholder="Contact Number*"
                  className="w-full min-w-0 px-3 py-3 bg-transparent focus:outline-none text-sm text-brand-primary placeholder-slate-400"
                />
              </div>

              <div className="flex bg-slate-50 border border-slate-200 rounded overflow-hidden focus-within:border-brand-secondary transition-colors">
                <select
                  name="countryCodeWhatsapp" value={formData.countryCodeWhatsapp}
                  onChange={handleInputChange}
                  className="bg-transparent px-3 py-3 text-sm font-medium text-slate-600 border-r border-slate-200 focus:outline-none"
                >
                  <option value="+92">+92</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                </select>
                <input
                  type="tel" placeholder="WhatsApp Number"
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
                  className="w-full pl-10 pr-8 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-brand-secondary text-slate-500 text-sm appearance-none transition-colors"
                >
                  <option value="" disabled>How do you identify?*</option>
                  <option value="startup">Startup / Founder</option>
                  <option value="enterprise">Enterprise Executive</option>
                  <option value="agency">Agency / Partner</option>
                  <option value="individual">Individual</option>
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
                <span className="text-base sm:text-lg font-extrabold text-brand-primary">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range" min="500" max="10000" step="500"
                value={budget} onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#625eff]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>$500</span>
                <span>$10,000+</span>
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
                name="projectBrief"
                value={formData.projectBrief}
                onChange={handleInputChange}
                placeholder="Your Project Brief*"
                rows="4"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-secondary text-sm text-brand-primary placeholder-slate-400 resize-none transition-colors"
              />
            </div>

            {/* Row 6: Submit */}
            <button
              type="submit"
              className="w-full bg-brand-primary hover:bg-[#2d2b7a] text-white font-bold text-xs uppercase tracking-widest py-4 rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              Send Message
              <svg className="w-3.5 h-3.5 rotate-45 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>

            {/* Privacy note */}
          

          </form>
        </div>

      </div>
    </div>
  );
}