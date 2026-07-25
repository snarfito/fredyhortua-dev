// components/Services.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';

export function Services() {
  const { t } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicios" className="mx-auto max-w-[1120px] px-6 pt-10 pb-5">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent-secondary)]">
          01 · {t.services.heading}
        </p>
        <h2 className="text-[clamp(26px,3.4vw,34px)] font-semibold">{t.services.heading}</h2>
        <p className="mt-2.5 text-base text-[var(--color-text-muted)]">{t.services.intro}</p>
        <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {t.services.items.map((service) => (
            <div
              key={service.title}
              className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-text-muted)]">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent-secondary)]" />
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
