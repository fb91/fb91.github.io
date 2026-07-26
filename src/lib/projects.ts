import type { ImageMetadata } from "astro";
import mana from "../assets/projects/mana.png";
import cajarapida from "../assets/projects/cajarapida.png";

export type Project = {
  id: string;
  name: string;
  domain: string;
  url: string;
  /** Una línea, nada más. / One line, nothing else. */
  tagline: { es: string; en: string };
  image: ImageMetadata;
  /** Fondo del marco, tomado del sitio, para que la captura no "flote". */
  frame: string;
};

export const projects: Project[] = [
  {
    id: "mana",
    name: "Maná",
    domain: "mana-app.org",
    url: "https://mana-app.org",
    tagline: {
      es: "Plataforma de vida espiritual: evangelio diario, Biblia y oración.",
      en: "A spiritual life platform: daily gospel, Bible and prayer.",
    },
    image: mana,
    frame: "#1a140d",
  },
  {
    id: "cajarapida",
    name: "Caja Rápida",
    domain: "cajarapida.net",
    url: "https://cajarapida.net",
    tagline: {
      es: "Sistema de gestión para comercios chicos: caja, fiado, stock y facturación.",
      en: "Management software for small shops: register, credit, stock and invoicing.",
    },
    image: cajarapida,
    frame: "#faf6ef",
  },
];
