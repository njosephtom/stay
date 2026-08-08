# Interactive 360° Farm Tour — Technical Documentation

## Overview

The "Explore Avni Stay" interactive tour is a scroll-driven, 360-degree panoramic experience showcasing key locations at the farm. Users can scroll to rotate a Three.js sphere displaying an equirectangular farm image, with hotspot markers revealing details about different areas as they scroll past them.

## Architecture

### Components

#### **InteractiveTour.jsx** (Main Component)
- Sets up Three.js scene with rotating sphere geometry
- Manages GSAP ScrollTrigger pinning and scroll-to-rotation mapping
- Handles drag mode toggle for alternative navigation
- Detects active hotspots in real-time using requestAnimationFrame
- Displays active hotspot info card

#### **Hotspot.jsx** (Individual Marker)
- Renders animated marker at hotspot location
- Shows pulse effect when active
- Calculates screen position based on current rotation angle
- Displays label tooltip when in view

### Key Technologies

| Tech | Purpose |
|------|---------|
| **Three.js** | 3D sphere rendering, texture mapping, camera control |
| **GSAP ScrollTrigger** | Pins section, maps scroll distance to rotation angle |
| **React Hooks** | State management for hotspot detection, drag mode |
| **Canvas API** | High-performance 3D rendering (via WebGL) |
| **Tailwind CSS** | Responsive UI, button styling, animations |

## How It Works

### 1. Scene Setup
```javascript
const geometry = new THREE.SphereGeometry(500, 64, 64)
geometry.scale(-1, 1, 1) // Invert for interior viewing

const texture = textureLoader.load('farm-360-image.jpg')
const material = new THREE.MeshBasicMaterial({ map: texture })
const mesh = new THREE.Mesh(geometry, material)
```

- Creates an inverted sphere (camera inside looking outward)
- Loads equirectangular farm image (2048×1024 recommended)
- Sphere rotates on Y-axis based on scroll

### 2. Scroll-to-Rotation Mapping

```javascript
ScrollTrigger.create({
  trigger: containerRef,
  start: 'top center',
  end: 'bottom center',
  onUpdate: (self) => {
    // self.progress: 0–1 (start to end of scroll trigger)
    rotationRef.current.target = self.progress * 360
  },
  pin: containerRef, // Pin container while scrolling
})
```

**Flow:**
1. User scrolls into the tour section
2. ScrollTrigger calculates scroll progress (0–1)
3. Progress maps to rotation angle (0–360°)
4. Rotation interpolates smoothly via `requestAnimationFrame`

### 3. Hotspot Detection

Four hotspots positioned at key angles:
- **Cottages & Stay**: 0° (front)
- **Organic Orchard**: 90° (right)
- **Outdoor Dining & Bonfire**: 180° (back)
- **Relaxation Zone**: 270° (left)

Detection logic (runs at 60 FPS):
```javascript
const currentAngle = rotationRef.current.current % 360
const tolerance = 15 // degrees

const active = HOTSPOTS.find((spot) => {
  const diff = Math.abs(currentAngle - spot.angle)
  const wrappedDiff = Math.min(diff, 360 - diff) // Handle wraparound
  return wrappedDiff <= tolerance
})
```

When `wrappedDiff ≤ 15°`: hotspot is "active" → triggers animations and card display

### 4. Hotspot Rendering

Hotspots calculate screen position based on angular offset:
```javascript
const normalizedAngle = (spot.angle - currentRotation) % 360
const adjustedAngle = normalizedAngle > 180 ? normalizedAngle - 360 : normalizedAngle

// Map -180° to +180° to left-to-right screen position
const screenXPercent = 50 + (adjustedAngle / 180) * 50
```

- **-180° (far left)** → 0% from left
- **0° (center)** → 50% from left  
- **+180° (far right)** → 100% from left

### 5. Mobile/Touch Optimization

**Drag Mode:**
- Toggle button switches between scroll-driven and drag-driven interaction
- Mouse/touch drag moves sphere in real-time
- Smooth on-canvas feedback without lag

```javascript
const handleMouseMove = (e) => {
  if (!isDragging || !dragMode) return
  const delta = e.clientX - dragStartRef.current
  rotationRef.current.target += delta * 0.5 // Multiplier controls sensitivity
  dragStartRef.current = e.clientX
}
```

**Scroll Smoothing:**
- Rotation interpolates using `(target - current) * 0.1` per frame
- Creates inertia-like effect without jank
- Works seamlessly on mobile with momentum scrolling

## Hotspot Configuration

Edit `HOTSPOTS` array in `InteractiveTour.jsx`:

```javascript
const HOTSPOTS = [
  {
    id: 'cottages',
    label: 'Cottages & Stay',
    angle: 0,           // Degree position (0–360)
    image: 'url',       // Info card image
    description: '...',  // Card description
  },
  // ... more hotspots
]
```

**Adding a new hotspot:**
1. Add entry to `HOTSPOTS` array with unique `angle`
2. Hotspot automatically appears when camera rotates toward that angle
3. Card displays when within tolerance (±15°)

## Customization

### Change Equirectangular Image
```javascript
const texture = textureLoader.load('your-farm-panorama-2048x1024.jpg')
```

**Recommended specs:**
- Format: JPEG or PNG (2048×1024 minimum, 4096×2048 ideal)
- Equirectangular projection (not cubemap)
- Shot from center point looking 360° around

### Adjust Scroll Trigger Duration
Make rotation faster/slower by modifying scroll sensitivity:

```javascript
// Currently: full 360° rotation over entire scroll section
// To make 2 rotations: multiply by 2
rotationRef.current.target = self.progress * 720 // Two full rotations
```

### Modify Hotspot Tolerance
```javascript
const tolerance = 20 // Hotspot visible within ±20° (was 15°)
```

### Change Rotation Smoothing
```javascript
// Current: 0.1 interpolation factor
rotationRef.current.current += (rotationRef.current.target - rotationRef.current.current) * 0.1

// Faster response: increase to 0.15 or 0.2
// Slower/smoother: decrease to 0.05 or 0.07
```

## Performance Considerations

### Optimizations Already Implemented

✅ **Canvas rendering at window resolution** — No artificial scaling
✅ **Single sphere mesh** — Minimal geometry  
✅ **Texture encoding** — Proper sRGB color space
✅ **RAF-based hotspot detection** — No unnecessary re-renders
✅ **Smooth interpolation** — No per-frame state updates (only refs)
✅ **Drag mode disconnect** — ScrollTrigger disabled in drag mode to prevent conflicts

### Potential Bottlenecks

- **Large/unoptimized texture** → Preload and compress (use TinyPNG or similar)
- **Too many hotspots** → Visibility culling already built in (shows only within 60° of view)
- **Older devices** → Consider reducing sphere geometry segments (currently 64×64)

### Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full (WebGL 2.0) |
| Firefox | ✅ Full |
| Safari | ✅ Full (iOS 12+) |
| Mobile | ✅ Full (with drag mode) |

## Troubleshooting

### Sphere appears blank/black
- Check texture URL loads (open in browser)
- Verify equirectangular format (not cubemap)
- Check browser console for WebGL errors

### Hotspots disappear too early
- Increase `tolerance` in hotspot detection (line ~113)
- Or increase visibility range (line ~75 `isVisible` check)

### Rotation jittery/jumpy
- Reduce interpolation factor (multiply by lower value, e.g., 0.05)
- Check for scroll events firing too frequently

### Touch scroll not working smoothly
- Enable drag mode on mobile (toggle button in top-right)
- Ensure `scroll-behavior: smooth` in CSS

### ScrollTrigger conflicts with other animations
- Verify no competing GSAP timelines pinning the same element
- Call `ScrollTrigger.refresh()` after component mounts

## Future Enhancements

1. **360 Video Support** — Replace texture with streaming video
2. **Animated Hotspots** — CSS animations for markers
3. **Sound/Audio Zones** — Play ambient audio when rotating toward hotspot
4. **Mobile Gyroscope** — Use device orientation on mobile for immersive viewing
5. **Hotspot Analytics** — Track which hotspots users explore most
6. **Cubemap Presets** — Support alternative projection formats
7. **Zoom Capability** — FOV adjustment for closer/wider views
8. **Preset Rotations** — Buttons to jump to specific hotspot angles

## Credits

- **Three.js** — 3D engine
- **GSAP** — Animation and scroll handling
- **Tailwind CSS** — Responsive styling

---

**File Structure:**
```
src/
├── components/
│   ├── InteractiveTour.jsx    (Main tour logic)
│   └── Hotspot.jsx             (Marker rendering)
├── sections/
│   └── [other sections...]
└── index.css                   (Animations)
```

**Entry Point:** `InteractiveTour` imported in `App.jsx`, positioned after `Home` section
