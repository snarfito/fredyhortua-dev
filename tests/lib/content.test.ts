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
});
