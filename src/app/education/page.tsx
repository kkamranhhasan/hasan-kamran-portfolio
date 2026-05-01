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
    customLogo: "https://ewubd.edu/themes/east-west-university/assets/default/images/logo.png",
    duration: "Ongoing (Expected 2027)",
    description: "Currently pursuing a bachelor's degree in Computer Science and Engineering.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    school: "KPC",
    link: "https://www.kpcbd.edu.bd/",
    logoDomain: "kpcbd.edu.bd",
    customLogo: "https://www.kpcbd.edu.bd/wp-content/uploads/2023/12/NEW_2022-150x150.png",
    duration: "2019 - 2020",
    description: "Group: Science | GPA: 5.00/5.00",
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    school: "MAHMSC",
    link: "https://www.mahmsc.edu.bd/",
    logoDomain: "mahmsc.edu.bd",
    customLogo: "https://team-x.ap-south-1.linodeobjects.com/team-x.ap-south-1.linodeobjects.com/uploads/schoolInfo/3Uigtflz2Ug2l3gb4gHnFKtekT3CjKUoDQK3p3sn.png",
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
            <div className="relative p-6 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-border bg-card/50 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Floating Logo - Clickable */}
              <a href={edu.link} target="_blank" rel="noreferrer" className="absolute -top-6 -right-2 md:-top-8 md:-right-4 lg:-top-10 lg:-right-6 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl md:rounded-3xl bg-white shadow-xl overflow-hidden border-4 md:border-[6px] border-background z-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 flex items-center justify-center">
                <img 
                  src={edu.customLogo || `https://www.google.com/s2/favicons?domain=${edu.logoDomain}&sz=256`} 
                  alt={`${edu.school} Logo`} 
                  className="w-full h-full object-contain p-3 md:p-5"
                  loading="lazy"
                />
              </a>
              
              <div className="relative z-0 pr-16 md:pr-24 lg:pr-32">
                <span className="inline-block text-xs md:text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap mb-4">
                  {edu.duration}
                </span>
                <h3 className="font-bold text-xl md:text-3xl lg:text-4xl text-foreground mb-3 leading-tight tracking-tight">{edu.degree}</h3>
                
                <div className="flex flex-col mb-4">
                  <span className="text-lg md:text-xl font-semibold text-muted-foreground">{edu.school}</span>
                  <a href={edu.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm md:text-base text-primary/80 hover:text-primary transition-colors group/link mt-1 w-fit">
                    {edu.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </a>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">{edu.description}</p>
              </div>
            </div>
          </ScrollUp>
        ))}
      </div>
    </div>
  );
}
