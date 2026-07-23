// components/Contact.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Contact() {
  const { t } = useLanguage();
  const links = [
    { label: 'Email', href: `mailto:${t.contact.email}` },
    { label: 'LinkedIn', href: t.contact.linkedin },
    ...(t.contact.github ? [{ label: 'GitHub', href: t.contact.github }] : []),
    ...(t.contact.whatsapp ? [{ label: 'WhatsApp', href: t.contact.whatsapp }] : []),
  ];

  return (
    <section id="contacto" className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.contact.heading}</h2>
        <p className="mt-2 text-[var(--color-text-muted)]">{t.contact.intro}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
