'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';
import { Panel } from './Panel';

export function Experience() {
  const { t, language } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experiencia" className="mx-auto max-w-[880px] px-6 pt-7">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <Panel
          label={`${language === 'es' ? 'experiencia' : 'experience'} · CHANGELOG.md`}
          meta={language === 'es' ? '2007 → presente' : '2007 → present'}
        >
          <h2 className="font-heading text-[15.5px] font-semibold">{t.experience.heading}</h2>
          <p className="mt-1 max-w-[62ch] text-[13.5px] leading-relaxed text-[var(--color-text-muted)]">
            {t.experience.summary}
          </p>
          <div className="mt-4">
            {t.experience.items.map((item, index) => (
              <div
                key={`${item.org}-${item.period}`}
                className={`grid grid-cols-1 gap-1 py-4 sm:grid-cols-[108px_1fr] sm:gap-4 ${
                  index > 0 ? 'border-t border-[var(--color-border)]' : ''
                }`}
              >
                <p className="font-mono-tag text-[12px] text-[var(--color-accent)] normal-case tracking-normal">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-heading text-[15px] font-semibold">
                    {item.role} <span className="font-sans text-sm font-normal text-[var(--color-text-muted)]">— {item.org}</span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
