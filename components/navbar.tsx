"use client"

import * as React from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

interface MenuItem {
  href?: string
  label: string
  items?: {
    href: string
    label: string
    description?: string
  }[]
}

const menuItems: MenuItem[] = [
  {
    label: "Team",
    items: [
      { 
        href: "/advisory-board", 
        label: "Advisory Board",
        description: "Our experienced advisors guiding the club"
      },
      { 
        href: "/team", 
        label: "Executive Members",
        description: "Meet the current executive committee"
      },
      { 
        href: "/committee-2025", 
        label: "Committee 2025",
        description: "Archive of the previous committee"
      },
      { 
        href: "/founding-members", 
        label: "Founding Members",
        description: "The visionaries who started it all"
      },
    ]
  },
  { href: "/contact", label: "Contact" },
  { href: "/events", label: "Events" },
  { href: "/faq", label: "FAQ" },
  { href: "/join", label: "Join Us" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/news", label: "News" },
  { href: "/partners", label: "Partners" },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleNavItemClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b glass-effect">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Logo width={40} height={40} priority />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
            
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover">
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.label}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href!}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "relative"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle menu">
                <Menu className="h-5 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetTitle className="text-left">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-2 mt-4">
                <Link href="/" className="flex items-center space-x-3 mb-6" onClick={handleNavItemClick}>
                  <Logo width={32} height={32} />
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                    BGCTUB IT
                  </span>
                </Link>
                {menuItems.map((item) => {
                  if (item.items) {
                    return (
                      <div key={item.label} className="space-y-2">
                        <div className="px-2 py-2 text-sm font-semibold text-muted-foreground">
                          {item.label}
                        </div>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-base hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary ml-2"
                            onClick={handleNavItemClick}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href!}
                      className="block px-2 py-2 text-base hover:text-primary transition-colors border-b border-border/10"
                      onClick={handleNavItemClick}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
