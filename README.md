# Fabri Web

Sitio personal y plataforma para vender sitios web a PyMEs.

## Stack

- [Astro 5](https://astro.build/) — server output
- [Tailwind CSS v4](https://tailwindcss.com/)
- React (islands para el wizard)
- TypeScript
- Deploy: [Vercel](https://vercel.com/) (`@astrojs/vercel`)
- Email: [Resend](https://resend.com/)

## Desarrollo

```bash
npm install
cp .env.example .env   # completá las variables
npm run dev
```

## Variables de entorno

| Var | Descripción |
|---|---|
| `RESEND_API_KEY` | API key de Resend |
| `NOTIFICATION_EMAIL` | Email donde llegan las solicitudes |
| `FROM_EMAIL` | Email "from" (debe estar verificado en Resend o usar `onboarding@resend.dev` para pruebas) |

## Estructura

```
src/
  layouts/Base.astro            Layout base + meta tags
  components/                   Componentes de la home
  components/wizard/            Wizard React multi-step
  pages/index.astro             Home
  pages/archivo.astro           Trabajos viejos con lightbox
  pages/solicitar.astro         Wizard
  pages/api/solicitud.ts        Endpoint de envío de email
  lib/                          Tipos, datos y utilidades
public/archivo/                  Imágenes del archivo histórico
legacy/                          Código del sitio anterior (referencia)
```

## Deploy a Vercel

1. Conectar repo a Vercel
2. Framework preset: Astro (auto-detectado)
3. Cargar variables de entorno (Settings → Environment Variables)
4. Deploy

## Agregar trabajos recientes

Editá `src/lib/works.ts` y agregá las imágenes a `public/works/`.
