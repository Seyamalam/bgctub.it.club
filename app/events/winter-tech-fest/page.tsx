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
  ctf: {
    title: "Capture The Flag",
    category: "Cyber Security",
    description: "Test your cybersecurity skills in this intensive CTF competition. Solve challenges across various domains including web exploitation, cryptography, reverse engineering, and more.",
    registrationStatus: "Opening Soon",
    maxParticipants: 100,
    currentParticipants: 0,
    timeline: [
      { date: "January 15, 2024", event: "Registration Opens" },
      { date: "January 25, 2024", event: "Workshop: Introduction to CTF" },
      { date: "January 26, 2024", event: "Mock CTF Contest" },
      { date: "February 1-2, 2024", event: "Main CTF Competition" },
      { date: "February 2, 2024", event: "Winners Announcement" }
    ],
    rules: [
      "Teams of 2-4 members",
      "24-hour competition period",
      "Multiple categories of challenges",
      "Points based on challenge difficulty",
      "First blood bonus points",
      "Live scoreboard updates"
    ],
    prizes: {
      first: "Trophy + Certificates",
      second: "Trophy + Certificates",
      third: "Trophy + Certificates"
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
    ],
    workshops: [
      {
        title: "Introduction to CTF",
        description: "Learn the basics of CTF competitions, types of challenges, and solving strategies.",
        date: "January 25, 2024",
        duration: "2 hours",
        instructor: "Mr. Misbah Uddin Emran"
      },
      {
        title: "Web Exploitation Basics",
        description: "Understanding common web vulnerabilities and exploitation techniques.",
        date: "January 25, 2024",
        duration: "2 hours",
        instructor: "Mr. Salah Uddin Chowdhury"
      }
    ],
    resources: [
      {
        title: "CTF Preparation Guide",
        type: "PDF",
        link: "#"
      },
      {
        title: "Practice Challenges",
        type: "Website",
        link: "#"
      }
    ]
  },
  programming: {
    title: "Code Warriors",
    category: "Competitive Programming",
    description: "Show your algorithmic prowess in this competitive programming contest. Solve complex problems with efficient solutions under time pressure.",
    registrationStatus: "Opening Soon",
    maxParticipants: 150,
    currentParticipants: 0,
    timeline: [
      { date: "January 15, 2024", event: "Registration Opens" },
      { date: "January 28, 2024", event: "Workshop: Problem Solving Strategies" },
      { date: "January 29, 2024", event: "Mock Contest" },
      { date: "February 3, 2024", event: "Main Competition" },
      { date: "February 3, 2024", event: "Winners Announcement" }
    ],
    rules: [
      "Individual participation",
      "5-hour contest duration",
      "Problems in varying difficulty",
      "Languages: C, C++, Java, Python",
      "Online judge system",
      "Real-time submissions"
    ],
    prizes: {
      first: "25,000 BDT + Certificates",
      second: "15,000 BDT + Certificates",
      third: "10,000 BDT + Certificates"
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
  hackathon: {
    title: "WebCraft Hackathon",
    category: "Web Development",
    description: "Build innovative web solutions in this 36-hour hackathon. Focus on both functionality and UI/UX to create impactful projects.",
    timeline: [
      { date: "January 15, 2024", event: "Registration Opens" },
      { date: "January 30, 2024", event: "Workshop: Modern Web Development" },
      { date: "January 31, 2024", event: "UI/UX Workshop" },
      { date: "February 4-5, 2024", event: "Hackathon" },
      { date: "February 5, 2024", event: "Project Presentations & Winners" }
    ],
    rules: [
      "Teams of 3-5 members",
      "36-hour build time",
      "Original project ideas only",
      "Tech stack freedom",
      "Regular milestone checks",
      "Final presentation required"
    ],
    prizes: {
      first: "50,000 BDT + Certificates",
      second: "30,000 BDT + Certificates",
      third: "20,000 BDT + Certificates"
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
  },
  ideacontest: {
    title: "Innovation Summit",
    category: "Tech Innovations",
    description: "Present your groundbreaking tech ideas and solutions. Focus on innovation, feasibility, and potential impact.",
    timeline: [
      { date: "January 15, 2024", event: "Registration Opens" },
      { date: "February 1, 2024", event: "Workshop: Idea Presentation" },
      { date: "February 2, 2024", event: "Pitch Workshop" },
      { date: "February 6, 2024", event: "Idea Presentations" },
      { date: "February 6, 2024", event: "Winners Announcement" }
    ],
    rules: [
      "Individual or team (max 3)",
      "10-minute presentation",
      "5-minute Q&A session",
      "Original ideas only",
      "Prototype bonus points",
      "Business model required"
    ],
    prizes: {
      first: "40,000 BDT + Certificates",
      second: "25,000 BDT + Certificates",
      third: "15,000 BDT + Certificates"
    },
    judges: [
      {
        name: "Mr. Sarwar Kamal",
        role: "Assistant Professor, Journalism"
      },
      {
        name: "Ms. Kazi Sanjida Tahrim",
        role: "Lecturer, Pharmacy Department"
      }
    ]
  },
  esports: {
    title: "CS:GO Tournament",
    category: "E-Sports",
    description: "Compete in Counter-Strike: Global Offensive tournament. Show your tactical skills and team coordination.",
    timeline: [
      { date: "January 15, 2024", event: "Registration Opens" },
      { date: "February 3, 2024", event: "Practice Sessions" },
      { date: "February 7, 2024", event: "Qualifiers" },
      { date: "February 8, 2024", event: "Semi-Finals & Finals" },
      { date: "February 8, 2024", event: "Winners Announcement" }
    ],
    rules: [
      "5-player teams",
      "Standard competitive rules",
      "Best of 3 matches",
      "Fair play policy",
      "Own peripherals allowed",
      "Technical pause system"
    ],
    prizes: {
      first: "25,000 BDT + Certificates",
      second: "15,000 BDT + Certificates",
      third: "10,000 BDT + Certificates"
    },
    judges: [
      {
        name: "BGCTUB E-Sports Club",
        role: "Tournament Organizers"
      }
    ]
  }
}

const highlights = [
  {
    title: "Expert-Led Workshops",
    description: "Learn from industry professionals and academics through specialized workshops.",
    icon: BookOpen
  },
  {
    title: "Valuable Prizes",
    description: "Win exciting prizes worth over 2 Lac BDT across all competitions.",
    icon: Gift
  },
  {
    title: "Networking",
    description: "Connect with fellow tech enthusiasts and industry professionals.",
    icon: Users
  },
  {
    title: "Skill Development",
    description: "Enhance your technical and soft skills through practical challenges.",
    icon: Target
  }
]

const roadmap = [
  {
    phase: "Phase 1: Preparation",
    events: [
      "Registration Opens",
      "Workshop Series Begins",
      "Resource Distribution"
    ]
  },
  {
    phase: "Phase 2: Practice",
    events: [
      "Mock Contests",
      "Team Formation",
      "Mentorship Sessions"
    ]
  },
  {
    phase: "Phase 3: Competition",
    events: [
      "Main Events Begin",
      "Live Competitions",
      "Daily Updates"
    ]
  },
  {
    phase: "Phase 4: Finale",
    events: [
      "Project Presentations",
      "Award Ceremony",
      "Networking Event"
    ]
  }
]

export default function WinterTechFestPage() {
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
              Winter Tech Fest 2024
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mb-4">
              A week-long celebration of technology, innovation, and competition
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-base text-muted-foreground">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                <Calendar className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <span>February 1-8, 2024</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <span>BGCTUB Campus</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                <Users className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <span>500+ Participants Expected</span>
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