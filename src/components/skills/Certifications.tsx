"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificationsData } from "@/data/skills";

export function Certifications() {
  return (
    <div className="mt-24">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-2xl">
          <Award size={28} />
        </div>
        <h2 className="text-3xl font-black text-foreground tracking-tight">Certifications & Courses</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-[30px] group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="text-xl font-bold text-foreground leading-tight max-w-[80%]">{cert.title}</h3>
              <span className="text-xs font-bold px-3 py-1 bg-muted text-muted-foreground rounded-full">
                {cert.date}
              </span>
            </div>
            
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4 relative z-10">
              {cert.issuer}
            </p>
            
            <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
