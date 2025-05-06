import { Card } from "@/components/ui/card"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';

const members = [
  "Tahmidur Rahman",
  "Md. Rifat Hossain",
  "Md. Rifat Hossain",
  "Md. Rifat Hossain",
  "Md. Rifat Hossain",
  "Md. Rifat Hossain",
  
  // Add more member names here
]

export default function MembersPage() {
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="container py-12 min-h-screen">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                General Members
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Our valued members who make our community vibrant and dynamic
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {members.map((name, index) => (
                    <div 
                      key={index} 
                      className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors text-center"
                    >
                      <h3 className="font-medium text-primary">{name}</h3>
                    </div>
                  ))}
                </div>
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