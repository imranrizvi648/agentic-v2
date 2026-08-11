// new version
export const metadata = {
  title: "About AgenticSense | Intelligent AI Automation Company",
  description:
    "Learn about AgenticSense an AI technology company building intelligent AI agents, ERP-native automation systems and digital transformation solutions for businesses worldwide.",
  keywords: "about AgenticSense, AI automation company, enterprise AI agents, ERP automation, agentic AI company Dubai",
  alternates: { canonical: "https://www.agenticsense.co/about" },
  openGraph: {
    title: "About AgenticSense | Intelligent AI Automation Company",
    description: "AgenticSense builds production-grade AI agents that automate finance, operations and decision-making natively inside your ERP.",
    url: "https://www.agenticsense.co/about",
  },
};

import React from 'react'
import AboutSection from './components/AboutSection'
import AboutDetailedSection from './components/AboutDetailedSection'
import WhoWeAre from './components/WhoWeAre'
import TkxelSection from './components/TkxelSection'
import FolioTabsSection from './components/FolioTabsSection'
import AIFirstBanner from './components/AIFirstBanner'

// ✅ Use the wrapper NOT PdfViewerSection directly
// This prevents the DOMMatrix SSR crash during `npm run build`
import PdfViewerWrapper from './components/PdfViewerWrapper'

const page = () => {
  return (
    <div>
      <AboutSection />
      <WhoWeAre />
      <AboutDetailedSection />
      <TkxelSection />
      <AIFirstBanner />
      <FolioTabsSection />

      {/* ✅ PDF file name with space must be URL-encoded in the path */}
      <PdfViewerWrapper pdfUrl="/AGENTICSENSE%20PROFILE.pdf" />
    </div>
  )
}

export default page
