// app/propuestas/crazy-hour/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Propuesta — Sitio web Crazy Hour Piñatería',
  description: 'Propuesta comercial y cotización para el sitio web de Crazy Hour Piñatería.',
  robots: { index: false, follow: false },
};

const features = {
  clientes: [
    'Catálogo organizado por ocasión (Hora Loca, Cumpleaños, Baby Shower...) con foto grande de entrada por categoría y navegación simple, sin menús anidados',
    'Filtros dentro de cada categoría para refinar la búsqueda',
    'Carrito de compras',
    'Pago en línea seguro con Wompi',
    'Opción de enviar el pedido directo por WhatsApp',
    'Enlaces a tu perfil de TikTok y de Mercado Libre',
  ],
  tuyo: [
    'Panel de administración con usuario propio',
    'Cargar, editar y quitar productos tú mismo, sin depender de nadie más',
    'Gestión de categorías y sus imágenes',
    'Lista de pedidos recibidos, por Wompi y por WhatsApp',
    'Reportes de ventas y productos más vendidos',
  ],
};

const milestones = [
  { pct: '40% · Al iniciar', amount: '$3.600.000', label: 'Arranque del proyecto' },
  { pct: '40% · Avance', amount: '$3.600.000', label: 'Sitio y panel funcionando, listos para pruebas' },
  { pct: '20% · Entrega', amount: '$1.800.000', label: 'Publicación final y catálogo cargado' },
];

const extraCosts = [
  { label: 'Dominio (crazy-hour.com o crazyhour.co)', value: 'Costo real, a confirmar disponibilidad' },
  { label: 'Mejora de fotos del catálogo con IA', value: '~$90–100 por imagen, según cantidad de productos' },
  { label: 'Comisión por transacción en línea (Wompi)', value: '2.5% + $700 + IVA, la descuenta Wompi directamente' },
];

export default function CrazyHourProposal() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]">
        <div className="mx-auto flex max-w-[760px] items-center gap-2.5 px-6 py-3.5">
          <a href="/" className="flex items-center gap-2.5 font-mono-tag text-[12.5px] no-underline">
            <span
              aria-hidden
              className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[var(--color-ok)] shadow-[0_0_0_3px_var(--color-accent-dim)]"
            />
            <span className="text-[var(--color-text)]">fredy-hortua.dev</span>
            <span className="text-[var(--color-text-muted)]">/propuestas/crazy-hour</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-6 pt-14 pb-20">
        <p className="font-mono-tag text-[12.5px] text-[var(--color-accent)]">Propuesta comercial · Sitio web</p>
        <h1 className="font-heading mt-4 max-w-[22ch] text-[clamp(28px,4.4vw,42px)] leading-[1.12] font-semibold tracking-tight text-balance">
          Sitio web para Crazy Hour Piñatería
        </h1>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 font-mono-tag text-[12.5px] normal-case tracking-normal text-[var(--color-text-muted)]">
          <span>
            Preparado para <span className="text-[var(--color-text)]">Crazy Hour Piñatería</span>
          </span>
          <span>
            Preparado por <span className="text-[var(--color-text)]">Fredy Hortúa</span>
          </span>
          <span className="text-[var(--color-text)]">2 de agosto, 2026</span>
        </div>
        <div className="mt-10 h-[3px] w-16 bg-[var(--color-accent)]" />

        <section className="mt-12">
          <h2 className="font-mono-tag text-[12.5px] text-[var(--color-wood)]">Objetivo</h2>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-[var(--color-text)]">
            Hoy el catálogo de Crazy Hour es un PDF pensado solo para mayoristas. La propuesta es construir un sitio
            web propio que le venda tanto a mayoristas como al consumidor final, con un catálogo visual fácil de
            navegar, pago en línea y pedidos por WhatsApp.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-mono-tag border-b border-[var(--color-border)] pb-3 text-[12.5px] text-[var(--color-wood)]">
            Qué incluye
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-[15px] font-semibold text-[var(--color-text)]">Para tus clientes</h3>
              <ul className="mt-3 space-y-2.5">
                {features.clientes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-[var(--color-text)]">
                    <span aria-hidden className="mt-[7px] h-[7px] w-[7px] flex-shrink-0 rotate-45 bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-[15px] font-semibold text-[var(--color-text)]">Para ti</h3>
              <ul className="mt-3 space-y-2.5">
                {features.tuyo.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-[var(--color-text)]">
                    <span aria-hidden className="mt-[7px] h-[7px] w-[7px] flex-shrink-0 rotate-45 bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-mono-tag border-b border-[var(--color-border)] pb-3 text-[12.5px] text-[var(--color-wood)]">
            Fuera de esta etapa
          </h2>
          <div className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 py-5 text-[14px] leading-relaxed text-[var(--color-text-muted)]">
            <span className="font-semibold text-[var(--color-text)]">No incluido en esta propuesta:</span>{' '}
            sincronización automática de inventario con Mercado Libre, contenido de TikTok incrustado en el sitio, y
            precios diferenciados por tipo de cliente (mayorista vs. detal) — todos manejan un único precio público
            por producto.
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-mono-tag border-b border-[var(--color-border)] pb-3 text-[12.5px] text-[var(--color-wood)]">
            Inversión
          </h2>
          <div className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 py-8 sm:px-8">
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-[clamp(32px,5.5vw,46px)] font-semibold tracking-tight tabular-nums text-[var(--color-text)]">
                $9.000.000
              </span>
              <span className="font-mono-tag text-[13px] text-[var(--color-text-muted)]">COP</span>
            </div>
            <p className="mt-2 max-w-[55ch] text-[13.5px] text-[var(--color-text-muted)]">
              Incluye diseño, desarrollo, integración de pago, panel de administración, carga inicial del catálogo y
              puesta en producción.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3 sm:gap-0">
              {milestones.map((m, i) => (
                <div
                  key={m.pct}
                  className={
                    i < milestones.length - 1
                      ? 'border-l-2 border-[var(--color-accent)] pl-4 sm:border-l-0 sm:border-r sm:border-[var(--color-border)] sm:pr-5 sm:pl-0'
                      : 'border-l-2 border-[var(--color-accent)] pl-4 sm:border-l-0 sm:pl-5'
                  }
                >
                  <div className="font-mono-tag text-[11px] text-[var(--color-accent)]">{m.pct}</div>
                  <div className="font-heading mt-1.5 text-[20px] font-semibold tabular-nums text-[var(--color-text)]">
                    {m.amount}
                  </div>
                  <div className="mt-1 text-[13px] leading-snug text-[var(--color-text-muted)]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-mono-tag border-b border-[var(--color-border)] pb-3 text-[12.5px] text-[var(--color-wood)]">
            Costos adicionales
          </h2>
          <div className="mt-4">
            {extraCosts.map((c) => (
              <div
                key={c.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-[var(--color-border)] py-3.5 last:border-b-0"
              >
                <span className="max-w-[38ch] text-[15px] text-[var(--color-text)]">{c.label}</span>
                <span className="font-mono-tag text-right text-[12.5px] normal-case tracking-normal text-[var(--color-text-muted)]">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-mono-tag border-b border-[var(--color-border)] pb-3 text-[12.5px] text-[var(--color-wood)]">
            Tiempo estimado
          </h2>
          <div className="mt-6 flex items-center gap-4 rounded-md bg-[var(--color-accent-dim)] px-6 py-4">
            <span className="font-heading text-[26px] font-semibold tabular-nums whitespace-nowrap text-[var(--color-text)]">
              6–8
            </span>
            <span className="text-[14.5px] text-[var(--color-text)]">
              semanas desde la aprobación de esta propuesta y el primer pago hasta la publicación del sitio.
            </span>
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-border)] pt-6">
          <span className="font-mono-tag text-[11.5px] normal-case tracking-normal text-[var(--color-text-muted)]">
            Propuesta válida por 15 días desde la fecha de este documento.
          </span>
          <span className="font-mono-tag text-[11.5px] normal-case tracking-normal text-[var(--color-text-muted)]">
            fredy.hortua@gmail.com
          </span>
        </footer>
      </main>
    </>
  );
}
