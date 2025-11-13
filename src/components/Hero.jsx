import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/50 dark:bg-black/30 rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">Final Year IT • Full‑Stack • AI/ML</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mt-2">
              Hi, I'm <span className="text-indigo-600">Ajinkya Nikumbh</span>
            </h1>
            <p className="mt-4 text-slate-700 dark:text-slate-200 text-lg">
              Software engineer specializing in MERN, AI/ML and C++. I build scalable apps, RESTful APIs, and ship delightful UX.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-full bg-white dark:bg-transparent dark:border-white/20 text-slate-900 dark:text-white border border-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">Contact Me</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/32?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/32?img=2" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/32?img=3" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p>Open to internships and full-time roles</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white dark:from-[#0b0f19] via-white/50 dark:via-[#0b0f19]/40 to-transparent" />
    </section>
  )
}
