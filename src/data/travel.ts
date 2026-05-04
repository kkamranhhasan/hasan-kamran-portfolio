export type Category = "Beach" | "Hill" | "Forest" | "Historic" | "Water Body" | "City";

export interface TravelPlace {
  id: string;
  name: string;
  region: string;
  category: Category;
  description: string;
  experience: string;
  rating: number;
  images: string[];
  link: string;
  coordinates: { x: number; y: number }; // Relative percentage on the map map
  visitYear: number;
  weather: string;
  bestTime: string;
}

export const travelData: TravelPlace[] = [
  // Sylhet Region
  {
    id: "jaflong",
    name: "Jaflong Zero Point",
    region: "Sylhet",
    category: "Water Body",
    description: "Beautiful river and stone view surrounded by hills.",
    experience: "Standing at the border where the river flows from the Indian mountains was surreal. The crystal clear water running over the stones makes it a perfect photography spot.",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60002059431",
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae"
    ],
    link: "https://www.google.com/maps/search/Jaflong+Zero+Point",
    coordinates: { x: 82, y: 20 },
    visitYear: 2022,
    weather: "24°C, Cloudy",
    bestTime: "Monsoon (June - September)"
  },
  {
    id: "mayabi_jharna",
    name: "Mayabi Jharna",
    region: "Sylhet",
    category: "Water Body",
    description: "A serene waterfall nestled in the lush green hills.",
    experience: "Trekking up to this hidden waterfall was an adventure. The cool mist and the lush surroundings make it incredibly refreshing.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60002059431"
    ],
    link: "https://www.google.com/maps/search/Mayabi+Jharna",
    coordinates: { x: 81, y: 21 },
    visitYear: 2022,
    weather: "22°C, Rainy",
    bestTime: "Monsoon (June - September)"
  },
  {
    id: "jaflong_tea",
    name: "Jaflong Tea Garden",
    region: "Sylhet",
    category: "Hill",
    description: "Expansive and peaceful tea estates.",
    experience: "Walking through the seemingly endless rows of tea plants was incredibly calming. The fresh aroma of the leaves is unforgettable.",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    link: "https://www.google.com/maps/search/Jaflong+Tea+Garden",
    coordinates: { x: 83, y: 22 },
    visitYear: 2022,
    weather: "25°C, Sunny",
    bestTime: "Winter (Nov - Feb)"
  },
  {
    id: "shahjalal_mazar",
    name: "Shahjalal Mazar",
    region: "Sylhet",
    category: "Historic",
    description: "A famous and highly revered spiritual shrine.",
    experience: "The spiritual atmosphere here is profound. Feeding the massive catfish in the adjacent pond was a unique experience.",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1564507592208-5287569ce498",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f"
    ],
    link: "https://www.google.com/maps/search/Shahjalal+Mazar",
    coordinates: { x: 78, y: 26 },
    visitYear: 2021,
    weather: "26°C, Clear",
    bestTime: "All Year"
  },
  {
    id: "ratargul",
    name: "Ratargul Swamp Forest",
    region: "Sylhet",
    category: "Forest",
    description: "The only freshwater swamp forest in Bangladesh.",
    experience: "Gliding silently through the submerged trees in a tiny wooden boat felt like exploring the Amazon. A true natural wonder.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b"
    ],
    link: "https://www.google.com/maps/search/Ratargul+Swamp+Forest",
    coordinates: { x: 79, y: 23 },
    visitYear: 2023,
    weather: "27°C, Humid",
    bestTime: "Monsoon (July - Sept)"
  },

  // Bandarban
  {
    id: "nilgiri",
    name: "Nilgiri",
    region: "Bandarban",
    category: "Hill",
    description: "Stunning mountain peak touching the clouds.",
    experience: "Watching the clouds float literally below my feet at dawn is one of my greatest travel memories. The chill in the air was invigorating.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba"
    ],
    link: "https://www.google.com/maps/search/Nilgiri+Bandarban",
    coordinates: { x: 85, y: 78 },
    visitYear: 2023,
    weather: "15°C, Foggy",
    bestTime: "Winter (Dec - Feb)"
  },
  {
    id: "nilachal",
    name: "Nilachal",
    region: "Bandarban",
    category: "Hill",
    description: "A scenic viewpoint offering panoramic views of the hills.",
    experience: "The golden hour sunset over the vast rolling hills of the Chittagong Hill Tracts is breathtaking.",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
    ],
    link: "https://www.google.com/maps/search/Nilachal",
    coordinates: { x: 84, y: 76 },
    visitYear: 2023,
    weather: "18°C, Clear",
    bestTime: "Winter (Dec - Feb)"
  },
  {
    id: "buddha_dhatu_jadi",
    name: "Buddha Dhatu Jadi",
    region: "Bandarban",
    category: "Historic",
    description: "The famous Golden Temple of Bandarban.",
    experience: "The golden architecture shining against the blue sky is majestic. The intricate designs and peaceful aura make it a must-visit.",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1580462611434-39cce8b3ae56"
    ],
    link: "https://www.google.com/maps/search/Buddha+Dhatu+Jadi",
    coordinates: { x: 83, y: 75 },
    visitYear: 2023,
    weather: "22°C, Sunny",
    bestTime: "Winter (Nov - March)"
  },

  // Cox's Bazar
  {
    id: "cox_bazar",
    name: "Cox’s Bazar Sea Beach",
    region: "Cox’s Bazar",
    category: "Beach",
    description: "The longest natural sea beach in the world.",
    experience: "Walking for miles along the shoreline at sunset, feeling the roaring waves, was an incredible escape from city life.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206"
    ],
    link: "https://www.google.com/maps/search/Cox’s+Bazar+Sea+Beach",
    coordinates: { x: 81, y: 85 },
    visitYear: 2021,
    weather: "28°C, Breezy",
    bestTime: "Winter (Nov - March)"
  },
  {
    id: "inani",
    name: "Inani Beach",
    region: "Cox’s Bazar",
    category: "Beach",
    description: "Famous for its golden sand and coral stones.",
    experience: "Much quieter than the main beach. The coral rocks and clear blue water make it a perfect spot for relaxation.",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
    ],
    link: "https://www.google.com/maps/search/Inani+Beach",
    coordinates: { x: 82, y: 87 },
    visitYear: 2021,
    weather: "29°C, Sunny",
    bestTime: "Winter (Nov - March)"
  },
  {
    id: "himchari",
    name: "Himchari",
    region: "Cox’s Bazar",
    category: "Hill",
    description: "Known for its beautiful waterfalls and marine drive.",
    experience: "The drive along Marine Drive with the ocean on one side and hills on the other is legendary. The hilltop view of the bay is unmatched.",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae"
    ],
    link: "https://www.google.com/maps/search/Himchari",
    coordinates: { x: 81, y: 86 },
    visitYear: 2021,
    weather: "27°C, Clear",
    bestTime: "Winter (Nov - March)"
  },
  {
    id: "laboni",
    name: "Laboni Beach",
    region: "Cox’s Bazar",
    category: "Beach",
    description: "The main and most popular beach point in Cox's Bazar.",
    experience: "The vibrant energy, street food, and sound of the ocean make Laboni Beach the ultimate tourist hub.",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    ],
    link: "https://www.google.com/maps/search/Laboni+Beach",
    coordinates: { x: 80, y: 85 },
    visitYear: 2021,
    weather: "28°C, Breezy",
    bestTime: "Winter (Nov - March)"
  },
  {
    id: "saint_martin",
    name: "Saint Martin’s Island",
    region: "Cox’s Bazar",
    category: "Beach",
    description: "The only coral island in Bangladesh with crystal clear water.",
    experience: "The crystal clear blue water and the journey on the ship through the Naf river was an experience of a lifetime. Highly recommend cycling around the island.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1520116468816-95b69f847357",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    ],
    link: "https://www.google.com/maps/search/Saint+Martin’s+Island",
    coordinates: { x: 83, y: 95 },
    visitYear: 2022,
    weather: "26°C, Sunny",
    bestTime: "Winter (Nov - Feb)"
  },

  // Sundarbans
  {
    id: "sundarbans",
    name: "Sundarbans Mangrove Forest",
    region: "Sundarbans",
    category: "Forest",
    description: "The largest mangrove forest and home to the Royal Bengal Tiger.",
    experience: "Sailing through the silent creeks in a small boat while watching for wildlife on the muddy banks felt like being in a National Geographic documentary.",
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      "https://images.unsplash.com/photo-1448375240586-882707db888b"
    ],
    link: "https://www.google.com/maps/search/Sundarbans",
    coordinates: { x: 30, y: 85 },
    visitYear: 2020,
    weather: "25°C, Humid",
    bestTime: "Winter (Nov - Feb)"
  },

  // Kuakata
  {
    id: "kuakata",
    name: "Kuakata Sea Beach",
    region: "Kuakata",
    category: "Beach",
    description: "Famous for its panoramic view of both sunrise and sunset.",
    experience: "It is one of the rare places where you can stand on the beach and watch both the sun rise and set over the ocean.",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    ],
    link: "https://www.google.com/maps/search/Kuakata+Sea+Beach",
    coordinates: { x: 45, y: 92 },
    visitYear: 2023,
    weather: "27°C, Breezy",
    bestTime: "Winter (Nov - March)"
  },
  {
    id: "fatrar_char",
    name: "Fatrar Char",
    region: "Kuakata",
    category: "Forest",
    description: "A pristine mangrove forest part of the Sundarbans.",
    experience: "A short boat ride takes you to this dense forest. It's a great taste of the Sundarbans environment near the beach.",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b"
    ],
    link: "https://www.google.com/maps/search/Fatrar+Char",
    coordinates: { x: 42, y: 90 },
    visitYear: 2023,
    weather: "26°C, Cloudy",
    bestTime: "Winter (Nov - Feb)"
  },
  {
    id: "gangamati",
    name: "Gangamati Reserved Forest",
    region: "Kuakata",
    category: "Forest",
    description: "An evergreen mangrove forest on the eastern end of the beach.",
    experience: "The sunrise view from here is phenomenal. Walking through the red crabs on the beach alongside the forest is magical.",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e"
    ],
    link: "https://www.google.com/maps/search/Gangamati+Reserved+Forest",
    coordinates: { x: 47, y: 92 },
    visitYear: 2023,
    weather: "25°C, Clear",
    bestTime: "Winter (Nov - Feb)"
  },
  {
    id: "lebur_char",
    name: "Lebur Char",
    region: "Kuakata",
    category: "Beach",
    description: "A sandy spit covered with mangrove trees.",
    experience: "The best place to eat fresh seafood fry right on the beach while watching the sun set over the horizon.",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
    ],
    link: "https://www.google.com/maps/search/Lebur+Char",
    coordinates: { x: 48, y: 93 },
    visitYear: 2023,
    weather: "26°C, Windy",
    bestTime: "Winter (Nov - March)"
  },
  {
    id: "jhaubon",
    name: "Jhaubon",
    region: "Kuakata",
    category: "Forest",
    description: "A scenic forest of Jhau trees close to the beach.",
    experience: "The wind howling through the tall Jhau trees creates a mystical sound. It’s a very peaceful place to walk.",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b"
    ],
    link: "https://www.google.com/maps/search/Jhaubon",
    coordinates: { x: 46, y: 91 },
    visitYear: 2023,
    weather: "27°C, Breezy",
    bestTime: "Winter (Nov - March)"
  },

  // Barishal
  {
    id: "durga_sagar",
    name: "Durga Sagar",
    region: "Barishal",
    category: "Water Body",
    description: "The largest pond in southern Bangladesh.",
    experience: "A massive, perfectly rectangular pond surrounded by walking trails. A very peaceful place to spend an afternoon.",
    rating: 4.1,
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60002059431"
    ],
    link: "https://www.google.com/maps/search/Durga+Sagar",
    coordinates: { x: 48, y: 72 },
    visitYear: 2020,
    weather: "30°C, Sunny",
    bestTime: "Winter (Nov - Feb)"
  },
  {
    id: "guthia_mosque",
    name: "Guthia Mosque",
    region: "Barishal",
    category: "Historic",
    description: "A stunning architectural masterpiece and mosque complex.",
    experience: "The sheer scale and beauty of the architecture, surrounded by lakes and gardens, left me in awe.",
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1564507592208-5287569ce498",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f"
    ],
    link: "https://www.google.com/maps/search/Guthia+Mosque",
    coordinates: { x: 47, y: 71 },
    visitYear: 2020,
    weather: "28°C, Clear",
    bestTime: "All Year"
  },
  {
    id: "floating_market",
    name: "Floating Guava Market",
    region: "Barishal",
    category: "Water Body",
    description: "A unique and vibrant floating market on the backwaters.",
    experience: "Dozens of small boats filled with fresh green guavas navigating the narrow canals is a vibrant and chaotic slice of rural life.",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae"
    ],
    link: "https://www.google.com/maps/search/Floating+Guava+Market",
    coordinates: { x: 49, y: 70 },
    visitYear: 2020,
    weather: "26°C, Cloudy",
    bestTime: "Monsoon (July - Aug)"
  },
  {
    id: "baitul_aman",
    name: "Baitul Aman Jame Masjid",
    region: "Barishal",
    category: "Historic",
    description: "A magnificent and beautifully designed mosque.",
    experience: "Also known as the Guthia Mosque complex, its minarets and expansive courtyards are spectacular.",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1580462611434-39cce8b3ae56"
    ],
    link: "https://www.google.com/maps/search/Baitul+Aman+Jame+Masjid",
    coordinates: { x: 47, y: 71 },
    visitYear: 2020,
    weather: "28°C, Clear",
    bestTime: "All Year"
  },

  // Gopalganj
  {
    id: "tungipara",
    name: "Tungipara (Bangabandhu Mausoleum)",
    region: "Gopalganj",
    category: "Historic",
    description: "The Mausoleum of the Father of the Nation, Bangabandhu.",
    experience: "A place of great historical significance. The mausoleum is beautifully maintained with lush gardens and a peaceful aura.",
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1564507592208-5287569ce498"
    ],
    link: "https://www.google.com/maps/search/Tungipara+Mausoleum",
    coordinates: { x: 42, y: 62 },
    visitYear: 2019,
    weather: "29°C, Sunny",
    bestTime: "Winter (Nov - Feb)"
  },
  {
    id: "ulpur_zamindar",
    name: "Ulpur Zamindar Bari",
    region: "Gopalganj",
    category: "Historic",
    description: "A historic palace with incredible colonial architecture.",
    experience: "Exploring the ruins of this grand old estate feels like stepping back in time to the colonial era.",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f"
    ],
    link: "https://www.google.com/maps/search/Ulpur+Zamindar+Bari",
    coordinates: { x: 41, y: 60 },
    visitYear: 2019,
    weather: "30°C, Humid",
    bestTime: "Winter (Nov - Feb)"
  },
  {
    id: "kotalipara",
    name: "Kotalipara Archaeological Sites",
    region: "Gopalganj",
    category: "Historic",
    description: "Ancient forts and historical ruins.",
    experience: "Seeing the remnants of an ancient fort that dates back hundreds of years was fascinating for the history buff in me.",
    rating: 4.0,
    images: [
      "https://images.unsplash.com/photo-1580462611434-39cce8b3ae56"
    ],
    link: "https://www.google.com/maps/search/Kotalipara+Archaeological+Sites",
    coordinates: { x: 43, y: 63 },
    visitYear: 2019,
    weather: "28°C, Clear",
    bestTime: "Winter (Nov - Feb)"
  }
];

export const travelBucketList = [
  { name: "Sajek Valley", region: "Rangamati", expectation: "Want to wake up above the clouds." },
  { name: "Tanguar Haor", region: "Sunamganj", expectation: "Houseboat trip during monsoon." },
  { name: "Keokradong Peak", region: "Bandarban", expectation: "Trekking to one of the highest peaks." }
];
