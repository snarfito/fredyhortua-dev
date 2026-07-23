// components/TechStack.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.stack.heading}</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {t.stack.categories.map((category) => (
            <div key={category.label}>
              <p className="font-mono-tag text-xs text-[var(--color-accent)]">{category.label}</p>
              <ul className="mt-3 space-y-1">
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
