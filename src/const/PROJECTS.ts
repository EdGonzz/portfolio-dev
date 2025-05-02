import type { Project } from "@/types/projects";

import github from "@/assets/svg/github.svg";
import world from "@/assets/svg/world.svg";

export const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    description:
      "Reel Library es una pagina web para navegar entre reseñas y trailers de pelicilas; una manera sencilla de entrar la mejor pelicula para ver. El proyecto demuestra el consumo de APIs y la manipulación del DOM usando JavaScript y TypeScript.",
    image: {
      src: "https://github.com/EdGonzz/reel-library/raw/main/public/desktop-mockup.webp",
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
    tags: ["Astro", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
];
