export function StorySection() {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide">
            La Historia
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story image placeholder */}
          <div className="aspect-[4/3] border border-dashed border-primary/30 rounded-lg bg-secondary/20 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">[Imagen de la Casa]</span>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              En las profundidades de un pueblo olvidado por el tiempo, se alza una mansión 
              cuyas paredes guardan los ecos de memorias fragmentadas. La Casa de los Recuerdos 
              no es solo un lugar, es un laberinto de emociones donde el pasado y el presente 
              se entrelazan de maneras inexplicables.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Cada habitación representa un capítulo de una historia olvidada. Los jugadores 
              deberán explorar cada rincón, descifrar acertijos emocionales y enfrentarse a 
              las sombras de recuerdos que prefirieron quedar enterrados.
            </p>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-primary italic font-serif">
                &ldquo;Los recuerdos no mueren, solo esperan ser encontrados.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Additional story elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">✦</span>
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">El Misterio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Descubre los secretos ocultos tras cada puerta cerrada y cada fotografía desvanecida.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">◈</span>
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">La Nostalgia</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sumérgete en una atmósfera donde cada objeto cuenta una historia de tiempos pasados.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">◇</span>
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">La Oscuridad</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No todos los recuerdos son amables. Algunos prefieren permanecer en las sombras.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
