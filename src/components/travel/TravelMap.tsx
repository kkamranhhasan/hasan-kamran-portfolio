"use client";

import React, { useState } from "react";
import { travelData, TravelPlace } from "@/data/travel";
import { motion, AnimatePresence } from "framer-motion";

export function TravelMap() {
  const [hoveredPlace, setHoveredPlace] = useState<TravelPlace | null>(null);

  const getRegionColorClass = (region: string) => {
    switch(region) {
      case "Sylhet": return "text-teal-400";
      case "Bandarban": return "text-emerald-400";
      case "Cox’s Bazar": return "text-blue-400";
      case "Sundarbans": return "text-green-500";
      case "Kuakata": return "text-orange-400";
      case "Barishal": return "text-cyan-400";
      case "Gopalganj": return "text-purple-400";
      default: return "text-primary";
    }
  };

  const getRegionBgClass = (region: string) => {
    switch(region) {
      case "Sylhet": return "bg-teal-500";
      case "Bandarban": return "bg-emerald-500";
      case "Cox’s Bazar": return "bg-blue-500";
      case "Sundarbans": return "bg-green-600";
      case "Kuakata": return "bg-orange-500";
      case "Barishal": return "bg-cyan-500";
      case "Gopalganj": return "bg-purple-500";
      default: return "bg-primary";
    }
  };

  // Generate SVG path for the travel journey
  const journeyPath = travelData.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.coordinates.x} ${p.coordinates.y}`).join(" ");

  return (
    <div className="w-full bg-slate-950 dark:bg-[#0a0a0a] border border-border/50 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl h-[350px] md:h-[550px] flex items-center justify-center">
      
      {/* Sleek Radar/Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-radial from-transparent via-slate-950/50 to-slate-950 dark:to-black pointer-events-none" />

      {/* Map Content Area */}
      <div className="relative w-full h-full max-w-[900px] mx-auto flex items-center justify-center">
        
        <div className="w-[85%] h-[85%] relative">
          
          {/* Animated SVG Flight Path */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
              d={journeyPath}
              fill="none"
              stroke="url(#line-gradient)"
              strokeWidth="0.4"
              strokeDasharray="1 1"
              className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
            />
          </svg>

          {/* Plotting points */}
          {travelData.map((place, index) => {
            const textColor = getRegionColorClass(place.region);
            const bgColor = getRegionBgClass(place.region);
            const isHovered = hoveredPlace?.id === place.id;
            
            return (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: index * 0.05 }}
                key={place.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 ${isHovered ? 'z-50' : 'hover:z-40'}`}
                style={{ left: `${place.coordinates.x}%`, top: `${place.coordinates.y}%` }}
                onMouseEnter={() => setHoveredPlace(place)}
                onMouseLeave={() => setHoveredPlace(null)}
              >
                <div className="relative flex flex-col items-center group">
                  
                  {/* Glowing Dot */}
                  <div className="relative flex items-center justify-center">
                    <div className={`absolute w-8 h-8 ${bgColor} opacity-20 rounded-full animate-ping`} />
                    <motion.div 
                      whileHover={{ scale: 1.5 }}
                      className={`relative w-3.5 h-3.5 rounded-full border-[2.5px] border-slate-950 shadow-[0_0_12px_rgba(255,255,255,0.4)] ${bgColor} z-20`}
                    />
                  </div>

                  {/* Minimalist HUD Label */}
                  <div className={`mt-1.5 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-lg text-[9px] md:text-[11px] font-bold tracking-wider transition-all duration-300 pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-70 text-white'}`}>
                    {place.name}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Dynamic Hover Tooltip */}
          <AnimatePresence>
            {hoveredPlace && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute z-50 bg-slate-900/95 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl pointer-events-none min-w-[180px] -translate-x-1/2 -translate-y-full"
                style={{ 
                  left: `${hoveredPlace.coordinates.x}%`, 
                  top: `calc(${hoveredPlace.coordinates.y}% - 24px)` 
                }}
              >
                <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${getRegionColorClass(hoveredPlace.region)}`}>
                  {hoveredPlace.region}
                </div>
                <div className="font-bold text-white text-base leading-tight mb-2">
                  {hoveredPlace.name}
                </div>
                <div className="text-xs text-white/60 line-clamp-2">
                  {hoveredPlace.description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs font-bold text-white/80 tracking-wider uppercase">Travel Route</span>
      </div>

    </div>
  );
}
