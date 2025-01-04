import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | BGCTUB IT Club",
  description: "Upcoming and past events of BGCTUB IT Club",
}

const events = [
  {
    id: "winter-tech-fest",
    title: "Winter Tech Fest 2024",
    description: "Join us for an exciting winter of technology, innovation, and learning. Details coming soon!",
    image: "/images/events/winter-tech-fest.jpg",
    date: "Coming Soon",
    time: "To be announced",
    location: "BGCTUB Campus",
    href: "/events/winter-tech-fest",
    isUpcoming: true,
  },
  {
    id: "installation-ceremony",
    title: "Installation Ceremony",
    description: "The official installation ceremony of BGCTUB IT Club was successfully held with great enthusiasm.",
    image: "/images/Installnation_banner.jpg",
    date: "19th December, 2024",
    time: "01:30 PM",
    location: "IQAC Conference Room",
    href: "/events/installation",
    isUpcoming: false,
  },
]

export default function EventsPage() {
  const upcomingEvents = events.filter(event => event.isUpcoming)
  const pastEvents = events.filter(event => !event.isUpcoming)

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
          Events
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
          Join us in our upcoming events and activities
        </p>
      </div>

      {upcomingEvents.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {upcomingEvents.map((event) => (
              <Link key={event.id} href={event.href}>
                <Card className="group relative overflow-hidden border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                        Upcoming
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">{event.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}

      {pastEvents.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Past Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <Link key={event.id} href={event.href}>
                <Card className="group relative overflow-hidden border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale"
                    />
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">{event.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
} 