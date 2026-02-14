import HeroSlideshow from "@/components/sections/HeroSlideshow";
import AboutSection from "@/components/sections/AboutSection";
import WhyBetterSection from "@/components/sections/WhyBetterSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ColorCollectionSection from "@/components/sections/ColorCollectionSection";
import ColoringWorldSection from "@/components/sections/ColoringWorldSection";
import CoatingsPerformSection from "@/components/sections/CoatingsPerformSection";
import ContactSection from "@/components/sections/ContactSection";
import PanoramaSection from "@/components/sections/PanoramaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSlideshow />
        <AboutSection />
        <WhyBetterSection />
        <ProductsSection />
        <PanoramaSection />
        <ColorCollectionSection />
        <ColoringWorldSection />
        <CoatingsPerformSection />
        <ContactSection />
      </main>
    </div>
  );
}
