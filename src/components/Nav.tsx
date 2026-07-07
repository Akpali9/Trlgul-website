import { useState, useEffect } from 'react'

const links = ['Services', 'About', 'Solutions', 'Team', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-[#04080f]/90 backdrop-blur-md border-b border-[#1a2540]/80' 
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <TriangleLogo />
            <span className="font-display text-2xl font-bold tracking-[0.12em] text-white">
              TRIGUL
            </span>
          </a>

          {/* Desktop navigation - hidden on mobile */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium tracking-widest text-[#6b7fa3] hover:text-[#00d4aa] transition-colors duration-200"
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`
                hidden md:inline-block
                px-5 py-2.5 text-xs font-semibold tracking-widest
                text-[#00d4aa] border border-[#00d4aa]/40 rounded
                hover:bg-[#00d4aa]/10 transition-colors duration-200
              `}
            >
              GET IN TOUCH
            </a>

            {/* Hamburger button - visible on mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-6 h-6 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span
                className={`
                  block h-0.5 rounded bg-[#e8edf5] transition-all duration-300 origin-left
                  ${menuOpen ? 'w-6 rotate-45 translate-y-0.5' : 'w-6'}
                `}
              />
              <span
                className={`
                  block h-0.5 rounded bg-[#e8edf5] transition-all duration-300
                  ${menuOpen ? 'w-0 opacity-0' : 'w-4'}
                `}
              />
              <span
                className={`
                  block h-0.5 rounded bg-[#e8edf5] transition-all duration-300 origin-left
                  ${menuOpen ? 'w-6 -rotate-45 -translate-y-0.5' : 'w-6'}
                `}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu with smooth expand/collapse */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="pt-2 pb-4 border-t border-[#1a2540]/60 flex flex-col gap-3">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[0.9375rem] font-medium tracking-widest text-[#6b7fa3] hover:text-[#00d4aa] transition-colors"
              >
                {link.toUpperCase()}
              </a>
            ))}
            {/* Optional: add CTA inside mobile menu */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block self-start px-5 py-2 text-xs font-semibold tracking-widest text-[#00d4aa] border border-[#00d4aa]/40 rounded hover:bg-[#00d4aa]/10 transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ----- Logo component (unchanged) -----
function TriangleLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polygon
        points="14,2 26,24 2,24"
        stroke="#00d4aa"
        strokeWidth="2"
        fill="none"
      />
      <polygon
        points="14,8 22,22 6,22"
        fill="rgba(0,212,170,0.15)"
        stroke="#00d4aa"
        strokeWidth="1"
      />
      <circle cx="14" cy="14" r="2.5" fill="#00d4aa" />
    </svg>
  )
}
