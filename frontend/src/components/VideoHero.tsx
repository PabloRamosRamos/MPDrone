import { useState, useEffect, useRef, type ReactNode } from 'react'

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
 * Hero con video de fondo en loop. Si el archivo de video aún no existe
 * (por ejemplo, mientras se sube el material real), cae de forma elegante
 * a un fondo con gradiente de marca en vez de romper el layout.
 *
 * Si se pasa `videoSrcMobile`, el navegador lo prioriza en pantallas
 * angostas (<=768px) usando el atributo `media` del <source>, para no
 * gastar el ancho de banda de un archivo pesado en celulares.
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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      console.log('VideoHero: No video ref')
      return
    }

    console.log('VideoHero: Video element found', {
      src: videoSrc,
      readyState: video.readyState
    })

    // Intentar reproducir inmediatamente
    const attemptPlay = () => {
      console.log('VideoHero: Attempting to play video')
      video.play()
        .then(() => console.log('VideoHero: Video playing successfully'))
        .catch((error) => {
          console.error('VideoHero: Autoplay blocked:', error)
        })
    }

    // Eventos de video para debug
    video.addEventListener('loadedmetadata', () => console.log('VideoHero: Metadata loaded'))
    video.addEventListener('loadeddata', () => {
      console.log('VideoHero: Data loaded, attempting play')
      attemptPlay()
    })
    video.addEventListener('play', () => console.log('VideoHero: Play event fired'))
    video.addEventListener('playing', () => console.log('VideoHero: Video is playing'))
    video.addEventListener('error', (e) => console.error('VideoHero: Video error:', e))

    // Intentar reproducir inmediatamente si ya está listo
    if (video.readyState >= 2) {
      console.log('VideoHero: Video already ready, playing now')
      attemptPlay()
    }
  }, [videoSrc])

  return (
    <section className={`video-hero video-hero--${size}${videoFailed ? ' video-hero--fallback' : ''}`}>
      {!videoFailed && (
        <video
          ref={videoRef}
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
      <div className="video-hero-grid" />
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
