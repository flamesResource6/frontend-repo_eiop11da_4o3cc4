import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CTA from './components/CTA'
import PrintSheet from './components/PrintSheet'

function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors">
      <Navbar />
      {/* Prevent flash of un-themed content */}
      <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity .2s ease' }}>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
        {/* Printable one-pager (visible only when printing) */}
        <PrintSheet />
        {/* Floating call-to-action */}
        <CTA />
      </div>
    </div>
  )
}

export default App
