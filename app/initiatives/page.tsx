import { InitiativesCard } from "@/components/initiatives-card"

const initiatives = [
  {
    title: "Microsoft Learn Student Ambassador",
    description: "BGCTUB Chapter - Empowering students with Microsoft technologies",
    image: "/images/mlsa.png",
    link: "/initiatives/mlsa"
  },
  {
    title: "BitRooT",
    description: "Exploring the fundamentals of computer science and programming",
    image: "/images/bitroot.png",
    link: "/initiatives/bitroot"
  },
  {
    title: "BitSec",
    description: "Cybersecurity research and learning initiative",
    image: "/images/bitsec.png",
    link: "/initiatives/bitsec"
  },
  {
    title: "FlagHunt x Bangladesh Army",
    description: "Collaborative cybersecurity training program",
    image: "/images/flaghunt.png",
    link: "/initiatives/flaghunt"
  },
  {
    title: "BASIS Student's Forum",
    description: "BGCTUB Chapter - Industry connections and practical experience",
    image: "/images/basis.png",
    link: "/initiatives/basis"
  },
  {
    title: "NASA Space Apps",
    description: "International space and science hackathon",
    image: "/images/nasa.png",
    link: "/initiatives/nasa"
  }
]

export default function InitiativesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold animate-fade-down">Our Initiatives</h1>
        <p className="mb-8 text-lg text-muted-foreground animate-fade-up">
          Discover our partnerships and programs that drive innovation
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((initiative, index) => (
          <div key={initiative.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <InitiativesCard {...initiative} />
          </div>
        ))}
      </div>
    </div>
  )
}