import type { WizardData } from "../../lib/wizard";
import { StepHeader } from "./fields";

type Props = { data: WizardData; update: (p: Partial<WizardData>) => void };

const planLabel: Record<string, string> = {
  estatico: "Sitio expositivo",
  cms: "Sitio con panel administrativo",
};

const rubroLabel: Record<string, string> = {
  restaurant: "Gastronomía",
  clinic: "Salud",
  legal: "Estudio legal / Profesional",
  generic: "Otro",
};

export default function StepResumen({ data }: Props) {
  const rows: { label: string; value: string }[] = [
    { label: "Plan", value: planLabel[data.plan] || "—" },
    { label: "Negocio", value: data.nombre || "—" },
    { label: "Rubro", value: rubroLabel[data.rubro] || "—" },
    { label: "Ciudad", value: data.ciudad || "—" },
    { label: "Tu nombre", value: data.nombreCliente || "—" },
    { label: "Tu email", value: data.emailCliente || "—" },
    { label: "WhatsApp", value: data.whatsapp || "—" },
  ];

  return (
    <div>
      <StepHeader
        title="Última revisión"
        subtitle="Si está todo bien, mandalo. Te respondo en menos de 24hs."
      />

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 divide-y divide-[var(--color-border)]/60">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-3 gap-3 px-5 py-3 text-sm">
            <div className="text-[var(--color-fg-subtle)]">{r.label}</div>
            <div className="col-span-2 font-medium break-words">{r.value}</div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-[var(--color-fg-subtle)] text-center">
        Al enviar aceptás que use estos datos para contactarte sobre tu solicitud. No vamos a guardar nada en bases de datos.
      </p>
    </div>
  );
}
