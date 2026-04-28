import type { APIRoute } from "astro";
import { Resend } from "resend";
import { buildEmailHtml } from "../../lib/buildPrompt";
import type { WizardData } from "../../lib/wizard";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let data: WizardData;
  try {
    data = (await request.json()) as WizardData;
  } catch {
    return json({ error: "JSON inválido" }, 400);
  }

  if (!data.nombreCliente || !data.emailCliente || !data.whatsapp || !data.nombre) {
    return json({ error: "Faltan campos obligatorios" }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.emailCliente)) {
    return json({ error: "Email inválido" }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.NOTIFICATION_EMAIL;
  const from = import.meta.env.FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or NOTIFICATION_EMAIL");
    return json({ error: "Servidor mal configurado" }, 500);
  }

  const resend = new Resend(apiKey);
  const html = buildEmailHtml(data);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.emailCliente,
      subject: `Nueva solicitud — ${data.nombre} (${data.plan})`,
      html,
    });
    if (error) {
      console.error(error);
      return json({ error: "No pudimos enviar el email" }, 502);
    }
  } catch (e) {
    console.error(e);
    return json({ error: "No pudimos enviar el email" }, 502);
  }

  return json({ ok: true });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
