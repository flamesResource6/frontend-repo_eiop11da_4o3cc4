import { Github, Link, Star } from 'lucide-react'

const projects = [
  {
    title: 'AI Study Planner',
    description: 'Smart planner that schedules tasks and adapts to your routine with reminders and progress tracking.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    stars: 42,
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Campus Events Hub',
    description: 'Discover, host, and join college events with real-time updates and RSVP.',
    tags: ['Vite', 'Node', 'Tailwind'],
    stars: 30,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Portfolio Engine',
    description: 'Beautiful portfolio generator with themes, markdown support, and deployments.',
    tags: ['Next.js', 'Framer Motion'],
    stars: 55,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Projects</h2>
          <a href="https://github.com/" className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600">
            <Github size={18} /> View GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-slate-900">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 text-amber-600 text-sm"><Star size={16} /> {p.stars}</span>
                </div>
                <p className="mt-2 text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    <Link size={16} /> Live Demo
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-800">
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
