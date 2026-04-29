import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Elder PC Help',
    description: 'We specialize in patient, compassionate computer assistance for seniors. Whether it\'s learning a new device, video calling with family, or just navigating the internet safely — we explain everything in plain language, at your pace.',
    details: ['One-on-one in-home sessions', 'Phone and tablet help', 'Video calling setup (Zoom, FaceTime)', 'Email and online banking guidance'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Virus & Malware Removal',
    description: 'A slow or infected computer is no match for our thorough removal process. We scan, clean, and harden your system against future threats — leaving your machine fast and your personal data safe.',
    details: ['Full malware and spyware scan', 'Ransomware assessment and removal', 'Browser hijack cleanup', 'Security software installation'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'PC Speed & Tune-Up',
    description: 'Years of use leave computers cluttered with junk files, unnecessary startup programs, and outdated software. Our tune-up service gets your machine running like new again.',
    details: ['Startup optimization', 'Disk cleanup and defragmentation', 'Driver and OS updates', 'Memory and storage diagnostics'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'Software Setup & Installation',
    description: 'Need a new program installed, a printer set up, or help migrating to a new computer? We handle the technical side so you don\'t have to.',
    details: ['Printer and peripheral setup', 'Application installation and configuration', 'New PC setup and data transfer', 'Operating system reinstall'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'Internet & Network Help',
    description: 'Slow Wi-Fi, dropped connections, or a router that needs setting up — we diagnose and fix home network issues quickly and clearly.',
    details: ['Wi-Fi troubleshooting and optimization', 'Router setup and configuration', 'Smart device connectivity', 'Network security review'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Data Backup & Recovery',
    description: 'Protect your irreplaceable photos, documents, and files. We set up reliable backup solutions and recover data from failing or damaged drives.',
    details: ['External drive backups', 'Cloud backup setup (Google Drive, OneDrive)', 'Deleted file recovery', 'Crashed drive data retrieval'],
  },
]

function ServicesPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Professional, in-home tech support for the services that matter most. Every visit is friendly, patient, and priced fairly.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-white/[0.03] border-t border-white/10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Need something not listed?</h2>
          <p className="text-gray-400 text-lg mb-8">Reach out — chances are we can help. We tackle most everyday computer problems.</p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
