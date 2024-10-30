"use client"

import { MatrixBackground } from "@/components/matrix-background"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 