// components/HowIWork.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';

export function HowIWork() {
  const { t } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-[1120px] px-6 pt-15 pb-5">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent-secondary)]">05</p>
        <h2 className="text-[clamp(26px,3.4vw,34px)] font-semibold">{t.howIWork.heading}</h2>
        <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)]">
          {t.howIWork.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {t.howIWork.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono-tag rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3.5 py-1.5 text-xs text-[var(--color-accent)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
