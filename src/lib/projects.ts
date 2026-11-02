import type { ImageMetadata } from "astro";
import mana from "../assets/projects/mana.png";
import cajarapida from "../assets/projects/cajarapida.png";

/** Proyectos propios en línea. Se muestran primero, entre los destacados. */
export type Project = {
  id: string;
  name: string;
  /** Qué es, en palabras de cliente: "Aplicación", "Sitio web"… */
  kind: string;
  /** Una línea, nada más. */
  note: string;
  url: string;
  /** Texto del link; por defecto, la URL. */
  urlLabel?: string;
  image: ImageMetadata;
  /** Fondo del marco, tomado del sitio, para que la captura no "flote". */
  frame?: string;
};

export const projects: Project[] = [
  {
    id: "mana",
    name: "Maná",
    kind: "Aplicación",
    note: "Evangelio del día, Biblia y oración, en el celular o la compu.",
    url: "https://mana-app.org",
    urlLabel: "mana-app.org",
    image: mana,
    frame: "#f6f4ef",
  },
  {
    id: "cajarapida",
    name: "Caja Rápida",
    kind: "Sistema de gestión",
    note: "Caja, fiado, stock y facturación para comercios chicos.",
    url: "https://cajarapida.net",
    urlLabel: "cajarapida.net",
    image: cajarapida,
    frame: "#faf6ef",
  },
];
