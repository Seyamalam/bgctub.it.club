import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const advisors = [
  {
    name: "Mohammad Salahuddin Chowdhury",
    role: "Chief Adviser",
    designation: "Assistant Professor",
    department: "Computer Science & Engineering",
    image: "",
  },
  {
    name: "Farhana Nasrin",
      role: "Adviser",
    designation: "Assistant Professor",
    department: "Business Administration",
    image: "",
  },
  {
    name: " Md. Towhidul Islam Jihadi",
    role: "Adviser",
    designation: "Lecturer",
    department: "Law",
    image: "",
  },
  {
    name: "Ms. Rezuana Haque",
    role: "Adviser",
    designation: "Lecturer",
    department: "Computer Science & Engineering",
    image: "",
  },
  {
    name: " Misbah Uddin Emran",
    role: "Adviser",
    designation: "Lecturer",
    department: "Computer Science & Engineering",
    image: "",
  },
  {
    name: "Sarwar Kamal",
    role: "Adviser",
    designation: "Lecturer",
    department: "Journalism & Media Studies",
    image: "",
  },
  {
    name: "Ms. Kazi Sanjida Tahrim",
    role: "Adviser",
    designation: "Lecturer",
    department: "Pharmacy",
    image: "",
  },
  {
    name: "Mohammad Imran Uddin Chowdhury",
    role: "Adviser",
    designation: "Lecturer",
    department: "English",
    image: "",
  },
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
              <p className="mb-2 font-medium">Department: {advisor.department}</p>
              <p className="mb-2 font-medium">Designation: {advisor.designation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}