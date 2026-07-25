// components/Projects.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';

export function Projects() {
  const { t } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="proyectos" className="mx-auto max-w-[1120px] px-6 pt-15 pb-5">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <p className="font-mono-tag mb-2 text-xs text-[var(--color-accent-secondary)]">
          02 · {t.projects.heading}
        </p>
        <h2 className="text-[clamp(26px,3.4vw,34px)] font-semibold">{t.projects.heading}</h2>
        <p className="mt-2.5 text-base text-[var(--color-text-muted)]">{t.projects.intro}</p>
        <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {t.projects.items.map((project) => (
            <div
              key={project.name}
              className="overflow-hidden rounded-[18px] border border-[var(--color-border)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <div
                aria-hidden
                className="flex aspect-video items-center justify-center bg-[repeating-linear-gradient(135deg,oklch(21%_0.025_260)_0px,oklch(21%_0.025_260)_12px,oklch(16%_0.02_260)_12px,oklch(16%_0.02_260)_24px)]"
              >
                <span className="font-mono-tag text-[11px] text-[var(--color-text-muted)]/70">
                  {project.name}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {project.description}
                </p>
                <p className="font-mono-tag mt-4 text-[11.5px] leading-relaxed text-[var(--color-accent)]">
                  {project.stack}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-[13px] leading-snug">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent-secondary)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
