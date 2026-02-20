"use client"

import { useEffect, useRef, useState } from 'react'
import { Shield, Code, Monitor, Lightbulb, Network, Gamepad, ArrowRight, Code2, Users2, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
 * DESIGN 3: "PRISM" — 3D / Immersive
 * CSS perspective transforms, floating cards, parallax depth layers,
 * isometric-inspired feature grid. Deep purple space aesthetic.
 * Font: Syne (display) + Nunito Sans (body)
 */

const features = [
  { icon: Code2, text: 'Technical Skills', description: 'Learn programming, web development, and cutting-edge technologies.' },
  { icon: Users2, text: 'Community', description: 'Connect with like-minded peers and industry professionals.' },
  { icon: Rocket, text: 'Projects', description: 'Work on real-world projects and build your portfolio.' },
  { icon: Sparkles, text: 'Events', description: 'Participate in workshops, hackathons, and tech talks.' },
]

function PerspectiveGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147,51,234,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147,51,234,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'rotateX(60deg) translateY(-50%)',
          transformOrigin: 'center center',
          height: '200%',
        }}
      />
    </div>
  )
}

function FloatingCard({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ y: -8, rotateY: 5, scale: 1.02 }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Design3() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Nunito+Sans:wght@300;400;500;600;700&display=swap');
        .d3-display { font-family: 'Syne', sans-serif; }
        .d3-body { font-family: 'Nunito Sans', sans-serif; }
      `}</style>
      <div className="flex min-h-screen flex-col d3-body bg-gradient-to-b from-purple-950/30 via-background to-background dark:from-purple-950/50">
        <Navbar />
        <main className="flex-1 overflow-hidden">
          {/* Hero */}
          <section ref={heroRef} className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            <PerspectiveGrid />
            
            {/* Floating geometric shapes */}
            <motion.div
              className="absolute w-64 h-64 border border-purple-500/20 rounded-3xl"
              style={{ top: '15%', right: '15%', transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) rotateX(45deg) rotateZ(45deg)`, transformStyle: 'preserve-3d' }}
              animate={{ rotateZ: [45, 55, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-40 h-40 border border-fuchsia-500/15 rounded-2xl"
              style={{ bottom: '25%', left: '10%', transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px) rotateX(-30deg) rotateZ(20deg)` }}
              animate={{ rotateZ: [20, 30, 20] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-20 h-20 bg-purple-500/10 rounded-xl"
              style={{ top: '30%', left: '20%', transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px) rotateX(20deg) rotateZ(-15deg)` }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
              animate={{ transform: `translate(${mousePos.x * -0.1}px, ${mousePos.y * -0.1}px)` }}>
              
              <motion.div initial={{ opacity: 0, scale: 0.5, rotateY: 180 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, type: 'spring' }} className="mb-8 inline-block" style={{ perspective: '600px' }}>
                <Logo width={100} height={100} priority className="w-20 h-20 sm:w-24 sm:h-24" />
              </motion.div>

              <motion.div initial={{ opacity: 0, z: -100 }} animate={{ opacity: 1, z: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6 inline-block px-5 py-2 rounded-full border border-purple-400/20 bg-purple-500/10 backdrop-blur-md">
                <span className="text-purple-300 text-sm tracking-[0.4em] uppercase d3-display font-semibold">Hack the Future</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 60, rotateX: 20 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.4, type: 'spring' }}
                className="d3-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.95]"
                style={{ perspective: '800px' }}>
                Welcome to{' '}
                <span className="bg-gradient-to-br from-purple-300 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                  BGCTUB IT Club
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center">
                <Link href="/join">
                  <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-2xl shadow-purple-500/30 d3-display font-semibold rounded-xl px-8">
                    Join Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/activities">
                  <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 d3-display rounded-xl px-8">
                    Explore Activities
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </section>

          {/* Features — Isometric-style floating cards */}
          <section className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ perspective: '1200px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <FloatingCard key={f.text} delay={i * 0.15}>
                  <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-violet-500/10 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/30 transition-all relative overflow-hidden h-full"
                    style={{ boxShadow: '0 25px 50px -12px rgba(147,51,234,0.1), 0 0 0 1px rgba(147,51,234,0.05)' }}>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/15 transition-all" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                        style={{ boxShadow: '0 8px 32px rgba(147,51,234,0.15)' }}>
                        <f.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 d3-display">{f.text}</h3>
                      <p className="text-muted-foreground text-sm">{f.description}</p>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 lg:py-28 relative" style={{ perspective: '1200px' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div initial={{ opacity: 0, rotateX: 10 }} whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }} className="text-center mb-16">
                <h2 className="d3-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                  <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">Our Purpose</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-10">
                <FloatingCard delay={0}>
                  <div className="h-full p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-purple-500/5 to-violet-500/10 border border-purple-500/10 hover:border-purple-500/25 transition-all"
                    style={{ boxShadow: '0 30px 60px -15px rgba(147,51,234,0.1)' }}>
                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                      <Rocket className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-400 d3-display">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
                    </p>
                  </div>
                </FloatingCard>

                <FloatingCard delay={0.15}>
                  <div className="h-full p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/10 border border-violet-500/10 hover:border-violet-500/25 transition-all"
                    style={{ boxShadow: '0 30px 60px -15px rgba(139,92,246,0.1)' }}>
                    <div className="w-14 h-14 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-violet-400 d3-display">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
                    </p>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ perspective: '1200px' }}>
            <FloatingCard>
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/20"
                style={{ boxShadow: '0 40px 80px -20px rgba(147,51,234,0.15)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-violet-600/10 to-fuchsia-600/15" />
                <PerspectiveGrid />
                <div className="relative p-8 sm:p-12 lg:p-20 text-center">
                  <h2 className="d3-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Ready to Start Your Journey?</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/join">
                      <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-2xl shadow-purple-500/30 d3-display font-semibold rounded-xl px-8">
                        Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 d3-display rounded-xl px-8">
                        Sign In <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </section>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}
