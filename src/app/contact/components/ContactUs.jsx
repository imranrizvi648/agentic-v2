"use client";
import React, { useState } from "react";
import { CheckCircle2, MapPin, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";

const FEATURES = [
  "Map your highest-value automation opportunity in one session",
  "See exactly what an AI agent inside your ERP could do",
  "Honest assessment of effort, impact and what is deployable today",
  "No cost, no obligation — just clear, actionable intelligence",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", agree: false });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); };

  const inputBase = (field) => ({
    width: "100%", padding: "14px 16px", fontSize: "0.88rem", fontFamily: "inherit",
    background: focused === field ? "#fafaff" : "#f8f8fc",
    border: `1.5px solid ${focused === field ? "#625eff" : "#e8e7f8"}`,
    borderRadius: 10, outline: "none", color: "#1a194d", transition: "all 0.2s",
    boxShadow: focused === field ? "0 0 0 4px rgba(98,94,255,0.08)" : "none",
  });

  return (
    <section style={{ minHeight: "100vh", background: "#ffffff", color: "#1a194d", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: -160, right: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(98,94,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: -100, left: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,25,77,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,8vw,80px) clamp(16px,4vw,32px)" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,72px)" }}>
         
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight leading-[1.1] mb-4">Let's Build Something Intelligent Together</h1>
          <p style={{ fontSize: "clamp(0.9rem,2vw,1rem)", color: "#6b7280", maxWidth: 420, margin: "0 auto", lineHeight: 1.65 }}>Have an idea, project or business challenge? Tell us about it. We'll show you exactly what an AI agent running inside your own systems could do with it.</p>
        </div>

        {/* Two-column */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px), 1fr))", gap: "clamp(24px,4vw,48px)", alignItems: "start" }}>

          {/* LEFT: Form */}
          <div style={{ background: "#fff", border: "1px solid #eeecfc", borderRadius: 20, padding: "clamp(24px,4vw,40px) clamp(20px,3vw,36px)", boxShadow: "0 4px 32px rgba(26,25,77,0.07), 0 1px 4px rgba(26,25,77,0.04)" }}>
            <h2 className="text-base font-bold text-brand-primary mb-6">Book Your Free Assessment</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[{ label: "Full Name", field: "name", type: "text", placeholder: "John Smith" },
                { label: "Email Address", field: "email", type: "email", placeholder: "you@company.com" }].map(({ label, field, type, placeholder }) => (
                <div key={field}>
                  <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>{label}</label>
                  <input type={type} placeholder={placeholder} required value={formData[field]}
                    onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                    onFocus={() => setFocused(field)} onBlur={() => setFocused("")}
                    style={inputBase(field)} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." required value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                  style={{ ...inputBase("message"), resize: "none" }} />
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: -4 }}>
                <input type="checkbox" id="agree" required checked={formData.agree} onChange={e => setFormData({ ...formData, agree: e.target.checked })} style={{ marginTop: 2, accentColor: "#625eff", width: 15, height: 15, cursor: "pointer", flexShrink: 0 }} />
                <label htmlFor="agree" style={{ fontSize: "0.78rem", color: "#9ca3af", lineHeight: 1.5, cursor: "pointer" }}>
                  I agree with the <a href="#" style={{ color: "#625eff", textDecoration: "underline" }}>Terms and Conditions</a>
                </label>
              </div>
              <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "15px 24px", borderRadius: 1, border: "none", background: submitted ? "linear-gradient(135deg,#22c55e,#16a34a)" : "linear-gradient(135deg,#1a194d,#2d2b7a)", color: "#fff", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.03em", cursor: "pointer", transition: "all 0.25s", boxShadow: submitted ? "0 8px 24px rgba(34,197,94,0.3)" : "0 8px 24px rgba(26,25,77,0.22)", fontFamily: "inherit", marginTop: 4 }}>
                {submitted ? <><CheckCircle2 size={16} />Message Sent!</> : <>Send Your Request<ArrowRight size={16} /></>}
              </button>
            </form>
            {/* <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #f0effe" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Or reach us directly</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[{ icon: <Mail size={13} />, label: "hello@agenticsense.ai", href: "mailto:hello@agenticsense.ai" },
                  { icon: <Phone size={13} />, label: "+92 300 0000000", href: "tel:+923000000000" }].map(({ icon, label, href }) => (
                  <a key={href} href={href} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: "0.75rem", color: "#4b5563", background: "#f8f8fc", border: "1px solid #eeecfc", padding: "7px 14px", borderRadius: 9999, textDecoration: "none", fontWeight: 500 }}>
                    <span style={{ color: "#625eff" }}>{icon}</span>{label}
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* RIGHT: Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div style={{ background: "linear-gradient(135deg,#1a194d 0%,#2d2b7a 100%)", borderRadius: 0, padding: "clamp(24px,4vw,36px) clamp(20px,3vw,32px)", boxShadow: "0 8px 32px rgba(26,25,77,0.18)" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(98,94,255,0.8)", marginBottom: 10 }}>Why partner with us</p>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-6">With our services you can</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {FEATURES.map((text, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, borderRadius: "50%", flexShrink: 0, background: "rgba(98,94,255,0.25)", border: "1px solid rgba(98,94,255,0.4)", marginTop: 1 }}>
                      <CheckCircle2 size={11} color="#a5b4fc" />
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.55 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[{ country: "USA", flag: "🇺🇸", address: "280 W 17th St, 4th Floor\nNew York, NY 10011" },
                { country: "Pakistan", flag: "🇵🇰", address: "Plot 8-2-601, University Rd\nKarachi, 500034" }].map(({ country, flag, address }) => (
                <div key={country} style={{ background: "#f8f8fc", border: "1px solid #eeecfc", borderRadius: 14, padding: "16px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: "1.1rem" }}>{flag}</span>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a194d" }}>{country}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                    <MapPin size={12} color="#625eff" style={{ marginTop: 2, flexShrink: 0 }} />
                    <p style={{ fontSize: "0.7rem", color: "#6b7280", lineHeight: 1.6, margin: 0, whiteSpace: "pre-line" }}>{address}</p>
                  </div>
                </div>
              ))}
            </div> */}

            <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "14px 18px" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)", flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#15803d", margin: 0 }}>Average response time: under 2 hours</p>
                <p style={{ fontSize: "0.65rem", color: "#4ade80", margin: "2px 0 0" }}>Our team is online Mon – Fri, 10am – 7pm PKT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`input::placeholder, textarea::placeholder { color: #c4c2d4; } input:focus, textarea:focus { outline: none; } button[type="submit"]:hover { transform: translateY(-1px); } a[href]:hover { opacity: 0.82; }`}</style>
    </section>
  );
}
