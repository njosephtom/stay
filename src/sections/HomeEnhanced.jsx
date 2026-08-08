import { useEffect } from 'react'
import BookingWidget from '../components/BookingWidget'

export default function HomeEnhanced() {
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
      {/* Hero Section with Farmhouse Image - Blurred Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1920&h=1080&fit=crop)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'blur(8px) brightness(0.5)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6">Avni Farm</h1>
          <p className="text-2xl md:text-3xl font-light italic mb-8">Escape the Hustle, Embrace Nature</p>
          <button className="text-lg font-serif tracking-widest uppercase hover:opacity-80 transition-opacity border-b-2 border-white pb-2">
            Discover →
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white text-2xl">↓</div>
      </div>

      {/* Featured Farmhouse Image */}
      <div className="bg-cream py-0 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] fade-on-scroll opacity-0 mb-20">
            <img
              src="https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1200&h=600&fit=crop"
              alt="Avni Farmhouse"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-cream py-24 px-4">
        <div className="max-w-4xl mx-auto text-center fade-on-scroll opacity-0">
          <h2 className="text-5xl font-serif font-bold text-dark-text mb-8">Welcome to Avni Farm Stay</h2>
          <p className="text-lg text-light-text leading-relaxed mb-8">
            We are thrilled to have you here. Our farm stay offers a unique experience where you can stay on our working farm and immerse
            yourself in rural life. Enjoy the tranquility and escape the urban hustle while being surrounded by nature. Our farm-to-table
            meals are the highlight of your stay. We take pride in serving fresh, organic food that is grown and raised right here on our
            farm. You'll savor the taste of pesticide-free, chemical-free ingredients that truly capture the essence of farm-fresh dining.
          </p>
          <p className="text-lg text-light-text leading-relaxed">
            Discover what sets us apart from others and how our dedication to organic practices shines through in every aspect of your stay.
          </p>
        </div>
      </div>

      {/* Booking Widget Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="fade-on-scroll opacity-0">
              <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Plan Your Stay</p>
              <h2 className="text-5xl font-serif font-bold text-dark-text mb-6">Book Your Farm Retreat</h2>
              <p className="text-lg text-light-text mb-8 leading-relaxed">
                Experience authentic farm living in our beautifully designed cottages. Each space offers comfort, nature immersion, and
                genuine hospitality.
              </p>
              <ul className="space-y-4 text-light-text">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl mt-1">✓</span>
                  <span>Best rates guaranteed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl mt-1">✓</span>
                  <span>Free cancellation up to 7 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl mt-1">✓</span>
                  <span>24/7 guest support</span>
                </li>
              </ul>
            </div>

            <div className="fade-on-scroll opacity-0">
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-soft-blue/30 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-dark-text text-center mb-16">Guest Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg fade-on-scroll opacity-0">
              <p className="text-gray-700 italic mb-6">
                "Unforgettable Farm Stay Experience! I couldn't have made a better choice than Avni. The peaceful surroundings and warm
                hospitality made my stay truly memorable."
              </p>
              <p className="font-serif font-bold text-dark-text">Sarah & Michael</p>
              <p className="text-sm text-terracotta">★★★★★</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg fade-on-scroll opacity-0">
              <p className="text-gray-700 italic mb-6">
                "Charming Farmhouse Retreat! Avni provided the perfect setting for our honeymoon. The picturesque farm, delicious organic
                meals, and attentive staff made it an unforgettable experience."
              </p>
              <p className="font-serif font-bold text-dark-text">Priya & Ravi</p>
              <p className="text-sm text-terracotta">★★★★★</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg fade-on-scroll opacity-0">
              <p className="text-gray-700 italic mb-6">
                "Tranquil Oasis in the Countryside! Avni felt like a 'home away from home'. The serene ambiance, comfortable accommodations,
                and farm-fresh dining made our stay exceptional."
              </p>
              <p className="font-serif font-bold text-dark-text">Emma & David</p>
              <p className="text-sm text-terracotta">★★★★★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
