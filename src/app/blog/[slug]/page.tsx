import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/mdx";
import { getMDXComponents } from "@/components/mdx-components";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const PINK = "#EC4899";
const DARK = "#111111";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft size={15} /> All posts
      </Link>

      <div className="max-w-2xl">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
          style={{ color: DARK }}
        >
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-border">
          <span className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">{post.readingTime}</span>
        </div>

        {/* Content */}
        <div className="prose-sm max-w-none">
          <MDXRemote source={post.content} components={getMDXComponents()} />
        </div>

        {/* Back link bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} /> Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}