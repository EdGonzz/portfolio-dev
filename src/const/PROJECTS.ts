import type { Project } from "@/types/projects";

import github from "@/assets/svg/github.svg";
import world from "@/assets/svg/world.svg";
import Astro from "@/assets/svg/astro.svg";
import tailwind from "@/assets/svg/tailwind.svg";
import typescript from "@/assets/svg/typescript.svg";
import javascript from "@/assets/svg/javascript.svg";
import vercel from "@/assets/svg/vercel.svg";
import pnpm from "@/assets/svg/pnpm.svg";
import html from "@/assets/svg/html.svg";
import css from "@/assets/svg/css.svg";

export const PROJECTS: Project[] = [
  {
    title: "Tranca Seguro",
    description:
      "Tranca Seguro es un generador de contraseñas web diseñado para ayudar a los usuarios a crear contraseñas seguras y criptográficamente seguras. Desarrollado con Astro y Tailwind CSS, ofrece una experiencia rápida, accesible e intuitiva para generar y gestionar credenciales seguras.",
    image: {
      src: "https://github.com/EdGonzz/tranca-seguro/raw/main/public/device-mockup.webp",
      alt: "Captura de pantalla de la aplicación móvil 'Tranca Seguro', un generador de contraseñas seguras. La interfaz muestra un diseño oscuro con una contraseña oculta, un indicador de fortaleza en color verde marcado como 'Fuerte' y un selector para ajustar la longitud de la clave.",
    },
    links: {
      github: {
        url: "https://github.com/EdGonzz/tranca-seguro",
        logo: github,
      },
      demo: {
        url: "https://tranca-seguro.vercel.app/",
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

  {
    title: "Task Manager",
    description:
      "Task Manager es una aplicación web sencilla diseñada para gestionar tareas. Este proyecto tiene como objetivo principal practicar la manipulación del DOM utilizando JavaScript puro y emplea la API de LocalStorage para la persistencia de datos en el navegador.",
    image: {
      src: "https://github.com/EdGonzz/taskManager/raw/main/public/assets/muckups.webp",
      alt: "Interfaz de una aplicación de gestión de tareas ('Task Manager') con modo claro y modo oscuro. A la izquierda, un teléfono móvil muestra el modo claro con fondo lila y tareas con botones de edición y eliminación. A la derecha, una laptop muestra el modo oscuro con el mismo contenido, pero con fondo oscuro. Ambas interfaces tienen un campo de entrada para agregar tareas y una lista de tareas completadas.",
    },
    links: {
      github: {
        url: "https://github.com/EdGonzz/taskManager",
        logo: github,
      },
      demo: {
        url: "https://edgonzz.github.io/taskManager/",
        logo: world,
      },
    },
    tags: [
      {
        name: "HTML",
        classProp: "bg-[#e34c26]/50 border-[#e34c26] border-1",
        logo: html,
      },
      {
        name: "Tailwind CSS",
        classProp: "bg-[#38bdf8]/50 border-[#38bdf8] border-1",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        classProp: "bg-[#f0db4f]/50 border-[#f0db4f] border-1",
        logo: javascript,
      },
    ],
  },

  {
    title: "Platzi Travel",
    description:
      "Platzi Travel es una aplicación web desarrollada como parte del curso de Tailwind CSS de Platzi. El proyecto simula una plataforma de viajes inspirada en servicios como Airbnb, permitiendo explorar destinos, ver recomendaciones personalizadas y tendencias de hospedaje. Está diseñada con enfoque mobile-first y utiliza Tailwind CSS para una maquetación moderna, responsiva y altamente personalizable.",
    image: {
      src: "https://github.com/EdGonzz/platzi-travel-tailwind-course/raw/main/public/assets/img/mobile-mockup.webp",
      alt: "Diseño de interfaz móvil de una aplicación de reservas de alojamiento. En el primer teléfono, con modo oscuro, se muestra una pantalla de búsqueda con una imagen destacada de San Francisco, recomendaciones de viaje como Noruega y Nueva York, y navegación inferior. En el segundo teléfono, con modo claro, se presenta una sección de alojamientos destacados con opciones en Chicago y Los Ángeles, cada una con detalles sobre habitaciones y servicios.",
    },
    links: {
      github: {
        url: "https://github.com/EdGonzz/platzi-travel-tailwind-course",
        logo: github,
      },
      demo: {
        url: "https://edgonzz.github.io/platzi-travel-tailwind-course/",
        logo: world,
      },
    },
    tags: [
      {
        name: "HTML",
        classProp: "bg-[#e34c26]/50 border-[#e34c26] border-1",
        logo: html,
      },
      {
        name: "Tailwind CSS",
        classProp: "bg-[#38bdf8]/50 border-[#38bdf8] border-1",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        classProp: "bg-[#f0db4f]/50 border-[#f0db4f] border-1",
        logo: javascript,
      },
    ],
  },

  // {
  //   title: "Batatabit",
  //   description:
  //     "Curso Mobile First es una landing page desarrollada como parte del Curso de Responsive Design: Maquetación Mobile First en Platzi. El proyecto se centra en aplicar la metodología mobile-first, comenzando el diseño para dispositivos móviles y adaptándolo progresivamente a pantallas más grandes. Esta práctica mejora la experiencia del usuario y optimiza el tiempo de desarrollo.",
  //   image: {
  //     src: "https://github.com/EdGonzz/curso-mobile-first/raw/main/assets/img/og-image.webp",
  //     alt: "Vista previa de la página principal de Batatabit, una plataforma de intercambio de criptomonedas con un diseño en tonos naranja y blanco. El encabezado destaca el eslogan 'La próxima revolución en el intercambio de criptomonedas' seguido del logotipo de Bitcoin y una sección que informa sobre tasas de cambio en tiempo real.",
  //   },
  //   links: {
  //     github: {
  //       url: "https://github.com/EdGonzz/curso-mobile-first",
  //       logo: github,
  //     },
  //     demo: {
  //       url: "https://edgonzz.github.io/curso-mobile-first/",
  //       logo: world,
  //     },
  //   },
  //   tags: [
  //     {
  //       name: "HTML",
  //       classProp: "bg-[#e34c26]/50 border-[#e34c26] border-1",
  //       logo: html,
  //     },
  //     {
  //       name: "CSS",
  //       classProp: "bg-[#663399]/50 border-[#663399] border-1",
  //       logo: css,
  //     },
  //   ],
  // },
];
