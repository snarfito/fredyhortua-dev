// components/WhyWorkWithMe.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function WhyWorkWithMe() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.why.heading}</h2>
        <ul className="mt-8 space-y-4">
          {t.why.items.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
