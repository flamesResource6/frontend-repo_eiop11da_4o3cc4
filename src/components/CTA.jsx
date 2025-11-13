import { ArrowUpRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-16 sticky bottom-4 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl p-4 shadow-lg"
        >
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-300">Open to SDE, Full‑Stack, and AI/ML roles</p>
            <h3 className="text-lg font-semibold">Hire Ajinkya — available for internships and full‑time</h3>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
              Contact <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10">
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
