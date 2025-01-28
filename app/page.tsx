"use client"

import { useEffect, useRef, Suspense, useCallback } from 'react'
import { Shield, Code, Monitor, Lightbulb, Network, Gamepad, ArrowRight, Code2, Users2, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { MemberSpotlight, MemberSpotlightSkeleton } from '@/components/member-spotlight'
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"
import Image from "next/image"
import { Globe } from '@/components/ui/globe'

const features = [
  {
    icon: Shield,
    text: 'CyberSecurity',
    description: 'Learn ethical hacking, penetration testing, and security fundamentals',
    link: '/activities#cybersecurity'
  },
  {
    icon: Code,
    text: 'Programming',
    description: 'Master coding with hands-on projects and competitive programming',
    link: '/activities#programming'
  },
  {
    icon: Monitor,
    text: 'Web Development',
    description: 'Build modern web applications with cutting-edge technologies',
    link: '/activities#web-development'
  },
  {
    icon: Lightbulb,
    text: 'Tech Innovations',
    description: 'Transform ideas into reality through innovation and technology',
    link: '/activities#innovations'
  },
  {
    icon: Network,
    text: 'Graphics Design',
    description: 'Create stunning visual designs and master creative tools',
    link: '/activities#design'
  },
  {
    icon: Gamepad,
    text: 'E-Sports',
    description: 'Compete in gaming tournaments and build gaming communities',
    link: '/activities#esports'
  },
]

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  const createMatrix = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.fillStyle = theme === 'dark' 
      ? 'rgba(0, 20, 0, 0.05)' 
      : 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = 'hsl(142, 76%, 36%)' // Always green for matrix characters

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = new Array(columns).fill(0)

    const characters = '01BGCTUBILK'
    ctx.font = '15px monospace'

    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)]
      ctx.fillText(text, i * 20, drops[i] * 20)
      drops[i]++

      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
    }
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    const interval = setInterval(() => createMatrix(ctx, canvas), 50)
    window.addEventListener('resize', setCanvasSize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [createMatrix])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-60" />
        
        {/* Matrix Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30"
          style={{ mixBlendMode: 'overlay' }}
        />

        <div className="w-full h-full relative z-10">
          <div className="w-full h-full flex items-center">
            <div className="w-full grid lg:grid-cols-2 items-center">
              <div className="flex flex-col space-y-6 text-center lg:text-left max-w-3xl mx-auto lg:ml-[10%]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-fade-up">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/50 to-primary bg-300% bg-clip-text text-transparent animate-gradient">
                    BGCTUB IT Club
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground animate-fade-up [animation-delay:200ms] max-w-xl">
                  Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up [animation-delay:400ms]">
                  <Link href="/join">
                    <Button size="lg" className="group">
                      Join Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/activities">
                    <Button size="lg" variant="outline">
                      Explore Activities
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] animate-fade-up [animation-delay:600ms]">
                <div className="absolute right-[-45%] top-[58%] -translate-y-1/2 w-[150%] aspect-auto">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20 scale-95" />
                  <Globe size={600} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up [animation-delay:800ms]">
            <div className="group p-6 bg-card/50 hover:bg-card/80 rounded-xl border border-border/50 transition-all hover:scale-105">
              <div className="rounded-full w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p className="text-muted-foreground">Learn programming, web development, and cutting-edge technologies.</p>
            </div>
            <div className="group p-6 bg-card/50 hover:bg-card/80 rounded-xl border border-border/50 transition-all hover:scale-105">
              <div className="rounded-full w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">Connect with like-minded peers and industry professionals.</p>
            </div>
            <div className="group p-6 bg-card/50 hover:bg-card/80 rounded-xl border border-border/50 transition-all hover:scale-105">
              <div className="rounded-full w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-muted-foreground">Work on real-world projects and build your portfolio.</p>
            </div>
            <div className="group p-6 bg-card/50 hover:bg-card/80 rounded-xl border border-border/50 transition-all hover:scale-105">
              <div className="rounded-full w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-muted-foreground">Participate in workshops, hackathons, and tech talks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up">Ready to Start Your Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
                Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
              </p>
              <Link href="/join" className="animate-fade-up [animation-delay:400ms] inline-block">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}