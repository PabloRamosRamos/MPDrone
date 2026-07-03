import { useState, type ReactNode } from 'react'

interface VideoHeroProps {
  videoSrc: string
  videoSrcMobile?: string
  videoSrcWebm?: string
  posterSrc?: string
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
  size?: 'full' | 'compact'
}

/**
 * Si se pasa `videoSrcMobile`, el navegador lo prioriza en pantallas
 * angostas (<=768px) usando el atributo `media` del <source>, para no
 * gastar el ancho de banda del archivo pesado de desktop en celulares.
 * Si el video referenciado no existe, cae a un fondo con gradiente de marca
 * en vez de romper el layout.
 */
export default function VideoHero({
  videoSrc,
  videoSrcMobile,
  videoSrcWebm,
  posterSrc,
  eyebrow,
  title,
  subtitle,
  children,
  size = 'full',
}: VideoHeroProps) {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section className={`video-hero video-hero--${size}${videoFailed ? ' video-hero--fallback' : ''}`}>
      {!videoFailed && (
        <video
          className="video-hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          onError={() => setVideoFailed(true)}
        >
          {videoSrcMobile && <source src={videoSrcMobile} type="video/mp4" media="(max-width: 768px)" />}
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="video-hero-overlay" />
      <div className="video-hero-content container">
        <div className="hero-copy">
          {eyebrow && (
            <div className="badge">
              <span className="badge-dot"></span>
              <span>{eyebrow}</span>
            </div>
          )}
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {children && <div className="hero-actions">{children}</div>}
        </div>
      </div>
    </section>
  )
}
