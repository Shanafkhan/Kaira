import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import Experience from './components/Experience';
import Coffee from './components/Coffee';
import Store from './components/Store';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Envelope from './components/Envelope';
import AmenitiesSection from "./components/AmenitiesSection";
import KairaGallery from './components/KairaGallery';
import WhoWeAreSlide from './components/WhoWeAreSlide';
import Welcome from './components/Welcome';
import InvestmentHighlights from './components/InvestmentHighlights';
import WhyKaira from './components/WhyKaira';
function App() {

  return (
    <>
      <Hero/>
      <Logo />
      <Welcome />
      <InvestmentHighlights/>
      <WhyKaira />
      <Experience/>
      <AmenitiesSection />
      <Coffee />
      <Store />
      <KairaGallery />
      <WhoWeAreSlide />
      <Envelope />
      <GetInTouch />
      <Footer />
      
    </>
  )
}

export default App
