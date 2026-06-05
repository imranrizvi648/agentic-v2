import Link from "next/link";

const sectors = [
  { label: "Finance & Banking", color: "text-amber-400 border-amber-400/20 bg-amber-400/5" },
  { label: "Healthcare",        color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5" },
  { label: "Real Estate",       color: "text-sky-400 border-sky-400/20 bg-sky-400/5" },
  { label: "E-commerce",        color: "text-violet-400 border-violet-400/20 bg-violet-400/5" },
  { label: "Education",         color: "text-rose-400 border-rose-400/20 bg-rose-400/5" },
];

export default function FinalCtaSection() {
  return (
    <section
      className="relative py-14 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Overlay (Pehle code jesa exact 70% dark overlay) */}
      <div className="absolute inset-0 bg-black/70" /> 

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          Tell Us Which Sector Process Costing the Most Time.
        </h2>

        {/* Body Text */}
        <p className="text-base text-white/80 leading-relaxed mb-10">
          In a free Industry AI Assessment, we identify your single highest-value automation opportunity, 
          sketch how a production agent handles it inside your real systems, and give you an honest 
          view of integration complexity, compliance requirements and expected impact — at no cost.
        </p>

        {/* Buttons (Exact Pehle code ka layout aur rounded-none styling) */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[#1a194d] text-white font-bold text-sm px-7 py-4 rounded-none hover:bg-indigo-700 transition-colors"
          >
            Book Your Free Sector Assessment →
          </Link>

          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.03] text-white/90 font-bold text-sm px-7 py-4 rounded-none border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-200"
          >
            Request a Demo
          </Link>
        </div>

        {/* Sector Micro-Pills */}
        

        {/* Footer Meta Data */}
        <div className="pt-5 border-t border-white/[0.1] max-w-xl mx-auto">
          
        </div>

      </div>
    </section>
  );
}