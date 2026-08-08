export default function TestimonialCard({ quote, author, image }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="flex items-center gap-3">
        {image && (
          <img src={image} alt={author} className="w-10 h-10 rounded-full object-cover" />
        )}
        <p className="font-serif font-semibold text-dark-text">{author}</p>
      </div>
    </div>
  )
}
