import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'

import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <About />
        </div>
      </section>
      
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Qualities />
        </div>
      </section>
      
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Menu />
        </div>
      </section>
      
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <WhoAreWe />
        </div>
      </section>
      
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reservation />
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default Home
