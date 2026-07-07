import { useEffect, useRef, useState } from 'react'

const metrics = [
  { value: 240, suffix: '+', label: 'Enterprise Clients', desc: 'Across finance, logistics, and healthcare sectors' },
  { value: 4.2, suffix: 'B', prefix: '$', label: 'Value Delivered', desc: 'Verified client impact since 2017' },
  { value: 98, suffix: '%', label: 'Client Retention', desc: 'Year-over-year program renewal rate' },
  { value: 3.1, suffix: 'x', label: 'Avg ROI Multiple', desc: 'Measured 12 months post-deployment' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    const steps = 60
    const stepTime = duration / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(parseFloat((target * eased).toFixed(target < 10 ? 1 : 0)))
      if (step >= steps) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [target, duration, start])
  return val
}

function StatCard({ metric, index, inView }: { metric: typeof metrics[0]; index: number; inView: boolean }) {
  const count = useCountUp(metric.value, 1800, inView)
  const display = metric.value < 10 ? count.toFixed(1) : Math.round(count as number)

  return (
    <div
      style={{
        padding: '2.5rem 2rem',
        border: '1px solid rgba(26,37,64,0.6)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,170,0.3)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,37,64,0.6)' }}
    >
      {/* Corner mark */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 8, height: 8, borderTop: '1px solid #00d4aa', borderLeft: '1px solid #00d4aa' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 8, height: 8, borderBottom: '1px solid #00d4aa', borderRight: '1px solid #00d4aa' }} />

      <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', color: '#00d4aa', marginBottom: '1rem' }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div
        className="font-display"
        style={{
          fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: '0.625rem',
        }}
      >
        {metric.prefix || ''}{display}{metric.suffix}
      </div>

      <div
        className="font-display"
        style={{ fontSize: '1.0625rem', fontWeight: 600, letterSpacing: '0.05em', color: '#e8edf5', marginBottom: '0.5rem' }}
      >
        {metric.label}
      </div>
      <div style={{ fontSize: '0.8125rem', fontWeight: 300, lineHeight: 1.6, color: '#6b7fa3' }}>
        {metric.desc}
      </div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="solutions"
      style={{ backgroundColor: '#090f1c', padding: '7rem 0', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,170,0.2), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(59,122,255,0.2), transparent)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            IMPACT IN NUMBERS
            <div style={{ width: 20, height: 1, backgroundColor: '#00d4aa' }} />
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
            THE RESULTS SPEAK
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(26,37,64,0.4)',
          }}
          className="stats-grid"
        >
          {metrics.map((m, i) => (
            <StatCard key={i} metric={m} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
