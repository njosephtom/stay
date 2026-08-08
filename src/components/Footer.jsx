export default function Footer() {
  return (
    <>
      <footer className="bg-dark-text text-white">
        {/* Main Footer */}
        <div className="py-20 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Brand */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Avni Farm & Craft</h3>
                <p className="text-sm text-white/70 mb-6">A premium farmstay retreat in the heart of nature.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-white/60 hover:text-terracotta transition-colors">Twitter</a>
                  <a href="#" className="text-white/60 hover:text-terracotta transition-colors">Instagram</a>
                  <a href="#" className="text-white/60 hover:text-terracotta transition-colors">Facebook</a>
                </div>
              </div>

              {/* Rooms */}
              <div>
                <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Accommodations</h4>
                <ul className="space-y-3 text-sm text-white/70">
                  <li><a href="#" className="hover:text-terracotta transition-colors">The Terracotta Cottage</a></li>
                  <li><a href="#" className="hover:text-terracotta transition-colors">The Sage Haven</a></li>
                  <li><a href="#" className="hover:text-terracotta transition-colors">The Orchard Nest</a></li>
                  <li><a href="#" className="hover:text-terracotta transition-colors">The Bonfire Villa</a></li>
                </ul>
              </div>

              {/* Experiences */}
              <div>
                <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Experiences</h4>
                <ul className="space-y-3 text-sm text-white/70">
                  <li><a href="#" className="hover:text-terracotta transition-colors">Wellness & Yoga</a></li>
                  <li><a href="#" className="hover:text-terracotta transition-colors">Farm Tours</a></li>
                  <li><a href="#" className="hover:text-terracotta transition-colors">Cooking Classes</a></li>
                  <li><a href="#" className="hover:text-terracotta transition-colors">Artisan Workshops</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Contact</h4>
                <ul className="space-y-3 text-sm text-white/70">
                  <li><a href="mailto:info@avni-farmstay.com" className="hover:text-terracotta transition-colors">info@avni-farmstay.com</a></li>
                  <li><a href="tel:+1-800-000-0000" className="hover:text-terracotta transition-colors">1-800-000-0000</a></li>
                  <li>Wayanad, Kerala<br/>India</li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                <p>&copy; 2024 Avni Farm and Craft. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-terracotta text-white rounded-full flex items-center justify-center shadow-lg hover:bg-terracotta-dark cursor-pointer transition-colors">
        💬
      </div>
    </>
  )
}
