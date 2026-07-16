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
      { name: 'European Union', industry: 'Governance', project: 'AI-Based Psychological Assessment for digital well-being' },
      { name: 'Applied Electronics', industry: 'Electronics', project: 'AI-Based Product Quality Control via Multi-Agent' },
      { name: 'BEST Enterprises', industry: 'Enterprise', project: 'Confidential / Under NDA' },
      { name: 'CCDC Metrics Research (PVT)', industry: 'Research', project: 'AI-Based Medical Vitiligo Disease Diagnosis through computer vision and Multi-Agent' },
      { name: 'Global Solution Service', industry: 'IT Services', project: 'AI-Based Product Quality Control via Multi-Agent' },
      { name: 'Central Software Company', industry: 'Software', project: 'AI-Based FBR Invoice Automation' },
    ],
  },
  fanuun: {
    name: 'FANUUN BCG',
    logo: '/logoFunun.png',
    sizeClass: 'max-h-24 md:max-h-32', // Slightly adjusted for better alignment inside h-32 button
    description: 'Transforming businesses with innovative consulting and operational excellence.',
    clients: [
      { name: 'Funuun Solutions', industry: 'AI & Data', project: 'AI-Based Document Digitization' },
    ],
  },
  aithentic: {
    name: 'AITHENTIC',
    logo: '/Gemini_Generated_Image_qa7eg1qa7eg1qa7e-removebg-preview.png',
    sizeClass: 'max-h-8 md:max-h-23',
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
    sizeClass: 'max-h-12 md:max-h-17',
    isWhite: false,
    description: 'Executing large-scale infrastructure and development projects with precision.',
    clients: [
      { name: 'Document Management', industry: 'Corporate', project: 'Enterprise Document Archiving & Management System' },
      { name: 'AI HR System', industry: 'Human Resources', project: 'Automated Talent Acquisition & HR System' },
      { name: 'AI IT Management System', industry: 'Information Technology', project: 'Intelligent Infrastructure & IT Management System' },
      { name: 'AI Marketing System', industry: 'Marketing', project: 'Smart Campaign Automation & AI Marketing Analytics' },
    ],
  },
  medics: {
    name: 'MEDICS LABORATORIES',
    logo: '/medicswhitelogo.webp',
    // Iski max height ko button container ke maximum available height par map kiya hai (bhari look dene k liye)
    sizeClass: 'h-16 md:h-23 w-auto object-contain', 
    isWhite: false, 
    description: 'Transforming traditional botanical wisdom into modern certified wellness products through DRAP-approved and cGMP manufacturing standards.',
    clients: [
      { name: 'Digestive Wellness (Digas)', industry: 'Healthcare', project: 'AI-Driven Batch Consistency & Quality Control Management' },
      { name: 'Respiratory Care (Ivy Syrup)', industry: 'Pharmaceutical', project: 'Smart Supply Chain Tracking & Automated Inventory Logs' },
      { name: 'Women Care (FC Forte)', industry: 'Wellness', project: 'Automated Recipe Formulation & Raw Botanical Ingredient Matrix' },
      { name: 'Pediatric Range (Epigro)', industry: 'Child Care', project: 'Regulatory Compliance Automation & DRAP Documentation Pipeline' },
    ],
  },
};

// ── PARTNERS Array ──────────────────────────────────────────────────────────
const PARTNERS = [
  { id: 'xpace' },
  { id: 'fanuun' },
  { id: 'aithentic' },
  { id: 'brb' },
  { id: 'medics' },
];

// ── Initials avatar helper ────────────────────────────────────────────────────
function initials(name) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('');
}

// ── Client card ───────────────────────────────────────────────────────────────
function ClientCard({ client }) {
  return (
    <div
      className="bg-white/5 rounded-xl border border-white/10 p-5 flex items-start gap-4
        hover:border-white/30 hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)]
        transition-all duration-300"
    >
      <div className="flex-shrink-0 w-11 h-11 rounded-full
        bg-white/10 border border-white/20
        flex items-center justify-center">
        <span className="text-[11px] font-black text-white tracking-tight">
          {initials(client.name)}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-bold text-white leading-snug truncate" title={client.name}>
          {client.name}
        </h4>
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

export default function Partnerships() {
  const [activePartner, setActivePartner] = useState(null);

  const handlePartnerSelect = (id) => {
    if (id === 'medics') return;
    setActivePartner(activePartner === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden bg-[#1a194d] py-20 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ─────────────────────────────────────────────────── */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Partnerships with<br className="hidden sm:block" /> Industry Leaders
          </h2>
        </div>

        {/* ── Partner selector grid ────────────────── */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10 ${activePartner ? 'mb-6' : 'mb-0'}`}>
          {PARTNERS.map(({ id }) => {
            const partner = partnerData[id];
            const active = activePartner === id;
            const isMedics = id === 'medics';

            return (
              <button
                key={id}
                onClick={() => handlePartnerSelect(id)}
                disabled={isMedics} 
                className={`relative rounded p-2 h-32
                  flex flex-col items-center justify-center
                  transition-all duration-300
                  ${isMedics 
                    ? 'cursor-default opacity-100 bg-white/5 border border-white/10' 
                    : 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#152374]'
                  }
                  ${active
                    ? 'scale-[1.04] bg-white/15 shadow-[0_8px_32px_rgba(255,255,255,0.1)] border-[1.5px] border-white'
                    : !isMedics && 'bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_4px_16px_rgba(255,255,255,0.05)]'
                  }`}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  /* 
                    Yahan humne logic lagayi hai: 
                    Agar medics hai toh wrapper ki max-width ko bypass kar k full breadth pe display karega.
                  */
                  className={`object-contain transition-transform duration-300 ${partner.sizeClass} ${
                    isMedics 
                      ? 'max-w-[150px] md:max-w-[200px]' 
                      : 'w-auto max-w-[110px] md:max-w-[140px]'
                  } ${partner.isWhite ? 'brightness-0 invert' : ''}`}
                />

                {/* Caret pointer (Sirf active partner ke liye) */}
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

        {/* ── Dynamic content panel ────────────────────────────────────────── */}
        {activePartner && activePartner !== 'medics' && (
          <div className="relative bg-white/5 rounded border border-white/10
            shadow-[0_4px_32px_rgba(0,0,0,0.2)] overflow-hidden min-h-[360px] transition-all duration-300">

            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full
              bg-white/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-10">
              <div>
                {/* Panel header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between
                  gap-4 mb-8 pb-6 border-b border-b-white/10">
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
        )}

      </div>
    </section>
  );
}