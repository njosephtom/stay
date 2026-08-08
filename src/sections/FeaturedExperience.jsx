export default function FeaturedExperience() {
  return (
    <section className="bg-sage py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative h-96 md:h-[500px] -ml-4 md:ml-0">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=700&fit=crop"
              alt="Wellness Experience"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-12 -right-12 bg-white rounded-2xl p-8 shadow-2xl max-w-xs">
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">Featured</p>
              <h3 className="text-2xl font-serif font-bold text-dark-text mb-3">Spa and Soaking</h3>
              <p className="text-sm text-light-text">Immerse yourself in wellness. Our heated pools and natural hot tubs offer the perfect setting for renewal.</p>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="text-white">
            <p className="text-sm uppercase tracking-widest font-semibold mb-6">The Avni Experience</p>
            <h2 className="text-6xl font-serif font-bold mb-8 leading-tight">Wellness & Nature</h2>
            <p className="text-xl font-light mb-8 leading-relaxed">
              Discover a sanctuary where wellness, nature, and authentic hospitality converge. Our curated experiences blend
              relaxation, learning, and renewal in the heart of the countryside.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h4 className="text-lg font-serif font-bold mb-2">Morning Yoga Sessions</h4>
                <p className="text-white/80 text-sm">Start your day with guided yoga overlooking the farm meadows and gardens.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold mb-2">Farm-to-Table Dining</h4>
                <p className="text-white/80 text-sm">Savor meals prepared from produce harvested moments before your meal.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold mb-2">Guided Nature Walks</h4>
                <p className="text-white/80 text-sm">Explore trails through organic orchards and pristine forest with expert naturalists.</p>
              </div>
            </div>

            <button className="text-lg font-serif tracking-widest uppercase hover:opacity-80 transition-opacity border-b-2 border-white pb-2">
              Explore All Experiences →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
