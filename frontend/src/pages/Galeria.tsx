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

      <section className="galeria-grid">
        <div className="container">
          <div className="section-label">NUESTROS PROYECTOS</div>
          <h2 className="section-title">Operaciones en altura</h2>

          <div className="galeria-imagenes">
            <div className="galeria-item">
              <img src="/images/dron-limpieza-fachada-torre-corporativa.webp" alt="Dron limpiando fachada de torre corporativa" />
              <div className="galeria-item-info">
                <h3>Limpieza de fachadas</h3>
                <p>Torre corporativa, Santiago Centro</p>
              </div>
            </div>

            <div className="galeria-item">
              <img src="/images/dron-lavado-fachada-edificio-alta-presion.jpg" alt="Dron en operación de lavado de fachada" />
              <div className="galeria-item-info">
                <h3>Lavado de muros cortina</h3>
                <p>Edificio comercial en altura</p>
              </div>
            </div>

            <div className="galeria-item">
              <img src="/images/limpieza-paneles-solares-con-dron.jpg" alt="Limpieza de paneles solares con dron" />
              <div className="galeria-item-info">
                <h3>Paneles solares</h3>
                <p>Planta solar industrial</p>
              </div>
            </div>

            <div className="galeria-item">
              <img src="/images/dron-limpieza-paneles-solares-industrial.webp" alt="Dron limpiando paneles solares en instalación industrial" />
              <div className="galeria-item-info">
                <h3>Mantención solar</h3>
                <p>Instalación fotovoltaica</p>
              </div>
            </div>

            <div className="galeria-item">
              <img src="/images/dron-limpieza-paneles-solares-techo-residencial.jpg" alt="Limpieza de paneles solares en techo residencial" />
              <div className="galeria-item-info">
                <h3>Paneles residenciales</h3>
                <p>Techo de complejo habitacional</p>
              </div>
            </div>

            <div className="galeria-item">
              <img src="/images/dron-limpieza-ventanas-edificio-detalle.webp" alt="Detalle de dron limpiando ventanas de edificio" />
              <div className="galeria-item-info">
                <h3>Ventanas en altura</h3>
                <p>Edificio de oficinas</p>
              </div>
            </div>

            <div className="galeria-item">
              <img src="/images/limpieza-fachadas-dron-vs-metodo-tradicional.jpg" alt="Comparación dron vs método tradicional" />
              <div className="galeria-item-info">
                <h3>Dron vs. Andamio</h3>
                <p>Comparación de métodos</p>
              </div>
            </div>

            <div className="galeria-item">
              <img src="/images/limpieza-vidrios-fachada-dron-arnes-comparacion.jpg" alt="Comparación limpieza con dron y arnés" />
              <div className="galeria-item-info">
                <h3>Seguridad primero</h3>
                <p>Cero exposición humana en altura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Quieres ver el equipo en acción?"
        subtitle="Coordinamos una demostración en terreno para tu edificio o planta."
      />
    </>
  )
}
