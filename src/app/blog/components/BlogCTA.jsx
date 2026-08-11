"use client";

export default function BlogCTA() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#1a194d] py-12 md:py-16 text-center relative overflow-hidden shadow-xl">

          {/* Brand glow / Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#625eff]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#625eff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#625eff]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-4">
            {/* Top Badge */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#625eff]/60" />
              <span className="text-xs font-bold text-[#625eff] uppercase tracking-[0.2em]">
                Weekly Newsletter
              </span>
              <div className="h-px w-8 bg-[#625eff]/60" />
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl mx-auto">
              Get production-grade AI insights. Zero hype.
            </h2>
            
            {/* Subheading */}
            <p className="text-white/60 text-base sm:text-lg leading-[1.65] tracking-[-0.005em] mb-8 max-w-xl mx-auto">
              Deep-dives into agentic workflows, ERP integrations, and enterprise automation. Only what we build, test, and break in productiondelivered straight to your inbox.
            </p>

            {/* Subscription Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#625eff] focus:bg-white/10 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-[#625eff] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#4f4bfa] active:scale-[0.98] transition-all whitespace-nowrap shadow-lg shadow-[#625eff]/20"
              >
                Join the Engineers →
              </button>
            </form>

            {/* Footer Text */}
            <p className="text-white/30 text-xs mt-4">
              Zero spam. Real engineering workflows. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}