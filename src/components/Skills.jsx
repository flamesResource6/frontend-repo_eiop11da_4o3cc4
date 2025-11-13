import { Code2, Database, Globe, Cloud, Rocket, Sparkles } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Database, title: 'Backend', items: ['Node/Express', 'FastAPI', 'MongoDB', 'REST/GraphQL'] },
  { icon: Globe, title: 'Web', items: ['PWAs', 'SEO', 'a11y', 'Responsive UI'] },
  { icon: Cloud, title: 'Cloud & DevOps', items: ['Docker', 'CI/CD', 'Vercel', 'Railway'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-indigo-600" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Skills</h2>
        </div>
        <p className="text-slate-600 max-w-2xl">A snapshot of the technologies I use to craft performant, accessible, and delightful digital experiences.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-700">
                  <Icon />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
