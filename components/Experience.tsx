'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';

export function Experience() {
  const { t } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experiencia" className="mx-auto max-w-[900px] px-6 pt-15 pb-5">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent-secondary)]">
          03 · {t.experience.heading}
        </p>
        <h2 className="text-[clamp(26px,3.4vw,34px)] font-semibold">{t.experience.heading}</h2>
        <p className="mt-2.5 max-w-[640px] text-base leading-relaxed text-[var(--color-text-muted)]">
          {t.experience.summary}
        </p>
        <div className="mt-10 flex flex-col">
          {t.experience.items.map((item) => (
            <div
              key={`${item.org}-${item.period}`}
              className="grid grid-cols-1 gap-2 border-t border-[var(--color-border)] py-6 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <p className="font-mono-tag text-[13px] text-[var(--color-accent)]">{item.period}</p>
              <div>
                <h3 className="text-base font-semibold">
                  {item.role} <span className="font-normal text-[var(--color-text-muted)]">— {item.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
