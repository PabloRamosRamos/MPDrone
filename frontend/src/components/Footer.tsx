import { Link } from '../router/Router'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Logo size={30} ringColor="#061A2E" />
            <div className="logo-text">
              MP<span className="logo-accent">DRONE</span>
            </div>
          </Link>
          <p>Seguridad y precisión desde el aire. Santiago, Chile.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-column-title">SERVICIOS</span>
            <Link to="/servicios">Fachadas</Link>
            <Link to="/servicios">Paneles solares</Link>
            <Link to="/servicios">Inspección y termografía</Link>
          </div>
          <div className="footer-column">
            <span className="footer-column-title">EMPRESA</span>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/tecnologia">Tecnología</Link>
            <Link to="/casos">Casos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MPDRONE SpA. Todos los derechos reservados.</span>
        <span>hola@mpdrone.cl · mpdrone.cl</span>
      </div>
    </footer>
  )
}
