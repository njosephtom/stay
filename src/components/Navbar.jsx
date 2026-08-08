import { useState, useEffect } from 'react'

export default function Navbar({ activeSection }) {
  const [cartCount] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBooking, setShowBooking] = useState(false)

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Farmhouse', id: 'farmhouse' },
    { label: 'Shop', id: 'shop' },
    { label: 'Service', id: 'service' },
    { label: 'Contact Us', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-cream shadow-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo - Left */}
        <div className={`transition-all duration-300 ${isScrolled ? 'flex-shrink-0' : 'flex-1'}`}>
          <button onClick={() => scrollToSection('home')} className="text-left hover:opacity-80 transition-opacity">
            <h1 className={`font-serif font-bold text-dark-text transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl md:text-3xl'
            }`}>
              Avni Farm & Craft
            </h1>
            {!isScrolled && (
              <p className="text-xs italic text-light-text">Premium Farmstay Retreat</p>
            )}
          </button>
        </div>

        {/* Nav Links - Center (hidden on mobile) */}
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-medium transition-all duration-300 text-sm ${
                activeSection === link.id
                  ? 'text-terracotta border-b-2 border-terracotta'
                  : 'text-light-text hover:text-terracotta'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right - Book Now Button & Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className={`hidden sm:block font-bold transition-all duration-300 py-2 px-4 rounded-lg ${
              isScrolled
                ? 'bg-terracotta text-white text-sm'
                : 'bg-terracotta/10 text-terracotta text-sm md:text-base md:px-6 md:py-2'
            }`}
          >
            Book Now
          </button>
          <button className="text-xl hover:text-terracotta transition-colors">👤</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-2xl hover:text-terracotta transition-colors">☰</button>
        </div>
      </div>
    </nav>
  )
}
