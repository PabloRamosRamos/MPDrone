import { Link } from '../router/Router'
import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

export default function Galeria() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-galeria.mp4"
        eyebrow="Galería"
        title={
          <>
            Nuestro equipo <span className="text-accent">en acción</span>
          </>
        }
        subtitle="Fotos y videos de nuestras operaciones, equipos y proyectos completados."
      >
        <Link to="/contacto" className="btn-primary">
          Solicitar cotización
        </Link>
        <Link to="/servicios" className="btn-secondary">
          Ver servicios
        </Link>
      </VideoHero>

      <section className="servicios">
        <div className="container">
          <div className="section-label">PRÓXIMAMENTE</div>
          <h2 className="section-title">Fotos y videos de nuestros proyectos</h2>
          <p className="hero-subtitle" style={{ marginTop: '24px', maxWidth: '720px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            Estamos preparando una galería con imágenes de nuestras operaciones, equipos en acción y resultados de proyectos completados.
          </p>
        </div>
      </section>

      <CtaBanner
        title="¿Quieres ver el equipo en acción?"
        subtitle="Coordinamos una demostración en terreno para tu edificio o planta."
      />
    </>
  )
}
