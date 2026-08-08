import { useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [priceRange, setPriceRange] = useState(5000)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    { id: 1, name: 'Ceramic Flower Vase', price: 2500, image: '/vase.jpg', category: 'pottery', badge: 'Best Seller' },
    { id: 2, name: 'Minimalist Tote Bag', price: 1800, image: '/tote-bag.jpg', category: 'textile', badge: 'New' },
    { id: 3, name: 'Hydrating Eye Serum', price: 3200, image: '/eye-serum.jpg', category: 'wellness', badge: null },
    { id: 4, name: 'Knitted Golf Sweater', price: 4500, image: '/sweater.jpg', category: 'clothing', badge: 'Sale' },
    { id: 5, name: 'Round Eyeglasses', price: 3800, image: '/eyeglasses.jpg', category: 'accessories', badge: null },
    { id: 6, name: 'Solid Wood Chair', price: 5500, image: '/chair.jpg', category: 'furniture', badge: 'New' },
    { id: 7, name: 'Organic Cotton Pillowcase', price: 1200, image: '/pillowcase.jpg', category: 'textile', badge: null },
    { id: 8, name: 'Hand-thrown Coffee Mug', price: 800, image: '/mug.jpg', category: 'pottery', badge: 'Best Seller' },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesPrice = product.price <= priceRange
    return matchesCategory && matchesPrice
  })

  return (
    <section id="shop" className="py-20 px-4 bg-cream scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Handcrafted Collection</p>
          <h2 className="text-5xl font-serif font-bold text-dark-text mb-6">Artisan Shop</h2>
          <p className="text-xl text-light-text max-w-2xl mx-auto">
            Discover our curated selection of handcrafted and artisan products from local creators
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="font-serif font-bold text-lg mb-6 text-dark-text">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-text mb-3">Category</h4>
                <div className="space-y-2">
                  {['all', 'pottery', 'textile', 'clothing', 'accessories', 'furniture', 'wellness'].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="mr-2"
                      />
                      <span className="text-gray-700 capitalize">{cat === 'all' ? 'All Products' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold text-dark-text mb-3">Price Range</h4>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-gray-600 text-sm mt-2">Up to ₹{priceRange}</p>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  badge={product.badge}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this price range.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
