import type { ImageMetadata } from "astro";
import mana from "../assets/projects/mana.png";
import cajarapida from "../assets/projects/cajarapida.png";
import { routes } from "./profile";

export type Project = {
  id: string;
  name: string;
  /** Una línea, nada más. */
  note: string;
  /** Link principal del proyecto (si tiene). */
  url?: string;
  /** Texto del link principal; por defecto, el dominio. */
  urlLabel?: string;
  /** Captura; sin captura se muestra solo texto. */
  image?: ImageMetadata;
  /** Fondo del marco, tomado del sitio, para que la captura no "flote". */
  frame?: string;
  /** Links secundarios (políticas, etc.). */
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "mana",
    name: "Maná",
    note: "Evangelio diario, Biblia y oración.",
    url: "https://mana-app.org",
    urlLabel: "mana-app.org",
    image: mana,
    frame: "#f6f4ef",
  },
  {
    id: "cajarapida",
    name: "Caja Rápida",
    note: "Caja, fiado, stock y facturación para comercios chicos.",
    url: "https://cajarapida.net",
    urlLabel: "cajarapida.net",
    image: cajarapida,
    frame: "#faf6ef",
  },
  {
    id: "chatgpt",
    name: "Complementos para ChatGPT",
    note: "Recuerdos para imprimir · Actividades para chicos.",
    links: [
      { label: "Privacidad · Recuerdos para imprimir", url: routes.recuerdosPrivacy },
    ],
  },
];
