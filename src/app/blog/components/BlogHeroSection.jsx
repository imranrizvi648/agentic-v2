import Link from "next/link";
import { getFeaturedPosts, formatDate } from "../data";

export default function BlogHeroSection() {
  const featured = getFeaturedPosts();
  const primary   = featured[0];
  const secondary = featured[1];

  return (
    <section className="relative bg-white border-b border-slate-100 pt-20 sm:pt-24 md:pt-28 pb-0 overflow-hidden">

      {/* Subtle top-left brand mark */}
      
    </section>
  );
}
