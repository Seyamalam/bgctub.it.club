import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BoxReveal } from '@/components/ui/box-reveal';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { Providers } from '@/components/providers';

export default function ComingSoonPage() {
  return (
    <Providers>
      <LayoutWrapper>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 animate-fade-in">
              <BoxReveal width="100%" boxColor="#5046e6">
                <Card className="max-w-lg w-full mx-auto glass-effect shadow-xl">
                  <CardHeader className="flex flex-col items-center gap-2">
                    <Badge className="mb-2" variant="secondary">Upcoming Event</Badge>
                    <CardTitle className="text-4xl font-extrabold text-center bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                      Coming Soon
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-6">
                    <p className="text-lg text-muted-foreground text-center max-w-xs">
                      Stay tuned! We have an exciting event on the horizon. Check back soon for more details.
                    </p>
                    <Link href="/">
                      <Button size="lg" variant="default">
                        Back to Home
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </BoxReveal>
            </div>
          </main>
          <Footer />
        </div>
      </LayoutWrapper>
      <Toaster />
    </Providers>
  );
} 