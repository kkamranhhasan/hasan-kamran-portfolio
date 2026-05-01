"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function MoonBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || resolvedTheme !== "dark") return null;

  return (
    <div 
      className="fixed top-[10%] right-[10%] md:right-[20%] w-24 h-24 md:w-32 md:h-32 rounded-full z-[-45] opacity-90 animate-pulse-slow mix-blend-screen transition-all duration-1000"
      style={{
        background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #e0e0e0 20%, #a0a0a0 80%)",
        boxShadow: "0 0 60px 15px rgba(255, 255, 255, 0.4), inset -10px -10px 20px rgba(0,0,0,0.6)"
      }}
    >
      {/* Subtle Moon Craters */}
      <div className="absolute top-[25%] left-[35%] w-[15%] h-[15%] rounded-full bg-black/15 blur-[2px]"></div>
      <div className="absolute top-[55%] left-[65%] w-[20%] h-[20%] rounded-full bg-black/15 blur-[2px]"></div>
      <div className="absolute top-[75%] left-[40%] w-[10%] h-[10%] rounded-full bg-black/15 blur-[1px]"></div>
      <div className="absolute top-[40%] left-[20%] w-[12%] h-[12%] rounded-full bg-black/10 blur-[1px]"></div>
    </div>
  );
}
