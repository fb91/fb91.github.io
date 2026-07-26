/**
 * Datos personales del sitio. Editá acá y se actualiza todo.
 * Personal data for the whole site. Edit here and everything updates.
 */

export const profile = {
  name: "Fabricio Bianchi",
  initials: "FB",
  location: {
    es: "Rosario, Argentina",
    en: "Rosario, Argentina",
  },
  role: {
    es: "Ingeniero en Sistemas de Información",
    en: "Information Systems Engineer",
  },
} as const;

export type SocialLink = {
  label: string;
  handle: string;
  url: string;
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "/in/fabricio-bianchi",
    url: "https://www.linkedin.com/in/fabricio-bianchi/",
  },
  {
    label: "GitHub",
    handle: "@fb91",
    url: "https://github.com/fb91",
  },
  {
    label: "Instagram",
    handle: "@fabri.b91",
    url: "https://www.instagram.com/fabri.b91",
  },
];
