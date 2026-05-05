"use client"

import { Eye } from "lucide-react"

const navLinks = [
  { href: "#начало", label: "Начало" },
  { href: "#за-нас", label: "Какво е CV" },
  { href: "#технологии", label: "Технологии" },
  { href: "#приложения", label: "Приложения" },
  { href: "#демо", label: "Демо" },
  { href: "#бъдеще", label: "Бъдеще" },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Eye className="h-6 w-6 text-primary" />
            <span>CV Vision</span>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CV Vision. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}
