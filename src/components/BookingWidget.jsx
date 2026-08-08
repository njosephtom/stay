import { useState } from 'react'

export default function BookingWidget({ floating = false }) {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Booking search:', formData)
    // In production, redirect to booking system
  }

  if (floating) {
    return (
      <div className="fixed bottom-6 right-6 z-40 max-w-sm">
        <div className="bg-white rounded-xl shadow-2xl p-6 backdrop-blur-sm border border-cream-dark">
          <h3 className="text-xl font-serif font-bold text-dark-text mb-4">Check Availability</h3>
          <form onSubmit={handleSearch} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-light-text mb-1">Check In</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-cream-dark rounded-lg text-sm focus:outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-light-text mb-1">Check Out</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-cream-dark rounded-lg text-sm focus:outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-light-text mb-1">Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-cream-dark rounded-lg text-sm focus:outline-none focus:border-terracotta"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-2 rounded-lg transition-colors"
            >
              Book Stay
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md">
      <h3 className="text-2xl font-serif font-bold text-dark-text mb-6">Check Availability</h3>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-light-text mb-2">Check In</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-light-text mb-2">Check Out</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-light-text mb-2">Number of Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-cream-dark rounded-lg focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
          >
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
        >
          Check Availability
        </button>
      </form>
      <p className="text-xs text-light-text text-center mt-4">Best rates guaranteed • Free cancellation up to 7 days</p>
    </div>
  )
}
