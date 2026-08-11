import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getRelatedPosts,
  getAllSlugs,
  authors,
} from "../data";
import ArticleContent from "./components/ArticleContent";

// ─── Static params all slugs pre-rendered at build time ────────────────────

export async function generateStaticParams() {
  return getAllSlugs();
}

// ─── Per-post SEO metadata ────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  // Next.js 15: params is a Promise must be awaited
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | AgenticSense Blog" };

  const author = authors[post.author];
  const url    = `https://www.agenticsense.co/blog/${post.slug}`;

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.tags,
    authors: author ? [{ name: author.name }] : [],
    alternates: { canonical: url },

    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url,
      siteName: "AgenticSense",
      type: "article",
      publishedTime: post.date,
      authors: author ? [author.name] : [],
      tags: post.tags,
    },

    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
    },
  };
}

// ─── JSON-LD structured data component ───────────────────────────────────────

function ArticleStructuredData({ post, author }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: author?.name ?? "AgenticSense Team",
      jobTitle: author?.role,
    },
    publisher: {
      "@type": "Organization",
      name: "AgenticSense",
      url: "https://www.agenticsense.co",
    },
    url: `https://www.agenticsense.co/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }) {
  // Next.js 15: params is a Promise must be awaited
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author       = authors[post.author];
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  return (
    <>
      <ArticleStructuredData post={post} author={author} />
      <ArticleContent post={post} author={author} relatedPosts={relatedPosts} />
    </>
  );
}
