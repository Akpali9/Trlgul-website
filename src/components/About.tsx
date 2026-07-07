const pillars = [
  { title: 'Precision', desc: 'Every system is over-designed for correctness before efficiency.' },
  { title: 'Velocity', desc: 'Time-to-production matters. We move in sprint cycles, not quarters.' },
  { title: 'Ownership', desc: 'We stay accountable until results are in production and measurable.' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#04080f',
        padding: '7rem 0',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(59,122,255,0.3), transparent)' }} />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Left: diagram */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              border: '1px solid rgba(26,37,64,0.8)',
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: '#090f1c',
              padding: '3rem',
            }}
          >
            {/* Corner accents */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(corner => {
              const isTop = corner.includes('top')
              const isLeft = corner.includes('left')
              return (
                <div
                  key={corner}
                  style={{
                    position: 'absolute',
                    [isTop ? 'top' : 'bottom']: -1,
                    [isLeft ? 'left' : 'right']: -1,
                    width: 16,
                    height: 16,
                    borderTop: isTop ? '2px solid #00d4aa' : 'none',
                    borderBottom: !isTop ? '2px solid #00d4aa' : 'none',
                    borderLeft: isLeft ? '2px solid #00d4aa' : 'none',
                    borderRight: !isLeft ? '2px solid #00d4aa' : 'none',
                  }}
                />
              )
            })}

            {/* Central diagram */}
            <svg viewBox="0 0 380 300" fill="none" style={{ width: '100%', height: 'auto' }}>
              {/* Concentric triangles */}
              <polygon points="190,20 360,280 20,280" stroke="rgba(0,212,170,0.15)" strokeWidth="1" strokeDasharray="4,8" fill="none"/>
              <polygon points="190,55 325,260 55,260" stroke="rgba(0,212,170,0.2)" strokeWidth="1" fill="rgba(0,212,170,0.02)"/>
              <polygon points="190,95 295,245 85,245" stroke="rgba(0,212,170,0.3)" strokeWidth="1.5" fill="rgba(0,212,170,0.04)"/>
              <polygon points="190,130 265,230 115,230" stroke="rgba(0,212,170,0.5)" strokeWidth="2" fill="rgba(0,212,170,0.06)"/>

              {/* Blue inner */}
              <polygon points="190,160 240,218 140,218" stroke="rgba(59,122,255,0.6)" strokeWidth="1.5" fill="rgba(59,122,255,0.08)"/>

              {/* Glow center */}
              <circle cx="190" cy="189" r="8" fill="rgba(0,212,170,0.2)"/>
              <circle cx="190" cy="189" r="4" fill="#00d4aa" opacity="0.9"/>

              {/* Connecting lines */}
              <line x1="190" y1="20" x2="190" y2="160" stroke="rgba(0,212,170,0.15)" strokeWidth="0.5" strokeDasharray="2,6"/>
              <line x1="360" y1="280" x2="240" y2="218" stroke="rgba(0,212,170,0.15)" strokeWidth="0.5" strokeDasharray="2,6"/>
              <line x1="20" y1="280" x2="140" y2="218" stroke="rgba(0,212,170,0.15)" strokeWidth="0.5" strokeDasharray="2,6"/>

              {/* Node labels */}
              <text x="190" y="12" textAnchor="middle" fontSize="8" fill="#6b7fa3" fontFamily="'Fira Sans', sans-serif" letterSpacing="1.5">INTELLIGENCE</text>
              <text x="375" y="285" textAnchor="end" fontSize="8" fill="#6b7fa3" fontFamily="'Fira Sans', sans-serif" letterSpacing="1.5">SCALE</text>
              <text x="5" y="285" textAnchor="start" fontSize="8" fill="#6b7fa3" fontFamily="'Fira Sans', sans-serif" letterSpacing="1.5">SPEED</text>

              {/* Data nodes */}
              {[
                { cx: 95, cy: 160, label: 'Data' },
                { cx: 285, cy: 160, label: 'Model' },
                { cx: 190, cy: 290, label: 'Action' },
              ].map(n => (
                <g key={n.label}>
                  <rect x={n.cx - 22} y={n.cy - 10} width="44" height="20" rx="2" fill="rgba(26,37,64,0.9)" stroke="rgba(0,212,170,0.3)" strokeWidth="1"/>
                  <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize="8.5" fill="#e8edf5" fontFamily="'Fira Sans', sans-serif" letterSpacing="1">{n.label}</text>
                </g>
              ))}
            </svg>

            {/* Stats overlay */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(26,37,64,0.6)' }}>
              {[
                { v: '2017', l: 'Founded' },
                { v: '80+', l: 'Engineers' },
                { v: '18', l: 'Countries' },
              ].map(item => (
                <div key={item.l} style={{ textAlign: 'center' }}>
                  <div className="font-display" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#fff' }}>{item.v}</div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 400, letterSpacing: '0.08em', color: '#6b7fa3' }}>{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.25rem',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#3b7aff',
            }}
          >
            <div style={{ width: 20, height: 1, backgroundColor: '#3b7aff' }} />
            WHO WE ARE
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: '#fff',
              marginBottom: '1.5rem',
            }}
          >
            ENGINEERING
            <br />
            DECISIONS AT SCALE
          </h2>

          <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6b7fa3', marginBottom: '1.5rem' }}>
            Trigul was founded on the idea that intelligence — real, applied, measurable
            intelligence — is the only sustainable competitive advantage. We're a team
            of engineers, data scientists, and system architects who specialize in
            turning complex data environments into clear operational signals.
          </p>
          <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6b7fa3', marginBottom: '2.5rem' }}>
            We don't deliver decks. We deliver working systems. Our engagements are
            structured around outcomes, not outputs — what changed in your business
            because of what we built together.
          </p>

          {/* Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,212,170,0.08)',
                    border: '1px solid rgba(0,212,170,0.2)',
                    borderRadius: '3px',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#00d4aa',
                    fontFamily: 'Fira Sans, sans-serif',
                  }}
                >
                  0{i + 1}
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em', color: '#e8edf5', marginBottom: '0.25rem' }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#6b7fa3' }}>
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
