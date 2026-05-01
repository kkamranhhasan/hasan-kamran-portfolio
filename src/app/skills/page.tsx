"use client";

import { ScrollUp } from "@/components/ScrollUp";

import { 
  SiReact, SiTypescript, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiPostgresql, SiFirebase, SiGithub, SiVercel, SiFigma 
} from "react-icons/si";

const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95, icon: SiReact },
      { name: "TypeScript", level: 90, icon: SiTypescript },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss },
      { name: "Framer Motion", level: 85, icon: SiFramer },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", level: 80, icon: SiNodedotjs },
      { name: "PostgreSQL", level: 75, icon: SiPostgresql },
      { name: "Firebase", level: 85, icon: SiFirebase },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", level: 90, icon: SiGithub },
      { name: "Vercel / Netlify", level: 90, icon: SiVercel },
      { name: "Figma", level: 80, icon: SiFigma },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <ScrollUp className="space-y-4 mb-16 md:mb-24">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-7xl">
          Skills & Expertise
        </h1>
        <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl">
          Technologies and tools I use to build digital products.
        </p>
      </ScrollUp>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skillGroup, index) => (
          <ScrollUp
            key={skillGroup.category}
            delay={index * 0.1}
            className="w-full h-full"
          >
            <div className="p-8 md:p-10 rounded-[2rem] border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8 relative z-10 text-foreground tracking-tight">{skillGroup.category}</h2>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-md text-sm md:text-base font-bold text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] cursor-default group/skill"
                  >
                    <skill.icon className="text-lg md:text-xl transition-transform group-hover/skill:scale-110" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollUp>
        ))}
      </div>
    </div>
  );
}
