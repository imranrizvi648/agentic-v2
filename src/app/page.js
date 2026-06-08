export const metadata = {
  title: "AgenticSense | AI Agents, Intelligent Automation & Business AI Solutions",
  description:
    "AgenticSense builds intelligent AI agents, automation systems and AI-powered business solutions to help companies improve productivity, reduce manual work and scale faster.",
  alternates: { canonical: "https://www.agenticsense.ai/" },
};

import React from 'react'
import HeroSlider from './components/LandinPage/HeroSection'
import ServicesSection from './components/LandinPage/ServicesSection'
import CommitmentSection from './components/LandinPage/CommitmentSection'
import SuccessStories from './components/LandinPage/SuccessStories'
import Recognitions from './components/LandinPage/Recognitions'
import Partnerships from './components/LandinPage/Partnerships'
import InsightsSection from './components/LandinPage/InsightsSection'
import Technology from './components/LandinPage/Technology'
import AboutSection from './components/LandinPage/AboutSection'

const page = () => {
  return (
    <div>
      <HeroSlider/>
      <ServicesSection/>
      <AboutSection/>   
      <CommitmentSection/>
      <SuccessStories/>
       <Technology/>
      <Partnerships/>
 
      <InsightsSection/>
    </div>
  )
}

export default page
