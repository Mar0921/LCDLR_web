export function CharactersSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-4">
            Los Protagonistas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dos almas conectadas por un destino que se entrelaza entre la luz y la oscuridad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Lumen */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative p-8 border border-border rounded-lg bg-card">
              {/* Character image placeholder */}
              <div className="aspect-[3/4] mb-6 border border-dashed border-primary/40 rounded-lg bg-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-muted-foreground text-sm block">[Ilustración de Lumen]</span>
                  <span className="text-xs text-muted-foreground/60 mt-2 block">Personaje de luz</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <h3 className="font-serif text-2xl text-foreground">Lumen</h3>
                </div>
                
                <p className="text-sm text-primary/80 italic font-serif">
                  &ldquo;Guardián de los recuerdos luminosos&rdquo;
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Lumen representa la esperanza y la claridad en medio de la oscuridad. 
                  Como guía espiritual de la casa, su propósito es ayudar a los visitantes 
                  a encontrar los recuerdos que traen paz y comprensión. Sin embargo, 
                  su luz también puede revelar verdades que algunos prefieren olvidar.
                </p>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Iluminación</span>
                    <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Revelación</span>
                    <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Sanación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vyre */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative p-8 border border-border rounded-lg bg-card">
              {/* Character image placeholder */}
              <div className="aspect-[3/4] mb-6 border border-dashed border-muted-foreground/40 rounded-lg bg-secondary/30 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-muted-foreground text-sm block">[Ilustración de Vyre]</span>
                  <span className="text-xs text-muted-foreground/60 mt-2 block">Personaje de sombra</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                  <h3 className="font-serif text-2xl text-foreground">Vyre</h3>
                </div>
                
                <p className="text-sm text-muted-foreground italic font-serif">
                  &ldquo;Custodio de las memorias olvidadas&rdquo;
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Vyre habita en las sombras de la casa, protegiendo los recuerdos 
                  que fueron enterrados por dolor o vergüenza. No es malvado, sino 
                  incomprendido. Su rol es recordarnos que incluso las memorias oscuras 
                  son parte esencial de quienes somos.
                </p>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">Ocultamiento</span>
                    <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">Protección</span>
                    <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">Transformación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relationship indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-secondary/30 rounded-full border border-border">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Luz y Sombra — Un equilibrio necesario</span>
            <span className="w-2 h-2 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
