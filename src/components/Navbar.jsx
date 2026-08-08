import { useState, useEffect } from 'react'

export default function Navbar({ activeSection }) {
  const [cartCount] = useState(0)

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Farmhouse', id: 'farmhouse' },
    { label: 'Shop', id: 'shop' },
    { label: 'Service', id: 'service' },
    { label: 'Contact Us', id: 'contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-warm-cream shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between md:justify-center md:relative">
        {/* Nav Links - Left side on desktop, hidden on mobile until we add menu */}
        <div className="hidden md:flex gap-6 absolute left-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-sage border-b-2 border-sage'
                  : 'text-dark-text hover:text-sage'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Logo/Title - Center */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-dark-text">
            Avni Farm and Craft
          </h1>
          <p className="text-xs italic text-gray-600">Farmhouse Vacation Rental</p>
        </div>

        {/* Right Icons */}
        <div className="flex gap-4 absolute right-4">
          <button className="text-2xl hover:text-sage transition-colors">👤</button>
          <div className="relative">
            <button className="text-2xl hover:text-sage transition-colors">🛒</button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-sage text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle - shown on small screens */}
        <div className="md:hidden absolute left-4">
          <button className="text-xl">☰</button>
        </div>
      </div>
    </nav>
  )
}
