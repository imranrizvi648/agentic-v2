import React from 'react'
import AboutSection from './components/AboutSection'
import AboutDetailedSection from './components/AboutDetailedSection'
import WhoWeAre from './components/WhoWeAre'
import TkxelSection from './components/TkxelSection'
import FolioTabsSection from './components/FolioTabsSection'
import AIFirstBanner from './components/AIFirstBanner'

// ✅ Use the wrapper — NOT PdfViewerSection directly
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