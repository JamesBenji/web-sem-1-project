import RevealSection from "../components/page-sections/home-page/RevealSection";
import { MarqueeStrip } from "../components/ui/MarqueeStrip";
import { PricingSection } from "../components/page-sections/home-page/PricingSection";
import { CTASection } from "../components/page-sections/home-page/CTASection";
import { HeroSection } from "../components/page-sections/home-page/HeroSection";
import { RecipePreviewSection } from "../components/page-sections/home-page/RecipePreviewSection";
import { FeaturesSection } from "../components/page-sections/home-page/FeaturesSection";
import { FAQSection } from "../components/page-sections/home-page/FAQSection";

export default function HomePage() {
  return (
    <div className="font-bricolage antialiased">
      <HeroSection />
      <RevealSection />
      <MarqueeStrip direction="left" bg="bg-brand-600" textColor="text-white" />
      <RecipePreviewSection />
      <MarqueeStrip
        direction="right"
        bg="bg-brand-50"
        textColor="text-brand-400"
      />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}
