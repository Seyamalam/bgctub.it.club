"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy, Star, Award } from "lucide-react"
import Image from 'next/image'

const spotlightMembers = [
  {
    name: "John Doe",
    role: "Technical Lead",
    image: "/members/john.jpg",
    achievements: ["Best CTF Player 2023", "Microsoft Certified"],
    contribution: "Led the development of club's cybersecurity program",
    badges: ["Security Expert", "Team Lead"],
    stats: {
      projects: 12,
      events: 8,
      awards: 5
    }
  },
  {
    name: "Jane Smith",
    role: "Innovation Lead",
    image: "/members/jane.jpg",
    achievements: ["NASA Space Apps Winner", "Startup Weekend Champion"],
    contribution: "Initiated the tech innovation bootcamp",
    badges: ["Innovation Champion", "Mentor"],
    stats: {
      projects: 15,
      events: 10,
      awards: 4
    }
  }
]

export function MemberSpotlight() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {spotlightMembers.map((member) => (
        <Card key={member.name} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              quality={85}
            />
          </div>
          <CardHeader className="relative">
            <div className="absolute top-0 right-0 p-4 flex gap-2">
              {member.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-primary/10">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 ring-4 ring-primary/20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-2xl font-semibold">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4 bg-primary/5 rounded-lg">
                <div className="text-center">
                  <Trophy className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <div className="text-lg font-semibold">{member.stats.projects}</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <Star className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <div className="text-lg font-semibold">{member.stats.events}</div>
                  <div className="text-xs text-muted-foreground">Events</div>
                </div>
                <div className="text-center">
                  <Award className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <div className="text-lg font-semibold">{member.stats.awards}</div>
                  <div className="text-xs text-muted-foreground">Awards</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Recent Achievements</h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement) => (
                    <li key={achievement} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Contribution</h4>
                <p className="text-sm text-muted-foreground">
                  {member.contribution}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function MemberSpotlightSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="rounded-lg border bg-card">
            <div className="p-6">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-muted" />
                <div className="mt-4 h-6 w-32 bg-muted rounded" />
                <div className="mt-2 h-4 w-24 bg-muted rounded" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="text-center">
                      <div className="h-5 w-5 mx-auto mb-1 bg-muted rounded" />
                      <div className="h-6 w-full bg-muted rounded" />
                      <div className="mt-1 h-4 w-full bg-muted rounded" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="h-5 w-32 bg-muted rounded mb-2" />
                  <div className="space-y-2">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="h-4 w-full bg-muted rounded" />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-5 w-32 bg-muted rounded mb-2" />
                  <div className="h-4 w-full bg-muted rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 