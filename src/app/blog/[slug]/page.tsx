import { getAllMarkdownSlugs, getMarkdownData } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};


export async function generateStaticParams() {
  const slugs = getAllMarkdownSlugs("blog");
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getMarkdownData("blog", resolvedParams.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to blog
      </Link>

      <div className="space-y-8 mb-12 border-b border-border/40 pb-8">
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag: string) => (
            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          {post.author && (
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                {post.author.charAt(0)}
              </span>
              <span>{post.author}</span>
            </div>
          )}
        </div>
      </div>

      {post.coverImage && (
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border relative mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
