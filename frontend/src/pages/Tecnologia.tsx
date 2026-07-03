import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

const EQUIPO = [
  {
    title: 'Drones industriales certificados',
    desc: 'Plataformas multirrotor de carga útil alta, diseñadas para trabajo en altura con sistemas de redundancia y GPS RTK para posicionamiento centimétrico.',
  },
  {
    title: 'Sistemas de limpieza a presión controlada',
    desc: 'Módulos de agua osmotizada y cepillado que se ajustan al material de la superficie: vidrio, aluminio composite, piedra o paneles fotovoltaicos.',
  },
  {
    title: 'Sensores térmicos y ópticos',
    desc: 'Cámaras de alta resolución y termografía infrarroja para inspección, detección de fallas y modelado 3D de estructuras.',
  },
  {
    title: 'Piloto certificado + copiloto de seguridad',
    desc: 'Toda operación se ejecuta con piloto con licencia DGAC y un segundo operador dedicado a la seguridad perimetral.',
  },
]

const PROTOCOLO = [
  'Permisos de vuelo y notificación a DGAC según la zona y altura de operación.',
  'Delimitación de perímetro de seguridad en tierra durante toda la maniobra.',
  'Plan de vuelo con rutas de escape y protocolo ante viento o falla de equipo.',
  'Seguro de responsabilidad civil vigente para cada operación.',
]

export default function Tecnologia() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-drone.mp4"
        videoSrcMobile="/videos/hero-drone-mobile.mp4"
        posterSrc="/videos/hero-drone-poster.jpg"
        eyebrow="Tecnología"
        size="compact"
        title="Precisión de ingeniería, no improvisación"
        subtitle="Equipos industriales, pilotos certificados y protocolos de seguridad que reemplazan el andamio sin reemplazar el estándar."
      />

      <section className="servicios">
        <div className="container">
          <div className="section-label">EQUIPAMIENTO</div>
          <h2 className="section-title">Con qué volamos</h2>
          <div className="servicios-grid">
            {EQUIPO.map((e) => (
              <div className="servicio-card" key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proceso">
        <div className="container proceso-row">
          <div className="proceso-content">
            <div className="section-label">SEGURIDAD</div>
            <h2 className="section-title">
              Cero exposición
              <br />
              en altura
            </h2>
            <p className="hero-subtitle" style={{ marginTop: '18px', maxWidth: '520px' }}>
              Ningún trabajador sube a un andamio o góndola. Todo el riesgo de altura lo asume el dron, operado desde tierra bajo protocolo.
            </p>
            <ul className="protocolo-list">
              {PROTOCOLO.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="proceso-image">
            <div className="image-placeholder">Arrastra una foto del equipo en operación</div>
          </div>
        </div>
      </section>

      <section className="stats container">
        <div className="stat">
          <div className="stat-number">RTK</div>
          <div className="stat-label">posicionamiento centimétrico</div>
        </div>
        <div className="stat">
          <div className="stat-number">DGAC</div>
          <div className="stat-label">operación certificada</div>
        </div>
        <div className="stat">
          <div className="stat-number">0</div>
          <div className="stat-label">personal en altura</div>
        </div>
        <div className="stat">
          <div className="stat-number">100%</div>
          <div className="stat-label">operaciones aseguradas</div>
        </div>
      </section>

      <CtaBanner
        title="¿Quieres ver el equipo en acción?"
        subtitle="Coordinamos una demostración en terreno para tu edificio o planta."
      />
    </>
  )
}
