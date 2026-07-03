import { useEffect, useState } from 'react'
import { Link, useRouter } from '../router/Router'
import Logo from './Logo'

const NAV_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Tecnología', to: '/tecnologia' },
  { label: 'Casos', to: '/casos' },
  { label: 'Nosotros', to: '/nosotros' },
]

export default function Nav() {
  const { path, navigate } = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [path])

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <Logo />
          <div className="logo-text">
            MP<span className="logo-accent">DRONE</span>
          </div>
        </Link>

        <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${path === item.to ? 'nav-link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <button className="btn-primary" onClick={() => navigate('/contacto')}>
            Cotizar
          </button>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'nav-toggle--open' : ''}`}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
