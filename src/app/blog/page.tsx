import { getSortedMarkdownData } from "@/lib/markdown";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog | Kamran",
  description: "Writing about web development, design, and technology.",
};

export default function BlogPage() {
  const posts = getSortedMarkdownData("blog");

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
          Blog
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          My thoughts, learnings, and tutorials on web development and software engineering.
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post: any) => (
          <article key={post.slug} className="group relative flex flex-col md:flex-row gap-8 items-start border-b border-border/40 pb-12">
            <div className="w-full md:w-1/3 aspect-video md:aspect-square relative rounded-2xl overflow-hidden shrink-0 border border-border">
              <Image
                src={post.coverImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col flex-1 space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags?.map((tag: string) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground relative z-10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center text-sm font-medium text-primary">
                Read article <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
