"use client";

import React, { useState } from "react";
import { travelData, Category } from "@/data/travel";
import { TravelStats } from "@/components/travel/TravelStats";
import { TravelMap } from "@/components/travel/TravelMap";
import { PlaceCard } from "@/components/travel/PlaceCard";
import { TravelTimeline } from "@/components/travel/TravelTimeline";
import { AIRecommendations } from "@/components/travel/AIRecommendations";
import { ScrollUp } from "@/components/ScrollUp";
import { Search, Filter, Compass, Heart } from "lucide-react";

export default function TravelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

  const categories: (Category | "All")[] = ["All", "Beach", "Hill", "Forest", "Historic", "Water Body", "City"];

  const filteredPlaces = travelData.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          place.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPlace = travelData.find(p => p.id === "saint_martin") || travelData[0];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      
      {/* Header Banner */}
      <section className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-end p-6 md:p-12 lg:p-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/travel-bg.jpg" 
            alt="Travel Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/20" />
        </div>
        
        {/* Header Text */}
        <div className="relative z-10">
          <ScrollUp>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-foreground drop-shadow-xl">
              Exploring the World.
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl font-medium drop-shadow-md pb-12">
              A visual journey through the places I've visited, the experiences I've gathered, and the destinations calling my name next.
            </p>
          </ScrollUp>
        </div>
      </section>

      {/* Stats - Overlapping the banner */}
      <section className="-mt-20 md:-mt-24 relative z-20 px-2">
        <TravelStats />
      </section>

      {/* Featured / Favorite */}
      <section>
        <ScrollUp y={40}>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="text-rose-500 fill-rose-500" size={28} />
            <h2 className="text-3xl font-bold">Featured Favorite</h2>
          </div>
          <div className="w-full rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl relative group h-[400px] md:h-[500px]">
            <img 
              src={featuredPlace.images[0]} 
              alt={featuredPlace.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1.5 rounded-full inline-block text-white text-sm font-bold mb-4">
                Top Rated Experience
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">{featuredPlace.name}</h3>
              <p className="text-lg text-white/80 max-w-2xl mb-6">"{featuredPlace.experience}"</p>
              <div className="flex items-center gap-6 text-sm text-white/70 font-semibold uppercase tracking-wider">
                <span>📍 {featuredPlace.region}</span>
                <span>⭐ {featuredPlace.rating} / 5</span>
              </div>
            </div>
          </div>
        </ScrollUp>
      </section>

      {/* Filters & Grid */}
      <section id="explore">
        <ScrollUp y={40}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Travel Logs</h2>
              <p className="text-muted-foreground">Browse all locations by category or search.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input 
                  type="text" 
                  placeholder="Search places..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                <Filter className="text-muted-foreground shrink-0 mr-1" size={18} />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "bg-card border border-border text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-muted-foreground">
                No places found matching your filters.
              </div>
            )}
          </div>
        </ScrollUp>
      </section>

      {/* Interactive Map (Moved here) */}
      <section>
        <ScrollUp y={40}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Interactive Travel Map</h2>
            <p className="text-muted-foreground">A visual plot of regions visited across the country.</p>
          </div>
          <TravelMap />
        </ScrollUp>
      </section>

      {/* Timeline & Tips */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ScrollUp y={40}>
            <h2 className="text-3xl font-bold mb-8">Travel Timeline</h2>
            <TravelTimeline />
          </ScrollUp>
        </div>
        
        <div className="space-y-8">
          <ScrollUp y={40} delay={0.2}>
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Travel Tips</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <p className="text-sm text-muted-foreground">Always check weather conditions before heading to the hill tracts in monsoon.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <p className="text-sm text-muted-foreground">Book early for Saint Martin's Island during peak winter season.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <p className="text-sm text-muted-foreground">Carry cash when visiting remote areas like Swamp Forests.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <p className="text-sm text-muted-foreground">Respect local cultures and avoid littering at pristine beaches and waterfalls.</p>
                </li>
              </ul>
            </div>
          </ScrollUp>
        </div>
      </section>

      {/* AI Recommendations */}
      <section>
        <ScrollUp y={40}>
          <AIRecommendations />
        </ScrollUp>
      </section>

    </div>
  );
}
