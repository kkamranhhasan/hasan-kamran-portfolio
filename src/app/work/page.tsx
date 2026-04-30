"use client";

import { ScrollUp } from "@/components/ScrollUp";

const EXPERIENCES = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    duration: "2022 - Present",
    description: "Leading the frontend team in building scalable enterprise web applications using Next.js and React. Improved performance by 40% and established CI/CD pipelines.",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Agency",
    duration: "2019 - 2022",
    description: "Developed and maintained multiple client websites and web apps. Worked closely with designers to implement pixel-perfect, responsive interfaces.",
  },
];

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <ScrollUp className="space-y-4 mb-16 md:mb-24">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-7xl">
          Work Experience
        </h1>
        <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl">
          My professional journey and career history.
        </p>
      </ScrollUp>

      <div className="flex flex-col gap-12">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
            
            {/* Sticky Left Column (Date & Company) */}
            <div className="md:w-1/3 shrink-0">
              <div className="sticky top-24 space-y-2">
                <ScrollUp delay={0}>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground/30">{exp.duration}</h3>
                  <h4 className="text-xl font-bold text-foreground">{exp.company}</h4>
                </ScrollUp>
              </div>
            </div>

            {/* Right Column (Details) */}
            <ScrollUp delay={0.1} y={50} className="md:w-2/3 w-full">
              <div className="p-8 md:p-10 rounded-3xl border border-border bg-card shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-foreground">{exp.role}</h2>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </ScrollUp>

          </div>
        ))}
      </div>
    </div>
  );
}
