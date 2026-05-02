"use client";

import React, { useState, useEffect } from "react";
import { ScrollUp } from "@/components/ScrollUp";
import { 
  Camera, BookOpen, Plane, Music, X, Play,
  PenTool, Video, Terminal, Globe, Lightbulb, Users,
  Puzzle, Microscope, Languages, Bike, Trophy
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HOBBIES = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing moments and exploring the visual world through a lens.",
    details: "I specialize in urban and landscape photography, mostly shooting with a mirrorless camera. I love finding unique perspectives in everyday environments and experimenting with long exposures at night.",
    categories: ["Urban", "Landscape", "Portrait", "Night Photography"],
    icon: Camera,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "Drawing / Sketching",
    description: "Expressing creativity through digital and physical sketches.",
    details: "I enjoy putting ideas onto paper or a digital canvas. It helps me visualize UI/UX concepts before coding and gives me a creative outlet away from logic-heavy tasks.",
    categories: ["Digital Art", "Pencil Sketching", "UI Wireframing"],
    icon: PenTool,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    id: 3,
    title: "Content Creation",
    description: "Sharing knowledge on YouTube and Social Media.",
    details: "I love documenting my tech journey and teaching others through video content. Editing videos, designing thumbnails, and engaging with a community is incredibly rewarding.",
    categories: ["YouTube", "Tech Tutorials", "Social Media", "Video Editing"],
    icon: Video,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    id: 4,
    title: "Music (Listening)",
    description: "Listening to lo-fi beats while coding or unwinding.",
    details: "I have a curated collection of playlists for different moods. Music is an essential part of my focus routine when I'm entering a deep-work coding session.",
    categories: ["Pop", "Hip-Hop", "Rock", "EDM", "Bollywood", "Bangla"],
    icon: Music,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    playlists: [
      {
        genre: "🎧 Pop Songs",
        songs: [
          { title: "Blinding Lights", videoId: "4NRXx6U8ABQ" },
          { title: "Shape of You", videoId: "JGwWNGJdvx8" },
          { title: "Levitating", videoId: "TUVcZfQe-Kw" },
          { title: "As It Was", videoId: "H5v3kku4y6Q" },
          { title: "Stay", videoId: "kTJczUoc26U" },
        ]
      },
      {
        genre: "🎤 Hip-Hop / Rap",
        songs: [
          { title: "God's Plan", videoId: "xpVfcZ0ZcFM" },
          { title: "HUMBLE.", videoId: "tvTRZJ-4EyI" },
          { title: "SICKO MODE", videoId: "6ONRf7h3Mdk" },
          { title: "Lose Yourself", videoId: "_Yhyp-_hX2s" },
          { title: "Industry Baby", videoId: "UTHLKHL_whs" },
        ]
      },
      {
        genre: "🎸 Rock",
        songs: [
          { title: "Bohemian Rhapsody", videoId: "fJ9rUzIMcZQ" },
          { title: "Smells Like Teen Spirit", videoId: "hTWKbfoikeg" },
          { title: "Hotel California", videoId: "EqPtz5qN7HM" },
          { title: "Numb", videoId: "kXYiU_JCYtU" },
          { title: "Thunderstruck", videoId: "v2AC41dglnM" },
        ]
      },
      {
        genre: "🎧 EDM / Electronic",
        songs: [
          { title: "Faded", videoId: "60ItHLz5WEA" },
          { title: "Animals", videoId: "gCYcHz2k5x0" },
          { title: "Closer", videoId: "PT2_F-1esPk" },
          { title: "Titanium", videoId: "JRfuAukYTKg" },
          { title: "Alone", videoId: "ALZHF5UqnU4" },
        ]
      },
      {
        genre: "🎶 Hindi / Bollywood",
        songs: [
          { title: "Kesariya", videoId: "BddP6PYo2gs" },
          { title: "Tum Hi Ho", videoId: "Umqb9KENgmk" },
          { title: "Ghungroo", videoId: "qFkNATtc3mc" },
          { title: "Raataan Lambiyan", videoId: "gvyUuxdRdR4" },
          { title: "Malang", videoId: "KBIq11mNB0I" },
        ]
      },
      {
        genre: "🎵 Bangla Songs",
        songs: [
          { title: "Amake Amar Moto Thakte Dao", videoId: "OZ6f7l1zF2I" },
          { title: "Tomake Chai", videoId: "3u7X8r7n6Z0" },
          { title: "Bojhena Shey Bojhena", videoId: "Y7IXdQd48N0" },
          { title: "Mon Majhi Re", videoId: "3L2t2z7hQdQ" },
          { title: "Pagla Hawar Badol Dine", videoId: "8c4dZ7Wv4gM" },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Programming / Coding",
    description: "Building software, solving problems, and writing clean code.",
    details: "Coding isn't just my profession; it's a core hobby. I love building side projects, exploring new algorithms, and optimizing system architectures for fun.",
    categories: ["Side Projects", "Algorithms", "Open Source", "Scripting"],
    icon: Terminal,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    id: 6,
    title: "Web Development",
    description: "Crafting beautiful and responsive web experiences.",
    details: "I am passionate about creating interactive web applications. Exploring new frontend frameworks, complex animations, and modern CSS techniques is my playground.",
    categories: ["Frontend", "React ecosystem", "Animations", "UI/UX"],
    icon: Globe,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    id: 7,
    title: "Learning New Technologies",
    description: "Constantly expanding my tech stack and knowledge base.",
    details: "The tech industry moves fast, and I love keeping up. I dedicate time every week to read documentation, watch conference talks, and test out beta features of emerging tools.",
    categories: ["AI/ML", "Cloud Tech", "New Frameworks", "DevTools"],
    icon: Lightbulb,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    id: 8,
    title: "Traveling",
    description: "Discovering new cultures, architectures, and natural landscapes.",
    details: "Exploring new places broadens my perspective and gives me fresh inspiration for my design work. I enjoy stepping out of my comfort zone and trying local cuisines.",
    categories: ["Backpacking", "Historical Sites", "Nature Retreats", "Road Trips"],
    icon: Plane,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: 9,
    title: "Teaching / Mentoring",
    description: "Helping others grow in their tech journey.",
    details: "I find great joy in simplifying complex programming concepts for beginners. Mentoring junior developers and sharing best practices helps solidify my own knowledge.",
    categories: ["Mentorship", "Code Reviews", "Writing Guides"],
    icon: Users,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    id: 10,
    title: "Reading Books",
    description: "Diving into tech articles, sci-fi novels, and non-fiction.",
    details: "I try to read at least 2 books a month, focusing heavily on software engineering principles, hard sci-fi, and personal productivity. Reading gives me new mental models to approach complex problems.",
    categories: ["Sci-Fi", "Software Engineering", "Biographies", "Productivity"],
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 11,
    title: "Problem Solving",
    description: "Tackling logical puzzles and competitive programming challenges.",
    details: "I love the thrill of finding an optimal solution to a difficult algorithmic problem. It sharpens my logical thinking and makes me a better engineer.",
    categories: ["LeetCode", "Logic Puzzles", "Math", "Optimization"],
    icon: Puzzle,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    id: 12,
    title: "Research Work",
    description: "Exploring academic papers and conducting AI experiments.",
    details: "I enjoy diving deep into academic research, particularly in the fields of Artificial Intelligence and Machine Learning, to understand the theoretical foundations of modern tech.",
    categories: ["AI/ML", "Academic Papers", "Prototyping", "Data Analysis"],
    icon: Microscope,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    id: 13,
    title: "Learning Languages",
    description: "Studying foreign languages and embracing global communication.",
    details: "Learning a new language is like unlocking a new part of the brain. I enjoy learning vocabulary and grammar structures to better connect with people from different backgrounds.",
    categories: ["Vocabulary", "Linguistics", "Culture", "Translation"],
    icon: Languages,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    id: 14,
    title: "Running / Cycling",
    description: "Staying active and maintaining physical endurance.",
    details: "Physical exercise is crucial for offsetting the sedentary lifestyle of a developer. I enjoy long morning runs and cycling trips to clear my mind and stay energized.",
    categories: ["Marathons", "Trail Running", "City Cycling", "Fitness"],
    icon: Bike,
    color: "text-lime-500",
    bg: "bg-lime-500/10",
  },
  {
    id: 15,
    title: "Badminton",
    description: "Playing competitive and recreational badminton matches.",
    details: "Badminton is my go-to sport for agility and reflexes. Whether it's a casual weekend game with friends or a competitive match, it's a great way to stay sharp and active.",
    categories: ["Singles", "Doubles", "Tournaments", "Agility Training"],
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function HobbiesPage() {
  const [selectedHobby, setSelectedHobby] = useState<any | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedHobby) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedHobby]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl relative">
      <ScrollUp className="mb-16 md:mb-24">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-7xl mb-4">
          Hobbies & Interests
        </h1>
        <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl">
          What I love doing when I step away from the keyboard.
        </p>
      </ScrollUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-0">
        {HOBBIES.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <ScrollUp
              key={hobby.id}
              delay={index * 0.1}
              className="w-full h-full"
            >
              <div 
                onClick={() => setSelectedHobby(hobby)}
                className="group h-full p-8 rounded-[2rem] border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col items-start text-left cursor-pointer hover:-translate-y-1"
              >
                
                {/* Background Glow Effect on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hobby.bg} pointer-events-none`} />

                <div className={`p-4 rounded-2xl ${hobby.bg} ${hobby.color} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{hobby.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </ScrollUp>
          );
        })}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedHobby && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHobby(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`w-full ${selectedHobby.playlists ? 'max-w-5xl' : 'max-w-2xl'} max-h-[90vh] overflow-y-auto custom-scrollbar bg-card border border-border shadow-2xl rounded-[2rem] p-6 md:p-10 pointer-events-auto relative`}
              >
                {/* Modal Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${selectedHobby.bg} rounded-full blur-[80px] -z-10 opacity-50`} />

                <button 
                  onClick={() => setSelectedHobby(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground z-10"
                >
                  <X size={20} />
                </button>

                <div className={`inline-flex p-4 rounded-2xl ${selectedHobby.bg} ${selectedHobby.color} mb-6`}>
                  <selectedHobby.icon size={40} strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 pr-12">
                  {selectedHobby.title}
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {selectedHobby.details}
                </p>

                {/* Categories */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Categories & Interests</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedHobby.categories.map((category: string) => (
                      <span 
                        key={category} 
                        className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold border border-border/50 bg-background/50 backdrop-blur-md transition-colors hover:border-border`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Custom Content for Playlists */}
                {selectedHobby.playlists && (
                  <div className="mt-10 border-t border-border/50 pt-10">
                    <h4 className="text-2xl font-bold text-foreground mb-8">My Playlists</h4>
                    <div className="space-y-10">
                      {selectedHobby.playlists.map((playlist: any) => (
                        <div key={playlist.genre}>
                          <h5 className="text-xl font-bold text-foreground/90 mb-5 flex items-center gap-2">
                            {playlist.genre}
                          </h5>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                            {playlist.songs.map((song: any) => (
                              <a 
                                key={song.videoId} 
                                href={`https://www.youtube.com/watch?v=${song.videoId}`}
                                target="_blank"
                                rel="noreferrer"
                                className="group/song flex flex-col gap-3 relative rounded-xl overflow-visible focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                              >
                                <div className="aspect-video relative rounded-xl overflow-hidden border border-border/50 bg-muted/50 group-hover/song:border-primary/50 transition-colors shadow-sm group-hover/song:shadow-md">
                                  {/* YouTube Thumbnail */}
                                  <img 
                                    src={`https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`} 
                                    alt={song.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/song:scale-110"
                                    loading="lazy"
                                  />
                                  {/* Play Button Overlay */}
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/song:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center pl-1 backdrop-blur-md">
                                      <Play className="text-white w-5 h-5 fill-white" />
                                    </div>
                                  </div>
                                </div>
                                <span className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover/song:text-primary transition-colors">
                                  {song.title}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
