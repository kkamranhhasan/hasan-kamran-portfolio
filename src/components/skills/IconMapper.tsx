import { 
  SiReact, SiTypescript, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiExpress, SiPostgresql, SiFirebase, 
  SiGithub, SiVercel, SiFigma, SiPython, 
  SiTensorflow, SiPandas, SiKeras
} from "react-icons/si";
import { HelpCircle } from "lucide-react";

export function getIconByName(iconName: string) {
  switch (iconName) {
    case "SiReact": return SiReact;
    case "SiTypescript": return SiTypescript;
    case "SiTailwindcss": return SiTailwindcss;
    case "SiFramer": return SiFramer;
    case "SiNodedotjs": return SiNodedotjs;
    case "SiExpress": return SiExpress;
    case "SiPostgresql": return SiPostgresql;
    case "SiFirebase": return SiFirebase;
    case "SiGithub": return SiGithub;
    case "SiVercel": return SiVercel;
    case "SiFigma": return SiFigma;
    case "SiPython": return SiPython;
    case "SiTensorflow": return SiTensorflow;
    case "SiPandas": return SiPandas;
    case "SiKeras": return SiKeras;
    default: return HelpCircle;
  }
}
