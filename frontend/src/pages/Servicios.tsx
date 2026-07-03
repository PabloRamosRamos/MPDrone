import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

const SERVICIOS = [
  {
    color: 'cyan',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    title: 'Limpieza de fachadas',
    intro: 'Lavado de vidrio, revestimientos y muros cortina en altura, sin andamios, grúas ni cierres de calle prolongados.',
    detalles: [
      'Agua osmotizada y cepillado rotativo de baja presión — seguro para vidrio, aluminio composite y piedra',
      'Operación desde el exterior: no requiere acceso a oficinas ni interrumpe la actividad del edificio',
      'Cubre torres de gran altura donde el andamiaje es lento, riesgoso o directamente inviable',
    ],
    tags: ['Bajo riesgo', '70% más rápido', 'Sin cierres de calle']
  },
  {
    color: 'green',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A8E600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <path d="M3 9h18M9 21V9"></path>
      </svg>
    ),
    title: 'Paneles solares',
    intro: 'Limpieza que recupera hasta un 20% de eficiencia perdida por polvo, sedimento y guano.',
    detalles: [
      'Diagnóstico previo de suciedad y sombreado para priorizar los paneles con mayor pérdida',
      'Limpieza en seco o con agua desmineralizada según el tipo de instalación y disponibilidad hídrica',
      'Reporte de generación antes/después para cuantificar el retorno de la intervención (ROI medible)',
    ],
    tags: ['Hasta +20% eficiencia', 'ROI documentado', 'Sin detener operación']
  },
  {
    color: 'cyan',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
        <circle cx="12" cy="12" r="5"></circle>
      </svg>
    ),
    title: 'Inspección y termografía',
    intro: 'Levantamiento fotográfico, térmico y 3D de estructuras, techos, torres y activos industriales.',
    detalles: [
      'Cámaras térmicas para detectar puntos calientes, fugas y fallas antes de que se conviertan en incidentes',
      'Modelado 3D y ortomosaicos para mantención predictiva y documentación de activos',
      'Informe técnico con evidencia georreferenciada, listo para ingeniería o seguros',
    ],
    tags: ['Mantención predictiva', 'Datos precisos', 'Cero riesgo humano']
  },
]

export default function Servicios() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-servicios.mp4"
        title="Todo lo que hacemos volando"
        subtitle="Soluciones desde el aire para problemas que hoy se resuelven con andamios, arneses y cierres de calle."
      />

      <section className="servicios-detalle container">
        {SERVICIOS.map((s) => (
          <div className="servicio-detalle-card" key={s.title}>
            <div className={`servicio-icon ${s.color}`}>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p className="servicio-detalle-intro">{s.intro}</p>
            <ul className="servicio-detalle-list">
              {s.detalles.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <div className="servicio-tags">
              {s.tags.map((tag) => (
                <span key={tag} className="servicio-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="proceso">
        <div className="container proceso-row">
          <div className="proceso-content">
            <div className="section-label">CÓMO TRABAJAMOS</div>
            <h2 className="section-title">
              De la visita
              <br />
              al informe
            </h2>
            <div className="proceso-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Diagnóstico en terreno</h4>
                  <p>Evaluamos accesos, riesgos y alcance del trabajo</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Plan de vuelo y seguridad</h4>
                  <p>Ruta, permisos DGAC y protocolo aprobados</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Ejecución y reporte</h4>
                  <p>Operamos y entregamos informe con evidencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="proceso-image">
            <div className="image-placeholder">Arrastra una foto del equipo / operación</div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Tienes una estructura difícil de alcanzar?"
        subtitle="Cuéntanos tu proyecto y te enviamos una cotización en 24 horas."
      />
    </>
  )
}
