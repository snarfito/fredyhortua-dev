import type { Metadata } from 'next';
import { Zilla_Slab, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const zillaSlab = Zilla_Slab({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});
const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Fredy Hortua — Desarrollo Full-Stack & Automatización',
  description:
    'Construyo productos digitales y automatizo lo que te quita el tiempo. Desarrollador full-stack con más de 15 años de experiencia en sistemas de producción SaaS y fintech.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${zillaSlab.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
