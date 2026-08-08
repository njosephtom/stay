import { useMemo } from 'react'

export default function Hotspot({ spot, currentRotation, isActive }) {
  const isVisible = useMemo(() => {
    const angle = spot.angle
    const current = currentRotation % 360
    const diff = Math.abs(current - angle)
    const wrappedDiff = Math.min(diff, 360 - diff)
    return wrappedDiff <= 60 // Show markers within 60 degrees of view
  }, [currentRotation, spot.angle])

  if (!isVisible) return null

  // Calculate horizontal position (0-360 maps to 0-100% of viewport width)
  const normalizedAngle = (spot.angle - currentRotation) % 360
  const adjustedAngle = normalizedAngle > 180 ? normalizedAngle - 360 : normalizedAngle

  // Map angle to screen position (-180 to 180 degrees maps to left to right)
  const screenXPercent = 50 + (adjustedAngle / 180) * 50

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      style={{
        left: `${screenXPercent}%`,
        top: '50%',
        opacity: isActive ? 1 : 0.6,
        transition: 'opacity 0.3s ease',
      }}
    >
      {/* Hotspot Marker */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Pulse Circle */}
        {isActive && (
          <div className="absolute inset-0 bg-sage rounded-full animate-pulse opacity-30" />
        )}

        {/* Main Circle */}
        <button
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
            isActive ? 'bg-sage text-white scale-125 shadow-lg' : 'bg-white/80 text-sage hover:bg-white hover:scale-110'
          }`}
          title={spot.label}
        >
          📍
        </button>

        {/* Label (show on hover/active) */}
        {isActive && (
          <div className="absolute top-full mt-2 bg-white text-dark-text px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shadow-lg animate-fadeIn">
            {spot.label}
          </div>
        )}
      </div>
    </div>
  )
}
