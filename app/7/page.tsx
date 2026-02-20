"use client"

import { ArrowRight, Code2, Users2, Rocket, Sparkles, Lightbulb, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'
import { motion } from 'framer-motion'

/*
 * DESIGN 7: "POP" — Neo-Brutalist #2
 * Colorful blocks, thick black borders, drop shadows, playful,
 * Memphis-inspired, stickers aesthetic, chunky shapes.
 * Font: Archivo Black (display) + Work Sans (body)
 */

const features = [
  { icon: Code2, text: 'Technical Skills', description: 'Learn programming, web development, and cutting-edge technologies.', color: 'bg-purple-400', shadow: 'shadow-[6px_6px_0px_#581c87]' },
  { icon: Users2, text: 'Community', description: 'Connect with like-minded peers and industry professionals.', color: 'bg-fuchsia-400', shadow: 'shadow-[6px_6px_0px_#701a75]' },
  { icon: Rocket, text: 'Projects', description: 'Work on real-world projects and build your portfolio.', color: 'bg-violet-400', shadow: 'shadow-[6px_6px_0px_#4c1d95]' },
  { icon: Sparkles, text: 'Events', description: 'Participate in workshops, hackathons, and tech talks.', color: 'bg-pink-400', shadow: 'shadow-[6px_6px_0px_#831843]' },
]

export default function Design7() {
  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap');
        .d7-display { font-family: 'Archivo Black', sans-serif; }
        .d7-body { font-family: 'Work Sans', sans-serif; }
      `}</style>
      <div className="flex min-h-screen flex-col d7-body">
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
            {/* Background decorative shapes */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300 dark:bg-purple-700 border-4 border-black dark:border-white rotate-12 opacity-30" />
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-fuchsia-300 dark:bg-fuchsia-700 border-4 border-black dark:border-white rounded-full opacity-30" />
            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-violet-300 dark:bg-violet-700 border-4 border-black dark:border-white rotate-45 opacity-20" />
            
            <div className="max-w-5xl mx-auto w-full relative">
              {/* Sticker-style logo */}
              <motion.div initial={{ opacity: 0, rotate: -10, scale: 0.5 }} animate={{ opacity: 1, rotate: -3, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-block mb-8 p-4 bg-purple-300 dark:bg-purple-600 border-4 border-black dark:border-white shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#fff] -rotate-3">
                <Logo width={64} height={64} priority className="w-14 h-14" />
              </motion.div>

              {/* Pill tag */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="mb-6">
                <span className="inline-block bg-fuchsia-400 dark:bg-fuchsia-500 text-black px-4 py-1.5 border-3 border-black dark:border-white font-bold text-sm uppercase tracking-wider d7-display shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] rotate-1">
                  ⚡ Hack the Future
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: 'spring' }}
                className="d7-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
                Welcome to{' '}
                <span className="inline-block bg-purple-400 dark:bg-purple-500 text-black px-3 py-1 border-4 border-black dark:border-white shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] -rotate-1">
                  BGCTUB
                </span>{' '}
                <span className="inline-block bg-violet-400 dark:bg-violet-500 text-black px-3 py-1 border-4 border-black dark:border-white shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] rotate-1 mt-2">
                  IT Club
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-medium">
                Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4">
                <Link href="/join">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-black font-bold uppercase tracking-wider d7-display rounded-none border-4 border-black dark:border-white shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] hover:shadow-[2px_2px_0px_#000] dark:hover:shadow-[2px_2px_0px_#fff] hover:translate-x-1 hover:translate-y-1 transition-all px-8 py-6 text-sm">
                    Join Now! <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/activities">
                  <Button className="bg-fuchsia-400 hover:bg-fuchsia-500 text-black font-bold uppercase tracking-wider d7-display rounded-none border-4 border-black dark:border-white shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] hover:shadow-[2px_2px_0px_#000] dark:hover:shadow-[2px_2px_0px_#fff] hover:translate-x-1 hover:translate-y-1 transition-all px-8 py-6 text-sm">
                    Explore ↗
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Features — Colorful blocks */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.text} initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1 : 1 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className={`p-8 ${f.color} text-black border-4 border-black dark:border-white ${f.shadow} dark:shadow-[6px_6px_0px_#fff] relative group`}
                  style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
                  <div className="w-14 h-14 bg-white/30 border-3 border-black dark:border-white flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="d7-display text-2xl mb-2">{f.text}</h3>
                  <p className="text-sm font-medium opacity-80 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Mission & Vision — Stacked blocks */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
              <h2 className="d7-display text-5xl sm:text-6xl lg:text-7xl mb-2">
                Our{' '}
                <span className="inline-block bg-violet-400 dark:bg-violet-500 text-black px-3 py-0.5 border-4 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] rotate-1">
                  Purpose
                </span>
              </h2>
              <p className="text-muted-foreground mt-6 max-w-2xl font-medium leading-relaxed">
                Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="p-8 lg:p-12 bg-purple-200 dark:bg-purple-600 text-purple-950 dark:text-white border-4 border-black dark:border-white shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#fff] -rotate-[0.5deg]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/40 border-3 border-black dark:border-white flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="d7-display text-3xl">Mission</h3>
                </div>
                <p className="font-medium leading-relaxed opacity-90">
                  To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="p-8 lg:p-12 bg-fuchsia-200 dark:bg-fuchsia-600 text-fuchsia-950 dark:text-white border-4 border-black dark:border-white shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#fff] rotate-[0.5deg]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/40 border-3 border-black dark:border-white flex items-center justify-center">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="d7-display text-3xl">Vision</h3>
                </div>
                <p className="font-medium leading-relaxed opacity-90">
                  To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
                </p>
              </motion.div>
            </div>
          </section>

          {/* CTA — Big block */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="p-8 sm:p-12 lg:p-16 bg-violet-400 dark:bg-violet-500 text-black border-4 border-black dark:border-white shadow-[10px_10px_0px_#000] dark:shadow-[10px_10px_0px_#fff] text-center rotate-[0.3deg]">
              <h2 className="d7-display text-4xl sm:text-5xl lg:text-6xl mb-4">Ready to Start?</h2>
              <p className="font-medium text-lg opacity-80 mb-8 max-w-xl mx-auto">
                Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/join">
                  <Button className="bg-white hover:bg-gray-100 text-black font-bold uppercase tracking-wider d7-display rounded-none border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all px-8 py-6 text-sm">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider d7-display rounded-none border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all px-8 py-6 text-sm">
                    Sign In <ExternalLink className="ml-2 h-4 w-4" />
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
