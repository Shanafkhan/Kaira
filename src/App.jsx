import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import Experience from './components/Experience';
import Coffee from './components/Coffee';
import Store from './components/Store';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Logo from './components/logo';
import TraditionSection from './components/TraditionSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Logo />
      <Experience/>
      <Coffee />
      <Store />
      <TraditionSection />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default App
