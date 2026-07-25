// components/WhyWorkWithMe.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';

export function WhyWorkWithMe() {
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
        <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent-secondary)]">04</p>
        <h2 className="mb-8 text-[clamp(26px,3.4vw,34px)] font-semibold">{t.why.heading}</h2>
        <div className="grid gap-4.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {t.why.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3.5 rounded-[14px] border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-5"
            >
              <span className="font-mono-tag flex-shrink-0 text-[15px] text-[var(--color-accent-secondary)]">
                ✓
              </span>
              <p className="text-[14.5px] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
