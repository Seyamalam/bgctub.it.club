import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Metadata } from "next"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';

export const metadata: Metadata = {
  title: "Events | BGCTUB IT Club",
  description: "All events organized by BGCTUB IT Club",
}

const events = [
  {
    id: "winter-tech-fest",
    title: "IT Fest 2025",
    description: "Full event schedule for all competitions and activities at BGCTUB Campus. September 3-8, 2025.",
    image: "/logo/TECH_FEST.jpg",
    date: "September 3-8, 2025",
    time: "Multiple Sessions",
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
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="container py-8 md:py-12">
            <div className="mx-auto max-w-4xl text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                Events
              </h1>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
                Explore all events organized by BGCTUB IT Club
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">All Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Link key={event.id} href={event.href}>
                  <Card className="group relative overflow-hidden border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
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
          </div>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}