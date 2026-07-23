export type Language = 'es' | 'en';

export function toggleLanguage(current: Language): Language {
  return current === 'es' ? 'en' : 'es';
}
