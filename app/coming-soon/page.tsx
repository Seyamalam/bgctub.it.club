import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BoxReveal } from '@/components/ui/box-reveal';

export default function ComingSoonPage() {
  return (
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
  );
} 