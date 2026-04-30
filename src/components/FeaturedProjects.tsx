"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FEATURED_PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe, and Sanity CMS. Features dynamic cart, user authentication, and a modern dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Task Manager",
    description: "A productivity app that uses AI to prioritize tasks and suggest scheduling. Built with React Native and an Express backend.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "OpenAI API", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function FeaturedProjects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
            <p className="text-muted-foreground md:text-lg max-w-[600px]">
              A selection of my recent projects. Check out my complete portfolio for more.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center text-sm font-medium hover:text-primary/80 transition-colors group"
          >
            View All Projects
            <ArrowUpRight className="ml-1 h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-2xl">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    Live Demo
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium hover:underline text-muted-foreground hover:text-foreground"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
