"use client";

import Image from "next/image";
import { ScrollUp } from "@/components/ScrollUp";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <ScrollUp className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-7xl mb-4">
          About Me
        </h1>
        <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl">
          A glimpse into my journey, philosophy, and who I am beyond the code.
        </p>
      </ScrollUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Image Section */}
        <ScrollUp delay={0.2} y={50} className="lg:col-span-5 relative">
          <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-border shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
            <Image 
              src="/profile.jpg" 
              alt="Kamran Hasan" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-[-1]"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-[-1]"></div>
        </ScrollUp>

        {/* Content Section */}
        <div className="lg:col-span-7 space-y-10">
          <ScrollUp delay={0.3} y={30}>
            <h2 className="text-3xl font-bold text-foreground mb-4">The Journey So Far</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <strong>Kamran Hasan</strong>, an AI Engineer and Researcher dedicated to building innovative software and exploring the cutting edge of artificial intelligence.
              </p>
              <p>
                My journey began with a deep curiosity about how things work on the internet. That curiosity quickly transformed into a passion for software development, problem-solving, and creating intuitive user experiences.
              </p>
              <p>
                Currently pursuing my Bachelor of Science in Computer Science and Engineering at East West University, I am constantly expanding my skill set, learning new frameworks, and refining my understanding of complex architectural patterns.
              </p>
            </div>
          </ScrollUp>

          <ScrollUp delay={0.4} y={30}>
            <div className="p-8 rounded-[2rem] bg-card/50 backdrop-blur-xl border border-border">
              <h3 className="text-2xl font-bold mb-4">Core Philosophy</h3>
              <p className="text-muted-foreground text-lg italic leading-relaxed">
                "I believe that great software is a perfect blend of robust engineering and beautiful design. It's not just about writing code that works; it's about crafting experiences that people love to use."
              </p>
            </div>
          </ScrollUp>

          <ScrollUp delay={0.5} y={30} className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-foreground mb-2">Location</h4>
              <p className="text-muted-foreground">Dhaka, Bangladesh</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Focus</h4>
              <p className="text-muted-foreground">AI, Web Engineering</p>
            </div>
          </ScrollUp>
        </div>
      </div>
    </div>
  );
}
