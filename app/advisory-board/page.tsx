import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Globe, Youtube, Facebook, MessageCircle, Send, Instagram, Linkedin } from "lucide-react"

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
    <div className="container py-12 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Advisory Board
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Meet our experienced advisors who guide BGCTUB IT Club towards excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.slice(0, 4).map((advisor, index) => (
          <Card key={index} className="group relative overflow-hidden border-0 bg-transparent shadow-none transition-all duration-300 hover:scale-105">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src={advisor.image}
                alt={advisor.name}
                fill
                className="object-cover"
                priority={index < 6}
              />
            </div>
            
            <div className="mt-4 space-y-3 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-emerald-400">{advisor.type}</p>
                  <p className="text-sm text-emerald-300">{advisor.role}</p>
                  <p className="text-sm text-emerald-300">{advisor.department}</p>
                </div>
                
                <div className="flex justify-center gap-2 pt-2">
                  <Link href={advisor.socials.website} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Globe className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.youtube} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Youtube className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.facebook} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.discord} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.telegram} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Send className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.instagram} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.linkedin} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Message Card in the Middle */}
        <Card className="relative overflow-hidden border-0 bg-black/40 shadow-none flex items-center justify-center p-8 rounded-lg backdrop-blur-sm">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Guiding the Future
            </h3>
            <p className="text-emerald-300 leading-relaxed">
              Our esteemed advisors bring together diverse expertise from various departments, 
              working collaboratively to shape the next generation of IT professionals at BGCTUB.
            </p>
            <p className="text-emerald-400 font-medium">
              Together, we innovate, inspire, and lead.
            </p>
          </div>
        </Card>

        {advisors.slice(4).map((advisor, index) => (
          <Card key={index + 4} className="group relative overflow-hidden border-0 bg-transparent shadow-none transition-all duration-300 hover:scale-105">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src={advisor.image}
                alt={advisor.name}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </div>
            
            <div className="mt-4 space-y-3 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-emerald-400">{advisor.type}</p>
                  <p className="text-sm text-emerald-300">{advisor.role}</p>
                  <p className="text-sm text-emerald-300">{advisor.department}</p>
                </div>
                
                <div className="flex justify-center gap-2 pt-2">
                  <Link href={advisor.socials.website} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Globe className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.youtube} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Youtube className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.facebook} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.discord} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.telegram} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Send className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.instagram} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link href={advisor.socials.linkedin} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}