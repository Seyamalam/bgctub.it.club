import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const advisors = [
  {
    name: "Dr. John Smith",
    role: "Technical Advisor",
    image: "",
    expertise: "Cybersecurity & Programming",
    description: "Provides guidance on technical initiatives and cybersecurity programs"
  },
  {
    name: "Prof. Sarah Johnson",
    role: "Academic Advisor",
    image: "",
    expertise: "Computer Science Education",
    description: "Guides curriculum development and academic programs"
  },
  {
    name: "Dr. Michael Chen",
    role: "Research Advisor",
    image: "",
    expertise: "AI & Machine Learning",
    description: "Leads research initiatives and innovation projects"
  },
  {
    name: "Eng. Lisa Anderson",
    role: "Industry Advisor",
    image: "",
    expertise: "Software Engineering",
    description: "Provides industry insights and career guidance"
  },
  {
    name: "Dr. David Wilson",
    role: "Strategic Advisor",
    image: "",
    expertise: "Technology Management",
    description: "Advises on strategic planning and growth"
  },
  {
    name: "Prof. Emma Martinez",
    role: "Innovation Advisor",
    image: "",
    expertise: "Digital Innovation",
    description: "Guides innovation and entrepreneurship initiatives"
  }
]

export default function AdvisoryBoardPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Advisory Board</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Meet our experienced advisors who guide BGCTUB IT Club towards excellence
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {advisors.map((advisor, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="text-center">
              <Avatar className="mx-auto h-24 w-24">
                <AvatarImage src={advisor.image} alt={advisor.name} />
                <AvatarFallback>{advisor.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-xl font-semibold">{advisor.name}</h3>
              <p className="text-sm text-muted-foreground">{advisor.role}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-medium">Expertise: {advisor.expertise}</p>
              <p className="text-sm text-muted-foreground">{advisor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}