"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy, Star, Award } from "lucide-react"

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
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
        Member Spotlight
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {spotlightMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="hover-card-effect glass-effect overflow-hidden">
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
          </motion.div>
        ))}
      </div>
    </div>
  )
} 