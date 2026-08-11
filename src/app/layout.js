import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FluidCursor from "./components/FluidCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "AgenticSense | AI Agents, Intelligent Automation & Business AI Solutions",
  description:
    "AgenticSense builds intelligent AI agents, automation systems and AI-powered business solutions to help companies improve productivity, reduce manual work and scale faster.",
  keywords:
    "AgenticSense, AI agents, agentic AI, intelligent automation, business automation, AI automation company, custom AI agents, AI consulting, enterprise AI solutions, workflow automation, SAP Business One AI, Oracle Fusion AI, ERP AI integration",
  authors: [{ name: "AgenticSense" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "AgenticSense",
    title: "AgenticSense | AI Agents & Intelligent Automation Solutions",
    description:
      "AgenticSense helps businesses automate workflows, improve decision-making and scale faster with intelligent AI agent solutions.",
    url: "https://www.agenticsense.co/",
    images: [
      {
        url: "https://www.agenticsense.co/assets/images/agenticsense-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AgenticSense AI Agents and Automation Solutions",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenticSense | AI Agents & Intelligent Automation",
    description:
      "Build smarter workflows with AI agents, automation systems and intelligent business solutions from AgenticSense.",
    images: ["https://www.agenticsense.co/assets/images/agenticsense-og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.agenticsense.co/",
  },
  icons: "/iconeee.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" hrefLang="en" href="https://www.agenticsense.co/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AgenticSense",
              url: "https://www.agenticsense.co/",
              logo: "https://www.agenticsense.co/assets/images/logo.png",
              description:
                "AgenticSense builds intelligent AI agents, automation systems and AI-powered business solutions for modern businesses.",
              sameAs: [
                "https://www.linkedin.com/company/agenticsense",
                "https://twitter.com/agenticsense",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "info@agenticsense.co",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AgenticSense",
              url: "https://www.agenticsense.co/",
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased bg-black text-white relative"
      >
        {/* <FluidCursor /> */}
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script
          src="https://liaison.203-130-9-165.sslip.io/widget/wid_c019a568ccd14a05.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
