import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

const VALORES = [
  {
    title: 'Seguridad primero',
    desc: 'Cada operación sigue protocolo DGAC y perímetro de seguridad en tierra. Cero exposición de personas en altura.',
  },
  {
    title: 'Precisión de ingeniería',
    desc: 'No improvisamos: posicionamiento RTK, planes de vuelo y equipos calibrados para cada tipo de superficie.',
  },
  {
    title: 'Cero interrupción',
    desc: 'Operamos sin detener tu edificio, planta o proceso. Sin andamios, sin cierres prolongados.',
  },
  {
    title: 'Tecnología accesible',
    desc: 'Creemos que el dron industrial debe ser una herramienta cotidiana de mantención, no un espectáculo.',
  },
]

export default function Nosotros() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-nosotros.mp4"
        posterSrc="/videos/hero-nosotros-poster.jpg"
        eyebrow="Nosotros"
        size="compact"
        title="Normalizamos el dron en la mantención urbana"
        subtitle="MPDrone nace para reemplazar el andamio y la góndola por una alternativa más segura, rápida y precisa en limpieza e inspección en altura."
      />

      <section className="servicios">
        <div className="section-label">POR QUÉ EXISTIMOS</div>
        <h2 className="section-title">
          Seguridad y precisión
          <br />
          desde el aire
        </h2>
        <p className="hero-subtitle" style={{ marginTop: '24px', maxWidth: '720px' }}>
          Los métodos tradicionales de limpieza e inspección en altura —andamios, góndolas, arnés— son lentos, costosos y exponen a las personas a riesgo. MPDrone reemplaza esa exposición por tecnología: drones industriales operados por pilotos certificados, con el mismo estándar de calidad y una fracción del tiempo y el riesgo.
        </p>
      </section>

      <section className="servicios" style={{ background: '#0A2540' }}>
        <div className="section-label">VALORES</div>
        <h2 className="section-title">Cómo trabajamos</h2>
        <div className="servicios-grid">
          {VALORES.map((v) => (
            <div className="servicio-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="¿Quieres conocer al equipo detrás de MPDrone?"
        subtitle="Conversemos sobre tu proyecto y cómo podemos ayudarte."
      />
    </>
  )
}
