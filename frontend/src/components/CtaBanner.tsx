import { Link } from '../router/Router'

interface CtaBannerProps {
  title: string
  subtitle: string
}

export default function CtaBanner({ title, subtitle }: CtaBannerProps) {
  return (
    <section className="cta">
      <div className="cta-bg-logo"></div>
      <div className="cta-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="cta-actions">
          <Link to="/contacto" className="btn-primary">
            Solicitar cotización
          </Link>
          <a href="tel:+56987654321" className="btn-secondary">
            +56 9 8765 4321
          </a>
        </div>
      </div>
    </section>
  )
}
