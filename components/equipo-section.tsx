"use client"

import { useTranslation } from "@/lib/translations"
import { ScrollAnimation } from "@/components/scroll-animation"

export function EquipoSection() {
  const { t } = useTranslation()

  const marianaDesc = t.marianaDesc
  const juanFelipeDesc = t.juanFelipeDesc
  const estefaniaDesc = t.estefaniaDesc
  const danielDesc = t.danielDesc

  const developers = [
    {
      name: "Mariana Parra Acosta",
      role: t.developer,
      description: marianaDesc,
    },
    {
      name: "Juan Felipe Fernandez",
      role: t.developer,
      description: juanFelipeDesc,
    },
    {
      name: "Estefanía del Amor Restrepo Campo",
      role: t.developer,
      description: estefaniaDesc,
    },
    {
      name: "Daniel Muñoz Delgado",
      role: t.developer,
      description: danielDesc,
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-4">
              {t.ourTeam}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t.teamDesc}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developers.map((developer, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative p-6 border border-border rounded-lg bg-card flex flex-col h-[380px]">
                  {developer.name === "Estefanía del Amor Restrepo" ? (
                    <div className="aspect-square mb-4 rounded-lg overflow-hidden h-[180px]">
                      <img src="/tefa.jpeg" alt="Estefanía del Amor Restrepo Campo" className="w-full h-full object-cover" />
                    </div>
                  ) : developer.name === "Mariana Parra Acosta" ? (
                    <div className="aspect-square mb-4 rounded-lg overflow-hidden h-[180px]">
                      <img src="/Mariana.jpeg" alt="Mariana Parra Acosta" className="w-full h-full object-cover" />
                    </div>
                  ) : developer.name === "Daniel Muñoz Delgado" ? (
                    <div className="aspect-square mb-4 rounded-lg overflow-hidden h-[180px]">
                      <img src="/Dani.jpeg" alt="Daniel Muñoz Delgado" className="w-full h-full object-cover" />
                    </div>
                  ) : developer.name === "Juan Felipe Fernandez" ? (
                    <div className="aspect-square mb-4 rounded-lg overflow-hidden h-[180px]">
                      <img src="/Juanfe.jpeg" alt="Juan Felipe Fernandez" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-square mb-4 border border-dashed border-primary/40 rounded-lg bg-secondary/20 flex items-center justify-center h-[180px]">
                      <div className="text-center">
                        <span className="text-muted-foreground text-sm block">[Photo]</span>
                        <span className="text-xs text-muted-foreground/60 mt-1 block">{developer.role}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <h3 className="font-serif text-lg text-foreground">
                        {developer.name}
                      </h3>
                    </div>

                    <p className="text-xs uppercase tracking-wider text-primary/80">
                      {developer.role}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {developer.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}