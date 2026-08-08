export default function Hero({ title, subtitle, image, children, hasOverlay = false }) {
  return (
    <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />

      {/* Overlay */}
      {hasOverlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {title && (
          <h2 className="section-title text-white">{title}</h2>
        )}
        {subtitle && (
          <p className="text-lg text-white/90 mb-6">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  )
}
