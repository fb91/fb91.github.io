export default function StepDone() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)]">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">¡Solicitud enviada!</h1>
      <p className="mt-4 text-[var(--color-fg-muted)]">
        Recibí toda la información. Te voy a estar contactando en menos de 24hs por email.
      </p>
      <p className="mt-2 text-sm text-[var(--color-fg-subtle)]">
        Mientras tanto, si querés acelerarlo, escribime directo por WhatsApp.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="/"
          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-surface)] transition"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  );
}
