"use client";

import { ExternalLink } from "lucide-react";
import { ScrollUp } from "@/components/ScrollUp";

const EDUCATION = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science and Engineering",
    school: "East West University",
    link: "https://ewubd.edu",
    logoDomain: "ewubd.edu",
    duration: "Ongoing (Expected 2027)",
    description: "Currently pursuing a bachelor's degree in Computer Science and Engineering.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    school: "KPC",
    link: "https://www.kpcbd.edu.bd/",
    logoDomain: "kpcbd.edu.bd",
    duration: "2019 - 2020",
    description: "Group: Science | GPA: 5.00/5.00",
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    school: "MAHMSC",
    link: "https://www.mahmsc.edu.bd/",
    logoDomain: "mahmsc.edu.bd",
    duration: "2017 - 2018",
    description: "Group: Science | GPA: 5.00/5.00",
  },
];

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      <ScrollUp className="space-y-4 mb-16">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
          Education
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          My academic background and qualifications.
        </p>
      </ScrollUp>

      <div className="grid grid-cols-1 gap-16 md:gap-24 mt-16 md:mt-24">
        {EDUCATION.map((edu, index) => (
          <ScrollUp
            key={edu.id}
            delay={0.1}
            y={50}
            className="w-full"
          >
            <div className="relative p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-border bg-card/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
              {/* Massive Floating Logo */}
              <div className="absolute -top-8 -right-4 md:-top-12 md:-right-8 lg:-top-16 lg:-right-12 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-[1.5rem] md:rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border-8 border-background z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${edu.logoDomain}&sz=256`} 
                  alt={`${edu.school} Logo`} 
                  className="w-full h-full object-contain p-4 md:p-8"
                  loading="lazy"
                />
              </div>
              
              <div className="relative z-0 pr-20 md:pr-32 lg:pr-40">
                <span className="inline-block text-sm md:text-base font-bold text-primary bg-primary/10 px-4 py-2 rounded-full whitespace-nowrap mb-6 md:mb-8">
                  {edu.duration}
                </span>
                <h3 className="font-black text-2xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 leading-tight tracking-tight">{edu.degree}</h3>
                
                <a href={edu.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xl md:text-2xl text-muted-foreground font-semibold mb-6 hover:text-primary transition-colors group/link">
                  {edu.school}
                  <ExternalLink size={20} className="opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </a>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-2xl">{edu.description}</p>
              </div>
            </div>
          </ScrollUp>
        ))}
      </div>
    </div>
  );
}
