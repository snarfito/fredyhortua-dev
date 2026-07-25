// components/HowIWork.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function HowIWork() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.howIWork.heading}</h2>
        <p className="mt-4 max-w-3xl text-[var(--color-text-muted)]">{t.howIWork.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {t.howIWork.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono-tag rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-accent)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
