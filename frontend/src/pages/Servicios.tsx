import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

const SERVICIOS = [
  {
    color: 'cyan',
    title: 'Limpieza de fachadas',
    intro: 'Lavado de vidrio, revestimientos y muros cortina en altura, sin andamios, grúas ni cierres de calle.',
    detalles: [
      'Agua osmotizada y cepillado rotativo de baja presión, seguro para vidrio, aluminio composite y piedra.',
      'Operación desde el exterior: sin acceso a oficinas ni interrupción de la actividad del edificio.',
      'Cobertura de torres de gran altura donde el andamiaje resulta lento, riesgoso o inviable.',
    ],
  },
  {
    color: 'green',
    title: 'Paneles solares',
    intro: 'Limpieza que recupera hasta un 20% de eficiencia perdida por polvo, sedimento y guano.',
    detalles: [
      'Diagnóstico previo de suciedad y sombreado para priorizar los paneles con mayor pérdida.',
      'Limpieza en seco o con agua desmineralizada según el tipo de instalación y disponibilidad hídrica.',
      'Reporte de generación antes/después para cuantificar el retorno de la intervención.',
    ],
  },
  {
    color: 'cyan',
    title: 'Inspección y termografía',
    intro: 'Levantamiento fotográfico, térmico y 3D de estructuras, techos, torres y activos industriales.',
    detalles: [
      'Cámaras térmicas para detectar puntos calientes, fugas y fallas antes de que se conviertan en incidentes.',
      'Modelado 3D y ortomosaicos para mantención predictiva y documentación de activos.',
      'Informe técnico con evidencia georreferenciada, listo para ingeniería o seguros.',
    ],
  },
]

export default function Servicios() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-servicios.mp4"
        posterSrc="/videos/hero-servicios-poster.jpg"
        eyebrow="Servicios"
        size="compact"
        title="Todo lo que hacemos volando"
        subtitle="Tres líneas de servicio, un mismo estándar: seguridad, precisión y cero interrupción de tu operación."
      />

      <section className="servicios-detalle">
        {SERVICIOS.map((s) => (
          <div className="servicio-detalle-card" key={s.title}>
            <div className={`servicio-icon ${s.color}`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={s.color === 'cyan' ? '#00C2FF' : '#A8E600'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M8 12l2.5 2.5L16 9"></path>
              </svg>
            </div>
            <h3>{s.title}</h3>
            <p className="servicio-detalle-intro">{s.intro}</p>
            <ul className="servicio-detalle-list">
              {s.detalles.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="proceso">
        <div className="proceso-content">
          <div className="section-label">CÓMO COTIZAMOS</div>
          <h2 className="section-title">
            Un proceso simple,
            <br />
            sin letra chica
          </h2>
          <div className="proceso-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Nos cuentas tu estructura</h4>
                <p>m², tipo de superficie y accesos disponibles.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Visita técnica (opcional)</h4>
                <p>Para edificios complejos o de gran altura.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Cotización en 24 horas</h4>
                <p>Precio por m², plazo de ejecución y condiciones.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="proceso-image">
          <div className="image-placeholder">Arrastra una foto del equipo / operación</div>
        </div>
      </section>

      <CtaBanner
        title="Cuéntanos qué necesitas limpiar o inspeccionar"
        subtitle="Fachadas, paneles solares o estructuras difíciles de alcanzar: te respondemos en 24 horas."
      />
    </>
  )
}
