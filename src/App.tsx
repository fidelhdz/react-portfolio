// import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import { HeroSection, Nav, About, Experience, Skills, Portfolio, Testimonials, Contact, Footer } from './components'

function App() {
  AOS.init();

  return (
    <>
      <Nav />
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
