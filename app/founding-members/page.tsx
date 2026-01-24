"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Globe, Youtube, Facebook, MessageCircle, Send, Instagram, Linkedin } from "lucide-react"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';

const foundingMembers = [
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
  },
  {
    name: "Kaifa Ajme Kaha",
    role: "HR Coordinator",
    department: "Department of Law",
    image: "/images/team/Kaifa Ajme.jpg",
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
  }
]

export default function FoundingMembersPage() {
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="container px-4 sm:px-6 py-8 sm:py-10 md:py-12 min-h-screen">
            <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-gradient bg-gradient-to-r from-primary via-primary/50 to-primary bg-300% bg-clip-text text-transparent">
                Founding Members
              </h1>
              <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground animate-fade-in">
                The visionaries who started the journey of BGCTUB IT Club
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {foundingMembers.map((member, index) => (
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
          </div>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}
