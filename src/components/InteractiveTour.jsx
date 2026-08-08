import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hotspot from './Hotspot'

gsap.registerPlugin(ScrollTrigger)

const HOTSPOTS = [
  {
    id: 'cottages',
    label: 'Cottages & Stay',
    angle: 0,
    image: 'https://images.unsplash.com/photo-1480074568153-71106d7bdeb1?w=400&h=300&fit=crop',
    description: 'Cozy cottages with modern amenities, stunning views, and authentic farmstay experience.',
  },
  {
    id: 'orchard',
    label: 'Organic Orchard',
    angle: 90,
    image: 'https://images.unsplash.com/photo-1488459716781-6818c6737d7b?w=400&h=300&fit=crop',
    description: 'Lush organic gardens with pesticide-free produce. Pick fresh fruit during your stay.',
  },
  {
    id: 'dining',
    label: 'Outdoor Dining & Bonfire',
    angle: 180,
    image: 'https://images.unsplash.com/photo-1540932974986-b06535e62000?w=400&h=300&fit=crop',
    description: 'Gather around our bonfire for farm-to-table dining under the stars.',
  },
  {
    id: 'relax',
    label: 'Relaxation Zone',
    angle: 270,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
    description: 'Yoga platform, pool, and hot tub for ultimate relaxation and wellness.',
  },
]

export default function InteractiveTour() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const rotationRef = useRef({ current: 0, target: 0 })
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragMode, setDragMode] = useState(false)
  const dragStartRef = useRef(0)

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: false })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x1a1a1a)
    camera.position.z = 0.1

    // Create sphere geometry for 360 view
    const geometry = new THREE.SphereGeometry(500, 64, 64)
    geometry.scale(-1, 1, 1) // Invert for proper 360 viewing

    // Load equirectangular image or use a color gradient
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load(
      'https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=2048&h=1024&fit=crop',
      () => {
        texture.encoding = THREE.sRGBColorSpace
      }
    )

    const material = new THREE.MeshBasicMaterial({ map: texture })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    sceneRef.current = scene

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth rotation interpolation
      rotationRef.current.current += (rotationRef.current.target - rotationRef.current.current) * 0.1

      // Rotate the sphere
      mesh.rotation.y = THREE.MathUtils.degToRad(rotationRef.current.current)

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    if (!containerRef.current || dragMode) return

    const ctx = gsap.context(() => {
      gsap.set(containerRef.current, { minHeight: '100vh' })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          // Map scroll progress (0-1) to rotation angle (0-360)
          rotationRef.current.target = self.progress * 360
        },
        pin: containerRef.current,
        markers: false,
      })

      ScrollTrigger.refresh()
    })

    return () => {
      ctx.revert()
    }
  }, [dragMode])

  // Detect active hotspot based on rotation (using RAF for smooth updates)
  useEffect(() => {
    let animationFrameId
    const checkHotspot = () => {
      const currentAngle = rotationRef.current.current % 360
      const tolerance = 15 // degrees

      const active = HOTSPOTS.find((spot) => {
        const diff = Math.abs(currentAngle - spot.angle)
        const wrappedDiff = Math.min(diff, 360 - diff)
        return wrappedDiff <= tolerance
      })

      setActiveHotspot(active?.id || null)
      animationFrameId = requestAnimationFrame(checkHotspot)
    }

    animationFrameId = requestAnimationFrame(checkHotspot)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Touch drag handler
  const handleMouseDown = (e) => {
    if (!dragMode) return
    setIsDragging(true)
    dragStartRef.current = e.clientX
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !dragMode) return

    const delta = e.clientX - dragStartRef.current
    rotationRef.current.target += delta * 0.5
    dragStartRef.current = e.clientX
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <section
      ref={containerRef}
      id="tour"
      className="relative w-full h-screen bg-dark-text scroll-mt-16 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ cursor: dragMode && isDragging ? 'grabbing' : 'grab' }}
      />

      {/* Header */}
      <div className="absolute top-8 left-8 z-20 text-white">
        <h2 className="text-4xl font-serif font-bold mb-2">Explore Avni Stay</h2>
        <p className="text-lg text-gray-300">
          {dragMode ? 'Drag to explore • ' : 'Scroll to rotate • '}
          <span className="text-sage">{Math.round(rotationRef.current.current) % 360}°</span>
        </p>
      </div>

      {/* Drag Mode Toggle */}
      <button
        onClick={() => setDragMode(!dragMode)}
        className="absolute top-8 right-8 z-20 px-4 py-2 bg-sage hover:bg-sage-light text-white rounded-lg transition-colors text-sm font-medium"
      >
        {dragMode ? '📜 Scroll Mode' : '👆 Drag Mode'}
      </button>

      {/* Hotspots */}
      <div className="absolute inset-0 pointer-events-none">
        {HOTSPOTS.map((spot) => (
          <Hotspot
            key={spot.id}
            spot={spot}
            currentRotation={rotationRef.current.current}
            isActive={activeHotspot === spot.id}
          />
        ))}
      </div>

      {/* Active Hotspot Card */}
      {activeHotspot && (
        <div className="absolute bottom-8 left-8 z-30 max-w-sm animate-fadeIn pointer-events-auto">
          <div className="bg-white/95 backdrop-blur rounded-lg overflow-hidden shadow-2xl">
            {HOTSPOTS.find((s) => s.id === activeHotspot) && (
              <>
                <img
                  src={HOTSPOTS.find((s) => s.id === activeHotspot).image}
                  alt={HOTSPOTS.find((s) => s.id === activeHotspot).label}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-serif font-bold text-dark-text mb-2">
                    {HOTSPOTS.find((s) => s.id === activeHotspot).label}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {HOTSPOTS.find((s) => s.id === activeHotspot).description}
                  </p>
                  <button className="mt-4 w-full btn-primary text-sm">Learn More</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Instructions (mobile) */}
      <div className="absolute bottom-8 right-8 z-20 text-right text-white text-xs text-gray-400 pointer-events-none">
        <p>Scroll or drag to explore</p>
      </div>
    </section>
  )
}
