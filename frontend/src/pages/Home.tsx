import { Link } from '../router/Router'
import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

export default function Home() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-drone.mp4"
        videoSrcMobile="/videos/hero-drone-mobile.mp4"
        posterSrc="/videos/hero-drone-poster.jpg"
        eyebrow="Operación certificada DGAC · Chile"
        title={
          <>
            Soluciones <span className="text-accent">desde el aire</span>
          </>
        }
        subtitle="Reemplazamos andamios, góndolas y arneses por drones industriales. Más seguro, más rápido, sin interrumpir tu operación."
      >
        <Link to="/contacto" className="btn-primary">
          Solicitar cotización
        </Link>
        <Link to="/servicios" className="btn-secondary">
          Ver servicios
        </Link>
      </VideoHero>

      {/* TRUST LOGOS */}
      <section className="trust-section">
        <div className="container trust-inner">
          <span className="trust-label">Confían en nosotros</span>
          <div className="trust-logos">
            <span>Solaris</span>
            <span>MineCorp</span>
            <span>AltoVista</span>
            <span>Portuaria SC</span>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios">
        <div className="container">
          <div className="section-label">SERVICIOS</div>
          <h2 className="section-title">Todo lo que hacemos volando</h2>
          <div className="servicios-grid">
            <Link to="/servicios" className="servicio-card">
              <div className="servicio-icon cyan">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>Limpieza de fachadas</h3>
              <p>Lavado de vidrio, revestimientos y muros cortina en altura, sin andamios ni cierres de calle.</p>
            </Link>
            <Link to="/servicios" className="servicio-card">
              <div className="servicio-icon green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A8E600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M3 9h18M9 21V9"></path>
                </svg>
              </div>
              <h3>Paneles solares</h3>
              <p>Limpieza que recupera hasta un 20% de eficiencia perdida por polvo y sedimento.</p>
            </Link>
            <Link to="/servicios" className="servicio-card">
              <div className="servicio-icon cyan">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
                  <circle cx="12" cy="12" r="5"></circle>
                </svg>
              </div>
              <h3>Inspección y termografía</h3>
              <p>Levantamiento fotográfico, térmico y 3D de estructuras, techos y torres.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats container">
        <div className="stat">
          <div className="stat-number">+320</div>
          <div className="stat-label">proyectos ejecutados</div>
        </div>
        <div className="stat">
          <div className="stat-number">70%</div>
          <div className="stat-label">menos tiempo vs. andamio</div>
        </div>
        <div className="stat">
          <div className="stat-number">0</div>
          <div className="stat-label">accidentes en altura</div>
        </div>
        <div className="stat">
          <div className="stat-number">24h</div>
          <div className="stat-label">tiempo de respuesta</div>
        </div>
      </section>

      {/* PROCESO */}
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
                  <p>Evaluamos accesos, riesgos y alcance del trabajo.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Plan de vuelo y seguridad</h4>
                  <p>Ruta, permisos DGAC y protocolo aprobados.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Ejecución y reporte</h4>
                  <p>Operamos y entregamos informe con evidencia.</p>
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
