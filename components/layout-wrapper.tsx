"use client"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 