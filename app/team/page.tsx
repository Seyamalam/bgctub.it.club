"use client"

import { ExecutiveCard } from "@/components/executive-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const executives = {
  tech: [
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
    {
      name: "Tech Lead Name",
      role: "Technical Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Full Stack", "DevOps", "Cloud"]
    },
  ],
  hr: [
    {
      name: "HR Lead Name",
      role: "HR Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Recruitment", "Training", "Development"]
    },
    {
      name: "HR Lead Name",
      role: "HR Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Recruitment", "Training", "Development"]
    },
    {
      name: "HR Lead Name",
      role: "HR Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Recruitment", "Training", "Development"]
    },
    {
      name: "HR Lead Name",
      role: "HR Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Recruitment", "Training", "Development"]
    }
  ],
  events: [
    {
      name: "Event Lead Name",
      role: "Event Management Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Planning", "Coordination", "Execution"]
    },
    {
      name: "Event Lead Name",
      role: "Event Management Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Planning", "Coordination", "Execution"]
    },
    {
      name: "Event Lead Name",
      role: "Event Management Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Planning", "Coordination", "Execution"]
    },
    {
      name: "Event Lead Name",
      role: "Event Management Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Planning", "Coordination", "Execution"]
    },
    {
      name: "Event Lead Name",
      role: "Event Management Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Planning", "Coordination", "Execution"]
    },
    {
      name: "Event Lead Name",
      role: "Event Management Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Planning", "Coordination", "Execution"]
    }
  ],
  pr: [
    {
      name: "PR Lead Name",
      role: "Public Relations Lead",
      department: "Journalism & Media Studies",
      image: "",
      badges: ["Communication", "Media", "Outreach"]
    },
    {
      name: "PR Lead Name",
      role: "Public Relations Lead",
      department: "Journalism & Media Studies",
      image: "",
      badges: ["Communication", "Media", "Outreach"]
    },
    {
      name: "PR Lead Name",
      role: "Public Relations Lead",
      department: "Journalism & Media Studies",
      image: "",
      badges: ["Communication", "Media", "Outreach"]
    },
    {
      name: "PR Lead Name",
      role: "Public Relations Lead",
      department: "Journalism & Media Studies",
      image: "",
      badges: ["Communication", "Media", "Outreach"]
    },
    {
      name: "PR Lead Name",
      role: "Public Relations Lead",
      department: "Journalism & Media Studies",
      image: "",
      badges: ["Communication", "Media", "Outreach"]
    }
  ],
  marketing: [
    {
      name: "Marketing Lead Name",
      role: "Marketing Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Strategy", "Digital", "Branding"]
    },
    {
      name: "Marketing Lead Name",
      role: "Marketing Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Strategy", "Digital", "Branding"]
    },
    {
      name: "Marketing Lead Name",
      role: "Marketing Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Strategy", "Digital", "Branding"]
    },
    {
      name: "Marketing Lead Name",
      role: "Marketing Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Strategy", "Digital", "Branding"]
    },
    {
      name: "Marketing Lead Name",
      role: "Marketing Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Strategy", "Digital", "Branding"]
    }
  ],
  finance: [
    {
      name: "Soumya Mallik",
      role: "Finance Team Lead",
      department: "Computer Science & Engineering",
      image: "",
      badges: ["Budget", "Planning", "Analysis"]
    },
    {
      name: "Finance Lead Name",
      role: "Finance Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Budget", "Planning", "Analysis"]
    },
    {
      name: "Finance Lead Name",
      role: "Finance Team Lead",
      department: "Business Administration",
      image: "",
      badges: ["Budget", "Planning", "Analysis"]
    }
  ]
}

export default function TeamPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold animate-fade-down">Executive Committee</h1>
        <p className="mb-8 text-lg text-muted-foreground animate-fade-up">
          Meet our dedicated team members who make BGCTUB IT Club possible
        </p>
      </div>

      <Tabs defaultValue="tech" className="mx-auto max-w-5xl animate-fade-in">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="tech">Technical</TabsTrigger>
          <TabsTrigger value="hr">HR</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="pr">PR</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>
        {Object.entries(executives).map(([key, members]) => (
          <TabsContent key={key} value={key}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-14">
              {members.map((member, index) => (
                <div key={member.name} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ExecutiveCard {...member} />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}