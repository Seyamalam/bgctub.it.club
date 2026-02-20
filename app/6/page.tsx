"use client"

import { ArrowRight, Code2, Users2, Rocket, Sparkles, Lightbulb, Shield, Code, Monitor, Network, Gamepad } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'
import { motion } from 'framer-motion'

/*
 * DESIGN 6: "CONCRETE" — Brutalist #1
 * Raw, oversized type, harsh black/white/purple, thick borders, monospace,
 * uppercase everything, broken grid, no rounded corners, visible structure.
 * Anti-polished. Industrial. Honest.
 * Font: Space Mono (mono) + Bebas Neue (display)
 */

const features = [
  { icon: Code2, text: 'TECHNICAL SKILLS', description: 'Learn programming, web development, and cutting-edge technologies.' },
  { icon: Users2, text: 'COMMUNITY', description: 'Connect with like-minded peers and industry professionals.' },
  { icon: Rocket, text: 'PROJECTS', description: 'Work on real-world projects and build your portfolio.' },
  { icon: Sparkles, text: 'EVENTS', description: 'Participate in workshops, hackathons, and tech talks.' },
]

export default function Design6() {
  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
        .d6-display { font-family: 'Bebas Neue', sans-serif; }
        .d6-mono { font-family: 'Space Mono', monospace; }
      `}</style>
      <div className="flex min-h-screen flex-col d6-mono text-foreground">
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center border-b-4 border-purple-600 relative overflow-hidden">
            {/* Purple bar accent */}
            <div className="absolute left-0 top-0 w-2 h-full bg-purple-600" />
            <div className="absolute right-0 bottom-0 h-2 w-1/2 bg-purple-600" />
            
            <div className="px-4 sm:px-8 lg:px-16 py-12 max-w-7xl mx-auto w-full">
              <div className="flex items-start gap-6 mb-8">
                <Logo width={80} height={80} priority className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-purple-600 p-1" />
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="text-xs uppercase tracking-[0.5em] text-purple-500 d6-mono font-bold">Est. 2023</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">BGC Trust University Bangladesh</p>
                </div>
              </div>

              <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="d6-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tight mb-4 uppercase">
                BGCTUB<br />
                <span className="text-purple-500">IT CLUB</span>
              </motion.h1>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-8 mb-8">
                <div className="bg-purple-600 text-white px-4 py-2 d6-mono font-bold text-sm uppercase tracking-widest">
                  Hack the Future
                </div>
                <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed border-l-2 border-muted-foreground/30 pl-4">
                  Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4">
                <Link href="/join">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-widest d6-mono rounded-none border-2 border-purple-600 px-8 py-6 text-sm">
                    Join Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/activities">
                  <Button variant="outline" className="border-2 border-foreground hover:bg-purple-600 hover:text-white hover:border-purple-600 font-bold uppercase tracking-widest d6-mono rounded-none px-8 py-6 text-sm">
                    Explore
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Features — Harsh grid */}
          <section className="border-b-4 border-purple-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <motion.div key={f.text} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-8 border-b md:border-b-0 md:border-r border-purple-600/30 last:border-r-0 hover:bg-purple-600/5 transition-colors group">
                  <div className="w-12 h-12 border-2 border-purple-600 flex items-center justify-center mb-4 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="d6-display text-3xl mb-2 tracking-wide">{f.text}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Mission & Vision — Split layout */}
          <section className="border-b-4 border-purple-600">
            <div className="px-4 sm:px-8 lg:px-16 py-12 max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="d6-display text-6xl sm:text-7xl lg:text-8xl tracking-tight">
                  OUR <span className="text-purple-500">PURPOSE</span>
                </h2>
                <div className="w-24 h-1 bg-purple-600 mt-4" />
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl uppercase tracking-wider leading-relaxed">
                  Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="p-8 lg:p-12 border-4 border-purple-600 bg-purple-600/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <h3 className="d6-display text-4xl tracking-wide text-purple-500">MISSION</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-wider">
                    To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="p-8 lg:p-12 border-4 border-purple-600 border-t-0 lg:border-t-4 lg:border-l-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="d6-display text-4xl tracking-wide text-purple-500">VISION</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-wider">
                    To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-4 sm:px-8 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="d6-display text-5xl sm:text-6xl lg:text-8xl tracking-tight mb-4">
                READY TO <span className="text-purple-500">START</span>?
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-6" />
              <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto uppercase tracking-wider leading-relaxed">
                Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/join">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-widest d6-mono rounded-none border-2 border-purple-600 px-8 py-6 text-sm">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="border-2 border-foreground hover:bg-purple-600 hover:text-white hover:border-purple-600 font-bold uppercase tracking-widest d6-mono rounded-none px-8 py-6 text-sm">
                    Sign In
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
