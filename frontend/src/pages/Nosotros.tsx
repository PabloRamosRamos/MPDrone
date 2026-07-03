import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

const VALORES = [
  {
    title: 'Seguridad primero',
    desc: 'Cero exposición de personas en altura. El riesgo lo asume el dron, operado desde tierra bajo protocolo DGAC.',
  },
  {
    title: 'Precisión de ingeniería',
    desc: 'Posicionamiento RTK, cámaras térmicas, sensores ópticos: herramientas de ingeniería, no un show de drones.',
  },
  {
    title: 'Cero interrupción',
    desc: 'Lo que a un andamio le toma días, a un dron le toma horas. Sin detener la operación del edificio o la planta.',
  },
  {
    title: 'Tecnología accesible',
    desc: 'El dron industrial debe sentirse cotidiano y confiable, no futurista ni espectacular.',
  },
]

export default function Nosotros() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-nosotros.mp4"
        size="compact"
        title="Soluciones desde el aire"
        subtitle="MPDrone diseña soluciones aéreas para problemas que hoy se resuelven con andamios, arneses o inspecciones manuales lentas."
      />

      <section className="servicios">
        <div className="container">
          <div className="section-label">QUIÉNES SOMOS</div>
          <h2 className="section-title">
            No somos una empresa
            <br />
            de limpieza con drones
          </h2>
          <p className="hero-subtitle" style={{ marginTop: '24px', maxWidth: '720px', marginBottom: '20px' }}>
            Somos una empresa de soluciones desde el aire. La limpieza de fachadas y paneles solares es la puerta de entrada —el servicio más rápido de ejecutar, validar y vender hoy—, pero no define el techo del negocio.
          </p>
          <p className="hero-subtitle" style={{ maxWidth: '720px' }}>
            El nicho real es amplio: cualquier problema industrial o comercial que se resuelva mejor, más rápido y con menos riesgo usando un dron en vez de un método tradicional en altura o en terreno.
          </p>
        </div>
      </section>

      <section className="servicios" style={{ background: '#08203A' }}>
        <div className="container">
          <div className="section-label">CÓMO LO HACEMOS</div>
          <h2 className="section-title">Tres pilares guían cada operación</h2>
          <div className="servicios-grid">
            {VALORES.map((v) => (
              <div className="servicio-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="servicios">
        <div className="container">
          <div className="section-label">NUESTRO ALCANCE</div>
          <h2 className="section-title">
            Hoy limpieza e inspección.
            <br />
            Mañana, más.
          </h2>
          <p className="hero-subtitle" style={{ marginTop: '24px', maxWidth: '720px' }}>
            Empezamos por lo más rápido de poner en marcha porque es donde el dron reemplaza de forma más obvia y medible al método tradicional. A partir de ahí, cualquier operación en altura, de difícil acceso o que hoy expone personas a riesgo es territorio de MPDrone.
          </p>
        </div>
      </section>

      <CtaBanner
        title="¿Tienes una estructura difícil de alcanzar?"
        subtitle="Si tu proceso hoy depende de subir a algo, probablemente lo podemos resolver desde el aire."
      />
    </>
  )
}
