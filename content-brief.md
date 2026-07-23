# Brief para construir mi sitio web de servicios

Actúa como diseñador y desarrollador web senior. Quiero que construyas un sitio
web de una página (landing/portafolio) para ofrecer mis servicios como
desarrollador full-stack y especialista en automatización. El sitio debe ser
**bilingüe (español/inglés)**, con un selector de idioma, moderno, responsive,
rápido y con un tono profesional pero cercano (nada corporativo-genérico).
Usa la información de abajo como única fuente de verdad: no inventes clientes,
cifras ni tecnologías que no aparezcan aquí.

---

## 1. Perfil profesional

**Nombre:** Fredy Hortua
**Rol:** Desarrollador full-stack y especialista en automatización de procesos
**Formación:** Ingeniería Electrónica, Universidad Distrital Francisco José de
Caldas (Bogotá)
**Idiomas:** Español (nativo), inglés (nivel profesional)
**Contacto:** fredy.hortua@gmail.com · linkedin.com/in/fredy-hortua-4267571a
(agrega también campos para GitHub y WhatsApp — los completaré yo antes de
publicar)

Construyo productos digitales completos —de la base de datos a la interfaz— y
automatizo procesos manuales que le quitan tiempo a equipos pequeños y
organizaciones. Trabajo tanto con startups y negocios que necesitan una
plataforma web/app desde cero, como con organizaciones (iglesias, ONGs,
pequeños negocios) que necesitan que sus herramientas (formularios, CRMs,
Google Workspace, WhatsApp) trabajen juntas sin intervención manual.

Lo que diferencia mi perfil: antes de construir software propio, pasé más de
15 años operando y liderando soporte técnico e infraestructura para
plataformas SaaS y fintech en producción (ver sección 4). Eso significa que
no solo sé programar — entiendo cómo se cae un sistema en producción, cómo
se depura bajo presión, y cómo se automatiza para que no vuelva a pasar.
Construyo con esa disciplina desde el primer commit.

**Positioning / tagline (usa esto como referencia, tradúcelo de forma natural,
no literal):**
- ES: "Construyo productos digitales y automatizo lo que te quita el tiempo
  — con más de 15 años de experiencia manteniendo sistemas en producción."
- EN: "I build digital products and automate the busywork — backed by 15+
  years keeping production systems running."

---

## 2. Servicios que ofrezco

### A. Desarrollo de productos web full-stack
Aplicaciones completas a medida: marketplaces, plataformas de pedidos,
paneles de administración, sitios corporativos. Frontend en React/Next.js,
backend en FastAPI/Node, bases de datos relacionales, autenticación,
pagos e integraciones con servicios externos.

**Incluye:** diseño de arquitectura, modelado de datos, APIs REST,
autenticación y roles de usuario, integración de pasarelas de pago,
despliegue (Vercel/Railway/Docker).

### B. Automatización e integraciones
Conecto sistemas que no se hablan entre sí y elimino tareas repetitivas:
formularios inteligentes, bots de recordatorios por WhatsApp, sincronización
con Google Workspace (Calendar, Sheets, Drive), generación automática de
reportes y visualizaciones, deduplicación de datos.

**Incluye:** integraciones con APIs de terceros (Planning Center, Google,
WhatsApp Business Cloud API), bots conversacionales, jobs programados
(cron/schedulers), generación de reportes y dashboards.

---

## 3. Proyectos destacados (portafolio)

Usa estos proyectos como evidencia real de mi trabajo. Para cada uno, genera
una tarjeta/sección con: nombre, una línea de descripción, stack técnico y
2-3 puntos de "qué resuelve". No exageres el alcance: son proyectos reales,
algunos en producción y otros en desarrollo activo.

**1. Especially — Marketplace de productos personalizados (Colombia)**
Plataforma e-commerce full-stack para un marketplace de productos
personalizados y artesanales colombianos, con roles diferenciados para
compradores, vendedores/productores y administradores.
- Stack: Next.js 16 + React 19 + Tailwind (frontend), FastAPI + PostgreSQL +
  SQLAlchemy + Alembic (backend), autenticación JWT, almacenamiento de
  imágenes en Cloudflare R2, pasarela de pagos Wompi, generación de PDFs
  (fichas técnicas) con ReportLab.
- Resuelve: catálogo y personalización de productos, flujo de pedidos con
  estados, panel de administración, aplicación y aprobación de productores,
  pagos en línea integrados.

**2. Tixy Glamour — Sistema de pedidos B2B**
Sistema de gestión de pedidos para un negocio de moda, con vistas separadas
para vendedores, gerentes y administradores.
- Stack: FastAPI + MySQL (backend), React + Vite + TanStack Query + Zustand
  (frontend), flujo de estados de pedido (borrador → enviado → confirmado).
- Resuelve: captura de pedidos por vendedores en campo, seguimiento de
  estado en tiempo real, panel gerencial, despliegue en producción activo.

**3. VOO Ingeniería — Sitio web corporativo**
Sitio institucional para una empresa de ingeniería topográfica (topografía
de precisión, cartografía, drones, LiDAR, GNSS, modelado 3D y BIM).
- Stack: Next.js + Framer Motion + Tailwind, animaciones y secciones con
  scroll reveal, formulario de contacto.
- Resuelve: presencia digital profesional, comunicación de servicios técnicos
  especializados, generación de contactos comerciales.

**4. Soul's Colors by Bibi — Sitio para marca de arte cristiano**
Sitio para una marca de Biblias personalizadas pintadas a mano, lettering
bíblico y talleres creativos, con envíos a toda Colombia desde Medellín.
- Stack: HTML/CSS/JS, Vercel Blob para almacenamiento de imágenes,
  desplegado en Vercel.
- Resuelve: catálogo visual de productos, presencia de marca, canal de
  pedidos para un negocio creativo pequeño.

**5. Gestor de Rifas — Herramienta de gestión de sorteos**
Aplicación web para administrar rifas/sorteos de números (grilla de
tickets, participantes, panel de administración).
- Stack: Next.js + Upstash Redis.
- Resuelve: seguimiento de números vendidos/disponibles en tiempo real,
  gestión de participantes sin hojas de cálculo manuales.

**6. Suite de automatización para Hay Un Nuevo Amanecer (iglesia)**
Conjunto de herramientas construidas para digitalizar y automatizar la
operación de una iglesia con cientos de voluntarios, integradas con
Planning Center Online (PCO) y Google Workspace:
- **Bot de recordatorios por WhatsApp:** detecta eventos próximos en Google
  Calendar, contacta automáticamente a líderes de ministerio por WhatsApp
  Business Cloud API para recolectar requerimientos, y notifica al equipo
  con un resumen. Stack: FastAPI + Python en Railway, SQLite, APScheduler,
  Google Calendar/Sheets API, Resend (email).
- **Formulario inteligente anti-duplicados:** formulario web que verifica
  contra la base de Planning Center antes de crear un perfil nuevo (por
  correo, luego por nombre), evitando perfiles duplicados. Stack: Node.js +
  Express, desplegado en Railway.
- **Generador de organigramas:** construye organigramas ministeriales
  interactivos con D3.js a partir de los datos de Planning Center.
- **Analizador de carga ministerial:** calcula y visualiza una puntuación de
  "carga ministerial" por persona a partir de sus roles, para prevenir
  sobrecarga de voluntarios (gráfico + reporte CSV).
- **Sincronización de permisos en Google Drive:** automatiza la asignación
  de accesos a carpetas de Drive según el rol ministerial de cada persona.
- **Detector de perfiles duplicados:** script que audita la base de datos de
  Planning Center y reporta duplicados por nombre/correo.
- Resuelve: cientos de horas ahorradas en trabajo administrativo manual,
  visibilidad sobre la carga de los voluntarios, comunicación automatizada
  con líderes.

---

## 4. Trayectoria profesional (respaldo de experiencia)

Usa esto para una sección corta de "Experiencia" o "Background" — un
timeline compacto, NO un currículum completo. El objetivo es transmitir
solidez y años de experiencia real en sistemas de producción, no listar
cada responsabilidad. 2-3 líneas por etapa es suficiente; agrupa los roles
más antiguos si hace falta para no saturar.

**Resumen (para el copy corto):** +15 años de experiencia en ingeniería y
soporte técnico para plataformas SaaS y fintech, con roles que van desde
liderazgo de IT hasta escalación técnica senior en empresas como NICE
(ex-LiveVox) y Blossom.

**Timeline (de más reciente a más antiguo):**

- **2024 – Presente · Blossom (fintech SaaS para credit unions de EE.UU.)**
  Implementation Engineer / Product Support Engineer Tier 3. Migraciones de
  datos end-to-end, integración y troubleshooting de APIs REST entre
  sistemas bancarios y terceros, administración de infraestructura AWS
  (EC2, S3, CloudWatch), automatización de reportes críticos.

- **2021 – 2024 · NICE (anteriormente LiveVox)**
  Technical Support Manager. Lideró un equipo global de soporte (Colombia,
  India, EE.UU.), diseñó automatizaciones con Python y Power Automate que
  redujeron el tiempo de primera respuesta en 30%, y definió marcos de
  SLA/KPI para toda el área de soporte.

- **2016 – 2021 · ESW Capital / Enghouse Presence**
  Soporte técnico Nivel 2/3 y control de calidad para plataformas SaaS
  empresariales: bases de datos, integraciones, infraestructura Linux/AWS,
  análisis de causa raíz en incidentes de alta severidad.

- **2007 – 2016 · E-CallYou SAS / Artico Soluciones Informáticas**
  IT Manager y liderazgo de desarrollo de software para plataformas de call
  center (PHP, MySQL, Linux, Asterisk PBX). Construyó, entre otros
  proyectos, un sistema de agendamiento médico usado en campañas de salud
  a nivel nacional.

No incluyas menciones a por qué terminó alguna posición (reestructuraciones,
adquisiciones, etc.) — no aporta al sitio y no es relevante para un cliente.

---

## 5. Diferenciadores (para la sección "por qué trabajar conmigo")

- Full-stack real: puedo llevar un proyecto desde la base de datos hasta la
  interfaz, sin depender de otros perfiles.
- Más de 15 años de experiencia previa manteniendo sistemas de producción
  SaaS/fintech en alta disponibilidad — construyo pensando en estabilidad,
  no solo en que "funcione en mi máquina".
- No solo construyo software nuevo — también sé meterme en procesos
  existentes (formularios, hojas de cálculo, WhatsApp) y automatizarlos.
- Experiencia con pagos en línea (Wompi), APIs de mensajería (WhatsApp
  Business Cloud API) e integraciones con Google Workspace.
- Trabajo tanto para negocios/startups como para organizaciones sin fines
  de lucro — entiendo presupuestos ajustados y prioridades reales.

---

## 6. Estructura sugerida del sitio

1. **Hero** — tagline + CTA de contacto
2. **Servicios** — las dos líneas (desarrollo full-stack / automatización)
3. **Proyectos destacados** — grid de tarjetas con los 6 proyectos
4. **Experiencia** — timeline compacto de la trayectoria profesional (sección 4)
5. **Por qué trabajar conmigo** — diferenciadores
6. **Stack técnico** — logos/lista: Next.js, React, FastAPI, Node.js,
   PostgreSQL, MySQL, AWS, Tailwind, Google APIs, WhatsApp Business API, etc.
7. **Contacto** — formulario simple + email/WhatsApp/GitHub/LinkedIn

## 7. Tono y estilo visual

Profesional, directo, sin relleno corporativo. Prioriza claridad sobre
jerga técnica en los textos orientados a clientes de negocio, pero incluye
el detalle técnico completo en las tarjetas de proyecto (los clientes
técnicos también deben poder evaluar el nivel). Diseño limpio, moderno,
oscuro o claro (a tu criterio), con buena legibilidad y rendimiento móvil.
