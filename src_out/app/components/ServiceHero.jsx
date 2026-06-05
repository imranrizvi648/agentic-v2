import Link from "next/link";

export default function ServiceHero({ number, tagline, headline, highlight, sub, cta1, cta2, trustLabel, badges }) {
  const parts = headline.split(highlight);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 pt-32 pb-20 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Accent blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Service number + eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-black text-indigo-400 tracking-widest uppercase">{number}</span>
          <span className="w-4 h-px bg-indigo-300" />
          <span className="text-xs font-bold text-slate-500 tracking-wide uppercase">{tagline}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-4xl mb-6">
          {parts[0]}
          <span className="text-indigo-600">{highlight}</span>
          {parts[1]}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">{sub}</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-sm px-6 py-3.5 rounded-md hover:bg-indigo-700 transition-colors"
          >
            {cta1}
            <span className="text-indigo-300">→</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-slate-700 font-bold text-sm px-6 py-3.5 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all"
          >
            {cta2}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{trustLabel}</span>
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
