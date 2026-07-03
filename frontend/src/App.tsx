import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <svg width="38" height="38" viewBox="0 0 120 120">
            <g fill="#00C2FF">
              <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(90 60 60)"></rect>
              <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(210 60 60)"></rect>
              <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(330 60 60)"></rect>
            </g>
            <circle cx="60" cy="60" r="16" fill="#0A2540"></circle>
            <circle cx="60" cy="60" r="16" fill="none" stroke="#00C2FF" strokeWidth="5"></circle>
            <circle cx="60" cy="60" r="5.5" fill="#A8E600"></circle>
          </svg>
          <div className="logo-text">MP<span className="logo-accent">DRONE</span></div>
        </div>
        <div className="nav-links">
          <span>Servicios</span>
          <span>Tecnología</span>
          <span>Casos</span>
          <span>Nosotros</span>
          <button className="btn-primary">Cotizar</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-logo"></div>
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Operación certificada DGAC · Chile</span>
          </div>
          <h1 className="hero-title">Limpieza e inspección industrial <span className="text-accent">desde el aire</span></h1>
          <p className="hero-subtitle">Drones de alta precisión para fachadas, paneles solares y estructuras de difícil acceso. Sin andamios, sin detener tu operación.</p>
          <div className="hero-actions">
            <button className="btn-primary">Solicitar cotización</button>
            <button className="btn-secondary">Ver cómo funciona</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">Arrastra una foto de dron en operación</div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="trust-section">
        <span className="trust-label">Confían en nosotros</span>
        <div className="trust-logos">
          <span>Solaris</span>
          <span>MineCorp</span>
          <span>AltoVista</span>
          <span>Portuaria SC</span>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios">
        <div className="section-label">SERVICIOS</div>
        <h2 className="section-title">Todo lo que hacemos volando</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <div className="servicio-icon cyan">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3>Limpieza de fachadas</h3>
            <p>Lavado de vidrio, revestimientos y muros cortina en altura, sin andamios ni cierres de calle.</p>
          </div>
          <div className="servicio-card">
            <div className="servicio-icon green">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A8E600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M3 9h18M9 21V9"></path>
              </svg>
            </div>
            <h3>Paneles solares</h3>
            <p>Limpieza que recupera hasta un 20% de eficiencia perdida por polvo y sedimento.</p>
          </div>
          <div className="servicio-card">
            <div className="servicio-icon cyan">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
                <circle cx="12" cy="12" r="5"></circle>
              </svg>
            </div>
            <h3>Inspección y termografía</h3>
            <p>Levantamiento fotográfico, térmico y 3D de estructuras, techos y torres.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
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
        <div className="proceso-content">
          <div className="section-label">CÓMO TRABAJAMOS</div>
          <h2 className="section-title">De la visita<br />al informe</h2>
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
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg-logo"></div>
        <div className="cta-content">
          <h2>¿Tienes una estructura difícil de alcanzar?</h2>
          <p>Cuéntanos tu proyecto y te enviamos una cotización en 24 horas.</p>
          <div className="cta-actions">
            <button className="btn-primary">Solicitar cotización</button>
            <button className="btn-secondary">+56 9 8765 4321</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="30" height="30" viewBox="0 0 120 120">
                <g fill="#00C2FF">
                  <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(90 60 60)"></rect>
                  <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(210 60 60)"></rect>
                  <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(330 60 60)"></rect>
                </g>
                <circle cx="60" cy="60" r="16" fill="#061A2E"></circle>
                <circle cx="60" cy="60" r="16" fill="none" stroke="#00C2FF" strokeWidth="5"></circle>
                <circle cx="60" cy="60" r="5.5" fill="#A8E600"></circle>
              </svg>
              <div className="logo-text">MP<span className="logo-accent">DRONE</span></div>
            </div>
            <p>Seguridad y precisión desde el aire. Santiago, Chile.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-column-title">SERVICIOS</span>
              <span>Fachadas</span>
              <span>Paneles solares</span>
              <span>Inspección</span>
            </div>
            <div className="footer-column">
              <span className="footer-column-title">EMPRESA</span>
              <span>Nosotros</span>
              <span>Certificaciones</span>
              <span>Contacto</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MPDRONE SpA. Todos los derechos reservados.</span>
          <span>hola@mpdrone.cl · mpdrone.cl</span>
        </div>
      </footer>
    </div>
  )
}

export default App
