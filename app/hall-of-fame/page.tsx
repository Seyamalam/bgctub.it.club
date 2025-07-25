import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';

const achievements = [
  {
    title: "Microsoft Learn Student Ambassador",
    image: "/images/mlsa.png",
    description: "Empowering students with Microsoft technologies and fostering technical communities.",
    members: ["John Doe", "Jane Smith"],
    badges: ["Microsoft", "Leadership", "Community"]
  },
  {
    title: "BitRooT",
    image: "/images/bitroot.png",
    description: "Exploring the fundamentals of computer science and programming.",
    members: ["Alex Johnson", "Sarah Williams"],
    badges: ["Programming", "Education", "Innovation"]
  },
  {
    title: "BitSec",
    image: "/images/bitsec.png",
    description: "Cybersecurity research and learning initiative.",
    members: ["Michael Brown", "Emily Davis"],
    badges: ["Security", "Research", "CTF"]
  },
  {
    title: "FlagHunt x Bangladesh Army",
    image: "/images/flaghunt.png",
    description: "Collaborative cybersecurity training program with Bangladesh Army.",
    members: ["David Wilson", "Lisa Anderson"],
    badges: ["Military", "Training", "Security"]
  },
  {
    title: "BASIS Student's Forum",
    image: "/images/basis.png",
    description: "Industry connections and practical experience in IT sector.",
    members: ["Robert Taylor", "Emma Martinez"],
    badges: ["Industry", "Networking", "Career"]
  },
  {
    title: "NASA Space Apps",
    image: "/images/nasa.png",
    description: "International space and science hackathon participation.",
    members: ["James Lee", "Sophia Garcia"],
    badges: ["Space", "Innovation", "Global"]
  }
]

export default function HallOfFamePage() {
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="container py-12">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-4 text-4xl font-bold animate-fade-down">
                Hall of Fame
              </h1>
              <p className="mb-8 text-lg text-muted-foreground animate-fade-up">
                Celebrating our achievements and milestones
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="group hover-card-effect glass-effect animate-fade-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="bg-primary/10">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Notable Members:</h4>
                      {achievement.members.map((member) => (
                        <p key={member} className="text-sm text-muted-foreground">
                          • {member}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
} 