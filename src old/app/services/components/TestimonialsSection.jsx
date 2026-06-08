export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "AgenticSense delivered a working AP agent inside our SAP environment faster than we thought possible — and it actually runs in production.",
      author: "Name, Title",
      company: "Company",
    },
    {
      quote: "They understand finance at the level of the posting logic, not just the buzzwords. That is rare.",
      author: "Name, Title",
      company: "Company",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-14 sm:py-12 sm:py-10 sm:py-14 md:py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-indigo-500" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600">What Clients Say</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
          From the Teams Running Our Agents in Production
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <div className="text-3xl text-indigo-200 font-serif leading-none mb-4">"</div>
              <p className="text-base text-slate-700 font-medium leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-black text-xs">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">{t.author}</p>
                  <p className="text-xs text-slate-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4 text-center">
          Add 2–3 short, attributed quotes with specific results before publishing. A specific outcome converts far better than general praise.
        </p>
      </div>
    </section>
  );
}