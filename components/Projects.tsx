// components/Projects.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.projects.heading}</h2>
        <p className="mt-2 text-[var(--color-text-muted)]">{t.projects.intro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {t.projects.items.map((project) => (
            <div key={project.name} className="rounded-2xl border border-[var(--color-border)] p-6">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{project.description}</p>
              <p className="font-mono-tag mt-4 text-xs text-[var(--color-accent)]">{project.stack}</p>
              <ul className="mt-4 space-y-1">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-[var(--color-text-muted)]">
                    · {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
