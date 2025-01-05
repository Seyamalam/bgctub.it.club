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
    <div className="container py-8 md:py-12 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
          Executive Committee
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
          Meet the dedicated team leading BGCTUB IT Club
        </p>
      </div>

      <Tabs defaultValue="admin" className="w-full">
        <TabsList className="w-full max-w-7xl mx-auto mb-12 md:mb-16 flex md:grid md:grid-cols-7 flex-wrap justify-center gap-2 md:gap-0 bg-transparent">
          <TabsTrigger value="admin" className="text-sm md:text-base">Core Team</TabsTrigger>
          <TabsTrigger value="tech" className="text-sm md:text-base">Tech Team</TabsTrigger>
          <TabsTrigger value="events" className="text-sm md:text-base">Event Team</TabsTrigger>
          <TabsTrigger value="hr" className="text-sm md:text-base">HR Team</TabsTrigger>
          <TabsTrigger value="finance" className="text-sm md:text-base">Finance Team</TabsTrigger>
          <TabsTrigger value="pr" className="text-sm md:text-base">PR Team</TabsTrigger>
          <TabsTrigger value="marketing" className="text-sm md:text-base">Marketing Team</TabsTrigger>
        </TabsList>

        {Object.entries(executives).map(([team, members]) => (
          <TabsContent key={team} value={team} className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {members.map((member, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 bg-white dark:bg-black/40 shadow-none transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority={index < 6}
                    />
                  </div>
                  
                  <div className="p-4 md:p-6 space-y-2 md:space-y-4">
                    <div className="space-y-1 md:space-y-2 text-center">
                      <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                        {member.name}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-primary">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.department}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1.5">
                      {member.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="px-2 py-0.5 text-xs md:text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-2 pt-2 md:pt-4">
                      {member.socials.website && (
                        <Link 
                          href={member.socials.website}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/10 hover:bg-primary/20 p-2 text-primary"
                        >
                          <Globe className="h-4 w-4" />
                        </Link>
                      )}
                      {member.socials.youtube && (
                        <Link 
                          href={member.socials.youtube}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/10 hover:bg-primary/20 p-2 text-primary"
                        >
                          <Youtube className="h-4 w-4" />
                        </Link>
                      )}
                      {member.socials.facebook && (
                        <Link 
                          href={member.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/10 hover:bg-primary/20 p-2 text-primary"
                        >
                          <Facebook className="h-4 w-4" />
                        </Link>
                      )}
                      {member.socials.discord && (
                        <Link 
                          href={member.socials.discord}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/10 hover:bg-primary/20 p-2 text-primary"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </Link>
                      )}
                      {member.socials.telegram && (
                        <Link 
                          href={member.socials.telegram}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/10 hover:bg-primary/20 p-2 text-primary"
                        >
                          <Send className="h-4 w-4" />
                        </Link>
                      )}
                      {member.socials.instagram && (
                        <Link 
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/10 hover:bg-primary/20 p-2 text-primary"
                        >
                          <Instagram className="h-4 w-4" />
                        </Link>
                      )}
                      {member.socials.linkedin && (
                        <Link 
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="rounded-full bg-primary/10 hover:bg-primary/20 p-2 text-primary"
                        >
                          <Linkedin className="h-4 w-4" />
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