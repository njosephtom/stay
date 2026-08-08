import { useState } from 'react'

export default function AccommodationCard({ room }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = room.images || [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image Gallery */}
      <div className="relative h-80 bg-gray-200 overflow-hidden group">
        <img
          src={images[currentImageIndex]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-dark-text/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {currentImageIndex + 1}/{images.length}
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-text p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-text p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark-text">{room.name}</h3>
            <p className="text-sm text-light-text mt-1">{room.category}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-terracotta">₹{room.price}</div>
            <p className="text-xs text-light-text">per night</p>
          </div>
        </div>

        <p className="text-light-text mb-4 line-clamp-2">{room.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-cream-dark">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">👥</span>
            <span className="text-light-text">{room.guests} Guests</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">📐</span>
            <span className="text-light-text">{room.size} sqft</span>
          </div>
          {room.features?.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span className="text-lg">{feature.icon}</span>
              <span className="text-light-text">{feature.name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 rounded-lg transition-colors">
          View Details & Book
        </button>
      </div>
    </div>
  )
}
