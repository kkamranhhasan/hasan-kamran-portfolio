"use client";

import * as React from "react";
import { CloudLightning, CloudOff } from "lucide-react";
import { useWeather } from "./WeatherProvider";

export function WeatherToggle() {
  const { isStormy, toggleStorm } = useWeather();

  return (
    <button
      onClick={toggleStorm}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-colors"
      aria-label="Toggle storm mode"
    >
      <CloudOff className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${isStormy ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"}`} />
      <CloudLightning className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${isStormy ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"}`} />
    </button>
  );
}
