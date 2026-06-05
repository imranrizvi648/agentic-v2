import Link from "next/link";
// Make sure to install lucide-react if you haven't: npm i lucide-react
import { Building2, HeartPulse, Home, ShoppingBag, GraduationCap } from "lucide-react";

const industries = [
  {
    id: "finance-and-banking",
    number: "01",
    title: "Finance & Banking",
    slug: "/industries/finance-and-banking",
    icon: Building2,
    tagline: "Capital markets move fast. Your automation must keep up.",
    lead: "Straight-through reconciliation, real-time fraud detection, automated regulatory reporting and AI-powered client advisory.",
    capabilities: ["Transaction Reconciliation", "Fraud Detection & AML", "Regulatory Reporting"],
  },
  {
    id: "healthcare",
    number: "02",
    title: "Healthcare",
    slug: "/industries/healthcare",
    icon: HeartPulse,
    tagline: "Administrative burden costs clinical time. AI gives it back.",
    lead: "Revenue cycle automation, clinical documentation processing, pre-authorisation agents and predictive patient analytics.",
    capabilities: ["Revenue Cycle Management", "Pre-Auth Automation", "Clinical Documentation AI"],
  },
  {
    id: "real-estate",
    number: "03",
    title: "Real Estate",
    slug: "/industries/real-estate",
    icon: Home,
    tagline: "Your best agents should be closing, not qualifying.",
    lead: "AI lead qualification, automated valuation models, portfolio performance analytics and transaction document processing.",
    capabilities: ["Lead Scoring", "Automated Valuation", "Portfolio Analytics"],
  },
  {
    id: "e-commerce",
    number: "04",
    title: "E-commerce",
    slug: "/industries/e-commerce",
    icon: ShoppingBag,
    tagline: "Thin margins don't forgive slow decisions.",
    lead: "Dynamic pricing engines, predictive inventory replenishment, checkout conversion agents and customer service automation.",
    capabilities: ["Dynamic Pricing Engine", "Inventory Intelligence", "Checkout Optimisation"],
  },
  {
    id: "education",
    number: "05",
    title: "Education",
    slug: "/industries/education",
    icon: GraduationCap,
    tagline: "Better student outcomes need smarter infrastructure.",
    lead: "Adaptive learning systems, administrative workflow automation, 24/7 virtual academic advisors and student outcome analytics.",
    capabilities: ["Adaptive Learning Paths", "Enrolment Automation", "Virtual Advisor"],
  },
];

export default function IndustriesCategorySection() {
  return (
    <section id="industries" className="bg-white text-brand-primary py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-secondary" />
              <span className="text-xs font-bold text-brand-secondary uppercase tracking-[0.2em]">Five Sectors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary tracking-tight leading-none">
              Deep in Every Sector.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            We do not spread thin across every industry. We go deep in five — understanding workflows at the level that makes production AI possible.
          </p>
        </div>

        {/* Professional 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const IconComponent = ind.icon;
            return (
              <Link
                key={ind.id}
                href={ind.slug}
                className="group flex flex-col justify-between h-full bg-slate-50/50 border border-gray-200 rounded shadow-xl p-8 hover:bg-white  hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.04)] transition-all duration-200 relative overflow-hidden"
              >
                <div>
                  {/* Header: Number & Clean Vector Icon */}
                  

                  {/* Card Title & Tagline */}
                  <h3 className="text-xl font-bold text-brand-primary  transition-colors mb-3">
                    {ind.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-400 leading-normal mb-4">
                    {ind.tagline}
                  </p>

                  {/* Short Lead Text */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {ind.lead}
                  </p>
                </div>

                {/* Bottom Footer Section inside Card */}
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {ind.capabilities.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded bg-slate-100 border border-slate-200/50 text-slate-600"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Link */}
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
                    <span>Explore Solutions</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
                
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}