// components/Projects.tsx
'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollReveal } from './useScrollReveal';
import { Panel } from './Panel';
import { PhotoStack } from './PhotoStack';

export function Projects() {
  const { t, language } = useLanguage();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="proyectos" className="mx-auto max-w-[880px] px-6 pt-7">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        }`}
      >
        <Panel
          label={`${language === 'es' ? 'proyectos' : 'projects'} · deployments`}
          meta={`${t.projects.items.length} · production`}
        >
          <h2 className="font-heading text-[15.5px] font-semibold">{t.projects.heading}</h2>
          <p className="mt-1 text-[13.5px] text-[var(--color-text-muted)]">{t.projects.intro}</p>
          <div className="mt-4">
            {t.projects.items.map((project, index) => (
              <div
                key={project.name}
                className={`flex flex-col gap-4 py-5 sm:flex-row ${index > 0 ? 'border-t border-[var(--color-border)]' : ''}`}
              >
                <PhotoStack
                  screenshots={project.screenshots}
                  cycleLabel={
                    language === 'es'
                      ? `${project.name} — pasar entre ${project.screenshots.length} capturas`
                      : `${project.name} — browse ${project.screenshots.length} screenshots`
                  }
                />
                <div className="min-w-0 flex-1 pt-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-heading text-[17px] font-semibold">{project.name}</span>
                    <span className="font-mono-tag flex items-center gap-1.5 text-[11px] whitespace-nowrap text-[var(--color-ok)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                      production
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {project.description}
                  </p>
                  <p className="font-mono-tag mt-3 text-[11.5px] leading-relaxed text-[var(--color-accent)] normal-case tracking-normal">
                    {project.stack}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-[13px] text-[var(--color-text-muted)]">
                        · {highlight}
                      </li>
                    ))}
                  </ul>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-tag mt-3 inline-flex items-center gap-1.5 text-[11.5px] text-[var(--color-text)] no-underline normal-case tracking-normal transition-colors hover:text-[var(--color-accent)]"
                    >
                      {language === 'es' ? 'Visitar sitio' : 'Visit site'}
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
