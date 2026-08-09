export default function Farmhouse() {
  return (
    <section id="farmhouse" className="scroll-mt-16">
      {/* Header */}
      <div className="bg-cream py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Farmhouse Experiences</p>
          <h2 className="text-5xl font-serif font-bold text-dark-text mb-8">The Avni Farm Experience</h2>
          <p className="text-xl text-light-text leading-relaxed">
            Immerse yourself in authentic rural living where sustainability, comfort, and nature converge seamlessly.
          </p>
        </div>
      </div>

      {/* Section 1: Farm Stay */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-on-scroll opacity-0">
              <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Agritourism</p>
              <h3 className="text-4xl font-serif font-bold text-dark-text mb-6">Farm Stay & Rural Immersion</h3>
              <p className="text-lg text-light-text mb-6 leading-relaxed">
                Immerse yourself in rural living with breathtaking farmland views. Our sprawling estate features an outdoor shower
                surrounded by nature, a refreshing pool, and a luxurious hot tub.
              </p>
              <p className="text-lg text-light-text mb-8 leading-relaxed">
                Despite the rustic charm, enjoy all modern amenities including high-speed WiFi, LCD screens, and a game station for
                complete relaxation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-terracotta text-xl">🌄</span>
                  <span>Stunning farmland views</span>
                </li>
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-terracotta text-xl">🏊</span>
                  <span>Pool & hot tub access</span>
                </li>
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-terracotta text-xl">📶</span>
                  <span>High-speed WiFi</span>
                </li>
              </ul>
            </div>
            <div className="fade-on-scroll opacity-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=600&h=500&fit=crop"
                alt="Farm Stay"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Organic Food */}
      <div className="bg-sage text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-on-scroll opacity-0 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="/organic-food-package.jpg"
                alt="Organic Food"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="fade-on-scroll opacity-0 order-1 md:order-2">
              <p className="text-sm uppercase tracking-widest text-terracotta-light font-semibold mb-4">Culinary Journey</p>
              <h3 className="text-4xl font-serif font-bold mb-6">Farm-to-Table Dining</h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Savor farm-to-table dining at its finest. Every meal is prepared with freshly harvested, pesticide-free produce from our
                organic gardens.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                From farm vegetables to homemade breads and traditional recipes, each dish tells a story of sustainable farming and
                culinary passion.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-terracotta-light text-xl">🥕</span>
                  <span>Pesticide-free organic produce</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-terracotta-light text-xl">👨‍🍳</span>
                  <span>Traditional recipes & techniques</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-terracotta-light text-xl">🌾</span>
                  <span>Freshly harvested daily</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Rural Retreat */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-on-scroll opacity-0">
              <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Nature & Wellness</p>
              <h3 className="text-4xl font-serif font-bold text-dark-text mb-6">Rural Retreat & Tranquility</h3>
              <p className="text-lg text-light-text mb-6 leading-relaxed">
                Explore scenic walking trails through our lush farmland. Discover the tranquility of nature as you wander through gardens,
                meadows, and forest paths.
              </p>
              <p className="text-lg text-light-text mb-8 leading-relaxed">
                Perfect for meditation, nature photography, or simply disconnecting from the hustle and bustle of city life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-terracotta text-xl">🚶</span>
                  <span>Guided nature walks</span>
                </li>
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-terracotta text-xl">🧘</span>
                  <span>Meditation & yoga spaces</span>
                </li>
                <li className="flex items-center gap-3 text-light-text">
                  <span className="text-terracotta text-xl">📸</span>
                  <span>Nature photography trails</span>
                </li>
              </ul>
            </div>
            <div className="fade-on-scroll opacity-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/rural-retreat.png"
                alt="Rural Retreat"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
