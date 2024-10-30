import Link from "next/link"
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Globe, 
  MessageCircle, 
  Phone,
  Facebook,
  MessageSquare
} from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bgctub-it-club",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/bgctub-it-club",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/bgctub.it",
    icon: Facebook,
  },
  {
    name: "Discord",
    href: "https://discord.gg/bgctub-it",
    icon: MessageSquare,
  },
  {
    name: "Email",
    href: "mailto:contact@bgctubit.edu.bd",
    icon: Mail,
  },
  {
    name: "Website",
    href: "https://bgctubit.edu.bd",
    icon: Globe,
  },
  {
    name: "Telegram",
    href: "https://t.me/bgctub_it",
    icon: MessageCircle,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+8801XXXXXXXXX",
    icon: Phone,
  },
]

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background/50 to-background glass-effect">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              About Us
            </h3>
            <p className="text-sm text-muted-foreground">
              BGCTUB IT Club aims to create an innovative platform at BGC Trust University Bangladesh.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-muted-foreground hover:text-primary transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                BGC Trust University Bangladesh
              </li>
              <li className="text-muted-foreground">
                Chandanaish, Chattogram
              </li>
              <li className="text-muted-foreground">
                Bangladesh
              </li>
              <li>
                <a 
                  href="tel:+8801XXXXXXXXX" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +880 1XXXXXXXXX
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              Connect With Us
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-background/95 hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} BGCTUB IT Club. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}