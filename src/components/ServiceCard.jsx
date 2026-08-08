export default function ServiceCard({ number, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-3xl font-serif font-bold text-soft-blue-dark mb-3">
        {String(number).padStart(2, '0')}
      </div>
      <h4 className="text-xl font-serif font-semibold text-dark-text mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
