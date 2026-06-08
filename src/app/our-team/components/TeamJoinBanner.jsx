export default function TeamJoinBanner() {
  return (
    <section className="bg-[#1a194d] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#625eff] animate-pulse" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#625eff]">We're Hiring</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
              Think you belong here?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/60">
              We're always looking for exceptional people. If you're passionate about enterprise AI, ERP integration and building agents that actually run in production — we want to hear from you.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
