export default function ProductCard({ name, price, image, badge }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
        {badge && (
          <div className="absolute top-2 right-2 bg-sage text-white px-3 py-1 rounded-full text-xs font-semibold">
            {badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-serif font-semibold text-dark-text mb-2">{name}</h4>
        <p className="text-sage text-lg font-bold">₹{price}</p>
      </div>
    </div>
  )
}
