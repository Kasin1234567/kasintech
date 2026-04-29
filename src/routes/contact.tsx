import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        subject: `New Kasin Tech inquiry from ${fields.name || 'website visitor'}`,
        ...fields,
      }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-3">Message sent!</h3>
        <p className="text-gray-400">Thanks for reaching out. We'll get back to you as soon as possible — usually the same day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/8 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/8 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          required
          placeholder="jane@example.com"
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/8 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">How can we help? *</label>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your tech issue or what service you need..."
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/8 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 disabled:translate-y-0"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Describe your problem and we'll arrange a visit. Fast response guaranteed.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">

          {/* Info sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
              <div className="space-y-5">
                {([
                  {
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                    label: 'Call or Text',
                    value: '928-821-9044',
                    href: 'tel:9288219044',
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                    label: 'Email',
                    value: 'kasinburke@outlook.com',
                    href: 'mailto:kasinburke@outlook.com',
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    label: 'Response Time',
                    value: 'Same day, usually within hours',
                  },
                ] as { icon: React.ReactNode; label: string; value: string; href?: string }[]).map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-gray-300 text-sm hover:text-blue-400 transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-300 text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-blue-600/10 border border-blue-500/20 p-6">
              <div className="text-blue-400 font-semibold mb-2">Fastest response</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Text and email are preferred and will get the quickest reply. Calls are welcome too — leave a voicemail if I don't pick up.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-white font-semibold mb-2">We come to you</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                All services are performed in your home. No need to haul your computer anywhere — we bring everything we need.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 rounded-2xl bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
