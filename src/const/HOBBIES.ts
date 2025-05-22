import type { Hobby } from "@/types/hobbies";

import pacman from "@/assets/svg/pacman.svg";
import headphones from "@/assets/svg/headphones.svg";
import bike from "@/assets/svg/bike.svg";

export const HOBBIES: Hobby[] = [
  {
    name: "Gaming",
    classProp: "bg-bg-300/50 border-bg-300/50 border-1",
    logo: pacman,
  },
  {
    name: "Musica",
    classProp: "bg-bg-300/50 border-bg-300/50 border-1",
    logo: headphones,
  },
  {
    name: "Ciclismo",
    classProp: "bg-bg-300/50 border-bg-300/50 border-1",
    logo: bike,
  },
];
