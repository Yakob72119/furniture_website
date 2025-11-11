import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { CustomizationSection } from "./components/CustomizationSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { QuoteForm } from "./components/QuoteForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="process">
          <CustomizationSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <QuoteForm />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
