import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-warm-cream scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-soft-blue-dark text-white py-12 rounded-lg mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase">Get In Touch</h2>
          <p className="text-lg mt-4">We'd love to hear from you. Reach out with any questions!</p>
        </div>

        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            At Avni Farm and Craft, we believe in fostering genuine connections through sustainable living and traditional crafts.
            Whether you're looking for a peaceful retreat, eager to learn artisan skills, or simply want to experience authentic
            farm-to-table dining, we're here to make it unforgettable.
          </p>
          <p className="text-gray-600">
            Write to us at <span className="font-semibold">info@avni-farmstay.com</span> or fill out the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Quote Section */}
        <div className="bg-soft-blue/30 p-8 rounded-lg mb-12 border-l-4 border-sage">
          <p className="text-xl font-serif italic text-gray-800 mb-4">
            "We are the heart and soul behind Avni Farm Stay. Our mission is to create meaningful experiences that celebrate
            the beauty of rural living, sustainable agriculture, and the timeless art of traditional crafts."
          </p>
          <p className="text-sage font-script text-2xl">— The Avni Family</p>
        </div>

        {/* Couple Photo */}
        <div className="mb-12 text-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            alt="The Avni Family"
            className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg"
          />
        </div>

        {/* Map & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-dark-text mb-6">Contact Information</h3>

            <div className="mb-6">
              <h4 className="font-semibold text-dark-text mb-2">Address</h4>
              <p className="text-gray-600">
                Avni Farm and Craft<br />
                Wayanad, Kerala 673591<br />
                India
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-dark-text mb-2">Email</h4>
              <p className="text-gray-600">
                <a href="mailto:info@avni-farmstay.com" className="text-sage hover:underline">
                  info@avni-farmstay.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-dark-text mb-2">Phone</h4>
              <p className="text-sage font-bold text-lg">1-800-000-0000</p>
              <p className="text-gray-600 text-sm">Any questions? Call us anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
