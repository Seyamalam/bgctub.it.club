"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Mail } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Here you would typically send the email to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      toast.success("Successfully subscribed to newsletter!")
      setEmail("")
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full p-6 glass-effect rounded-lg">
      <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Stay updated with our latest news, events, and tech insights.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="email"
            placeholder="Enter your email"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  )
} 