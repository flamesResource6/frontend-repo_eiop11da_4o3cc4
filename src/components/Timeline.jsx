import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const items = [
  {
    title: 'B.E. in Information Technology',
    org: 'Government College of Engineering, Aurangabad',
    period: '2021 – 2025 (Expected)',
    points: [
      'Coursework: Data Structures, Algorithms, DBMS, Operating Systems, AI/ML',
      'Clubs and hackathons with a focus on full‑stack and ML projects',
    ],
    icon: GraduationCap,
  },
  {
    title: 'AI/ML Projects & Research',
    org: 'OpenCV • MediaPipe • CNN (ResNet50)',
    period: '2023 – Present',
    points: [
      'Built Indian SignSpeak: real‑time ISL → text/speech pipeline',
      'Experimented with model optimization and deployment workflows',
    ],
    icon: Award,
  },
  {
    title: 'Full‑Stack Engineering',
    org: 'MERN • FastAPI • Next.js',
    period: '2022 – Present',
    points: [
      'Shipped production‑grade UIs with animations and accessibility',
      'Designed REST APIs, auth, websockets and real‑time collab features',
    ],
    icon: Calendar,
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-transparent to-indigo-50/40 dark:from-transparent dark:to-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Timeline</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">Education and highlights showing how I’ve grown across engineering and AI/ML.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10" />

          <div className="space-y-10">
            {items.map((item, idx) => {
              const Icon = item.icon
              const sideClass = idx % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'
              const alignClass = idx % 2 === 0 ? 'sm:items-end' : 'sm:items-start'
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className={`relative grid sm:grid-cols-2 ${alignClass}`}
                >
                  <div className={`order-2 sm:order-none ${sideClass}`}>
                    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-indigo-600">
                      <Icon size={16} /> {item.period}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{item.org}</p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      {item.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-600" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative flex items-center justify-center sm:justify-normal">
                    <div className="z-10 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                      <Icon size={18} />
                    </div>
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
