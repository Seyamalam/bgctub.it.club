import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface InitiativesCardProps {
  title: string
  description: string
  image: string
  link: string
  className?: string
}

export function InitiativesCard({
  title,
  description,
  image,
  link,
  className
}: InitiativesCardProps) {
  return (
    <Link href={link}>
      <Card className={cn("group overflow-hidden transition-all hover:shadow-lg", className)}>
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}