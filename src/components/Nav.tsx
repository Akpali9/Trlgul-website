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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? '1px solid rgba(26,37,64,0.8)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(4,8,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            <TriangleLogo />
            <span
              className="font-display"
              style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.12em', color: '#fff' }}
            >
              TRIGUL
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: '#6b7fa3',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#00d4aa' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#6b7fa3' }}
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#contact"
              style={{
                display: 'none',
                padding: '0.5rem 1.25rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#00d4aa',
                border: '1px solid rgba(0,212,170,0.4)',
                borderRadius: '3px',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                backgroundColor: 'transparent',
              }}
              className="md:block"
              onMouseEnter={e => {
                const el = e.target as HTMLElement
                el.style.backgroundColor = 'rgba(0,212,170,0.12)'
              }}
              onMouseLeave={e => {
                const el = e.target as HTMLElement
                el.style.backgroundColor = 'transparent'
              }}
            >
              GET IN TOUCH
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
              className="md:hidden"
            >
              <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    style={{
                      height: 1.5,
                      borderRadius: 2,
                      backgroundColor: '#e8edf5',
                      width: i === 1 ? 16 : 22,
                      transition: 'width 0.2s',
                    }}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              padding: '1rem 0 1.5rem',
              borderTop: '1px solid rgba(26,37,64,0.6)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: '#6b7fa3',
                  textDecoration: 'none',
                }}
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

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
