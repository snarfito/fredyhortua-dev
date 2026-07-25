// components/Footer.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--color-border)] py-7">
      <div className="mx-auto flex max-w-[1120px] items-center gap-2.5 px-6">
        <div className="logo-badge flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-[7px] font-heading text-[10px] font-bold text-[var(--color-bg)]">
          FH
        </div>
        <p className="m-0 text-[13px] text-[var(--color-text-muted)]">{t.footer.text}</p>
      </div>
    </footer>
  );
}
