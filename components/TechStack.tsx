// components/TechStack.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';

export function TechStack() {
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
        <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent-secondary)]">06</p>
        <h2 className="mb-8 text-[clamp(26px,3.4vw,34px)] font-semibold">{t.stack.heading}</h2>
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {t.stack.categories.map((category) => (
            <div key={category.label}>
              <p className="font-mono-tag mb-3 text-xs text-[var(--color-accent)]">{category.label}</p>
              <ul className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--color-text-muted)]">
                    {item}
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
