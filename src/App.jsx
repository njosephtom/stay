import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InteractiveTour from './components/InteractiveTour'
import LuxuryHero from './sections/LuxuryHero'
import FeaturedExperience from './sections/FeaturedExperience'
import LuxuryRooms from './sections/LuxuryRooms'
import LuxuryDining from './sections/LuxuryDining'
import Shop from './sections/Shop'
import Contact from './sections/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Scroll spy - detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="min-h-screen bg-warm-cream">
      <Navbar activeSection={activeSection} />

      <main>
        <LuxuryHero />
        <FeaturedExperience />
        <InteractiveTour />
        <LuxuryRooms />
        <LuxuryDining />
        <Shop />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
