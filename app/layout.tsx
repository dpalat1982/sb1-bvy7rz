import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { ChatProvider } from '@/components/chat/chat-provider';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap' // Add font-display swap for better performance
});

export const metadata: Metadata = {
  title: 'Tisk na Majice | Profesionalni Tisk na Majice po Meri',
  description: 'Profesionalni tisk na majice po vaši meri. Vrhunska kakovost tiska, konkurenčne cene in hitra izdelava. Sitotisk, DTF tisk in digitalni tisk za vse količine. ✓ Brezplačna dostava ✓ Garancija kakovosti ✓ Hitra izdelava',
  keywords: ['tisk na majice', 'tiskanje majic', 'potisk majic', 'sitotisk', 'dtf tisk', 'digitalni tisk', 'tisk na tekstil', 'tisk po meri'],
  openGraph: {
    title: 'Tisk na Majice | Profesionalni Tisk na Majice po Meri',
    description: 'Profesionalni tisk na majice po vaši meri. Vrhunska kakovost tiska, konkurenčne cene in hitra izdelava. Sitotisk, DTF tisk in digitalni tisk za vse količine.',
    type: 'website',
    locale: 'sl_SI',
    url: 'https://tisknamajice.com',
  },
  alternates: {
    canonical: 'https://tisknamajice.com'
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#ffffff',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://tisknamajice.com" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TiskNaMajice.com",
              "url": "https://tisknamajice.com",
              "logo": "https://tisknamajice.com/logo.png",
              "description": "Profesionalni tisk na majice po vaši meri. Vrhunska kakovost tiska, konkurenčne cene in hitra izdelava.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pečarovci 82",
                "addressLocality": "Mačkovci",
                "postalCode": "9202",
                "addressCountry": "SI"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+386-31-474-107",
                "contactType": "customer service",
                "email": "info@tisknamajice.com"
              }
            })
          }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ChatProvider>
            <Header />
            <main className="flex-grow w-full">{children}</main>
            <Footer />
            <Toaster />
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}