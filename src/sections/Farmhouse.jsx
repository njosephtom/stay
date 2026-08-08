import TextImageBlock from '../components/TextImageBlock'

export default function Farmhouse() {
  return (
    <section id="farmhouse" className="py-16 px-4 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">Experience the Farmhouse</h2>

        <TextImageBlock
          title="Farm Stay & Agritourism"
          text="Immerse yourself in rural living with breathtaking farmland views. Our sprawling estate features an outdoor shower surrounded by nature, a refreshing pool, and a luxurious hot tub. Despite the rustic charm, enjoy all modern amenities including high-speed WiFi, LCD screens, and a game station for relaxation."
          image="https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=600&h=400&fit=crop"
          imageFirst={false}
        />

        <TextImageBlock
          title="Organic Food Experience"
          text="Savor farm-to-table dining at its finest. Every meal is prepared with freshly harvested, pesticide-free produce from our organic gardens. From farm vegetables to homemade breads and traditional recipes, each dish tells a story of sustainable farming and culinary passion."
          image="https://images.unsplash.com/photo-1488459716781-6818c6737d7b?w=600&h=400&fit=crop"
          imageFirst={true}
        />

        <TextImageBlock
          title="Rural Retreat & Nature"
          text="Explore scenic walking trails through our lush farmland. Discover the tranquility of nature as you wander through gardens, meadows, and forest paths. Perfect for meditation, nature photography, or simply disconnecting from the hustle and bustle of city life."
          image="https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=400&fit=crop"
          imageFirst={false}
        />
      </div>
    </section>
  )
}
