export default function TextImageBlock({ title, text, image, imageFirst = false }) {
  return (
    <div className={`flex flex-col ${imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-12`}>
      {/* Image */}
      <div className="w-full md:w-1/2 relative">
        <img src={image} alt={title} className="w-full h-80 object-cover rounded-lg" />
      </div>

      {/* Text Box with Green Overlay */}
      <div className="w-full md:w-1/2">
        <div className="bg-sage/10 border-l-4 border-sage p-6 rounded-lg">
          <h3 className="text-3xl font-serif font-bold text-sage mb-4">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  )
}
