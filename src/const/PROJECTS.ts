import type { Project } from "@/types/projects";

import github from "@/assets/svg/github.svg";
import world from "@/assets/svg/world.svg";
import Astro from "@/assets/svg/astro.svg";
import tailwind from "@/assets/svg/tailwind.svg";
import typescript from "@/assets/svg/typescript.svg";
import javascript from "@/assets/svg/javascript.svg";
import vercel from "@/assets/svg/vercel.svg";
import pnpm from "@/assets/svg/pnpm.svg";

export const PROJECTS: Project[] = [
  {
    title: "Reel Library",
    description:
      "Reel Library es una pagina web para navegar entre reseñas y trailers de pelicilas; una manera sencilla de entrar la mejor pelicula para ver. El proyecto demuestra el consumo de APIs y la manipulación del DOM usando JavaScript y TypeScript.",
    image: {
      src: "https://github.com/EdGonzz/reel-library/raw/main/public/mobile-mockup.webp",
      alt: "Mockup de interfaz móvil de una aplicación llamada “ReelLibrary” para ver información sobre películas. La imagen muestra dos teléfonos inteligentes: el de la izquierda presenta una pantalla de inicio con categorías de géneros cinematográficos, películas populares y una calificación de “Captain America: Brave New World”; el de la derecha muestra una vista detallada de esa misma película con su póster, título, duración (1h 58m), fecha de lanzamiento (14/2/2025), puntuación (6.1/10) y géneros asociados (Acción, Thriller, Ciencia ficción).",
    },
    links: {
      github: {
        url: "https://github.com/EdGonzz/reel-library",
        logo: github,
      },
      demo: {
        url: "https://reel-library.vercel.app/",
        logo: world,
      },
    },
    tags: [
      {
        name: "Astro",
        classProp: "bg-[#e03872]/50 border-[#e03872] border-1",
        logo: Astro,
      },
      {
        name: "Tailwind CSS",
        classProp: "bg-[#38bdf8]/50 border-[#38bdf8] border-1",
        logo: tailwind,
      },
      {
        name: "TypeScript",
        classProp: "bg-[#3178c6]/50 border-[#3178c6] border-1",
        logo: typescript,
      },
      {
        name: "JavaScript",
        classProp: "bg-[#f0db4f]/50 border-[#f0db4f] border-1",
        logo: javascript,
      },
      {
        name: "Vercel",
        classProp: "bg-[#000000]/50 border-[#000000] border-1",
        logo: vercel,
      },
      {
        name: "PNPM",
        classProp: "bg-[#f9ad00]/50 border-[#f9ad00] border-1",
        logo: pnpm,
      },
    ],
  },
];
