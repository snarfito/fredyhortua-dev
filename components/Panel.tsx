// components/Panel.tsx
import type { ReactNode } from 'react';

interface PanelProps {
  label: string;
  meta?: string;
  children: ReactNode;
}

export function Panel({ label, meta, children }: PanelProps) {
  return (
    <div className="mt-7 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)]">
      <div className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] px-[18px] py-[13px]">
        <span className="font-mono-tag text-[11px] text-[var(--color-text-muted)]">{label}</span>
        {meta ? <span className="font-mono-tag text-[11px] text-[var(--color-text-muted)]">{meta}</span> : null}
      </div>
      <div className="px-[18px] pt-5 pb-[22px]">{children}</div>
    </div>
  );
}
