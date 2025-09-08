"use client"

import * as React from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, Menu, LogOut } from "lucide-react"
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
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useSession, signOut } from "next-auth/react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Logo } from "@/components/logo"

const menuItems = [
  { href: "/advisory-board", label: "Advisory Board" },
  { href: "/team", label: "Executive Members" },
  { href: "/activities", label: "Activities" },
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
  const { data: session, status } = useSession()

  const handleNavItemClick = () => {
    setIsOpen(false)
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false })
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
              <NavigationMenuItem key={item.href}>
                <Link href={item.href}>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "relative"
                  )}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          {/* Auth Status Indicator */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "h-2 w-2 rounded-full",
                    status === "authenticated" ? "bg-green-500" : "bg-zinc-500"
                  )} />
                  <span className="text-sm text-muted-foreground hidden sm:inline-block">
                    {status === "authenticated" ? session.user?.name || session.user?.email : "Not signed in"}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{status === "authenticated" ? "Signed in" : "Not signed in"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Sign Out Button */}
          {status === "authenticated" && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSignOut}
              className="hover:text-red-500"
            >
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Sign out</span>
            </Button>
          )}

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
              <Button variant="outline" size="icon" className="md:hidden">
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
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-2 text-base hover:text-primary transition-colors border-b border-border/10"
                    onClick={handleNavItemClick}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Mobile Auth Status and Sign Out */}
                <div className="mt-4 px-2 py-2 border-t border-border/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "h-2 w-2 rounded-full",
                        status === "authenticated" ? "bg-green-500" : "bg-zinc-500"
                      )} />
                      <span className="text-sm text-muted-foreground">
                        {status === "authenticated" ? session.user?.name || session.user?.email : "Not signed in"}
                      </span>
                    </div>
                    {status === "authenticated" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleSignOut}
                        className="hover:text-red-500"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </Button>
                    )}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}