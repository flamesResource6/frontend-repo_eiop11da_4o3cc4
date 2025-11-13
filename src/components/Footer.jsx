import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-slate-700 hover:text-indigo-600"><Linkedin /></a>
          <a href="#" className="text-slate-700 hover:text-indigo-600"><Github /></a>
          <a href="#" className="text-slate-700 hover:text-indigo-600"><Mail /></a>
        </div>
      </div>
    </footer>
  )
}
