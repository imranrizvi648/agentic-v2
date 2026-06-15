"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

const FEATURES = [
  "Map your highest-value automation opportunity in one session",
  "See exactly what an AI agent inside your ERP could do",
  "Honest assessment of effort, impact and what is deployable today",
  "No cost, no obligation — just clear, actionable intelligence",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Toast notification state
  const [showToast, setShowToast] = useState(false);

  // Form submit hone ke baad toast ko 5 seconds baad khud hi chupane ke liye
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...formData }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      
      setSubmitted(true);
      setShowToast(true); // Top-Right Toast show karein
      setFormData({ name: "", email: "", message: "" }); // Form fields empty karein
      
      // Submit button ko 3 seconds baad wapas normal state me lane ke liye
      setTimeout(() => setSubmitted(false), 3000);

    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reusable Tailwind class context for inputs
  const inputClass = "w-full px-4 py-3.5 text-sm font-inherit bg-[#f8f8fc] border-[1.5px] border-[#e8e7f8] rounded-[10px] text-[#1a194d] placeholder-[#c4c2d4] outline-none transition-all duration-200 focus:bg-[#fafaff] focus:border-[#625eff] focus:shadow-[0_0_0_4px_rgba(98,94,255,0.08)]";

  return (
    <section className="min-h-screen bg-white text-[#1a194d] relative overflow-hidden">
      {/* Background Glow Designs */}
      <div aria-hidden className="absolute -top-40 -right-30 w-[520px] h-[520px] rounded-full bg-radial-gradient from-[rgba(98,94,255,0.08)] to-transparent pointer-events-none" />
      <div aria-hidden className="absolute -bottom-24 -left-20 w-[380px] h-[380px] rounded-full bg-radial-gradient from-[rgba(26,25,77,0.05)] to-transparent pointer-events-none" />

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
          <p className="text-sm font-bold tracking-wide">Thank You!</p>
          <p className="text-xs text-gray-300">Your message has been sent successfully.</p>
        </div>
        <button 
          onClick={() => setShowToast(false)}
          className="ml-4 p-1 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      </div>
      {/* ---------------------------------------------------- */}

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-18">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight leading-[1.1] mb-4">
            Let's Build Something Intelligent Together
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-[420px] mx-auto leading-relaxed">
            Have an idea, project or business challenge? Tell us about it. We'll show you exactly what an AI agent running inside your own systems could do with it.
          </p>
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
          
          {/* LEFT: Form */}
          <div className="bg-white border border-[#eeecfc] rounded p-6 sm:p-10 shadow-[0_4px_32px_rgba(26,25,77,0.07),0_1px_4px_rgba(26,25,77,0.04)]">
            <h2 className="text-base font-bold text-brand-primary mb-6">
              Book Your Free Assessment
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
              {[
                { label: "Full Name", field: "name", type: "text", placeholder: "John Smith" },
                { label: "Email Address", field: "email", type: "email", placeholder: "you@company.com" }
              ].map(({ label, field, type, placeholder }) => (
                <div key={field}>
                  <label className="block text-[0.68rem] font-bold tracking-[0.14em] uppercase text-gray-400 mb-2">
                    {label}
                  </label>
                  <input 
                    type={type} 
                    placeholder={placeholder} 
                    required 
                    value={formData[field]}
                    onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                    className={inputClass} 
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-[0.68rem] font-bold tracking-[0.14em] uppercase text-gray-400 mb-2">
                  Message
                </label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  required 
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`} 
                />
              </div>
              
              {error && <p className="text-[0.78rem] text-red-500 mb-1">{error}</p>}
              
              <button 
                type="submit" 
                disabled={loading}
                className={`flex items-center justify-center gap-2 w-full p-3.5 rounded-[10px] border-none text-white font-bold text-sm tracking-[0.03em] cursor-pointer transition-all duration-250 mt-1 hover:-translate-y-[1px] ${
                  submitted 
                    ? "bg-gradient-to-br from-[#1a194d] to-[#2d2b7a] shadow-[0_8px_24px_rgba(34,197,94,0.3)]" 
                    : "bg-gradient-to-br from-[#1a194d] to-[#2d2b7a] shadow-[0_8px_24px_rgba(26,25,77,0.22)]"
                }`}
              >
                {submitted ? (
                  <><CheckCircle2 size={16} />Message Sent!</>
                ) : loading ? (
                  <>Sending…</>
                ) : (
                  <>Send Your Request<ArrowRight size={16} /></>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: Info */}
          <div className="flex flex-col gap-8">
            {/* Assessment Perks */}
            <div className="bg-gradient-to-br from-[#1a194d] to-[#2d2b7a] rounded p-6 sm:p-9 shadow-[0_8px_32px_rgba(26,25,77,0.18)]">
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#625eff]/80 mb-2.5">
                Why partner with us
              </p>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-6">
                With our services you can
              </h3>
              <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
                {FEATURES.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 bg-[#625eff]/25 border border-[#625eff]/40 mt-0.5">
                      <CheckCircle2 size={11} className="text-indigo-300" />
                    </span>
                    <span className="text-[0.85rem] text-white/70 leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SLA Response Badge */}
            <div className="flex items-center gap-3.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-14 p-3.5 sm:p-4.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)] shrink-0" />
              <div>
                <p className="text-[0.75rem] font-bold text-green-700 m-0">
                  Average response time: under 2 hours
                </p>
                <p className="text-[0.65rem] text-green-400 mt-0.5 m-0">
                  Our team is online Mon – Fri, 10am – 7pm PKT
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}