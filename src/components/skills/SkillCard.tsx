"use client";

import { motion } from "framer-motion";
import { Skill } from "@/data/skills";
import { getIconByName } from "@/components/skills/IconMapper";
import { CheckCircle2, Clock } from "lucide-react";

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
  index: number;
}

export function SkillCard({ skill, onClick, index }: SkillCardProps) {
  const IconComponent = getIconByName(skill.iconName);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      className="group bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-6 hover:bg-card hover:border-primary/50 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col h-full"
    >
      {/* Hover Glow */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-500" />
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="p-3 bg-background border border-border rounded-2xl group-hover:scale-110 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shadow-sm">
          <IconComponent size={28} />
        </div>
        <div>
          <h3 className="font-bold text-foreground text-lg leading-tight">{skill.name}</h3>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {skill.category}
          </span>
        </div>
      </div>

      {/* Progress & Level */}
      <div className="space-y-2 mb-6 relative z-10 flex-1">
        <div className="flex justify-between items-end mb-1">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
            skill.proficiency === "Expert" ? "bg-purple-500/10 text-purple-500" :
            skill.proficiency === "Advanced" ? "bg-blue-500/10 text-blue-500" :
            skill.proficiency === "Intermediate" ? "bg-green-500/10 text-green-500" :
            "bg-orange-500/10 text-orange-500"
          }`}>
            {skill.proficiency}
          </span>
          <span className="text-sm font-black text-foreground">{skill.level}%</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
            className={`h-full rounded-full ${
              skill.proficiency === "Expert" ? "bg-purple-500" :
              skill.proficiency === "Advanced" ? "bg-blue-500" :
              skill.proficiency === "Intermediate" ? "bg-green-500" :
              "bg-orange-500"
            }`}
          />
        </div>
      </div>

      {/* Experience & Tags */}
      <div className="pt-4 border-t border-border/50 relative z-10">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-3">
          <Clock size={14} className="text-primary" /> Experience: {skill.experience}
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {skill.usedIn.slice(0, 2).map((project, i) => (
            <span key={i} className="text-[10px] font-semibold bg-background border border-border px-2 py-0.5 rounded-md text-foreground/70 flex items-center gap-1">
              <CheckCircle2 size={10} className="text-primary" /> {project}
            </span>
          ))}
          {skill.usedIn.length > 2 && (
            <span className="text-[10px] font-semibold bg-background border border-border px-2 py-0.5 rounded-md text-foreground/50">
              +{skill.usedIn.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
