import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AuthProvider } from "@/components/auth-provider";

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
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LayoutWrapper>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                  {children}
                </main>
                <Footer />
              </div>
            </LayoutWrapper>
          </ThemeProvider>
          <Toaster />
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}