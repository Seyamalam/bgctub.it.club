import { Card } from "@/components/ui/card"
import Image from "next/image"

const newsItems = [
  {
    title: "Example News Title",
    image: "/images/news/example.jpg", // You'll need to add actual images
    publishedAt: "2024-01-04",
    source: "The Daily Star",
    description: "Detailed description of the news article and its significance for the club.",
  },
  // Add more news items here
]

export default function NewsPage() {
  return (
    <div className="container py-12 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
          News Coverage
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Media coverage and achievements of BGCTUB IT Club
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {newsItems.map((item, index) => (
          <Card key={index} className="overflow-hidden border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Published on: {new Date(item.publishedAt).toLocaleDateString()}</span>
                <span>Source: {item.source}</span>
              </div>
              
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                {item.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 