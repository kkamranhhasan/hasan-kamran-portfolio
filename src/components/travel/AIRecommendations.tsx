"use client";

import { Sparkles } from "lucide-react";
import { travelBucketList } from "@/data/travel";

export function AIRecommendations() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Sparkles size={120} />
      </div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/20 text-primary rounded-xl">
          <Sparkles size={24} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">AI Travel Suggestions</h3>
      </div>
      
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Based on your previous visits to beaches and hill tracts, our mock AI suggests adding these stunning destinations to your future itinerary.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {travelBucketList.map((item, idx) => (
          <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/50 hover:bg-card transition-colors">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{item.region}</div>
            <div className="font-bold text-foreground text-lg mb-2">{item.name}</div>
            <p className="text-sm text-muted-foreground">{item.expectation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
