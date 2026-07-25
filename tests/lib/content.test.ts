import { describe, it, expect } from 'vitest';
import { content } from '../../lib/content';

describe('content', () => {
  it('defines the same nav link ids in both languages', () => {
    const esIds = content.es.nav.links.map((l) => l.id);
    const enIds = content.en.nav.links.map((l) => l.id);
    expect(enIds).toEqual(esIds);
  });

  it('defines the same number of services in both languages', () => {
    expect(content.en.services.items.length).toBe(content.es.services.items.length);
  });

  it('defines the same number of projects in both languages', () => {
    expect(content.en.projects.items.length).toBe(content.es.projects.items.length);
  });

  it('defines the same number of experience entries in both languages', () => {
    expect(content.en.experience.items.length).toBe(content.es.experience.items.length);
  });

  it('defines the same number of differentiator items in both languages', () => {
    expect(content.en.why.items.length).toBe(content.es.why.items.length);
  });

  it('defines the same stack categories (by item count) in both languages', () => {
    const esCounts = content.es.stack.categories.map((c) => c.items.length);
    const enCounts = content.en.stack.categories.map((c) => c.items.length);
    expect(enCounts).toEqual(esCounts);
  });

  it('defines the same number of how-i-work tools in both languages', () => {
    expect(content.en.howIWork.tools.length).toBe(content.es.howIWork.tools.length);
  });

  it('includes a working contact email in both languages', () => {
    expect(content.es.contact.email).toBe('fredy.hortua@gmail.com');
    expect(content.en.contact.email).toBe('fredy.hortua@gmail.com');
  });

  it('includes matching WhatsApp and GitHub contact links in both languages', () => {
    expect(content.es.contact.whatsapp).toBe('https://wa.me/573192618025');
    expect(content.en.contact.whatsapp).toBe(content.es.contact.whatsapp);
    expect(content.es.contact.github).toBe('https://github.com/snarfito');
    expect(content.en.contact.github).toBe(content.es.contact.github);
  });

  it('defines a WhatsApp prefill message in both languages, in the right language', () => {
    expect(content.es.contact.whatsappMessage).toMatch(/^Hola Fredy/);
    expect(content.en.contact.whatsappMessage).toMatch(/^Hi Fredy/);
  });

  it('defines the same number of hero metrics in both languages', () => {
    expect(content.en.hero.metrics.length).toBe(content.es.hero.metrics.length);
  });

  it('defines matching hero metric values in both languages', () => {
    const esValues = content.es.hero.metrics.map((m) => m.value);
    const enValues = content.en.hero.metrics.map((m) => m.value);
    expect(enValues).toEqual(esValues);
  });

  it('defines the same number of project screenshots in both languages', () => {
    const esCounts = content.es.projects.items.map((p) => p.screenshots.length);
    const enCounts = content.en.projects.items.map((p) => p.screenshots.length);
    expect(enCounts).toEqual(esCounts);
  });

  it('every project screenshot points to a src under /images/projects/', () => {
    for (const project of [...content.es.projects.items, ...content.en.projects.items]) {
      for (const shot of project.screenshots) {
        expect(shot.src.startsWith('/images/projects/')).toBe(true);
      }
    }
  });
});
