import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Globe, Youtube, Facebook, MessageCircle, Send, Instagram, Linkedin } from "lucide-react"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { Providers } from '@/components/providers';

const advisors = [
  {
    name: "Mr. Md. Salah Uddin Chowdhury",
    role: "Chairman",
    department: "Department of Computer Science & Engineering",
    image: "/images/advisor/Mr md Salah Uddin Chowdury_20241214_112034_0000.jpg",
    type: "CHIEF ADVISER",
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
    name: "Ms. Farhana Nasrin",
    role: "Assistant Professor",
    department: "Department of Business Administration",
    image: "/images/advisor/Ms Farhana Nasrin_20241214_112035_0003.jpg",
    type: "ADVISER",
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
    name: "Mr. Md. Towhidul Islam Jihadi",
    role: "Lecturer",
    department: "Department of Law",
    image: "/images/advisor/Md Towhidul Islam Jihadi_20241214_112034_0001.jpg",
    type: "ADVISER",
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
    name: "Ms. Rezuana Haque",
    role: "Lecturer",
    department: "Department of Computer Science & Engineering",
    image: "/images/advisor/ms Rezuana Haque_20241214_120418_0000.jpg",
    type: "ADVISER",
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
    name: "Mr. Misbah Uddin Emran",
    role: "Lecturer",
    department: "Department of Computer Science & Engineering",
    image: "/images/advisor/Mr Misbah Uddin Emran_20241214_112035_0006.jpg",
    type: "ADVISER",
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
    name: "Mr. Sarwar Kamal",
    role: "Lecturer",
    department: "Department of Journalism & Media Studies",
    image: "/images/advisor/Mr Sarwar Kamal_20241214_112034_0002.jpg",
    type: "ADVISER",
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
    name: "Ms. Kazi Sanjida Tahrim",
    role: "Lecturer",
    department: "Department of Pharmacy",
    image: "/images/advisor/Ms Kazi Sanjida Tahrim_20241214_120326_0001.jpg",
    type: "ADVISER",
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
    name: "Mr. Md. Imran Uddin Chowdhury",
    role: "Lecturer",
    department: "Department of English",
    image: "/images/advisor/mr md  Imran Uddin Chowdhury_20241214_112035_0004.jpg",
    type: "ADVISER",
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
]

export default function AdvisoryBoardPage() {
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="container px-4 sm:px-6 py-8 sm:py-10 md:py-12 min-h-screen">
            <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-gradient bg-gradient-to-r from-primary via-primary/50 to-primary bg-300% bg-clip-text text-transparent">
                Advisory Board
              </h1>
              <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground animate-fade-in">
                Meet our experienced advisors who guide BGCTUB IT Club towards excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {advisors.slice(0, 4).map((advisor, index) => (
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
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      priority={index < 6}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                  
                  <div className="p-3 sm:p-4 md:p-6 space-y-1.5 sm:space-y-2 md:space-y-4">
                    <div className="space-y-0.5 sm:space-y-1 md:space-y-2 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-300% bg-clip-text text-transparent group-hover:animate-gradient">
                        {advisor.name}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-medium text-primary transition-colors duration-300">{advisor.type}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">{advisor.role}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">{advisor.department}</p>
                    </div>

                    <div className="flex justify-center gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 md:pt-4">
                      {Object.entries(advisor.socials).map(([platform, url], i) => {
                        const IconComponent = {
                          website: Globe,
                          youtube: Youtube,
                          facebook: Facebook,
                          discord: MessageCircle,
                          telegram: Send,
                          instagram: Instagram,
                          linkedin: Linkedin
                        }[platform] || Globe

                        return (
                          <Link 
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                              transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                              touch-manipulation"
                            aria-label={`Visit ${advisor.name}'s ${platform}`}
                          >
                            <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Message Card in the Middle */}
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 dark:from-black/80 dark:via-black/60 dark:to-black/80 shadow-xl shadow-emerald-900/10 flex items-center justify-center p-6 sm:p-8 rounded-lg backdrop-blur-sm
                hover:shadow-2xl hover:shadow-emerald-900/20 hover:border-emerald-900/20
                transform transition-all duration-300 hover:scale-[1.02] animate-fade-up"
              >
                <div className="text-center space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 bg-300% bg-clip-text text-transparent">
                    Guiding the Future
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-100/90 dark:text-emerald-100/80 leading-relaxed">
                    Our esteemed advisors bring together diverse expertise from various departments, 
                    working collaboratively to shape the next generation of IT professionals at BGCTUB.
                  </p>
                  <p className="text-sm sm:text-base text-emerald-400 dark:text-emerald-300 font-medium">
                    Together, we innovate, inspire, and lead.
                  </p>
                </div>
              </Card>

              {advisors.slice(4).map((advisor, index) => (
                <Card 
                  key={index + 4} 
                  className="group relative overflow-hidden border-0 bg-white/5 dark:bg-black/40 shadow-none backdrop-blur-sm
                    hover:shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-900/20 hover:bg-white/10 dark:hover:bg-black/50
                    transform transition-all duration-300 hover:scale-[1.02] animate-fade-up"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  
                  <div className="p-3 sm:p-4 md:p-6 space-y-1.5 sm:space-y-2 md:space-y-4">
                    <div className="space-y-0.5 sm:space-y-1 md:space-y-2 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-300% bg-clip-text text-transparent group-hover:animate-gradient">
                        {advisor.name}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-medium text-primary transition-colors duration-300">{advisor.type}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">{advisor.role}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">{advisor.department}</p>
                    </div>

                    <div className="flex justify-center gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 md:pt-4">
                      {Object.entries(advisor.socials).map(([platform, url], i) => {
                        const IconComponent = {
                          website: Globe,
                          youtube: Youtube,
                          facebook: Facebook,
                          discord: MessageCircle,
                          telegram: Send,
                          instagram: Instagram,
                          linkedin: Linkedin
                        }[platform] || Globe

                        return (
                          <Link 
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="rounded-full bg-primary/5 hover:bg-primary/15 p-1.5 sm:p-2 text-primary
                              transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20
                              touch-manipulation"
                            aria-label={`Visit ${advisor.name}'s ${platform}`}
                          >
                            <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </Link>
                        )
                      })}
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