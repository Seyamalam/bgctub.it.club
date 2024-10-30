import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { LayoutWrapper } from '@/components/layout-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BGCTUB IT Club',
  description: 'Official website of BGCTUB IT Club - Fostering innovation and technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background relative overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {children}
              </main>
              <Footer />
            </div>
          </LayoutWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}