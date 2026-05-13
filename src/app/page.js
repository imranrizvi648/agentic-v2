import React from 'react'
import HeroSlider from './components/LandinPage/HeroSection'
import ServicesSection from './components/LandinPage/ServicesSection'
import CommitmentSection from './components/LandinPage/CommitmentSection'
import SuccessStories from './components/LandinPage/SuccessStories'
import Recognitions from './components/LandinPage/Recognitions'
import Partnerships from './components/LandinPage/Partnerships'
import PodcastSection from './components/LandinPage/PodcastSection'
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
      <PodcastSection/>
      <InsightsSection/>
    </div>
  )
}

export default page
