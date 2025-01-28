"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface MatrixBackgroundProps {
  className?: string
}

export function MatrixBackground({ className = "" }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      const scale = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * scale
      canvas.height = window.innerHeight * scale
      ctx.scale(scale, scale)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }
    setCanvasSize()

    const columns = Math.floor(window.innerWidth / 20)
    const drops: number[] = new Array(columns).fill(0)

    const characters = '01BGCTUBILK'
    ctx.font = '15px monospace'

    const matrix = () => {
      // Use theme-appropriate background color
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(0, 20, 0, 0.07)' // Dark green background in dark mode
        : 'rgba(255, 255, 255, 0.07)' // Lighter background in light mode
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Use green for both themes with adjusted opacity
      ctx.fillStyle = theme === 'dark'
        ? 'hsl(142, 76%, 36%)' // Bright green in dark mode
        : 'hsl(142, 76%, 36%)' // Same green in light mode

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)
        drops[i]++

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
    }

    const interval = setInterval(matrix, 50)
    window.addEventListener('resize', setCanvasSize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full opacity-40 dark:opacity-50 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
} 


