import BookingWidget from '../components/BookingWidget'

export default function LuxuryHero() {
  return (
    <section id="home" className="scroll-mt-16">
      {/* Main Hero - Full Width Image */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1920&h=1080&fit=crop)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content - Minimal & Centered */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6 leading-tight">Avni Farm</h1>
          <p className="text-2xl md:text-3xl font-light italic mb-12 tracking-wide">A Retreat Made For Your Pause</p>
          <button className="text-lg font-serif tracking-widest uppercase hover:opacity-80 transition-opacity border-b-2 border-white pb-2">
            Discover More ↓
          </button>
        </div>
      </div>

      {/* Intro Section - Clean & Minimal */}
      <div className="bg-cream py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-serif text-dark-text leading-relaxed">
            Escape the ordinary. Avni Farm & Craft offers an authentic countryside retreat where sustainability meets luxury,
            and every moment invites you to pause, breathe, and reconnect with what truly matters.
          </p>
          <div className="mt-12 flex justify-center gap-12 text-dark-text">
            <div>
              <div className="text-4xl font-serif font-bold text-terracotta mb-2">12</div>
              <p className="text-sm uppercase tracking-widest font-light">Rooms & Cottages</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-terracotta mb-2">45+</div>
              <p className="text-sm uppercase tracking-widest font-light">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-terracotta mb-2">4.9★</div>
              <p className="text-sm uppercase tracking-widest font-light">Guest Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Widget Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Plan Your Stay</p>
              <h2 className="text-5xl font-serif font-bold text-dark-text mb-6">Find Your Perfect Escape</h2>
              <p className="text-lg text-light-text mb-8 leading-relaxed">
                Browse our curated collection of cottages and suites. Each space is designed for comfort, tranquility, and authentic
                farm living.
              </p>
              <ul className="space-y-4 text-light-text">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl mt-1">✓</span>
                  <span>Best rate guarantee on all direct bookings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl mt-1">✓</span>
                  <span>Free cancellation up to 7 days before arrival</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl mt-1">✓</span>
                  <span>24/7 concierge support for your peace of mind</span>
                </li>
              </ul>
            </div>

            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
