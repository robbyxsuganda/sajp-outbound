import HeroSection from '@/components/client/HeroSection';
import FeaturedCardsSection from '@/components/client/FeaturedCardsSection';
import ProductHighlightsSection from '@/components/client/ProductHighlightsSection';
import IndonesianSpicesSection from '@/components/client/IndonesianSpicesSection';
import SpiceManufacturerSection from '@/components/client/SpiceManufacturerSection';
import AboutSectionNew from '@/components/client/AboutSectionNew';
import SpiceProducerSection from '@/components/client/SpiceProducerSection';
import NewsArticlesSection from '@/components/client/NewsArticlesSection';
import InvestmentSection from '@/components/client/InvestmentSection';
import ProductShowcaseSection from '@/components/client/ProductShowcaseSection';

export default function HomePage() {
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
