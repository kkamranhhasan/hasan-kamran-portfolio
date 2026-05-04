"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, BrainCircuit } from "lucide-react";

export function FeaturedSkill() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/10 shadow-2xl p-8 md:p-12 lg:p-16 mb-16 group"
    >
      {/* Background Animated Glows */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/30 transition-colors duration-700" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
            <Sparkles size={16} className="text-primary" /> Core Specialization
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Full Stack Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">& AI Integration</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-medium">
            Bridging the gap between scalable, interactive frontend architectures and powerful machine learning backends. I build intelligent applications that don't just look beautiful, but think beautifully.
          </p>
        </div>

        {/* Decorative Icons */}
        <div className="hidden lg:flex relative items-center justify-center w-64 h-64 shrink-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[2px] border-dashed border-white/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-[1px] border-white/10 rounded-full"
          />
          <div className="flex items-center justify-center gap-4 bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
            <Code2 size={48} className="text-primary" />
            <div className="w-px h-12 bg-white/20" />
            <BrainCircuit size={48} className="text-purple-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
