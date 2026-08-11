import HeroSection from "./components/HeroSection";
import ImpactStatsSection from "./components/ImpactStatsSection";
import PainPointsSection from "./components/PainPointsSection";
import WhySection from "./components/WhySection";
import ServicesCategorySection from "./components/ServicesCategorySection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import DeliveryStepsSection from "./components/DeliveryStepsSection";
import EngagementModelsSection from "./components/EngagementModelsSection";
import ComparisonTableSection from "./components/ComparisonTableSection";
import IndustriesSection from "./components/IndustriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GlobalFaqsSection from "./components/GlobalFaqsSection";
import FinalCtaSection from "./components/FinalCtaSection";

export const metadata = {
  title: "Enterprise AI Agents & ERP-Native Automation Services | AgenticSense",
  description:
    "AgenticSense builds custom AI agents that run natively inside SAP Business One, Oracle Fusion Cloud and Microsoft Fabric automating finance, operations and decisions end to end via official APIs.",
  keywords: [
    "agentic AI services", "enterprise AI agents", "ERP AI integration",
    "SAP Business One AI", "Oracle Fusion AI", "NetSuite AI integration",
    "Odoo AI integration", "Zoho AI", "Salesforce AI", "AI for finance",
    "AP automation", "intelligent automation", "custom AI agent development",
  ],
  alternates: { canonical: "https://www.agenticsense.co/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection />
        <ServicesCategorySection />
         <ImpactStatsSection />
      <PainPointsSection />
      
      <WhySection />
   
      <CaseStudiesSection />
      <DeliveryStepsSection />
      {/* <EngagementModelsSection /> */}
      <ComparisonTableSection />
      {/* <IndustriesSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <GlobalFaqsSection /> */}
      <FinalCtaSection />
    </main>
  );
}
