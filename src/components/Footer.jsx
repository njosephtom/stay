export default function Footer() {
  return (
    <>
      <footer className="bg-dark-text text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 Avni Farm and Craft. All rights reserved.</p>
          <p className="text-sm text-gray-400">Powered by React + Tailwind CSS</p>
          <div className="flex gap-4 justify-center mt-4">
            <a href="#" className="hover:text-sage transition-colors">Twitter</a>
            <a href="#" className="hover:text-sage transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Floating Chat Bubble */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-sage text-white rounded-full flex items-center justify-center shadow-lg hover:bg-sage-light cursor-pointer transition-colors">
        💬
      </div>
    </>
  )
}
