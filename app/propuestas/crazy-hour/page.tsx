// app/propuestas/crazy-hour/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { Baloo_2, Nunito_Sans } from 'next/font/google';

const display = Baloo_2({
  variable: '--ch-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});
const body = Nunito_Sans({
  variable: '--ch-body',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

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
    'Optimizado para aparecer en Google (SEO): metadatos, mapa del sitio y datos de producto listos para buscadores',
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

const categoryPreview = [
  { name: 'Hora Loca', from: '#E8382F', to: '#F5A623' },
  { name: 'Cumpleaños', from: '#F5A623', to: '#F7D117' },
  { name: 'Baby Shower', from: '#1FA8E0', to: '#7EDCF7' },
  { name: 'Halloween', from: '#F5A623', to: '#3A2166' },
];

export default function CrazyHourProposal() {
  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-[#120e1f] text-[#f5f1ff]`}
      style={{ fontFamily: 'var(--ch-body), sans-serif' }}
    >
      <main className="mx-auto max-w-[820px] px-6 pt-16 pb-24">
        <div className="flex flex-col items-center text-center">
          <Image src="/crazy-hour/logo.png" alt="Crazy Hour" width={434} height={308} className="h-auto w-[220px] sm:w-[260px]" priority />
          <p className="mt-2 text-[12.5px] font-bold tracking-[0.16em] text-[#F5A623] uppercase">
            Propuesta comercial · Sitio web
          </p>
          <h1
            style={{ fontFamily: 'var(--ch-display), sans-serif' }}
            className="mt-3 max-w-[18ch] text-[clamp(30px,5vw,46px)] leading-[1.1] font-extrabold text-balance"
          >
            Tu piñatería, lista para vender en línea
          </h1>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1 text-[13px] text-[#A69BC4]">
            <span>
              Preparado para <span className="font-bold text-[#f5f1ff]">Crazy Hour Piñatería</span>
            </span>
            <span>
              Preparado por <span className="font-bold text-[#f5f1ff]">Fredy Hortúa</span>
            </span>
            <span className="font-bold text-[#f5f1ff]">2 de agosto, 2026</span>
          </div>
        </div>

        <section className="mt-14">
          <p className="mx-auto max-w-[58ch] text-center text-lg leading-relaxed text-[#f5f1ff]">
            Hoy el catálogo de Crazy Hour es un PDF pensado solo para mayoristas. La propuesta es construir un sitio
            web propio que le venda tanto a mayoristas como al consumidor final, con un catálogo visual fácil de
            navegar, pago en línea y pedidos por WhatsApp.
          </p>
        </section>

        <section className="mt-16">
          <h2
            style={{ fontFamily: 'var(--ch-display), sans-serif' }}
            className="text-center text-[13px] font-bold tracking-[0.14em] text-[#7EDCF7] uppercase"
          >
            Así se vería tu catálogo
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {categoryPreview.map((c) => (
              <div
                key={c.name}
                className="relative flex h-28 items-end overflow-hidden rounded-2xl p-4 sm:h-36"
                style={{
                  backgroundImage: `radial-gradient(circle at 14px 14px, rgba(255,255,255,0.16) 2px, transparent 2.5px), linear-gradient(135deg, ${c.from}, ${c.to})`,
                  backgroundSize: '28px 28px, cover',
                }}
              >
                <span
                  style={{ fontFamily: 'var(--ch-display), sans-serif' }}
                  className="text-[20px] leading-tight font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] sm:text-[24px]"
                >
                  {c.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[13px] text-[#A69BC4]">
            Cada categoría muestra sus productos de una vez, con imágenes grandes — sin submenús para llegar a lo que
            buscas.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="border-b border-[#332a4d] pb-3 text-[13px] font-bold tracking-[0.14em] text-[#7EDCF7] uppercase">
            Qué incluye
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 style={{ fontFamily: 'var(--ch-display), sans-serif' }} className="text-[16px] font-bold text-[#f5f1ff]">
                Para tus clientes
              </h3>
              <ul className="mt-3 space-y-2.5">
                {features.clientes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-[#f5f1ff]">
                    <span aria-hidden className="mt-[7px] h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#E8382F]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--ch-display), sans-serif' }} className="text-[16px] font-bold text-[#f5f1ff]">
                Para ti
              </h3>
              <ul className="mt-3 space-y-2.5">
                {features.tuyo.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-[#f5f1ff]">
                    <span aria-hidden className="mt-[7px] h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#1FA8E0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="border-b border-[#332a4d] pb-3 text-[13px] font-bold tracking-[0.14em] text-[#7EDCF7] uppercase">
            Fuera de esta etapa
          </h2>
          <div className="mt-6 rounded-2xl border border-[#332a4d] bg-[#1c1730] px-6 py-5 text-[14px] leading-relaxed text-[#A69BC4]">
            <span className="font-bold text-[#f5f1ff]">No incluido en esta propuesta:</span> sincronización automática
            de inventario con Mercado Libre, contenido de TikTok incrustado en el sitio, y precios diferenciados por
            tipo de cliente (mayorista vs. detal) — todos manejan un único precio público por producto.
          </div>
        </section>

        <section className="mt-16">
          <h2 className="border-b border-[#332a4d] pb-3 text-[13px] font-bold tracking-[0.14em] text-[#7EDCF7] uppercase">
            Inversión
          </h2>
          <div className="mt-6 rounded-2xl border border-[#332a4d] bg-[#1c1730] px-6 py-8 sm:px-8">
            <div className="flex items-baseline gap-3">
              <span
                style={{ fontFamily: 'var(--ch-display), sans-serif' }}
                className="text-[clamp(34px,6vw,50px)] font-extrabold tracking-tight tabular-nums text-[#f5f1ff]"
              >
                $9.000.000
              </span>
              <span className="text-[13px] font-bold text-[#A69BC4]">COP</span>
            </div>
            <p className="mt-2 max-w-[55ch] text-[13.5px] text-[#A69BC4]">
              Incluye diseño, desarrollo, integración de pago, panel de administración, carga inicial del catálogo y
              puesta en producción.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#332a4d] pt-6 sm:grid-cols-3 sm:gap-0">
              {milestones.map((m, i) => (
                <div
                  key={m.pct}
                  className={
                    i < milestones.length - 1
                      ? 'border-l-2 border-[#E8382F] pl-4 sm:border-l-0 sm:border-r sm:border-[#332a4d] sm:pr-5 sm:pl-0'
                      : 'border-l-2 border-[#E8382F] pl-4 sm:border-l-0 sm:pl-5'
                  }
                >
                  <div className="text-[11px] font-bold tracking-wide text-[#F5A623] uppercase">{m.pct}</div>
                  <div
                    style={{ fontFamily: 'var(--ch-display), sans-serif' }}
                    className="mt-1.5 text-[21px] font-bold tabular-nums text-[#f5f1ff]"
                  >
                    {m.amount}
                  </div>
                  <div className="mt-1 text-[13px] leading-snug text-[#A69BC4]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="border-b border-[#332a4d] pb-3 text-[13px] font-bold tracking-[0.14em] text-[#7EDCF7] uppercase">
            Costos adicionales
          </h2>
          <div className="mt-4">
            {extraCosts.map((c) => (
              <div
                key={c.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-[#332a4d] py-3.5 last:border-b-0"
              >
                <span className="max-w-[38ch] text-[15px] text-[#f5f1ff]">{c.label}</span>
                <span className="text-right text-[12.5px] text-[#A69BC4]">{c.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="border-b border-[#332a4d] pb-3 text-[13px] font-bold tracking-[0.14em] text-[#7EDCF7] uppercase">
            Tiempo estimado
          </h2>
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#2d2245] px-6 py-4">
            <span
              style={{ fontFamily: 'var(--ch-display), sans-serif' }}
              className="text-[28px] font-extrabold tabular-nums whitespace-nowrap text-[#f5f1ff]"
            >
              6–8
            </span>
            <span className="text-[14.5px] text-[#f5f1ff]">
              semanas desde la aprobación de esta propuesta y el primer pago hasta la publicación del sitio.
            </span>
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-2 border-t border-[#332a4d] pt-6">
          <span className="text-[11.5px] text-[#A69BC4]">Propuesta válida por 15 días desde la fecha de este documento.</span>
          <span className="text-[11.5px] text-[#A69BC4]">fredy.hortua@gmail.com</span>
        </footer>
      </main>
    </div>
  );
}
