import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you soon.')
      e.target.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-indigo-50/40 to-white dark:from-white/5 dark:to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold">Contact</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Have a role, project, or idea? Let's talk. I'm quick on email and open to collaborations.</p>
            <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-2"><Mail className="text-indigo-600" /> ajinkyanikumbh91@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="text-indigo-600" /> 9834295239</p>
              <p className="flex items-center gap-2"><MapPin className="text-indigo-600" /> Aurangabad, India</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/AjinkyaN" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10"><Github size={16}/> GitHub</a>
                <a href="https://linkedin.com/in/ajinkyan" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10"><Linkedin size={16}/> LinkedIn</a>
              </div>
            </div>
          </motion.div>
          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Subject</label>
                <input name="subject" className="mt-1 w-full rounded-md border border-slate-300 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-slate-300 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700"><Send size={18} /> Send</button>
            {status && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
