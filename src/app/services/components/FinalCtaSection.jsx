import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section
      className="relative py-14 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
         
          "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" /> 
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
       

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          Put an AI Agent to Work in Your Business.
        </h2>

        <p className="text-base text-white/80 leading-relaxed mb-10">
          Tell us the workflow that costs your team the most time. In a free Finance Automation Assessment, we'll show you exactly what an agent that runs inside your own systems could do with it. In a free
          Finance Automation Assessment, we will show you exactly what an agent
          that runs inside your own systems could do with it — no cost, no
          obligation.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#1a194d] text-white font-bold text-sm px-7 py-4 rounded-none hover:bg-indigo-700 transition-colors"
          >
            Book Your Free Assessment →
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.03] text-white/90 font-bold text-sm px-7 py-4 rounded-none border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-200"
          >
            Request a Demo
          </Link>
        </div>

      
      </div>
    </section>
  );
}