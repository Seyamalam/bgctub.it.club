"use client"

import { useEffect, useRef, useCallback, useState } from 'react'
import { Shield, Code, Monitor, Lightbulb, Network, Gamepad, ArrowRight, Code2, Users2, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { SplineScene } from '@/components/ui/splite'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'
import HackTheFuture from '@/components/hack-the-future'


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
  const animationRef = useRef<number>(0)
  const { theme } = useTheme()
  const [showSpline, setShowSpline] = useState(false)

  useEffect(() => {
    // Only load Spline on large screens to save bandwidth/performance on mobile
    const checkScreen = () => {
      setShowSpline(window.innerWidth >= 1024) // lg breakpoint
    }
    
    // Check initially
    checkScreen()
    
    // Debounced resize handler could be better but this is simple enough for one boolean
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkScreen, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  const createMatrix = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, drops: number[]) => {
    ctx.fillStyle = theme === 'dark' 
      ? 'rgba(0, 20, 0, 0.05)' 
      : 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = 'hsl(142, 76%, 36%)' // Always green for matrix characters
    const characters = '01BGCTUBILK'
    ctx.font = '15px monospace'

    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)]
      ctx.fillText(text, i * 20, drops[i] * 20)
      
      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let drops: number[] = []

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const columns = Math.floor(canvas.width / 20)
      drops = new Array(columns).fill(1)
    }
    setCanvasSize()

    let lastTime = 0
    const fps = 30
    const interval = 1000 / fps

    const animate = (currentTime: number) => {
      if (currentTime - lastTime > interval) {
        createMatrix(ctx, canvas, drops)
        lastTime = currentTime
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    window.addEventListener('resize', setCanvasSize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [createMatrix])

  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
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
              <div className="w-full h-full grid lg:grid-cols-2 items-center">
                {/* Left content */}
                <div className="flex flex-col justify-center px-6 py-12 lg:px-16 space-y-6 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-6 mb-4">
                    <Logo width={120} height={120} priority className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
                    <div className="hidden lg:block">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-fade-up">
                        Welcome to{' '}
                        <span className="bg-gradient-to-r from-primary via-primary/50 to-primary bg-300% bg-clip-text text-transparent animate-gradient">
                          BGCTUB IT Club
                        </span>
                      </h1>
                    </div>
                  </div>
                  <HackTheFuture />
                  <div className="lg:hidden">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-fade-up">
                      Welcome to{' '}
                      <span className="bg-gradient-to-r from-primary via-primary/50 to-primary bg-300% bg-clip-text text-transparent animate-gradient">
                        BGCTUB IT Club
                      </span>
                    </h1>
                  </div>
                  <p className="text-lg sm:text-xl text-muted-foreground animate-fade-up [animation-delay:200ms] max-w-xl mx-auto lg:mx-0">
                    Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms] justify-center lg:justify-start">
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

                {/* Right content - Robot */}
                <div className="hidden lg:block relative w-[100%] h-[100vh] -right-[-15%] -top-[5vh]">
                  {showSpline && (
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full scale-100"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 lg:py-20 relative">
            <div className="container px-4 lg:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up [animation-delay:800ms]">
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
{/* Mission & Vision Section */}
<section className="py-12 lg:py-20 relative bg-gradient-to-br from-primary/5 via-background to-secondary/5">
  <div className="container px-4 lg:px-6">
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">
        <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-300% bg-clip-text text-transparent animate-gradient">
          Our Purpose
        </span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up [animation-delay:200ms]">
        Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
      </p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Mission */}
      <div className="group p-8 lg:p-12 bg-card/50 hover:bg-card/80 rounded-2xl border border-border/50 transition-all hover:scale-105 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <div className="rounded-full w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Rocket className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
          </p>
        </div>
      </div>
      
      {/* Vision */}
      <div className="group p-8 lg:p-12 bg-card/50 hover:bg-card/80 rounded-2xl border border-border/50 transition-all hover:scale-105 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <div className="rounded-full w-16 h-16 bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Lightbulb className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* CTA Section */}
          <section className="py-12 lg:py-20 relative px-4 lg:px-6">
            <div className="container">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
                <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 animate-fade-up">Ready to Start Your Journey?</h2>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
                    Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
                  </p>
                  <Link href="/join" className="animate-fade-up [animation-delay:400ms] inline-block">
                    <Button size="lg" className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/login" className="animate-fade-up [animation-delay:400ms] inline-block ml-4">
                    <Button size="lg" variant="outline" className="group">
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}