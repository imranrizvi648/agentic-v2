const testimonials = [
  {
    quote: "AgenticSense understood our compliance requirements without us having to explain them. The agent they built would never have come from a general AI firm.",
    author: "Name, Title",
    company: "Financial Services Group",
    sector: "Finance & Banking",
    accent: "text-amber-400",
  },
  {
    quote: "They delivered a working automation against our live systems in weeks, not quarters. And it is still running in production without manual intervention.",
    author: "Name, Title",
    company: "Healthcare Organisation",
    sector: "Healthcare",
    accent: "text-emerald-400",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0d0d14] py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">Client Voice</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-14 max-w-2xl">
          From the Teams Running Our Agents in Production.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-5xl text-white/10 font-serif leading-none mb-6 select-none">"</div>
              <p className="text-base text-white/70 font-medium leading-relaxed italic mb-8">{t.quote}</p>
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.07]">
                <div>
                  <p className="text-xs font-bold text-white/60">{t.author}</p>
                  <p className="text-xs text-white/30">{t.company}</p>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${t.accent}`}>{t.sector}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/20 text-center mt-6">
          Add 2–3 attributed quotes with specific outcomes before publishing.
        </p>
      </div>
    </section>
  );
}
