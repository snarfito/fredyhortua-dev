// components/WhyWorkWithMe.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';
import { Panel } from './Panel';

export function WhyWorkWithMe() {
  const { t } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-[880px] px-6 pt-7">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <Panel label="04 · why-work-with-me">
          <h2 className="font-heading mb-4 text-[15.5px] font-semibold">{t.why.heading}</h2>
          <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {t.why.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-4"
              >
                <span className="font-mono-tag flex-shrink-0 text-[14px] text-[var(--color-ok)]">✓</span>
                <p className="text-[14px] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
