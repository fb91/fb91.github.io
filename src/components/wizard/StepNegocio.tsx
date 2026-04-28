import type { WizardData } from "../../lib/wizard";
import { Field, Select, StepHeader, TextInput } from "./fields";

type Props = { data: WizardData; update: (p: Partial<WizardData>) => void };

const rubros = [
  { value: "restaurant", label: "Gastronomía / Restaurant" },
  { value: "clinic", label: "Salud / Consultorio" },
  { value: "legal", label: "Estudio legal / Profesional" },
  { value: "generic", label: "Otro" },
];

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 40);
}

export default function StepNegocio({ data, update }: Props) {
  return (
    <div>
      <StepHeader title="Sobre tu negocio" subtitle="Lo básico para empezar." />

      <div className="space-y-5">
        <Field label="Nombre del negocio" required>
          <TextInput
            value={data.nombre}
            onChange={(e) => {
              const nombre = e.target.value;
              update({ nombre, identificador: data.identificador || slugify(nombre) });
            }}
            placeholder="Ej: Peluquería Barbers"
          />
        </Field>

        <Field label="Rubro" required>
          <Select value={data.rubro} onChange={(e) => update({ rubro: e.target.value as WizardData["rubro"] })}>
            <option value="">Elegí una opción</option>
            {rubros.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </Select>
        </Field>

        <Field label="Ciudad o zona" required>
          <TextInput
            value={data.ciudad}
            onChange={(e) => update({ ciudad: e.target.value })}
            placeholder="Ej: Rosario, Santa Fe"
          />
        </Field>

        <Field label="Dirección" hint="Para mostrar en el mapa (opcional)">
          <TextInput
            value={data.direccion}
            onChange={(e) => update({ direccion: e.target.value })}
            placeholder="Ej: Av. Pellegrini 1234"
          />
        </Field>
      </div>
    </div>
  );
}
