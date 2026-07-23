# Fredy Hortua Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a bilingual (ES/EN) single-page portfolio/services site for Fredy Hortua at `/Users/fredyhortua/Personal/Proyectos/fredyhortua-dev`.

**Architecture:** Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4, mirroring the conventions already used in the sibling `Voo` project (same dependency versions, same `lib/` + `components/` + `tests/lib/` layout, same `@/*` path alias). Single page, no backend, no database. Bilingual copy lives in a typed dictionary (`lib/content.ts`) selected by a React context (`LanguageProvider`); the pure language-switch logic is unit tested, the dictionary's ES/EN parity is unit tested, and presentational components are verified via `npm run build` (this codebase family does not use component-rendering tests — see `Voo/tests/lib/contact.test.ts` for the established pattern of testing only `lib/` logic).

**Tech Stack:** Next.js 16.2.x, React 19.2.x, TypeScript 5, Tailwind CSS v4, Vitest 4 (node environment, `lib/` tests only), deployed to Vercel.

## Global Constraints

- Single-page site (no additional routes) with anchor-based navigation and smooth scroll.
- Bilingual ES/EN via client-side toggle; default language is Spanish (`es`).
- No contact form backend — contact section is direct links (email, LinkedIn; GitHub/WhatsApp added later by the user).
- No content beyond what's in `content-brief.md` / this plan — do not invent clients, metrics, or technologies.
- Visual style: light background, minimalist, one accent color, monospace tags for technical labels (mirrors `Voo`'s `.font-mono-tag` pattern but with a light palette, not dark).
- Deploy target: Vercel, free subdomain for now (no custom domain yet).
- Follow the `Voo` project's file conventions: `lib/*.ts` for logic/content, `components/*.tsx` for UI, `tests/lib/*.test.ts` for tests, `@/*` path alias.

---

### Task 1: Project scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`
- Create: `.gitignore`
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`

**Interfaces:**
- Produces: a buildable, empty Next.js app. Later tasks add `lib/`, `components/`, and `tests/lib/` on top of this.

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "fredyhortua-dev-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "vitest run"
  },
  "dependencies": {
    "next": "16.2.10",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.10",
    "tailwindcss": "^4",
    "typescript": "^5",
    "vitest": "^4.1.10"
  }
}
```

- [ ] **Step 2: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Write `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

- [ ] **Step 4: Write `postcss.config.mjs`**

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 5: Write `eslint.config.mjs`**

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
```

- [ ] **Step 6: Write `vitest.config.ts`**

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
```

- [ ] **Step 7: Write `.gitignore`**

```
# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 8: Write `app/globals.css`**

```css
@import "tailwindcss";

:root {
  --color-bg: #ffffff;
  --color-bg-raised: #f7f7f8;
  --color-text: #16181d;
  --color-text-muted: #565c66;
  --color-accent: #4f46e5;
  --color-border: #e5e7eb;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans), system-ui, sans-serif;
}

.font-mono-tag {
  font-family: var(--font-mono), monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

- [ ] **Step 9: Write `app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Fredy Hortua — Desarrollo Full-Stack & Automatización',
  description:
    'Construyo productos digitales y automatizo lo que te quita el tiempo. Desarrollador full-stack con más de 15 años de experiencia en sistemas de producción SaaS y fintech.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 10: Write a placeholder `app/page.tsx`**

```tsx
export default function Home() {
  return <main className="p-10">Fredy Hortua — coming soon</main>;
}
```

- [ ] **Step 11: Install dependencies**

Run: `cd /Users/fredyhortua/Personal/Proyectos/fredyhortua-dev && npm install`
Expected: install completes, `package-lock.json` is created.

- [ ] **Step 12: Verify the app builds**

Run: `npm run build`
Expected: `Compiled successfully` with no type errors.

- [ ] **Step 13: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app"
```

---

### Task 2: Language-switch logic (`lib/i18n.ts`)

**Files:**
- Create: `lib/i18n.ts`
- Test: `tests/lib/i18n.test.ts`

**Interfaces:**
- Produces: `type Language = 'es' | 'en'` and `function toggleLanguage(current: Language): Language`, consumed by `LanguageProvider` (Task 4) and `lib/content.ts` (Task 3).

- [ ] **Step 1: Write the failing test**

```typescript
// tests/lib/i18n.test.ts
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- tests/lib/i18n.test.ts`
Expected: FAIL — `Cannot find module '../../lib/i18n'`

- [ ] **Step 3: Write the implementation**

```typescript
// lib/i18n.ts
export type Language = 'es' | 'en';

export function toggleLanguage(current: Language): Language {
  return current === 'es' ? 'en' : 'es';
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm run test -- tests/lib/i18n.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add lib/i18n.ts tests/lib/i18n.test.ts
git commit -m "feat: add language toggle logic"
```

---

### Task 3: Bilingual content dictionary (`lib/content.ts`)

**Files:**
- Create: `lib/content.ts`
- Test: `tests/lib/content.test.ts`

**Interfaces:**
- Consumes: `Language` from `lib/i18n.ts` (Task 2).
- Produces: `interface SiteContent` and `const content: Record<Language, SiteContent>`, consumed by `LanguageProvider` (Task 4) and every section component (Tasks 5–12).

- [ ] **Step 1: Write the failing test**

```typescript
// tests/lib/content.test.ts
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

  it('includes a working contact email in both languages', () => {
    expect(content.es.contact.email).toBe('fredy.hortua@gmail.com');
    expect(content.en.contact.email).toBe('fredy.hortua@gmail.com');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- tests/lib/content.test.ts`
Expected: FAIL — `Cannot find module '../../lib/content'`

- [ ] **Step 3: Write the implementation**

```typescript
// lib/content.ts
import type { Language } from './i18n';

export interface NavLink {
  id: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  includes: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  stack: string;
  highlights: string[];
}

export interface ExperienceItem {
  period: string;
  org: string;
  role: string;
  description: string;
}

export interface StackCategory {
  label: string;
  items: string[];
}

export interface SiteContent {
  nav: {
    brand: string;
    links: NavLink[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    heading: string;
    intro: string;
    items: ServiceItem[];
  };
  projects: {
    heading: string;
    intro: string;
    items: ProjectItem[];
  };
  experience: {
    heading: string;
    summary: string;
    items: ExperienceItem[];
  };
  why: {
    heading: string;
    items: string[];
  };
  stack: {
    heading: string;
    categories: StackCategory[];
  };
  contact: {
    heading: string;
    intro: string;
    email: string;
    linkedin: string;
    github?: string;
    whatsapp?: string;
  };
  footer: {
    text: string;
  };
}

export const content: Record<Language, SiteContent> = {
  es: {
    nav: {
      brand: 'Fredy Hortua',
      links: [
        { id: 'servicios', label: 'Servicios' },
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'experiencia', label: 'Experiencia' },
        { id: 'contacto', label: 'Contacto' },
      ],
    },
    hero: {
      eyebrow: 'DESARROLLO WEB · AUTOMATIZACIÓN',
      title: 'Construyo productos digitales y automatizo lo que te quita el tiempo',
      subtitle:
        'Desarrollador full-stack con más de 15 años de experiencia manteniendo sistemas en producción para plataformas SaaS y fintech. Ahora aplico esa disciplina a construir y automatizar tu próximo proyecto.',
      ctaPrimary: 'Hablemos de tu proyecto',
      ctaSecondary: 'Ver proyectos',
    },
    services: {
      heading: 'Servicios',
      intro: 'Dos formas de trabajar juntos, según lo que necesites.',
      items: [
        {
          title: 'Desarrollo de productos web full-stack',
          description:
            'Aplicaciones completas a medida: marketplaces, plataformas de pedidos, paneles de administración, sitios corporativos. Frontend en React/Next.js, backend en FastAPI/Node, bases de datos relacionales, autenticación, pagos e integraciones con servicios externos.',
          includes: [
            'Diseño de arquitectura y modelado de datos',
            'APIs REST, autenticación y roles de usuario',
            'Integración de pasarelas de pago',
            'Despliegue en Vercel, Railway o Docker',
          ],
        },
        {
          title: 'Automatización e integraciones',
          description:
            'Conecto sistemas que no se hablan entre sí y elimino tareas repetitivas: formularios inteligentes, bots de recordatorios por WhatsApp, sincronización con Google Workspace, generación automática de reportes, deduplicación de datos.',
          includes: [
            'Integraciones con APIs de terceros (Planning Center, Google, WhatsApp Business Cloud API)',
            'Bots conversacionales',
            'Jobs programados (cron/schedulers)',
            'Reportes y dashboards automatizados',
          ],
        },
      ],
    },
    projects: {
      heading: 'Proyectos destacados',
      intro: 'Evidencia real: proyectos en producción y en desarrollo activo.',
      items: [
        {
          name: 'Especially',
          description:
            'Marketplace colombiano de productos personalizados y artesanales, con roles diferenciados para compradores, vendedores y administradores.',
          stack: 'Next.js 16 · React 19 · Tailwind · FastAPI · PostgreSQL · SQLAlchemy · JWT · Cloudflare R2 · Wompi',
          highlights: [
            'Catálogo y personalización de productos',
            'Flujo de pedidos con estados y panel de administración',
            'Aplicación y aprobación de productores',
            'Pagos en línea integrados con Wompi',
          ],
        },
        {
          name: 'Tixy Glamour',
          description:
            'Sistema de gestión de pedidos B2B para un negocio de moda, con vistas separadas para vendedores, gerentes y administradores.',
          stack: 'FastAPI · MySQL · React · Vite · TanStack Query · Zustand',
          highlights: [
            'Captura de pedidos por vendedores en campo',
            'Seguimiento de estado en tiempo real (borrador → enviado → confirmado)',
            'Panel gerencial',
            'En producción activa',
          ],
        },
        {
          name: 'VOO Ingeniería',
          description:
            'Sitio web corporativo para una empresa de ingeniería topográfica: topografía de precisión, drones, LiDAR, GNSS, modelado 3D y BIM.',
          stack: 'Next.js · Framer Motion · Tailwind',
          highlights: [
            'Presencia digital profesional',
            'Comunicación de servicios técnicos especializados',
            'Generación de contactos comerciales',
          ],
        },
        {
          name: "Soul's Colors by Bibi",
          description:
            'Sitio para una marca de Biblias personalizadas pintadas a mano, lettering bíblico y talleres creativos, con envíos a toda Colombia.',
          stack: 'HTML · CSS · JavaScript · Vercel Blob',
          highlights: [
            'Catálogo visual de productos',
            'Presencia de marca',
            'Canal de pedidos para un negocio creativo pequeño',
          ],
        },
        {
          name: 'Gestor de Rifas',
          description:
            'Aplicación web para administrar rifas de números: grilla de tickets, participantes y panel de administración.',
          stack: 'Next.js · Upstash Redis',
          highlights: [
            'Seguimiento en tiempo real de números vendidos/disponibles',
            'Gestión de participantes sin hojas de cálculo manuales',
          ],
        },
        {
          name: 'Suite de automatización HUNA',
          description:
            'Conjunto de herramientas de automatización para una iglesia con cientos de voluntarios, integradas con Planning Center Online y Google Workspace.',
          stack: 'FastAPI · Python · Node.js/Express · D3.js · Google APIs · WhatsApp Business Cloud API',
          highlights: [
            'Bot de recordatorios por WhatsApp para líderes de ministerio',
            'Formulario inteligente que evita perfiles duplicados',
            'Organigramas ministeriales interactivos con D3.js',
            'Analizador de carga ministerial y sincronización de permisos en Google Drive',
          ],
        },
      ],
    },
    experience: {
      heading: 'Experiencia',
      summary:
        'Más de 15 años de experiencia en ingeniería y soporte técnico para plataformas SaaS y fintech, con roles que van desde liderazgo de IT hasta escalación técnica senior.',
      items: [
        {
          period: '2024 – Presente',
          org: 'Blossom',
          role: 'Implementation Engineer / Product Support Engineer Tier 3',
          description:
            'Migraciones de datos end-to-end, integración y troubleshooting de APIs REST entre sistemas bancarios y terceros, administración de infraestructura AWS (EC2, S3, CloudWatch), automatización de reportes críticos.',
        },
        {
          period: '2021 – 2024',
          org: 'NICE (anteriormente LiveVox)',
          role: 'Technical Support Manager',
          description:
            'Lideró un equipo global de soporte (Colombia, India, EE. UU.), diseñó automatizaciones con Python y Power Automate que redujeron el tiempo de primera respuesta en 30%, y definió marcos de SLA/KPI para toda el área de soporte.',
        },
        {
          period: '2016 – 2021',
          org: 'ESW Capital / Enghouse Presence',
          role: 'Soporte técnico Nivel 2/3 y control de calidad',
          description:
            'Soporte para plataformas SaaS empresariales: bases de datos, integraciones, infraestructura Linux/AWS, análisis de causa raíz en incidentes de alta severidad.',
        },
        {
          period: '2007 – 2016',
          org: 'E-CallYou SAS / Artico Soluciones Informáticas',
          role: 'IT Manager',
          description:
            'Liderazgo de desarrollo de software para plataformas de call center (PHP, MySQL, Linux, Asterisk PBX). Construyó, entre otros proyectos, un sistema de agendamiento médico usado en campañas de salud a nivel nacional.',
        },
      ],
    },
    why: {
      heading: 'Por qué trabajar conmigo',
      items: [
        'Full-stack real: llevo un proyecto desde la base de datos hasta la interfaz, sin depender de otros perfiles.',
        'Más de 15 años de experiencia previa manteniendo sistemas de producción SaaS/fintech en alta disponibilidad.',
        'No solo construyo software nuevo — también automatizo procesos existentes (formularios, hojas de cálculo, WhatsApp).',
        'Experiencia con pagos en línea (Wompi), APIs de mensajería (WhatsApp Business Cloud API) e integraciones con Google Workspace.',
        'Trabajo tanto con negocios y startups como con organizaciones sin fines de lucro.',
      ],
    },
    stack: {
      heading: 'Stack técnico',
      categories: [
        { label: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
        { label: 'Backend', items: ['FastAPI', 'Node.js / Express', 'Python'] },
        { label: 'Datos', items: ['PostgreSQL', 'MySQL', 'SQLAlchemy'] },
        { label: 'Cloud & DevOps', items: ['AWS (EC2, S3, CloudWatch)', 'Vercel', 'Railway', 'Docker', 'Git'] },
        {
          label: 'Integraciones',
          items: ['Google Workspace APIs', 'WhatsApp Business Cloud API', 'Planning Center', 'Wompi'],
        },
      ],
    },
    contact: {
      heading: 'Contacto',
      intro: '¿Tienes un proyecto en mente? Escríbeme.',
      email: 'fredy.hortua@gmail.com',
      linkedin: 'https://www.linkedin.com/in/fredy-hortua-4267571a/',
    },
    footer: {
      text: '© 2026 Fredy Hortua. Construido con Next.js.',
    },
  },
  en: {
    nav: {
      brand: 'Fredy Hortua',
      links: [
        { id: 'servicios', label: 'Services' },
        { id: 'proyectos', label: 'Projects' },
        { id: 'experiencia', label: 'Experience' },
        { id: 'contacto', label: 'Contact' },
      ],
    },
    hero: {
      eyebrow: 'WEB DEVELOPMENT · AUTOMATION',
      title: 'I build digital products and automate the busywork',
      subtitle:
        'Full-stack developer with 15+ years of experience keeping production systems running for SaaS and fintech platforms. I bring that same discipline to building and automating your next project.',
      ctaPrimary: "Let's talk about your project",
      ctaSecondary: 'See projects',
    },
    services: {
      heading: 'Services',
      intro: 'Two ways to work together, depending on what you need.',
      items: [
        {
          title: 'Full-stack web product development',
          description:
            "Complete custom applications: marketplaces, order management platforms, admin dashboards, corporate sites. React/Next.js frontend, FastAPI/Node backend, relational databases, authentication, payments, and third-party integrations.",
          includes: [
            'Architecture design and data modeling',
            'REST APIs, authentication, and user roles',
            'Payment gateway integration',
            'Deployment on Vercel, Railway, or Docker',
          ],
        },
        {
          title: 'Automation and integrations',
          description:
            "I connect systems that don't talk to each other and remove repetitive work: smart forms, WhatsApp reminder bots, Google Workspace syncing, automated reporting, data deduplication.",
          includes: [
            'Third-party API integrations (Planning Center, Google, WhatsApp Business Cloud API)',
            'Conversational bots',
            'Scheduled jobs (cron/schedulers)',
            'Automated reports and dashboards',
          ],
        },
      ],
    },
    projects: {
      heading: 'Featured projects',
      intro: 'Real evidence: projects in production and in active development.',
      items: [
        {
          name: 'Especially',
          description:
            'Colombian marketplace for personalized and artisanal products, with dedicated roles for buyers, sellers, and admins.',
          stack: 'Next.js 16 · React 19 · Tailwind · FastAPI · PostgreSQL · SQLAlchemy · JWT · Cloudflare R2 · Wompi',
          highlights: [
            'Product catalog and customization',
            'Order flow with status tracking and an admin panel',
            'Producer application and approval workflow',
            'Integrated online payments with Wompi',
          ],
        },
        {
          name: 'Tixy Glamour',
          description:
            'B2B order management system for a fashion business, with separate views for vendors, managers, and admins.',
          stack: 'FastAPI · MySQL · React · Vite · TanStack Query · Zustand',
          highlights: [
            'Order capture by field vendors',
            'Real-time status tracking (draft → sent → confirmed)',
            'Manager dashboard',
            'Live in production',
          ],
        },
        {
          name: 'VOO Ingeniería',
          description:
            'Corporate website for a surveying engineering company: precision topography, drones, LiDAR, GNSS, 3D modeling, and BIM.',
          stack: 'Next.js · Framer Motion · Tailwind',
          highlights: [
            'Professional digital presence',
            'Communicating specialized technical services',
            'Generating business leads',
          ],
        },
        {
          name: "Soul's Colors by Bibi",
          description:
            'Website for a brand of hand-painted, personalized Bibles, biblical lettering, and creative workshops, shipping across Colombia.',
          stack: 'HTML · CSS · JavaScript · Vercel Blob',
          highlights: ['Visual product catalog', 'Brand presence', 'Order channel for a small creative business'],
        },
        {
          name: 'Raffle Manager',
          description: 'Web app to manage number-based raffles: ticket grid, participant list, and admin panel.',
          stack: 'Next.js · Upstash Redis',
          highlights: [
            'Real-time tracking of sold/available numbers',
            'Participant management without manual spreadsheets',
          ],
        },
        {
          name: 'HUNA automation suite',
          description:
            'A suite of automation tools for a church with hundreds of volunteers, integrated with Planning Center Online and Google Workspace.',
          stack: 'FastAPI · Python · Node.js/Express · D3.js · Google APIs · WhatsApp Business Cloud API',
          highlights: [
            'WhatsApp reminder bot for ministry leaders',
            'Smart form that prevents duplicate profiles',
            'Interactive ministry org charts built with D3.js',
            'Ministry workload analysis and Google Drive permission syncing',
          ],
        },
      ],
    },
    experience: {
      heading: 'Experience',
      summary:
        '15+ years of experience in engineering and technical support for SaaS and fintech platforms, in roles ranging from IT leadership to senior technical escalation.',
      items: [
        {
          period: '2024 – Present',
          org: 'Blossom',
          role: 'Implementation Engineer / Product Support Engineer Tier 3',
          description:
            'End-to-end data migrations, REST API integration and troubleshooting between banking systems and third parties, AWS infrastructure management (EC2, S3, CloudWatch), automation of critical reporting.',
        },
        {
          period: '2021 – 2024',
          org: 'NICE (formerly LiveVox)',
          role: 'Technical Support Manager',
          description:
            'Led a global support team (Colombia, India, U.S.), designed automations with Python and Power Automate that cut first-response time by 30%, and defined SLA/KPI frameworks for the whole support org.',
        },
        {
          period: '2016 – 2021',
          org: 'ESW Capital / Enghouse Presence',
          role: 'Tier 2/3 Technical Support & Quality Enforcement',
          description:
            'Support for enterprise SaaS platforms: databases, integrations, Linux/AWS infrastructure, root-cause analysis for high-severity incidents.',
        },
        {
          period: '2007 – 2016',
          org: 'E-CallYou SAS / Artico Soluciones Informáticas',
          role: 'IT Manager',
          description:
            'Led software development for call center platforms (PHP, MySQL, Linux, Asterisk PBX). Built, among other projects, a medical scheduling system used in nationwide healthcare campaigns.',
        },
      ],
    },
    why: {
      heading: 'Why work with me',
      items: [
        'Real full-stack: I take a project from the database to the UI, without depending on other roles.',
        '15+ years of prior experience keeping high-availability SaaS/fintech production systems running.',
        "I don't just build new software — I also automate existing processes (forms, spreadsheets, WhatsApp).",
        'Experience with online payments (Wompi), messaging APIs (WhatsApp Business Cloud API), and Google Workspace integrations.',
        'I work with businesses and startups as well as nonprofits.',
      ],
    },
    stack: {
      heading: 'Tech stack',
      categories: [
        { label: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
        { label: 'Backend', items: ['FastAPI', 'Node.js / Express', 'Python'] },
        { label: 'Data', items: ['PostgreSQL', 'MySQL', 'SQLAlchemy'] },
        { label: 'Cloud & DevOps', items: ['AWS (EC2, S3, CloudWatch)', 'Vercel', 'Railway', 'Docker', 'Git'] },
        {
          label: 'Integrations',
          items: ['Google Workspace APIs', 'WhatsApp Business Cloud API', 'Planning Center', 'Wompi'],
        },
      ],
    },
    contact: {
      heading: 'Contact',
      intro: 'Have a project in mind? Get in touch.',
      email: 'fredy.hortua@gmail.com',
      linkedin: 'https://www.linkedin.com/in/fredy-hortua-4267571a/',
    },
    footer: {
      text: '© 2026 Fredy Hortua. Built with Next.js.',
    },
  },
};
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm run test -- tests/lib/content.test.ts`
Expected: PASS (7 tests)

- [ ] **Step 5: Commit**

```bash
git add lib/content.ts tests/lib/content.test.ts
git commit -m "feat: add bilingual content dictionary"
```

---

### Task 4: Language context provider

**Files:**
- Create: `components/LanguageProvider.tsx`

**Interfaces:**
- Consumes: `toggleLanguage`, `Language` from `lib/i18n.ts` (Task 2); `content`, `SiteContent` from `lib/content.ts` (Task 3).
- Produces: `LanguageProvider` component and `useLanguage(): { language: Language; toggle: () => void; t: SiteContent }`, consumed by every component in Tasks 5–12.

No dedicated unit test for this task: it is a thin React context wrapper around the already-tested `toggleLanguage` function (Task 2). This matches the `Voo` project's convention of only unit-testing `lib/` logic, not React wiring. Verification is the build step below.

- [ ] **Step 1: Write the component**

```tsx
// components/LanguageProvider.tsx
'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { toggleLanguage, type Language } from '@/lib/i18n';
import { content, type SiteContent } from '@/lib/content';

interface LanguageContextValue {
  language: Language;
  toggle: () => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggle = () => setLanguage((current) => toggleLanguage(current));

  return (
    <LanguageContext.Provider value={{ language, toggle, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
```

- [ ] **Step 2: Verify the app still builds**

Run: `npm run build`
Expected: `Compiled successfully` (the provider isn't wired into `app/page.tsx` yet, so this only checks it type-checks in isolation — confirm by temporarily checking `npx tsc --noEmit` includes no errors from this file).

- [ ] **Step 3: Commit**

```bash
git add components/LanguageProvider.tsx
git commit -m "feat: add language context provider"
```

---

### Task 5: Header with navigation and language toggle

**Files:**
- Create: `components/Header.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write the component**

```tsx
// components/Header.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Header() {
  const { t, language, toggle } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-sm font-semibold tracking-tight">
          {t.nav.brand}
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggle}
          className="font-mono-tag rounded-full border border-[var(--color-border)] px-3 py-1 text-xs"
          aria-label="Switch language"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: add header with nav and language toggle"
```

(Build verification for this and the remaining presentational components happens together in Task 13, once they're wired into `app/page.tsx`.)

---

### Task 6: Hero section

**Files:**
- Create: `components/Hero.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write the component**

```tsx
// components/Hero.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
      <p className="font-mono-tag mb-4 text-xs text-[var(--color-accent)]">{t.hero.eyebrow}</p>
      <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{t.hero.title}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">{t.hero.subtitle}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contacto"
          className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {t.hero.ctaPrimary}
        </a>
        <a
          href="#proyectos"
          className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
        >
          {t.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add hero section"
```

---

### Task 7: Services section

**Files:**
- Create: `components/Services.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write the component**

```tsx
// components/Services.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.services.heading}</h2>
        <p className="mt-2 text-[var(--color-text-muted)]">{t.services.intro}</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {t.services.items.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-6"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>{item}</span>
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
```

- [ ] **Step 2: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: add services section"
```

---

### Task 8: Projects section

**Files:**
- Create: `components/Projects.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write the component**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/Projects.tsx
git commit -m "feat: add projects section"
```

---

### Task 9: Experience timeline section

**Files:**
- Create: `components/Experience.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write the component**

```tsx
// components/Experience.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.experience.heading}</h2>
        <p className="mt-2 text-[var(--color-text-muted)]">{t.experience.summary}</p>
        <ol className="mt-10 space-y-8 border-l border-[var(--color-border)] pl-6">
          {t.experience.items.map((item) => (
            <li key={`${item.org}-${item.period}`}>
              <p className="font-mono-tag text-xs text-[var(--color-accent)]">{item.period}</p>
              <h3 className="mt-1 text-base font-semibold">
                {item.role} · {item.org}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Experience.tsx
git commit -m "feat: add experience timeline section"
```

---

### Task 10: "Why work with me" section

**Files:**
- Create: `components/WhyWorkWithMe.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write the component**

```tsx
// components/WhyWorkWithMe.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function WhyWorkWithMe() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.why.heading}</h2>
        <ul className="mt-8 space-y-4">
          {t.why.items.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/WhyWorkWithMe.tsx
git commit -m "feat: add why-work-with-me section"
```

---

### Task 11: Tech stack section

**Files:**
- Create: `components/TechStack.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write the component**

```tsx
// components/TechStack.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t.stack.heading}</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {t.stack.categories.map((category) => (
            <div key={category.label}>
              <p className="font-mono-tag text-xs text-[var(--color-accent)]">{category.label}</p>
              <ul className="mt-3 space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--color-text-muted)]">
                    {item}
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
```

- [ ] **Step 2: Commit**

```bash
git add components/TechStack.tsx
git commit -m "feat: add tech stack section"
```

---

### Task 12: Contact section and footer

**Files:**
- Create: `components/Contact.tsx`
- Create: `components/Footer.tsx`

**Interfaces:**
- Consumes: `useLanguage` from `components/LanguageProvider.tsx` (Task 4).

- [ ] **Step 1: Write `components/Contact.tsx`**

```tsx
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
```

- [ ] **Step 2: Write `components/Footer.tsx`**

```tsx
// components/Footer.tsx
'use client';

import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <p className="mx-auto max-w-5xl px-6 text-center text-xs text-[var(--color-text-muted)]">{t.footer.text}</p>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/Contact.tsx components/Footer.tsx
git commit -m "feat: add contact section and footer"
```

---

### Task 13: Assemble the page

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `LanguageProvider` (Task 4), `Header` (Task 5), `Hero` (Task 6), `Services` (Task 7), `Projects` (Task 8), `Experience` (Task 9), `WhyWorkWithMe` (Task 10), `TechStack` (Task 11), `Contact`/`Footer` (Task 12).

- [ ] **Step 1: Replace the placeholder page with the full assembly**

```tsx
// app/page.tsx
import { LanguageProvider } from '@/components/LanguageProvider';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { WhyWorkWithMe } from '@/components/WhyWorkWithMe';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <WhyWorkWithMe />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
```

- [ ] **Step 2: Run the full test suite**

Run: `npm run test`
Expected: PASS (all `lib/` tests from Tasks 2–3, 9 tests total)

- [ ] **Step 3: Verify the production build**

Run: `npm run build`
Expected: `Compiled successfully` with no type errors.

- [ ] **Step 4: Manual check in the browser**

Run: `npm run dev`, open `http://localhost:3000`.
Verify: all 7 sections render, the ES↔EN toggle in the header switches every section's text, and clicking a nav link scrolls smoothly to the matching section.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble homepage from all sections"
```

---

### Task 14: Deploy to Vercel

**Files:** none (deployment step only)

- [ ] **Step 1: Deploy a preview build**

Use the Vercel CLI or the connected Vercel deployment tool to deploy the project from `/Users/fredyhortua/Personal/Proyectos/fredyhortua-dev` (framework: Next.js, no environment variables required for this task).

- [ ] **Step 2: Verify the deployed preview**

Open the returned preview URL. Confirm: the page loads, both languages render correctly via the toggle, and there are no console errors.

- [ ] **Step 3: Report the preview URL to the user**

Share the `*.vercel.app` preview URL so Fredy can review the live site before connecting a custom domain.

---

## Self-Review Notes

- **Spec coverage:** every section from `content-brief.md` / the design spec (Hero, Services, Projects, Experience, Why-work-with-me, Tech stack, Contact/Footer) maps to a task (5–12) and is wired in Task 13. Bilingual requirement covered by Tasks 2–3 with parity tests. Deployment covered by Task 14.
- **Placeholder scan:** no TBD/TODO; `contact.github`/`contact.whatsapp` are legitimately `undefined` (optional fields, conditionally rendered), not placeholder text — documented in Task 3 and Task 12.
- **Type consistency:** `Language`, `SiteContent`, `NavLink`, `ServiceItem`, `ProjectItem`, `ExperienceItem`, `StackCategory` are defined once in Task 3 and reused verbatim by name in every consuming task; `useLanguage()`'s return shape (`{ language, toggle, t }`) defined in Task 4 matches every usage in Tasks 5–12.
