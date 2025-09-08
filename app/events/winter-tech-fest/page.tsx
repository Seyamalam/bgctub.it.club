import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Calendar, Clock, MapPin, Trophy, Users, Sparkles, BookOpen, Target, Rocket, Gift, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Workshop {
  title: string
  description: string
  date: string
  duration: string
  instructor: string
}

interface Resource {
  title: string
  type: string
  link: string
}

interface Judge {
  name: string
  role: string
  image?: string
}

interface Competition {
  title: string
  category: string
  description: string
  registrationStatus?: string
  maxParticipants?: number
  currentParticipants?: number
  timeline: Array<{
    date: string
    event: string
  }>
  rules: string[]
  prizes: {
    first: string
    second: string
    third: string
  }
  judges: Judge[]
  workshops?: Workshop[]
  resources?: Resource[]
}

const competitions: Record<string, Competition> = {
  programming: {
    title: "CodeMaster Showdown",
    category: "Programming Contest",
    description: "Competitive programming competition featuring algorithmic challenges and coding problems.",
    registrationStatus: "Registration Open",
    maxParticipants: 100,
    currentParticipants: 0,
    timeline: [
      { date: "September 3, 2025", event: "CodeMaster Showdown (3 Hours)" },
      { date: "September 3, 2025", event: "Results Announcement" }
    ],
    rules: [
      "Individual participation",
      "3-hour competition duration",
      "Multiple programming problems",
      "Languages: C, C++, Java, Python",
      "Online judge system",
      "Real-time scoring"
    ],
    prizes: {
      first: "1st Place Trophy + Certificate",
      second: "2nd Place Trophy + Certificate",
      third: "3rd Place Trophy + Certificate"
    },
    judges: [
      {
        name: "Mr. Salah Uddin Chowdhury",
        role: "Head of CSE Department, BGCTUB",
        image: "/images/advisor/Mr md Salah Uddin Chowdury_20241214_112034_0000.jpg"
      },
      {
        name: "Mr. Misbah Uddin Emran",
        role: "Lecturer, CSE Department",
        image: "/images/advisor/Mr Misbah Uddin Emran_20241214_112035_0006.jpg"
      }
    ]
  },
  esports: {
    title: "eFootball Championship",
    category: "E-Sports",
    description: "Football gaming tournament showcasing skills in virtual football competition.",
    registrationStatus: "Registration Open",
    maxParticipants: 32,
    currentParticipants: 0,
    timeline: [
      { date: "September 3, 2025", event: "eFootball Championship (4 Hours)" },
      { date: "September 3, 2025", event: "Tournament Results" }
    ],
    rules: [
      "Teams of 1 player each",
      "4-hour tournament duration",
      "Standard eFootball rules",
      "Best of 3 matches in finals",
      "Console: PlayStation",
      "Fair play policy enforced"
    ],
    prizes: {
      first: "1st Place Trophy + Certificate",
      second: "2nd Place Trophy + Certificate",
      third: "3rd Place Trophy + Certificate"
    },
    judges: [
      {
        name: "BGCTUB Gaming Club",
        role: "Tournament Organizers"
      }
    ]
  },
  design: {
    title: "BGC Visionary Design Contest",
    category: "Graphics & Videography",
    description: "Creative graphics and videography design competition for visual content creation.",
    registrationStatus: "Registration Open",
    maxParticipants: 50,
    currentParticipants: 0,
    timeline: [
      { date: "September 3, 2025", event: "Submission Deadline (36 Hours)" },
      { date: "September 4, 2025", event: "Judging & Results" }
    ],
    rules: [
      "Individual participation",
      "36-hour creation time",
      "Original artwork required",
      "Theme: BGC Trust University",
      "Multiple categories available",
      "Digital submission only"
    ],
    prizes: {
      first: "1st Place Trophy + Certificate",
      second: "2nd Place Trophy + Certificate",
      third: "3rd Place Trophy + Certificate"
    },
    judges: [
      {
        name: "Ms. Kazi Sanjida Tahrim",
        role: "Lecturer, Pharmacy Department"
      },
      {
        name: "Mr. Sarwar Kamal",
        role: "Assistant Professor, Journalism"
      }
    ]
  },
  innovation: {
    title: "The Innovation Incubator",
    category: "Idea Contest",
    description: "Innovation contest for tech ideas and startup concepts with multiple rounds.",
    registrationStatus: "Registration Open",
    maxParticipants: 50,
    currentParticipants: 0,
    timeline: [
      { date: "September 3, 2025", event: "1st Round (24 Hours Online)" },
      { date: "September 7, 2025", event: "Final Round (Top 5) - 1 Hour Onsite" },
      { date: "September 7, 2025", event: "Winners Announcement" }
    ],
    rules: [
      "Teams of 2-3 members",
      "24-hour first round submission",
      "Top 5 advance to finals",
      "10-minute final presentations",
      "Original ideas only required",
      "Business viability scoring"
    ],
    prizes: {
      first: "1st Place Trophy + Certificate",
      second: "2nd Place Trophy + Certificate",
      third: "3rd Place Trophy + Certificate"
    },
    judges: [
      {
        name: "Mr. Md. Imran Uddin Chowdhury",
        role: "Assistant Professor, CSE Department"
      },
      {
        name: "Ms. Rezuana Haque",
        role: "Assistant Professor, CSE Department"
      }
    ]
  },
  ctf: {
    title: "The Battle of the Hackers",
    category: "CTF Competition",
    description: "Capture The Flag cybersecurity competition testing security and hacking skills.",
    registrationStatus: "Registration Open",
    maxParticipants: 50,
    currentParticipants: 0,
    timeline: [
      { date: "September 4, 2025", event: "CTF Competition (3 Hours Onsite)" },
      { date: "September 4, 2025", event: "Results & Awards" }
    ],
    rules: [
      "Teams of 2-4 members",
      "3-hour competition duration",
      "Multiple challenge categories",
      "Points based on difficulty",
      "Live scoreboard available",
      "Team collaboration allowed"
    ],
    prizes: {
      first: "1st Place Trophy + Certificate",
      second: "2nd Place Trophy + Certificate",
      third: "3rd Place Trophy + Certificate"
    },
    judges: [
      {
        name: "Mr. Salah Uddin Chowdhury",
        role: "Head of CSE Department, BGCTUB",
        image: "/images/advisor/Mr md Salah Uddin Chowdury_20241214_112034_0000.jpg"
      },
      {
        name: "Mr. Misbah Uddin Emran",
        role: "Lecturer, CSE Department",
        image: "/images/advisor/Mr Misbah Uddin Emran_20241214_112035_0006.jpg"
      }
    ]
  },
  webdev: {
    title: "Web Development Hackathon",
    category: "Web Development",
    description: "Web development hackathon with multiple rounds and final presentations.",
    registrationStatus: "Registration Open",
    maxParticipants: 30,
    currentParticipants: 0,
    timeline: [
      { date: "September 4, 2025", event: "1st Round (10 Hours Online)" },
      { date: "September 8, 2025", event: "Final Round (Top 5) - 1h 30m Onsite" },
      { date: "September 8, 2025", event: "Winners Announcement" }
    ],
    rules: [
      "Teams of 3-5 members",
      "10-hour first round development",
      "Top 5 teams advance to finals",
      "1.5-hour final presentations",
      "Original projects only",
      "Full-stack solutions preferred"
    ],
    prizes: {
      first: "1st Place Trophy + Certificate",
      second: "2nd Place Trophy + Certificate",
      third: "3rd Place Trophy + Certificate"
    },
    judges: [
      {
        name: "Ms. Farhana Nasrin",
        role: "Assistant Professor, Business Administration"
      },
      {
        name: "Mr. Towhidul Islam Jihadi",
        role: "Lecturer, Law Department"
      }
    ]
  }
}

const highlights = [
  {
    title: "Multi-Day Event",
    description: "6-day festival featuring competitions across all technology domains.",
    icon: Calendar
  },
  {
    title: "Diverse Competitions",
    description: "Programming, Gaming, Design, Innovation, Security, and Web Development challenges.",
    icon: Trophy
  },
  {
    title: "Hybrid Format",
    description: "Combination of onsite and online events for maximum participation.",
    icon: Rocket
  },
  {
    title: "Expert Judging",
    description: "Professional faculty and industry experts evaluating all competitions.",
    icon: Sparkles
  }
]

const roadmap = [
  {
    phase: "Day 1: September 3, 2025",
    events: [
      "CodeMaster Showdown (Programming)",
      "eFootball Championship (Gaming)",
      "BGC Visionary Design Contest (Design)",
      "Innovation Incubator Round 1"
    ]
  },
  {
    phase: "Day 2: September 4, 2025",
    events: [
      "Battle of the Hackers (CTF)",
      "Web Development Hackathon Round 1"
    ]
  },
  {
    phase: "Day 3: September 7, 2025",
    events: [
      "Innovation Incubator Final Round (Top 5)"
    ]
  },
  {
    phase: "Day 4: September 8, 2025",
    events: [
      "Web Development Hackathon Final Round (Top 5)",
      "Closing & Prize Giving Ceremony"
    ]
  }
]

export default function ITFestPage() {
  return (
    <div className="container py-8 md:py-12 min-h-screen">
      {/* Hero Section - Enhanced with better mobile layout */}
      <div className="relative aspect-[21/9] md:aspect-[21/9] w-full mb-8 md:mb-12 rounded-lg overflow-hidden">
        <Image
          src="/images/events/winter-tech-fest.jpg"
          alt="Winter Tech Fest 2024"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text mb-2 md:mb-4">
              IT Fest 2025
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mb-4">
              Full event schedule for all competitions and activities at BGCTUB Campus
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-base text-muted-foreground">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                <Calendar className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <span>September 3-8, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <span>BGCTUB Campus</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                <Users className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <span>Open to All Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Event Roadmap */}
      <div className="max-w-4xl mx-auto mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Event Roadmap</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/20" />
          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 md:text-right">
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transform -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{phase.phase}</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {phase.events.map((event, eventIndex) => (
                        <li key={eventIndex}>{event}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitions Section - Enhanced with more details */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Competitions</h2>
        <Tabs defaultValue="ctf" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(competitions).map(([key, { title }]) => (
              <TabsTrigger key={key} value={key} className="text-sm md:text-base">
                {title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(competitions).map(([key, comp]) => (
            <TabsContent key={key} value={key}>
              <Card className="border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm">
                <CardHeader>
                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {comp.registrationStatus}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {comp.currentParticipants}/{comp.maxParticipants} Registered
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                      {comp.title}
                    </h3>
                    <p className="text-sm text-primary">{comp.category}</p>
                    <p className="text-muted-foreground max-w-2xl mx-auto">{comp.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Timeline */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Timeline
                    </h4>
                    <div className="grid gap-4">
                      {comp.timeline.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                          <div>
                            <p className="font-medium">{item.date}</p>
                            <p className="text-sm text-muted-foreground">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workshops */}
                  {comp.workshops && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Preparation Workshops
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {comp.workshops.map((workshop, index) => (
                          <Card key={index} className="bg-primary/5">
                            <CardContent className="pt-6">
                              <h5 className="font-semibold mb-2">{workshop.title}</h5>
                              <p className="text-sm text-muted-foreground mb-4">{workshop.description}</p>
                              <div className="text-sm space-y-1">
                                <p><span className="text-primary">Date:</span> {workshop.date}</p>
                                <p><span className="text-primary">Duration:</span> {workshop.duration}</p>
                                <p><span className="text-primary">Instructor:</span> {workshop.instructor}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rules */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Rules & Guidelines
                    </h4>
                    <ul className="grid gap-2 text-muted-foreground">
                      {comp.rules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prizes */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      Prizes
                    </h4>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card className="bg-primary/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16">
                          <div className="absolute transform rotate-45 bg-primary text-primary-foreground text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                            1st Prize
                          </div>
                        </div>
                        <CardContent className="pt-6">
                          <div className="text-center">
                          <p className="font-semibold mb-2">1st Prize</p>
                            <p className="text-primary text-lg font-bold">{comp.prizes.first}</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-primary/5">
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="font-semibold mb-2">2nd Prize</p>
                            <p className="text-primary">{comp.prizes.second}</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-primary/5">
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="font-semibold mb-2">3rd Prize</p>
                            <p className="text-primary">{comp.prizes.third}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Judges */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Judges Panel
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {comp.judges.map((judge, index) => (
                        <Card key={index} className="bg-primary/5">
                          <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                              {judge.image && (
                                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                  <Image
                                    src={judge.image}
                                    alt={judge.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <div>
                                <p className="font-semibold">{judge.name}</p>
                                <p className="text-sm text-muted-foreground">{judge.role}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  {comp.resources && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Download className="h-5 w-5 text-primary" />
                        Resources
                      </h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        {comp.resources.map((resource, index) => (
                          <Link 
                            key={index} 
                            href={resource.link}
                            className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Download className="h-4 w-4 text-primary" />
                              <span>{resource.title}</span>
                            </div>
                            <span className="text-xs text-primary">{resource.type}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Registration Button */}
                  <div className="text-center pt-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
} 