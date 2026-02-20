"use client"

import { useState, useEffect } from 'react'
import { Shield, Code, Monitor, Lightbulb, Network, Gamepad, ArrowRight, Code2, Users2, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'

/*
 * DESIGN 4: "KINETIC" — Animated / Motion-heavy
 * Staggered reveals, particle burst, morphing shapes, number counters,
 * magnetic buttons, text scramble, kinetic typography.
 * Font: Clash Display (display) + Satoshi (body)
 */

const features = [
  { icon: Code2, text: 'Technical Skills', description: 'Learn programming, web development, and cutting-edge technologies.' },
  { icon: Users2, text: 'Community', description: 'Connect with like-minded peers and industry professionals.' },
  { icon: Rocket, text: 'Projects', description: 'Work on real-world projects and build your portfolio.' },
  { icon: Sparkles, text: 'Events', description: 'Participate in workshops, hackathons, and tech talks.' },
]

const stats = [
  { label: 'Members', value: 300 },
  { label: 'Events', value: 50 },
  { label: 'Projects', value: 25 },
  { label: 'Partners', value: 10 },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    const controls = animate(count, value, { duration })
    return () => { controls.stop(); unsubscribe() }
  }, [count, rounded, value, duration])

  return <span>{display}+</span>
}

function ParticleBurst() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; dur: number }>>([])
  
  useEffect(() => {
    setParticles(Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 3,
      dur: 4 + Math.random() * 4,
    })))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-purple-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], x: [0, 15, -15, 0], opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function MorphingShape() {
  return (
    <motion.div
      className="absolute w-96 h-96 opacity-20 pointer-events-none"
      style={{ right: '-5%', top: '10%', background: 'linear-gradient(135deg, #9333ea, #c084fc, #a855f7)' }}
      animate={{
        borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 20% 80% / 25% 80% 20% 75%', '67% 33% 47% 53% / 37% 20% 80% 63%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
        rotate: [0, 90, 180, 360],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: i * 0.04, duration: 0.6, type: 'spring' as const, stiffness: 100 }
  })
}

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}>
          {char}
        </motion.span>
      ))}
    </span>
  )
}

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } }

export default function Design4() {
  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .d4-display { font-family: 'Manrope', sans-serif; }
        .d4-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
      <div className="flex min-h-screen flex-col d4-body">
        <Navbar />
        <main className="flex-1 relative overflow-hidden">
          {/* Hero */}
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            <ParticleBurst />
            <MorphingShape />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-background" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 200 }} className="mb-8 inline-block">
                <Logo width={100} height={100} priority className="w-20 h-20 sm:w-24 sm:h-24" />
              </motion.div>

              <motion.div initial={{ width: 0 }} animate={{ width: 'auto' }} transition={{ duration: 0.6, delay: 0.3 }}
                className="overflow-hidden inline-block mb-6">
                <div className="px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                    className="text-purple-300 text-sm font-bold tracking-[0.5em] uppercase d4-display">
                    Hack the Future
                  </motion.span>
                </div>
              </motion.div>

              <div className="mb-6">
                <h1 className="d4-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95]">
                  <AnimatedText text="Welcome to " />
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                    <AnimatedText text="BGCTUB IT Club" />
                  </span>
                </h1>
              </div>

              <motion.p initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }} className="flex flex-wrap gap-4 justify-center">
                <Link href="/join">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="group bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-violet-700 text-white shadow-xl shadow-purple-500/30 d4-display font-bold rounded-2xl px-8">
                      Join Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/activities">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 d4-display font-bold rounded-2xl px-8">
                      Explore Activities
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Stats counter */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
                {stats.map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + i * 0.1, type: 'spring' }}
                    className="text-center p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                    <div className="d4-display text-3xl font-extrabold text-purple-400 mb-1">
                      <AnimatedCounter value={s.value} />
                    </div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <motion.div key={f.text} variants={fadeUp}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 hover:bg-purple-500/10 hover:border-purple-400/30 transition-colors relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-fuchsia-500/0 group-hover:from-purple-500/5 group-hover:to-fuchsia-500/10 transition-all" />
                  <div className="relative">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 d4-display">{f.text}</h3>
                    <p className="text-muted-foreground text-sm">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 lg:py-28 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-fuchsia-900/5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-center mb-16">
                <motion.h2 className="d4-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
                  initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, type: 'spring' }}>
                  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">Our Purpose</span>
                </motion.h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Founded on December 19, 2023, during our Installation Ceremony, BGCTUB IT Club has grown to over 300 registered members, fostering a vibrant community of tech enthusiasts.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, x: -50, rotate: -2 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.8, type: 'spring' }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="p-8 lg:p-12 rounded-3xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/25 transition-all">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}
                    className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                    <Rocket className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400 d4-display">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50, rotate: 2 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.8, type: 'spring', delay: 0.1 }}
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  className="p-8 lg:p-12 rounded-3xl bg-fuchsia-500/5 border border-fuchsia-500/10 hover:border-fuchsia-500/25 transition-all">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center mb-6">
                    <Lightbulb className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400 d4-display">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.8, type: 'spring' }}
              className="relative rounded-3xl overflow-hidden border border-purple-500/20">
              <motion.div className="absolute inset-0"
                animate={{ background: [
                  'linear-gradient(0deg, rgba(147,51,234,0.15), rgba(192,132,252,0.1))',
                  'linear-gradient(120deg, rgba(192,132,252,0.15), rgba(168,85,247,0.1))',
                  'linear-gradient(240deg, rgba(168,85,247,0.15), rgba(147,51,234,0.1))',
                  'linear-gradient(360deg, rgba(147,51,234,0.15), rgba(192,132,252,0.1))',
                ] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div className="relative p-8 sm:p-12 lg:p-20 text-center">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="d4-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
                  Ready to Start Your Journey?
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.2 }} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-4">
                  <Link href="/join">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="group bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white shadow-xl shadow-purple-500/30 d4-display font-bold rounded-2xl px-8">
                        Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/login">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 d4-display font-bold rounded-2xl px-8">
                        Sign In <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
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
