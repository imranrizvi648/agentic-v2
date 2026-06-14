import CareersHero from "./components/CareersHero";
import CareersForm from "./components/CareersForm";

export const metadata = {
  title: "Careers | Join AgenticSense — Build Production Enterprise AI",
  description: "Join the AgenticSense team. We build AI agents that run natively inside SAP, Oracle and enterprise ERP systems. Apply for open engineering, design and product roles.",
  keywords: "AgenticSense careers, AI engineering jobs, SAP AI jobs, enterprise AI engineer, LangGraph jobs",
  alternates: { canonical: "https://www.agenticsense.ai/careers" },
  openGraph: {
    title: "Careers at AgenticSense — Build the Future of Enterprise AI",
    description: "Join a tight-knit team building production AI agents inside enterprise ERP systems.",
    url: "https://www.agenticsense.ai/careers",
  },
};

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <CareersForm />
    </div>
  );
}
