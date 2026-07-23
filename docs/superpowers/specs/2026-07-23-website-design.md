# Sitio web de servicios — Fredy Hortua

**Fecha:** 2026-07-23

## Objetivo

Landing page personal para ofrecer servicios como desarrollador full-stack
y especialista en automatización, dirigida tanto a startups/negocios
digitales como a organizaciones (iglesias, ONGs, pequeños negocios).

## Fuente de contenido

Todo el copy (bio, servicios, proyectos, experiencia, diferenciadores) sale
de `content-brief.md` en la raíz del proyecto (copia del brief validado con
el usuario). No se inventa contenido fuera de ese documento.

## Arquitectura

- **Framework:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- **Página única** con navegación por anclas y scroll suave (no hay rutas
  adicionales; no hay backend ni base de datos).
- **Bilingüe (ES/EN):** selector de idioma en el cliente, respaldado por un
  diccionario de textos en `lib/content.ts` (sin librería de i18n — no se
  justifica para una sola página).
- **Contacto:** links directos (email, LinkedIn, WhatsApp, GitHub), no
  formulario con backend.

## Secciones (orden)

1. Hero — tagline + CTA de contacto
2. Servicios — desarrollo full-stack / automatización e integraciones
3. Proyectos destacados — grid de tarjetas (6 proyectos del brief)
4. Experiencia — timeline compacto (4 etapas del brief)
5. Por qué trabajar conmigo — diferenciadores
6. Stack técnico — lista/logos de tecnologías
7. Contacto — links + footer

## Estilo visual

Claro y minimalista con acentos técnicos: fondo claro, un solo color de
acento, tipografía limpia (sans-serif), etiquetas monospace para stacks
técnicos en las tarjetas de proyecto, generoso espacio en blanco. Responsive
mobile-first.

## Despliegue

Vercel, subdominio gratuito inicialmente (`*.vercel.app`); dominio propio se
conecta más adelante cuando el usuario lo adquiera.

## Fuera de alcance (por ahora)

- Formulario de contacto con backend/envío de emails.
- CMS o edición de contenido sin tocar código.
- Blog o sección de publicaciones.
- Analítica/tracking.
