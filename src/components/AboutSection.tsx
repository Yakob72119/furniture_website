import { motion } from "motion/react";
import { Plane, Compass, Award } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EthiopianBorderDecoration } from "./EthiopianPattern";

export function AboutSection() {
  const features = [
    {
      icon: Plane,
      title: "Aviation Precision",
      description: "Every measurement calculated with the exactitude learned from thousands of flight hours."
    },
    {
      icon: Compass,
      title: "Ethiopian Heritage",
      description: "Designs inspired by centuries of Ethiopian artistry, from Lalibela to Axum."
    },
    {
      icon: Award,
      title: "Master Craftsmanship",
      description: "Premium materials sourced globally, handcrafted with generational techniques."
    }
  ];

  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image with elegant frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1688240817677-d28b8e232dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBhcnRpc2FuJTIwd29vZHdvcmtpbmd8ZW58MXx8fHwxNzYyODUwODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ethiopian master craftsman creating bespoke furniture"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-accent rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-accent rounded-br-3xl" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-accent text-primary px-8 py-6 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>10+</div>
                  <div className="text-sm tracking-wider">Flight Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6 text-accent tracking-[0.2em] uppercase text-sm">About the Craftsman</div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where Sky Meets
              <br />
              <span className="text-accent italic">Ethiopian Soul</span>
            </h2>

            <EthiopianBorderDecoration />

            <div className="space-y-6 text-muted-foreground leading-relaxed mt-8 mb-10" style={{ fontWeight: 300 }}>
              <p className="text-lg">
                Born and raised in the heart of Ethiopia, I learned the value of precision and discipline 
                as a commercial pilot navigating African skies. But my true passion has always been the 
                ancient art of woodworking, passed down through generations of Ethiopian craftsmen.
              </p>
              <p className="text-lg">
                Each piece I create is a marriage of two worlds: the meticulous attention to detail 
                required in aviation, and the soulful artistry found in Ethiopian traditional crafts. 
                From the geometric patterns of our ancestors to the clean lines of contemporary design, 
                every creation tells a story.
              </p>
              <p className="text-lg">
                Using premium materials—mahogany from our highlands, imported veneers, hand-tooled 
                leather—I craft furniture that doesn't just fill a space, but transforms it into 
                something extraordinary.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-5 items-start group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}