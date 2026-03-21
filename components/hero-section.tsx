// Pre-computed particle positions to avoid hydration mismatch
const particles = [
  { left: 12, top: 8, delay: 0.2, duration: 3.5 },
  { left: 85, top: 15, delay: 1.1, duration: 4.2 },
  { left: 45, top: 22, delay: 2.3, duration: 3.8 },
  { left: 72, top: 35, delay: 0.7, duration: 4.5 },
  { left: 28, top: 42, delay: 1.8, duration: 3.2 },
  { left: 92, top: 55, delay: 2.9, duration: 4.0 },
  { left: 18, top: 68, delay: 0.4, duration: 3.6 },
  { left: 65, top: 75, delay: 1.5, duration: 4.3 },
  { left: 38, top: 82, delay: 2.1, duration: 3.9 },
  { left: 78, top: 88, delay: 0.9, duration: 4.1 },
  { left: 55, top: 12, delay: 2.6, duration: 3.4 },
  { left: 8, top: 45, delay: 1.3, duration: 4.4 },
  { left: 95, top: 32, delay: 0.1, duration: 3.7 },
  { left: 32, top: 58, delay: 2.0, duration: 4.6 },
  { left: 68, top: 92, delay: 1.7, duration: 3.3 },
  { left: 22, top: 28, delay: 2.8, duration: 4.8 },
  { left: 82, top: 62, delay: 0.6, duration: 3.1 },
  { left: 48, top: 78, delay: 1.4, duration: 4.7 },
  { left: 15, top: 95, delay: 2.5, duration: 3.0 },
  { left: 58, top: 48, delay: 0.3, duration: 4.9 },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Game logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 border-2 border-dashed border-primary/40 rounded-lg flex items-center justify-center bg-secondary/20">
            <span className="text-muted-foreground text-sm">[Logo del Juego]</span>
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-6 text-balance">
          La Casa de los Recuerdos
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto text-pretty">
          Un viaje a través de la memoria, donde cada habitación guarda un secreto 
          y cada recuerdo puede ser tanto una bendición como una maldición.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide transition-all duration-300 hover:bg-primary/90 hover:scale-105">
            Descubrir más
          </button>
          <button className="px-8 py-3 border border-border text-foreground font-medium tracking-wide transition-all duration-300 hover:bg-secondary hover:border-primary/50">
            Ver tráiler
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
