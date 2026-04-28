import type { WizardData } from "../../lib/wizard";
import { Field, StepHeader, TextArea } from "./fields";

type Props = { data: WizardData; update: (p: Partial<WizardData>) => void };

export default function StepContenido({ data, update }: Props) {
  return (
    <div>
      <StepHeader
        title="Servicios y reseñas"
        subtitle="No te preocupes por el formato. Si no tenés los datos, dejalo vacío y lo completo yo."
      />

      <div className="space-y-5">
        <Field label="Servicios, productos o menú" hint="Uno por línea o como prefieras">
          <TextArea
            value={data.servicios}
            onChange={(e) => update({ servicios: e.target.value })}
            placeholder={`Ej:
- Corte clásico — Tijera y máquina, incluye lavado — $5000
- Barba completa — Perfilado con navaja — $3500
- Corte + barba — Combo completo — $7500

(o dejá vacío si querés que los genere yo)`}
            rows={7}
          />
        </Field>

        <Field label="Reseñas de clientes" hint="Si tenés reales, copialas. Si no, las genero">
          <TextArea
            value={data.resenias}
            onChange={(e) => update({ resenias: e.target.value })}
            placeholder={`Ej:
- "Excelente atención" — Lucas M. — 5 estrellas
- "Buena onda y buenos precios" — Diego R. — 4 estrellas`}
            rows={5}
          />
        </Field>

        <Field label="Algo más que querés contarme" hint="Cualquier detalle, gusto particular, referencia visual, etc.">
          <TextArea
            value={data.comentarios}
            onChange={(e) => update({ comentarios: e.target.value })}
            placeholder="Ej: Me gustaría algo elegante, similar al estilo de [tal sitio]..."
            rows={4}
          />
        </Field>
      </div>
    </div>
  );
}
