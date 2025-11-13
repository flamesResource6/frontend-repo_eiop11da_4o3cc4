import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const form = new FormData(e.target)
      const data = Object.fromEntries(form.entries())
      // In a real app, send to backend endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you soon.')
      e.target.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Contact Me</h2>
            <p className="mt-3 text-slate-600">Have a role, project, or idea? Let's talk. I'm responsive on email and open to collaborations.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-2"><Mail className="text-indigo-600" /> your.email@example.com</p>
              <p className="flex items-center gap-2"><Phone className="text-indigo-600" /> +1 234 567 8901</p>
              <p className="flex items-center gap-2"><MapPin className="text-indigo-600" /> Your City, Country</p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Subject</label>
                <input name="subject" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700"><Send size={18} /> Send</button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
