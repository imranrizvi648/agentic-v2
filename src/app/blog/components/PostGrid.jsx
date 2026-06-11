"use client";
import { useState } from "react";
import Link from "next/link";
import { posts, categories, formatDate } from "../data";

function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#625eff]/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Cover strip */}
      <div className={`h-2 bg-gradient-to-r ${post.coverGradient}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#625eff] bg-[#625eff]/8 border border-[#625eff]/15 px-2.5 py-1 rounded-full">
            {post.category.replace(/-/g, " ")}
          </span>
          <span className="text-[10px] text-slate-400 font-medium">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-black text-[#1a194d] leading-snug mb-3 group-hover:text-[#625eff] transition-colors flex-1">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-slate-500 leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date block */}
        <div className="flex items-center justify-end pt-4 border-t border-slate-100">
          <span className="text-[10px] text-slate-400 flex-shrink-0">{formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  );
}

export default function PostGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-slate-50/50 py-10 sm:py-14 md:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Category filter tabs */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#1a194d] text-white border-[#1a194d] shadow-sm"
                  : "bg-white text-slate-500 border-slate-200 hover:border-[#625eff]/40 hover:text-[#625eff]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Post count */}
        <p className="text-xs text-slate-400 font-semibold mb-6 uppercase tracking-widest">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          {activeCategory !== "all" && ` in "${categories.find(c => c.id === activeCategory)?.label}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <p className="text-slate-400 text-sm">No articles in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}