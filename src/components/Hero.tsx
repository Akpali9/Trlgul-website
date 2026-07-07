import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let animId: number
    let frame = 0

    // ---- resize with device pixel ratio ----
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    // ---- particle system ----
    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }> = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#00d4aa' : i % 3 === 1 ? '#3b7aff' : '#6b7fa3',
      })
    }

    // ---- animation loop ----
    const draw = () => {
      frame++
      ctx.clearRect(0, 0, width, height)

      // draw subtle grid
      ctx.strokeStyle = 'rgba(26,37,64,0.25)'
      ctx.lineWidth = 0.5
      ctx.setLineDash([2, 12])
      const step = 60
      for (let x = step; x < width; x += step) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = step; y < height; y += step) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      ctx.setLineDash([])

      // update & draw particles
      const cx = width / 2
      const cy = height / 2

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        // wrap around
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.7
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * (0.8 + 0.2 * Math.sin(frame * 0.02 + p.x)), 0, Math.PI * 2)
        ctx.fill()
      }

      // draw connections between close particles
      ctx.globalAlpha = 0.15
      ctx.lineWidth = 0.8
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle =
              dist < 60
                ? `rgba(0,212,170,${0.3 * (1 - dist / 120)})`
                : `rgba(59,122,255,${0.15 * (1 - dist / 120)})`
            ctx.stroke()
          }
        }
      }

      // ---- central AI core ----
      const coreRadius = 40 + 6 * Math.sin(frame * 0.02)
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius)
      grad.addColorStop(0, 'rgba(0,212,170,0.2)')
      grad.addColorStop(0.5, 'rgba(0,212,170,0.05)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2)
      ctx.fill()

      // rotating triangle rings
      for (let ring = 0; ring < 3; ring++) {
        const r = 90 + ring * 60
        const rot = frame * (ring % 2 === 0 ? 0.004 : -0.004) + ring * 0.5
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(rot)
        ctx.strokeStyle = `rgba(0,212,170,${0.08 - ring * 0.02})`
        ctx.lineWidth = 1.2
        ctx.setLineDash([6, 10])
        ctx.beginPath()
        ctx.arc(0, 0, r, 0, Math.PI * 2)
        ctx.stroke()
        // glowing nodes on ring
        for (let n = 0; n < 4; n++) {
          const a = (n / 4) * Math.PI * 2 + frame * 0.01
          const nx = Math.cos(a) * r
          const ny = Math.sin(a) * r
          const glow = 0.4 + 0.3 * Math.sin(frame * 0.03 + n)
          ctx.fillStyle = `rgba(0,212,170,${glow * 0.6})`
          ctx.shadowColor = '#00d4aa'
          ctx.shadowBlur = 12
          ctx.beginPath()
          ctx.arc(nx, ny, 3 - ring * 0.7, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.shadowBlur = 0
        ctx.restore()
      }

      // ---- floating data particles (glowing dots) ----
      for (let i = 0; i < 12; i++) {
        const t = frame * 0.01 + i * 0.9
        const px = cx + Math.cos(t * 0.6 + i * 1.2) * (120 + i * 15)
        const py = cy + Math.sin(t * 0.8 + i * 0.7) * (90 + i * 12)
        const alpha = 0.3 + 0.3 * Math.sin(t + i)
        ctx.fillStyle = i % 2 === 0 ? `rgba(0,212,170,${alpha})` : `rgba(59,122,255,${alpha})`
        ctx.shadowColor = i % 2 === 0 ? '#00d4aa' : '#3b7aff'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(px, py, 2 + 0.5 * Math.sin(t), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#04080f]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-glow" />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 border border-[#00d4aa]/25 rounded-sm bg-[#00d4aa]/6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse-ring" />
              <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#00d4aa] font-sans">
                AI INTELLIGENCE ENGINE
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-5">
              SYSTEMS THAT
              <br />
              <span className="bg-gradient-to-r from-[#00d4aa] to-[#3b7aff] bg-clip-text text-transparent">
                THINK AHEAD
              </span>
            </h1>

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#6b7fa3] max-w-lg mb-8">
              Trigul builds precision‑engineered AI and data intelligence platforms
              that transform enterprise operations — from raw signal to decisive action.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-widest text-[#04080f] bg-[#00d4aa] rounded hover:shadow-[0_8px_32px_rgba(0,212,170,0.45)] transition-all duration-200 hover:-translate-y-0.5"
              >
                START A PROJECT
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-widest text-[#e8edf5] border border-[#e8edf5]/20 rounded hover:border-[#e8edf5]/40 hover:bg-[#e8edf5]/5 transition-all duration-200"
              >
                EXPLORE SERVICES
              </a>
            </div>

            {/* Trust stats */}
            <div className="mt-10 pt-6 border-t border-[#1a2540]/60 flex flex-wrap gap-8">
              {[
                { value: '240+', label: 'Enterprise Clients' },
                { value: '$4.2B', label: 'Value Delivered' },
                { value: '98%', label: 'Retention Rate' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs font-medium tracking-wider text-[#6b7fa3]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – animated geometric graphic */}
          <div className="flex justify-center items-center">
            <GeoGraphic />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[0.65rem] tracking-[0.12em] text-[#6b7fa3]">SCROLL</span>
        <div className="w-px h-10 bg-[#1a2540] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#00d4aa] to-transparent animate-scroll-float" />
        </div>
      </div>

      {/* Global animations (using Tailwind-compatible keyframes) */}
      <style>{`
        @keyframes pulse-ring {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        @keyframes scroll-float {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-float {
          animation: scroll-float 1.8s ease-in-out infinite;
        }
        .bg-radial-glow {
          background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,170,0.06) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 80% 20%, rgba(59,122,255,0.05) 0%, transparent 60%);
        }
        @media (max-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: 1fr; }
        }
        /* Ensure canvas fills container */
        canvas {
          display: block;
        }
      `}</style>
    </section>
  )
}

// ---- Geometric Graphic Component (AI‑themed) ----
function GeoGraphic() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
      <svg
        viewBox="0 0 420 420"
        fill="none"
        className="w-full h-full animate-float"
        style={{ animation: 'float 8s ease-in-out infinite' }}
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
        {/* Inner glowing triangle with gradient */}
        <polygon
          points="210,120 310,280 110,280"
          stroke="rgba(0,212,170,0.6)"
          strokeWidth="2"
          fill="url(#triGrad)"
        />
        <defs>
          <radialGradient id="triGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,212,170,0.15)" />
            <stop offset="100%" stopColor="rgba(0,212,170,0.02)" />
          </radialGradient>
        </defs>

        {/* Central diamond / AI core */}
        <polygon
          points="210,180 240,210 210,240 180,210"
          stroke="#00d4aa"
          strokeWidth="2"
          fill="rgba(0,212,170,0.15)"
        />
        <circle cx="210" cy="210" r="6" fill="#00d4aa" opacity="0.9" />
        <circle cx="210" cy="210" r="16" fill="rgba(0,212,170,0.15)" />
        <circle cx="210" cy="210" r="30" fill="rgba(0,212,170,0.05)" />

        {/* Vertex nodes */}
        <circle cx="210" cy="120" r="4" fill="#00d4aa" opacity="0.7" />
        <circle cx="310" cy="280" r="4" fill="#3b7aff" opacity="0.7" />
        <circle cx="110" cy="280" r="4" fill="#00d4aa" opacity="0.7" />

        {/* Outer corner dots */}
        <circle cx="210" cy="20" r="3" fill="rgba(0,212,170,0.4)" />
        <circle cx="390" cy="340" r="3" fill="rgba(0,212,170,0.4)" />
        <circle cx="30" cy="340" r="3" fill="rgba(0,212,170,0.4)" />

        {/* Crosshairs */}
        <line x1="210" y1="60" x2="210" y2="360" stroke="rgba(26,37,64,0.4)" strokeWidth="0.5" strokeDasharray="2,8" />
        <line x1="60" y1="210" x2="360" y2="210" stroke="rgba(26,37,64,0.4)" strokeWidth="0.5" strokeDasharray="2,8" />

        {/* Blue accent triangle */}
        <polygon
          points="210,150 270,260 150,260"
          stroke="rgba(59,122,255,0.3)"
          strokeWidth="1"
          fill="rgba(59,122,255,0.04)"
        />

        {/* AI label */}
        <rect x="175" y="380" width="70" height="20" rx="2" fill="rgba(26,37,64,0.6)" />
        <text x="210" y="394" textAnchor="middle" fontSize="9" fill="#6b7fa3" fontFamily="'Fira Sans', sans-serif" letterSpacing="2">NEURAL CORE</text>

        {/* Floating tiny data points */}
        <circle cx="180" cy="100" r="2" fill="#00d4aa" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="290" cy="240" r="2" fill="#3b7aff" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="290" r="2" fill="#00d4aa" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
      {/* Glow behind SVG */}
      <div className="absolute inset-0 rounded-full bg-[#00d4aa]/5 blur-3xl pointer-events-none" />
    </div>
  )
}
