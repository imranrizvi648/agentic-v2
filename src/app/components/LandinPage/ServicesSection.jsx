"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Zap,
  Database,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const servicesData = [
  {
    id: "ai",
    label: "AI for Business Functions",
    fullName: "AI for Business Functions",
    icon: Zap,
    services: [
      {
        title: "Sales & Revenue",
        href: "/services/sales-revenue-ai",
      },
      {
        title: "Customer Service",
        href: "/services/customer-service-ai",
      },
      {
        title: "HR & Workforce",
        href: "/services/hr-workforce-ai",
      },
      {
        title: "Procurement & Supply Chain",
        href: "/services/procurement-supply-chain-ai",
      },
      {
        title: "Operations & Shared Services",
        href: "/services/operations-automation-ai",
      },
      {
        title: "IT & Security",
        href: "/services/it-security-ai",
      },
      {
        title: "Executive Intelligence",
        href: "/services/executive-intelligence-ai",
      },
    ],
  },

  {
    id: "data",
    label: "Enterprise AI Capabilities",
    fullName: "Enterprise AI Capabilities",
    icon: Database,
    services: [
      {
        title: "Intelligent Document Processing",
        href: "/services/intelligent-document-processing",
      },
      {
        title: "Enterprise Knowledge & Evidence Agents",
        href: "/services/enterprise-knowledge-evidence-agents",
      },
      {
        title: "Custom AI Workflow Agents",
        href: "/services/custom-ai-workflow-agents",
      },
      {
        title: "Multi-Agent Digital Workforce",
        href: "/services/multi-agent-digital-workforce",
      },
      {
        title: "Voice & Conversational AI",
        href: "/services/voice-conversational-ai",
      },
      {
        title: "Multilingual & Regional AI",
        href: "/services/multilingual-regional-ai",
      },
      {
        title: "ERP, CRM & Enterprise Integration",
        href: "/services/erp-crm-enterprise-integration",
      },
      {
        title: "Data Intelligence & Predictive Agents",
        href: "/services/data-intelligence-predictive-agents",
      },
      {
        title: "Legacy-System Computer-Use Agents",
        href: "/services/legacy-system-computer-use-agents",
      },
      {
        title: "Agentic Data Engineering",
        href: "/services/agentic-data-engineering",
      },
      {
        title: "Specialized AI & ML Development",
        href: "/services/specialized-ai-ml-development",
      },
      {
        title: "Private & On-Premise Agentic AI",
        href: "/services/private-on-premise-agentic-ai",
      },
    ],
  },

  {
    id: "industries",
    label: "AI For Industries",
    fullName: "AI For Industries",
    icon: Building2,
    services: [
      {
        title: "Banking & Financial Services",
        href: "/services/banking-financial-services",
      },
      {
        title: "Healthcare & Pharmaceutical",
        href: "/services/healthcare-pharmaceutical",
      },
      {
        title: "Manufacturing & FMCG",
        href: "/services/manufacturing-fmcg",
      },
      {
        title: "Retail & Distribution",
        href: "/services/retail-distribution",
      },
      {
        title: "Logistics & Transportation",
        href: "/services/logistics-transportation",
      },
      {
        title: "Construction & Real Estate",
        href: "/services/construction-real-estate",
      },
      {
        title: "Agriculture & Food",
        href: "/services/agriculture-food",
      },
      {
        title: "Government & Public Sector",
        href: "/services/government-public-sector",
      },
      {
        title: "Energy & Utilities",
        href: "/services/energy-utilities",
      },
      {
        title: "Professional Services",
        href: "/services/professional-services",
      },
      {
        title: "Education",
        href: "/services/education",
      },
      {
        title: "Technology & Telecom",
        href: "/services/technology-telecom",
      },
    ],
  },

  {
    id: "transformation",
    label: "AI Transformation & Delivery",
    fullName: "AI Transformation & Delivery",
    icon: Zap,
    services: [
      {
        title: "Agentic AI Strategy & Readiness",
        href: "/services/ai-transformation-delivery",
      },
      {
        title: "Process Discovery",
        href: "/services/process-discovery",
      },
      {
        title: "AI Opportunity Mapping",
        href: "/services/ai-opportunity-mapping",
      },
      {
        title: "Rapid Pilot Development",
        href: "/services/rapid-pilot-development",
      },
      {
        title: "Production Agent Engineering",
        href: "/services/production-agent-engineering",
      },
      {
        title: "Enterprise Integration",
        href: "/services/enterprise-integration",
      },
    ],
  },

  {
    id: "trust",
    label: "Trust & Managed AI",
    fullName: "Trust & Managed AI",
    icon: ShieldCheck,
    services: [
      {
        title: "Responsible AI Governance",
        href: "/services/responsible-ai-governance",
      },
      {
        title: "Human-in-the-Loop Controls",
        href: "/services/human-in-the-loop",
      },
      {
        title: "Agent Identity & Access",
        href: "/services/agent-identity-access",
      },
      {
        title: "Evaluation & Testing",
        href: "/services/evaluation-testing",
      },
      {
        title: "Monitoring & Audit Trails",
        href: "/services/monitoring-audit-trails",
      },
      {
        title: "Managed Agent Operations",
        href: "/services/managed-agent-operations",
      },
    ],
  },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("ai");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeData =
    servicesData.find((item) => item.id === activeCategory) ||
    servicesData[0];

  const ActiveIcon = activeData.icon;

  const handleCategoryChange = (categoryId) => {
    if (isTransitioning || categoryId === activeCategory) return;

    setIsTransitioning(true);
    setActiveCategory(categoryId);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const activeIndex = servicesData.findIndex(
    (item) => item.id === activeCategory
  );

  const progressHeight =
    ((activeIndex + 1) / servicesData.length) * 100;

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-14 sm:py-16 lg:py-20 font-sans text-[#030B1F] antialiased">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(98,94,255,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(3,11,31,0.02)_0%,transparent_50%),radial-gradient(circle_at_50%_80%,rgba(98,94,255,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================================
            SECTION HEADER
        ================================================================= */}

        <div className="mb-10 sm:mb-12 lg:mb-16 animate-[fadeInUp_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards] text-center">

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-brand-primary tracking-[-0.025em] leading-[1.1]">
            Intelligence,{" "}
            Automated.
          </h1>

          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-[1.6] text-gray-500">
          Transform your enterprise with agentic AI systems that think, adapt, and execute autonomously.
          </p>

        </div>

        {/* ================================================================
            MAIN CONTENT
        ================================================================= */}

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">

          {/* ================================================================
              LEFT CONTENT
          ================================================================= */}

          <div
            className="space-y-8 animate-[fadeInUp_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards] lg:col-span-4"
            style={{ animationDelay: "0.2s" }}
          >

            <div>

              <h2 className="mb-4 font-[Space_Grotesk,sans-serif] text-xl font-bold tracking-[-0.02em] leading-[1.1] text-[#030B1F] sm:text-2xl">
                AI-First Transformation
              </h2>

              <p className="text-sm sm:text-base leading-[1.6] text-gray-500">
                Build AI-first architectures where Agentic AI orchestrates
                workflows, cloud platforms fuel real-time intelligence, and
                systems evolve into adaptive engines.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-3">

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-indigo-500/30 bg-[linear-gradient(135deg,#1e1b4b_0%,#4338ca_50%,#6366f1_100%)] px-6 sm:px-8 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-[#625EFF] hover:shadow-[0_10px_30px_rgba(98,94,255,0.3)]"
              >
                <span className="relative z-10">
                  Book Consultation
                </span>

                <span className="absolute inset-0 origin-left scale-x-0 bg-[linear-gradient(135deg,#312e81_0%,#4f46e5_50%,#818cf8_100%)] transition-transform duration-500 group-hover:scale-x-100" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-6 py-3.5 text-sm font-medium text-[#030B1F] transition-all duration-300 hover:border-[#625EFF] hover:text-[#625EFF]"
              >
                Learn More
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8">

              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#625EFF]">
                  150+
                </div>

                <div className="mt-1 text-xs sm:text-sm leading-[1.5] text-gray-500">
                  Projects
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#625EFF]">
                  40%
                </div>

                <div className="mt-1 text-xs sm:text-sm leading-[1.5] text-gray-500">
                  Cost Reduction
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#625EFF]">
                  24/7
                </div>

                <div className="mt-1 text-xs sm:text-sm leading-[1.5] text-gray-500">
                  Operations
                </div>
              </div>

            </div>

          </div>

          {/* ================================================================
              CATEGORY NAVIGATION
          ================================================================= */}

          <div
            className="animate-[fadeInUp_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards] lg:col-span-3"
            style={{ animationDelay: "0.3s" }}
          >

            <div className="relative pl-7 sm:pl-8">

              {/* Progress Line */}

              <div className="absolute bottom-0 left-2 top-0 w-0.5 overflow-hidden rounded-full bg-gray-200">

                <div
                  className="absolute left-0 top-0 w-full rounded-full bg-[#625EFF] shadow-[0_0_20px_rgba(98,94,255,0.3)] transition-[height] duration-700 ease-in-out"
                  style={{ height: `${progressHeight}%` }}
                />

              </div>

              <div className="space-y-1">

                {servicesData.map((category) => {
                  const isActive =
                    category.id === activeCategory;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onMouseEnter={() =>
                        handleCategoryChange(category.id)
                      }
                      onClick={() =>
                        handleCategoryChange(category.id)
                      }
                      className="group relative flex w-full items-center py-3 text-left outline-none transition-transform duration-300 hover:translate-x-1"
                    >

                      <span
                        className={`absolute -left-[28px] z-10 h-[10px] w-[10px] rounded-full border-2 transition-all duration-400 ${
                          isActive
                            ? "scale-125 border-[#625EFF] bg-[#625EFF] shadow-[0_0_0_4px_rgba(98,94,255,0.15),0_0_20px_rgba(98,94,255,0.4)]"
                            : "border-[#030B1F] bg-white group-hover:border-[#625EFF] group-hover:shadow-[0_0_0_3px_rgba(98,94,255,0.1)]"
                        }`}
                      />

                      <span
                        className={`text-xs sm:text-sm tracking-wider leading-[1.4] transition-all duration-300 ${
                          isActive
                            ? "font-bold text-[#625EFF]"
                            : "font-bold text-gray-500 group-hover:text-[#625EFF]"
                        }`}
                      >
                        {category.label}
                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

          </div>

          {/* ================================================================
              RIGHT SERVICE CARD
          ================================================================= */}

          <div
            className="lg:col-span-5 animate-[slideInRight_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]"
            style={{ animationDelay: "0.4s" }}
          >

            <div className="relative min-h-[420px] h-auto sm:h-[420px] overflow-hidden rounded-2xl border border-[#625EFF]/15 bg-[#030B1F] p-5 sm:p-6 lg:p-8 shadow-[0_30px_60px_rgba(3,11,31,0.15)] transition-all duration-500 hover:border-[#625EFF]/30 hover:shadow-[0_40px_80px_rgba(3,11,31,0.25)]">

              {/* Card Background */}

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(98,94,255,0.12),transparent_50%),radial-gradient(circle_at_10%_90%,rgba(98,94,255,0.08),transparent_50%)]" />

              <div className="absolute left-[10%] right-[10%] top-0 h-0.5 bg-gradient-to-r from-transparent via-[#625EFF] to-transparent opacity-60" />

              <div className="relative z-10 flex h-full flex-col">

                {/* Card Header */}

                <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-5">

                  <div className="min-w-0">

                    <h3
                      key={activeData.id}
                      className="text-base font-bold tracking-[-0.01em] text-white animate-[fadeInUp_0.3s_ease-out] sm:text-lg"
                    >
                      {activeData.fullName}
                    </h3>

                  </div>

                </div>

                {/* Services */}

                <div
                  className={`grid flex-1 grid-cols-1 sm:grid-cols-2 content-start gap-2 transition-all duration-300 ${
                    isTransitioning
                      ? "translate-y-2 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >

                  {activeData.services.map((service) => (

                    <Link
                      key={service.title}
                      href={service.href}
                      className="group relative flex min-h-10 items-center justify-between overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 no-underline transition-all duration-400 hover:-translate-y-px hover:border-[#625EFF]/30 hover:bg-[#625EFF]/[0.08] hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                    >

                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#625EFF]/15 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                      <span className="relative z-10 min-w-0 truncate text-sm font-medium leading-[1.4] text-white/70 transition-colors duration-300 group-hover:text-white sm:pr-0 pr-1">
                        {service.title}
                      </span>

                      <span className="relative z-10 ml-1 flex h-[18px] w-[18px] shrink-0 -translate-x-1 items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:bg-[#625EFF] group-hover:opacity-100">

                        <ArrowRight
                          className="h-[10px] w-[10px]"
                          strokeWidth={2.5}
                        />

                      </span>

                    </Link>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================================
          ANIMATIONS
      ================================================================= */}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}