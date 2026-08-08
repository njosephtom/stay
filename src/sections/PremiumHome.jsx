import { useEffect, useRef } from 'react'
import BookingWidget from '../components/BookingWidget'
import AmenityCard from '../components/AmenityCard'

const AMENITIES = [
  {
    icon: '📶',
    title: 'High-Speed WiFi',
    description: 'Stay connected with premium internet throughout the property',
  },
  {
    icon: '🍽️',
    title: 'Farm-to-Table Meals',
    description: 'Organic produce harvested fresh from our gardens daily',
  },
  {
    icon: '🐕',
    title: 'Pet-Friendly',
    description: 'Bring your furry friends for a countryside adventure',
  },
  {
    icon: '🚶',
    title: 'Guided Farm Walks',
    description: 'Explore scenic trails with expert naturalist guides',
  },
  {
    icon: '🔥',
    title: 'Bonfire Evenings',
    description: 'Gather under the stars for storytelling and s\'mores',
  },
  {
    icon: '🧘',
    title: 'Yoga & Wellness',
    description: 'Morning yoga sessions overlooking the meadows',
  },
  {
    icon: '🏊',
    title: 'Pool & Hot Tub',
    description: 'Relax in our heated pool and luxury spa facilities',
  },
  {
    icon: '🎨',
    title: 'Pottery Workshop',
    description: 'Learn traditional craft techniques from resident artisans',
  },
]

export default function PremiumHome() {
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="home" className="scroll-mt-16">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-text">
        {/* Background Video/Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1600&h=900&fit=crop)',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="mb-6 fade-on-scroll opacity-0">
            <p className="text-sm md:text-base font-sans font-semibold tracking-widest uppercase text-terracotta-light">
              Premium Farm Retreat
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 fade-on-scroll opacity-0 leading-tight">
            Escape to Nature
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 fade-on-scroll opacity-0 max-w-2xl mx-auto font-light">
            Experience authentic farm living in our sustainably designed cottages. Disconnect from the digital world and reconnect with
            what matters.
          </p>

          <div className="fade-on-scroll opacity-0">
            <button className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-2xl">
              Explore Our Rooms
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white text-2xl">↓</div>
      </div>

      {/* Booking Widget - Positioned over hero edge */}
      <div className="relative bg-cream px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Booking Widget Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-on-scroll opacity-0">
              <h2 className="text-5xl font-serif font-bold text-dark-text mb-6">Plan Your Getaway</h2>
              <p className="text-lg text-light-text mb-6 leading-relaxed">
                Check availability for your dream farm retreat. Our booking system is simple, transparent, and designed for your convenience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-2xl">✓</span>
                  <span>Best price guarantee</span>
                </li>
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-2xl">✓</span>
                  <span>Free cancellation up to 7 days</span>
                </li>
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-2xl">✓</span>
                  <span>Instant confirmation</span>
                </li>
              </ul>
            </div>

            <div className="fade-on-scroll opacity-0">
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Grid */}
      <div className="bg-dark-text text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-on-scroll opacity-0">
            <p className="text-sm font-semibold tracking-widest uppercase text-terracotta-light mb-4">World-Class Facilities</p>
            <h2 className="text-5xl font-serif font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover premium amenities designed to enhance your countryside escape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="fade-on-scroll opacity-0" style={{ animationDelay: `${idx * 100}ms` }}>
                <AmenityCard icon={amenity.icon} title={amenity.title} description={amenity.description} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-cream py-20 px-4">
        <div className="max-w-7xl mx-auto text-center fade-on-scroll opacity-0">
          <h2 className="text-4xl font-serif font-bold text-dark-text mb-12">Trusted by Guests Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-terracotta mb-2">4.9★</div>
              <p className="text-light-text">Average Rating from 500+ reviews</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-terracotta mb-2">10K+</div>
              <p className="text-light-text">Happy guests from 45 countries</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-terracotta mb-2">98%</div>
              <p className="text-light-text">Would recommend to a friend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
