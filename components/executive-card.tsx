import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ExecutiveCardProps {
  name: string
  role: string
  department: string
  image: string
  badges: string[]
  className?: string
}

export function ExecutiveCard({
  name,
  role,
  department,
  image,
  badges,
  className
}: ExecutiveCardProps) {
  return (
    <Card className={cn("group overflow-hidden transition-all hover:shadow-lg", className)}>
      <CardHeader className="text-center">
        <Avatar className="mx-auto h-24 w-24 ring-2 ring-primary">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h3 className="mt-4 text-xl font-bold">{name}</h3>
        <p className="text-sm text-primary">{role}</p>
        <p className="text-sm text-muted-foreground">{department}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}