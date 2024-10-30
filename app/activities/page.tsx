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
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Activities</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Explore our diverse range of activities and learning opportunities
        </p>
      </div>

      <Tabs defaultValue="cybersecurity" className="mx-auto max-w-5xl">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {Object.entries(activities).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(activities).map(([key, { Icon, title, items }]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 md:grid-cols-2">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center rounded-lg border p-4 transition-colors hover:bg-muted"
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