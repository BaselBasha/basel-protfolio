import type { Metadata } from 'next';
import { Syne, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch(e) {}
})()
`;

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Basel Basha — Full-Stack Engineer',
  description: 'Full-Stack Engineer with 4+ years building scalable, high-performance applications. Open to full-time and freelance opportunities.',
  keywords: ['Full-Stack Engineer', 'Next.js', 'React', 'Node.js', 'AWS', 'TypeScript', 'Basel AlBasha'],
  authors: [{ name: 'Basel AlBasha' }],
  creator: 'Basel AlBasha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baselalb.vercel.app',
    title: 'Basel AlBasha — Full-Stack Engineer',
    description: 'Full-Stack Engineer with 4+ years building scalable systems.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Basel AlBasha Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basel AlBasha — Full-Stack Engineer',
    description: 'Full-Stack Engineer with 4+ years building scalable systems.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LenisProvider>
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
