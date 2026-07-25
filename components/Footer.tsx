// components/Footer.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--color-border)] py-6">
      <div className="mx-auto flex max-w-[880px] flex-wrap items-center justify-between gap-2 px-6">
        <span className="font-mono-tag text-[11.5px] text-[var(--color-text-muted)] normal-case tracking-normal">
          {t.footer.text}
        </span>
        <span className="font-mono-tag text-[11.5px] text-[var(--color-text-muted)] normal-case tracking-normal">
          fredy.hortua@gmail.com
        </span>
      </div>
    </footer>
  );
}
