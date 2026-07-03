import { type ReactNode } from 'react'

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

export default function VideoHero({
  videoSrc,
  eyebrow,
  title,
  subtitle,
  children,
  size = 'full',
}: VideoHeroProps) {
  return (
    <section className={`video-hero video-hero--${size}`}>
      <video
        className="video-hero-media"
        autoPlay
        muted
        loop
        playsInline
        src={videoSrc}
      />
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
