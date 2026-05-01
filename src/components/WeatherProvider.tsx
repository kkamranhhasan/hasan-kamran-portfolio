"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type WeatherContextType = {
  isStormy: boolean;
  toggleStorm: () => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [isStormy, setIsStormy] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("weather-stormy");
    if (saved === "true") {
      setIsStormy(true);
    }
  }, []);

  const toggleStorm = () => {
    setIsStormy((prev) => {
      const newState = !prev;
      localStorage.setItem("weather-stormy", String(newState));
      return newState;
    });
  };

  return (
    <WeatherContext.Provider value={{ isStormy, toggleStorm }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
