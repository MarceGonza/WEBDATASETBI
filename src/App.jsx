import React from 'react'
import datasetbiLogo from '../assets/LogoDatasetbi .png'
import grupoBetaniaLogo from '../assets/46946_Grupo Betania.png'
import biosoyaLogo from '../assets/Logo_biosoya_r.png'
import aprossLogo from '../assets/os-apross-logo.png'
import ministerioCbaLogo from '../assets/ministeriocba.png'
import moconaLogo from '../assets/logotipo_mocona_blanco_steel-01_recorte_.png'
import whatsappIcon from '../assets/iconowhatsapp.png'
import arquitecturaImg from '../assets/arquitectura.png'

const navItems = [
  ['problematica', 'Problemática'],
  ['solucion', 'Solución'],
  ['contacto', 'Contacto'],
]

const problematica = [
  {
    id: 'datos-sin-inteligencia',
    title: 'Los números no cierran entre áreas',
    text: 'Ventas tiene un Excel, finanzas otro, operaciones un tercero. Cuando alguien pide un número consolidado, el debate sobre quién tiene la razón consume más tiempo que la reunión misma.',
  },
  {
    id: 'procesos-manuales',
    title: 'Alguien dedica horas a armar informes a mano',
    text: 'Hay una persona — o varias — que cada semana consolida planillas, corrige errores y distribuye reportes. Cuando el informe llega, los datos ya tienen días de antigüedad.',
  },
  {
    id: 'decisiones-intuicion',
    title: 'Las decisiones importantes se toman sin información sólida',
    text: 'En el momento de decidir sobre precios, personal o inversión, la información disponible es parcial o contradictoria. Se decide por experiencia — que es valiosa — pero sin respaldo en datos.',
  },
  {
    id: 'metodo-poco-claro',
    title: 'El conocimiento del negocio depende de pocas personas',
    text: 'Hay alguien que sabe cómo se calculan los indicadores, cómo se cruzan los sistemas, qué significa cada cifra. Si esa persona no está disponible, el área se paraliza.',
  },
]

const solucion = [
  {
    id: 'gobierno',
    title: 'Gobierno del dato',
  },
  {
    id: 'bi-operativa',
    title: 'Área BI que produce',
  },
  {
    id: 'fuentes',
    title: 'Datawarehouse',
  },
  {
    id: 'dashboards',
    title: 'Dashboards para decisiones',
  },
  {
    id: 'equipo',
    title: 'Equipo independiente BI',
  },
  {
    id: 'procesos',
    title: 'Reportes automáticos',
  },
]

const sectors = [
  {
    id: 'agroindustria',
    icon: 'plant',
    sector: 'Agroindustria',
    title: 'ERP, silo y balanza: idiomas distintos',
    pain: 'Nadie sabe cuánto costó realmente la campaña.',
    values: [
      'ERP, balanzas, silos y campo en un único modelo de datos',
      'Costo real por cultivo, lote y campaña',
      'Comparativa de rendimiento entre campos y períodos',
    ],
    tags: ['Costo por campaña', 'Rendimiento por lote', 'Integración ERP-silo'],
  },
  {
    id: 'salud',
    icon: 'heart-rate-monitor',
    sector: 'Salud pública',
    title: 'Datos en 5 sistemas que nunca se cruzan',
    pain: 'Cada área ve su parte, nadie ve el cuadro completo.',
    values: [
      'Sistemas sanitarios integrados en un Data Warehouse',
      'Dashboards por guardia, internación y epidemiología',
      'Monitor de indicadores sanitarios en tiempo real',
    ],
    tags: ['Monitor sanitario', 'Integración multi-sistema', 'Gestión de camas'],
  },
  {
    id: 'municipios',
    icon: 'building',
    sector: 'Municipios',
    title: 'El intendente necesita saber hoy, no en una semana',
    pain: 'Los informes llegaban a fin de mes. Se decidía sobre datos viejos.',
    values: [
      'Datos de todas las secretarías en tiempo real',
      'Presupuesto, reclamos y obras en un panel',
      'IA para consulta de documentos y normativas',
    ],
    tags: ['Presupuesto en tiempo real', 'Reclamos', 'Obras'],
  },
  {
    id: 'inmobiliario',
    icon: 'building-estate',
    sector: 'Inmobiliario',
    title: 'Sin visibilidad de stock ni cobranza',
    pain: 'El stock en un Excel, el avance de obra en otro. Nadie tenía el número real.',
    values: [
      'Stock unificado: disponibles, reservadas y vendidas',
      'Pipeline de cobranza por proyecto y comprador',
      'Avance de obra vs. presupuesto en tiempo real',
    ],
    tags: ['Stock de unidades', 'Cobranza', 'Avance de obra'],
  },
  {
    id: 'retail',
    icon: 'shopping-cart',
    sector: 'Retail',
    title: 'Sucursales como islas sin información compartida',
    pain: 'Comparar sucursales era medio día de trabajo. Siempre había errores.',
    values: [
      'Ventas, stock y caja consolidados de todas las sucursales',
      'Ranking por local, producto y vendedor',
      'Alertas de quiebre de stock automáticas',
    ],
    tags: ['Multi-sucursal', 'Quiebre de stock', 'Ranking de ventas'],
  },
  {
    id: 'farmacias',
    icon: 'pill',
    sector: 'Farmacias',
    title: 'La cobranza de obras sociales: una caja negra',
    pain: 'No sabíamos qué nos debían ni cuánto tardaban en pagar.',
    values: [
      'Facturación y cobro por obra social con aging de deuda',
      'Stock crítico y alertas de vencimiento',
      'Rentabilidad real descontando convenios',
    ],
    tags: ['Cobranza OS', 'Stock crítico', 'Rentabilidad neta'],
  },
  {
    id: 'pymes',
    icon: 'home',
    sector: 'PyMEs',
    title: 'Solo el dueño sabe cómo va el negocio',
    pain: 'La información estaba en la cabeza del dueño y en planillas dispersas.',
    values: [
      'Panel unificado de ventas, finanzas y operaciones',
      'KPIs accionables por área',
      'Equipo capacitado para operar sin dependencia externa',
    ],
    tags: ['Visión 360', 'KPIs accionables', 'Autonomía'],
  },
]

const beneficios = [
  { id: 'tableros', text: 'Tableros personalizados por área y necesidad.' },
  { id: 'automatizacion', text: 'Reportes automáticos, sin tareas manuales.' },
  { id: 'indicadores', text: 'Indicadores clave alineados a objetivos.' },
  { id: 'alertas', text: 'Alertas inteligentes para anticipar desvíos.' },
  { id: 'soporte', text: 'Soporte continuo post implementación.' },
]

const procesoPasos = [
  { id: 'diagnostico', title: 'Diagnóstico', text: 'Necesidades, fuentes y puntos críticos.' },
  { id: 'integracion', title: 'Arquitectura', text: 'Base sólida y preparada para escalar.' },
  { id: 'modelado', title: 'Automatización', text: 'Flujos automáticos, menos errores.' },
  { id: 'dashboards', title: 'Dashboards', text: 'Indicadores alineados a decisiones.' },
  { id: 'capacitacion', title: 'Capacitación', text: 'Equipo listo para operar solo.' },
  { id: 'acompanamiento', title: 'Acompañamiento', text: 'Seguimiento mensual continuo.' },
]

const plazosEtapas = [
  { id: 'analisis', title: 'Análisis funcional' },
  { id: 'implementacion', title: 'Despliegue' },
  { id: 'diseno', title: 'Diseño primer dashboard' },
  { id: 'transferencia', title: 'Transferencia' },
]

const clientLogos = [
  { id: 'betania', src: grupoBetaniaLogo, alt: 'Grupo Betania' },
  { id: 'biosoya', src: biosoyaLogo, alt: 'Biosoya' },
  { id: 'apross', src: aprossLogo, alt: 'APROSS' },
  { id: 'ministerio-cba', src: ministerioCbaLogo, alt: 'Ministerio de Córdoba' },
  { id: 'mocona', src: moconaLogo, alt: 'Moconá' },
]

const whatsappContactUrl =
  'https://api.whatsapp.com/send/?phone=%2B5493515182083&text=Hola%2C+tengo+inter%C3%A9s+en+conocer+m%C3%A1s.&type=phone_number&app_absent=0'

function SectionCard({ id, kicker, title, children, className = '' }) {
  return (
    <section id={id} className={`card ${className}`.trim()}>
      <div className="inner">
        {kicker ? <span className="kicker">{kicker}</span> : null}
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  )
}

function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item, index) => (
        <li key={typeof item === 'string' ? item : index}>{item}</li>
      ))}
    </ul>
  )
}

function ProblemIcon({ id }) {
  switch (id) {
    case 'abundancia':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 8h16M4 12h16M4 16h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'dispersa':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 6h8M6 8v8M18 8v8M8 18h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'manual':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h9M11 8l3 4-3 4M5 18h14M5 6h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'tiempos':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 13V9M12 13l3 2M9 3h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'intuicion':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 18h14M7 15l3-3 2 2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'ia':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'metodo':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 7h8M8 12h8M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 8h12M6 12h9M6 16h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="17.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
  }
}

function ProblemHighlights({ items }) {
  const [active, setActive] = React.useState(0)
  const total = items.length

  function prev() { setActive((a) => (a - 1 + total) % total) }
  function next() { setActive((a) => (a + 1) % total) }

  return (
    <div className="problem-highlights">
      <p className="problem-subtitle">No son problemas de tecnología. Son problemas de organización de la información que frenan decisiones concretas todos los días.</p>
      <ul className="problem-grid" role="list" aria-label="Principales problemáticas detectadas">
        {items.map((item, i) => (
          <li key={item.id} className={`problem-card-item${i === active ? ' is-active' : ''}`}>
            <article className="problem-pillar">
              <h3 className="problem-item-title">{item.title}</h3>
              <p className="problem-item-text">{item.text}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="problem-carousel-nav">
        <button className="problem-carousel-arrow" onClick={prev} aria-label="Problema anterior">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="problem-carousel-dots">
          {items.map((item, i) => (
            <button
              key={item.id}
              className={`problem-carousel-dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Ver problema ${i + 1}`}
            />
          ))}
        </div>
        <button className="problem-carousel-arrow" onClick={next} aria-label="Problema siguiente">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function SourceIconDatabase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 6v6.2c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 12v6.2c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V12" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function SourceIconEvents() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="5" width="15" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10h8M8 13h8M8 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function StageIconExtract() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5.5h16M8.5 5.5l3.5 5v8l-2.2-1.4L7.5 18.5v-8l3.5-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M16.8 11.5v5.2M14.8 14.9l2-2 2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StageIconTransform() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 4.5v2.1M12 17.4v2.1M4.5 12h2.1M17.4 12h2.1M6.8 6.8l1.5 1.5M15.7 15.7l1.5 1.5M17.2 6.8l-1.5 1.5M8.3 15.7l-1.5 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function StageIconWarehouse() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="6" width="15" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10.5h8M8 14h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 3.8h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function OutputIconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19h14M8 16v-4M12 16V8M16 16v-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

function OutputIconRobot() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="12" height="9" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="10" cy="12.5" r="1.1" fill="currentColor" />
      <circle cx="14" cy="12.5" r="1.1" fill="currentColor" />
      <path d="M12 5v2M9 17.5v2M15 17.5v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function ArchitectureGraphic() {
  return (
    <div className="architecture-scene" aria-label="Arquitectura de inteligencia de datos">
      <img className="architecture-scene-image" src={arquitecturaImg} alt="" />

      <article className="architecture-overlay-card architecture-overlay-card-source">
        <span className="architecture-overlay-icon" aria-hidden="true"><SourceIconDatabase /></span>
        <div>
          <strong>Fuentes</strong>
          <small>ERP, CRM, eventos y operación</small>
        </div>
      </article>

      <article className="architecture-overlay-card architecture-overlay-card-capture">
        <span className="architecture-overlay-icon" aria-hidden="true"><SourceIconEvents /></span>
        <div>
          <strong>Captura continua</strong>
          <small>Datos disponibles en tiempo útil</small>
        </div>
      </article>

      <article className="architecture-overlay-card architecture-overlay-card-bi">
        <span className="architecture-overlay-icon" aria-hidden="true"><OutputIconChart /></span>
        <div>
          <strong>BI operativo</strong>
          <small>Indicadores accionables y dashboards</small>
        </div>
      </article>

      <article className="architecture-overlay-card architecture-overlay-card-ia">
        <span className="architecture-overlay-icon" aria-hidden="true"><OutputIconRobot /></span>
        <div>
          <strong>IA aplicada</strong>
          <small>Automatización y respuestas inteligentes</small>
        </div>
      </article>

      <article className="architecture-overlay-card architecture-overlay-card-core">
        <span className="architecture-overlay-icon architecture-overlay-icon-soft" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M8.2 7.2c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.4.8 1.9-.5.5-.8 1.2-.8 2 0 1.6 1.3 3 3 3 .5 0 1-.1 1.4-.3.5 1 1.6 1.7 2.8 1.7 1.8 0 3.2-1.4 3.2-3.2 0-.2 0-.5-.1-.7 1-.5 1.7-1.5 1.7-2.7 0-1.4-.9-2.6-2.2-3 .1-.3.2-.5.2-.8 0-1.8-1.4-3.2-3.2-3.2-1 0-1.9.5-2.5 1.2-.4-.4-1-.6-1.4-.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.8 12h6.5M12 8.7v6.6M9.8 9.9h.1M14.3 10.2h.1M10.1 14.1h.1M13.9 13.8h.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
        <p>Integra fuentes, organiza la información y habilita decisiones basadas en evidencia.</p>
      </article>

      <div className="architecture-overlay-tags" aria-label="Etapas del proceso">
        <article className="architecture-overlay-tag architecture-overlay-tag-extract">
          <strong>Extracción</strong>
        </article>
        <article className="architecture-overlay-tag architecture-overlay-tag-process">
          <strong>Procesamiento</strong>
        </article>
        <article className="architecture-overlay-tag architecture-overlay-tag-availability">
          <strong>Disponibilidad</strong>
        </article>
      </div>
    </div>
  )
}

function SolutionItemIcon({ id }) {
  switch (id) {
    case 'gobierno':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 8h14M5 12h14M5 16h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="18.2" cy="16.2" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'bi-operativa':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.5" y="5" width="15" height="10" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 18.5h8M12 15v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'fuentes':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="6.2" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.8" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 8.2 10.8 15M16 8.2 13.2 15M8.2 7h7.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'dashboards':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.8 18.5h14.4M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      )
    case 'equipo':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8.2" cy="8.6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="15.8" cy="8.6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4.8 17.5c.8-2 2.2-3 3.9-3h6.6c1.7 0 3.1 1 3.9 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.5 5.5h11v13h-11z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
  }
}

function SolutionIconList({ items }) {
  return (
    <div className="solution-orbit" aria-label="Pilares de la solución">
      <div className="solution-orbit-rings" aria-hidden="true" />
      <div className="solution-orbit-network" aria-hidden="true" />
      <div className="solution-orbit-grid" aria-hidden="true" />

      <article className="solution-core">
        <span className="solution-core-kicker">Modelo operativo</span>
        <span className="solution-core-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6.2" r="1.6" fill="currentColor" />
            <circle cx="17.4" cy="9.4" r="1.6" fill="currentColor" />
            <circle cx="17" cy="15.9" r="1.6" fill="currentColor" />
            <circle cx="12" cy="18.2" r="1.6" fill="currentColor" />
            <circle cx="7" cy="15.8" r="1.6" fill="currentColor" />
            <circle cx="6.6" cy="9.2" r="1.6" fill="currentColor" />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
            <path d="M12 7.8v2.4M8 10l2.5 1.1M15.7 10 13.4 11M15.6 15.1 13.5 13.1M8.3 15.1l2.3-2M12 13.8v2.7M8.2 9.4h7.9M8.3 15.8h7.8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
        </span>
        <strong>Datos conectados</strong>
        <p>Organización y operación para decidir con claridad.</p>
      </article>

      <ul className="solution-pillars" role="list" aria-label="Seis pilares de la solución">
        {items.map((item, index) => (
          <li key={item.id} className={`solution-orbit-card solution-pos-${index + 1}`}>
            <article className="solution-pillar-card">
              <span className="solution-item-icon" aria-hidden="true">
                <SolutionItemIcon id={item.id} />
              </span>
              <h3 className="solution-item-title">{item.title}</h3>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProcessStepIcon({ id }) {
  switch (id) {
    case 'diagnostico':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.8 18.5h14.4M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'integracion':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="6.2" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.8" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.2 7h7.6M8 8.4 10.7 15M16 8.4 13.3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'modelado':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6h12M6 12h8M6 18h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="16" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'dashboards':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 18.5h14M8.2 15v-3.8M12 15V8.5M15.8 15v-6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'capacitacion':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8.2" cy="8.8" r="2.1" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="15.8" cy="8.8" r="2.1" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 17.5c.8-1.9 2.2-2.9 3.9-2.9h6.2c1.7 0 3.1 1 3.9 2.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.8 12h6M13.2 12h6M10.8 8.8l2.4 3.2-2.4 3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

function PlazoIcon({ id }) {
  switch (id) {
    case 'analisis':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="m15 15 4.5 4.5M8 10.5h5M10.5 8v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'implementacion':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.5" y="5" width="15" height="10.5" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 18.5h6M12 15.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'diseno':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.5" y="5.2" width="15" height="11.8" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 14.5v-3.2M12 14.5V9M16 14.5v-5.3M7.2 18.5h9.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.8 18c1-2.2 2.7-3.3 4.8-3.3h4.8c2.1 0 3.8 1.1 4.8 3.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
  }
}

function ImpactIcon({ id }) {
  switch (id) {
    case 'tableros':
    case 'ventas':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 18.5h14M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'automatizacion':
    case 'tecnologia':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.8 6.8l1.4 1.4M15.8 15.8l1.4 1.4M17.2 6.8l-1.4 1.4M8.2 15.8l-1.4 1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'indicadores':
    case 'contable':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="5.5" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 14v-3M12 14V9M16 14v-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'alertas':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 4.8a4 4 0 0 0-4 4v2.1c0 .9-.3 1.8-.9 2.5L6 14.6h12l-1.1-1.2a3.9 3.9 0 0 1-.9-2.5V8.8a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M10.3 17.5a1.9 1.9 0 0 0 3.4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'soporte':
    case 'rrhh':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8.3" cy="8.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="15.7" cy="8.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 17.5c.8-2.1 2.2-3.1 4-3.1h6c1.8 0 3.2 1 4 3.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'logistica':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.8 8h10.4v7.2H4.8zM15.2 10.2h2.6L19.2 12v3.2h-4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <circle cx="8" cy="16.2" r="1.3" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.8" cy="16.2" r="1.3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 8h12M6 12h9M6 16h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
  }
}

function ImpactList({ items, className = '' }) {
  return (
    <ul className={`bullet-list impact-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.id}>
          <span className="impact-icon" aria-hidden="true">
            <ImpactIcon id={item.id} />
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

function PlazosDecorIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="plazosDecorA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5FD7F2" />
          <stop offset="1" stopColor="#1A9FBE" />
        </linearGradient>
      </defs>
      <path d="M78 18h28l-8 10v10H86V28l-8-10Z" fill="url(#plazosDecorA)" stroke="#0F8EA6" strokeWidth="3" strokeLinejoin="round" />
      <path d="M92 38v16l-10 8H68" stroke="#0F8EA6" strokeWidth="5" strokeLinecap="round" />
      <path d="M34 66h34l8 8-8 8H34" fill="url(#plazosDecorA)" stroke="#0F8EA6" strokeWidth="3" strokeLinejoin="round" />
      <path d="M20 26l6-6h8l6 6v8l-6 6h-8l-6-6v-8Z" fill="url(#plazosDecorA)" stroke="#0F8EA6" strokeWidth="3" />
      <circle cx="30" cy="30" r="6" fill="#E8FAFF" stroke="#0F8EA6" strokeWidth="3" />
      <circle cx="62" cy="62" r="4.5" fill="#1A9FBE" stroke="#0F8EA6" strokeWidth="2.5" />
      <path d="M18 90h84" stroke="#0F8EA6" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 6" />
      <circle cx="34" cy="90" r="3.8" fill="#4DC6E4" />
      <circle cx="56" cy="90" r="3.8" fill="#4DC6E4" />
      <circle cx="78" cy="90" r="3.8" fill="#4DC6E4" />
    </svg>
  )
}

function SectorIcon({ id }) {
  switch (id) {
    case 'plant':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 20V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M12 10c0-4 3.5-6 6-5-1 4-3.5 5.5-6 5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 14c0-4-3.5-6-6-5 1 4 3.5 5.5 6 5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      )
    case 'heart-rate-monitor':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 12h3l2-5 3 9 2-4h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5.5c.8-1.6 3.6-2.4 4.8 0 1.2 2.4-1.2 4.8-4.8 7C8.4 10.3 6 7.9 7.2 5.5 8.4 3.1 11.2 3.9 12 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )
    case 'building':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 8h2M14 8h2M8 12h2M14 12h2M10 20v-4h4v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'building-estate':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="7" width="11" height="13" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M14 10h4a1.2 1.2 0 0 1 1.2 1.2V20H14" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M6.5 11h4M6.5 14.5h4M9 20v-3h3v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'shopping-cart':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 4h1.5l2.7 9h8.6l1.7-6H7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="19.5" r="1.3" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16" cy="19.5" r="1.3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      )
    case 'pill':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.5" y="9.5" width="15" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 9.5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.5" y="4.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
  }
}

function SectorCarousel() {
  const [active, setActive] = React.useState(0)
  const total = sectors.length
  const sector = sectors[active]

  function prev() { setActive((a) => (a - 1 + total) % total) }
  function next() { setActive((a) => (a + 1) % total) }

  return (
    <section id="sectores" className="card">
      <div className="inner sector-carousel-inner">
        <div className="sector-carousel-header">
          <span className="kicker">Industrias que atendemos</span>
          <h2 className="sector-carousel-title">El mismo método, adaptado a tu Sector de Negocio</h2>
          <p className="sector-carousel-subtitle">
            Cada sector tiene sus sistemas, sus dolores y sus decisiones. Conocemos esos contextos — y por eso integramos lo que otros no logran conectar.
          </p>
        </div>

        <div className="sector-tabs" role="tablist" aria-label="Sectores de industria">
          {sectors.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              className={`sector-tab${i === active ? ' is-active' : ''}`}
              aria-selected={i === active}
              aria-controls="sector-card-panel"
              onClick={() => setActive(i)}
            >
              <span className="sector-tab-icon" aria-hidden="true">
                <SectorIcon id={s.icon} />
              </span>
              {s.sector}
            </button>
          ))}
        </div>

        <div id="sector-card-panel" className="sector-card-panel" role="tabpanel" aria-live="polite">
          <div className="sector-card-title-row">
            <span className="sector-card-sector-icon" aria-hidden="true">
              <SectorIcon id={sector.icon} />
            </span>
            <h3 className="sector-card-title">{sector.title}</h3>
          </div>

          <div className="sector-card-body">
            <div className="sector-card-problem">
              <p className="sector-col-label">El problema típico</p>
              <blockquote className="sector-pain">{sector.pain}</blockquote>
            </div>
            <div className="sector-card-solution">
              <p className="sector-col-label">Lo que resolvemos</p>
              <ul className="sector-values">
                {sector.values.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sector-card-tags">
            {sector.tags.map((t) => (
              <span key={t} className="sector-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="sector-nav">
          <button className="sector-nav-arrow" onClick={prev} aria-label="Sector anterior">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="sector-nav-counter" aria-live="polite" aria-atomic="true">
            {active + 1} / {total}
          </span>
          <button className="sector-nav-arrow" onClick={next} aria-label="Sector siguiente">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="sector-nav-dots" role="presentation">
            {sectors.map((s, i) => (
              <button
                key={s.id}
                className={`sector-nav-dot${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Ver ${s.sector}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [solutionVisible] = React.useState(true)
  const [schemaVisible] = React.useState(true)
  const [contactFormOpen, setContactFormOpen] = React.useState(false)
  const [contactSubmitted, setContactSubmitted] = React.useState(false)

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>

      <header className="site-header">
        <div className="container topbar">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <img className="brand-logo" src={datasetbiLogo} alt="DATASETBI" />
          </a>

          <nav aria-label="Navegación principal">
            <ul className="nav-list">
              {navItems.map(([href, label]) => (
                <li key={href}>
                  <a href={`#${href}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="hero-section" aria-label="Propuesta principal">
          <div className="hero-shell">
            <div className="hero-copy">
              <h1>
                Construimos la <span className="hero-emphasis">inteligencia</span> que tu
                negocio necesita para crecer.
              </h1>
              <p className="hero-text">
                Ordenamos tus datos, automatizamos procesos y convertimos la información
                en decisiones concretas para áreas comerciales, operativas y de gestión.
              </p>
            </div>

            <div className="hero-visual" aria-label="Visual de inteligencia de negocio">
              <div className="hero-image-shell">
                <img className="hero-image" src="/assets/heroimg.png" alt="Visual de inteligencia artificial y crecimiento" />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <SectionCard id="problematica" title="Principales Problemas Planteados por Nuestros Clientes:" className="problem-card">
            <ProblemHighlights items={problematica} />
          </SectionCard>

          <SectionCard id="solucion" title="Solución" className="solution-unified">
            <div className="solution-header">
              <p className="solution-lead">
                DatasetBI propone un modelo de organización y operación de datos para tomar
                decisiones con claridad.
              </p>
            </div>
            <div className={`solution-list-reveal ${solutionVisible ? 'is-visible' : ''}`}>
              <SolutionIconList items={solucion} />
            </div>
          </SectionCard>

          <SectorCarousel />

          <SectionCard id="proceso" title="Nuestro proceso">
            <div className="process-grid">
              {procesoPasos.map((paso, index) => (
                <article key={paso.id} className="process-step-card">
                  <span className="process-step-number" aria-hidden="true">{index + 1}</span>
                  <div>
                    <h3>{paso.title}</h3>
                    <p>{paso.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>

          <section id="contacto-bloque" aria-label="Contexto de empresa y contacto">
            <SectionCard id="quienes-somos" kicker="Equipo" title="¿Quiénes somos?">
              <div className="about-copy">
                <p>
                  Somos un equipo multidisciplinario de consultores con experiencia en <strong>Business Intelligence</strong>, <strong>Big Data</strong> e <strong>Inteligencia Artificial</strong> aplicada.
                </p>
                <p>
                  Llevamos más de <strong>60 proyectos</strong> desarrollados para pymes, grandes empresas y el sector público — en salud, retail, agroindustria, gobierno municipal y más.
                </p>
                <p>
                  Trabajamos con <strong>QlikView</strong>, <strong>Power BI</strong> y <strong>Apache Superset</strong>, y el conocimiento generado en cada proyecto queda en la organización, no en nosotros.
                </p>
              </div>
            </SectionCard>

          </section>

          <section id="clientes" className="clients-strip" aria-label="Nuestros clientes">
            <p className="clients-kicker">Confían en nosotros</p>
            <h2>Nuestros Clientes</h2>
            <div className="clients-marquee" role="region" aria-label="Carrusel de logos de clientes">
              <div className="clients-track">
                {clientLogos.map((logo) => (
                  <figure key={logo.id} className="client-logo-item">
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  </figure>
                ))}
                {clientLogos.map((logo) => (
                  <figure key={`${logo.id}-dup`} className="client-logo-item" aria-hidden="true">
                    <img src={logo.src} alt="" loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <SectionCard id="contacto" title="Hablemos de tu proyecto" className="contact-cta-card">
            <div className="contact-cta-copy">
              <p>
                Si tu organización necesita ordenar sus datos, construir arquitectura
                analítica o mejorar la toma de decisiones, podemos ayudarte. Contanos
                brevemente tu situación y coordinamos una conversación.
              </p>
            </div>
            <div className="contact-cta-actions">
              <button
                type="button"
                className="contact-cta-button"
                aria-expanded={contactFormOpen}
                aria-controls="contact-form-panel"
                onClick={() => setContactFormOpen((value) => !value)}
              >
                Contactar
              </button>
              <a
                className="contact-whatsapp-button"
                href={whatsappContactUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            {contactFormOpen ? (
              <>
                <form
                  id="contact-form-panel"
                  className="contact-form"
                  aria-label="Formulario de contacto"
                  action="https://formsubmit.co/pwbi@datasetbi.com"
                  method="POST"
                  target="contact-submit-frame"
                  onSubmit={() => setContactSubmitted(true)}
                >
                <input type="hidden" name="_subject" value="Consulta web DatasetBI" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="about:blank" />
                <label className="contact-field">
                  <span>Nombre</span>
                  <input type="text" name="nombre" autoComplete="name" required />
                </label>
                <label className="contact-field">
                  <span>Empresa</span>
                  <input type="text" name="empresa" autoComplete="organization" />
                </label>
                <label className="contact-field">
                  <span>Email</span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label className="contact-field contact-field-wide">
                  <span>Mensaje</span>
                  <textarea name="mensaje" rows="5" required />
                </label>
                <div className="contact-form-actions contact-field-wide">
                  <button type="submit" className="contact-submit-button">
                    Enviar
                  </button>
                </div>
                </form>
                <iframe
                  title="Formulario de contacto"
                  name="contact-submit-frame"
                  className="contact-submit-frame"
                />
              </>
            ) : null}
          </SectionCard>

          {contactSubmitted ? (
            <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
              <div className="contact-modal-backdrop" onClick={() => setContactSubmitted(false)} />
              <div className="contact-modal-panel">
                <h3 id="contact-modal-title">Mensaje enviado</h3>
                <p>Te responderemos a la brevedad.</p>
                <button
                  type="button"
                  className="contact-modal-button"
                  onClick={() => setContactSubmitted(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : null}

          <section className="closing-headline" aria-label="Mensaje final principal">
            <p>Es momento de transformar los datos en decisiones.</p>
          </section>

          <section className="closing-band" aria-label="Cierre">
            <p className="closing-message">
              Tomemos el control de la información y <strong>construyamos inteligencia real.</strong>
            </p>
          </section>

          <footer className="site-footer" aria-label="Pie de página">
            <div className="footer-content">
              <p>Copyright © {new Date().getFullYear()} DATASETBI. Todos los derechos reservados.</p>
            </div>
          </footer>
        </div>
      </main>

      <a
        className="whatsapp-float"
        href={whatsappContactUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chatear por WhatsApp"
      >
        <span className="whatsapp-float-icon" aria-hidden="true">
          <img src={whatsappIcon} alt="" />
        </span>
      </a>

    </>
  )
}
