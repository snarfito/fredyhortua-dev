// components/Footer.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <p className="mx-auto max-w-5xl px-6 text-center text-xs text-[var(--color-text-muted)]">{t.footer.text}</p>
    </footer>
  );
}
