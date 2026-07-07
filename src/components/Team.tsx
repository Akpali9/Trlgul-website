const team = [
  {
    name: 'Marcus Venn',
    role: 'Co-founder & CEO',
    focus: 'System Architecture',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=560&fit=crop&auto=format',
    alt: 'Marcus Venn, CEO of Trigul',
    accent: '#00d4aa',
    bio: 'Former VP Engineering at Palantir. Designed data infrastructure for Fortune 50 financial institutions.',
  },
  {
    name: 'Priya Chandrasekaran',
    role: 'Co-founder & CTO',
    focus: 'AI & Machine Learning',
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=480&h=560&fit=crop&auto=format',
    alt: 'Priya Chandrasekaran, CTO of Trigul',
    accent: '#3b7aff',
    bio: 'PhD in Statistical Learning from MIT. Led ML research at DeepMind and Google Brain for seven years.',
  },
  {
    name: 'Tobias Lehrke',
    role: 'Chief Strategy Officer',
    focus: 'Digital Transformation',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=480&h=560&fit=crop&auto=format',
    alt: 'Tobias Lehrke, CSO of Trigul',
    accent: '#00d4aa',
    bio: 'Built and exited two B2B SaaS companies. Brings operator experience across 18 international markets.',
  },
  {
    name: 'Nadia Osei-Mensah',
    role: 'VP of Engineering',
    focus: 'Platform & Infrastructure',
    img: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=480&h=560&fit=crop&auto=format',
    alt: 'Nadia Osei-Mensah, VP Engineering at Trigul',
    accent: '#3b7aff',
    bio: 'Built resilient payment infrastructure at Stripe. Expert in high-throughput distributed systems design.',
  },
]

export default function Team() {
  return (
    <section
      id="team"
      style={{ backgroundColor: '#04080f', padding: '7rem 0', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,170,0.2), transparent)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
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
                color: '#00d4aa',
              }}
            >
              <div style={{ width: 20, height: 1, backgroundColor: '#00d4aa' }} />
              LEADERSHIP
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: '#fff',
              }}
            >
              THE BUILDERS
              <br />
              BEHIND TRIGUL
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6b7fa3' }}>
            A founding team with deep operator backgrounds — built and shipped at Palantir,
            DeepMind, Stripe, and Google before starting Trigul.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}
          className="team-grid"
        >
          {team.map((member, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                border: '1px solid rgba(26,37,64,0.6)',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', paddingBottom: '116%', overflow: 'hidden', backgroundColor: '#090f1c' }}>
                <img
                  src={member.img}
                  alt={member.alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(30%) contrast(1.05)',
                  }}
                />
                {/* Overlay gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, rgba(4,8,15,0.9) 0%, transparent 50%), linear-gradient(135deg, ${member.accent}20 0%, transparent 60%)`,
                  }}
                />
                {/* Focus badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.25rem 0.625rem',
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: member.accent,
                    border: `1px solid ${member.accent}60`,
                    backgroundColor: `${member.accent}12`,
                    borderRadius: '2px',
                  }}
                >
                  {member.focus}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.25rem 1.5rem 1.5rem', backgroundColor: '#090f1c' }}>
                <div
                  style={{ width: '100%', height: 1, background: `linear-gradient(90deg, ${member.accent}60, transparent)`, marginBottom: '1rem' }}
                />
                <div
                  className="font-display"
                  style={{ fontSize: '1.1875rem', fontWeight: 700, letterSpacing: '0.03em', color: '#fff', marginBottom: '0.25rem' }}
                >
                  {member.name}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', color: member.accent, marginBottom: '0.75rem' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 300, lineHeight: 1.65, color: '#6b7fa3' }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
