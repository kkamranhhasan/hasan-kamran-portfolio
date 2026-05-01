import { getSortedMarkdownData } from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollUp } from "@/components/ScrollUp";


export default function ProjectsPage() {
  const projects = getSortedMarkdownData("projects");

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <ScrollUp className="space-y-4 mb-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
          My Projects
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Here is a selection of my recent work. I love building things that solve real-world problems.
        </p>
      </ScrollUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any, index: number) => (
          <ScrollUp key={project.slug} delay={index * 0.1} className="h-full">
            <Link
              href={`/projects/${project.slug}`}
              className="group block h-full"
            >
              <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image
                    src={project.image || "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-xl line-clamp-1">{project.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags?.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags?.length > 3 && (
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </ScrollUp>
        ))}
      </div>
    </div>
  );
}
