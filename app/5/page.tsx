"use client"

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Code2, Users2, Rocket, Sparkles, Lightbulb, Shield, Code, Monitor, Network, Gamepad } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Logo } from '@/components/logo'

/*
 * DESIGN 5: "TERMINAL" — CLI / Hacker Type
 * Pure terminal aesthetic. Monospace font, typing animation,
 * command-prompt prefixes, scan-line overlay, green/purple phosphor glow.
 * Font: JetBrains Mono (everything)
 */

function useTypingEffect(text: string, speed: number = 40, delay: number = 0) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let charIndex = 0
    const startTimeout = setTimeout(() => {
      const type = () => {
        if (charIndex < text.length) {
          setDisplayed(text.slice(0, charIndex + 1))
          charIndex++
          timeout = setTimeout(type, speed)
        } else {
          setDone(true)
        }
      }
      type()
    }, delay)
    return () => { clearTimeout(timeout); clearTimeout(startTimeout) }
  }, [text, speed, delay])

  return { displayed, done }
}

function Cursor({ blink = true }: { blink?: boolean }) {
  return <span className={`inline-block w-2.5 h-5 bg-purple-400 ml-0.5 align-middle ${blink ? 'animate-pulse' : ''}`} />
}

function TerminalLine({ prefix = '$', text, delay = 0, speed = 30, className = '' }: { prefix?: string; text: string; delay?: number; speed?: number; className?: string }) {
  const { displayed, done } = useTypingEffect(text, speed, delay)
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <span className="text-purple-500 font-bold flex-shrink-0">{prefix}</span>
      <span className="text-purple-200/90 break-all">{displayed}{!done && <Cursor />}</span>
    </div>
  )
}

function ScanLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
      style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(147,51,234,0.3) 2px, rgba(147,51,234,0.3) 4px)' }} />
  )
}

const features = [
  { cmd: 'skills', text: 'Technical Skills — Learn programming, web development, and cutting-edge technologies.' },
  { cmd: 'community', text: 'Community — Connect with like-minded peers and industry professionals.' },
  { cmd: 'projects', text: 'Projects — Work on real-world projects and build your portfolio.' },
  { cmd: 'events', text: 'Events — Participate in workshops, hackathons, and tech talks.' },
]

export default function Design5() {
  const [showFeatures, setShowFeatures] = useState(false)
  const [showMission, setShowMission] = useState(false)
  const [showCta, setShowCta] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowFeatures(true), 3000)
    const t2 = setTimeout(() => setShowMission(true), 5000)
    const t3 = setTimeout(() => setShowCta(true), 7000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <LayoutWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap');
        .d5-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
      <ScanLines />
      <div className="flex min-h-screen flex-col d5-mono bg-[#0a0011] text-purple-200/90">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full py-8">
          {/* Terminal Window */}
          <div className="rounded-lg border border-purple-500/20 bg-[#0d0017]/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-purple-900/20">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-purple-900/20 border-b border-purple-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-purple-400/60 ml-4">bgctub@it-club:~</span>
            </div>

            {/* Terminal content */}
            <div className="p-4 sm:p-6 space-y-3 text-sm sm:text-base min-h-[70vh]">
              {/* Boot sequence */}
              <div className="text-purple-500/50 text-xs space-y-1">
                <p>[BOOT] Initializing BGCTUB IT Club System v2.0...</p>
                <p>[BOOT] Loading modules: cybersecurity, programming, web-dev, design, esports...</p>
                <p>[BOOT] <span className="text-green-400">All systems operational.</span></p>
                <p className="text-purple-500/30">────────────────────────────────────────────────────</p>
              </div>

              {/* Logo + Title */}
              <div className="flex items-center gap-4 py-4">
                <Logo width={48} height={48} priority className="w-10 h-10 sm:w-12 sm:h-12" />
                <div>
                  <TerminalLine prefix=">" text="Welcome to BGCTUB IT Club" speed={45} className="text-lg sm:text-xl font-bold" />
                </div>
              </div>

              <TerminalLine prefix="#" text="HACK THE FUTURE" delay={1200} speed={60} className="text-2xl sm:text-3xl font-extrabold text-purple-400" />

              <div className="pt-2">
                <TerminalLine prefix="$" text="echo 'Empowering students through technology, innovation, and collaboration. Join us in shaping the future of IT.'" delay={2200} speed={20} />
              </div>

              {/* Features */}
              {showFeatures && (
                <div className="pt-6 space-y-2">
                  <p className="text-purple-500/60 text-xs">$ cat /etc/bgctub/features.conf</p>
                  <div className="pl-4 border-l-2 border-purple-500/20 space-y-3 pt-2">
                    {features.map((f, i) => (
                      <TerminalLine key={f.cmd} prefix="→" text={f.text} delay={i * 400} speed={15} />
                    ))}
                  </div>
                </div>
              )}

              {/* Mission & Vision */}
              {showMission && (
                <div className="pt-6 space-y-4">
                  <p className="text-purple-500/60 text-xs">$ cat /etc/bgctub/purpose.md</p>
                  <div className="pl-4 border-l-2 border-purple-500/20 space-y-4 pt-2">
                    <div className="text-purple-400/70 text-xs">
                      Founded: December 19, 2023 | Members: 300+ | Status: Active
                    </div>
                    <div>
                      <p className="text-purple-400 font-bold mb-1">## Mission</p>
                      <TerminalLine prefix=" " text="To empower students with cutting-edge technical skills, foster innovation, and build a collaborative community that drives technological advancement and prepares members for the digital future." delay={200} speed={10} />
                    </div>
                    <div>
                      <p className="text-purple-400 font-bold mb-1">## Vision</p>
                      <TerminalLine prefix=" " text="To be the premier IT hub at BGCTUB, recognized for excellence in technology education, groundbreaking projects, and producing industry-ready professionals who lead the tech revolution." delay={800} speed={10} />
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              {showCta && (
                <div className="pt-8 space-y-4">
                  <p className="text-purple-500/60 text-xs">$ ./ready_to_join.sh</p>
                  <div className="p-4 rounded-lg border border-purple-500/20 bg-purple-900/10 space-y-4">
                    <p className="text-purple-300 font-bold text-lg">Ready to Start Your Journey?</p>
                    <p className="text-purple-200/60 text-sm">Join BGCTUB IT Club today and become part of a thriving community of tech enthusiasts.</p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/join">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white d5-mono font-bold rounded-md">
                          <span className="mr-2">$</span> sudo join --now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/login">
                        <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 d5-mono rounded-md">
                          <span className="mr-2">$</span> ssh login@bgctub
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Final prompt */}
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-purple-500 font-bold">$</span>
                    <Cursor />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ASCII art stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'MEMBERS', value: '300+' },
              { label: 'EVENTS', value: '50+' },
              { label: 'PROJECTS', value: '25+' },
              { label: 'PARTNERS', value: '10+' },
            ].map(s => (
              <div key={s.label} className="p-4 rounded-lg border border-purple-500/15 bg-purple-900/10 text-center">
                <div className="text-2xl font-extrabold text-purple-400">{s.value}</div>
                <div className="text-xs text-purple-500/50 tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  )
}
