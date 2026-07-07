import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let frame = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      // Rotating outer rings
      for (let ring = 0; ring < 3; ring++) {
        const r = 120 + ring * 70
        const rot = (frame * (ring % 2 === 0 ? 0.003 : -0.003)) + ring
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(rot)
        ctx.strokeStyle = `rgba(0,212,170,${0.06 - ring * 0.015})`
        ctx.lineWidth = 1
        ctx.setLineDash([4, 8])
        ctx.beginPath()
        ctx.arc(0, 0, r, 0, Math.PI * 2)
        ctx.stroke()
        // Triangle nodes on ring
        for (let n = 0; n < 3; n++) {
          const a = (n / 3) * Math.PI * 2
          const nx = Math.cos(a) * r
          const ny = Math.sin(a) * r
          ctx.fillStyle = `rgba(0,212,170,${0.5 - ring * 0.12})`
          ctx.beginPath()
          ctx.arc(nx, ny, 2.5 - ring * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      }

      // Center triangle
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(frame * 0.005)
      const ts = 60
      ctx.strokeStyle = 'rgba(0,212,170,0.4)'
      ctx.lineWidth = 1.5
      ctx.setLineDash([])
      ctx.beginPath()
      ctx.moveTo(0, -ts)
      ctx.lineTo(ts * 0.866, ts * 0.5)
      ctx.lineTo(-ts * 0.866, ts * 0.5)
      ctx.closePath()
      ctx.stroke()
      ctx.restore()

      // Grid lines
      ctx.strokeStyle = 'rgba(26,37,64,0.4)'
      ctx.lineWidth = 0.5
      ctx.setLineDash([1, 16])
      for (let x = 0; x < canvas.width; x += 60) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += 60) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Floating particles
      for (let i = 0; i < 8; i++) {
        const t = frame * 0.008 + i * 1.3
        const px = cx + Math.cos(t * 0.7 + i) * (80 + i * 20)
        const py = cy + Math.sin(t * 0.9 + i * 0.5) * (60 + i * 15)
        ctx.fillStyle = i % 2 === 0 ? `rgba(0,212,170,0.5)` : `rgba(59,122,255,0.5)`
        ctx.beginPath()
        ctx.arc(px, py, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#04080f',
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,170,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(59,122,255,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.7,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '7rem 2rem 4rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              marginBottom: '2rem',
              padding: '0.375rem 0.875rem',
              border: '1px solid rgba(0,212,170,0.25)',
              borderRadius: '2px',
              backgroundColor: 'rgba(0,212,170,0.06)',
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#00d4aa',
                animation: 'pulse-ring 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: '#00d4aa',
                fontFamily: 'Fira Sans, sans-serif',
              }}
            >
              INTELLIGENCE ENGINEERED
            </span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.25rem)',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            SYSTEMS THAT
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4aa 0%, #3b7aff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              THINK AHEAD
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.0625rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6b7fa3',
              marginBottom: '2.5rem',
              maxWidth: 480,
            }}
          >
            Trigul builds precision-engineered AI and data intelligence platforms
            that transform enterprise operations — from raw signal to decisive action.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#04080f',
                backgroundColor: '#00d4aa',
                borderRadius: '3px',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 24px rgba(0,212,170,0.3)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 32px rgba(0,212,170,0.45)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 4px 24px rgba(0,212,170,0.3)'
              }}
            >
              START A PROJECT
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#e8edf5',
                backgroundColor: 'transparent',
                border: '1px solid rgba(232,237,245,0.2)',
                borderRadius: '3px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(232,237,245,0.4)'
                el.style.backgroundColor = 'rgba(232,237,245,0.05)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(232,237,245,0.2)'
                el.style.backgroundColor = 'transparent'
              }}
            >
              EXPLORE SERVICES
            </a>
          </div>

          {/* Trust bar */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(26,37,64,0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '240+', label: 'Enterprise Clients' },
              { value: '$4.2B', label: 'Value Delivered' },
              { value: '98%', label: 'Retention Rate' },
            ].map(stat => (
              <div key={stat.label}>
                <div
                  className="font-display"
                  style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 400, color: '#6b7fa3', letterSpacing: '0.04em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: geometric graphic */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <GeoGraphic />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#6b7fa3' }}>SCROLL</div>
        <div style={{ width: 1, height: 40, backgroundColor: '#1a2540', position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to bottom, #00d4aa, transparent)',
              animation: 'float 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}

function GeoGraphic() {
  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      style={{ maxWidth: '100%', animation: 'float 7s ease-in-out infinite' }}
    >
      {/* Outer dashed triangle */}
      <polygon
        points="210,20 390,340 30,340"
        stroke="rgba(0,212,170,0.15)"
        strokeWidth="1"
        strokeDasharray="6,10"
        fill="none"
      />
      {/* Mid triangle */}
      <polygon
        points="210,70 350,310 70,310"
        stroke="rgba(0,212,170,0.25)"
        strokeWidth="1.5"
        fill="rgba(0,212,170,0.03)"
      />
      {/* Inner glowing triangle */}
      <polygon
        points="210,120 310,280 110,280"
        stroke="rgba(0,212,170,0.6)"
        strokeWidth="2"
        fill="rgba(0,212,170,0.06)"
      />
      {/* Center diamond */}
      <polygon
        points="210,180 240,210 210,240 180,210"
        stroke="#00d4aa"
        strokeWidth="2"
        fill="rgba(0,212,170,0.15)"
      />
      {/* Glow point */}
      <circle cx="210" cy="210" r="6" fill="#00d4aa" opacity="0.9" />
      <circle cx="210" cy="210" r="16" fill="rgba(0,212,170,0.15)" />
      <circle cx="210" cy="210" r="30" fill="rgba(0,212,170,0.05)" />
      {/* Vertices */}
      <circle cx="210" cy="120" r="4" fill="#00d4aa" opacity="0.7" />
      <circle cx="310" cy="280" r="4" fill="#3b7aff" opacity="0.7" />
      <circle cx="110" cy="280" r="4" fill="#00d4aa" opacity="0.7" />
      {/* Corner vertex dots outer */}
      <circle cx="210" cy="20" r="3" fill="rgba(0,212,170,0.4)" />
      <circle cx="390" cy="340" r="3" fill="rgba(0,212,170,0.4)" />
      <circle cx="30" cy="340" r="3" fill="rgba(0,212,170,0.4)" />
      {/* Cross hairs */}
      <line x1="210" y1="60" x2="210" y2="360" stroke="rgba(26,37,64,0.4)" strokeWidth="0.5" strokeDasharray="2,8" />
      <line x1="60" y1="210" x2="360" y2="210" stroke="rgba(26,37,64,0.4)" strokeWidth="0.5" strokeDasharray="2,8" />
      {/* Blue accent triangle */}
      <polygon
        points="210,150 270,260 150,260"
        stroke="rgba(59,122,255,0.3)"
        strokeWidth="1"
        fill="rgba(59,122,255,0.04)"
      />
      {/* Label boxes */}
      <rect x="170" y="380" width="80" height="20" rx="2" fill="rgba(26,37,64,0.5)" />
      <text x="210" y="394" textAnchor="middle" fontSize="9" fill="#6b7fa3" fontFamily="'Fira Sans', sans-serif" letterSpacing="2">PRECISION</text>
    </svg>
  )
}
