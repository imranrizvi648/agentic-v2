import Link from "next/link";
import { getFeaturedPosts, formatDate } from "../data";

export default function BlogHeroSection() {
  const featured = getFeaturedPosts();
  const primary   = featured[0];
  const secondary = featured[1];

  return (
    <section className="relative bg-white border-b border-slate-100 pt-20 sm:pt-24 md:pt-28 pb-0 overflow-hidden">

      {/* Subtle top-left brand mark */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#625eff]/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="flex items-end justify-between mb-12 border-b border-slate-900/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#625eff]" />
              <span className="text-xs font-bold text-[#625eff] uppercase tracking-[0.2em]">
                Perspectives & Engineering
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-primary tracking-tight leading-tight">
              The Blog
            </h1>
          </div>
          <p className="hidden md:block text-sm text-slate-500 max-w-xs text-right leading-relaxed">
            Production AI, enterprise engineering and sector insights from the AgenticSense team.
          </p>
        </div>

        {/* Featured grid */}
        {primary && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-16">

            {/* Primary featured — large */}
            <Link
              href={`/blog/${primary.slug}`}
              className="md:col-span-1 lg:col-span-3 group relative rounded-2xl overflow-hidden min-h-[420px] flex flex-col justify-end"
            >
              {/* Gradient cover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${primary.coverGradient}`} />
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(to right,rgba(255,255,255,0.5) 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                    Featured
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#625eff]/80 bg-[#625eff]/20 px-2 py-0.5 rounded-full">
                    {primary.category.replace("-", " ")}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 group-hover:text-brand-secondary transition-colors">
                  {primary.title}
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-md">
                  {primary.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/40">{formatDate(primary.date)}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs text-white/40">{primary.readTime}</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-[#625eff] group-hover:gap-2 transition-all">
                    Read →
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary featured + nav column */}
            <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-5">
              {secondary && (
                <Link
                  href={`/blog/${secondary.slug}`}
                  className="group relative rounded-2xl overflow-hidden flex-1 min-h-[200px] flex flex-col justify-end"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${secondary.coverGradient}`} />
                  <div className="relative p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-3 block">
                      {secondary.category.replace("-", " ")}
                    </span>
                    <h2 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-brand-secondary transition-colors">
                      {secondary.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/40">{formatDate(secondary.date)}</span>
                      <span className="text-xs text-white/40">{secondary.readTime}</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Quick stat strip */}
              <div className="bg-[#1a194d] rounded-2xl p-6">
                <p className="text-xs font-bold text-[#625eff] uppercase tracking-widest mb-4">
                  In this publication
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "6+", label: "Articles published" },
                    { val: "4", label: "Topic categories" },
                    { val: "3", label: "Contributing authors" },
                    { val: "Weekly", label: "Publishing cadence" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-xl font-black text-white">{s.val}</p>
                      <p className="text-[10px] text-white/35 font-semibold uppercase tracking-wide">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
