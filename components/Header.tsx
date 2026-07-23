'use client';

import { useLanguage } from './LanguageProvider';

export function Header() {
  const { t, language, toggle } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-sm font-semibold tracking-tight">
          {t.nav.brand}
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggle}
          className="font-mono-tag rounded-full border border-[var(--color-border)] px-3 py-1 text-xs"
          aria-label="Switch language"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}
