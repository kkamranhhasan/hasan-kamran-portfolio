"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData, SkillCategory } from "@/data/skills";

export function RadarChart() {
  // Aggregate averages per category
  const categories: SkillCategory[] = ["Frontend", "Backend", "Database", "Tools & DevOps", "AI / Machine Learning"];
  
  const aggregatedData = categories.map(cat => {
    const catSkills = skillsData.filter(s => s.category === cat);
    const avg = catSkills.reduce((sum, s) => sum + s.level, 0) / (catSkills.length || 1);
    return { category: cat, value: avg };
  });

  const size = 300;
  const center = size / 2;
  const radius = size / 2.5;
  const sides = categories.length;
  const angleStep = (Math.PI * 2) / sides;

  // Generate polygon points
  const getPoint = (value: number, index: number, max: number = 100) => {
    const r = (value / max) * radius;
    // Rotate by -PI/2 to start at top
    const angle = index * angleStep - Math.PI / 2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  // Background Webs (Draw pentagons at 25%, 50%, 75%, 100%)
  const gridLevels = [25, 50, 75, 100];

  const valuePoints = aggregatedData.map((d, i) => getPoint(d.value, i)).map(p => `${p.x},${p.y}`).join(" ");
  const fillPath = `M ${valuePoints} Z`;

  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-square flex items-center justify-center">
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        
        {/* Draw Background Radar Webs */}
        {gridLevels.map((level, i) => {
          const points = categories.map((_, index) => getPoint(level, index)).map(p => `${p.x},${p.y}`).join(" ");
          return (
            <polygon 
              key={level} 
              points={points} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              className="text-border/40"
            />
          );
        })}

        {/* Draw Axis Lines */}
        {categories.map((_, index) => {
          const p = getPoint(100, index);
          return (
            <line 
              key={index} 
              x1={center} 
              y1={center} 
              x2={p.x} 
              y2={p.y} 
              stroke="currentColor" 
              strokeWidth="1" 
              className="text-border/60"
            />
          );
        })}

        {/* Draw Data Polygon */}
        <motion.path 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 15, delay: 0.2 }}
          d={fillPath}
          fill="var(--primary)"
          fillOpacity="0.2"
          stroke="var(--primary)"
          strokeWidth="2"
          style={{ transformOrigin: "center" }}
        />

        {/* Draw Data Points */}
        {aggregatedData.map((d, index) => {
          const p = getPoint(d.value, index);
          return (
            <motion.circle 
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              cx={p.x} 
              cy={p.y} 
              r="4" 
              fill="var(--background)"
              stroke="var(--primary)"
              strokeWidth="2"
              className="z-20 relative"
            />
          );
        })}

        {/* Draw Labels */}
        {aggregatedData.map((d, index) => {
          const p = getPoint(120, index); // Push text out further than 100%
          
          // Small adjustments to text alignment based on position
          let textAnchor: "middle" | "start" | "end" = "middle";
          if (p.x < center - 10) textAnchor = "end";
          if (p.x > center + 10) textAnchor = "start";

          let yAdjust = 4;
          if (p.y < center - 10) yAdjust = 0;
          if (p.y > center + 10) yAdjust = 10;

          // Shorten names for the chart
          let label: string = d.category;
          if (label === "AI / Machine Learning") label = "AI / ML";
          if (label === "Tools & DevOps") label = "DevOps";

          return (
            <text 
              key={index} 
              x={p.x} 
              y={p.y + yAdjust} 
              textAnchor={textAnchor}
              className="text-[10px] sm:text-xs font-bold fill-foreground tracking-wider"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
