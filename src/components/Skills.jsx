import { Code2, Database, Globe, Cloud, Rocket, Sparkles, Cog, Cpu, Blocks } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
  { icon: Code2, title: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { icon: Blocks, title: 'Web', items: ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'React.js', 'Next.js'] },
  { icon: Database, title: 'Backend', items: ['Node.js', 'REST APIs', 'MERN Stack', 'FastAPI'] },
  { icon: Cpu, title: 'AI/ML', items: ['OpenCV', 'MediaPipe', 'CNN', 'ResNet50'] },
  { icon: Cloud, title: 'Cloud & Tools', items: ['Docker', 'Git', 'GitHub', 'Google Colab', 'Jupyter'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-indigo-50/40 dark:from-transparent dark:to-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-indigo-600" />
          <h2 className="text-3xl md:text-4xl font-extrabold">Skills</h2>
        </div>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">Stack I use to craft scalable backends, smooth UIs, and AI-powered experiences.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-700 dark:text-indigo-400">
                  <Icon />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
