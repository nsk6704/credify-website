import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gamification from './components/Gamification'
import WhyUpwell from './components/WhyUpwell'
import TechStack from './components/TechStack'
import Privacy from './components/Privacy'
import GettingStarted from './components/GettingStarted'
import IOSWaitlist from './components/IOSWaitlist'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useScrollEffects } from './hooks/useScrollEffects'
import './App.css'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  useScrollEffects(navbarRef)

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        const offset = 80
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <div ref={navbarRef}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Hero />
      <Features />
      <Gamification />
      <WhyUpwell />
      <TechStack />
      <Privacy />
      <GettingStarted />
      <IOSWaitlist />
      <CTA />
      <Footer />
    </>
  )
}
