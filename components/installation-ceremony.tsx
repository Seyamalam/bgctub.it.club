"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

export function InstallationCeremony() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="flex flex-col space-y-6">
        <div className="max-w-3xl mx-auto w-full rounded-lg overflow-hidden">
          <Image
            src="/images/Installnation_banner.jpg"
            alt="Installation Ceremony Banner"
            width={1200}
            height={675}
            className="w-full"
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Installation Ceremony</h1>
          <p className="text-lg text-muted-foreground">BGCTUB Information Technology Club</p>
        </div>
      </div>

      {/* Event Details */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Event Details</h2>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>19th December, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>01:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>IQAC Conference Room</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>By Invitation Only</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Distinguished Guests */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Distinguished Guests</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Chief Guest
                <Badge variant="secondary">Vice Chancellor</Badge>
              </h3>
              <p className="text-muted-foreground">
                Professor Dr. A.F.M. Aowrangazab
              </p>
              <p className="text-sm text-muted-foreground">
                Honorable Vice Chancellor, BGC Trust University Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Guest of Honor
                <Badge variant="secondary">Registrar</Badge>
              </h3>
              <p className="text-muted-foreground">Dr. S.M Shoaib</p>
              <p className="text-sm text-muted-foreground">
                Registrar In-Charge, BGC Trust University Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Chair
                <Badge variant="secondary">Chief Adviser</Badge>
              </h3>
              <p className="text-muted-foreground">Mohammad Salah Uddin Chowdury</p>
              <p className="text-sm text-muted-foreground">
                Assistant Professor & Chairman, Department of Computer Science & Engineering
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Program Schedule */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Program Schedule</h2>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Opening & Welcome</h4>
                <p className="text-sm text-muted-foreground">Formal welcome and introduction</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Arrival of Guests</h4>
                <p className="text-sm text-muted-foreground">Seating of distinguished guests and attendees</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Introduction of IT Club and Guests</h4>
                <p className="text-sm text-muted-foreground">Mission statement and introduction of dignitaries</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Introduction of Advisers</h4>
                <p className="text-sm text-muted-foreground">Presentation of the IT Club advisory board</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Flower Presentation</h4>
                <p className="text-sm text-muted-foreground">Token of appreciation to distinguished guests</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Welcome Speech</h4>
                <p className="text-sm text-muted-foreground">By Ms. Farhana Nasrin, Adviser, BGCTUB IT Club</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Declaration of Committee</h4>
                <p className="text-sm text-muted-foreground">Announcement by Honorable Vice-Chancellor</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Oath-Taking Ceremony</h4>
                <p className="text-sm text-muted-foreground">Led by Honorable Vice-Chancellor</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">ID Card Distribution</h4>
                <p className="text-sm text-muted-foreground">Distribution to committee members</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">President's Speech</h4>
                <p className="text-sm text-muted-foreground">Vision and aspirations for the club</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Special Guest's Speech</h4>
                <p className="text-sm text-muted-foreground">Address by Dr. S.M. Shoaib</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Chief Guest's Speech</h4>
                <p className="text-sm text-muted-foreground">Address by Prof. Dr. A.F.M. Aowrangazab</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Presentation of Gifts</h4>
                <p className="text-sm text-muted-foreground">Distribution of LinkedIn Premium and Canva Premium subscriptions</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Closing Remarks</h4>
                <p className="text-sm text-muted-foreground">By Mr. Mohammad Salahuddin Chowdhury, Chief Adviser</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h4 className="font-medium">Conclusion</h4>
                <p className="text-sm text-muted-foreground">Vote of thanks and closing ceremony</p>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 