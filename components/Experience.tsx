'use client';

import { useLanguage } from './LanguageProvider';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.experience.heading}</h2>
        <p className="mt-2 text-[var(--color-text-muted)]">{t.experience.summary}</p>
        <ol className="mt-10 space-y-8 border-l border-[var(--color-border)] pl-6">
          {t.experience.items.map((item) => (
            <li key={`${item.org}-${item.period}`}>
              <p className="font-mono-tag text-xs text-[var(--color-accent)]">{item.period}</p>
              <h3 className="mt-1 text-base font-semibold">
                {item.role} · {item.org}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
