import AccommodationCard from '../components/AccommodationCard'

const ROOMS = [
  {
    id: 1,
    name: 'The Terracotta Cottage',
    category: 'Luxury Suite',
    price: 8500,
    guests: 4,
    size: 1200,
    description: 'Spacious cottage with private garden, modern amenities, and panoramic farm views. Perfect for families or couples seeking comfort.',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
    ],
    features: [
      { icon: '🛏️', name: 'King Bed' },
      { icon: '🚿', name: 'Outdoor Shower' },
      { icon: '🔥', name: 'Fireplace' },
      { icon: '🚶', name: 'Garden Access' },
    ],
  },
  {
    id: 2,
    name: 'The Sage Haven',
    category: 'Deluxe Room',
    price: 6500,
    guests: 2,
    size: 800,
    description: 'Intimate retreat with natural stone accents, heated outdoor shower, and morning light. Ideal for romantic getaways.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1521206395626-47416327f317?w=600&h=400&fit=crop',
    ],
    features: [
      { icon: '🛏️', name: 'Queen Bed' },
      { icon: '🌞', name: 'Sun Balcony' },
      { icon: '🛁', name: 'Soaking Tub' },
      { icon: '🍇', name: 'Vineyard View' },
    ],
  },
  {
    id: 3,
    name: 'The Orchard Nest',
    category: 'Premium Cabin',
    price: 7500,
    guests: 3,
    size: 950,
    description: 'Secluded wooden cabin nestled among fruit trees. Features skylights, wood-burning stove, and nature immersion.',
    images: [
      'https://images.unsplash.com/photo-1578683078519-33b393b2ef9f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1520932057307-b6cda1d40d1c?w=600&h=400&fit=crop',
    ],
    features: [
      { icon: '🛏️', name: 'Twin Beds' },
      { icon: '🌲', name: 'Forest Views' },
      { icon: '☕', name: 'Coffee Bar' },
      { icon: '📚', name: 'Library Nook' },
    ],
  },
  {
    id: 4,
    name: 'The Bonfire Villa',
    category: 'Family Suite',
    price: 9500,
    guests: 6,
    size: 1400,
    description: 'Grand villa with multiple bedrooms, shared living spaces, and private bonfire pit. Perfect for group retreats and celebrations.',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45ac003cdd4d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1553881081-8d5b2be69f75?w=600&h=400&fit=crop',
    ],
    features: [
      { icon: '🛏️', name: 'Multiple Beds' },
      { icon: '👥', name: 'Shared Living' },
      { icon: '🍳', name: 'Full Kitchen' },
      { icon: '🔥', name: 'Bonfire Pit' },
    ],
  },
]

export default function Accommodations() {
  return (
    <section id="accommodations" className="py-20 px-4 bg-cream scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-terracotta mb-4">Our Collection</p>
          <h2 className="text-5xl font-serif font-bold text-dark-text mb-6">Thoughtfully Designed Accommodations</h2>
          <p className="text-xl text-light-text max-w-2xl mx-auto">
            Each room is a sanctuary, blending rustic charm with modern comfort in our sustainably built cottages and cabins.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROOMS.map((room) => (
            <div key={room.id} className="fade-on-scroll opacity-0">
              <AccommodationCard room={room} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-light-text mb-6">Can't decide? Our concierge team can help you find the perfect room.</p>
          <button className="bg-terracotta hover:bg-terracotta-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-2xl">
            Contact Our Concierge
          </button>
        </div>
      </div>
    </section>
  )
}
