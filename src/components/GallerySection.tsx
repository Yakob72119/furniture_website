import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EthiopianBorderDecoration } from "./EthiopianPattern";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1675528030415-dc82908eeb73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjBjaGFpciUyMGRlc2lnbnxlbnwxfHx8fDE3NjI3OTgxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Addis Dining Chair",
    description: "Inspired by the highlands of Ethiopia",
    material: "Ethiopian Mahogany & Leather"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1680774445948-ec3614f7579b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwc29mYXxlbnwxfHx8fDE3NjI3OTgxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Tigray Executive Sofa",
    description: "Premium Italian leather meets solid teak",
    material: "Teak Wood & Italian Leather"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1589863089941-51eddece5107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHdvb2RlbiUyMHRhYmxlfGVufDF8fHx8MTc2Mjc5ODE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Lalibela Dining Table",
    description: "Celebrating Ethiopian natural wood grain",
    material: "Live Edge Acacia Wood"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1653579446323-88923f8d1b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmdXJuaXR1cmUlMjBkZXRhaWx8ZW58MXx8fHwxNzYyNzk4MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Axum Media Console",
    description: "Precision joinery with hidden storage",
    material: "Walnut & Brass Accents"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1586310520462-658e93388399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjI3NTI1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Harar Bed Frame",
    description: "Inspired by the walled city's elegance",
    material: "Solid Oak & Woven Details"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1705155472131-134f4b7403ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGFybWNoYWlyJTIwbW9kZXJufGVufDF8fHx8MTc2Mjc5ODE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Gondar Lounge Chair",
    description: "Royal comfort with modern refinement",
    material: "Velvet & Carved Hardwood"
  }
];

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-40 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 ethiopian-pattern" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="mb-6 text-accent tracking-[0.2em] uppercase text-sm">Our Collection</div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Masterpieces of
            <br />
            <span className="text-accent italic">Ethiopian Craftsmanship</span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-32">
              <EthiopianBorderDecoration />
            </div>
          </div>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            Each piece is a celebration of heritage and precision—handcrafted to bring 
            timeless elegance and cultural richness to your most cherished spaces.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative cursor-pointer"
            >
              {/* Card wrapper */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-700">
                {/* Image Container */}
                <div className="relative h-[450px] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Ethiopian corner decoration on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredId === item.id ? 1 : 0,
                      scale: hoveredId === item.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-6 right-6"
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M0 0 L40 0 L40 40" stroke="#d4af37" strokeWidth="2" />
                      <circle cx="0" cy="0" r="4" fill="#d4af37" />
                    </svg>
                  </motion.div>
                </div>

                {/* Content Overlay */}
                <motion.div
                  initial={false}
                  animate={{
                    y: hoveredId === item.id ? -10 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                >
                  <h3 
                    className="mb-2 text-2xl" 
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/80 mb-3 leading-relaxed" style={{ fontWeight: 300 }}>
                    {item.description}
                  </p>
                  
                  {/* Material info - appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredId === item.id ? 1 : 0,
                      height: hoveredId === item.id ? "auto" : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 mt-3 border-t border-accent/30">
                      <div className="text-xs tracking-wider uppercase text-accent mb-1">Materials</div>
                      <div className="text-sm text-white/70">{item.material}</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredId === item.id ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                className="h-1 bg-gradient-to-r from-accent via-accent to-transparent origin-left mt-2 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-4 text-lg" style={{ fontWeight: 300 }}>
            Every piece can be customized to your vision
          </p>
          <button
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-accent hover:text-accent/80 transition-colors text-lg group"
            style={{ fontWeight: 500 }}
          >
            Start Your Custom Design Journey 
            <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 ml-2">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
