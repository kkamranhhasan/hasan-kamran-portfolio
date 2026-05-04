"use client";

import { travelData } from "@/data/travel";
import { Calendar } from "lucide-react";

export function TravelTimeline() {
  // Group by year
  const timelineData = travelData.reduce((acc, place) => {
    if (!acc[place.visitYear]) acc[place.visitYear] = [];
    acc[place.visitYear].push(place);
    return acc;
  }, {} as Record<number, typeof travelData>);

  const years = Object.keys(timelineData).map(Number).sort((a, b) => b - a);

  return (
    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12 pb-8">
      {years.map((year) => (
        <div key={year} className="relative pl-8 md:pl-10">
          
          {/* Year Marker */}
          <div className="absolute -left-[17px] md:-left-[21px] top-0 bg-background border-4 border-primary rounded-full p-1.5 shadow-sm">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </div>

          <h3 className="text-3xl font-black text-foreground mb-6 flex items-center gap-3">
            {year}
            <span className="text-sm font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full">
              {timelineData[year].length} places
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {timelineData[year].map((place) => (
              <div key={place.id} className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors shadow-sm">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{place.region}</div>
                <div className="font-bold text-foreground mb-2">{place.name}</div>
                <p className="text-xs text-muted-foreground line-clamp-2">{place.description}</p>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
