import { useState, type ReactNode } from 'react'

interface VideoHeroProps {
  videoSrc: string
  videoSrcWebm?: string
  posterSrc?: string
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
  size?: 'full' | 'compact'
}

/**
 * Hero con video de fondo en loop. Si el archivo de video aún no existe
 * (por ejemplo, mientras se sube el material real), cae de forma elegante
 * a un fondo con gradiente de marca en vez de romper el layout.
 */
export default function VideoHero({
  videoSrc,
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
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="video-hero-overlay" />
      <div className="video-hero-grid" />
      <div className="video-hero-content">
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
    </section>
  )
}
