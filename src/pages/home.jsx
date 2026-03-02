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
      <Navbar/>
      <div className="mb-16 md:mb-24 lg:mb-32"></div>
      <HeroSection/>
      <div className="mb-16 md:mb-24 lg:mb-32"></div>
      <About/>
      <div className="mb-16 md:mb-24 lg:mb-32"></div>
      <Qualities/>
      <div className="mb-16 md:mb-24 lg:mb-32"></div>
      <Menu/>
      <div className="mb-16 md:mb-24 lg:mb-32"></div>
      <WhoAreWe/>
      <div className="mb-16 md:mb-24 lg:mb-32"></div>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
