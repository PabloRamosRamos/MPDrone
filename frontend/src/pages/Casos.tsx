import VideoHero from '../components/VideoHero'
import CtaBanner from '../components/CtaBanner'

const CASOS = [
  {
    industria: 'Edificios corporativos',
    titulo: 'Torre de oficinas de 22 pisos, muro cortina',
    problema: 'Limpieza tradicional requería góndola y cierre parcial de la vereda, con 4 días de trabajo y riesgo en altura.',
    solucion: 'Limpieza completa de fachada con drones en una jornada, sin interrumpir el acceso al edificio.',
    resultado: '70% menos tiempo de ejecución y cero exposición de personal en altura.',
  },
  {
    industria: 'Energía solar',
    titulo: 'Planta fotovoltaica, 4.000 paneles',
    problema: 'Acumulación de polvo reducía la generación estimada en cerca de un 15% durante los meses secos.',
    solucion: 'Limpieza programada por sectores según diagnóstico de suciedad, con reporte de generación antes/después.',
    resultado: 'Recuperación medible de eficiencia y un calendario de mantención preventiva.',
  },
  {
    industria: 'Industria y minería',
    titulo: 'Inspección térmica de nave industrial',
    problema: 'Detección tardía de puntos calientes en techumbre y tableros eléctricos de difícil acceso.',
    solucion: 'Levantamiento térmico y fotográfico completo con informe georreferenciado para mantención predictiva.',
    resultado: 'Fallas identificadas antes de convertirse en incidentes, sin detener la operación de la planta.',
  },
]

export default function Casos() {
  return (
    <>
      <VideoHero
        videoSrc="/videos/hero-casos.mp4"
        posterSrc="/videos/hero-casos-poster.jpg"
        eyebrow="Casos"
        size="compact"
        title="Resultados, no promesas"
        subtitle="Así aplicamos limpieza e inspección aérea en edificios, plantas solares e instalaciones industriales."
      />

      <section className="casos-grid">
        {CASOS.map((c) => (
          <article className="caso-card" key={c.titulo}>
            <span className="caso-industria">{c.industria}</span>
            <h3>{c.titulo}</h3>
            <div className="caso-row">
              <span className="caso-label">Problema</span>
              <p>{c.problema}</p>
            </div>
            <div className="caso-row">
              <span className="caso-label">Solución</span>
              <p>{c.solucion}</p>
            </div>
            <div className="caso-row caso-row--result">
              <span className="caso-label">Resultado</span>
              <p>{c.resultado}</p>
            </div>
          </article>
        ))}
      </section>

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

      <CtaBanner
        title="¿Tu proyecto se parece a alguno de estos?"
        subtitle="Cuéntanos el desafío y te decimos cómo lo resolvemos desde el aire."
      />
    </>
  )
}
