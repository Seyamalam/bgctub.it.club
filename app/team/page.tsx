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
      department: "Computer Science & Engineering",
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
      department: "Computer Science & Engineering",
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
      department: "Computer Science & Engineering",
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
      department: "Computer Science & Engineering",
      image: "/images/team/A.K.M Fahim Chowdhury.jpg",
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
      department: "Computer Science & Engineering",
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
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
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
      role: "Technical Team Member",
      department: "Computer Science & Engineering",
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
      role: "Technical Team Member",
      department: "Computer Science & Engineering",
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
      role: "Technical Team Member",
      department: "Computer Science & Engineering",
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
      role: "Technical Team Member",
      department: "Computer Science & Engineering",
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
      role: "Technical Team Member",
      department: "Computer Science & Engineering",
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
      role: "Technical Team Member",
      department: "Computer Science & Engineering",
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
      role: "Technical Team Member",
      department: "Computer Science & Engineering",
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
      role: "Event Team Lead",
      department: "Computer Science & Engineering",
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
      role: "Event Team Member",
      department: "Computer Science & Engineering",
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
      role: "Event Team Member",
      department: "Computer Science & Engineering",
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
      role: "Event Team Member",
      department: "Computer Science & Engineering",
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
      role: "Event Team Member",
      department: "Computer Science & Engineering",
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
      role: "Event Team Member",
      department: "Computer Science & Engineering",
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
      role: "HR Team Lead",
      department: "Computer Science & Engineering",
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
      role: "HR Team Member",
      department: "Computer Science & Engineering",
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
      role: "HR Team Member",
      department: "Computer Science & Engineering",
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
      role: "Finance Team Lead",
      department: "Computer Science & Engineering",
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
      role: "Finance Team Member",
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
      role: "Finance Team Member",
      department: "Computer Science & Engineering",
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
      role: "PR Team Lead",
      department: "Computer Science & Engineering",
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
      role: "PR Team Member",
      department: "Computer Science & Engineering",
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
      role: "PR Team Member",
      department: "Computer Science & Engineering",
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
      role: "PR Team Member",
      department: "Computer Science & Engineering",
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
      role: "PR Team Member",
      department: "Computer Science & Engineering",
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
      role: "Marketing Team Lead",
      department: "Computer Science & Engineering",
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
      role: "Marketing Team Member",
      department: "Computer Science & Engineering",
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
      role: "Marketing Team Member",
      department: "Computer Science & Engineering",
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
      role: "Marketing Team Member",
      department: "Computer Science & Engineering",
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
      role: "Marketing Team Member",
      department: "Computer Science & Engineering",
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
    <div className="container py-12 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Executive Committee
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Meet our dedicated team members who make BGCTUB IT Club possible
        </p>
      </div>

      <Tabs defaultValue="admin" className="mx-auto max-w-7xl">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
          <TabsTrigger value="admin">Administration</TabsTrigger>
          <TabsTrigger value="tech">Technical Team</TabsTrigger>
          <TabsTrigger value="events">Event Team</TabsTrigger>
          <TabsTrigger value="hr">HR Team</TabsTrigger>
          <TabsTrigger value="finance">Finance Team</TabsTrigger>
          <TabsTrigger value="pr">PR Team</TabsTrigger>
          <TabsTrigger value="marketing">Marketing Team</TabsTrigger>
        </TabsList>

        {Object.entries(executives).map(([team, members]) => (
          <TabsContent key={team} value={team}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 bg-transparent shadow-none transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority={index < 6}
                    />
                  </div>
                  
                  <div className="mt-4 space-y-3 text-center">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-emerald-400">{member.role}</p>
                        <p className="text-sm text-emerald-300">{member.department}</p>
                      </div>
                      
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.badges.map((badge, badgeIndex) => (
                          <span
                            key={badgeIndex}
                            className="inline-flex items-center rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-center gap-2 pt-2">
                        <Link href={member.socials.website} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                          <Globe className="h-4 w-4" />
                        </Link>
                        <Link href={member.socials.youtube} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                          <Youtube className="h-4 w-4" />
                        </Link>
                        <Link href={member.socials.facebook} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                          <Facebook className="h-4 w-4" />
                        </Link>
                        <Link href={member.socials.discord} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                          <MessageCircle className="h-4 w-4" />
                        </Link>
                        <Link href={member.socials.telegram} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                          <Send className="h-4 w-4" />
                        </Link>
                        <Link href={member.socials.instagram} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                          <Instagram className="h-4 w-4" />
                        </Link>
                        <Link href={member.socials.linkedin} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </div>
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