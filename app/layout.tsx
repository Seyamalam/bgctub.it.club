import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BGCTUB IT Club',
  description: 'Official website of BGCTUB IT Club - Fostering innovation and technology',
  keywords: ['IT Club', 'BGCTUB', 'Technology', 'Programming', 'Innovation'],
  authors: [{ name: 'BGCTUB IT Club' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://bgctub-it-club.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BGCTUB IT Club',
    description: 'Official website of BGCTUB IT Club - Fostering innovation and technology',
    siteName: 'BGCTUB IT Club',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BGCTUB IT Club'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGCTUB IT Club',
    description: 'Official website of BGCTUB IT Club - Fostering innovation and technology',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background relative overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}