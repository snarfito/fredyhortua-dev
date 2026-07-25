'use client';

import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="mx-auto max-w-[880px] px-6 pt-14">
      <p className="font-mono-tag text-[12.5px] text-[var(--color-text-muted)]">
        $ {t.hero.terminalCommand}
        <br />→{' '}
        <span className="text-[var(--color-accent)]">
          {t.hero.terminalStatus}
          <span aria-hidden className="fh-cursor ml-1 inline-block h-3.5 w-2 align-middle bg-[var(--color-accent)]" />
        </span>
      </p>
      <h1 className="font-heading mt-5 max-w-[15ch] text-[clamp(28px,4.4vw,44px)] leading-[1.12] font-semibold tracking-tight">
        {t.hero.title}
      </h1>
      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-[var(--color-text-muted)]">{t.hero.subtitle}</p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#contacto"
          className="rounded-md bg-[var(--color-accent)] px-6 py-3 text-[15px] font-semibold text-[var(--color-text)] no-underline transition-transform duration-150 ease-out active:scale-95"
        >
          {t.hero.ctaPrimary}
        </a>
        <a
          href="#proyectos"
          className="rounded-md border border-[var(--color-border)] px-6 py-3 text-[15px] font-medium text-[var(--color-text)] no-underline transition-colors duration-150 hover:border-[var(--color-accent)] active:scale-95"
        >
          {t.hero.ctaSecondary}
        </a>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
        {t.hero.metrics.map((metric) => (
          <div key={metric.label} className="bg-[var(--color-bg)] px-4 py-4">
            <div className="font-mono-tag text-[22px] font-semibold text-[var(--color-accent)] tabular-nums normal-case tracking-normal">
              {metric.value}
            </div>
            <div className="mt-1 text-xs text-[var(--color-text-muted)]">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
