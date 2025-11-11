import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Card } from "./ui/card";
import { EthiopianBorderDecoration } from "./EthiopianPattern";

const testimonials = [
  {
    id: 1,
    name: "Buzeya Shiferaw",
    role: "Interior Designer, Addis Ababa",
    text: "The craftsmanship is breathtaking. Each piece tells a story of Ethiopian heritage blended with modern sophistication. The attention to detail rivals anything I've seen from European luxury brands.",
    rating: 5
  },
  {
    id: 2,
    name: "Wandwesen Feleke",
    role: "Hotel Executive",
    text: "We commissioned custom pieces for our boutique hotel. The precision and quality are exceptional—guests constantly inquire about the furniture. It's become a signature element of our property.",
    rating: 5
  },
  {
    id: 3,
    name: "Tadese Getachew",
    role: "Private Residence Owner",
    text: "Working with a craftsman who understands both Ethiopian artistry and aviation precision is remarkable. Our dining table is a masterpiece that anchors our entire home with warmth and elegance.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-white to-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="mb-6 text-accent tracking-[0.2em] uppercase text-sm">Testimonials</div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Words from Our
            <br />
            <span className="text-accent italic">Cherished Clients</span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-32">
              <EthiopianBorderDecoration />
            </div>
          </div>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            Excellence speaks through the satisfaction and trust of those we serve.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Card className="p-10 h-full bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 relative rounded-3xl group">
                {/* Quote Icon - Elegant positioning */}
                <div className="absolute -top-6 left-10 w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-6 transition-transform duration-300">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg italic" style={{ fontWeight: 300 }}>
                  "{testimonial.text}"
                </p>

                {/* Author - Enhanced design */}
                <div className="border-t border-accent/20 pt-6">
                  <p 
                    className="text-primary mb-1 text-lg" 
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground tracking-wide" style={{ fontWeight: 300 }}>
                    {testimonial.role}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M30 0 L30 30 L0 30" stroke="#d4af37" strokeWidth="1.5" opacity="0.3" />
                  </svg>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
