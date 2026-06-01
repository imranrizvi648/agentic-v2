import React from 'react'
import AboutSection from './components/AboutSection'
import AboutDetailedSection from './components/AboutDetailedSection'
import WhoWeAre from './components/WhoWeAre'
import TkxelSection from './components/TkxelSection'
import FolioTabsSection from './components/FolioTabsSection'
import AIFirstBanner from './components/AIFirstBanner'

// Ab hum direct bina kisi hack ke component import karenge
import PdfViewerSection from './components/PdfViewerSection'

const page = () => {
  return (
    <div>
      <AboutSection/>
      <WhoWeAre/>
      <AboutDetailedSection/>
      <TkxelSection/>
      <AIFirstBanner/>
      <FolioTabsSection/>
      
      {/* Safe and clean call */}
      <PdfViewerSection pdfUrl="/AGENTICSENSE PROFILE.pdf" />
    </div>
  )
}

export default page