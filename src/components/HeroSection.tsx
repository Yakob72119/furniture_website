import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EthiopianPattern } from "./EthiopianPattern";

export function HeroSection() {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758448511421-debb41f3e621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBmdXJuaXR1cmUlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2Mjg1MTY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury handcrafted wooden furniture with modern minimalist design"
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Ethiopian Pattern Overlay */}
      <EthiopianPattern />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Elegant badge with Ethiopian colors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#006341]" />
              <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <div className="w-2 h-2 rounded-full bg-[#c1272d]" />
            </div>
            <span className="text-white/90 tracking-wide">Pilot-Crafted in Ethiopia</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          {/* Main Headline - Ultra elegant */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 text-white leading-[1.1]"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
          >
            Crafted with Precision.
            <br />
            <span className="text-accent italic">Rooted in Heritage.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/85 mb-10 max-w-3xl leading-relaxed tracking-wide"
            style={{ fontWeight: 300 }}
          >
            Luxury custom furniture inspired by Ethiopia, designed with a pilot's precision. 
            Where ancient craftsmanship meets contemporary elegance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToQuote}
              className="bg-accent hover:bg-accent/90 text-primary px-10 py-7 rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 shimmer" />
            </Button>

            <Button
              size="lg"
              onClick={scrollToGallery}
              variant="outline"
              className="border-2 border-white/40 text-white bg-white/10 hover:bg-white/15 hover:border-white/60 backdrop-blur-md px-10 py-7 rounded-full transition-all duration-500"
            >
              Explore Collection
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-16 flex items-center gap-8"
          >
            <div className="h-px w-20 bg-gradient-to-r from-accent to-transparent" />
            <div className="text-white/60 text-sm tracking-widest uppercase">Since 2024</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute top-8 right-8 text-accent/20"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L60 0 L60 60" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-8 left-8 text-accent/20"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 60 L0 60 L0 0" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="0" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-white/40 text-xs tracking-widest uppercase">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}