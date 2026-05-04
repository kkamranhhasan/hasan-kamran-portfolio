export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools & DevOps" | "AI / Machine Learning";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0-100
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  experience: string;
  usedIn: string[];
  description: string;
  iconName: string; // Used to map to react-icons dynamically or statically
}

export const skillsData: Skill[] = [
  // Frontend
  {
    id: "react",
    name: "React / Next.js",
    category: "Frontend",
    level: 95,
    proficiency: "Expert",
    experience: "3+ years",
    usedIn: ["Portfolio Website", "E-commerce App", "Enterprise Dashboard"],
    description: "Building highly interactive, server-side rendered, and static web applications using the modern App Router and React Hooks.",
    iconName: "SiReact"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    level: 90,
    proficiency: "Advanced",
    experience: "2+ years",
    usedIn: ["Portfolio Website", "API Integrations", "All modern projects"],
    description: "Ensuring type safety, preventing runtime errors, and writing highly scalable self-documenting code.",
    iconName: "SiTypescript"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: 95,
    proficiency: "Expert",
    experience: "3+ years",
    usedIn: ["Portfolio Website", "Travel Dashboard", "Landing Pages"],
    description: "Rapidly building custom, highly responsive, and beautifully animated UI components using utility-first CSS.",
    iconName: "SiTailwindcss"
  },
  {
    id: "framer",
    name: "Framer Motion",
    category: "Frontend",
    level: 85,
    proficiency: "Advanced",
    experience: "1.5+ years",
    usedIn: ["Portfolio Website", "Interactive Maps", "Page Transitions"],
    description: "Creating fluid, physics-based UI animations, layout transitions, and complex interactive gestures.",
    iconName: "SiFramer"
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: 85,
    proficiency: "Advanced",
    experience: "2.5+ years",
    usedIn: ["Contact System", "Auth Microservices", "Real-time APIs"],
    description: "Developing fast, scalable server-side applications and RESTful APIs using event-driven, non-blocking I/O.",
    iconName: "SiNodedotjs"
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    level: 85,
    proficiency: "Advanced",
    experience: "2.5+ years",
    usedIn: ["Backend APIs", "Custom Middleware", "Database Routing"],
    description: "Building minimal and flexible Node.js web application frameworks, managing robust routing and middleware architectures.",
    iconName: "SiExpress"
  },

  // Database
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    level: 80,
    proficiency: "Intermediate",
    experience: "2+ years",
    usedIn: ["Enterprise Dashboard", "User Authentication", "Financial Ledgers"],
    description: "Designing complex relational schemas, optimizing queries, and managing robust, ACID-compliant database systems.",
    iconName: "SiPostgresql"
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Database",
    level: 85,
    proficiency: "Advanced",
    experience: "2+ years",
    usedIn: ["Real-time Chat", "Serverless Auth", "NoSQL Data Sync"],
    description: "Leveraging Firestore for real-time NoSQL database synchronization, cloud functions, and seamless authentication.",
    iconName: "SiFirebase"
  },

  // Tools & DevOps
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools & DevOps",
    level: 90,
    proficiency: "Advanced",
    experience: "3+ years",
    usedIn: ["All Projects", "CI/CD Pipelines", "Open Source"],
    description: "Managing version control, collaborative branching strategies, pull requests, and automated GitHub Actions.",
    iconName: "SiGithub"
  },
  {
    id: "vercel",
    name: "Vercel / Netlify",
    category: "Tools & DevOps",
    level: 90,
    proficiency: "Advanced",
    experience: "3+ years",
    usedIn: ["Portfolio Website", "Client Projects"],
    description: "Deploying edge-network, highly optimized Next.js applications with automated continuous deployment.",
    iconName: "SiVercel"
  },
  {
    id: "figma",
    name: "Figma",
    category: "Tools & DevOps",
    level: 80,
    proficiency: "Intermediate",
    experience: "2+ years",
    usedIn: ["UI/UX Design", "Wireframing", "Prototyping"],
    description: "Designing modern interfaces, prototyping user flows, and extracting design tokens for implementation.",
    iconName: "SiFigma"
  },

  // AI / Machine Learning
  {
    id: "python",
    name: "Python",
    category: "AI / Machine Learning",
    level: 85,
    proficiency: "Advanced",
    experience: "2+ years",
    usedIn: ["Weed Classification App", "Data Scripts", "Machine Learning Backends"],
    description: "Writing scripts for data manipulation, backend API development, and utilizing the vast ML ecosystem.",
    iconName: "SiPython"
  },
  {
    id: "image_classification",
    name: "Image Classification",
    category: "AI / Machine Learning",
    level: 80,
    proficiency: "Intermediate",
    experience: "1+ year",
    usedIn: ["Weed Classification App"],
    description: "Utilizing deep learning frameworks (TensorFlow/PyTorch) to build and deploy Convolutional Neural Networks for visual recognition.",
    iconName: "SiTensorflow" // using TF icon as a placeholder for classification
  },
  {
    id: "data_preprocessing",
    name: "Data Preprocessing",
    category: "AI / Machine Learning",
    level: 85,
    proficiency: "Advanced",
    experience: "1.5+ years",
    usedIn: ["Model Training Pipelines", "Data Cleaning"],
    description: "Using Pandas and NumPy to clean, normalize, augment, and prepare massive datasets for effective model training.",
    iconName: "SiPandas"
  },
  {
    id: "model_training",
    name: "Model Training",
    category: "AI / Machine Learning",
    level: 75,
    proficiency: "Intermediate",
    experience: "1+ year",
    usedIn: ["Weed Classification App"],
    description: "Tuning hyperparameters, managing epochs, preventing overfitting, and evaluating performance metrics.",
    iconName: "SiKeras"
  }
];

export const certificationsData = [
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    date: "2023",
    description: "Deep dive into modern web application development with React, Redux, Node.js, MongoDB, GraphQL and TypeScript."
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford / Coursera",
    date: "2024",
    description: "Foundational ML concepts including supervised/unsupervised learning, neural networks, and recommender systems."
  }
];
