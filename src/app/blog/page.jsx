import BlogHeroSection from "./components/BlogHeroSection";
import PostGrid from "./components/PostGrid";
import BlogCTA from "./components/BlogCTA";

export const metadata = {
  title: "Blog — AI Agents, ERP Integration & Enterprise Automation | AgenticSense",
  description:
    "Production-depth articles on agentic AI, ERP-native automation, finance AI, healthcare AI and enterprise engineering from the AgenticSense team.",
  keywords: [
    "agentic AI blog", "ERP AI integration", "finance automation insights",
    "enterprise AI engineering", "SAP AI", "Oracle Fusion AI", "AI agents production",
    "LangGraph", "multi-agent systems", "AP automation",
  ],
  alternates: { canonical: "https://www.agenticsense.co/blog" },
  openGraph: {
    title: "Blog — AI Agents, ERP Integration & Enterprise Automation | AgenticSense",
    description:
      "Production-depth articles on agentic AI, ERP-native automation and enterprise AI engineering.",
    url: "https://www.agenticsense.co/blog",
    siteName: "AgenticSense",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AgenticSense",
    description: "Production-depth articles on agentic AI and enterprise automation.",
  },
};

export default function BlogPage() {
  return (
    <main className="bg-white">
      <BlogHeroSection />
      <PostGrid />
      <BlogCTA />
    </main>
  );
}
