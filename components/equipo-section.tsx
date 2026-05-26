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
      image: "/Mariana.jpeg",
    },
    {
      name: "Juan Felipe Fernandez",
      role: t.developer,
      description: juanFelipeDesc,
      image: "/Juanfe.jpeg",
    },
    {
      name: "Estefania del Amor Restrepo",
      role: t.developer,
      description: estefaniaDesc,
      image: "/tefa.jpeg",
    },
    {
      name: "Daniel Muñoz Delgado",
      role: t.developer,
      description: danielDesc,
      image: "/Dani.jpeg",
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">

            <div className="flex justify-center mb-6">
              <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-red-500" />
            </div>

            <p className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground mb-3">
              {t.team}
            </p>

            <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.ourTeam}
              </span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto italic">
              {t.teamDesc}
            </p>

            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 bg-blue-500/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-white/50" />
              <div className="h-px w-12 bg-red-500/50" />
            </div>
          </div>
        </ScrollAnimation>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {developers.map((developer, index) => (
            <ScrollAnimation key={index} delay={index * 100}>

              <div
                className="
                  group relative h-full
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >

                {/* Glow background */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-2xl" />
                </div>

                {/* Main card */}
                <div
                  className="
                    relative h-full
                    rounded-2xl border border-border
                    bg-card/80 backdrop-blur-sm
                    overflow-hidden
                    transition-all duration-500
                    hover:border-blue-500/30
                    hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                  "
                >

                  {/* Animated top border */}
                  <div className="absolute top-0 left-0 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-700" />

                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 right-0 h-px w-0 bg-red-500 group-hover:w-full transition-all duration-700" />

                  {/* Blue/red ambient corners */}
                  <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-5 flex flex-col h-full">

                    {/* Image */}
                    <div
                      className="
                        relative aspect-square mb-5
                        rounded-xl overflow-hidden
                        border border-border
                        group/image
                      "
                    >

                      {/* Hover glow */}
                      <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-xl" />
                      </div>

                      <img
                        src={developer.image}
                        alt={developer.name}
                        className="
                          w-full h-full object-cover
                          transition-all duration-700
                          group-hover:scale-105
                          group-hover:brightness-110
                        "
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                      {/* Corner borders */}
                      <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500" />
                      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-500" />
                      <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-500" />
                      <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-red-500 group-hover:h-full transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1">

                      {/* Name */}
                      <div className="flex items-center gap-3 mb-3">

                        <div className="relative">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-red-500 animate-pulse" />
                          <div className="absolute inset-0 rounded-full bg-blue-500 blur-sm opacity-70" />
                        </div>

                        <h3
                          className="
                            font-serif text-lg leading-tight
                            text-foreground
                            transition-all duration-300
                            group-hover:text-white
                          "
                        >
                          {developer.name}
                        </h3>
                      </div>

                      {/* Role */}
                      <p
                        className="
                          text-[11px] uppercase tracking-[0.25em]
                          mb-4 font-mono
                          bg-gradient-to-r from-blue-400 to-red-400
                          bg-clip-text text-transparent
                        "
                      >
                        {developer.role}
                      </p>

                      {/* Description */}
                      <p
                        className="
                          text-sm leading-relaxed flex-1
                          text-muted-foreground
                          transition-colors duration-300
                          group-hover:text-foreground/90
                        "
                      >
                        {developer.description}
                      </p>

                      {/* Bottom line */}
                      <div className="mt-5 pt-4">
                        <div className="h-px w-full bg-border overflow-hidden rounded-full">
                          <div
                            className="
                              h-full w-0 group-hover:w-full
                              transition-all duration-700
                              bg-gradient-to-r from-blue-500 via-white to-red-500
                            "
                          />
                        </div>
                      </div>

                    </div>
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