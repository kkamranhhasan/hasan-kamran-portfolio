"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollUp } from "@/components/ScrollUp";
import { skillsData, SkillCategory, Skill } from "@/data/skills";
import { FeaturedSkill } from "@/components/skills/FeaturedSkill";
import { Certifications } from "@/components/skills/Certifications";
import { RadarChart } from "@/components/skills/RadarChart";
import { SkillCard } from "@/components/skills/SkillCard";
import { getIconByName } from "@/components/skills/IconMapper";
import { X, CheckCircle2, Clock, Code, Layers } from "lucide-react";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "All">("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories: (SkillCategory | "All")[] = [
    "All", "Frontend", "Backend", "Database", "Tools & DevOps", "AI / Machine Learning"
  ];

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedCategory);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSkill]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <ScrollUp className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Code size={16} /> Skills Dashboard
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
          Technical Expertise.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          A comprehensive overview of my technical stack, proficiency levels, and real-world application experience.
        </p>
      </ScrollUp>

      {/* Featured Banner */}
      <ScrollUp delay={0.1}>
        <FeaturedSkill />
      </ScrollUp>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 mb-16">
        {/* Radar Chart Column */}
        <div className="lg:col-span-1">
          <ScrollUp delay={0.2}>
            <div className="bg-card/30 border border-border rounded-[2rem] p-8 h-full">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Layers className="text-primary" size={20} /> Proficiency Radar
              </h3>
              <RadarChart />
            </div>
          </ScrollUp>
        </div>

        {/* Skills Grid Column */}
        <div className="lg:col-span-2">
          <ScrollUp delay={0.3} className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Detailed Skill Map</h2>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2 mb-8 bg-card/50 p-2 rounded-2xl border border-border">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    selectedCategory === cat 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat === "AI / Machine Learning" ? "AI / ML" : cat}
                </button>
              ))}
            </div>
          </ScrollUp>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.id} 
                  skill={skill} 
                  index={index} 
                  onClick={() => setSelectedSkill(skill)} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Certifications */}
      <ScrollUp delay={0.4}>
        <Certifications />
      </ScrollUp>

      {/* Expandable Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl relative overflow-hidden"
            >
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-6 right-6 p-2 bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="p-4 bg-background border border-border rounded-2xl shadow-sm text-primary">
                  {React.createElement(getIconByName(selectedSkill.iconName), { size: 40 })}
                </div>
                <div>
                  <h2 className="text-3xl font-black text-foreground tracking-tight">{selectedSkill.name}</h2>
                  <p className="text-primary font-bold uppercase tracking-widest text-sm">{selectedSkill.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                <div className="bg-muted rounded-2xl p-4">
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block mb-1">Proficiency</span>
                  <span className="font-bold text-lg">{selectedSkill.level}% - {selectedSkill.proficiency}</span>
                </div>
                <div className="bg-muted rounded-2xl p-4">
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block mb-1">Experience</span>
                  <span className="font-bold text-lg flex items-center gap-2"><Clock size={16}/> {selectedSkill.experience}</span>
                </div>
              </div>

              <div className="mb-8 relative z-10">
                <h4 className="text-sm font-bold text-foreground mb-2">Description</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              <div className="relative z-10">
                <h4 className="text-sm font-bold text-foreground mb-3">Applied In Projects</h4>
                <div className="flex flex-col gap-2">
                  {selectedSkill.usedIn.map((project, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-background border border-border px-4 py-3 rounded-xl shadow-sm">
                      <CheckCircle2 size={18} className="text-green-500" />
                      <span className="font-semibold text-sm">{project}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
