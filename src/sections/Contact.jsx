import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-cream scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-terracotta text-white py-16 rounded-2xl mb-16 text-center shadow-lg">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-white/90">We'd love to hear from you. Reach out with any questions!</p>
        </div>

        {/* Intro */}
        <div className="text-center mb-16 fade-on-scroll opacity-0">
          <p className="text-xl text-light-text max-w-3xl mx-auto mb-4 leading-relaxed">
            At Avni Farm and Craft, we believe in fostering genuine connections through sustainable living. Whether you're looking for a
            peaceful retreat or simply want to experience authentic farm-to-table dining, we're here to make it unforgettable.
          </p>
          <p className="text-light-text">
            Write to us at <span className="font-semibold text-terracotta">info@avni-farmstay.com</span> or fill out the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Quote Section */}
        <div className="bg-sage text-white p-12 rounded-2xl mb-16 border-l-4 border-terracotta shadow-lg fade-on-scroll opacity-0">
          <p className="text-2xl font-serif italic mb-6 leading-relaxed">
            "We are the heart and soul behind Avni Farm Stay. Our mission is to create meaningful experiences that celebrate the beauty
            of rural living, sustainable agriculture, and genuine hospitality."
          </p>
          <p className="text-terracotta-light font-serif text-xl">— The Avni Family</p>
        </div>

        {/* Couple Photo */}
        <div className="mb-16 text-center fade-on-scroll opacity-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            alt="The Avni Family"
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-terracotta"
          />
          <p className="text-light-text mt-4 italic">Meet the heart behind Avni</p>
        </div>

        {/* Map & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 fade-on-scroll opacity-0">
            <iframe
              title="Avni Farm Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.3891969316403!2d76.406!3d11.526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bb27ad8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sWayanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-10 rounded-2xl shadow-lg fade-on-scroll opacity-0">
            <h3 className="text-3xl font-serif font-bold text-dark-text mb-8">Contact Us</h3>

            <div className="mb-8 pb-8 border-b border-cream-dark">
              <h4 className="font-semibold text-dark-text mb-3 text-lg">Address</h4>
              <p className="text-light-text leading-relaxed">
                Avni Farm and Craft<br />
                Wayanad, Kerala 673591<br />
                India
              </p>
            </div>

            <div className="mb-8 pb-8 border-b border-cream-dark">
              <h4 className="font-semibold text-dark-text mb-3 text-lg">Email</h4>
              <p>
                <a href="mailto:info@avni-farmstay.com" className="text-terracotta hover:text-terracotta-dark font-semibold transition-colors">
                  info@avni-farmstay.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-dark-text mb-3 text-lg">Phone</h4>
              <p className="text-terracotta font-bold text-xl mb-2">1-800-000-0000</p>
              <p className="text-light-text text-sm">Available 24/7 for your inquiries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
