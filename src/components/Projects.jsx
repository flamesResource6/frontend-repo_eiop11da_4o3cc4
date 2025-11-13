import { Github, Link, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from './ProjectModal'
import Shimmer from './Shimmer'

const projects = [
  {
    title: 'Mock Elevate — AI Interview Platform',
    description: 'AI-driven mock interviews with real-time voice, automated scoring, and feedback reports.',
    caseStudy: (
      <ul className="list-disc ml-5 space-y-1">
        <li>Question bank, voice pipeline, analytics dashboard</li>
        <li>Auto scoring with prompts + rubric; PDF feedback reports</li>
        <li>Auth, billing, and project-based workspaces</li>
      </ul>
    ),
    tags: ['Next.js', 'MERN', 'Clerk', 'Supabase', 'Gemini AI'],
    stars: 120,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/AjinkyaN/mock-elevate',
    demo: '#',
  },
  {
    title: 'CODECOLLAB — Real‑time Collaborative IDE',
    description: 'Low-latency CRDT editor with Yjs, WebSockets, A/V calls, and whiteboarding for remote teams.',
    caseStudy: (
      <ul className="list-disc ml-5 space-y-1">
        <li>CRDT with Yjs for multi-user editing</li>
        <li>WebRTC A/V rooms and canvas whiteboard</li>
        <li>Presence, cursors, and role-based access</li>
      </ul>
    ),
    tags: ['Next.js', 'React', 'Yjs', 'ZEGOCLOUD'],
    stars: 95,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/AjinkyaN/codecollab',
    demo: '#',
  },
  {
    title: 'Indian SignSpeak — ISL Recognition',
    description: 'Real-time ISL to text/speech using OpenCV, MediaPipe and CNN (ResNet50).',
    caseStudy: (
      <ul className="list-disc ml-5 space-y-1">
        <li>Collected dataset; preprocessing and augmentation</li>
        <li>ResNet50 finetune; real-time inference via OpenCV</li>
        <li>Speech synthesis pipeline for accessibility</li>
      </ul>
    ),
    tags: ['Python', 'OpenCV', 'MediaPipe', 'ResNet50'],
    stars: 80,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/AjinkyaN/indiansignspeak',
    demo: '#',
  },
]

function ImageWithShimmer({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative h-48 overflow-hidden">
      {!loaded && <Shimmer className="absolute inset-0" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const openModal = (p) => {
    setSelected(p)
    setOpen(true)
  }

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Projects</h2>
          <a href="https://github.com/AjinkyaN" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-400">
            <Github size={18} /> GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openModal(p)}
            >
              <ImageWithShimmer src={p.image} alt="Project cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 text-amber-500 text-sm"><Star size={16} /> {p.stars}</span>
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.demo} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    <Link size={16} /> Live Demo
                  </a>
                  <a href={p.repo} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10">
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal open={open} onClose={() => setOpen(false)} project={selected} />
    </section>
  )
}
