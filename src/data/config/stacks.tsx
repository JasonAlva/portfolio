import { FaJava, FaPython } from "react-icons/fa";
import {
  SiCircle,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGetx,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiLinux,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import Flowbite from "@/svg/flowbite";
import { JSX } from "react";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Languages
  JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />, // yellow-500
  TypeScript: <SiTypescript size={iconSize} color="#60A5FA" />, // blue-400

  // Mobile Frameworks

  // Frontend Frameworks
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} color="#0EA5E9" />, // sky-500

  // Frontend Library
  "shadcn/ui": <SiShadcnui size={iconSize} />,
  "Material UI": <SiMui size={iconSize} color="#38BDF8" />, // sky-400
  TailwindCSS: <SiTailwindcss size={iconSize} color="#67E8F9" />, // cyan-300
  Redux: <SiRedux size={iconSize} color="#A855F7" />, // purple-500
  CSS: <SiCss3 size={iconSize} color="#93C5FD" />, // blue-300
  Flowbite: <Flowbite iconSize={iconSize} />,

  // Backend
  Python: <FaPython size={iconSize} />,
  FastApi: <SiFastapi size={iconSize} color="#009485" />,
  Express: <SiExpress size={iconSize} />,
  Prisma: <SiPrisma size={iconSize} color="#10B981" />, // emerald-500
  Firebase: <SiFirebase size={iconSize} color="#F59E0B" />, // yellow-500
  // Supabase: <SiSupabase size={iconSize} color="#22C55E" />, // green-500

  // Redis: <SiRedis size={iconSize} color="#DC2626" />, // red-600

  // Others
  "Node.js": <SiNodedotjs size={iconSize} color="#16A34A" />, // green-600

  Linux: <SiLinux size={iconSize} />,
};
