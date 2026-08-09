import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Service() {
  const services = [
    {
      number: 1,
      title: 'Farm Stay Packages',
      description: 'Curated retreat packages combining accommodation, meals, and experiences tailored to your interests.',
    },
    {
      number: 2,
      title: 'Pottery Workshops',
      description: 'Learn traditional pottery techniques from our resident artisans in our fully equipped studio.',
    },
    {
      number: 3,
      title: 'Farm-to-Table Dining',
      description: 'Enjoy authentic meals prepared with organic produce harvested fresh from our gardens.',
    },
    {
      number: 4,
      title: 'Wellness & Yoga',
      description: 'Start your day with guided yoga sessions amidst nature and serene farmland views.',
    },
    {
      number: 5,
      title: 'Nature Walks & Trails',
      description: 'Explore our extensive walking trails through orchards, gardens, and natural forests.',
    },
    {
      number: 6,
      title: 'Artisan Craft Sessions',
      description: 'Participate in weaving, dyeing, and other traditional craft activities with expert guidance.',
    },
  ]

  return (
    <section id="service" className="scroll-mt-16">
      {/* Hero Banner */}
      <div className="bg-sage text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Main Image */}
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7cde29f270c7?w=600&h=500&fit=crop"
                alt="Pottery Making"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Small Offset Image + Text */}
            <div className="md:w-1/2">
              <div className="mb-6">
                <img
                  src="/soil-hands.jpg"
                  alt="Soil and Hands"
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <p className="text-white text-lg leading-relaxed">
                Discover the magic of handcrafted experiences. From pottery and weaving to farm walks and wellness sessions,
                our services are designed to reconnect you with nature and traditional crafts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Our Services</p>
            <h3 className="text-5xl font-serif font-bold text-dark-text">What We Offer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
