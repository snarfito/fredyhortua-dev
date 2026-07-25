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
  howIWork: {
    heading: string;
    intro: string;
    tools: string[];
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
    linkedinHandle: string;
    github?: string;
    githubHandle?: string;
    whatsapp?: string;
    whatsappDisplay?: string;
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
    howIWork: {
      heading: 'Cómo trabajo',
      intro:
        'Construyo con herramientas de IA de última generación —Claude Code, Codex y agentes especializados de diseño UX/UI— como multiplicador de velocidad, dentro de flujos de trabajo estructurados que fuerzan revisión y pruebas en cada paso. Yo dirijo la arquitectura, reviso cada línea y respondo por el resultado: la IA acelera la ejecución, la experiencia de producción la valida.',
      tools: ['Claude Code', 'Codex', 'Agentes de diseño UX/UI', 'Flujos de trabajo estructurados (skills)'],
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
      linkedinHandle: 'fredy-hortua',
      github: 'https://github.com/snarfito',
      githubHandle: 'snarfito',
      whatsapp: 'https://wa.me/573192618025',
      whatsappDisplay: '+57 319 261 8025',
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
    howIWork: {
      heading: 'How I work',
      intro:
        "I build with state-of-the-art AI tooling —Claude Code, Codex, and specialized UX/UI design agents— as a speed multiplier, inside structured workflows that enforce review and testing at every step. I own the architecture, review every line, and stand behind the result: AI accelerates execution, production experience validates it.",
      tools: ['Claude Code', 'Codex', 'UX/UI design agents', 'Structured workflows (skills)'],
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
      linkedinHandle: 'fredy-hortua',
      github: 'https://github.com/snarfito',
      githubHandle: 'snarfito',
      whatsapp: 'https://wa.me/573192618025',
      whatsappDisplay: '+57 319 261 8025',
    },
    footer: {
      text: '© 2026 Fredy Hortua. Built with Next.js.',
    },
  },
};
