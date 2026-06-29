import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, updates, and insights from the Calvra team.",
};

const PINK = "#EC4899";
const DARK = "#111111";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      {/* Header */}
      <div className="mb-16 max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          From the team
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: DARK }}>
          Blog
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Thoughts, updates, and insights from the Calvra team.
        </p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-border rounded-2xl">
          <p className="text-muted-foreground text-lg font-medium mb-2">No posts yet.</p>
          <p className="text-sm text-muted-foreground">Check back soon — we&apos;re just getting started.</p>
        </div>
      ) : (
        <div className="space-y-0">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-8 border-t border-border last:border-b hover:bg-[#FAFAFA] -mx-4 px-4 rounded-xl transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: "#FDF2F8", color: PINK }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="text-xl font-bold mb-2 group-hover:text-[#EC4899] transition-colors"
                    style={{ color: DARK }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readingTime}</span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-[#EC4899] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}