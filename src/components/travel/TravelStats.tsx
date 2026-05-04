"use client";

import { travelData } from "@/data/travel";
import { Map, MapPin, Navigation, Compass, Star } from "lucide-react";
import { ScrollUp } from "@/components/ScrollUp";

export function TravelStats() {
  const totalPlaces = travelData.length;
  const totalRegions = new Set(travelData.map((d) => d.region)).size;
  const avgRating = (travelData.reduce((acc, curr) => acc + curr.rating, 0) / totalPlaces).toFixed(1);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
      <ScrollUp delay={0.1} y={20}>
        <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
            <MapPin size={24} />
          </div>
          <h3 className="text-3xl font-black text-foreground">{totalPlaces}</h3>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Places Visited</p>
        </div>
      </ScrollUp>

      <ScrollUp delay={0.2} y={20}>
        <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
          <div className="p-3 bg-green-500/10 text-green-500 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all">
            <Map size={24} />
          </div>
          <h3 className="text-3xl font-black text-foreground">{totalRegions}</h3>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Districts</p>
        </div>
      </ScrollUp>

      <ScrollUp delay={0.3} y={20}>
        <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
          <div className="p-3 bg-orange-500/10 text-orange-500 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
            <Navigation size={24} />
          </div>
          <h3 className="text-3xl font-black text-foreground">12+</h3>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Total Trips</p>
        </div>
      </ScrollUp>

      <ScrollUp delay={0.4} y={20}>
        <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
          <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all">
            <Star size={24} />
          </div>
          <h3 className="text-3xl font-black text-foreground">{avgRating}</h3>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Avg Rating</p>
        </div>
      </ScrollUp>
    </div>
  );
}
