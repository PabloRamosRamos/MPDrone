import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

export default function Galeria() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-galeria.mp4"
        size="compact"
        title="Galería"
        subtitle="Nuestro equipo y operaciones en acción."
      />

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
