import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Diagnostics & Support',
    description: 'Not sure what\'s wrong? We figure it out, explain it in plain language, and let you decide what to do next — no pressure.',
    details: [
      { label: 'Diagnostics / Checkup', price: '$15' },
      { label: 'General Troubleshooting', price: '$25/hr' },
      { label: 'Remote Support', price: '$25/hr' },
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Device Setup',
    description: 'New phone, tablet, or computer? We get it set up the right way and move your stuff over so nothing important gets left behind.',
    details: [
      { label: 'New Computer Setup', price: '$35' },
      { label: 'Phone / Tablet Setup', price: '$25' },
      { label: 'Data Transfer (Phone to Phone)', price: '$25' },
      { label: 'Data Transfer (PC to PC)', price: '$30' },
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Software Services',
    description: 'Slow PC? Pop-ups? Forgotten password? We\'ll clean it up, tune it up, and get you back to a smooth running machine.',
    details: [
      { label: 'Virus / Malware Removal', price: '$40' },
      { label: 'Windows Tune-Up', price: '$30' },
      { label: 'OS Reinstall (Windows)', price: '$40' },
      { label: 'Driver Updates', price: '$20' },
      { label: 'Password / Account Help', price: '$25' },
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: 'Hardware Services',
    description: 'Need more memory, a faster drive, or a dust-free machine? We handle the upgrades and the cleanup so your computer keeps up with you.',
    details: [
      { label: 'RAM Installation', price: '$20 + parts' },
      { label: 'SSD Installation', price: '$25 + parts' },
      { label: 'Hardware Upgrade Help', price: '$20' },
      { label: 'PC Cleaning (Inside)', price: '$30' },
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: 'Network & Home Tech',
    description: 'Wi-Fi dropping out, printer won\'t connect, new streaming stick on the TV? We get all your home tech talking to each other.',
    details: [
      { label: 'Wi-Fi Setup / Troubleshooting', price: '$35' },
      { label: 'Printer Setup', price: '$25' },
      { label: 'Smart TV / Streaming Setup', price: '$25' },
    ],
  },
]

const homeVisitFee = { label: 'Home Visit Fee', price: '$15', note: 'Waived with service over $40' }

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
      <section className="py-16 px-6 pb-24">
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
              <ul className="divide-y divide-white/5 border-y border-white/5">
                {service.details.map((detail) => (
                  <li key={detail.label} className="flex items-center justify-between py-2.5 text-sm gap-4">
                    <span className="text-gray-300">{detail.label}</span>
                    <span className="text-blue-400 font-medium tabular-nums whitespace-nowrap">{detail.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Home visit fee + pricing notes */}
        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-blue-600/10 border border-blue-500/30 p-8 flex items-center justify-between gap-4">
            <div>
              <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-1">{homeVisitFee.label}</div>
              <div className="text-gray-400 text-sm">{homeVisitFee.note}</div>
            </div>
            <div className="text-3xl font-bold text-blue-400 tabular-nums">{homeVisitFee.price}</div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              <span className="text-blue-400 font-semibold">Affordable pricing for everyday tech problems.</span> No surprises — just honest, reliable service.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              All prices are starting rates. Final cost may vary depending on the issue. You'll always know the price before work begins.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 text-center text-blue-400 text-sm font-medium">
          Thank you for supporting local!
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
