export default function LuxuryDining() {
  return (
    <section id="dining" className="bg-white py-32 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Culinary Journey</p>
          <h2 className="text-6xl font-serif font-bold text-dark-text mb-8">Comfort Food with a View</h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Text Content */}
          <div>
            <p className="text-lg text-light-text mb-8 leading-relaxed">
              Our chefs craft menus using produce harvested moments before your meal. Every dish celebrates sustainability, tradition, and
              the authentic flavors of the region. From morning yoga to evening campfires, meals at Avni are moments of connection.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-dark-text mb-2">Seasonal Menus</h3>
                <p className="text-light-text">Designed around what's freshest. Our gardens, orchards, and local farmers guide our menu planning.</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-dark-text mb-2">Cooking Classes</h3>
                <p className="text-light-text">Learn traditional recipes and modern techniques from our resident culinary team.</p>
              </div>
            </div>

            <button className="mt-12 text-lg font-serif tracking-widest uppercase hover:opacity-80 transition-opacity border-b-2 border-dark-text pb-2">
              Learn More →
            </button>
          </div>

          {/* Right - Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop"
              alt="Farm Fresh"
              className="rounded-2xl h-64 object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
              alt="Dining"
              className="rounded-2xl h-64 object-cover shadow-lg mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
              alt="Cooking"
              className="rounded-2xl h-64 object-cover shadow-lg mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop"
              alt="Harvest"
              className="rounded-2xl h-64 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="rounded-2xl overflow-hidden h-96 md:h-[500px] mb-20">
          <img
            src="https://images.unsplash.com/photo-1540932974986-b06535e62000?w=1200&h=600&fit=crop"
            alt="Bonfire Dining"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Quote */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-3xl font-serif italic text-dark-text mb-4">
            "Every meal is a celebration of the land, the seasons, and the connections we make around the table."
          </p>
          <p className="text-sm uppercase tracking-widest text-light-text">— The Avni Team</p>
        </div>
      </div>
    </section>
  )
}
