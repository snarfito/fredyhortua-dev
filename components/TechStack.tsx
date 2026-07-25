// components/TechStack.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';
import { Panel } from './Panel';

export function TechStack() {
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
        <Panel label="stack · manifest" meta="package.json">
          <h2 className="font-heading mb-4 text-[15.5px] font-semibold">{t.stack.heading}</h2>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
            {t.stack.categories.map((category) => (
              <div key={category.label}>
                <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent)]">{category.label}</p>
                <ul className="flex flex-col gap-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--color-text-muted)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
