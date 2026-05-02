"use client";


import Image from "next/image";
import { ScrollUp } from "@/components/ScrollUp";
import { FizzyButton } from "@/components/FizzyButton";

export function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12 md:py-24 relative overflow-hidden">

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12 lg:gap-8">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 flex-1">


            <ScrollUp delay={0.1} duration={1} y={30} className="w-full">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary/80 to-foreground/50 animate-pulse-slow pb-4">
                Kamran
                <br />
                Hasan
              </h1>
            </ScrollUp>

            <ScrollUp delay={0.2} duration={1} y={30} className="w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                <span className="text-primary">AI Engineer</span> & Researcher.
              </h2>
            </ScrollUp>

            <ScrollUp delay={0.3} duration={1} y={30} className="w-full">
              <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 mt-6 leading-relaxed">
                A creative problem solver specializing in building intelligent systems, exploring the frontiers of artificial intelligence, and crafting beautiful interfaces.
              </p>
            </ScrollUp>

            <ScrollUp delay={0.3} duration={1} y={30}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

                <FizzyButton />
              </div>
            </ScrollUp>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <ScrollUp delay={0.4} duration={1} y={30}>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full lg:rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl hover:scale-105 hover:-translate-y-2 hover:rotate-2 hover:shadow-primary/20 transition-all duration-700 ease-out">
                <Image
                  src="/profile.jpg"
                  alt="Kamran Hasan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollUp>
          </div>

        </div>
      </div>
    </section>
  );
}
