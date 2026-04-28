import { useEffect, useState } from "react";
import { initialData, STORAGE_KEY, type Plan, type WizardData } from "../../lib/wizard";
import StepPlan from "./StepPlan";
import StepNegocio from "./StepNegocio";
import StepContacto from "./StepContacto";
import StepHorarios from "./StepHorarios";
import StepEstilo from "./StepEstilo";
import StepContenido from "./StepContenido";
import StepResumen from "./StepResumen";
import StepDone from "./StepDone";

const steps = [
  { key: "plan", label: "Plan", Component: StepPlan },
  { key: "negocio", label: "Negocio", Component: StepNegocio },
  { key: "contacto", label: "Contacto", Component: StepContacto },
  { key: "horarios", label: "Horarios", Component: StepHorarios },
  { key: "estilo", label: "Estilo", Component: StepEstilo },
  { key: "contenido", label: "Contenido", Component: StepContenido },
  { key: "resumen", label: "Resumen", Component: StepResumen },
] as const;

function getInitialPlanFromUrl(): Plan | "" {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const p = params.get("plan");
  if (p === "estatico" || p === "cms") return p;
  return "";
}

export default function Wizard() {
  const [data, setData] = useState<WizardData>(initialData);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // hydrate from sessionStorage + URL
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      const fromStorage: Partial<WizardData> = raw ? JSON.parse(raw) : {};
      const planFromUrl = getInitialPlanFromUrl();
      setData({
        ...initialData,
        ...fromStorage,
        ...(planFromUrl ? { plan: planFromUrl } : {}),
      });
    } catch {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  const update = (patch: Partial<WizardData>) => setData((d) => ({ ...d, ...patch }));

  const totalSteps = steps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const canGoNext = (): boolean => {
    const s = steps[step].key;
    if (s === "plan") return !!data.plan;
    if (s === "negocio") return !!(data.nombre && data.rubro && data.ciudad);
    if (s === "contacto") return !!(data.whatsapp && data.emailCliente && data.nombreCliente);
    return true;
  };

  const next = () => {
    if (!canGoNext()) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/solicitud", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No pudimos enviar la solicitud");
      }
      sessionStorage.removeItem(STORAGE_KEY);
      setSubmitted(true);
    } catch (e: any) {
      setError(e.message || "Error desconocido");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <StepDone />;

  const Current = steps[step].Component;

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs text-[var(--color-fg-muted)] mb-2">
          <span>Paso {step + 1} de {totalSteps}</span>
          <span>{steps[step].label}</span>
        </div>
        <div className="h-1.5 rounded-full bg-[var(--color-surface)] overflow-hidden">
          <div
            className="h-full bg-[var(--color-accent)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-[400px]">
        <Current data={data} update={update} />
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-5 py-2.5 text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--color-surface)] transition"
        >
          ← Atrás
        </button>

        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={!canGoNext()}
            className="rounded-full bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-6 py-2.5 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-accent-soft)] transition"
          >
            Siguiente →
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            className="rounded-full bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-6 py-2.5 text-sm font-semibold disabled:opacity-60 hover:bg-[var(--color-accent-soft)] transition"
          >
            {submitting ? "Enviando…" : "Enviar solicitud"}
          </button>
        )}
      </div>
    </div>
  );
}
