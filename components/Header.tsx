'use client';

import { useLanguage } from './LanguageProvider';

export function Header() {
  const { t, language, toggle } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]">
      <div className="mx-auto flex max-w-[880px] items-center justify-between gap-4 px-6 py-3.5">
        <a href="#hero" className="flex items-center gap-2.5 font-mono-tag text-[12.5px] no-underline">
          <span
            aria-hidden
            className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[var(--color-ok)] shadow-[0_0_0_3px_var(--color-accent-dim)]"
          />
          <span className="text-[var(--color-text)]">fredy-hortua.dev</span>
          <span className="text-[var(--color-text-muted)]">/status</span>
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-mono-tag text-[12.5px] text-[var(--color-text-muted)] no-underline transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggle}
          className="font-mono-tag cursor-pointer rounded-full border border-[var(--color-border)] bg-transparent px-3 py-1.5 text-[11px] text-[var(--color-text)] transition-[border-color,transform] duration-150 ease-out hover:border-[var(--color-accent)] active:scale-95"
          aria-label="Switch language"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}
