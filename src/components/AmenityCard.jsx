export default function AmenityCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-cream hover:bg-cream-dark/20 transition-colors duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h4 className="text-lg font-serif font-bold text-dark-text mb-2">{title}</h4>
      <p className="text-sm text-light-text">{description}</p>
    </div>
  )
}
