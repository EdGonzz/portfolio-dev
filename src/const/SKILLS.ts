import type { Skills } from "@/types/skills";

import Astro from "@/assets/svg/astro.svg";
import tailwind from "@/assets/svg/tailwind.svg";
import typescript from "@/assets/svg/typescript.svg";
import javascript from "@/assets/svg/javascript.svg";

export const SKILLS: Skills[] = [
  {
    skill: "Astro",
    classProp: "bg-[#e03872]/50 border-[#e03872] border-1",
    logo: Astro,
  },
  {
    skill: "Tailwind CSS",
    classProp: "bg-[#38bdf8]/50 border-[#38bdf8] border-1",
    logo: tailwind,
  },
  {
    skill: "TypeScript",
    classProp: "bg-[#3178c6]/50 border-[#3178c6] border-1",
    logo: typescript,
  },
  {
    skill: "JavaScript",
    classProp: "bg-[#f0db4f]/50 border-[#f0db4f] border-1",
    logo: javascript,
  },
];
