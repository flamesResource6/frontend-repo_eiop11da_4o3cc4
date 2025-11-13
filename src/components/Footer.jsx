import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} Ajinkya Nikumbh. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/ajinkyan" className="text-slate-700 dark:text-slate-200 hover:text-indigo-400"><Linkedin /></a>
          <a href="https://github.com/AjinkyaN" className="text-slate-700 dark:text-slate-200 hover:text-indigo-400"><Github /></a>
          <a href="mailto:ajinkyanikumbh91@gmail.com" className="text-slate-700 dark:text-slate-200 hover:text-indigo-400"><Mail /></a>
        </div>
      </div>
    </footer>
  )
}
