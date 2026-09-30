# fb91

Sitio personal de **Fabricio Bianchi** — Ingeniero en Sistemas de Información.
Una sola página: un cajón de proyectos y cosas que fui haciendo.
Aparte, las políticas de privacidad de los complementos para ChatGPT.

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
  layouts/Base.astro          Layout y <head> de la página principal
  components/Footer.astro     Pie con redes
  lib/profile.ts              Nombre, email de contacto, redes y rutas fijas
  lib/projects.ts             Proyectos (con o sin captura)
  lib/archive.ts              Trabajos freelance anteriores (lightbox)
  assets/projects/            Capturas (optimizadas por Astro)
  pages/
    index.astro               La página única
    chatgpt/recuerdos-para-imprimir/privacidad.astro
                              Política de privacidad (autónoma, sin JS)
    404.astro
public/archivo/               Imágenes del archivo (thumb + large)
```

Las URLs viejas (`/archivo/`, `/en/`, `/en/archive/`) redirigen a `/`.

## Editar contenido

| Qué | Dónde |
|---|---|
| Proyectos | `src/lib/projects.ts` |
| Trabajos anteriores | `src/lib/archive.ts` |
| Redes y email de contacto | `src/lib/profile.ts` |

### Email de contacto (obligatorio)

`contactEmail` en `src/lib/profile.ts` se muestra en la política de privacidad.
Mientras esté vacío, `npm run build` falla a propósito: así la política nunca se
publica sin un contacto real.

## Deploy

Se publica en <https://fb91.github.io> con GitHub Actions: cada push a `main` corre
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que buildea y sube `dist/` a Pages.

Configuración necesaria una sola vez: **Settings → Pages → Source: GitHub Actions**.

## Historia

Antes de 2026 esto era un portfolio freelance en HTML + Bootstrap + jQuery.
Ese código se eliminó; sus imágenes se conservan en `public/archivo/` y se muestran en la página principal.
