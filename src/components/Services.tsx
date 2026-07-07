const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h6l3-8 4 16 3-8h4" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: '01 — AI & MACHINE LEARNING',
    title: 'Predictive Intelligence',
    description:
      'Deploy production-grade ML pipelines that learn from your data and surface predictive signals before your competition does. From model design to inference infrastructure.',
    features: ['Anomaly detection', 'Demand forecasting', 'NLP & classification', 'Real-time inference'],
    accent: '#00d4aa',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="#3b7aff" strokeWidth="1.5"/>
        <rect x="15" y="3" width="10" height="10" rx="1.5" stroke="#3b7aff" strokeWidth="1.5"/>
        <rect x="3" y="15" width="10" height="10" rx="1.5" stroke="#3b7aff" strokeWidth="1.5"/>
        <rect x="15" y="15" width="10" height="10" rx="1.5" stroke="#3b7aff" strokeWidth="1.5"/>
      </svg>
    ),
    tag: '02 — DATA PLATFORM',
    title: 'Unified Data Architecture',
    description:
      'End-to-end data infrastructure — streaming ingestion, lakehouse patterns, governed pipelines — built to scale from megabytes to petabytes without re-platforming.',
    features: ['Data lakehouse design', 'Real-time streaming', 'Data governance', 'Semantic layer'],
    accent: '#3b7aff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,3 25,9 25,19 14,25 3,19 3,9" stroke="#00d4aa" strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="4" stroke="#00d4aa" strokeWidth="1.5"/>
      </svg>
    ),
    tag: '03 — SYSTEM ARCHITECTURE',
    title: 'Resilient Systems Design',
    description:
      'Architecture reviews and greenfield design for distributed systems that handle volatility — event-driven, microservices, and edge patterns that stay reliable under load.',
    features: ['Distributed systems', 'Event-driven design', 'Edge computing', 'Resilience engineering'],
    accent: '#00d4aa',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v7M14 18v7M3 14h7M18 14h7" stroke="#3b7aff" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="4.5" stroke="#3b7aff" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="1.5" fill="#3b7aff"/>
      </svg>
    ),
    tag: '04 — DIGITAL TRANSFORMATION',
    title: 'Enterprise Modernization',
    description:
      'From legacy migrations to cloud-native reinvention — we plan, execute, and validate transformation programs that deliver measurable ROI without operational disruption.',
    features: ['Legacy modernization', 'Cloud migration', 'Process automation', 'Change management'],
    accent: '#3b7aff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="2" stroke="#00d4aa" strokeWidth="1.5"/>
        <path d="M9 12h10M9 16h6" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tag: '05 — ANALYTICS & BI',
    title: 'Decision Intelligence',
    description:
      'Semantic analytics layers, embedded dashboards, and self-serve BI that turn every stakeholder into a data-fluent decision maker — no SQL required.',
    features: ['Semantic metrics layer', 'Executive dashboards', 'Self-serve analytics', 'KPI automation'],
    accent: '#00d4aa',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L3 8v6c0 5.5 4.8 10.6 11 12 6.2-1.4 11-6.5 11-12V8L14 3z" stroke="#3b7aff" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <path d="M9 14l3.5 3.5L19 10" stroke="#3b7aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: '06 — SECURITY & COMPLIANCE',
    title: 'Secure by Design',
    description:
      'Threat modeling, zero-trust frameworks, and compliance automation (SOC 2, ISO 27001, GDPR) embedded into your architecture — not bolted on afterward.',
    features: ['Zero-trust architecture', 'Threat modeling', 'Compliance automation', 'Security audits'],
    accent: '#3b7aff',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#04080f',
        padding: '7rem 0',
        position: 'relative',
      }}
    >
      {/* Top border line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,170,0.3), transparent)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: 600 }}>
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
            CAPABILITIES
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: '#fff',
              marginBottom: '1.25rem',
            }}
          >
            WHAT WE
            <br />
            BUILD FOR YOU
          </h2>
          <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.75, color: '#6b7fa3' }}>
            Six integrated practice areas, each engineered to create
            compounding advantage when deployed together.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(26,37,64,0.5)',
            border: '1px solid rgba(26,37,64,0.5)',
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                backgroundColor: '#04080f',
                padding: '2.5rem 2rem',
                cursor: 'default',
                border: '1px solid transparent',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                  opacity: 0.5,
                }}
              />

              <div style={{ marginBottom: '1.25rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '0.75rem',
                    backgroundColor: `${service.accent}14`,
                    borderRadius: '4px',
                    marginBottom: '1rem',
                  }}
                >
                  {service.icon}
                </div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: service.accent,
                    marginBottom: '0.75rem',
                  }}
                >
                  {service.tag}
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    color: '#fff',
                    marginBottom: '0.875rem',
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#6b7fa3' }}>
                  {service.description}
                </p>
              </div>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {service.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: service.accent, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 400, color: '#94a3b8' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
