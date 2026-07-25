'use client';

import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative mx-auto max-w-[900px] overflow-hidden px-6 py-28 text-center sm:py-36">
      <div
        aria-hidden
        className="fh-orb-a pointer-events-none absolute -top-20 -left-16 h-80 w-80 rounded-full bg-[var(--color-accent)]/[0.18] blur-[60px]"
      />
      <div
        aria-hidden
        className="fh-orb-b pointer-events-none absolute -right-16 -bottom-24 h-[340px] w-[340px] rounded-full bg-[var(--color-accent-secondary)]/[0.16] blur-[70px]"
      />
      <div className="relative">
        <p className="font-mono-tag mb-5 text-[13px] text-[var(--color-accent)]">
          {t.hero.eyebrow}
          <span
            aria-hidden
            className="fh-cursor ml-1 inline-block h-3.5 w-2 align-middle bg-[var(--color-accent)]"
          />
        </p>
        <h1 className="text-[clamp(34px,6vw,58px)] leading-[1.08] font-semibold tracking-tight">{t.hero.title}</h1>
        <p className="mx-auto mt-6 max-w-[620px] text-lg leading-relaxed text-[var(--color-text-muted)]">
          {t.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            className="rounded-full bg-[var(--color-accent)] px-[30px] py-3.5 text-[15px] font-semibold text-[var(--color-bg)] no-underline transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_24px_oklch(68%_0.19_280_/_0.3)]"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#proyectos"
            className="rounded-full border border-[var(--color-border)] px-[30px] py-3.5 text-[15px] font-medium text-[var(--color-text)] no-underline transition-colors duration-300 hover:border-[var(--color-accent)]"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
