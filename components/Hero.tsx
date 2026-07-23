'use client';

import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
      <p className="font-mono-tag mb-4 text-xs text-[var(--color-accent)]">{t.hero.eyebrow}</p>
      <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{t.hero.title}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">{t.hero.subtitle}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contacto"
          className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {t.hero.ctaPrimary}
        </a>
        <a
          href="#proyectos"
          className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
        >
          {t.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
