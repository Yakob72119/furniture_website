import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle, Plane } from "lucide-react";
import { EthiopianBorderDecoration } from "./EthiopianPattern";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mengestu@ethiopianfurniture.et", href: "mailto:mengestu@ethiopianfurniture.et" },
    { icon: Phone, label: "Phone", value: "+251 91 177 4279", href: "tel:+251911772479" },
    { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: null }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Get Quote", href: "#quote-form" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-10 relative overflow-hidden">
      {/* Ethiopian pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] ethiopian-pattern" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Top Ethiopian Border */}
        <div className="mb-16">
          <EthiopianBorderDecoration />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-accent" />
              <h3 
                className="text-2xl md:text-3xl" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ethiopian Craft & Flight
              </h3>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-8 max-w-md text-lg" style={{ fontWeight: 300 }}>
              Where Ethiopian heritage meets aviation precision. Creating bespoke luxury 
              furniture with the same dedication and attention to detail as piloting through African skies.
            </p>
            
            {/* Ethiopian flag colors accent */}
            <div className="flex gap-2 mb-8">
              <div className="w-16 h-1 bg-[#006341] rounded-full" />
              <div className="w-16 h-1 bg-[#d4af37] rounded-full" />
              <div className="w-16 h-1 bg-[#c1272d] rounded-full" />
            </div>
            
            {/* WhatsApp Button - Enhanced */}
            <a
              href="https://wa.me/251911774279"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-full hover:bg-accent/90 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              style={{ fontWeight: 500 }}
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 
              className="mb-6 text-xl" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                    style={{ fontWeight: 300 }}
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 
              className="mb-6 text-xl" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact
            </h4>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50 mb-1 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary-foreground hover:text-accent transition-colors"
                        style={{ fontWeight: 300 }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground" style={{ fontWeight: 300 }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social & Hours Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-primary-foreground/10"
        >
          {/* Social Links */}
          <div>
            <h5 className="mb-4 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              Connect With Us
            </h5>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-primary-foreground/5 hover:bg-accent border border-primary-foreground/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Workshop Hours */}
          <div>
            <h5 className="mb-4 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Hours
            </h5>
            <div className="space-y-2 text-primary-foreground/70" style={{ fontWeight: 300 }}>
              <p className="flex justify-between max-w-xs">
                <span>Monday - Friday</span>
                <span className="text-primary-foreground">9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between max-w-xs">
                <span>Saturday</span>
                <span className="text-primary-foreground">10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between max-w-xs">
                <span>Sunday</span>
                <span className="text-primary-foreground">By Appointment</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-primary-foreground/50 text-sm" style={{ fontWeight: 300 }}>
            © {currentYear} Ethiopian Craft & Flight. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2" style={{ fontWeight: 300 }}>
            Crafted with precision, passion, and Ethiopian pride. 🇪🇹
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
