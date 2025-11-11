import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/98 backdrop-blur-xl shadow-xl" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className={`flex gap-1 transition-all duration-300 ${isScrolled ? '' : 'opacity-90'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#006341]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#c1272d]" />
              </div>
              <span 
                className={`text-xl md:text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
              >
                Ethiopian Craft
              </span>
            </motion.div>

            {/* Desktop Navigation - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center gap-10"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-colors duration-300 relative group ${
                    isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                  }`}
                  style={{ fontWeight: 400 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#quote-form")}
                className={`rounded-full px-8 transition-all duration-300 ${
                  isScrolled
                    ? "bg-accent hover:bg-accent/90 text-primary shadow-lg hover:shadow-xl"
                    : "bg-accent hover:bg-accent/90 text-primary shadow-2xl"
                }`}
                style={{ fontWeight: 500 }}
              >
                Get Quote
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-foreground" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-foreground" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-white md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl text-foreground hover:text-accent transition-colors"
                style={{ fontFamily: 'Lora, serif' }}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#quote-form")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Get Quote
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}