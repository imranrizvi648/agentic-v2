import Link from "next/link";
import { formatDate } from "../../data";

// ─── Body block renderers ────────────────────────────────────────────────────

function renderBlock(block, idx) {
  switch (block.type) {
    case "intro":
      return (
        <p key={idx} className="text-lg text-slate-600 leading-relaxed font-medium border-l-4 border-[#625eff] pl-5 mb-8">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={idx} id={block.text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}
          className="text-2xl font-black text-[#1a194d] leading-tight mt-12 mb-5 scroll-mt-24">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="text-lg font-black text-[#1a194d] leading-tight mt-8 mb-4">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="text-base text-slate-600 leading-[1.85] mb-5">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <blockquote key={idx}
          className="my-8 bg-[#625eff]/5 border border-[#625eff]/20 rounded-xl px-4 sm:px-6 py-5">
          <p className="text-base text-[#1a194d] font-semibold leading-relaxed italic">
            "{block.text}"
          </p>
        </blockquote>
      );
    case "ul":
      return (
        <ul key={idx} className="mb-6 space-y-2 ml-1">
          {block.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#625eff] mt-2" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ArticleContent({ post, author, relatedPosts }) {
  // Build TOC from h2 blocks
  const headings = post.body.filter((b) => b.type === "h2");

  return (
    <main className="bg-white">

      {/* ── Article Hero ─────────────────────────────────── */}
      <div className={`relative bg-gradient-to-br ${post.coverGradient} pt-28 pb-20 overflow-hidden`}>
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(to right,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 font-medium mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/60 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Category */}
          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/60 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full mb-6">
            {post.category.replace(/-/g, " ")}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            {post.title}
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] font-black">
                {author?.name.charAt(0)}
              </div>
              <span className="font-semibold text-white/60">{author?.name}</span>
              <span className="text-white/25">·</span>
              <span>{author?.role}</span>
            </div>
            <span className="text-white/25">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-white/25">·</span>
            <span>{post.readTime}</span>
          </div>

        </div>
      </div>

      {/* ── Article Body ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* LEFT: Table of Contents (sticky) */}
          {headings.length > 0 && (
            <aside className="hidden lg:block md:col-span-1 lg:col-span-3">
              <div className="sticky top-28">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  In this article
                </p>
                <nav className="space-y-1" aria-label="Article contents">
                  {headings.map((h, i) => {
                    const id = h.text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                    return (
                      <a
                        key={i}
                        href={`#${id}`}
                        className="flex gap-3 py-2 text-xs text-slate-500 hover:text-[#625eff] transition-colors group"
                      >
                        <span className="flex-shrink-0 text-[#625eff]/30 group-hover:text-[#625eff] font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{h.text}</span>
                      </a>
                    );
                  })}
                </nav>

                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* RIGHT: Article prose */}
          <article
            className="lg:col-span-12 xl:col-span-9"
            itemScope
            itemType="https://schema.org/Article"
          >
            <meta itemProp="headline" content={post.title} />
            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="author" content={author?.name} />

            <div className="prose-style max-w-2xl">
              {post.body.map((block, idx) => renderBlock(block, idx))}
            </div>

            {/* ── Author card ───────────────────────── */}
            {author && (
              <div className="mt-16 pt-10 border-t border-slate-100">
                <div className="flex items-start gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#1a194d] flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                    {author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#1a194d] mb-0.5">{author.name}</p>
                    <p className="text-xs text-[#625eff] font-semibold mb-2">{author.role}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Part of the AgenticSense team — building production-grade agentic AI for enterprise finance, operations and sector automation.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </article>
        </div>
      </div>

      {/* ── Related Posts ─────────────────────────────── */}
      {relatedPosts?.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-100 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#625eff]" />
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#625eff]">
                Related Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#625eff]/30 hover:shadow-md transition-all"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${rp.coverGradient}`} />
                  <div className="p-5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#625eff] mb-3 block">
                      {rp.category.replace(/-/g, " ")}
                    </span>
                    <h3 className="text-sm font-black text-[#1a194d] leading-snug mb-3 group-hover:text-[#625eff] transition-colors">
                      {rp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span>{formatDate(rp.date)}</span>
                      <span>·</span>
                      <span>{rp.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back to blog CTA ──────────────────────────── */}
      <div className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#625eff] transition-colors"
          >
            ← All articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#625eff] text-white font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#7c6fff] transition-colors"
          >
            Discuss your automation needs →
          </Link>
        </div>
      </div>

    </main>
  );
}
