"use client";

import React, { useState, useEffect } from "react";
import { TravelPlace } from "@/data/travel";
import { MapPin, Star, Share2, CloudRain, Sun, Cloud, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PlaceCardProps {
  place: TravelPlace;
}

export function PlaceCard({ place }: PlaceCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isGalleryOpen]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out ${place.name} in ${place.region}!`,
          text: place.description,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(`${place.name} - ${window.location.href}`);
      alert("Link copied to clipboard!");
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        className={i < Math.floor(place.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"} 
      />
    ));
  };

  const getWeatherIcon = () => {
    if (place.weather.toLowerCase().includes("rain")) return <CloudRain size={14} />;
    if (place.weather.toLowerCase().includes("sun") || place.weather.toLowerCase().includes("clear")) return <Sun size={14} />;
    return <Cloud size={14} />;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % place.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + place.images.length) % place.images.length);
  };

  return (
    <>
      <div className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
        
        {/* Image Header */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img 
            src={place.images[0]} 
            alt={place.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            {getWeatherIcon()} {place.weather}
          </div>
          
          <button 
            onClick={() => {
              setActiveImage(0);
              setIsGalleryOpen(true);
            }}
            className="absolute top-3 right-3 p-2 bg-black/70 text-white rounded-full hover:bg-primary hover:text-white transition-colors shadow-sm"
          >
            <ImageIcon size={16} />
          </button>

          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <div>
              <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin size={12} /> {place.region}
              </div>
              <h3 className="text-xl font-bold text-white drop-shadow-md leading-tight">{place.name}</h3>
            </div>
            <div className="flex gap-0.5 mb-1 bg-black/60 px-2 py-1 rounded-full">
              {renderStars()}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {place.category}
            </span>
            <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-md">
              Visited: {place.visitYear}
            </span>
          </div>

          <p className="text-sm font-medium text-foreground mb-3 leading-snug">
            "{place.description}"
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic border-l-2 border-primary/20 pl-3">
            {place.experience}
          </p>

          {/* Footer Actions */}
          <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
            <div className="text-xs text-muted-foreground flex flex-col">
              <span className="font-semibold">Best Time:</span>
              <span>{place.bestTime}</span>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={handleShare}
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                title="Share"
              >
                <Share2 size={18} />
              </button>
              <a 
                href={place.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                View Map
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful Lightbox Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setIsGalleryOpen(false)}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsGalleryOpen(false);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/30 rounded-full text-white transition-colors z-50"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-6xl w-full h-full flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Title Badge */}
              <div className="absolute top-4 left-4 z-40 bg-black/50 px-5 py-2 rounded-full text-white font-medium tracking-wider text-sm backdrop-blur-md border border-white/10">
                {place.name}
              </div>
              
              {/* Main Display Image */}
              <div className="w-full h-[70vh] md:h-[80vh] relative rounded-2xl overflow-hidden flex items-center justify-center">
                
                {/* Navigation Arrows (if multiple images) */}
                {place.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 z-40 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md border border-white/10 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 z-40 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md border border-white/10 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    src={place.images[activeImage]} 
                    alt={`${place.name} Gallery`} 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl" 
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails (only show if multiple) */}
              {place.images.length > 1 && (
                <div className="flex gap-3 mt-6 overflow-x-auto max-w-full hide-scrollbar px-4 pb-4">
                  {place.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(i);
                      }}
                      className={`relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === i 
                        ? 'border-primary scale-110 shadow-lg shadow-primary/20 z-10' 
                        : 'border-white/20 hover:border-white/50 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${i}`} />
                    </button>
                  ))}
                </div>
              )}
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
