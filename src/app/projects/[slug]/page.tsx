import { getAllMarkdownSlugs, getMarkdownData } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};


export async function generateStaticParams() {
  const slugs = getAllMarkdownSlugs("projects");
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = await getMarkdownData("projects", resolvedParams.slug).catch(() => null);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to projects
      </Link>

      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-b border-border/40 pb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-2"
            >
              <Globe className="h-4 w-4" />
              Live Website
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground gap-2"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
        </div>

        {project.image && (
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-border relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />

          <div className="space-y-8">
            {project.tags && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.category && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Category</h3>
                <p className="font-medium">{project.category}</p>
              </div>
            )}
            {project.date && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Date</h3>
                <p className="font-medium">
                  {new Date(project.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
