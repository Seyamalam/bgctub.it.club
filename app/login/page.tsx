"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Success",
        description: "Signed in successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("signup-email") as string
    const password = formData.get("signup-password") as string

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast({
          title: "Error",
          description: data.error || "Something went wrong",
          variant: "destructive",
        })
        return
      }

      // Sign in the user after successful registration
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast({
          title: "Error",
          description: "Failed to sign in after registration",
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Success",
        description: "Account created and signed in successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      
      <div className="relative hidden h-full flex-col bg-zinc-950 p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%,_var(--tw-gradient-stops))] from-green-500/10 via-green-950/30 to-zinc-950" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff05_1px,_transparent_1px),_linear-gradient(to_bottom,_#ffffff05_1px,_transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="relative z-20">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">BGCTUB IT Club</h1>
            <p className="text-green-400">Innovate • Create • Collaborate</p>
          </div>
        </div>

        <div className="relative z-20 mt-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Why Join Us?</h3>
            <ul className="space-y-4 text-base text-zinc-300">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                Access to cutting-edge tech workshops
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                Network with industry professionals
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                Hands-on project experience
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                Competitive programming challenges
              </li>
            </ul>
          </div>

          <blockquote className="space-y-2 border-l-2 border-green-500 pl-4">
            <p className="text-lg italic text-zinc-300">
              "Technology is best when it brings people together."
            </p>
            <footer className="text-sm text-zinc-400">
              - Matt Mullenweg
            </footer>
          </blockquote>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>
      
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Enter your email and password to sign in to your account
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSignIn}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Sign Up</CardTitle>
                  <CardDescription>
                    Create a new account to join our community
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSignUp}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        name="signup-email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        name="signup-password"
                        type="password"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 