export default function LuxuryRooms() {
  const rooms = [
    {
      id: 1,
      name: 'The Terracotta Cottage',
      tagline: 'Luxury & Space',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      features: ['King Bed', 'Outdoor Shower', 'Private Garden', 'Fireplace'],
    },
    {
      id: 2,
      name: 'The Sage Haven',
      tagline: 'Intimacy & Romance',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      features: ['Queen Bed', 'Stone Accents', 'Soaking Tub', 'Vineyard View'],
    },
    {
      id: 3,
      name: 'The Orchard Nest',
      tagline: 'Nature & Solitude',
      price: 7500,
      image: 'https://images.unsplash.com/photo-1578683078519-33b393b2ef9f?w=800&h=600&fit=crop',
      features: ['Twin Beds', 'Forest Views', 'Wood Stove', 'Library Nook'],
    },
    {
      id: 4,
      name: 'The Bonfire Villa',
      tagline: 'Gathering & Joy',
      price: 9500,
      image: 'https://images.unsplash.com/photo-1570129477492-45ac003cdd4d?w=800&h=600&fit=crop',
      features: ['Multiple Beds', 'Full Kitchen', 'Bonfire Pit', 'Group Spaces'],
    },
  ]

  return (
    <section id="accommodations" className="bg-cream py-32 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Our Collection</p>
          <h2 className="text-6xl font-serif font-bold text-dark-text mb-8">A Room to Remember</h2>
          <p className="text-xl text-light-text leading-relaxed">
            Each cottage and suite is thoughtfully designed to offer sanctuary. From romantic hideaways to spacious family villas, every
            room tells a story of comfort, sustainability, and understated elegance.
          </p>
        </div>

        {/* Rooms Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Featured Room - Large */}
          <div className="md:row-span-2 group overflow-hidden rounded-2xl shadow-lg">
            <div className="relative h-96 md:h-full overflow-hidden bg-gray-200">
              <img
                src={rooms[0].image}
                alt={rooms[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <p className="text-sm uppercase tracking-widest text-terracotta-light font-semibold mb-2">{rooms[0].tagline}</p>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">{rooms[0].name}</h3>
                <p className="text-white/90 text-sm mb-4">₹{rooms[0].price} per night</p>
              </div>
            </div>
          </div>

          {/* Other Rooms - Grid */}
          {rooms.slice(1, 4).map((room) => (
            <div key={room.id} className="group overflow-hidden rounded-2xl shadow-lg h-80">
              <div className="relative h-full overflow-hidden bg-gray-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <p className="text-xs uppercase tracking-widest text-terracotta-light font-semibold mb-2">{room.tagline}</p>
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{room.name}</h3>
                  <p className="text-white/90 text-sm">₹{room.price} per night</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="text-lg font-serif tracking-widest uppercase hover:opacity-80 transition-opacity border-b-2 border-dark-text pb-2 text-dark-text">
            View All Rooms →
          </button>
        </div>
      </div>
    </section>
  )
}
