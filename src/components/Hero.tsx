"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollUp } from "@/components/ScrollUp";

export function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12 md:py-24 relative overflow-hidden">

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          
          <ScrollUp duration={1} y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm font-medium shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
          </ScrollUp>

          <ScrollUp delay={0.1} duration={1} y={30} className="w-full">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.1] text-foreground">
              Building digital
              <br />
              products, brands, and
              <span className="inline-block mx-4 -mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl align-middle relative">
                <Image
                  src="/profile.jpg"
                  alt="Kamran Hasan"
                  fill
                  className="object-cover"
                  priority
                />
              </span>
              experiences.
            </div>
          </ScrollUp>

          <ScrollUp delay={0.2} duration={1} y={30} className="w-full">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mx-auto mt-6 leading-relaxed">
              Hi, I'm <span className="font-semibold text-foreground">Kamran Hasan</span>. A creative software engineer specializing in beautiful, accessible, human-centered interfaces.
            </p>
          </ScrollUp>

          <ScrollUp delay={0.3} duration={1} y={30}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background shadow transition-transform hover:scale-105 focus-visible:outline-none gap-2"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-muted focus-visible:outline-none gap-2"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </ScrollUp>

        </div>
      </div>
    </section>
  );
}
