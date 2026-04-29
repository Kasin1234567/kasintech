import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Elder PC Help',
    desc: 'Patient, jargon-free support for seniors. We come to you.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    title: 'Virus Removal',
    desc: 'Deep cleaning of malware, spyware, and ransomware threats.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'PC Tune-Up',
    desc: 'Speed up slow computers and fix everyday technical problems.',
  },
]

const stats = [
  { value: '500+', label: 'Homes Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: 'Same Day', label: 'Response' },
  { value: '5★', label: 'Average Rating' },
]

function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Now accepting new clients
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            Tech help
            <br />
            <span className="text-blue-400">made simple.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Kasin Tech brings friendly, expert computer help straight to your home. No jargon, no hassle — just solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Book a Visit
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-lg transition-all duration-200 border border-white/20 hover:-translate-y-0.5"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-blue-400 mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services snapshot */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What we do</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Simple, reliable services for everyday tech problems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/8 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-white/[0.03] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How it works</h2>
            <p className="text-gray-400 text-lg">Getting help has never been easier.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Get in touch', desc: 'Call us or fill out our contact form — we respond fast.' },
              { step: '02', title: 'We come to you', desc: 'A Kasin Tech technician arrives at your home, on your schedule.' },
              { step: '03', title: 'Problem solved', desc: 'We fix the issue and explain everything clearly before we leave.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-blue-600/40 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-blue-600/15 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to get help?</h2>
          <p className="text-gray-400 text-xl mb-10">Book a same-day or next-day home visit and let us handle the tech stress.</p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
