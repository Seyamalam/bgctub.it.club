"use client"

import { Shield, Code, Monitor, Lightbulb, Network, Gamepad, ArrowRight, Code2, Users2, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'
import { motion } from 'framer-motion'

/*
 * DESIGN 2: "WHISPER" — Simple / Minimal
 * Ultra-clean whitespace, elegant typography, restrained purple accents.
 * Font: Instrument Serif (display) + Source Sans 3 (body)
 * Light-biased design with breathing room.
 */

const features = [
  { icon: Code2, text: 'Technical Skills', description: 'Learn programming, web development, and cutting-edge technologies.' },
  { icon: Users2, text: 'Community', description: 'Connect with like-minded peers and industry professionals.' },
  { icon: Rocket, text: 'Projects', description: 'Work on real-world projects and build your portfolio.' },
  { icon: Sparkles, text: 'Events', description: 'Participate in workshops, hackathons, and tech talks.' },
]

export default function Design2() {
  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
        .d2-display { font-family: 'Instrument Serif', serif; }
        .d2-body { font-family: 'Source Sans 3', sans-serif; }
      `}</style>
      <div className="flex min-h-screen flex-col d2-body">
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-12">
                <Logo width={80} height={80} priority className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-purple-600 dark:text-purple-400 tracking-[0.3em] uppercase text-xs font-semibold mb-8 d2-body">
                Hack the Future
              </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
                className="d2-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-[1.05] text-foreground">
                Welcome to<br />
                <span className="text-purple-700 dark:text-purple-400 italic">BGCTUB IT Club</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
                Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-6 justify-center">
                <Link href="/join">
                  <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white rounded-none px-8 d2-body font-medium tracking-wide">
                    Join Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/activities">
                  <Button size="lg" variant="ghost" className="text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 rounded-none px-8 d2-body tracking-wide">
                    Explore Activities
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center py-8">
            <div className="w-px h-20 bg-purple-300/30" />
          </div>

          {/* Features */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {features.map((f, i) => (
                <motion.div key={f.text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
                  className="group flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/30 transition-colors">
                    <f.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="d2-display text-2xl mb-1">{f.text}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center py-8">
            <div className="w-px h-20 bg-purple-300/30" />
          </div>

          {/* Mission & Vision */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="d2-display text-4xl sm:text-5xl lg:text-6xl mb-6">
                <span className="text-purple-700 dark:text-purple-400 italic">Our Purpose</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 mb-6">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="d2-display text-3xl mb-4 text-purple-700 dark:text-purple-400 italic">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 mb-6">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="d2-display text-3xl mb-4 text-purple-700 dark:text-purple-400 italic">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center py-8">
            <div className="w-px h-20 bg-purple-300/30" />
          </div>

          {/* CTA */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="d2-display text-4xl sm:text-5xl mb-6">Ready to Start Your <span className="italic text-purple-700 dark:text-purple-400">Journey</span>?</h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/join">
                  <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white rounded-none px-8 d2-body font-medium tracking-wide">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="ghost" className="text-purple-700 dark:text-purple-400 rounded-none px-8 d2-body tracking-wide">
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
