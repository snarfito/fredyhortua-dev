// components/Contact.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';
import { Panel } from './Panel';

export function Contact() {
  const { t, language } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  const endpoints = [
    { method: 'mail', value: t.contact.email, href: `mailto:${t.contact.email}` },
    ...(t.contact.whatsapp && t.contact.whatsappDisplay
      ? [{ method: 'chat', value: t.contact.whatsappDisplay, href: t.contact.whatsapp }]
      : []),
    { method: 'web', value: t.contact.linkedinHandle, href: t.contact.linkedin },
    ...(t.contact.github && t.contact.githubHandle
      ? [{ method: 'git', value: t.contact.githubHandle, href: t.contact.github }]
      : []),
  ];

  return (
    <section id="contacto" className="mx-auto max-w-[880px] px-6 pt-7 pb-16">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <Panel label={`${language === 'es' ? 'contacto' : 'contact'} · endpoints`}>
          <h2 className="font-heading text-[15.5px] font-semibold">{t.contact.heading}</h2>
          <p className="mt-1 text-[13.5px] text-[var(--color-text-muted)]">{t.contact.intro}</p>
          <div className="mt-3">
            {endpoints.map((endpoint, index) => (
              <a
                key={endpoint.method}
                href={endpoint.href}
                target={endpoint.href.startsWith('http') ? '_blank' : undefined}
                rel={endpoint.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`flex items-center gap-3 py-3.5 text-[var(--color-text)] no-underline ${
                  index > 0 ? 'border-t border-[var(--color-border)]' : ''
                }`}
              >
                <span className="font-mono-tag flex-shrink-0 rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[11px] text-[var(--color-text-muted)]">
                  {endpoint.method}
                </span>
                <span className="text-[14.5px] transition-colors hover:text-[var(--color-accent)]">
                  {endpoint.value}
                </span>
              </a>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
