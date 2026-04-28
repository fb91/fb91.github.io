import type { WizardData } from "./wizard";

const planLabel: Record<string, string> = {
  estatico: "Sitio expositivo",
  cms: "Sitio con panel administrativo",
};

const rubroLabel: Record<string, string> = {
  restaurant: "restaurant",
  clinic: "clinic",
  legal: "legal",
  generic: "generic",
};

export function buildPromptForClaudeCode(d: WizardData): string {
  const horarios = [
    d.horarioLunVie ? `Lun-Vie ${d.horarioLunVie}` : "",
    d.horarioSab ? `Sáb ${d.horarioSab}` : "",
    d.horarioDom ? `Dom ${d.horarioDom}` : "",
  ]
    .filter(Boolean)
    .join(", ") || "consultar";

  const colores =
    d.colorPrimario || d.colorSecundario
      ? `Primario ${d.colorPrimario || "(elegí vos)"}, Secundario ${d.colorSecundario || "(elegí vos)"}`
      : `elegí vos según el rubro (${d.rubro || "generic"})`;

  return `Creá el sitio para un cliente nuevo.

Identificador: ${d.identificador || "(definir)"}
Nombre: ${d.nombre}
Rubro: ${rubroLabel[d.rubro] || "generic"}
Ciudad: ${d.ciudad}
Dirección: ${d.direccion || "(no provista)"}
WhatsApp: ${d.whatsapp}
Mensaje WA: ${d.whatsappMensaje}
Tel: ${d.telefono || "(no provisto)"}
Instagram: ${d.instagram || "(no tiene)"}
Facebook: ${d.facebook || "(no tiene)"}
Horarios: ${horarios}
Maps: ${d.mapsEmbed || "buscalo vos con la dirección"}
Colores: ${colores}
Servicios: ${d.servicios || "generá servicios verosímiles para el rubro y la zona"}
Reseñas: ${d.resenias || "generá 3 reseñas verosímiles basándote en el rubro y la zona"}
Frase hero: ${d.heroSubtitulo || "generá algo copado"}
About: ${d.aboutText || `generá algo basado en un negocio del rubro ${d.rubro} en ${d.ciudad}`}
CTA: ${d.heroCta || "generá según el rubro"}
Créditos: madeBy "Fabri Web", madeByUrl "https://fabri.dev"

→ Esto crearía el repo fb91/website-${d.identificador || "(definir)"}
`;
}

export function buildEmailHtml(d: WizardData): string {
  const prompt = buildPromptForClaudeCode(d);
  const planName = planLabel[d.plan] || d.plan;

  return `<!doctype html>
<html><body style="font-family: -apple-system, system-ui, sans-serif; max-width: 720px; margin: 0 auto; padding: 24px; color: #111;">
  <h1 style="margin: 0 0 8px; font-size: 22px;">Nueva solicitud de sitio</h1>
  <p style="color: #666; margin: 0 0 24px; font-size: 14px;">Plan: <strong>${escapeHtml(planName)}</strong></p>

  <h2 style="font-size: 16px; margin: 24px 0 8px;">Contacto del cliente</h2>
  <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
    <tr><td style="padding: 6px 0; color: #666; width: 140px;">Nombre</td><td><strong>${escapeHtml(d.nombreCliente)}</strong></td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Email</td><td><a href="mailto:${escapeHtml(d.emailCliente)}">${escapeHtml(d.emailCliente)}</a></td></tr>
    <tr><td style="padding: 6px 0; color: #666;">WhatsApp</td><td><a href="https://wa.me/${escapeHtml(d.whatsapp)}">${escapeHtml(d.whatsapp)}</a></td></tr>
  </table>

  <h2 style="font-size: 16px; margin: 24px 0 8px;">Negocio</h2>
  <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
    <tr><td style="padding: 6px 0; color: #666; width: 140px;">Nombre</td><td>${escapeHtml(d.nombre)}</td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Rubro</td><td>${escapeHtml(d.rubro)}</td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Ciudad</td><td>${escapeHtml(d.ciudad)}</td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Dirección</td><td>${escapeHtml(d.direccion || "—")}</td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Teléfono</td><td>${escapeHtml(d.telefono || "—")}</td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Instagram</td><td>${escapeHtml(d.instagram || "—")}</td></tr>
    <tr><td style="padding: 6px 0; color: #666;">Facebook</td><td>${escapeHtml(d.facebook || "—")}</td></tr>
  </table>

  ${d.comentarios ? `<h2 style="font-size: 16px; margin: 24px 0 8px;">Comentarios</h2><p style="font-size: 14px; white-space: pre-wrap;">${escapeHtml(d.comentarios)}</p>` : ""}

  <h2 style="font-size: 16px; margin: 32px 0 8px; padding-top: 24px; border-top: 1px solid #eee;">Prompt listo para Claude Code</h2>
  <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Copiá y pegá esto en la terminal con Claude Code:</p>
  <pre style="background: #f4f4f5; padding: 16px; border-radius: 8px; font-size: 12px; line-height: 1.5; white-space: pre-wrap; word-break: break-word; border: 1px solid #e4e4e7;">${escapeHtml(prompt)}</pre>
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
