import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { EthiopianBorderDecoration } from "./EthiopianPattern";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours to begin your custom design journey.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quote-form" className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-white relative overflow-hidden">
      {/* Ethiopian-inspired background pattern */}
      <div className="absolute inset-0 opacity-[0.03] ethiopian-pattern" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 text-accent"
            >
              <Sparkles className="w-5 h-5" />
              <span className="tracking-[0.2em] uppercase text-sm">Get Started</span>
              <Sparkles className="w-5 h-5" />
            </motion.div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Start Your Custom
              <br />
              <span className="text-accent italic">Design Journey</span>
            </h2>
            
            <div className="flex justify-center mb-6">
              <div className="w-32">
                <EthiopianBorderDecoration />
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed" style={{ fontWeight: 300 }}>
              Let's discuss your vision and create something extraordinary together. 
              Share your ideas below, and I'll personally respond within 24 hours.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-muted/20 relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent/30 rounded-br-3xl" />

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted/30 border-muted h-14 rounded-xl px-6 focus:border-accent transition-colors"
                    placeholder="Abebe Bikila"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/30 border-muted h-14 rounded-xl px-6 focus:border-accent transition-colors"
                    placeholder="abebe@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-base">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-muted/30 border-muted h-14 rounded-xl px-6 focus:border-accent transition-colors"
                    placeholder="+251 91 123 4567"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="projectType" className="text-base">Project Type</Label>
                  <Input
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="bg-muted/30 border-muted h-14 rounded-xl px-6 focus:border-accent transition-colors"
                    placeholder="e.g., Dining Table, Bedroom Suite"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-10">
                <Label htmlFor="message" className="text-base">Project Details & Vision *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="bg-muted/30 border-muted resize-none rounded-xl px-6 py-4 focus:border-accent transition-colors"
                  placeholder="Tell me about your project: dimensions, style preferences, materials, timeline, budget range, and any Ethiopian design elements you'd like incorporated..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-primary rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 h-16 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Send Request
                </span>
                <div className="absolute inset-0 shimmer" />
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-6" style={{ fontWeight: 300 }}>
                Your information is kept confidential and will only be used to discuss your custom furniture project.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
