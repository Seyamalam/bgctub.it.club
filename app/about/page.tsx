import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MicrosoftIcon } from "@/components/icons/microsoft"
import { BasisIcon } from "@/components/icons/basis"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="container py-12">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-4 text-4xl font-bold">About BGCTUB IT Club</h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Creating an innovative platform at BGC Trust University Bangladesh&apos;s IT Club
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground">
                    The BGCTUB IT Club aims to create an innovative platform at BGC Trust
                    University Bangladesh. We are dedicated to encouraging collaboration
                    in learning and engagement in Information Technology.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center gap-2">
                      <MicrosoftIcon className="h-8 w-8" />
                      <h3 className="text-xl font-semibold">
                        Microsoft Learn Student Ambassadors
                      </h3>
                    </div>
                    <Badge className="mb-2">Bgctub Chapter</Badge>
                    <p className="text-sm text-muted-foreground">
                      A global initiative empowering students passionate about technology
                      to become leaders through exclusive resources, mentorship, and
                      training on Microsoft technologies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center gap-2">
                      <BasisIcon className="h-8 w-8" />
                      <h3 className="text-xl font-semibold">BASIS Student's Forum</h3>
                    </div>
                    <Badge className="mb-2">BGCTUB Chapter</Badge>
                    <p className="text-sm text-muted-foreground">
                      An initiative by the Bangladesh Association of Software and
                      Information Services to nurture future tech leaders through
                      industry connections and practical experience.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="mb-4 text-2xl font-bold">Focus Areas</h2>
                  <div className="grid gap-2 md:grid-cols-2">
                    {[
                      "Cybersecurity",
                      "Programming",
                      "Web Development",
                      "Graphic Design",
                      "Computer Networking",
                      "Cloud Computing",
                      "Linux fundamentals",
                      "And many more..."
                    ].map((area) => (
                      <div
                        key={area}
                        className="rounded-lg border p-3 text-sm hover:bg-muted"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}