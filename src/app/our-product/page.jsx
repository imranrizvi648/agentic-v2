"use client";

/* ─────────────────────────────────────────────────────────────
   OUR PRODUCTS — card-based, white theme
   Next.js (App Router) · TailwindCSS · Framer Motion
   Matches your Partnerships section style + global theme:
   text #1a194d, accent #625eff, Geist fonts, .typo-* classes
   ───────────────────────────────────────────────────────────── */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Icons (clean inline SVGs, one per product) ────────────── */
function ProductIcon({ id, className = "" }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };
  switch (id) {
    case "linkiq": // network / outreach
      return (
        <svg {...common}>
          <circle cx="6" cy="5.5" r="2" />
          <circle cx="18" cy="5.5" r="2" />
          <circle cx="12" cy="18.5" r="2" />
          <path d="M8 5.5h8M7.5 7.2 10.8 16.8M16.5 7.2 13.2 16.8" />
        </svg>
      );
    case "mailpilot": // paper plane / send
      return (
        <svg {...common}>
          <path d="M21.5 3 11 13.5" />
          <path d="M21.5 3 14.5 21 11 13.5 3.5 10 21.5 3z" />
        </svg>
      );
    case "chatcore": // chat bubble
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="3" />
          <path d="M8 21l3.5-4" />
          <circle cx="8.5" cy="10.5" r="1" />
          <circle cx="12" cy="10.5" r="1" />
          <circle cx="15.5" cy="10.5" r="1" />
        </svg>
      );
    case "voxcall": // microphone / voice
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
          <path d="M12 17.5V21M8.5 21h7" />
        </svg>
      );
    case "leadforge": // target / lead
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── Product data ──────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "linkiq",
    num: "01",
    name: "LinkIQ",
    role: "LinkedIn Outreach Agent",
    category: "LinkedIn Agent",
    tagline: "Your pipeline, filled while you sleep.",
    description:
      "Finds your ideal buyers on LinkedIn, writes personalised connection notes from their profile activity, and runs multi-step follow-ups inside safe daily limits. Warm replies land in one unified inbox — tagged and ready for your closer.",
    capabilities: [
      "ICP-based prospect discovery & list building",
      "Profile-aware personalised messages (no templates)",
      "Multi-step follow-ups with reply detection",
      "Unified inbox + CRM sync (HubSpot, Pipedrive)",
    ],
    stats: [
      { value: "38%", label: "avg. reply rate" },
      { value: "1.2k", label: "prospects / mo" },
      { value: "0", label: "manual DMs" },
    ],
    stack: ["LinkedIn API", "GPT-4o", "n8n", "HubSpot"],
    featured: true,
  },
  {
    id: "mailpilot",
    num: "02",
    name: "MailPilot",
    role: "Email Agent",
    category: "Email Agent",
    tagline: "Cold email that reads like it was written for one person.",
    description:
      "Researches every lead before writing a single line — company news, tech stack, hiring signals — then drafts, sends, warms domains and handles replies. Objections get answered, meetings get booked, your inbox stays untouched.",
    capabilities: [
      "Lead research & enrichment before every send",
      "Deliverability: warm-up, rotation, SPF/DKIM",
      "Auto reply-handling & objection responses",
      "Meeting booking straight into your calendar",
    ],
    stats: [
      { value: "62%", label: "open rate" },
      { value: "4.7x", label: "meetings" },
      { value: "99%", label: "inbox placement" },
    ],
    stack: ["Instantly", "Clay", "Claude", "Cal.com"],
  },
  {
    id: "chatcore",
    num: "03",
    name: "ChatCore",
    role: "AI Chatbot",
    category: "Chatbot",
    tagline: "Support that never says “we'll get back to you”.",
    description:
      "Trained on your docs, products and past tickets, it answers customers in your brand voice across web, WhatsApp and Instagram. It qualifies leads mid-conversation, escalates to a human only when it should, and improves with every chat.",
    capabilities: [
      "Trains on your docs, site & past conversations",
      "Web widget + WhatsApp + Instagram DMs",
      "Lead qualification & handoff rules you control",
      "Full analytics: topics, CSAT, resolution rate",
    ],
    stats: [
      { value: "83%", label: "tickets solved" },
      { value: "<3s", label: "response time" },
      { value: "24/7", label: "coverage" },
    ],
    stack: ["RAG", "Vector DB", "WhatsApp API", "Next.js"],
  },
  {
    id: "voxcall",
    num: "04",
    name: "VoxCall",
    role: "AI Voice Agent",
    category: "Voice Agent",
    tagline: "A phone team of one, that sounds like ten.",
    description:
      "Answers inbound calls, qualifies callers, books appointments and runs outbound reminder campaigns in a natural voice with real-time interruption handling. Every call is transcribed, summarised and pushed to your CRM the moment it ends.",
    capabilities: [
      "Human-like voice with barge-in handling",
      "Inbound reception + outbound campaigns",
      "Live appointment booking during the call",
      "Call transcripts, summaries & CRM logging",
    ],
    stats: [
      { value: "100%", label: "calls answered" },
      { value: "41%", label: "fewer no-shows" },
      { value: "12", label: "languages" },
    ],
    stack: ["Twilio", "ElevenLabs", "Deepgram", "GoHighLevel"],
  },
  {
    id: "leadforge",
    num: "05",
    name: "LeadForge",
    role: "Lead Generation Agent",
    category: "Lead Gen",
    tagline: "Fresh, verified leads on your desk every morning.",
    description:
      "Scrapes directories, maps and social platforms for businesses matching your exact criteria, verifies every email and phone number, scores each lead against your ICP, and delivers a clean sheet daily — or pipes them straight into LinkIQ and MailPilot.",
    capabilities: [
      "Multi-source scraping: Maps, directories, socials",
      "Email & phone verification (bounce-safe)",
      "ICP scoring so you call the best leads first",
      "Daily delivery to Sheets, CRM or other agents",
    ],
    stats: [
      { value: "10k+", label: "leads / month" },
      { value: "97%", label: "data accuracy" },
      { value: "6hrs", label: "saved daily" },
    ],
    stack: ["Apify", "Clearbit", "Sheets API", "Zapier"],
  },
];

/* ── Motion presets ────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/* ── Small pieces ──────────────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="h-px w-6 bg-[#625eff]" aria-hidden />
      <span
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#625eff]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {children}
      </span>
    </span>
  );
}

function CategoryPill({ children }) {
  return (
    <span className="inline-block rounded-full border border-[#1a194d]/12 bg-[#1a194d]/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1a194d]/70">
      {children}
    </span>
  );
}

function IconBadge({ id, size = "md" }) {
  const box = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  return (
    <span
      className={`inline-flex ${box} items-center justify-center rounded-2xl border border-[#625eff]/20 bg-[#625eff]/[0.08] text-[#625eff]`}
    >
      <ProductIcon id={id} />
    </span>
  );
}

/* ── Featured card ─────────────────────────────────────────── */
function FeaturedCard({ product, onOpen }) {
  return (
    <motion.article
      variants={item}
      onClick={() => onOpen(product)}
      className="group relative col-span-full cursor-pointer overflow-hidden rounded-3xl border border-[#1a194d]/10 bg-white p-7 shadow-[0_2px_20px_rgba(26,25,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#625eff]/40 hover:shadow-[0_20px_50px_rgba(98,94,255,0.12)] sm:p-9"
    >
      <span className="pointer-events-none absolute right-6 top-6 text-[11px] font-bold tracking-[0.2em] text-[#1a194d]/20" style={{ fontFamily: "var(--font-mono)" }}>
        {product.num} / FLAGSHIP
      </span>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:gap-12">
        {/* left */}
        <div>
          <div className="flex items-center gap-3">
            <IconBadge id={product.id} size="lg" />
            <CategoryPill>{product.category}</CategoryPill>
          </div>

          <h3 className="typo-h2 mt-6 text-[#1a194d]">{product.name}</h3>
          <p className="mt-2 text-[clamp(1rem,2vw,1.25rem)] font-semibold text-[#625eff]">
            {product.tagline}
          </p>
          <p className="typo-body mt-4 max-w-xl text-[#1a194d]/65">
            {product.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.capabilities.slice(0, 3).map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#1a194d]/10 bg-[#1a194d]/[0.03] px-3 py-1.5 text-xs font-medium text-[#1a194d]/70"
              >
                {c}
              </span>
            ))}
          </div>

          <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1a194d] transition-colors group-hover:text-[#625eff]">
            View full details
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>

        {/* right — stats + stack */}
        <div className="rounded-2xl border border-[#1a194d]/8 bg-[#1a194d]/[0.025] p-6">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {product.stats.map((s) => (
              <div key={s.label} className="lg:flex lg:items-baseline lg:justify-between lg:border-b lg:border-[#1a194d]/8 lg:pb-3">
                <div className="text-2xl font-extrabold text-[#1a194d]">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-[#1a194d]/50 lg:mt-0" style={{ fontFamily: "var(--font-mono)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {product.stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-[#625eff]/20 bg-[#625eff]/[0.07] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#625eff]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Standard product card ─────────────────────────────────── */
function ProductCard({ product, onOpen }) {
  return (
    <motion.article
      variants={item}
      onClick={() => onOpen(product)}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#1a194d]/10 bg-white p-6 shadow-[0_2px_20px_rgba(26,25,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#625eff]/40 hover:shadow-[0_20px_50px_rgba(98,94,255,0.12)]"
    >
      <div className="flex items-start justify-between">
        <IconBadge id={product.id} />
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#1a194d]/20" style={{ fontFamily: "var(--font-mono)" }}>
          {product.num}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-extrabold text-[#1a194d]">{product.name}</h3>
        </div>
        <div className="mt-2">
          <CategoryPill>{product.category}</CategoryPill>
        </div>
        <p className="typo-body mt-3 text-[#1a194d]/60 line-clamp-3">
          {product.description}
        </p>
      </div>

      {/* capability hints */}
      <ul className="mt-4 space-y-1.5">
        {product.capabilities.slice(0, 2).map((c) => (
          <li key={c} className="flex items-start gap-2 text-[13px] text-[#1a194d]/70">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#625eff]" />
            {c}
          </li>
        ))}
        <li className="pl-3.5 text-[13px] font-medium text-[#1a194d]/40">
          +{product.capabilities.length - 2} more
        </li>
      </ul>

      <div className="mt-auto flex items-center justify-between border-t border-[#1a194d]/8 pt-4">
        <span className="text-sm font-bold text-[#1a194d] transition-colors group-hover:text-[#625eff]">
          Details
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a194d]/12 text-[#1a194d] transition-all duration-300 group-hover:border-[#625eff] group-hover:bg-[#625eff] group-hover:text-white">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 13L13 3M13 3H5.5M13 3v7.5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      </div>
    </motion.article>
  );
}

/* ── Detail modal ──────────────────────────────────────────── */
function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} details`}
    >
      <div className="absolute inset-0 bg-[#1a194d]/45 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.35, ease }}
        className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#1a194d]/10 bg-white shadow-[0_30px_80px_rgba(26,25,77,0.35)]"
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#1a194d]/8 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <IconBadge id={product.id} size="lg" />
            <div>
              <div className="mb-1.5"><CategoryPill>{product.category}</CategoryPill></div>
              <h3 className="text-2xl font-extrabold leading-tight text-[#1a194d]">{product.name}</h3>
              <p className="text-sm text-[#1a194d]/50">{product.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1a194d]/12 text-[#1a194d]/60 transition-colors hover:border-[#1a194d]/30 hover:text-[#1a194d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#625eff]"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>

        {/* scroll body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <p className="text-lg font-semibold text-[#625eff]">{product.tagline}</p>

          {/* stats */}
          <div className="mt-6 grid grid-cols-3 divide-x divide-[#1a194d]/8 overflow-hidden rounded-2xl border border-[#1a194d]/8 bg-[#1a194d]/[0.02]">
            {product.stats.map((s) => (
              <div key={s.label} className="px-3 py-5 text-center">
                <div className="text-xl font-extrabold text-[#1a194d] sm:text-2xl">{s.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wide text-[#1a194d]/50" style={{ fontFamily: "var(--font-mono)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="typo-body mt-6 text-[#1a194d]/70">{product.description}</p>

          {/* capabilities */}
          <h4 className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a194d]/50" style={{ fontFamily: "var(--font-mono)" }}>
            What it does
          </h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {product.capabilities.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-xl border border-[#1a194d]/8 bg-[#1a194d]/[0.02] px-4 py-3 text-[13px] text-[#1a194d]/75"
              >
                <span aria-hidden className="mt-[3px] shrink-0 text-[#625eff]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5l3 3 7-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {c}
              </div>
            ))}
          </div>

          {/* stack */}
          <h4 className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a194d]/50" style={{ fontFamily: "var(--font-mono)" }}>
            Built with
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#625eff]/25 bg-[#625eff]/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#625eff]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* footer CTA */}
        <div className="flex flex-col gap-3 border-t border-[#1a194d]/8 p-6 sm:flex-row sm:p-8">
          <a
            href="/contact"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#625eff] px-6 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.02]"
          >
            Deploy {product.name} <span aria-hidden>→</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#1a194d]/15 px-6 py-3.5 text-sm font-semibold text-[#1a194d] transition-colors hover:border-[#1a194d]/40"
          >
            Book a demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function Products() {
  const [active, setActive] = useState(null);
  const featured = PRODUCTS.find((p) => p.featured);
  const rest = PRODUCTS.filter((p) => !p.featured);

  return (
    <section
      className="relative overflow-hidden bg-white py-20 text-[#1a194d] sm:py-24"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* faint dot texture — subtle, not a gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(rgba(26,25,77,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 55%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center"><Eyebrow>Our Products</Eyebrow></div>
          <h2 className="typo-h1 mt-5 text-[#1a194d]">
            AI agents we&apos;ve built &amp; shipped
          </h2>
          <p className="typo-lead mx-auto mt-4 max-w-xl text-[#1a194d]/60">
            Five products, running for real clients — outreach, email, chat, voice
            and lead generation, working as one connected system.
          </p>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1a194d]/40"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> All live
            </span>
            <span>5 products</span>
            <span>40+ deployments</span>
          </div>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {featured && <FeaturedCard product={featured} onOpen={setActive} />}
          {rest.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setActive} />
          ))}
        </motion.div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 overflow-hidden rounded-3xl border border-[#1a194d]/10 bg-[#1a194d] px-8 py-10 text-white sm:px-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="typo-h2 max-w-lg text-balance">
                Need an agent that doesn&apos;t exist yet?
              </h3>
              <p className="typo-body mt-2 max-w-md text-white/60">
                Tell us the workflow you want to automate — we&apos;ll design and
                build it for your business.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#625eff] px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Start a project
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {active && <ProductModal product={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}