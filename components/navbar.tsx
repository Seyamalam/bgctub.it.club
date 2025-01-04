"use client"

import * as React from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const BlinkingBadge = () => (
  <span className="absolute -right-2 -top-1 flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
  </span>
)

const menuItems = [
  { href: "/team", label: "Executive Members" },
  { href: "/advisory-board", label: "Advisory Board" },
  { href: "/activities", label: "Activities" },
  { href: "/contact", label: "Contact" },
  { href: "/events", label: "Events" },
  { href: "/faq", label: "FAQ" },
  { href: "/join", label: "Join Us" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "Club Partners" },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b glass-effect">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
            BGCTUB IT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "relative"
                  )}>
                    {item.label}
                    {item.isSpecial && <BlinkingBadge />}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col gap-2 mt-4">
                <Link href="/" className="flex items-center mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                    BGCTUB IT
                  </span>
                </Link>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-2 text-base hover:text-primary transition-colors border-b border-border/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}