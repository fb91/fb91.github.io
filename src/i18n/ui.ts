export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "meta.title": "Fabricio Bianchi — Ingeniero en Sistemas de Información",
    "meta.description":
      "Fabricio Bianchi, Ingeniero en Sistemas de Información en Rosario, Argentina. Proyectos, perfil profesional y archivo de trabajos.",
    "meta.archiveTitle": "Archivo — Fabricio Bianchi",
    "meta.archiveDescription":
      "Archivo de trabajos freelance de diseño web, gráfico y fotografía.",

    "nav.home": "Inicio",
    "nav.archive": "Archivo",
    "nav.langLabel": "Cambiar idioma",

    "about.label": "Sobre mí",
    "about.body":
      "Ingeniero en Sistemas de Información. Diseño y construyo productos web de punta a punta: del modelo de datos y la arquitectura hasta la interfaz que la gente termina usando. Me interesa el software que resuelve problemas concretos y se explica solo.",
    "about.body2":
      "Antes de eso trabajé como freelance haciendo sitios, diseño gráfico y fotografía. Esos trabajos siguen archivados acá.",

    "profile.elsewhere": "Enlaces",

    "projects.label": "Proyectos",
    "projects.intro": "En lo que estoy trabajando hoy.",
    "projects.visit": "Visitar sitio",

    "archive.label": "Archivo",
    "archive.teaserTitle": "Trabajos anteriores",
    "archive.teaserBody":
      "Una etapa anterior: sitios, piezas gráficas y fotografía hechos como freelance. Los dejo acá como referencia.",
    "archive.teaserCta": "Ver el archivo",
    "archive.back": "Volver",
    "archive.title": "Archivo",
    "archive.intro":
      "Trabajos freelance de diseño web, gráfico y fotografía de una etapa anterior. Se conservan como referencia; no reflejan mi trabajo actual.",
    "archive.count": "trabajos",
    "archive.close": "Cerrar",
    "archive.prev": "Anterior",
    "archive.next": "Siguiente",

    "filter.todo": "Todo",
    "filter.destacado": "Destacados",
    "filter.web": "Desarrollo web",
    "filter.grafico": "Diseño gráfico",
    "filter.fotografia": "Fotografía",

    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Hecho con Astro.",
  },
  en: {
    "meta.title": "Fabricio Bianchi — Information Systems Engineer",
    "meta.description":
      "Fabricio Bianchi, Information Systems Engineer based in Rosario, Argentina. Projects, professional profile and work archive.",
    "meta.archiveTitle": "Archive — Fabricio Bianchi",
    "meta.archiveDescription":
      "Archive of freelance web design, graphic design and photography work.",

    "nav.home": "Home",
    "nav.archive": "Archive",
    "nav.langLabel": "Switch language",

    "about.label": "About",
    "about.body":
      "Information Systems Engineer. I design and build web products end to end: from the data model and the architecture to the interface people actually use. I care about software that solves a concrete problem and explains itself.",
    "about.body2":
      "Before that I worked as a freelancer doing websites, graphic design and photography. That work is still archived here.",

    "profile.elsewhere": "Links",

    "projects.label": "Projects",
    "projects.intro": "What I'm working on right now.",
    "projects.visit": "Visit site",

    "archive.label": "Archive",
    "archive.teaserTitle": "Earlier work",
    "archive.teaserBody":
      "An earlier chapter: websites, graphic pieces and photography made as a freelancer. Kept here for reference.",
    "archive.teaserCta": "Browse the archive",
    "archive.back": "Back",
    "archive.title": "Archive",
    "archive.intro":
      "Freelance web design, graphic design and photography work from an earlier chapter. Kept for reference; it does not reflect my current work.",
    "archive.count": "pieces",
    "archive.close": "Close",
    "archive.prev": "Previous",
    "archive.next": "Next",

    "filter.todo": "All",
    "filter.destacado": "Featured",
    "filter.web": "Web design",
    "filter.grafico": "Graphic design",
    "filter.fotografia": "Photography",

    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Astro.",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Rutas equivalentes en cada idioma. / Matching routes per language. */
export const routes = {
  home: { es: "/", en: "/en/" },
  archive: { es: "/archivo/", en: "/en/archive/" },
} as const;

export type RouteName = keyof typeof routes;

export function localizedPath(name: RouteName, lang: Lang): string {
  return routes[name][lang];
}

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");
