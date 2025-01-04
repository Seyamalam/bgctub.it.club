"use client"

import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Code, Globe, Lightbulb, PenTool, Gamepad } from "lucide-react"

const activities = {
  cybersecurity: {
    Icon: Shield,
    title: "Cyber Security",
    items: ["Learning Path", "CTF", "Workshops", "Resources"]
  },
  programming: {
    Icon: Code,
    title: "Programming",
    items: ["Contest", "Problem Solving", "Workshops"]
  },
  webdev: {
    Icon: Globe,
    title: "Web Development",
    items: ["Hackathons", "Workshops", "Resources"]
  },
  innovation: {
    Icon: Lightbulb,
    title: "Teach Innovations",
    items: ["Idea Contest", "Startup basics", "Pitch Presentations"]
  },
  design: {
    Icon: PenTool,
    title: "Graphics Design",
    items: ["Logo Contest", "Poster Presentation", "Resources"]
  },
  esports: {
    Icon: Gamepad,
    title: "E-Sports",
    items: ["Community", "Competitive Contest"]
  }
} as const

export default function ActivitiesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
          Activities
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
          Explore our diverse range of activities and learning opportunities
        </p>
      </div>

      <Tabs defaultValue="cybersecurity" className="mx-auto max-w-5xl">
        <TabsList className="w-full flex flex-wrap md:grid md:grid-cols-3 lg:grid-cols-6 justify-center gap-2 md:gap-0 bg-transparent mb-12 md:mb-16">
          {Object.entries(activities).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key} className="text-sm md:text-base">
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(activities).map(([key, { Icon, title, items }]) => (
          <TabsContent key={key} value={key} className="mt-16 md:mt-20">
            <Card className="border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                  {title}
                </h2>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 md:gap-4 md:grid-cols-2">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center rounded-lg bg-primary/5 p-3 md:p-4 transition-colors hover:bg-primary/10"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}