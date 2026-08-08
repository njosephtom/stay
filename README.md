# Avni Farm and Craft - Website

A beautiful, scroll-based single-page React website for "Avni Farm and Craft" — a farmstay and artisan craft retreat in Wayanad, Kerala.

## Features

✨ **Responsive Design** — Mobile-first approach, beautiful on all screen sizes  
✨ **Smooth Scroll Navigation** — Sticky navbar with scroll-spy active section highlighting  
✨ **Reusable Components** — Clean, modular React components for easy maintenance  
✨ **Tailwind CSS Styling** — Elegant, calm aesthetic with sage green, soft blue, and warm cream palette  
✨ **Typography** — Playfair Display for headings, Inter for body text  
✨ **Product Shop** — Filterable product grid with price range and category filters  
✨ **Contact Form** — Functional contact form for guest inquiries  
✨ **Floating Chat Icon** — Fixed chat bubble for customer support  

## Sections

1. **Home** — Hero image with welcome card + guest testimonials grid
2. **Farmhouse** — Alternating text/image blocks describing farm stay, organic food, and nature experiences
3. **Shop** — Product grid with sidebar filters (price range, category)
4. **Service** — Service offerings with hero banner and numbered service cards
5. **Contact** — Contact form, map embed, contact details, and quote from the owners

## Tech Stack

- **React 18** — Functional components with hooks
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Intersection Observer API** — Scroll-spy navigation (no external deps needed)

## Installation & Setup

### Prerequisites
- Node.js (v14+) and npm/yarn

### Steps

1. **Clone/Open the repo**
   ```bash
   cd stay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start dev server**
   ```bash
   npm run dev
   ```
   Opens automatically at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output in `dist/` folder

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx       # Sticky nav with scroll-spy
│   ├── Hero.jsx         # Hero section wrapper
│   ├── TestimonialCard.jsx
│   ├── TextImageBlock.jsx
│   ├── ProductCard.jsx
│   ├── ServiceCard.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── sections/            # Page sections
│   ├── Home.jsx
│   ├── Farmhouse.jsx
│   ├── Shop.jsx
│   ├── Service.jsx
│   └── Contact.jsx
├── App.jsx              # Main app with scroll-spy logic
├── main.jsx             # React entry point
└── index.css            # Tailwind + custom animations
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color palette:
```javascript
colors: {
  'sage': '#4a5d47',           // Primary green
  'soft-blue': '#b8d4e8',      // Soft blue
  'warm-cream': '#f5f1ed',     // Off-white background
  // ... more colors
}
```

### Images
Replace placeholder images (Unsplash URLs) with your own:
- Farm house exterior
- Pottery-making hands
- Harvested vegetables
- Couple outdoors
- Product photos

### Text Content
Update section content directly in the component files:
- Testimonials in `Home.jsx`
- Service descriptions in `Service.jsx`
- Products in `Shop.jsx`

### Contact Details
Update email, phone, and address in `Contact.jsx`

## Features Explained

### Scroll-Spy Navigation
The navbar highlights the active section as you scroll. Uses the Intersection Observer API:
- Observes all section elements
- Detects when they cross the viewport center
- Updates active state in real-time

### Product Filtering
Shop section includes:
- **Price range slider** — Filter by budget
- **Category filter** — Browse pottery, textile, clothing, etc.
- **Badges** — "Best Seller", "New", "Sale" tags on products

### Smooth Scrolling
CSS `scroll-behavior: smooth` + React anchor navigation provides fluid scrolling between sections.

### Responsive Layout
- Mobile: Stacked layout, hidden desktop-only elements
- Tablet: 2-column grids, adjusted spacing
- Desktop: 3–4 column grids, full sidebar filters

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge ✓
- Firefox ✓
- Safari ✓
- Mobile (iOS/Android) ✓

## Performance

- **No external animation libraries** — Uses CSS `@keyframes` for fade-ins
- **Lightweight** — Minimal dependencies (React + Tailwind only)
- **Fast builds** — Vite enables instant HMR during development
- **Optimized images** — Unsplash URLs are responsive by default

## Future Enhancements

- Add email notifications for contact form submissions
- Implement admin panel for product management
- Add blog/blog section for farm updates
- Booking system integration
- User account/wishlist feature
- Image gallery with lightbox
- Testimonial submission form

## License

© 2024 Avni Farm and Craft. All rights reserved.

---

**Built with ❤️ using React + Tailwind CSS**
