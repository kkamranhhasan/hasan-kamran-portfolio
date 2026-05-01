"use client";

import React, { useEffect, useState } from "react";
import { useWeather } from "./WeatherProvider";

export function RainOverlay() {
  const { isStormy } = useWeather();
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [bolts, setBolts] = useState<Array<{ id: number; left: number; delay: number; scale: number; rotate: number }>>([]);

  useEffect(() => {
    if (isStormy) {
      // Generate random raindrops
      const newDrops = Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // percentage left
        delay: Math.random() * 5, // animation delay
        duration: 0.5 + Math.random() * 0.5, // fall duration
      }));
      setDrops(newDrops);

      // Generate random lightning bolts
      const newBolts = Array.from({ length: 3 }).map((_, i) => ({
        id: i,
        left: 10 + Math.random() * 80, // between 10% and 90%
        delay: Math.random() * 8, // staggered flash times
        scale: 0.5 + Math.random() * 1.5, // different sizes
        rotate: -15 + Math.random() * 30, // slight angles
      }));
      setBolts(newBolts);
    } else {
      setDrops([]);
      setBolts([]);
    }
  }, [isStormy]);

  if (!isStormy) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-40] overflow-hidden">
      {/* Ambient Lightning Flash Overlay */}
      <div className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-0 animate-lightning mix-blend-overlay"></div>
      
      {/* Lightning Bolts */}
      {bolts.map((bolt) => (
        <svg
          key={`bolt-${bolt.id}`}
          viewBox="0 0 100 200"
          className="absolute top-0 opacity-0 animate-lightning-bolt drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
          style={{
            left: `${bolt.left}%`,
            width: `${bolt.scale * 100}px`,
            transform: `rotate(${bolt.rotate}deg)`,
            animationDelay: `${bolt.delay}s`,
            animationDuration: `12s` // longer cycle for random feel
          }}
        >
          <path d="M50 0 L10 90 L45 95 L20 200 L95 80 L55 75 Z" fill="#ffffff" />
        </svg>
      ))}

      {/* Rain Drops */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-[-10%] w-[1px] h-[10vh] bg-gradient-to-b from-transparent via-blue-400/40 to-blue-200/80 dark:via-blue-500/30 dark:to-blue-300/60 animate-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
