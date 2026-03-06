import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ResidencesSection from './components/ResidencesSection'
import AmenitiesSection from './components/AmenitiesSection'
import LocationSection from './components/LocationSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

const page = () => {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ResidencesSection />
      <AmenitiesSection />
      <LocationSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

export default page