import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

export function Field({ label, hint, children, required }: { label: string; hint?: string; children: ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-semibold">
          {label}
          {required && <span className="text-[var(--color-accent)] ml-1">*</span>}
        </span>
        {hint && <span className="text-xs text-[var(--color-fg-subtle)]">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-4 py-3 text-sm placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:bg-[var(--color-surface)] transition ${props.className ?? ""}`}
    />
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-4 py-3 text-sm placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:bg-[var(--color-surface)] transition resize-y min-h-[100px] ${props.className ?? ""}`}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)]/60 focus:bg-[var(--color-surface)] transition ${props.className ?? ""}`}
    />
  );
}

export function StepHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-[var(--color-fg-muted)]">{subtitle}</p>}
    </div>
  );
}
