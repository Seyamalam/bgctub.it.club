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
    id: "installation-ceremony",
    title: "Installation Ceremony",
    description: "Join us for the official installation ceremony of BGCTUB IT Club",
    image: "/images/Installnation_banner.jpg",
    date: "19th December, 2024",
    time: "01:30 PM",
    location: "IQAC Conference Room",
    href: "/events/installation",
    isUpcoming: true,
  },
]

export default function EventsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Events</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Join us in our upcoming events and activities
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Link key={event.id} href={event.href}>
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-video">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {event.isUpcoming && (
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      Upcoming
                    </span>
                  </div>
                )}
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{event.title}</h3>
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
    </div>
  )
} 