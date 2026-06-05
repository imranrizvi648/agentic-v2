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
