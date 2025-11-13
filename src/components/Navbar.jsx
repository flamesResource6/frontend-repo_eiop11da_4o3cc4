import { useState, useEffect } from 'react'
import { Menu, X, Download, Moon, Sun } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system'
    setTheme(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-xl tracking-tight">
          <span className="text-indigo-600">Ajinkya</span>
          <span className="text-slate-800 dark:text-slate-100">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            <Sun className="hidden dark:block" size={18} />
            <Moon className="dark:hidden" size={18} />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white rounded-full px-4 py-2 hover:bg-indigo-700 transition-colors"
          >
            <Download size={18} /> Resume
          </a>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            <Sun className="hidden dark:block" size={18} />
            <Moon className="dark:hidden" size={18} />
          </button>
          <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-white/10" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white/90 dark:bg-black/60 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-indigo-600 text-white rounded-full px-4 py-2">
              <Download size={18} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
