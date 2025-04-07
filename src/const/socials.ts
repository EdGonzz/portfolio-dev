import type { Social } from "@/types/social";

import linkedin from "@/assets/svg/linkedin.svg";
import github from "@/assets/svg/github.svg";
import mail from "@/assets/svg/mail.svg";
import cv from "@/assets/svg/cv.svg";

export const SOCIAL: Social[] = [
  {
    id: "linkedin",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/edwin-contreras-1bb516247/",
    label: "Linkedin",
    image: {
      logo: linkedin,
    },
    class: "bg-[#086acc]/80 dark:bg-[#086acc]/80",
  },
  {
    id: "github",
    name: "Github",
    url: "https://github.com/EdGonzz",
    label: "Github",
    image: {
      logo: github,
    },
    class: "bg-[#F5F5F5]/80 dark:bg-[#171717]/80",
  },
  {
    id: "mail",
    name: "Mail",
    url: "mailto:ed25gonz@gmail.com",
    label: "Mail",
    image: {
      logo: mail,
    },
    class: "bg-[#EA4335]/80 dark:bg-[#EA4335]/80",
  },
  {
    id: "cv",
    name: "CV",
    url: "https://drive.google.com/file/d/1-0-1-2-3-4-5-6-7-8-9-0/view?usp=sharing",
    label: "CV",
    image: {
      logo: cv,
    },
    class: "bg-primary-100/80 dark:bg-primary-100/80",
  },
];
