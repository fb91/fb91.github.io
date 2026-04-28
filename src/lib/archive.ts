export type ArchiveCategory = "web" | "grafico" | "fotografia";

export type ArchiveItem = {
  id: string;
  title: string;
  thumb: string;
  full: string;
  categories: ArchiveCategory[];
  featured?: boolean;
};

export const archiveItems: ArchiveItem[] = [
  { id: "tweety", title: "Salón Tweety", thumb: "/archivo/thumb/tweety.jpg", full: "/archivo/large/salontweety.jpg", categories: ["web", "grafico", "fotografia"], featured: true },
  { id: "athenas", title: "Athenas", thumb: "/archivo/thumb/athenas.jpg", full: "/archivo/large/athenas.png", categories: ["web"], featured: true },
  { id: "buenayre", title: "Buenayre", thumb: "/archivo/thumb/buenayre.jpg", full: "/archivo/large/buenayre.jpg", categories: ["web", "fotografia"] },
  { id: "campeon", title: "Campeón", thumb: "/archivo/thumb/campeon.jpg", full: "/archivo/large/campeon.jpg", categories: ["web", "fotografia"] },
  { id: "cuatroVientos", title: "Cuatro Vientos", thumb: "/archivo/thumb/cuatroVientos.jpg", full: "/archivo/large/cuatroVientos.jpg", categories: ["grafico", "fotografia"] },
  { id: "drogadependencia", title: "Drogadependencia", thumb: "/archivo/thumb/drogadependencia.jpg", full: "/archivo/large/drogadependencia.jpg", categories: ["web", "grafico"] },
  { id: "emanuelLagos", title: "Emanuel Lagos", thumb: "/archivo/thumb/emanuelLagos.jpg", full: "/archivo/large/emanuelLagos.jpg", categories: ["web", "grafico"] },
  { id: "enTusManos", title: "En Tus Manos", thumb: "/archivo/thumb/enTusManos.jpg", full: "/archivo/large/enTusManos.jpg", categories: ["web", "grafico"] },
  { id: "faroni", title: "Faroni", thumb: "/archivo/thumb/faroni.jpg", full: "/archivo/large/faroni.jpg", categories: ["fotografia"] },
  { id: "fm", title: "FM", thumb: "/archivo/thumb/fm.jpg", full: "/archivo/large/fm.jpg", categories: ["web"] },
  { id: "gantes", title: "Gantes", thumb: "/archivo/thumb/gantes.jpg", full: "/archivo/large/gantes.jpg", categories: ["web"] },
  { id: "guadalupe", title: "Guadalupe", thumb: "/archivo/thumb/guadalupe.jpg", full: "/archivo/large/guadalupe.jpg", categories: ["web"], featured: true },
  { id: "hf", title: "HF", thumb: "/archivo/thumb/hf.jpg", full: "/archivo/large/hf.jpg", categories: ["web", "grafico", "fotografia"] },
  { id: "jar", title: "JAR", thumb: "/archivo/thumb/jar.jpg", full: "/archivo/large/jar.jpg", categories: ["web", "grafico"], featured: true },
  { id: "laEsperanza", title: "La Esperanza", thumb: "/archivo/thumb/laEsperanza.jpg", full: "/archivo/large/laEsperanza.jpg", categories: ["web"] },
  { id: "ligaSanPatricio", title: "Liga San Patricio", thumb: "/archivo/thumb/ligaSanPatricio.jpg", full: "/archivo/large/ligaSanPatricio.jpg", categories: ["web"] },
  { id: "liliana", title: "Liliana", thumb: "/archivo/thumb/liliana.jpg", full: "/archivo/large/liliana.jpg", categories: ["web"] },
  { id: "loveInLight", title: "Love In Light", thumb: "/archivo/thumb/loveInLight.jpg", full: "/archivo/large/loveInLight.jpg", categories: ["web"] },
  { id: "opinion", title: "Opinión", thumb: "/archivo/thumb/opinion.jpg", full: "/archivo/large/opinion.jpg", categories: ["web"] },
  { id: "pabloMartinez", title: "Pablo Martínez", thumb: "/archivo/thumb/pabloMartinez.jpg", full: "/archivo/large/pabloMartinez.jpg", categories: ["web", "grafico"], featured: true },
  { id: "padreMisericordioso", title: "Padre Misericordioso", thumb: "/archivo/thumb/padreMisericordioso.jpg", full: "/archivo/large/padreMisericordioso.jpg", categories: ["web", "grafico"], featured: true },
  { id: "fg", title: "TFG", thumb: "/archivo/thumb/fg.jpg", full: "/archivo/large/fg.jpg", categories: ["web"] },
  { id: "write", title: "The Write Idea", thumb: "/archivo/thumb/theWriteidea.jpg", full: "/archivo/large/write.jpg", categories: ["web"] },
  { id: "wendy", title: "Wendy", thumb: "/archivo/thumb/wendy.jpg", full: "/archivo/large/wendy.jpg", categories: ["web"] },
];

export const categoryLabels: Record<ArchiveCategory | "todo" | "destacado", string> = {
  todo: "Todo",
  destacado: "Destacado",
  web: "Desarrollo web",
  grafico: "Diseño gráfico",
  fotografia: "Fotografía",
};
