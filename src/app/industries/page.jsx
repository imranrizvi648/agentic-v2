import HeroSection from "./components/HeroSection";
import ImpactStatsSection from "./components/ImpactStatsSection";
import IndustriesCategorySection from "./components/IndustriesCategorySection";
import SectorChallengesSection from "./components/SectorChallengesSection";
import WhySection from "./components/WhySection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import DeliveryStepsSection from "./components/DeliveryStepsSection";
import ComparisonTableSection from "./components/ComparisonTableSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GlobalFaqsSection from "./components/GlobalFaqsSection";
import FinalCtaSection from "./components/FinalCtaSection";

export const metadata = {
  title: "AI Solutions by Industry — Finance, Healthcare, Real Estate, E-commerce & Education | AgenticSense",
  description:
    "AgenticSense delivers production-grade agentic AI across Finance & Banking, Healthcare, Real Estate, E-commerce and Education — built to the operational, regulatory and data requirements of each sector.",
  keywords: [
    "AI for finance and banking", "healthcare AI automation", "real estate AI agents",
    "e-commerce AI", "education AI", "industry AI solutions", "sector-specific AI",
    "enterprise AI by industry", "agentic AI healthcare", "financial services AI",
  ],
  alternates: { canonical: "https://www.agenticsense.co/industries" },
};

export default function IndustriesPage() {
  return (
    <main className="">
      <HeroSection />
      <IndustriesCategorySection />
      <ImpactStatsSection />
      
      <SectorChallengesSection />
      <WhySection />
      {/* <CaseStudiesSection /> */}
      <DeliveryStepsSection />
      {/* <ComparisonTableSection /> */}
      {/* <TestimonialsSection />
      <GlobalFaqsSection /> */}
      <FinalCtaSection />
    </main>
  );
}
