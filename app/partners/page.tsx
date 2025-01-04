import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const partners = [
  {
    name: "Microsoft Learn Student Ambassadors",
    subtitle: "BGCTUB Chapter",
    description: "The Microsoft Learn Student Ambassador program is a global initiative that empowers students who are passionate about technology to become leaders. Students gain access to exclusive resources, mentorship, and training on Microsoft technologies. Organize workshops, hackathons, and events to share their knowledge, inspire others, and build technical skills within their universities. Ambassadors also collaborate with like-minded peers, network with industry professionals, and contribute to real-world projects. This program fosters leadership, technical expertise, and community engagement, helping students develop a strong foundation for future careers in the tech industry.",
    logo: "/images/partner/Microsoft Learn Student Ambassadors - Bgctub Chapter.svg",
    website: "https://mvp.microsoft.com/studentambassadors",
    type: "GLOBAL PARTNER",
    darkLogo: true
  },
  {
    name: "BASIS Student's Forum",
    subtitle: "BGCTUB Chapter",
    description: "BASIS Students' Forum (BSF) is an initiative by the Bangladesh Association of Software and Information Services (BASIS) to nurture future tech leaders. It connects university students with the IT industry through workshops, seminars, hackathons, and competitions. BSF bridges the gap between academic learning and industry needs, providing mentorship, hands-on experience, and leadership opportunities. It also promotes innovation by encouraging participation in global competitions like the NASA Space Apps Challenge. Through BSF, students develop essential skills to thrive in the global tech landscape and excel in their future careers.",
    logo: "/images/partner/basis.png",
    website: "https://basis.org.bd/student-forum",
    type: "NATIONAL PARTNER",
    darkLogo: true,
    noPadding: true
  }
]

export default function PartnersPage() {
  return (
    <div className="container py-12 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
          Partners
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Meet our valued partners who support and collaborate with BGCTUB IT Club to empower students in technology
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <Card key={index} className="group relative overflow-hidden border-0 bg-white dark:bg-black/40 shadow-none transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm p-8 rounded-lg">
            <div className={cn(
              "relative aspect-[3/2] w-full overflow-hidden rounded-lg mb-8",
              partner.darkLogo ? "bg-white" : "bg-black"
            )}>
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className={cn(
                  "object-contain",
                  partner.noPadding ? "" : "p-6",
                  partner.darkLogo ? "" : "filter brightness-0 invert"
                )}
                priority
              />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                  {partner.name}
                </h3>
                <p className="text-lg font-medium text-primary">{partner.subtitle}</p>
                <p className="text-sm font-medium text-primary/80 mb-4">{partner.type}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="flex justify-center gap-2 pt-6">
                  <Link 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="rounded-full bg-primary/10 hover:bg-primary/20 px-6 py-2 text-primary flex items-center gap-2 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Visit Website</span>
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