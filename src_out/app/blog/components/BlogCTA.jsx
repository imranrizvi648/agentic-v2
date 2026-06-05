"use client";
export default function BlogCTA() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#1a194d] p-12 md:p-16 text-center relative overflow-hidden">

          {/* Brand glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#625eff]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#625eff]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#625eff]" />
              <span className="text-xs font-bold text-[#625eff] uppercase tracking-[0.2em]">
                Stay informed
              </span>
              <div className="h-px w-8 bg-[#625eff]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 max-w-xl mx-auto">
              Production AI Insights — Straight to Your Inbox.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Engineering-depth articles on agentic AI, ERP integration and sector automation. No generic AI hype — only what we build and learn in production.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.08] border border-white/10 text-white placeholder:text-white/30 text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#625eff]/60 focus:bg-white/10 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-[#625eff] text-white font-bold text-sm px-4 sm:px-6 py-3 rounded-lg hover:bg-[#7c6fff] transition-colors whitespace-nowrap"
              >
                Subscribe →
              </button>
            </form>

            <p className="text-white/20 text-xs mt-4">
              No spam. Unsubscribe at any time. We publish weekly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
