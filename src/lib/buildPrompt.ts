import type { WizardData } from "./wizard";

const planLabel: Record<string, string> = {
  estatico: "Sitio expositivo",
  cms: "Sitio con panel administrativo",
};

export function buildPromptForClaudeCode(d: WizardData): string {
  const horarios = `- Lunes a Viernes: ${d.horarioLunVie || "(consultar)"}
- Sábados: ${d.horarioSab || "(consultar)"}
- Domingos: ${d.horarioDom || "Cerrado"}`;

  const colorPrimario = d.colorPrimario || `elegí vos según el rubro (${d.rubro || "generic"})`;
  const colorSecundario = d.colorSecundario || `elegí vos según el rubro (${d.rubro || "generic"})`;

  const servicios = d.servicios.trim() || "generá servicios verosímiles para el rubro y la zona";
  const resenias = d.resenias.trim() || "generá 3 reseñas verosímiles basándote en el rubro y la zona";
  const heroSubtitulo = d.heroSubtitulo.trim() || "generá algo copado";
  const aboutText =
    d.aboutText.trim() ||
    `generá algo basándote en un negocio del rubro ${d.rubro || "generic"} en ${d.ciudad || "la zona"}`;
  const heroCta = d.heroCta.trim() || "Contactanos";

  const div = "═══════════════════════════════════════════";

  return `Sos mi asistente de desarrollo web. Vas a crear el sitio para un nuevo cliente a partir de mi template en GitHub.

${div}
PASO 0: CONTEXTO Y REGLAS
${div}

Template base: fb91/template-website
Convención de nombres: el repo del cliente se llama website-[identificadorCliente]
Ejemplo: website-peluqueriaBarbers, website-draMartinez, website-laEsquinaDelSabor

El template tiene un archivo CLAUDE.md con toda la arquitectura, estructura de archivos, rubros soportados, colores sugeridos y flujo del CMS. LEELO COMPLETO antes de tocar cualquier archivo. Es tu biblia para este proyecto.

El archivo principal (y generalmente el único) que se modifica es: src/lib/config.ts
Contiene dos objetos: siteConfig (datos del negocio) y defaultContent (textos, servicios, reseñas, horarios, contacto).

${div}
DATOS DEL CLIENTE
${div}

Identificador del cliente (para el nombre del repo): ${d.identificador || "(definir)"}
Nombre del negocio: ${d.nombre}
Rubro: ${d.rubro || "generic"}
Ciudad/zona: ${d.ciudad}
Dirección: ${d.direccion || "(no provista)"}
WhatsApp (código de país, sin + ni espacios): ${d.whatsapp}
Mensaje predeterminado de WhatsApp: ${d.whatsappMensaje}
Teléfono: ${d.telefono || "(no provisto)"}
Instagram: ${d.instagram || "(no tiene)"}
Facebook: ${d.facebook || "(no tiene)"}

Horarios:
${horarios}

Google Maps embed URL: ${d.mapsEmbed || "buscalo vos con la dirección"}

Colores:
- Primario: ${colorPrimario}
- Secundario: ${colorSecundario}

${div}
SERVICIOS / MENÚ
${div}

${servicios}

${div}
RESEÑAS
${div}

${resenias}

${div}
TEXTOS
${div}

Frase hero (subtítulo): ${heroSubtitulo}
Texto "Sobre nosotros": ${aboutText}
CTA del hero: ${heroCta}

${div}
CRÉDITOS (footer)
${div}

madeBy: "Fabri Web"
madeByUrl: "https://fabri.dev"

${div}
LO QUE TENÉS QUE HACER (en orden)
${div}

1. CREAR EL REPO desde el template:
   gh repo create fb91/website-${d.identificador || "[identificadorCliente]"} --template fb91/template-website --public --clone
   cd website-${d.identificador || "[identificadorCliente]"}

2. LEER EL CLAUDE.md del repo. Tiene todo: arquitectura, qué archivos tocar, colores por rubro, formato de SEO, flujo del CMS. Seguí sus indicaciones.

3. MODIFICAR src/lib/config.ts con todos los datos del cliente:
   - siteConfig: businessName, businessType, colores, WhatsApp, Maps, SEO (metaTitle y metaDescription)
   - defaultContent: heroTitle, heroSubtitle, heroCta, aboutText, services[], reviews[], hours{}, phone, address, redes sociales
   - Para el metaTitle usá el formato: "[Nombre] | [Rubro] en [Ciudad]"
   - Para el metaDescription: frase de 150-160 caracteres con keywords locales
   - Si no tengo el Google Maps embed URL, buscá la dirección del cliente en Google Maps, hacé "Compartir → Insertar mapa" y usá el src del iframe

4. EVALUAR si el rubro necesita ajustes en componentes (el CLAUDE.md tiene una sección sobre esto). Si es un rubro estándar (restaurant, clinic, legal, generic) probablemente no haga falta tocar nada más.

5. COMMIT Y PUSH:
   git add -A
   git commit -m "feat: sitio ${d.nombre}"
   git push origin main

6. ENTREGAME al final:
   - Link al repo: https://github.com/fb91/website-${d.identificador || "[identificadorCliente]"}
   - ADMIN_PIN sugerido (generá uno aleatorio de 6 dígitos)
   - Resumen de lo que configuraste (1-2 oraciones)
   - Los pasos para el cliente:
     1. Crear cuenta en vercel.com
     2. "Add New Project" → Import Git Repository → pegar URL del repo
     3. Storage → Create → KV Store → Link al proyecto
     4. Storage → Create → Blob Store → Link al proyecto
     5. Settings → Environment Variables → Agregar ADMIN_PIN = [el PIN]
     6. Deployments → Redeploy
   - Si el cliente ya tiene dominio, agregar: Settings → Domains → agregar dominio → configurar DNS
`;
}

export function buildEmailHtml(d: WizardData): string {
  const prompt = buildPromptForClaudeCode(d);
  const planName = planLabel[d.plan] || d.plan;

  return `<!doctype html>
<html><body style="font-family: -apple-system, system-ui, sans-serif; max-width: 760px; margin: 0 auto; padding: 24px; color: #111;">
  <h1 style="margin: 0 0 8px; font-size: 22px;">Nueva solicitud de sitio</h1>
  <p style="color: #666; margin: 0 0 24px; font-size: 14px;">Plan: <strong>${escapeHtml(planName)}</strong></p>

  <h2 style="font-size: 16px; margin: 24px 0 8px;">Contacto del cliente</h2>
  <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
    <tr><td style="padding: 6px 0; color: #666; width: 140px;">Nombre</td><td><strong>${escapeHtml(d.nombreCliente)}</strong></td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Email</td><td><a href="mailto:${escapeHtml(d.emailCliente)}">${escapeHtml(d.emailCliente)}</a></td></tr>
    <tr><td style="padding: 6px 0; color: #666;">WhatsApp</td><td><a href="https://wa.me/${escapeHtml(d.whatsapp)}">${escapeHtml(d.whatsapp)}</a></td></tr>
  </table>

  ${d.comentarios ? `<h2 style="font-size: 16px; margin: 24px 0 8px;">Comentarios extra</h2><p style="font-size: 14px; white-space: pre-wrap;">${escapeHtml(d.comentarios)}</p>` : ""}

  <h2 style="font-size: 16px; margin: 32px 0 8px; padding-top: 24px; border-top: 1px solid #eee;">Prompt listo para Claude Code</h2>
  <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Copialo y pegalo en la terminal con Claude Code:</p>
  <pre style="background: #f4f4f5; padding: 16px; border-radius: 8px; font-size: 12px; line-height: 1.55; white-space: pre-wrap; word-break: break-word; border: 1px solid #e4e4e7; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;">${escapeHtml(prompt)}</pre>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
