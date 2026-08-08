import Hero from '../components/Hero'
import TestimonialCard from '../components/TestimonialCard'

export default function Home() {
  return (
    <section id="home" className="scroll-mt-16">
      {/* Hero Section */}
      <Hero
        image="https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1200&h=600&fit=crop"
        hasOverlay={true}
      >
        <div className="bg-soft-blue/80 px-8 py-8 rounded-lg max-w-2xl backdrop-blur-sm">
          <p className="text-lg text-dark-text mb-6 leading-relaxed">
            Escape the city and immerse yourself in the serene countryside. Experience authentic farm
            living with organic meals, nature walks, and the comfort of a modern farmhouse. Your perfect
            retreat awaits.
          </p>
          <button className="btn-primary">Book Now</button>
        </div>
      </Hero>

      {/* Testimonials Section */}
      <div className="bg-soft-blue/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Guest Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="A truly peaceful escape! The farm stay was magical. Waking up to nature, organic meals, and genuine hospitality made our honeymoon unforgettable."
              author="Sarah & Michael"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
            />
            <TestimonialCard
              quote="The pottery workshop and farm-to-table dining were highlights of our trip. Feeling connected to nature and learning traditional crafts was truly special."
              author="Ravi Patel"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
            />
            <TestimonialCard
              quote="Finally a place where time slows down. The fresh air, homemade food, and warm welcome made us feel like we're part of the family."
              author="Emma & David"
              image="https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=50&h=50&fit=crop"
            />
            <TestimonialCard
              quote="Best farm stay experience ever! Loved the pottery sessions, yoga at dawn, and the stunning garden views. Can't wait to return!"
              author="Priya Singh"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
