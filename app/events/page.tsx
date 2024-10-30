import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Lightbulb, CalendarDays } from "lucide-react"
import { MatrixBackground } from "@/components/matrix-background"

const events = [
  {
    title: "Cyber-security Contest | CTF",
    description: "Test your cybersecurity skills in our Capture The Flag competition. Solve real-world security challenges and win exciting prizes.",
    date: "Coming Soon",
    icon: Shield,
    tags: ["Security", "Hacking", "CTF"]
  },
  {
    title: "Programming Contest",
    description: "Showcase your coding skills in our programming competition. Solve algorithmic problems and compete with fellow programmers.",
    date: "Coming Soon",
    icon: Code,
    tags: ["Coding", "Algorithms", "Competition"]
  },
  {
    title: "Tech Innovation & Idea Contest",
    description: "Present your innovative tech ideas and solutions. Get feedback from industry experts and win support for your project.",
    date: "Coming Soon",
    icon: Lightbulb,
    tags: ["Innovation", "Startup", "Technology"]
  }
]

export default function EventsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold animate-fade-down">
              Upcoming Events
            </h1>
            <p className="mb-8 text-lg text-muted-foreground animate-fade-up">
              Join our exciting events and showcase your skills
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <Card 
                key={index} 
                className="group hover-card-effect glass-effect animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
                    <event.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <CalendarDays className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 