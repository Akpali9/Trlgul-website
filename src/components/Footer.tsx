const footerLinks = {
  Services: ['AI & Machine Learning', 'Data Platform', 'System Architecture', 'Digital Transformation', 'Analytics & BI', 'Security'],
  Company: ['About Trigul', 'Leadership', 'Careers', 'Press', 'Partners'],
  Resources: ['Case Studies', 'White Papers', 'Engineering Blog', 'Documentation', 'Newsletter'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#04080f', position: 'relative' }}>
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(26,37,64,0.8), transparent)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,24 2,24" stroke="#00d4aa" strokeWidth="2" fill="none"/>
                <polygon points="14,8 22,22 6,22" fill="rgba(0,212,170,0.15)" stroke="#00d4aa" strokeWidth="1"/>
                <circle cx="14" cy="14" r="2.5" fill="#00d4aa"/>
              </svg>
              <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.12em', color: '#fff' }}>
                TRIGUL
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.75, color: '#6b7fa3', maxWidth: 260, marginBottom: '2rem' }}>
              Intelligence engineered for enterprises that move at the pace of their ambition.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['LinkedIn', 'GitHub', 'X'].map(s => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 34,
                    height: 34,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(26,37,64,0.8)',
                    borderRadius: '3px',
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: '#6b7fa3',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(0,212,170,0.4)'
                    el.style.color = '#00d4aa'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(26,37,64,0.8)'
                    el.style.color = '#6b7fa3'
                  }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', color: '#e8edf5', marginBottom: '1.25rem' }}>
                {col.toUpperCase()}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 300,
                        color: '#6b7fa3',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = '#e8edf5' }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = '#6b7fa3' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(26,37,64,0.6)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6b7fa3' }}>
            © 2025 Trigul Intelligence Systems Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy', 'Terms', 'Security'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: '#6b7fa3',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#e8edf5' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#6b7fa3' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
