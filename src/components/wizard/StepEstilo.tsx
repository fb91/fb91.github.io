import type { WizardData } from "../../lib/wizard";
import { Field, StepHeader, TextArea, TextInput } from "./fields";

type Props = { data: WizardData; update: (p: Partial<WizardData>) => void };

export default function StepEstilo({ data, update }: Props) {
  return (
    <div>
      <StepHeader title="Estilo y textos" subtitle="Si no tenés todo definido, no pasa nada. Lo armamos juntos." />

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Color primario" hint="Hex o nombre. Vacío = elijo yo">
            <div className="flex gap-2">
              <input
                type="color"
                value={data.colorPrimario || "#f97316"}
                onChange={(e) => update({ colorPrimario: e.target.value })}
                className="w-12 h-12 rounded-xl border border-[var(--color-border)] bg-transparent cursor-pointer"
              />
              <TextInput
                value={data.colorPrimario}
                onChange={(e) => update({ colorPrimario: e.target.value })}
                placeholder="#DC2626 o vacío"
              />
            </div>
          </Field>
          <Field label="Color secundario" hint="Vacío = elijo yo">
            <div className="flex gap-2">
              <input
                type="color"
                value={data.colorSecundario || "#1a1a2e"}
                onChange={(e) => update({ colorSecundario: e.target.value })}
                className="w-12 h-12 rounded-xl border border-[var(--color-border)] bg-transparent cursor-pointer"
              />
              <TextInput
                value={data.colorSecundario}
                onChange={(e) => update({ colorSecundario: e.target.value })}
                placeholder="#1A1A2E o vacío"
              />
            </div>
          </Field>
        </div>

        <Field label="Frase del encabezado" hint="Vacío = la genero yo">
          <TextInput
            value={data.heroSubtitulo}
            onChange={(e) => update({ heroSubtitulo: e.target.value })}
            placeholder='Ej: "Tu barbería de confianza en Rosario"'
          />
        </Field>

        <Field label="Botón de acción principal" hint="Lo que querés que el cliente haga">
          <TextInput
            value={data.heroCta}
            onChange={(e) => update({ heroCta: e.target.value })}
            placeholder='Ej: "Reservá tu turno" / "Hacé tu pedido" / "Contactanos"'
          />
        </Field>

        <Field label="Sobre nosotros" hint="Breve descripción del negocio. Vacío = la escribo yo">
          <TextArea
            value={data.aboutText}
            onChange={(e) => update({ aboutText: e.target.value })}
            placeholder="Contame en pocas palabras qué hace tu negocio, hace cuánto, qué lo distingue..."
            rows={4}
          />
        </Field>
      </div>
    </div>
  );
}
