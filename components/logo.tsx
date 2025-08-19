"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface LogoProps {
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export function Logo({ className = "", width = 40, height = 40, priority = false }: LogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by showing a placeholder until mounted
  if (!mounted) {
    return (
      <div 
        className={`${className} bg-muted animate-pulse rounded`}
        style={{ width, height }}
      />
    )
  }

  // Use resolvedTheme to get the actual theme (light/dark)
  const isDark = resolvedTheme === 'dark'
  const logoSrc = isDark ? '/logo/White.png' : '/logo/Black.png'

  return (
    <Image
      src={logoSrc}
      alt="BGCTUB IT Club Logo"
      width={width}
      height={height}
      className={`${className} object-contain`}
      priority={priority}
    />
  )
}
