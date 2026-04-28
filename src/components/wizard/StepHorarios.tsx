import type { WizardData } from "../../lib/wizard";
import { Field, StepHeader, TextInput } from "./fields";

type Props = { data: WizardData; update: (p: Partial<WizardData>) => void };

export default function StepHorarios({ data, update }: Props) {
  return (
    <div>
      <StepHeader title="Horarios" subtitle="Cuándo está abierto tu negocio. Si no aplica, dejalo en blanco o escribí 'Cerrado'." />

      <div className="space-y-5">
        <Field label="Lunes a Viernes">
          <TextInput
            value={data.horarioLunVie}
            onChange={(e) => update({ horarioLunVie: e.target.value })}
            placeholder="Ej: 9:00 - 20:00"
          />
        </Field>
        <Field label="Sábados">
          <TextInput
            value={data.horarioSab}
            onChange={(e) => update({ horarioSab: e.target.value })}
            placeholder="Ej: 9:00 - 14:00"
          />
        </Field>
        <Field label="Domingos">
          <TextInput
            value={data.horarioDom}
            onChange={(e) => update({ horarioDom: e.target.value })}
            placeholder="Ej: Cerrado"
          />
        </Field>

        <div className="pt-4 border-t border-[var(--color-border)]/40">
          <Field label="Mapa (opcional)" hint="Si no lo tenés, lo busco yo con la dirección">
            <TextInput
              value={data.mapsEmbed}
              onChange={(e) => update({ mapsEmbed: e.target.value })}
              placeholder="URL del iframe de Google Maps"
            />
          </Field>
        </div>
      </div>
    </div>
  );
}
