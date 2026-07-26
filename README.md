# fb91

Sitio personal de **Fabricio Bianchi** — Ingeniero en Sistemas de Información.
Una página de presentación con los proyectos actuales y un archivo de trabajos anteriores.

Bilingüe: español en `/` e inglés en `/en/`.

## Stack

- [Astro 5](https://astro.build/) — salida estática, sin JS de framework
- [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/vite`)
- TypeScript
- Deploy: GitHub Pages (GitHub Actions)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build de producción
npm run check    # type-check de los .astro
```

## Estructura

```
src/
  layouts/Base.astro          Layout, <head>, hreflang, header y footer
  components/
    Header.astro              Nombre, link al archivo y cambio de idioma
    Hero.astro                Foto, nombre, rol y redes
    About.astro               Sobre mí
    Projects.astro            Proyectos actuales con captura
    ArchiveTeaser.astro       Bloque que enlaza al archivo
    ArchiveView.astro         Encabezado de /archivo
    ArchiveGrid.astro         Grilla filtrable + lightbox (JS vanilla)
    Section.astro             Sección editorial: etiqueta + contenido
  i18n/ui.ts                  Textos ES/EN y rutas por idioma
  lib/profile.ts              Nombre, rol, ubicación y redes
  lib/projects.ts             Proyectos actuales
  lib/archive.ts              Trabajos archivados
  assets/                     Foto de perfil y capturas (optimizadas por Astro)
  pages/
    index.astro               Home ES
    archivo.astro             Archivo ES
    en/index.astro            Home EN
    en/archive.astro          Archivo EN
    404.astro
public/archivo/               Imágenes del archivo (thumb + large)
```

## Editar contenido

| Qué | Dónde |
|---|---|
| Nombre, rol, ubicación, redes | `src/lib/profile.ts` |
| Proyectos (nombre, link, descripción) | `src/lib/projects.ts` |
| Textos de la interfaz y "Sobre mí" (ES/EN) | `src/i18n/ui.ts` |
| Trabajos archivados | `src/lib/archive.ts` |

### Agregar un proyecto

1. Guardá la captura en `src/assets/projects/` (ideal 1440×900 @2x).
2. Agregá la entrada en `src/lib/projects.ts` con su `tagline` en ES y EN.

## Deploy

Se publica en <https://fb91.github.io> con GitHub Actions: cada push a `main` corre
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que buildea y sube `dist/` a Pages.

Configuración necesaria una sola vez: **Settings → Pages → Source: GitHub Actions**.

## Historia

Antes de 2026 esto era un portfolio freelance en HTML + Bootstrap + jQuery.
Ese código se eliminó; sus imágenes se conservan en `public/archivo/` y se muestran en `/archivo`.
