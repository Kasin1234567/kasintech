import { HeadContent, Link, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Kasin Tech — Local Tech Support You Can Trust' },
      { name: 'description', content: 'Kasin Tech provides friendly, in-home PC support for seniors, virus removal, and general tech help. Serving your neighborhood one home at a time.' },
    ],
  }),
  shellComponent: RootDocument,
})

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const router = useRouterState()
  const isActive = router.location.pathname === to
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
    >
      {children}
    </Link>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
          Kasin Tech
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-200"
        >
          Get Help
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">Contact</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">Get Help</Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-white font-semibold text-lg mb-2">Kasin Tech</div>
            <p className="text-gray-500 text-sm max-w-xs">Friendly, in-home tech support for everyone — specializing in elder PC help and virus removal.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Navigation</div>
            <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
            <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-gray-600 text-xs">
          © {new Date().getFullYear()} Kasin Tech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black text-white min-h-screen">
        <Header />
        <main className="pt-14">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
