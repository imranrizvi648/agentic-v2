'use client';

import React, { useState } from 'react';

// ── Data (Images ke correct paths aur size classes) ──────────────────────
const partnerData = {
  xpace: {
    name: 'XPACE Technologies',
    logo: '/xpace white logo.png',
    sizeClass: 'max-h-12 md:max-h-16',
    description: 'Delivering cutting-edge enterprise solutions across global markets through our strategic alliance.',
    clients: [
      { name: 'European Union', industry: 'Governance', project: 'Institutional Solutions & Frameworks' },
      { name: 'Applied Electronic', industry: 'Electronics', project: 'Hardware & System Integration' },
      { name: 'BEST Enterprises', industry: 'Enterprise', project: 'Business Automation Services' },
      { name: 'CCDC Matrics Research (PVT)', industry: 'Research', project: 'Data Analytics & Matrices Systems' },
      { name: 'Global Solution Service', industry: 'IT Services', project: 'Global Infrastructure Support' },
      { name: 'Central Software Company', industry: 'Software', project: 'Core Software Architecture Development' },
    ],
  },
  fanuun: {
    name: 'FANUUN BCG',
    logo: '/logoFunun.png',
    sizeClass: 'max-h-12 md:max-h-41',
    description: 'Transforming businesses with innovative consulting and operational excellence.',
    clients: [
      { name: 'AI Based Document Digitalization', industry: 'AI & Data', project: 'Automated Document Processing & Scanning' },
    ],
  },
  aithentic: {
    name: 'AITHENTIC',
    logo: '/Gemini_Generated_Image_qa7eg1qa7eg1qa7e-removebg-preview.png',
    sizeClass: 'max-h-10 md:max-h-12',
    isWhite: true,
    description: 'Driving authentic AI implementation and augmented outcomes for forward-thinking enterprises.',
    clients: [
      { name: 'BRC Industry', industry: 'Manufacturing', project: 'Industrial AI Solutions' },
      { name: 'Abdul Lateef', industry: 'Commercial', project: 'Business Operations Enhancement' },
      { name: 'Emirates Driving Center', industry: 'Automotive', project: 'Smart Systems Integration' },
      { name: 'SALIC', industry: 'Agriculture', project: 'Agri-Tech AI Implementations' },
      { name: 'Crayon', industry: 'Cloud & Tech', project: 'Cloud Management Platforms' },
    ],
  },
  brb: {
    name: 'BRB GROUP',
    logo: '/BRB-LOGO.png',
    sizeClass: 'max-h-12 md:max-h-18',
    description: 'Executing large-scale infrastructure and development projects with precision.',
    clients: [
      { name: 'Document Management', industry: 'Corporate', project: 'Enterprise Document Archiving System' },
      { name: 'AI HR System', industry: 'Human Resources', project: 'Automated Talent & Payroll Management' },
      { name: 'AI IT Management System', industry: 'Information Technology', project: 'Predictive IT Infra & Monitoring' },
      { name: 'AI Marketing System', industry: 'Marketing', project: 'Smart Campaign Automation & Analytics' },
    ],
  },
};

// ── PARTNERS Array (جو غائب تھا، اسے یہاں واپس ایڈ کر دیا ہے) ──────────────────────
const PARTNERS = [
  { id: 'xpace' },
  { id: 'fanuun' },
  { id: 'aithentic' },
  { id: 'brb' },
];

// ── Initials avatar helper ────────────────────────────────────────────────────
function initials(name) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('');
}

// ── Client card (Dark theme ke mutabik card design) ─────────────────────────────────
function ClientCard({ client }) {
  return (
    <div
      className="bg-white/5 rounded-xl border border-white/10 p-5 flex items-start gap-4
        hover:border-white/30 hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)]
        transition-all duration-300"
    >
      {/* Initials avatar */}
      <div className="flex-shrink-0 w-11 h-11 rounded-full
        bg-white/10 border border-white/20
        flex items-center justify-center">
        <span className="text-[11px] font-black text-white tracking-tight">
          {initials(client.name)}
        </span>
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h4 className="text-sm font-bold text-white leading-snug">{client.name}</h4>
        <span className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-wider
          text-white/90 bg-white/10 border border-white/20
          px-2 py-0.5 rounded-full">
          {client.industry}
        </span>
        <p className="mt-2 text-xs text-white/70 leading-relaxed">
          <span className="font-semibold text-white/90">Project:</span>{' '}
          {client.project}
        </p>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Partnerships() {
  // 1. By default pehla partner 'xpace' select rahega taaki empty screen na dikhe
  const [activePartner, setActivePartner] = useState('xpace');

  // 2. Click karne par sirf active partner change hoga, toggle (close) nahi hoga
  const handlePartnerSelect = (id) => {
    setActivePartner(id);
  };

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-r from-[#0d133b] via-[#152374] to-[#0047d4] py-20 text-white font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ─────────────────────────────────────────────────── */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Partnerships with<br className="hidden sm:block" /> Industry Leaders
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore the network of clients we have empowered through our strategic alliances.
            Select a partner below to view collaborative projects.
          </p>
        </div>

        {/* ── Partner selector grid (Logo selector grid) ────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 relative z-10">
          {PARTNERS.map(({ id }) => {
            const partner = partnerData[id];
            const active = activePartner === id;
            return (
              <button
                key={id}
                onClick={() => handlePartnerSelect(id)}
                className={`relative rounded p-4 h-28
                  flex flex-col items-center justify-center
                  cursor-pointer transition-all duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#152374]
                  ${active
                    ? 'scale-[1.04] bg-white/15 shadow-[0_8px_32px_rgba(255,255,255,0.1)] border-[1.5px] border-white'
                    : 'bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_4px_16px_rgba(255,255,255,0.05)]'
                  }`}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  className={`w-auto object-contain transition-transform duration-300 max-w-[140px] md:max-w-[200px] ${partner.sizeClass} ${
                    partner.isWhite ? 'brightness-0 invert' : ''
                  }`}
                />

                {/* Caret pointer pointing down to the panel */}
                {active && (
                  <span className="absolute -bottom-[15px] left-1/2 -translate-x-1/2
                    w-0 h-0
                    border-l-[9px] border-l-transparent
                    border-t-[13px] border-t-white
                    border-r-[9px] border-r-transparent" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Dynamic content panel (Clients detail panel) ────────────────────────── */}
        <div className="relative bg-white/5 rounded border border-white/10
          shadow-[0_4px_32px_rgba(0,0,0,0.2)] overflow-hidden min-h-[360px]">

          {/* Decorative subtle background glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full
            bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-10">

            {/* Partner clients view - Hamesha koi na koi partner select rahega */}
            <div>
              {/* Panel header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between
                gap-4 mb-8 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-5 bg-white/50" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                      Partner Clients
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {partnerData[activePartner].name}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/70 max-w-lg leading-relaxed">
                    {partnerData[activePartner].description}
                  </p>
                </div>

                {/* Project count badge */}
                {/* <div className="flex-shrink-0 self-start sm:self-center
                  bg-white/10 border border-white/20
                  rounded-xl px-5 py-3 text-center">
                  <span className="block text-2xl font-extrabold text-white leading-none">
                    {partnerData[activePartner].clients.length}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest
                    text-white/70 mt-0.5 block">
                    Projects
                  </span>
                </div> */}
              </div>

              {/* Client cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {partnerData[activePartner].clients.map((client, i) => (
                  <ClientCard key={i} client={client} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}