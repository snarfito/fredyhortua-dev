'use client';

import { useLanguage } from './LanguageProvider';

export function Header() {
  const { t, language, toggle } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-4">
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <div className="logo-badge flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[10px] font-heading text-[13px] font-bold text-[var(--color-bg)]">
            FH
          </div>
          <span className="font-heading text-[15px] font-semibold">{t.nav.brand}</span>
        </a>
        <nav className="hidden items-center gap-7 sm:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-[var(--color-text-muted)] no-underline transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggle}
          className="font-mono-tag cursor-pointer rounded-full border border-[var(--color-border)] bg-transparent px-3 py-1.5 text-[11px] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
          aria-label="Switch language"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}
