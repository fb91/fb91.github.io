import type { WizardData } from "../../lib/wizard";
import { StepHeader } from "./fields";

type Props = { data: WizardData; update: (p: Partial<WizardData>) => void };

const plans = [
  {
    id: "estatico" as const,
    name: "Sitio expositivo",
    desc: "Ideal para presentar tu negocio. Diseño moderno, optimizado y rápido.",
    bullets: ["Adaptado a celular", "SEO local", "WhatsApp y mapa", "Hospedaje incluido"],
  },
  {
    id: "cms" as const,
    name: "Sitio con panel administrativo",
    desc: "Lo del expositivo + panel para que edites contenido vos mismo.",
    bullets: ["Editás textos e imágenes", "Cargás servicios y reseñas", "Capacitación incluida", "Cambios sin código"],
  },
];

export default function StepPlan({ data, update }: Props) {
  return (
    <div>
      <StepHeader title="¿Qué tipo de sitio querés?" subtitle="Después podemos ajustar lo que necesites." />

      <div className="grid sm:grid-cols-2 gap-4">
        {plans.map((p) => {
          const selected = data.plan === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => update({ plan: p.id })}
              className={`text-left rounded-2xl border p-6 transition ${
                selected
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5 ring-1 ring-[var(--color-accent)]/40"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]/40 hover:bg-[var(--color-surface)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold tracking-tight">{p.name}</h3>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? "border-[var(--color-accent)] bg-[var(--color-accent)]" : "border-[var(--color-border)]"}`}>
                  {selected && <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-fg)]" />}
                </div>
              </div>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{p.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[var(--color-fg-muted)]">
                    <span className="text-[var(--color-accent)]">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-[var(--color-fg-subtle)] text-center">
        ¿No estás seguro? Elegí cualquiera y lo charlamos antes de cerrar el trabajo.
      </p>
    </div>
  );
}
