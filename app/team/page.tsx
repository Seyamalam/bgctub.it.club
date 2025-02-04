"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Globe, Youtube, Facebook, MessageCircle, Send, Instagram, Linkedin } from "lucide-react"

const executives = {
  admin: [
    {
      name: "Md Rahat Ibne Sattar",
      role: "President",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Rahat_ibne_sattar.jpg",
      badges: ["Leadership", "Management", "Strategy"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Meheraj Moazzem",
      role: "Vice President",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Meheraj_Moazzem.jpg",
      badges: ["Leadership", "Operations", "Planning"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Asrar Kawsain Tahmid",
      role: "General Secretary",
      department: "Department of Business Administration",
      image: "/images/team/Asrar Kawsain Tahmid.jpg",
      badges: ["Administration", "Coordination", "Management"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "A.K.M Fahim Chowdhury",
      role: "Treasurer",
      department: "Department of Law",
      image: "/images/team/AKM Fahim Chowdhury.jpg",
      badges: ["Finance", "Budgeting", "Planning"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sayem Mannan",
      role: "Organizing Secretary",
      department: "Department of Business Administration",
      image: "/images/team/Sayem Mannan.jpg",
      badges: ["Organization", "Events", "Coordination"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ],
  tech: [
    {
      name: "Alahi Majnur Osama",
      role: "IT Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Alahi Majnur Osama.jpg",
      badges: ["Full Stack", "DevOps", "Cloud"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Md. Tahmidul Alam Ahad",
      role: "IT Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Md Tahmidul Alam Ahad.jpg",
      badges: ["Frontend", "UI/UX", "React"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Touhidul Alam Seyam",
      role: "IT Coordinator",
      department: "Department of  Computer Science & Engineering",
      image: "/images/team/Touhidul Alam Seyam.jpg",
      badges: ["Backend", "Database", "API"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Ekthiar Uddin",
      role: "IT Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Ekthiar Uddin.jpg",
      badges: ["DevOps", "Cloud", "Security"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Anik Das",
      role: "IT Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Anik Das.jpg",
      badges: ["Frontend", "Mobile", "UI/UX"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Shahriar Faysal",
      role: "IT Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Shahriar Faysal.jpg",
      badges: ["Backend", "Database", "API"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Md Imran Chowdhury",
      role: "IT Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Md Imran Chowdhury.jpg",
      badges: ["Full Stack", "DevOps", "Security"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Syeda Tasfia Tabassum",
      role: "IT Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Syeda Tasfia Tabassum.jpg",
      badges: ["Frontend", "UI/UX", "Design"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ],
  events: [
    {
      name: "Naymul Hossen",
      role: "Event Coordinator",
      department: "Department of Law",
      image: "/images/team/Naymul Hossen.jpg",
      badges: ["Planning", "Coordination", "Management"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Mohammad Jahirul Islam",
      role: "Event Coordinator",
      department: "Department of Law",
      image: "/images/team/Mohammad Jahirul Islam.jpg",
      badges: ["Organization", "Logistics", "Execution"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Md. Nunjiba Maher Chy Elmar",
      role: "Event Coordinator",
      department: "Department of Computer Science & Engineering",
      image: "/images/team/Md Nunjiba Maher Chy Elmar.jpg",
      badges: ["Planning", "Coordination", "Support"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Md. Jonaied Ali Zahin",
      role: "Event Coordinator",
      department: "Department of Law",
      image: "/images/team/Md Jonaied Ali Zahin.jpg",
      badges: ["Logistics", "Support", "Coordination"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Najiur Rahman Tajib",
      role: "Event Coordinator",
      department: "Department of Business Administration",
      image: "/images/team/Najiur Rahman Tajib.jpg",
      badges: ["Planning", "Support", "Management"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Mohammad Maruful Islam",
      role: "Event Coordinator",
      department: "Department of English",
      image: "/images/team/Mohammad Maruful Islam .jpg",
      badges: ["Organization", "Support", "Execution"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ],
  hr: [
    {
      name: "Khadijatul Salim Isha",
      role: "HR Coordinator",
      department: "Department of Pharmacy",
      image: "/images/team/Khadijatul Salim Isha.jpg",
      badges: ["Recruitment", "Training", "Development"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Muin Uddin Chowdhury",
      role: "HR Coordinator",
      department: "Department of Journalism & Media Studies",
      image: "/images/team/Muin Uddin Chowdhury.jpg",
      badges: ["Relations", "Support", "Development"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Umme Habiba Arpi",
      role: "HR Coordinator",
      department: "Department of English",
      image: "/images/team/Umme Habiba Arpi.jpg",
      badges: ["Training", "Relations", "Support"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ],
  finance: [
    {
      name: "Souradeep Baidya",
      role: "Finance Coordinator",
      department: "Department of Business Administration",
      image: "/images/team/Souradeep Baidya.jpg",
      badges: ["Finance", "Planning", "Analysis"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Soumya Mallik",
      role: "Finance Coordinator",
      department: "Computer Science & Engineering",
      image: "/images/team/Soumya Mallik.jpg",
      badges: ["Budgeting", "Analysis", "Planning"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Nusrat Jahan Mahin",
      role: "Finance Coordinator",
      department: "Department of Business Administration",
      image: "/images/team/Nusrat Jahan Mahin.jpg",
      badges: ["Finance", "Support", "Planning"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ],
  pr: [
    {
      name: "Humion Kabir Ovi",
      role: "PR Coordinator",
      department: "Department of Business Administration",
      image: "/images/team/Humion Kabir Ovi.jpg",
      badges: ["Communication", "Media", "Relations"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Safayet Hosen",
      role: "PR Coordinator",
      department: "Journalism & Media Studies",
      image: "/images/team/Safayet Hosen .jpg",
      badges: ["Media", "Outreach", "Communication"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Shabnur Sultana",
      role: "PR Coordinator",
      department: "Department of Law",
      image: "/images/team/Shabnur Sultana.jpg",
      badges: ["Relations", "Communication", "Media"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emon Barua",
      role: "PR Coordinator",
      department: "Department of Business Administration",
      image: "/images/team/Emon Barua .jpg",
      badges: ["Media", "Relations", "Support"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Rahela Razzak",
      role: "PR Coordinator",
      department: "Pharmacy",
      image: "/images/team/Rahela Razzak.jpg",
      badges: ["Communication", "Outreach", "Support"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ],
  marketing: [
    {
      name: "Imtias Bin Risvy",
      role: "Marketing Coordinator",
      department: "Department of Business Administration",
      image: "/images/team/Imtias Bin Risvy.jpg",
      badges: ["Strategy", "Digital", "Branding"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sarwar Ebne Kashem",
      role: "Marketing Coordinator",
      department: "Department of Business Administration",
      image: "/images/team/Sarwar Ebne Kashem.jpg",
      badges: ["Digital", "Content", "Strategy"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Shezan Azad Chowdhury",
      role: "Marketing Coordinator",
      department: "Department of Journalism & Media Studies",
      image: "/images/team/Shezan Azad Chowdhury.jpg",
      badges: ["Branding", "Digital", "Content"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Mehzabien Naz Tanisha",
      role: "Marketing Coordinator",
      department: "Department of English",
      image: "/images/team/Mehzabien Naz Tanisha.jpg",
      badges: ["Content", "Strategy", "Support"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Mainuddin Sajib",
      role: "Marketing Coordinator",
      department: "Department of Law",
      image: "/images/team/Mainuddin Sajib.jpg",
      badges: ["Digital", "Support", "Content"],
      socials: {
        website: "#",
        youtube: "#",
        facebook: "#",
        discord: "#",
        telegram: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ]
}

export default function TeamPage() {
  return (
    <div className="container px-4 sm:px-6 py-6 sm:py-8 md:py-12 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-gradient bg-gradient-to-r from-primary via-primary/50 to-primary bg-300% bg-clip-text text-transparent">
          Executive Committee
        </h1>
        <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground animate-fade-in">
          Meet the dedicated team leading BGCTUB IT Club
        </p>
      </div>

      <Tabs defaultValue="admin" className="w-full">
        <div className="w-full overflow-x-auto scrollbar-none">
          <TabsList className="w-full inline-flex items-center justify-start md:justify-between border-b border-border/50 bg-background/5 backdrop-blur-sm">
            <TabsTrigger 
              value="admin" 
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
            >
              Core Team
            </TabsTrigger>
            <TabsTrigger 
              value="tech" 
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
            >
              Tech Team
            </TabsTrigger>
            <TabsTrigger 
              value="events" 
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
            >
              Event Team
            </TabsTrigger>
            <TabsTrigger 
              value="hr" 
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
            >
              HR Team
            </TabsTrigger>
            <TabsTrigger 
              value="finance" 
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
            >
              Finance Team
            </TabsTrigger>
            <TabsTrigger 
              value="pr" 
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
            >
              PR Team
            </TabsTrigger>
            <TabsTrigger 
              value="marketing" 
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs sm:text-sm md:text-base whitespace-nowrap px-4 py-2.5 transition-all duration-300 hover:text-primary/80 rounded-none"
            >
              Marketing Team
            </TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(executives).map(([team, members]) => (
          <TabsContent key={team} value={team} className="mt-8 sm:mt-10 md:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {members.map((member, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 bg-white/5 dark:bg-black/40 shadow-none backdrop-blur-sm
                    hover:shadow-xl hover:shadow-primary/20 hover:border-primary/20 hover:bg-white/10 dark:hover:bg-black/50
                    transform transition-all duration-300 hover:scale-[1.02] animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      priority={index < 6}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                  
                  <div className="p-3 sm:p-4 md:p-6 space-y-1.5 sm:space-y-2 md:space-y-4 relative z-10">
                    <div className="space-y-0.5 sm:space-y-1 md:space-y-2 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-300% bg-clip-text text-transparent group-hover:animate-gradient">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-medium text-primary transition-colors duration-300">{member.role}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">{member.department}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5">
                      {member.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="px-1.5 sm:px-2 py-0.5 text-xs sm:text-sm bg-primary/5 text-primary rounded-full
                            border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20
                            transition-all duration-300"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 md:pt-4">
                      {member.socials.website && (
                        <Link 
                          href={member.socials.website}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                            transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                            touch-manipulation"
                          aria-label={`Visit ${member.name}'s website`}
                        >
                          <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      )}
                      {member.socials.youtube && (
                        <Link 
                          href={member.socials.youtube}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                            transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                            touch-manipulation"
                          aria-label={`Watch ${member.name}'s YouTube channel`}
                        >
                          <Youtube className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      )}
                      {member.socials.facebook && (
                        <Link 
                          href={member.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                            transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                            touch-manipulation"
                          aria-label={`Visit ${member.name}'s Facebook page`}
                        >
                          <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      )}
                      {member.socials.discord && (
                        <Link 
                          href={member.socials.discord}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                            transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                            touch-manipulation"
                          aria-label={`Join ${member.name}'s Discord server`}
                        >
                          <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      )}
                      {member.socials.telegram && (
                        <Link 
                          href={member.socials.telegram}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                            transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                            touch-manipulation"
                          aria-label={`Message ${member.name} on Telegram`}
                        >
                          <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      )}
                      {member.socials.instagram && (
                        <Link 
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                            transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                            touch-manipulation"
                          aria-label={`Follow ${member.name} on Instagram`}
                        >
                          <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      )}
                      {member.socials.linkedin && (
                        <Link 
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                            transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                            touch-manipulation"
                          aria-label={`Connect with ${member.name} on LinkedIn`}
                        >
                          <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}