import HeroSection from "@/components/views/Home/HeroSection";
import FeaturedCardsSection from "@/components/views/Home/FeaturedCardsSection";
import ProductHighlightsSection from "@/components/views/Home/ProductHighlightsSection";
import IndonesianSpicesSection from "@/components/views/Home/IndonesianSpicesSection";
import SpiceManufacturerSection from "@/components/views/Home/SpiceManufacturerSection";
import AboutSectionNew from "@/components/views/Home/AboutSection";
import SpiceProducerSection from "@/components/views/Home/SpiceProducerSection";
import NewsArticlesSection from "@/components/views/Home/NewsArticlesSection";
import InvestmentSection from "@/components/views/Home/InvestmentSection";
import ProductShowcaseSection from "@/components/views/Home/ProductShowcaseSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Cards Section */}
      <FeaturedCardsSection />

      {/* Product Highlights Section */}
      <ProductHighlightsSection />

      {/* Indonesian Spices Section */}
      <IndonesianSpicesSection />

      {/* Spice Manufacturer Section */}
      <SpiceManufacturerSection />

      {/* About Section */}
      <AboutSectionNew />

      {/* Spice Producer Section */}
      <SpiceProducerSection />

      {/* News & Articles Section */}
      <NewsArticlesSection />

      {/* Investment Section */}
      <InvestmentSection />

      {/* Product Showcase Section */}
      <ProductShowcaseSection />
    </div>
  );
}
