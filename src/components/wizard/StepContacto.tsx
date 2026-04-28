import type { WizardData } from "../../lib/wizard";
import { Field, StepHeader, TextInput } from "./fields";

type Props = { data: WizardData; update: (p: Partial<WizardData>) => void };

export default function StepContacto({ data, update }: Props) {
  return (
    <div>
      <StepHeader title="Contacto" subtitle="Cómo te contacto y cómo te encuentran tus clientes." />

      <div className="space-y-5">
        <div className="rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-4">
          <p className="text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider mb-3">Tus datos (los uso para contactarte)</p>
          <div className="space-y-4">
            <Field label="Tu nombre" required>
              <TextInput
                value={data.nombreCliente}
                onChange={(e) => update({ nombreCliente: e.target.value })}
                placeholder="Cómo te llamás"
              />
            </Field>
            <Field label="Tu email" required>
              <TextInput
                type="email"
                value={data.emailCliente}
                onChange={(e) => update({ emailCliente: e.target.value })}
                placeholder="tu@email.com"
              />
            </Field>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--color-border)]/40">
          <p className="text-xs text-[var(--color-fg-subtle)] uppercase tracking-wider mb-3 font-semibold">Datos del negocio (van a aparecer en el sitio)</p>
          <div className="space-y-4">
            <Field label="WhatsApp" hint="Sin + ni espacios" required>
              <TextInput
                value={data.whatsapp}
                onChange={(e) => update({ whatsapp: e.target.value.replace(/\D/g, "") })}
                placeholder="5493415551234"
              />
            </Field>
            <Field label="Mensaje predeterminado de WhatsApp">
              <TextInput
                value={data.whatsappMensaje}
                onChange={(e) => update({ whatsappMensaje: e.target.value })}
                placeholder="Ej: Hola! Quiero pedir un turno"
              />
            </Field>
            <Field label="Teléfono">
              <TextInput
                value={data.telefono}
                onChange={(e) => update({ telefono: e.target.value })}
                placeholder="Ej: +54 341 555 1234"
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Instagram" hint="URL completa">
                <TextInput
                  value={data.instagram}
                  onChange={(e) => update({ instagram: e.target.value })}
                  placeholder="https://instagram.com/..."
                />
              </Field>
              <Field label="Facebook" hint="URL completa">
                <TextInput
                  value={data.facebook}
                  onChange={(e) => update({ facebook: e.target.value })}
                  placeholder="https://facebook.com/..."
                />
              </Field>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
