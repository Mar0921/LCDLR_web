"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/translations"

export function BitacoraSection() {
  const { t } = useTranslation()
  const isEnglish = t.week === "Week"

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const weeks = [
    {
      week: 7,
      title: t.week7Title,
      date: t.datePlaceholder,
      items: t.week7Items || [],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%207%20-ZdlINQOjcSiYjLLFpl8z2ktuwSBY1s.png",
          alt: isEnglish
            ? "Repository setup and Lumen assets on GitHub Desktop"
            : "Configuración del repositorio y assets de Lumen en GitHub Desktop",
        },
      ],
    },
    {
      week: 8,
      title: t.week8Title,
      date: t.datePlaceholder,
      items: t.week8Items || [],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%208%201-V9WfZolThNKjSq2KYFOXuTRWyY4wch.png",
          alt: isEnglish
            ? "Kitchen view in Unity - Level 1"
            : "Vista de la cocina en Unity - Nivel 1",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%208%202-o8x6JkQBVIDoly1UYe5djNwSemxXLS.png",
          alt: isEnglish
            ? "Lumen viewing the abilities sign"
            : "Lumen viendo el cartel de habilidades",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%208%203-NxDr5A5Zp3RLAXHQTpLufYnGOV37Rw.png",
          alt: isEnglish
            ? "The Shadow chasing the player"
            : "La Sombra persiguiendo al jugador",
        },
      ],
    },
    {
      week: 9,
      title: t.week9Title,
      date: t.datePlaceholder,
      items: t.week9Items || [],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana9-wDkrufsUQkuGtnqbq4KwcdtV51sun0.png",
          alt: isEnglish
            ? "Dark transition zone between levels with atmospheric lighting"
            : "Zona de transición oscura entre niveles con iluminación atmosférica",
        },
      ],
    },
    {
      week: t.weekSanta,
      title: t.weekSantaTitle,
      date: t.datePlaceholder,
      items: t.weekSantaItems || [],
      images: [
        {
          src: "/Lumen.png",
          alt: isEnglish ? "Lumen - Final model" : "Lumen - Modelo final",
        },
        {
          src: "/Vyre.jpeg",
          alt: isEnglish ? "Vyre - Final model" : "Vyre - Modelo final",
        },
      ],
      videos: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grabaci%C3%B3n%20de%20pantalla%202026-04-02%20110706-ZpriZRLpqGNEzFF7D6wFFMuQ9aOthG.mp4",
          alt: isEnglish
            ? "Demonstration of the Shadow script chasing the player"
            : "Demostración del script de La Sombra persiguiendo al jugador",
        },
      ],
    },
    {
      week: 10,
      title: t.week10Title,
      date: t.datePlaceholder,
      items: t.week10Items || [],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%2010-ZdhL0kJuqlNR0A6bFkudwIKgZrBaGN.png",
          alt: isEnglish
            ? "Own Room (Level 3) - General view with rug and furniture"
            : "Cuarto propio (Nivel 3) - Vista general con alfombra y mobiliario",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%2010%201-bxypIXBqVBZrS9eCFVdeLdZhIrM1ab.png",
          alt: isEnglish
            ? "Own Room (Level 3) - Blue decoration with stars"
            : "Cuarto propio (Nivel 3) - Decoración azul con estrellas",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%2010%202-ebhmWuW6vKK3uhtwx7ZG53j5h8u62k.png",
          alt: isEnglish
            ? "Sister's Room (Level 4) - Cherry blossom decoration"
            : "Cuarto de la hermana (Nivel 4) - Decoración con flores de cerezo",
        },
      ],
    },
    {
      week: 11,
      title: t.week11Title,
      date: t.datePlaceholder,
      items: t.week11Items || [],
      videos: [
        {
          src: "https://www.youtube.com/embed/Lk8cOeoH0R4",
          alt: isEnglish ? "Watch on YouTube" : "Ver en YouTube",
          isYoutube: true,
        },
      ],
    },
    {
      week: 12,
      title: t.week12Title,
      date: t.datePlaceholder,
      items: t.week12Items || [],
      images: [
        {
          src: "/Luz_de_lumen.png",
          alt: isEnglish
            ? "Lumen lighting mechanics evidence"
            : "Evidencia de la mecánica de iluminación de Lumen",
        },
        {
          src: "/Escaleras.jpeg",
          alt: isEnglish
            ? "Completed staircase scene"
            : "Escena de las escaleras completada",
        },
        {
          src: "/Sombra_Pasillo.png",
          alt: isEnglish
            ? "Hallway with shadow capture"
            : "Captura del pasillo con la sombra",
        },
        {
          src: "/Vyre_golpeando_cubos.png",
          alt: isEnglish
            ? "Vyre hitting cubes effect"
            : "Vyre golpeando cubos efecto",
        },
      ],
    },
    {
      week: 13,
      title: t.week13Title,
      date: t.datePlaceholder,
      items: t.week13Items || [],
      images: [
        {
          src: "/prologo.jpeg",
          alt: isEnglish ? "Prologue scene - NPC from behind" : "Escena de prólogo - NPC de espaldas",
        },
      ],
    },
    {
      week: 14,
      title: t.week14Title,
      date: t.datePlaceholder,
      items: t.week14Items || [],
      images: [
        {
          src: "/Armario.jpeg",
          alt: isEnglish ? "Wardrobe with falling mechanic" : "Armario con mecánica de caída",
        },
        {
          src: "/Tablaaa.jpeg",
          alt: isEnglish ? "Falling wooden boards" : "Tablas que caen",
        },
      ],
    },
    {
      week: 15,
      title: t.week15Title,
      date: t.datePlaceholder,
      items: t.week15Items || [],
    },
  ]

  return (
    <>
      <section className="py-24 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide mb-4">
              {t.devLog}
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto">
              {t.devLogDesc}
            </p>

            <div className="mt-6 flex justify-center gap-4 text-sm text-muted-foreground">
              <span>{t.weekRange}</span>
              <span className="text-border">|</span>
              <span>{t.weeksOfDev}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

            <div className="space-y-12">
              {weeks.map((week, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 top-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/40 flex flex-col items-center justify-center">
                      <span className="text-xs text-muted-foreground uppercase">
                        {t.week}
                      </span>

                      <span className="text-lg font-serif text-primary">
                        {week.week}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="font-serif text-xl text-foreground">
                        {week.title}
                      </h3>

                      <span className="text-xs text-muted-foreground mt-1 md:mt-0">
                        {week.date}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {(week.items || []).map(
                        (item: string, itemIndex: number) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary/60" />

                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                        {t.visualDemo}
                      </p>

                      {week.images && week.images.length > 0 && (
                        <div
                          className={`grid gap-3 mb-4 ${
                            week.images.length === 1
                              ? "grid-cols-1"
                              : week.images.length === 2
                              ? "grid-cols-1 md:grid-cols-2"
                              : "grid-cols-1 md:grid-cols-3"
                          }`}
                        >
                          {week.images.map(
                            (image: any, imgIndex: number) => (
                              <div
                                key={imgIndex}
                                className="relative aspect-video rounded-lg overflow-hidden border border-border cursor-pointer"
                                onClick={() =>
                                  setSelectedImage(image.src)
                                }
                              >
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {week.videos && week.videos.length > 0 && (
                        <div
                          className={`grid gap-3 ${
                            week.videos.length === 1
                              ? "grid-cols-1"
                              : "grid-cols-1 md:grid-cols-2"
                          }`}
                        >
                          {week.videos.map(
                            (video: any, vidIndex: number) => (
                              <div
                                key={vidIndex}
                                className="relative aspect-video rounded-lg overflow-hidden border border-border"
                              >
                                {video.isYoutube ? (
                                  <iframe
                                    src={video.src}
                                    className="w-full h-full"
                                    allowFullScreen
                                  />
                                ) : (
                                  <>
                                    <video
                                      src={video.src}
                                      className="w-full h-full object-cover"
                                      controls
                                    />

                                    <span className="text-xs text-muted-foreground">
                                      {video.alt}
                                    </span>
                                  </>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-[90vh] max-w-full rounded-lg"
          />
        </div>
      )}
    </>
  )
}