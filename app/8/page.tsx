"use client"

import { useEffect, useRef, useCallback, useState } from 'react'
import { ArrowRight, Code2, Users2, Rocket, Sparkles, Lightbulb, Shield, Code, Monitor, Network, Gamepad, Zap } from 'lucide-react'
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
 * DESIGN 8: "SYNTHWAVE" — Retro-Futuristic
 * Neon purple/pink on dark, 80s grid floor, chrome text, CRT glow,
 * synthwave sunset, retro-futuristic vibes. Vaporwave meets cyberpunk.
 * Font: Orbitron (display) + Exo 2 (body)
 */

const features = [
  { icon: Code2, text: 'Technical Skills', description: 'Learn programming, web development, and cutting-edge technologies.' },
  { icon: Users2, text: 'Community', description: 'Connect with like-minded peers and industry professionals.' },
  { icon: Rocket, text: 'Projects', description: 'Work on real-world projects and build your portfolio.' },
  { icon: Sparkles, text: 'Events', description: 'Participate in workshops, hackathons, and tech talks.' },
]

function RetroGrid() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[40vh] overflow-hidden pointer-events-none" style={{ perspective: '500px' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'rotateX(70deg)',
          transformOrigin: 'center top',
          height: '200%',
          top: '0',
          animation: 'gridScroll 3s linear infinite',
        }}
      />
      <style jsx>{`
        @keyframes gridScroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
      `}</style>
    </div>
  )
}

function NeonText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`dark:neon-glow ${className}`}>
      {children}
    </span>
  )
}

function SunsetGradient() {
  return (
    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none">
      <div className="w-full h-full rounded-full opacity-20 dark:opacity-30"
        style={{
          background: 'linear-gradient(180deg, #a855f7 0%, #ec4899 30%, #f97316 60%, #eab308 100%)',
          filter: 'blur(60px)',
        }} />
      {/* Horizontal lines through the sun */}
      <div className="absolute top-1/2 left-0 right-0 space-y-3 opacity-40 dark:opacity-60">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full bg-white dark:bg-[#0a0011]" style={{ height: `${3 + i * 2}px` }} />
        ))}
      </div>
    </div>
  )
}

function StarField() {
  const [stars, setStars] = useState<Array<{ left: string; top: string; size: number; delay: number }>>([])

  useEffect(() => {
    setStars(Array.from({ length: 60 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60}%`,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3,
    })))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <motion.div key={i} className="absolute rounded-full bg-purple-400 dark:bg-white"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: s.delay }}
        />
      ))}
    </div>
  )
}

export default function Design8() {
  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800&display=swap');
        .d8-display { font-family: 'Orbitron', sans-serif; }
        .d8-body { font-family: 'Exo 2', sans-serif; }
        .neon-border { box-shadow: 0 0 5px rgba(168,85,247,0.5), 0 0 10px rgba(168,85,247,0.3), inset 0 0 5px rgba(168,85,247,0.1); border-color: rgba(168,85,247,0.6); }
        .neon-border:hover { box-shadow: 0 0 10px rgba(168,85,247,0.8), 0 0 20px rgba(168,85,247,0.5), inset 0 0 10px rgba(168,85,247,0.2); }
        .dark .neon-glow { text-shadow: 0 0 7px rgba(168,85,247,0.8), 0 0 10px rgba(168,85,247,0.6), 0 0 21px rgba(168,85,247,0.4), 0 0 42px rgba(168,85,247,0.2); }
      `}</style>
      <div className="flex min-h-screen flex-col d8-body bg-purple-50 dark:bg-[#0a0011] text-purple-900 dark:text-purple-100">
        <Navbar />
        <main className="flex-1 relative overflow-hidden">
          {/* Hero */}
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            <StarField />
            <SunsetGradient />
            <RetroGrid />
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
              <motion.div initial={{ opacity: 0, scale: 1.5 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: 'spring' }} className="mb-8 inline-block">
                <Logo width={100} height={100} priority className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="mb-6">
                <span className="inline-block px-6 py-2 border border-purple-400/40 dark:border-purple-500/40 neon-border d8-display text-xs tracking-[0.5em] uppercase text-purple-700 dark:text-purple-300">
                  <Zap className="inline w-3 h-3 mr-2" />Hack the Future
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="d8-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-wider">
                <NeonText>WELCOME TO</NeonText>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ textShadow: 'none' }}>
                  BGCTUB IT CLUB
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="text-base sm:text-lg text-purple-600/70 dark:text-purple-300/70 max-w-xl mx-auto mb-10 leading-relaxed">
                Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 justify-center">
                <Link href="/join">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white d8-display font-bold tracking-wider uppercase text-xs px-8 py-6 rounded-sm border border-purple-400/30 neon-border">
                    Join Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/activities">
                  <Button variant="outline" className="border-purple-400/40 dark:border-purple-500/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-500/10 d8-display font-bold tracking-wider uppercase text-xs px-8 py-6 rounded-sm neon-border bg-transparent">
                    Explore
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.text} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="group p-6 border border-purple-300/20 dark:border-purple-500/20 neon-border bg-purple-100/50 dark:bg-purple-900/10 backdrop-blur-sm hover:bg-purple-200/50 dark:hover:bg-purple-900/20 transition-all rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 border border-purple-400/30 dark:border-purple-500/30 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 rounded-sm neon-border">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <h3 className="d8-display text-sm font-bold mb-2 tracking-wider uppercase text-purple-800 dark:text-purple-200">{f.text}</h3>
                    <p className="text-purple-600/50 dark:text-purple-300/50 text-xs leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 lg:py-28 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/30 dark:via-purple-900/10 to-transparent" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-center mb-16">
                <h2 className="d8-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider mb-4">
                  <NeonText>OUR PURPOSE</NeonText>
                </h2>
                <p className="text-purple-600/50 dark:text-purple-300/50 max-w-2xl mx-auto leading-relaxed text-sm">
                  Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="p-8 lg:p-10 border border-purple-300/20 dark:border-purple-500/20 neon-border bg-purple-100/50 dark:bg-purple-900/10 backdrop-blur-sm rounded-sm">
                  <div className="w-12 h-12 border border-purple-400/30 dark:border-purple-500/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 rounded-sm">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="d8-display text-lg font-bold mb-3 tracking-wider text-purple-700 dark:text-purple-300">MISSION</h3>
                  <p className="text-purple-600/50 dark:text-purple-300/50 text-sm leading-relaxed">
                    To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="p-8 lg:p-10 border border-pink-300/20 dark:border-pink-500/20 bg-pink-100/50 dark:bg-pink-900/10 backdrop-blur-sm rounded-sm"
                  style={{ boxShadow: '0 0 5px rgba(236,72,153,0.3), 0 0 10px rgba(236,72,153,0.2), inset 0 0 5px rgba(236,72,153,0.1)', borderColor: 'rgba(236,72,153,0.4)' }}>
                  <div className="w-12 h-12 border border-pink-400/30 dark:border-pink-500/30 flex items-center justify-center mb-6 text-pink-600 dark:text-pink-400 rounded-sm">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="d8-display text-lg font-bold mb-3 tracking-wider text-pink-700 dark:text-pink-300">VISION</h3>
                  <p className="text-pink-600/50 dark:text-pink-300/50 text-sm leading-relaxed">
                    To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
            <RetroGrid />
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative p-8 sm:p-12 lg:p-16 border border-purple-300/25 dark:border-purple-500/25 neon-border bg-white/60 dark:bg-[#0d0017]/80 backdrop-blur-md rounded-sm text-center z-10">
              <h2 className="d8-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider mb-4">
                <NeonText>READY TO START?</NeonText>
              </h2>
              <p className="text-purple-600/50 dark:text-purple-300/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/join">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white d8-display font-bold tracking-wider uppercase text-xs px-8 py-6 rounded-sm border border-purple-400/30 neon-border">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="border-purple-400/40 dark:border-purple-500/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-500/10 d8-display font-bold tracking-wider uppercase text-xs px-8 py-6 rounded-sm neon-border bg-transparent">
                    Sign In <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
