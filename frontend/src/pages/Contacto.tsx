import { useState, type FormEvent } from 'react'
import VideoHero from '../components/VideoHero'
import { enviarContacto } from '../lib/api'

const SERVICIOS_OPCIONES = [
  'Limpieza de fachadas',
  'Paneles solares',
  'Inspección y termografía',
  'Otro',
]

type EstadoEnvio = 'idle' | 'enviando' | 'ok' | 'error'

export default function Contacto() {
  const [estado, setEstado] = useState<EstadoEnvio>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      nombre: String(data.get('nombre') || ''),
      email: String(data.get('email') || ''),
      telefono: String(data.get('telefono') || ''),
      empresa: String(data.get('empresa') || ''),
      servicio: String(data.get('servicio') || ''),
      mensaje: String(data.get('mensaje') || ''),
    }

    setEstado('enviando')
    setErrorMsg('')

    try {
      await enviarContacto(payload)
      setEstado('ok')
      form.reset()
    } catch (err) {
      setEstado('error')
      setErrorMsg(err instanceof Error ? err.message : 'No se pudo enviar el formulario')
    }
  }

  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-contacto.mp4"
        posterSrc="/videos/hero-contacto-poster.jpg"
        eyebrow="Contacto"
        size="compact"
        title="Hablemos de tu proyecto"
        subtitle="Cuéntanos qué necesitas limpiar o inspeccionar y te enviamos una cotización en 24 horas."
      />

      <section className="contacto-section">
        <div className="contacto-info">
          <div className="section-label">CONTACTO DIRECTO</div>
          <h2 className="section-title">Coordinemos una visita técnica</h2>
          <p className="hero-subtitle" style={{ marginTop: '18px' }}>
            Respondemos solicitudes de cotización en un máximo de 24 horas hábiles.
          </p>

          <div className="contacto-datos">
            <div>
              <span className="footer-column-title">EMAIL</span>
              <p>hola@mpdrone.cl</p>
            </div>
            <div>
              <span className="footer-column-title">TELÉFONO</span>
              <p>+56 9 8765 4321</p>
            </div>
            <div>
              <span className="footer-column-title">ZONA DE OPERACIÓN</span>
              <p>Santiago y regiones, Chile</p>
            </div>
          </div>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Nombre*
              <input type="text" name="nombre" required placeholder="Tu nombre" />
            </label>
            <label>
              Email*
              <input type="email" name="email" required placeholder="tu@empresa.cl" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Teléfono
              <input type="tel" name="telefono" placeholder="+56 9 1234 5678" />
            </label>
            <label>
              Empresa
              <input type="text" name="empresa" placeholder="Nombre de tu empresa" />
            </label>
          </div>
          <label>
            Servicio de interés
            <select name="servicio" defaultValue="">
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {SERVICIOS_OPCIONES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mensaje*
            <textarea name="mensaje" required rows={5} placeholder="Cuéntanos sobre tu edificio, planta o estructura" />
          </label>

          <button className="btn-primary" type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando…' : 'Solicitar cotización'}
          </button>

          {estado === 'ok' && (
            <p className="form-feedback form-feedback--ok">
              Recibimos tu solicitud. Te contactaremos en las próximas 24 horas.
            </p>
          )}
          {estado === 'error' && (
            <p className="form-feedback form-feedback--error">{errorMsg}</p>
          )}
        </form>
      </section>
    </>
  )
}
