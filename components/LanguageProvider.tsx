'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { toggleLanguage, type Language } from '@/lib/i18n';
import { content, type SiteContent } from '@/lib/content';

interface LanguageContextValue {
  language: Language;
  toggle: () => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggle = () => setLanguage((current) => toggleLanguage(current));

  return (
    <LanguageContext.Provider value={{ language, toggle, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
