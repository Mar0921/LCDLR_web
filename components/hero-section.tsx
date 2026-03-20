export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
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
