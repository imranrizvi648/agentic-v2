"use client";
import React, { useState } from "react";
import {
  User, Mail, Phone, MessageSquare, MapPin,
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

function Field({ icon: Icon, label, required, children }) {
  return (
    <div className="flex flex-col gap-[6px]">
      {label && (
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af]">
          {label}{required && <span className="text-[#625eff] ml-[3px]">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute left-[13px] top-1/2 -translate-y-1/2 text-[#9ca3af] flex items-center pointer-events-none">
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

  const getInputClass = () => {
    let baseClass = "w-full py-[13px] pr-[14px] pl-[42px] text-[0.875rem] font-inherit bg-[#f8f8fc] border-solid border-[1.5px] border-[#e8e7f8] rounded-[10px] outline-none text-[#1a194d] transition-all duration-200";
    
    if (focused) {
      baseClass += " border-[#625eff] bg-[#fafaff] shadow-[0_0_0_4px_rgba(98,94,255,0.08)]";
    } else if (color) {
      if (color === "#25d366") baseClass += " border-[#25d366]";
    }
    return baseClass;
  };

  return (
    <Field icon={icon} label={label} required={required}>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        required={required}
        onFocus={() => setFocused(true)} 
        onBlur={() => setFocused(false)}
        className={getInputClass()}
      />
    </Field>
  );
}

// ── Step components ───────────────────────────────────────────────────────────
function Step1({ data, set }) {
  const [cvName, setCvName] = useState("");
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextInput icon={User}    label="Full Name"           required placeholder="John Smith"             value={data.name}      onChange={e => set("name", e.target.value)} />
      <TextInput icon={Mail}    label="Email Address"       required type="email" placeholder="you@company.com"    value={data.email}     onChange={e => set("email", e.target.value)} />
      <TextInput icon={Phone}   label="Phone Number"        required placeholder="+1 555 000 0000"        value={data.phone}     onChange={e => set("phone", e.target.value)} />
      <TextInput icon={Phone}   label="WhatsApp Number"              placeholder="+1 555 000 0000"        value={data.whatsapp}  onChange={e => set("whatsapp", e.target.value)} color="#25d366" />
      <TextInput icon={MapPin}  label="Current Address"     required placeholder="City, Country"          value={data.address}   onChange={e => set("address", e.target.value)} />
      {/* LinkedIn input field customized with Link2 icon */}
      <TextInput icon={Link2}   label="LinkedIn Profile URL"         placeholder="linkedin.com/in/you"    value={data.linkedin}  onChange={e => set("linkedin", e.target.value)} />

      {/* Portfolio — full width */}
      <div className="col-span-2">
        <TextInput icon={Link2} label="Portfolio / GitHub Link" placeholder="github.com/yourname or portfolio URL" value={data.portfolio} onChange={e => set("portfolio", e.target.value)} />
      </div>

      {/* CV Upload — full width */}
      <div className="col-span-2">
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-[6px] block">
          CV / Resume (PDF, Word, Image)<span className="text-[#625eff] ml-[3px]">*</span>
        </label>
        <div className="border-[1.5px] border-solid border-[#e8e7f8] rounded-[10px] py-4 px-5 bg-[#f8f8fc] flex items-center gap-[14px]">
          <div className="flex items-center gap-2 shrink-0">
            <FileText size={15} color="#9ca3af"/>
            <span className="text-[0.78rem] text-[#9ca3af]">
              {cvName || "No file chosen"}
            </span>
          </div>
          <label className="ml-auto inline-flex items-center gap-[6px] bg-[#1a194d] text-white font-bold text-[0.78rem] py-2 px-4 rounded-[6px] cursor-pointer shrink-0">
            <Upload size={13}/> Choose File
            <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" required
              className="hidden"
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
    <div className="flex flex-col gap-5">
      {/* Role selector */}
      <div>
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-2 block">
          Role You're Applying For <span className="text-[#625eff]">*</span>
        </label>
        <div className="relative">
          <Briefcase size={15} className="absolute left-[13px] top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none"/>
          <select required value={data.role} onChange={e => set("role", e.target.value)}
            className="w-full py-[13px] pr-[14px] pl-[42px] text-[0.875rem] font-inherit bg-[#f8f8fc] border-solid border-[1.5px] border-[#e8e7f8] rounded-[10px] outline-none text-[#1a194d] transition-all duration-200 appearance-none cursor-pointer">
            <option value="">Select a role…</option>
            {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      {/* Years experience */}
      <div>
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-2 block">
          Years of Experience <span className="text-[#625eff]">*</span>
        </label>
        <div className="flex gap-[10px] flex-wrap">
          {["0–1 yr", "1–3 yrs", "3–5 yrs", "5–8 yrs", "8+ yrs"].map(opt => (
            <button key={opt} type="button"
              onClick={() => set("experience", opt)}
              className={`py-2 px-[18px] rounded-[8px] border-solid border-[1.5px] font-bold text-[0.78rem] cursor-pointer transition-all duration-150 font-inherit ${
                data.experience === opt 
                  ? "border-[#625eff] bg-[rgba(98,94,255,0.08)] text-[#625eff]" 
                  : "border-[#e8e7f8] bg-[#f8f8fc] text-[#6b7280]"
              }`}>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Current company */}
      <TextInput icon={Building2} label="Current / Last Company" placeholder="Company name (or 'Freelance')" value={data.company} onChange={e => set("company", e.target.value)} />

      {/* Notice period */}
      <div>
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-2 block">
          Notice Period / Availability <span className="text-[#625eff]">*</span>
        </label>
        <div className="flex gap-[10px] flex-wrap">
          {["Immediate", "2 weeks", "1 month", "2 months", "3+ months"].map(opt => (
            <button key={opt} type="button"
              onClick={() => set("notice", opt)}
              className={`py-2 px-[18px] rounded-[8px] border-solid border-[1.5px] font-bold text-[0.78rem] cursor-pointer transition-all duration-150 font-inherit ${
                data.notice === opt 
                  ? "border-[#625eff] bg-[rgba(98,94,255,0.08)] text-[#625eff]" 
                  : "border-[#e8e7f8] bg-[#f8f8fc] text-[#6b7280]"
              }`}>
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
    <div className="flex flex-col gap-5">
      {/* Skills chips */}
      <div>
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-[10px] block">
          Key Skills (select all that apply)
        </label>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(skill => {
            const active = data.skills.includes(skill);
            return (
              <button key={skill} type="button" onClick={() => toggleSkill(skill)}
                className={`py-[6px] px-[14px] rounded-[20px] border-solid border-[1.5px] font-bold text-[0.72rem] cursor-pointer transition-all duration-150 font-inherit ${
                  active 
                    ? "border-[#625eff] bg-[rgba(98,94,255,0.1)] text-[#625eff]" 
                    : "border-[#e8e7f8] bg-[#f8f8fc] text-[#6b7280]"
                }`}>
                {active && <span className="mr-1">✓</span>}{skill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Why AgenticSense */}
      <div>
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-2 block">
          Why AgenticSense? <span className="text-[#625eff]">*</span>
        </label>
        <div className="relative">
          <MessageSquare size={15} className="absolute left-[13px] top-[14px] text-[#9ca3af] pointer-events-none"/>
          <textarea rows={4} required placeholder="Tell us what excites you about building production AI agents for enterprise ERP…"
            value={data.motivation} onChange={e => set("motivation", e.target.value)}
            className="w-full pt-[13px] pr-[14px] pl-[42px] pb-[13px] text-[0.875rem] font-inherit bg-[#f8f8fc] border-solid border-[1.5px] border-[#e8e7f8] rounded-[10px] outline-none text-[#1a194d] transition-all duration-200 resize-none"/>
        </div>
      </div>

      {/* What they've built */}
      <div>
        <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-2 block">
          Most Relevant Project or Achievement
        </label>
        <div className="relative">
          <Code2 size={15} className="absolute left-[13px] top-[14px] text-[#9ca3af] pointer-events-none"/>
          <textarea rows={3} placeholder="Describe the most relevant thing you've built or delivered…"
            value={data.project} onChange={e => set("project", e.target.value)}
            className="w-full pt-[13px] pr-[14px] pl-[42px] pb-[13px] text-[0.875rem] font-inherit bg-[#f8f8fc] border-solid border-[1.5px] border-[#e8e7f8] rounded-[10px] outline-none text-[#1a194d] transition-all duration-200 resize-none"/>
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
    <div className="flex flex-col gap-4">
      <div className="bg-[rgba(98,94,255,0.05)] border-solid border-[1.5px] border-[rgba(98,94,255,0.15)] rounded-[12px] py-5 px-6">
        <p className="text-[0.75rem] font-bold text-[#625eff] uppercase tracking-[0.14em] mb-[14px]">Review Your Application</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {fields.map(([k, v]) => (
            <div key={k}>
              <span className="text-[0.65rem] font-bold text-[#9ca3af] uppercase tracking-[0.12em]">{k}</span>
              <p className="text-[0.82rem] text-[#1a194d] font-semibold mt-[2px] break-all">{v || "—"}</p>
            </div>
          ))}
        </div>
        {data.motivation && (
          <div className="mt-[14px] pt-[14px] border-t border-solid border-[rgba(98,94,255,0.12)]">
            <span className="text-[0.65rem] font-bold text-[#9ca3af] uppercase tracking-[0.12em]">Motivation</span>
            <p className="text-[0.82rem] text-[#1a194d] mt-1 leading-[1.55]">{data.motivation}</p>
          </div>
        )}
      </div>
      <p className="text-[0.78rem] text-[#9ca3af] leading-[1.5]">
        By submitting, I confirm all information is accurate and I agree to AgenticSense's{" "}
        <a href="/privacy" className="text-[#625eff] underline">Privacy Policy</a> and{" "}
        <a href="/terms" className="text-[#625eff] underline">Terms</a>.
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

  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 4) { setStep(s => s + 1); return; }

    loading(true); setError("");
    try {
      const fd = new FormData();
      fd.append("type", "careers");
      Object.entries(form).forEach(([k, v]) => {
        if (k === "skills")   fd.append(k, JSON.stringify(v));
        else if (k === "cv" && v instanceof File) fd.append("cv", v);
        else if (v !== null && v !== undefined) fd.append(k, String(v));
      });

      const res = await fetch("/api/send-email", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-white py-[60px] px-6">
        <div className="text-center max-w-[440px]">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#625eff] to-[#a095ff] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-white"/>
          </div>
          <h2 className="text-[1.75rem] font-extrabold text-[#1a194d] mb-3">Application Received!</h2>
          <p className="text-[#6b7280] leading-[1.65] text-[0.95rem]">
            Thanks for applying, <strong>{form.name}</strong>. We review every application carefully. If your profile is a match, we'll be in touch within 1–2 business days.
          </p>
          <a href="/" className="inline-flex items-center gap-[6px] mt-7 bg-[#1a194d] text-white font-bold py-3 px-6 rounded-[8px] no-underline text-[0.85rem]">
            Back to Home <ChevronRight size={14}/>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white text-[#1a194d] relative overflow-hidden">
      {/* Bg glows */}
      <div aria-hidden className="absolute -top-[160px] -right-[120px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(98,94,255,0.07)_0%,transparent_70%)] pointer-events-none"/>
      <div aria-hidden className="absolute -bottom-[100px] -left-[80px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(26,25,77,0.04)_0%,transparent_70%)] pointer-events-none"/>

      <div className="max-w-[1200px] mx-auto py-[clamp(40px,8vw,80px)] px-[clamp(16px,4vw,32px)]">

        {/* Header */}
        <div className="text-center mb-[clamp(40px,6vw,64px)]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight leading-[1.1] mb-4">Apply to AgenticSense</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-[#6b7280] max-w-[440px] mx-auto leading-[1.65]">
            Fill in the form below. We read every application personally and respond to every shortlisted candidate.
          </p>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(24px,4vw,48px)] items-start">

          {/* LEFT: Form card */}
          <div className="bg-white border border-solid border-[#eeecfc] rounded-[20px] py-[clamp(24px,4vw,40px)] px-[clamp(20px,3vw,36px)] shadow-[0_4px_32px_rgba(26,25,77,0.07),0_1px_4px_rgba(26,25,77,0.04)]">

            {/* Progress bar */}
            <div className="mb-7">
              <div className="flex gap-[6px] mb-3">
                {STEPS.map(s => (
                  <div key={s.id} className={`flex-1 h-1 rounded-[9999px] transition-all duration-300 ${s.id <= step ? "bg-gradient-to-r from-[#1a194d] to-[#625eff]" : "bg-[#e8e7f8]"}`}/>
                ))}
              </div>
              <p className="text-[0.7rem] font-bold text-[#625eff] uppercase tracking-[0.16em]">
                — Step {step}: {STEPS[step - 1].label}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && <Step1 data={form} set={set}/>}
              {step === 2 && <Step2 data={form} set={set}/>}
              {step === 3 && <Step3 data={form} set={set}/>}
              {step === 4 && <Step4 data={form}/>}

              {error && <p className="text-[0.78rem] text-[#ef4444] mt-2">{error}</p>}
              
              {/* Navigation */}
              <div className="flex gap-3 mt-7">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(s => s - 1)}
                    className="flex items-center gap-[6px] py-[13px] px-5 rounded-[8px] border-solid border-[1.5px] border-[#e8e7f8] bg-[#f8f8fc] text-[#6b7280] font-bold text-[0.85rem] cursor-pointer font-inherit">
                    <ChevronLeft size={15}/> Back
                  </button>
                )}
                <button type="submit"
                  className={`flex-1 flex items-center justify-center gap-2 py-[14px] px-6 rounded-[8px] border-none text-white font-bold text-[0.88rem] cursor-pointer font-inherit transition-all duration-250 ${
                    step === 4 
                      ? "bg-gradient-to-br from-[#22c55e] to-[#16a34a] shadow-[0_8px_24px_rgba(34,197,94,0.25)]" 
                      : "bg-gradient-to-br from-[#1a194d] to-[#2d2b7a] shadow-[0_8px_24px_rgba(26,25,77,0.22)]"
                  }`}>
                  {step === 4 ? (loading ? <>Submitting…</> : <><CheckCircle2 size={16}/> Submit Application</>) : <>Next: {STEPS[step].label} <ChevronRight size={15}/></>}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Info panel */}
          <div className="flex flex-col gap-5">
            {/* Why join */}
            <div className="bg-white border border-solid border-[#eeecfc] rounded-[16px] py-7 px-7 shadow-[0_2px_16px_rgba(26,25,77,0.05)]">
              <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[#625eff] mb-4">Why Join Us</p>
              {[
                { icon: "", title: "Real production work", body: "Build AI agents that run inside SAP, Oracle and enterprise ERP — not demos, not prototypes." },
                { icon: "", title: "Global & distributed", body: "Work with clients across the GCC, South Asia and Europe from wherever you're most productive." },
                { icon: "", title: "Deep technical problems", body: "Agentic pipelines, ERP integrations, multi-tenant SaaS — problems that actually require engineering skill." },
                { icon: "", title: "Growing fast", body: "Early team member advantage — direct impact on architecture, culture and direction." },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-[14px] pb-[14px] mb-[14px] border-b border-solid border-[#f5f4ff]">
                  <span className="text-[1.3rem] shrink-0 leading-[1]">{icon}</span>
                  <div>
                    <p className="font-bold text-[0.85rem] text-[#1a194d] mb-[3px]">{title}</p>
                    <p className="text-[0.78rem] text-[#6b7280] leading-[1.55]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}