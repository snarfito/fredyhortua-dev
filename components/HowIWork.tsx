// components/HowIWork.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';
import { Panel } from './Panel';

export function HowIWork() {
  const { t, language } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  const pipeline = [...t.howIWork.tools, 'review + tests', 'deploy'];

  return (
    <section className="mx-auto max-w-[880px] px-6 pt-7">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <Panel
          label={`${language === 'es' ? 'cómo trabajo' : 'how i work'} · build pipeline`}
          meta="CI/CD"
        >
          <h2 className="font-heading text-[15.5px] font-semibold">{t.howIWork.heading}</h2>
          <div className="mt-4 flex flex-wrap items-center gap-0">
            {pipeline.map((step, index) => (
              <span key={step} className="flex items-center">
                <span className="font-mono-tag rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-[13px] py-[9px] text-xs normal-case tracking-normal">
                  {step}
                </span>
                {index < pipeline.length - 1 ? (
                  <span className="font-mono-tag px-2.5 text-[var(--color-text-muted)]" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-[66ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
            {t.howIWork.intro}
          </p>
        </Panel>
      </div>
    </section>
  );
}
