import { useState } from 'react'

const engagements = [
  'AI & Machine Learning',
  'Data Platform',
  'System Architecture',
  'Digital Transformation',
  'Analytics & BI',
  'Security & Compliance',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', engagement: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#090f1c', padding: '7rem 0', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(59,122,255,0.3), transparent)' }} />

      {/* Background triangle motif */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', overflow: 'hidden', pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 600" fill="none" style={{ position: 'absolute', right: -60, top: '50%', transform: 'translateY(-50%)', width: 400, opacity: 0.06 }}>
          <polygon points="200,20 380,560 20,560" stroke="#00d4aa" strokeWidth="2" fill="rgba(0,212,170,0.1)"/>
          <polygon points="200,80 340,540 60,540" stroke="#00d4aa" strokeWidth="1" fill="none"/>
          <polygon points="200,140 300,520 100,520" stroke="#00d4aa" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'flex-start',
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div style={{ paddingTop: '0.5rem' }}>
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
              LET'S BUILD
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.01em',
                color: '#fff',
                marginBottom: '1.5rem',
              }}
            >
              START A
              <br />
              CONVERSATION
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6b7fa3', marginBottom: '3rem' }}>
              Tell us what you're working on. We'll review your situation and
              come back within 48 hours with a clear point of view on how we
              can help — and whether we're the right fit.
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  label: 'New Engagements',
                  value: 'projects@trigul.io',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="#00d4aa" strokeWidth="1.2"/>
                      <path d="M1 5l7 5 7-5" stroke="#00d4aa" strokeWidth="1.2" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'Global HQ',
                  value: 'Berlin, DE · Singapore · New York',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="6.5" r="2.5" stroke="#00d4aa" strokeWidth="1.2"/>
                      <path d="M8 14C8 14 2.5 10 2.5 6.5a5.5 5.5 0 1 1 11 0C13.5 10 8 14 8 14z" stroke="#00d4aa" strokeWidth="1.2"/>
                    </svg>
                  ),
                },
              ].map(item => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    border: '1px solid rgba(26,37,64,0.6)',
                    backgroundColor: '#04080f',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0,212,170,0.08)',
                      borderRadius: '3px',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: '#6b7fa3', marginBottom: '0.25rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 400, color: '#e8edf5' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              backgroundColor: '#04080f',
              border: '1px solid rgba(26,37,64,0.8)',
              padding: '2.5rem',
              position: 'relative',
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
                    width: 12,
                    height: 12,
                    borderTop: isTop ? '2px solid #00d4aa' : 'none',
                    borderBottom: !isTop ? '2px solid #00d4aa' : 'none',
                    borderLeft: isLeft ? '2px solid #00d4aa' : 'none',
                    borderRight: !isLeft ? '2px solid #00d4aa' : 'none',
                  }}
                />
              )
            })}

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ margin: '0 auto' }}>
                    <circle cx="24" cy="24" r="22" stroke="#00d4aa" strokeWidth="1.5"/>
                    <path d="M14 24l7 7 13-14" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                  MESSAGE RECEIVED
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#6b7fa3' }}>
                  We'll review your project and get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field
                    label="FULL NAME"
                    value={form.name}
                    onChange={v => setForm(f => ({ ...f, name: v }))}
                    placeholder="Your name"
                    required
                  />
                  <Field
                    label="COMPANY"
                    value={form.company}
                    onChange={v => setForm(f => ({ ...f, company: v }))}
                    placeholder="Company name"
                    required
                  />
                </div>
                <Field
                  label="WORK EMAIL"
                  type="email"
                  value={form.email}
                  onChange={v => setForm(f => ({ ...f, email: v }))}
                  placeholder="you@company.com"
                  required
                />

                <div>
                  <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: '#6b7fa3', marginBottom: '0.5rem' }}>
                    ENGAGEMENT TYPE
                  </label>
                  <select
                    value={form.engagement}
                    onChange={e => setForm(f => ({ ...f, engagement: e.target.value }))}
                    style={inputStyle}
                  >
                    <option value="" style={{ backgroundColor: '#04080f' }}>Select a practice area</option>
                    {engagements.map(e => (
                      <option key={e} value={e} style={{ backgroundColor: '#04080f' }}>{e}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: '#6b7fa3', marginBottom: '0.5rem' }}>
                    PROJECT BRIEF
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Describe what you're building and the challenge you're solving..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.9375rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#04080f',
                    backgroundColor: '#00d4aa',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 20px rgba(0,212,170,0.25)',
                    fontFamily: 'Fira Sans, sans-serif',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(-2px)'
                    el.style.boxShadow = '0 8px 28px rgba(0,212,170,0.4)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = '0 4px 20px rgba(0,212,170,0.25)'
                  }}
                >
                  SUBMIT PROJECT BRIEF
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '0.9375rem',
  fontWeight: 300,
  color: '#e8edf5',
  backgroundColor: 'rgba(26,37,64,0.3)',
  border: '1px solid rgba(26,37,64,0.8)',
  borderRadius: '3px',
  outline: 'none',
  fontFamily: 'Fira Sans, sans-serif',
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: '#6b7fa3', marginBottom: '0.5rem' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
        onFocus={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.5)' }}
        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(26,37,64,0.8)' }}
      />
    </div>
  )
}
