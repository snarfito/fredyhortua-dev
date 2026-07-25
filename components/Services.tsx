// components/Services.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';
import { Panel } from './Panel';

export function Services() {
  const { t, language } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicios" className="mx-auto max-w-[880px] px-6 pt-10">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <Panel
          label={`${language === 'es' ? 'servicios' : 'services'} · capabilities.log`}
          meta={`${t.services.items.length} ${language === 'es' ? 'activos' : 'active'}`}
        >
          <h2 className="font-heading text-[15.5px] font-semibold">{t.services.heading}</h2>
          <p className="mt-1 text-[13.5px] text-[var(--color-text-muted)]">{t.services.intro}</p>
          <div className="mt-4">
            {t.services.items.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-[20px_1fr] gap-3 py-4 ${index > 0 ? 'border-t border-[var(--color-border)]' : ''}`}
              >
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-ok)]" aria-hidden />
                <div>
                  <h3 className="font-heading text-[16.5px] font-semibold">{service.title}</h3>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {service.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.includes.map((item) => (
                      <span
                        key={item}
                        className="font-mono-tag rounded border border-[var(--color-border)] px-[7px] py-[2px] text-[11px] text-[var(--color-text-muted)] normal-case tracking-normal"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
