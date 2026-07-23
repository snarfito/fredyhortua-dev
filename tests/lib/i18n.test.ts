import { describe, it, expect } from 'vitest';
import { toggleLanguage } from '../../lib/i18n';

describe('toggleLanguage', () => {
  it('switches from Spanish to English', () => {
    expect(toggleLanguage('es')).toBe('en');
  });

  it('switches from English to Spanish', () => {
    expect(toggleLanguage('en')).toBe('es');
  });
});
