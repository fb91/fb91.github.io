# fb91

Portfolio de **Fabricio Bianchi** — Ingeniero en Sistemas de Información.
Una sola página, pensada para clientes: presentación, redes y trabajos (destacados primero).

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
  layouts/Base.astro              Layout y <head>
  components/GraphBackground.astro Fondo animado (red de nodos, reacciona al mouse y a los toques)
  components/SocialIcon.astro     Íconos de las redes
  components/WhatsAppButton.astro Botón que muestra el WhatsApp solo a personas
  components/Footer.astro         Pie con redes
  lib/profile.ts                  Nombre, título, presentación, años de experiencia, WhatsApp y redes
  lib/projects.ts                 Proyectos propios en línea (destacados)
  lib/archive.ts                  Trabajos para clientes (visor); `featured` los destaca
  assets/projects/                Capturas de los proyectos (optimizadas por Astro)
  assets/archive/thumbs/          Miniaturas 4:3 de los trabajos (recortes de los diseños completos)
  assets/archive/covers/          Portadas 16:10 de los trabajos destacados
  pages/
    index.astro                   La página única
    404.astro
public/archivo/large/         Diseños completos de los trabajos (se ven en el visor)
```

Las URLs viejas (`/archivo/`, `/en/`, `/en/archive/`) redirigen a `/`.

## Editar contenido

| Qué | Dónde |
|---|---|
| Presentación, título y redes | `src/lib/profile.ts` |
| Proyectos propios | `src/lib/projects.ts` |
| Trabajos para clientes | `src/lib/archive.ts` |

Cada trabajo necesita su miniatura en `src/assets/archive/thumbs/<id>.jpg`. Para destacarlo:
`featured: true`, una portada 16:10 en `src/assets/archive/covers/<id>.jpg`, un tipo (`kind`)
y una línea (`note`). Los destacados van primero en la lista.

### WhatsApp

El número va codificado en `src/lib/profile.ts` (nunca en texto plano) y se muestra recién
cuando el clic parece de una persona: evento real del navegador, sin automatización, no
apenas cargada la página y con movimiento de mouse, toque o teclado. Ahí mismo está el
comando para codificar un número nuevo.

### Años de experiencia

Salen de `yearsOfExperience()` en `src/lib/profile.ts` (desde el 1/6/2014) y se recalculan
en el navegador, así que se actualizan solos aunque el sitio no se vuelva a publicar.

### Fondo animado

Se queda quieto si el sistema pide reducir el movimiento, si el equipo es modesto
(menos de 4 núcleos o 4 GB) o con ahorro de datos. Si la animación anda lenta, baja
la cantidad de nodos y, de última, se detiene.

## Deploy

Se publica en <https://fb91.github.io> con GitHub Actions: cada push a `main` corre
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que buildea y sube `dist/` a Pages.

Configuración necesaria una sola vez: **Settings → Pages → Source: GitHub Actions**.

## Historia

Antes de 2026 esto era un portfolio freelance en HTML + Bootstrap + jQuery.
Ese código se eliminó; sus imágenes se conservan en `public/archivo/` y se muestran en la página principal.
