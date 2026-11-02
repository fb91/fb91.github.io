import type { ImageMetadata } from "astro";

type Images = Record<string, { default: ImageMetadata }>;

// Las imágenes se encuentran por id: `thumbs/<id>.jpg` (4:3) y, para los destacados, `covers/<id>.jpg` (16:10).
const thumbs: Images = import.meta.glob("../assets/archive/thumbs/*.jpg", { eager: true });
const covers: Images = import.meta.glob("../assets/archive/covers/*.jpg", { eager: true });

type Entry = {
  id: string;
  title: string;
  /** Diseño completo (mockup vertical largo), en /public/archivo/large. */
  full: string;
  /** Una línea opcional bajo el título. */
  note?: string;
  /** Destacado: se muestra más grande, junto a los proyectos. Requiere `kind`, `note` y una portada. */
  featured?: boolean;
  kind?: string;
};

export type ArchiveItem = Entry & { thumb: ImageMetadata; cover?: ImageMetadata };

/**
 * Trabajos para clientes. Los destacados van primero: el orden de la lista es el del visor.
 */
const entries: Entry[] = [
  {
    id: "athenas",
    title: "Athenas",
    full: "/archivo/large/athenas.png",
    featured: true,
    kind: "Sitio web",
    note: "Sitio oficial de la cantante: agenda, discografía y talleres.",
  },
  {
    id: "pabloMartinez",
    title: "Pablo Martínez",
    full: "/archivo/large/pabloMartinez.jpg",
    featured: true,
    kind: "Sitio web",
    note: "Sitio del músico: presentaciones, discos y novedades.",
  },
  {
    id: "padreMisericordioso",
    title: "Padre Misericordioso",
    full: "/archivo/large/padreMisericordioso.jpg",
    featured: true,
    kind: "Sitio web",
    note: "Comunidad que acompaña la recuperación de adicciones.",
  },
  { id: "tweety", title: "Salón Tweety", full: "/archivo/large/salontweety.jpg" },
  { id: "buenayre", title: "Buenayre", full: "/archivo/large/buenayre.jpg" },
  { id: "campeon", title: "Campeón", full: "/archivo/large/campeon.jpg" },
  { id: "cuatroVientos", title: "Cuatro Vientos", full: "/archivo/large/cuatroVientos.jpg" },
  { id: "drogadependencia", title: "Drogadependencia", full: "/archivo/large/drogadependencia.jpg" },
  { id: "emanuelLagos", title: "Emanuel Lagos", full: "/archivo/large/emanuelLagos.jpg" },
  { id: "enTusManos", title: "En Tus Manos", full: "/archivo/large/enTusManos.jpg" },
  { id: "faroni", title: "Faroni", full: "/archivo/large/faroni.jpg" },
  {
    id: "fm",
    title: "FM&Beyond",
    full: "/archivo/large/fm.jpg",
    note: "Optimización de su sitio en WordPress.",
  },
  { id: "gantes", title: "Gantes", full: "/archivo/large/gantes.jpg" },
  { id: "guadalupe", title: "Guadalupe", full: "/archivo/large/guadalupe.jpg" },
  {
    id: "hf",
    title: "HF Establecimiento Metalúrgico",
    full: "/archivo/large/hf.jpg",
    note: "Sitio web comercial e identidad gráfica.",
  },
  {
    id: "jar",
    title: "Juventudes Agustino Recoletas",
    full: "/archivo/large/jar.jpg",
    note: "Sitio web parroquial, Rosario.",
  },
  { id: "laEsperanza", title: "La Esperanza", full: "/archivo/large/laEsperanza.jpg" },
  { id: "ligaSanPatricio", title: "Liga San Patricio", full: "/archivo/large/ligaSanPatricio.jpg" },
  { id: "liliana", title: "Liliana", full: "/archivo/large/liliana.jpg" },
  { id: "loveInLight", title: "Love In Light", full: "/archivo/large/loveInLight.jpg" },
  {
    id: "fg",
    title: "The Ferneborg Group",
    full: "/archivo/large/fg.jpg",
    note: "Puesta a punto de su sitio en WordPress.",
  },
  { id: "write", title: "The Write Idea", full: "/archivo/large/write.jpg" },
  { id: "wendy", title: "Wendy", full: "/archivo/large/wendy.jpg" },
];

const image = (images: Images, folder: string, id: string) => images[`../assets/archive/${folder}/${id}.jpg`]?.default;

export const archiveItems: ArchiveItem[] = entries.map((entry) => {
  const cover = image(covers, "covers", entry.id);
  // Los destacados usan su portada también como miniatura.
  const thumb = image(thumbs, "thumbs", entry.id) ?? cover;
  if (!thumb) throw new Error(`Falta la imagen de "${entry.id}" en src/assets/archive/thumbs/.`);
  if (entry.featured && !cover) throw new Error(`Falta la portada de "${entry.id}" en src/assets/archive/covers/.`);
  return { ...entry, thumb, cover };
});
