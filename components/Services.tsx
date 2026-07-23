// components/Services.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.services.heading}</h2>
        <p className="mt-2 text-[var(--color-text-muted)]">{t.services.intro}</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {t.services.items.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-6"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
