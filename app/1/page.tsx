"use client"

import { useEffect, useRef, useCallback, useState } from 'react'
import { Shield, Code, Monitor, Lightbulb, Network, Gamepad, ArrowRight, Code2, Users2, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'
import { motion } from 'framer-motion'

/*
 * DESIGN 1: "AURORA" — Cool/Sleek Purple
 * Glass morphism, neon purple glow, floating orbs, smooth gradients.
 * Font: Outfit (display) + DM Sans (body)
 */

const features = [
  { icon: Code2, text: 'Technical Skills', description: 'Learn programming, web development, and cutting-edge technologies.' },
  { icon: Users2, text: 'Community', description: 'Connect with like-minded peers and industry professionals.' },
  { icon: Rocket, text: 'Projects', description: 'Work on real-world projects and build your portfolio.' },
  { icon: Sparkles, text: 'Events', description: 'Participate in workshops, hackathons, and tech talks.' },
]

const activities = [
  { icon: Shield, text: 'CyberSecurity', description: 'Learn ethical hacking, penetration testing, and security fundamentals' },
  { icon: Code, text: 'Programming', description: 'Master coding with hands-on projects and competitive programming' },
  { icon: Monitor, text: 'Web Development', description: 'Build modern web applications with cutting-edge technologies' },
  { icon: Lightbulb, text: 'Tech Innovations', description: 'Transform ideas into reality through innovation and technology' },
  { icon: Network, text: 'Graphics Design', description: 'Create stunning visual designs and master creative tools' },
  { icon: Gamepad, text: 'E-Sports', description: 'Compete in gaming tournaments and build gaming communities' },
]

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, transparent 70%)', top: '-10%', right: '-10%' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 70%)', bottom: '10%', left: '-5%' }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)', top: '40%', left: '50%' }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function Design1() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const { theme } = useTheme()

  const createMatrix = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, drops: number[]) => {
    ctx.fillStyle = theme === 'dark' ? 'rgba(10, 0, 20, 0.05)' : 'rgba(255, 255, 255, 0.15)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'hsl(270, 76%, 50%)'
    const characters = '01BGCTUBILK'
    ctx.font = '14px monospace'
    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)]
      ctx.fillText(text, i * 20, drops[i] * 20)
      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0
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
      drops = new Array(Math.floor(canvas.width / 20)).fill(1)
    }
    setCanvasSize()
    let lastTime = 0
    const animate = (currentTime: number) => {
      if (currentTime - lastTime > 33) { createMatrix(ctx, canvas, drops); lastTime = currentTime }
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    window.addEventListener('resize', setCanvasSize)
    return () => { cancelAnimationFrame(animationRef.current); window.removeEventListener('resize', setCanvasSize) }
  }, [createMatrix])

  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .design1-heading { font-family: 'Outfit', sans-serif; }
        .design1-body { font-family: 'DM Sans', sans-serif; }
      `}</style>
      <div className="flex min-h-screen flex-col design1-body">
        <Navbar />
        <main className="flex-1 relative">
          {/* Hero */}
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            <FloatingOrbs />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20 dark:mix-blend-screen mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100/60 dark:from-purple-900/10 via-transparent to-purple-100/40 dark:to-purple-950/20" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center justify-center mb-8">
                <Logo width={100} height={100} priority className="w-20 h-20 sm:w-24 sm:h-24" />
              </motion.div>
              
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 dark:bg-purple-500/10 backdrop-blur-sm">
                <span className="text-purple-700 dark:text-purple-300 text-sm font-medium tracking-widest uppercase design1-heading">Hack the Future</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="design1-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95]">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent" style={{ textShadow: 'none' }}>
                  BGCTUB IT Club
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4 justify-center">
                <Link href="/join">
                  <Button size="lg" className="group bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25 design1-heading font-semibold">
                    Join Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/activities">
                  <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 design1-heading">
                    Explore Activities
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 lg:py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.text} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  className="group p-6 rounded-2xl border border-purple-500/10 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="rounded-xl w-12 h-12 bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 design1-heading">{f.text}</h3>
                  <p className="text-muted-foreground text-sm">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 lg:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-violet-900/5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-center mb-16">
                <h2 className="design1-heading text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Our Purpose</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="group p-8 lg:p-12 rounded-2xl border border-purple-500/10 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
                  <div className="relative">
                    <div className="rounded-xl w-14 h-14 bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                      <Rocket className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400 design1-heading">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="group p-8 lg:p-12 rounded-2xl border border-violet-500/10 bg-violet-500/5 backdrop-blur-sm hover:bg-violet-500/10 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all" />
                  <div className="relative">
                    <div className="rounded-xl w-14 h-14 bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-violet-700 dark:text-violet-400 design1-heading">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-violet-600/15 to-fuchsia-600/20" />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.15) 0%, transparent 70%)' }} />
              <div className="relative p-8 sm:p-12 lg:p-16 text-center">
                <h2 className="design1-heading text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Ready to Start Your Journey?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/join">
                    <Button size="lg" className="group bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25 design1-heading font-semibold">
                      Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 design1-heading">
                      Sign In <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}
