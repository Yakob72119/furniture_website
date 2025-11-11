import { motion } from "motion/react";
import { Lightbulb, Pencil, Hammer } from "lucide-react";
import { EthiopianBorderDecoration } from "./EthiopianPattern";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Imagine",
    description: "Share your vision, inspirations, and functional needs. We begin with conversation—understanding your space, your story, and your dreams."
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description: "With pilot's precision, I create detailed technical drawings and 3D renderings. Every joint, every curve—calculated and visualized for your approval."
  },
  {
    number: "03",
    icon: Hammer,
    title: "Create",
    description: "Using time-honored techniques and premium Ethiopian and imported materials, your piece is handcrafted with devotion, finished to perfection, and delivered with pride."
  }
];

export function CustomizationSection() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="mb-6 text-accent tracking-[0.2em] uppercase text-sm">Our Process</div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Your Custom Design
            <br />
            <span className="text-accent italic">Journey</span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-32">
              <EthiopianBorderDecoration />
            </div>
          </div>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            From initial concept to final masterpiece—every step is guided by precision, 
            passion, and a commitment to excellence that mirrors both aviation and artistry.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent to-muted -z-10" />
              )}

              <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-muted/30 group">
                {/* Number Badge - More elegant */}
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary text-2xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg" style={{ fontWeight: 300 }}>
                  {step.description}
                </p>
                
                {/* Bottom accent */}
                <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-2">
            Ready to bring your vision to life?
          </p>
          <button
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
          >
            Start your custom project today →
          </button>
        </motion.div>
      </div>
    </section>
  );
}