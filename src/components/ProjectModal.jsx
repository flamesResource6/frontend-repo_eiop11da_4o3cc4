import { Github, Link, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-white dark:bg-[#0b0f19] shadow-2xl"
          >
            <button className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20" onClick={onClose} aria-label="Close">
              <X />
            </button>
            {project?.image && (
              <div className="h-56 overflow-hidden">
                <img src={project.image} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project?.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{project?.description}</p>
              {project?.caseStudy && (
                <div className="mt-4 prose prose-invert max-w-none">
                  {project.caseStudy}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {project?.tags?.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                {project?.demo && (
                  <a href={project.demo} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
                    <Link size={16} /> Live Demo
                  </a>
                )}
                {project?.repo && (
                  <a href={project.repo} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10">
                    <Github size={16} /> Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
