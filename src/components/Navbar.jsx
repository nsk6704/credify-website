import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const targetPosition = target.offsetTop - offset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#getting-started', label: 'Getting Started' },
    { href: '#ios-waitlist', label: 'iOS' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 shrink-0">
            <img src="/icon.png" alt="UpWell Logo" className="w-8 h-8" />
            <span className="text-lg font-bold">UpWell</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              >
                {link.label}
              </a>
            ))}
            <a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer" className="ml-2">
              <Button variant="default" className="h-8 gap-1.5 px-3 text-xs">
                <FaGithub size={14} />
                <span>GitHub Repo</span>
              </Button>
            </a>
            <button
              className="ml-2 p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-all rounded-full"
              aria-label="Toggle dark mode"
              onClick={() => setDark(v => !v)}
            >
              {dark ? <Sun size={16} className="text-xp" /> : <Moon size={16} className="text-primary" />}
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-all rounded-full"
              aria-label="Toggle dark mode"
              onClick={() => setDark(v => !v)}
            >
              {dark ? <Sun size={16} className="text-xp" /> : <Moon size={16} className="text-primary" />}
            </button>
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
              <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
              <span className="block w-5 h-0.5 bg-current transition-all" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-md"
              >
                {link.label}
              </a>
            ))}
            <Separator className="my-2" />
            <a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer" className="block">
              <Button variant="default" className="w-full h-9 gap-1.5">
                <FaGithub size={16} />
                <span>GitHub Repo</span>
              </Button>
            </a>
            <button
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-full mt-1"
              onClick={() => setDark(v => !v)}
            >
              {dark ? <Sun size={16} className="text-xp" /> : <Moon size={16} className="text-primary" />}
              <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
