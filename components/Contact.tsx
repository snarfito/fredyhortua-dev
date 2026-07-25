// components/Contact.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';

export function Contact() {
  const { t } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  const cards = [
    { label: 'Email', value: t.contact.email, href: `mailto:${t.contact.email}` },
    ...(t.contact.whatsapp && t.contact.whatsappDisplay
      ? [{ label: 'WhatsApp', value: t.contact.whatsappDisplay, href: t.contact.whatsapp }]
      : []),
    { label: 'LinkedIn', value: t.contact.linkedinHandle, href: t.contact.linkedin },
    ...(t.contact.github && t.contact.githubHandle
      ? [{ label: 'GitHub', value: t.contact.githubHandle, href: t.contact.github }]
      : []),
  ];

  return (
    <section id="contacto" className="mx-auto max-w-[900px] px-6 pt-17.5 pb-25">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent-secondary)]">
          07 · {t.contact.heading}
        </p>
        <h2 className="text-[clamp(26px,3.4vw,34px)] font-semibold">{t.contact.heading}</h2>
        <p className="mt-2.5 text-base text-[var(--color-text-muted)]">{t.contact.intro}</p>
        <div className="mt-9 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-5 no-underline text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-accent)]"
            >
              <p className="font-mono-tag mb-1.5 text-[11px] text-[var(--color-accent-secondary)]">
                {card.label}
              </p>
              <p className="text-sm break-all">{card.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
