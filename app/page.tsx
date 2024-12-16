"use client"

import { useEffect, useRef, Suspense, useCallback } from 'react'
import { Shield, Code, Monitor, Lightbulb, Network, Gamepad, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { MemberSpotlight, MemberSpotlightSkeleton } from '@/components/member-spotlight'
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

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
      ? 'rgba(0, 0, 0, 0.05)' 
      : 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = theme === 'dark'
      ? 'hsl(217, 91%, 60%)' // Blue for dark mode
      : 'hsl(142, 76%, 36%)' // Green for light mode

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
    <div className="relative min-h-screen overflow-hidden">
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6 max-w-3xl">
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/10">
                <div className="w-24 h-24 md:w-32 md:h-32 relative animate-pulse">
                  {/* Your logo SVG with gradient */}
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="60" height="60" className="stroke-primary" strokeWidth="4" />
                    <path d="M40 40 L40 60 L60 60" className="stroke-primary" strokeWidth="4" />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                BGCTUB IT CLUB
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Innovate • Learn • Grow
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  <Link href="/join">
                    Join Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Link key={index} href={feature.link}>
                    <Card className="p-6 hover-card-effect glass-effect group cursor-pointer">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                          <feature.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                          {feature.text}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}