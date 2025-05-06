"use client"

import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Code, Globe, Lightbulb, PenTool, Gamepad } from "lucide-react"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';

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
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="container py-8 md:py-12">
            <div className="mx-auto max-w-4xl text-center mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl font-bold animate-gradient bg-gradient-to-r from-primary via-primary/50 to-primary bg-300% bg-clip-text text-transparent">
                Activities
              </h1>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
                Explore our diverse range of activities and learning opportunities
              </p>
            </div>

            <Tabs defaultValue="cybersecurity" className="w-full">
              <div className="w-full overflow-x-auto scrollbar-none">
                <TabsList className="w-full inline-flex items-center justify-start md:justify-between border-b border-border/50 bg-background/5 backdrop-blur-sm">
                  {Object.entries(activities).map(([key, { title }]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
                    >
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {Object.entries(activities).map(([key, { Icon, title, items }]) => (
                <TabsContent key={key} value={key} className="mt-8 sm:mt-10 md:mt-16">
                  <Card className="border-0 bg-white/5 dark:bg-black/40 shadow-none backdrop-blur-sm">
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
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}