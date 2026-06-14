"use client";
import React, { useState } from "react";
import {
  User, Mail, Phone, MessageSquare, MapPin, Linkedin,
  Link2, Briefcase, FileText, ChevronRight, CheckCircle2,
  ChevronLeft, Building2, Code2, Star, Upload
} from "lucide-react";

// ── Steps definition ──────────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Identity & Contact" },
  { id: 2, label: "Role & Experience" },
  { id: 3, label: "Skills & Motivation" },
  { id: 4, label: "Submit" },
];

const ROLES = [
  "Senior AI / Full-Stack Engineer",
  "AI Research Engineer",
  "Backend Engineer (Python / FastAPI)",
  "Frontend Engineer (React / Next.js)",
  "SAP / ERP Integration Engineer",
  "Project Manager",
  "UX / UI Designer",
  "Business Development",
  "Other",
];

const SKILLS = [
  "Python", "FastAPI", "Django", "Node.js", "React", "Next.js",
  "LangChain / LangGraph", "SAP Business One", "Oracle Fusion",
  "PostgreSQL", "Redis", "Docker", "AWS / Azure",
  "Figma / UI Design", "Project Management",
];

// ── Reusable input style ──────────────────────────────────────────────────────
const fieldBase = {
  width: "100%", padding: "13px 14px 13px 42px",
  fontSize: "0.875rem", fontFamily: "inherit",
  background: "#f8f8fc", border: "1.5px solid #e8e7f8",
  borderRadius: 10, outline: "none", color: "#1a194d", transition: "all 0.2s",
};
const fieldFocus = { background: "#fafaff", border: "1.5px solid #625eff", boxShadow: "0 0 0 4px rgba(98,94,255,0.08)" };

function Field({ icon: Icon, label, required, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af" }}>
          {label}{required && <span style={{ color: "#625eff", marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: "relative" }}>
        {Icon && (
          <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", display: "flex", alignItems: "center", pointerEvents: "none" }}>
            <Icon size={15}/>
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

function TextInput({ icon, label, required, type = "text", placeholder, value, onChange, color }) {
  const [focused, setFocused] = useState(false);
  return (
    <Field icon={icon} label={label} required={required}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ ...fieldBase, ...(focused ? fieldFocus : {}), ...(color ? { borderColor: color } : {}) }}
      />
    </Field>
  );
}

// ── Step components ───────────────────────────────────────────────────────────
function Step1({ data, set }) {
  const [cvName, setCvName] = useState("");
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <TextInput icon={User}    label="Full Name"           required placeholder="John Smith"             value={data.name}      onChange={e => set("name", e.target.value)} />
      <TextInput icon={Mail}    label="Email Address"       required type="email" placeholder="you@company.com"    value={data.email}     onChange={e => set("email", e.target.value)} />
      <TextInput icon={Phone}   label="Phone Number"        required placeholder="+1 555 000 0000"        value={data.phone}     onChange={e => set("phone", e.target.value)} />
      <TextInput icon={Phone}   label="WhatsApp Number"              placeholder="+1 555 000 0000"        value={data.whatsapp}  onChange={e => set("whatsapp", e.target.value)} color="#25d366" />
      <TextInput icon={MapPin}  label="Current Address"     required placeholder="City, Country"          value={data.address}   onChange={e => set("address", e.target.value)} />
      <TextInput icon={Linkedin}label="LinkedIn Profile URL"         placeholder="linkedin.com/in/you"    value={data.linkedin}  onChange={e => set("linkedin", e.target.value)} />

      {/* Portfolio — full width */}
      <div style={{ gridColumn: "1 / -1" }}>
        <TextInput icon={Link2} label="Portfolio / GitHub Link" placeholder="github.com/yourname or portfolio URL" value={data.portfolio} onChange={e => set("portfolio", e.target.value)} />
      </div>

      {/* CV Upload — full width */}
      <div style={{ gridColumn: "1 / -1" }}>
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 6, display: "block" }}>
          CV / Resume (PDF, Word, Image)<span style={{ color: "#625eff", marginLeft: 3 }}>*</span>
        </label>
        <div style={{ border: "1.5px solid #e8e7f8", borderRadius: 10, padding: "16px 20px", background: "#f8f8fc", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <FileText size={15} color="#9ca3af"/>
            <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
              {cvName || "No file chosen"}
            </span>
          </div>
          <label style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: "#1a194d", color: "#fff", fontWeight: 700, fontSize: "0.78rem", padding: "8px 16px", borderRadius: 6, cursor: "pointer", flexShrink: 0 }}>
            <Upload size={13}/> Choose File
            <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" required
              style={{ display: "none" }}
              onChange={e => { setCvName(e.target.files[0]?.name || ""); set("cv", e.target.files[0]); }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function Step2({ data, set }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Role selector */}
      <div>
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, display: "block" }}>
          Role You're Applying For <span style={{ color: "#625eff" }}>*</span>
        </label>
        <div style={{ position: "relative" }}>
          <Briefcase size={15} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", pointerEvents: "none" }}/>
          <select required value={data.role} onChange={e => set("role", e.target.value)}
            style={{ ...fieldBase, appearance: "none", cursor: "pointer" }}>
            <option value="">Select a role…</option>
            {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      {/* Years experience */}
      <div>
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, display: "block" }}>
          Years of Experience <span style={{ color: "#625eff" }}>*</span>
        </label>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["0–1 yr", "1–3 yrs", "3–5 yrs", "5–8 yrs", "8+ yrs"].map(opt => (
            <button key={opt} type="button"
              onClick={() => set("experience", opt)}
              style={{ padding: "8px 18px", borderRadius: 8, border: `1.5px solid ${data.experience === opt ? "#625eff" : "#e8e7f8"}`, background: data.experience === opt ? "rgba(98,94,255,0.08)" : "#f8f8fc", color: data.experience === opt ? "#625eff" : "#6b7280", fontWeight: 700, fontSize: "0.78rem", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit" }}>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Current company */}
      <TextInput icon={Building2} label="Current / Last Company" placeholder="Company name (or 'Freelance')" value={data.company} onChange={e => set("company", e.target.value)} />

      {/* Notice period */}
      <div>
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, display: "block" }}>
          Notice Period / Availability <span style={{ color: "#625eff" }}>*</span>
        </label>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Immediate", "2 weeks", "1 month", "2 months", "3+ months"].map(opt => (
            <button key={opt} type="button"
              onClick={() => set("notice", opt)}
              style={{ padding: "8px 18px", borderRadius: 8, border: `1.5px solid ${data.notice === opt ? "#625eff" : "#e8e7f8"}`, background: data.notice === opt ? "rgba(98,94,255,0.08)" : "#f8f8fc", color: data.notice === opt ? "#625eff" : "#6b7280", fontWeight: 700, fontSize: "0.78rem", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit" }}>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Expected salary */}
      <TextInput icon={Star} label="Expected Salary / Rate (optional)" placeholder="e.g. $5,000/mo or $80k/yr" value={data.salary} onChange={e => set("salary", e.target.value)} />
    </div>
  );
}

function Step3({ data, set }) {
  const toggleSkill = (skill) => {
    const arr = data.skills.includes(skill) ? data.skills.filter(s => s !== skill) : [...data.skills, skill];
    set("skills", arr);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Skills chips */}
      <div>
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 10, display: "block" }}>
          Key Skills (select all that apply)
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SKILLS.map(skill => {
            const active = data.skills.includes(skill);
            return (
              <button key={skill} type="button" onClick={() => toggleSkill(skill)}
                style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${active ? "#625eff" : "#e8e7f8"}`, background: active ? "rgba(98,94,255,0.1)" : "#f8f8fc", color: active ? "#625eff" : "#6b7280", fontWeight: 700, fontSize: "0.72rem", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit" }}>
                {active && <span style={{ marginRight: 4 }}>✓</span>}{skill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Why AgenticSense */}
      <div>
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, display: "block" }}>
          Why AgenticSense? <span style={{ color: "#625eff" }}>*</span>
        </label>
        <div style={{ position: "relative" }}>
          <MessageSquare size={15} style={{ position: "absolute", left: 13, top: 14, color: "#9ca3af", pointerEvents: "none" }}/>
          <textarea rows={4} required placeholder="Tell us what excites you about building production AI agents for enterprise ERP…"
            value={data.motivation} onChange={e => set("motivation", e.target.value)}
            style={{ ...fieldBase, paddingTop: 13, resize: "none" }}/>
        </div>
      </div>

      {/* What they've built */}
      <div>
        <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, display: "block" }}>
          Most Relevant Project or Achievement
        </label>
        <div style={{ position: "relative" }}>
          <Code2 size={15} style={{ position: "absolute", left: 13, top: 14, color: "#9ca3af", pointerEvents: "none" }}/>
          <textarea rows={3} placeholder="Describe the most relevant thing you've built or delivered…"
            value={data.project} onChange={e => set("project", e.target.value)}
            style={{ ...fieldBase, paddingTop: 13, resize: "none" }}/>
        </div>
      </div>

      {/* How did you hear */}
      <TextInput icon={Star} label="How Did You Hear About Us?" placeholder="LinkedIn, referral, Google…" value={data.source} onChange={e => set("source", e.target.value)} />
    </div>
  );
}

function Step4({ data }) {
  const fields = [
    ["Name", data.name], ["Email", data.email], ["Phone", data.phone],
    ["Role", data.role], ["Experience", data.experience], ["Availability", data.notice],
    ["Company", data.company], ["Skills", (data.skills || []).join(", ")],
  ].filter(([,v]) => v);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ background: "rgba(98,94,255,0.05)", border: "1.5px solid rgba(98,94,255,0.15)", borderRadius: 12, padding: "20px 24px" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#625eff", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>Review Your Application</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
          {fields.map(([k, v]) => (
            <div key={k}>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.12em" }}>{k}</span>
              <p style={{ fontSize: "0.82rem", color: "#1a194d", fontWeight: 600, marginTop: 2, wordBreak: "break-word" }}>{v || "—"}</p>
            </div>
          ))}
        </div>
        {data.motivation && (
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(98,94,255,0.12)" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.12em" }}>Motivation</span>
            <p style={{ fontSize: "0.82rem", color: "#1a194d", marginTop: 4, lineHeight: 1.55 }}>{data.motivation}</p>
          </div>
        )}
      </div>
      <p style={{ fontSize: "0.78rem", color: "#9ca3af", lineHeight: 1.5 }}>
        By submitting, I confirm all information is accurate and I agree to AgenticSense's{" "}
        <a href="/privacy" style={{ color: "#625eff", textDecoration: "underline" }}>Privacy Policy</a> and{" "}
        <a href="/terms" style={{ color: "#625eff", textDecoration: "underline" }}>Terms</a>.
      </p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function CareersForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", whatsapp: "", address: "",
    linkedin: "", portfolio: "", cv: null,
    role: "", experience: "", company: "", notice: "", salary: "",
    skills: [], motivation: "", project: "", source: "",
  });

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) { setStep(s => s + 1); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 440 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#625eff,#a095ff)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <CheckCircle2 size={36} color="#fff"/>
          </div>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1a194d", marginBottom: 12 }}>Application Received!</h2>
          <p style={{ color: "#6b7280", lineHeight: 1.65, fontSize: "0.95rem" }}>
            Thanks for applying, <strong>{form.name}</strong>. We review every application carefully. If your profile is a match, we'll be in touch within 5–7 business days.
          </p>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, background: "#1a194d", color: "#fff", fontWeight: 700, padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontSize: "0.85rem" }}>
            Back to Home <ChevronRight size={14}/>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "#ffffff", color: "#1a194d", position: "relative", overflow: "hidden" }}>
      {/* Bg glows */}
      <div aria-hidden style={{ position: "absolute", top: -160, right: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(98,94,255,0.07) 0%,transparent 70%)", pointerEvents: "none" }}/>
      <div aria-hidden style={{ position: "absolute", bottom: -100, left: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,rgba(26,25,77,0.04) 0%,transparent 70%)", pointerEvents: "none" }}/>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,8vw,80px) clamp(16px,4vw,32px)" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(98,94,255,0.08)", border: "1px solid rgba(98,94,255,0.18)", borderRadius: 9999, padding: "5px 14px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#625eff", marginBottom: 20 }}>
            Join the Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight leading-[1.1] mb-4">Apply to AgenticSense</h2>
          <p style={{ fontSize: "clamp(0.9rem,2vw,1rem)", color: "#6b7280", maxWidth: 440, margin: "0 auto", lineHeight: 1.65 }}>
            Fill in the form below. We read every application personally and respond to every shortlisted candidate.
          </p>
        </div>

        {/* Two-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(24px,4vw,48px)", alignItems: "start" }}>

          {/* LEFT: Form card */}
          <div style={{ background: "#fff", border: "1px solid #eeecfc", borderRadius: 20, padding: "clamp(24px,4vw,40px) clamp(20px,3vw,36px)", boxShadow: "0 4px 32px rgba(26,25,77,0.07),0 1px 4px rgba(26,25,77,0.04)" }}>

            {/* Progress bar */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                {STEPS.map(s => (
                  <div key={s.id} style={{ flex: 1, height: 4, borderRadius: 9999, background: s.id <= step ? "linear-gradient(90deg,#1a194d,#625eff)" : "#e8e7f8", transition: "background 0.3s" }}/>
                ))}
              </div>
              <p style={{ fontSize: "0.7rem", fontWeight: 800, color: "#625eff", textTransform: "uppercase", letterSpacing: "0.16em" }}>
                — Step {step}: {STEPS[step - 1].label}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && <Step1 data={form} set={set}/>}
              {step === 2 && <Step2 data={form} set={set}/>}
              {step === 3 && <Step3 data={form} set={set}/>}
              {step === 4 && <Step4 data={form}/>}

              {/* Navigation */}
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                {step > 1 && (
                  <button type="button" onClick={() => setStep(s => s - 1)}
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "13px 20px", borderRadius: 8, border: "1.5px solid #e8e7f8", background: "#f8f8fc", color: "#6b7280", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", fontFamily: "inherit" }}>
                    <ChevronLeft size={15}/> Back
                  </button>
                )}
                <button type="submit"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 24px", borderRadius: 8, border: "none", background: step === 4 ? "linear-gradient(135deg,#22c55e,#16a34a)" : "linear-gradient(135deg,#1a194d,#2d2b7a)", color: "#fff", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", boxShadow: step === 4 ? "0 8px 24px rgba(34,197,94,0.25)" : "0 8px 24px rgba(26,25,77,0.22)", fontFamily: "inherit", transition: "all 0.25s" }}>
                  {step === 4 ? <><CheckCircle2 size={16}/> Submit Application</> : <>Next: {STEPS[step].label} <ChevronRight size={15}/></>}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Why join */}
            <div style={{ background: "#fff", border: "1px solid #eeecfc", borderRadius: 16, padding: "28px 28px", boxShadow: "0 2px 16px rgba(26,25,77,0.05)" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#625eff", marginBottom: 16 }}>Why Join Us</p>
              {[
                { icon: "🚀", title: "Real production work", body: "Build AI agents that run inside SAP, Oracle and enterprise ERP — not demos, not prototypes." },
                { icon: "🌍", title: "Global & distributed", body: "Work with clients across the GCC, South Asia and Europe from wherever you're most productive." },
                { icon: "🧠", title: "Deep technical problems", body: "Agentic pipelines, ERP integrations, multi-tenant SaaS — problems that actually require engineering skill." },
                { icon: "📈", title: "Growing fast", body: "Early team member advantage — direct impact on architecture, culture and direction." },
              ].map(({ icon, title, body }) => (
                <div key={title} style={{ display: "flex", gap: 14, paddingBottom: 14, marginBottom: 14, borderBottom: "1px solid #f5f4ff" }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1a194d", marginBottom: 3 }}>{title}</p>
                    <p style={{ fontSize: "0.78rem", color: "#6b7280", lineHeight: 1.55 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact fallback */}
            <div style={{ background: "#1a194d", borderRadius: 16, padding: "24px 28px", color: "#fff" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#a095ff", marginBottom: 10 }}>Prefer to Email Directly?</p>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 16 }}>
                Send your CV and a short note about what you're looking for.
              </p>
              <a href="mailto:careers@agenticsense.ai"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 700, fontSize: "0.82rem", padding: "10px 18px", borderRadius: 8, textDecoration: "none" }}>
                careers@agenticsense.ai →
              </a>
            </div>

            {/* Open roles quick list */}
            <div style={{ background: "#fff", border: "1px solid #eeecfc", borderRadius: 16, padding: "24px 28px", boxShadow: "0 2px 16px rgba(26,25,77,0.04)" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#625eff", marginBottom: 14 }}>Current Openings</p>
              {["Senior AI Engineer", "Backend Engineer (Python)", "SAP Integration Engineer", "Frontend Engineer (React)"].map(role => (
                <div key={role} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f5f4ff" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1a194d" }}>{role}</span>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, background: "rgba(98,94,255,0.08)", color: "#625eff", padding: "3px 10px", borderRadius: 9999, border: "1px solid rgba(98,94,255,0.15)" }}>Hiring</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
