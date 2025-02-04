import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqItems = [
  {
    question: "What is the BGCTUB IT Club, and what does it offer?",
    answer: "The BGCTUB IT Club is a platform dedicated to fostering collaboration, learning, and engagement in Information Technology at BGC Trust University Bangladesh. It offers students the opportunity to explore topics like Cybersecurity, Programming, Web Development, Graphics Design, Computer Networking, Cloud Computing, Linux Fundamentals, and more."
  },
  {
    question: "Who can join the IT Club?",
    answer: "Any student from any academic background at BGC Trust University Bangladesh can join the IT Club. Whether you're a beginner or an advanced learner, you are welcome to explore and enhance your IT skills."
  },
  {
    question: "How can I join the BGCTUB IT Club?",
    answer: "Joining is simple! Just fill out the IT Club Joining Form available through the club's portal or reach out to the club's executive members for more information."
  },
  {
    question: "What kind of activities does the IT Club organize?",
    answer: "The IT Club organizes workshops, webinars, hands-on training sessions, and competitive contests, all aimed at building technical skills, promoting teamwork, and preparing students for both national and global competitions."
  },
  {
    question: "What are the key sections under the IT Club?",
    answer: "The club includes three core sections:\n\n• CTF Community: Focuses on cybersecurity and hacking challenges.\n• Microsoft Learn Ambassador Community: Provides access to Microsoft resources and global learning programs.\n• BASIS Student's Forum: For connecting with industry and leadership opportunities in IT."
  },
  {
    question: "Do I need prior IT knowledge to join the club or participate in activities?",
    answer: "No prior knowledge is required. The IT Club provides learning opportunities for students at all skill levels, so you can start from scratch or build on your existing knowledge."
  },
  {
    question: "What benefits can I gain by joining the IT Club?",
    answer: "You will develop valuable IT skills, participate in global competitions, connect with industry professionals, and gain access to career guidance and internship opportunities, all while enhancing your resume for future job prospects."
  }
]

export default function FaqPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold animate-fade-down">
              Frequently Asked Questions
            </h1>
            <p className="mb-8 text-lg text-muted-foreground animate-fade-up">
              Find answers to common questions about BGCTUB IT Club
            </p>
          </div>

          <Card className="mx-auto max-w-3xl animate-fade-up glass-effect">
            <Accordion type="single" collapsible className="p-2 sm:p-6">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="hover-card-effect px-2 sm:px-4 rounded-lg my-2"
                >
                  <AccordionTrigger className="text-left hover:text-primary text-sm sm:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  )
} 