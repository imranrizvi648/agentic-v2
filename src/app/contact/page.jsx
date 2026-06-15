export const metadata = {
  title: "Contact AgenticSense | Book a Free Finance Automation Assessment",
  description:
    "Contact AgenticSense to book a free finance automation assessment. We map your highest-value AI automation opportunity inside your ERP — no cost, no obligation.",
  keywords: "contact AgenticSense, AI automation consultation, finance automation assessment, ERP AI integration consultation",
  alternates: { canonical: "https://www.agenticsense.co/contact" },
  openGraph: {
    title: "Contact AgenticSense | Book a Free Finance Automation Assessment",
    description: "Tell us about your workflow. We show you exactly what an AI agent running inside your ERP could do with it.",
    url: "https://www.agenticsense.co/contact",
  },
};

import React from 'react'
import ContactUs from './components/ContactUs'
import OfficeLocations from './components/OfficeLocations'
import ContactHero from './components/ContactHero'

const page = () => {
  return (
    <div>
        <ContactHero/>
      <ContactUs/>
      {/* <OfficeLocations/> */}
    </div>
  )
}

export default page
