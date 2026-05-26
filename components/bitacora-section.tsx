"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/translations"

interface MediaItem {
  src: string
  alt: string
  isYoutube?: boolean
}

interface WeekData {
  week: number | string
  title: string
  items: string[]
  images?: MediaItem[]
  videos?: MediaItem[]
}

export function BitacoraSection() {
  const { t } = useTranslation()
  const isEnglish = t.week === "Week"

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const weeks: WeekData[] = [
    {
      week: 7,
      title: t.week7Title,
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
      items: t.week9Items || [],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana9-wDkrufsUQkuGtnqbq4KwcdtV51sun0.png",
          alt: isEnglish
            ? "Dark transition zone between levels"
            : "Zona de transición oscura entre niveles",
        },
      ],
    },
    {
      week: t.weekSanta,
      title: t.weekSantaTitle,
      items: t.weekSantaItems || [],
      images: [
        {
          src: "/Lumen.png",
          alt: isEnglish
            ? "Lumen - Final model"
            : "Lumen - Modelo final",
        },
        {
          src: "/Vyre.jpeg",
          alt: isEnglish
            ? "Vyre - Final model"
            : "Vyre - Modelo final",
        },
      ],
      videos: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grabaci%C3%B3n%20de%20pantalla%202026-04-02%20110706-ZpriZRLpqGNEzFF7D6wFFMuQ9aOthG.mp4",
          alt: isEnglish
            ? "Demonstration of the Shadow script"
            : "Demostración del script de La Sombra",
        },
      ],
    },
    {
      week: 10,
      title: t.week10Title,
      items: t.week10Items || [],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%2010-ZdhL0kJuqlNR0A6bFkudwIKgZrBaGN.png",
          alt: isEnglish
            ? "Own Room (Level 3) - General view"
            : "Cuarto propio (Nivel 3) - Vista general",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%2010%201-bxypIXBqVBZrS9eCFVdeLdZhIrM1ab.png",
          alt: isEnglish
            ? "Own Room - Blue decoration with stars"
            : "Cuarto propio - Decoración azul con estrellas",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semana%2010%202-ebhmWuW6vKK3uhtwx7ZG53j5h8u62k.png",
          alt: isEnglish
            ? "Sister's Room - Cherry blossom decoration"
            : "Cuarto de la hermana - Flores de cerezo",
        },
      ],
    },
    {
      week: 11,
      title: t.week11Title,
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
      items: t.week12Items || [],
      images: [
        {
          src: "/Luz_de_lumen.png",
          alt: isEnglish
            ? "Lumen lighting mechanics"
            : "Mecánica de iluminación de Lumen",
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
            ? "Hallway with shadow"
            : "Pasillo con la sombra",
        },
        {
          src: "/Vyre_golpeando_cubos.png",
          alt: isEnglish
            ? "Vyre hitting cubes"
            : "Vyre golpeando cubos",
        },
      ],
    },
    {
      week: 13,
      title: t.week13Title,
      items: t.week13Items || [],
      images: [
        {
          src: "/prologo.jpeg",
          alt: isEnglish
            ? "Prologue scene - NPC from behind"
            : "Escena de prólogo - NPC de espaldas",
        },
      ],
    },
    {
      week: 14,
      title: t.week14Title,
      items: t.week14Items || [],
      images: [
        {
          src: "/Armario.jpeg",
          alt: isEnglish
            ? "Wardrobe with falling mechanic"
            : "Armario con mecánica de caída",
        },
        {
          src: "/Tablaaa.jpeg",
          alt: isEnglish
            ? "Falling wooden boards"
            : "Tablas que caen",
        },
      ],
    },
    {
      week: 15,
      title: t.week15Title,
      items: t.week15Items || [],
      images: [
        {
          src: "/3recuerdo.jpeg",
          alt: isEnglish
            ? "Third memory scene"
            : "Tercera escena de recuerdo",
        },
        {
          src: "/escena3.jpeg",
          alt: isEnglish ? "Scene 3" : "Escena 3",
        },
        {
          src: "/epilogo.jpeg",
          alt: isEnglish
            ? "Epilogue scene"
            : "Escena de epílogo",
        },
        {
          src: "/batallaprevia.jpeg",
          alt: isEnglish
            ? "Pre-battle scene"
            : "Escena previa a la batalla",
        },
        {
          src: "/batalla_final.jpeg",
          alt: isEnglish
            ? "Final battle scene"
            : "Escena de batalla final",
        },
        {
          src: "/creditos.jpeg",
          alt: isEnglish
            ? "Credits scene"
            : "Escena de créditos",
        },
        {
          src: "/menu_diseño.jpeg",
          alt: isEnglish
            ? "Menu design"
            : "Diseño del menú",
        },
      ],
    },
    {
      week: 16,
      title: t.week16Title,
      items: t.week16Items || [],
    },
  ]

  const total = weeks.length
  const current = weeks[currentIndex]
  const progress = Math.round(((currentIndex + 1) / total) * 100)

  return (
    <>
      <section className="py-24 px-6 pt-32">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-red-500" />
            </div>

            <p className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground mb-3">
              {isEnglish
                ? "Development Record"
                : "Registro de Desarrollo"}
            </p>

            <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.devLog}
              </span>
            </h2>

            <p className="text-muted-foreground italic max-w-xl mx-auto">
              {t.devLogDesc}
            </p>

            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 bg-blue-500/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-white/50" />
              <div className="h-px w-12 bg-red-500/50" />
            </div>
          </div>

          {/* Week pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {weeks.map((w, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`
                  group relative overflow-hidden
                  font-serif text-[11px] tracking-widest uppercase
                  px-4 py-2 rounded-md border
                  transition-all duration-300
                  
                  ${
                    i === currentIndex
                      ? `
                        border-blue-500/40
                        text-white
                        bg-gradient-to-r from-blue-500/20 via-background to-red-500/20
                        shadow-[0_0_30px_rgba(59,130,246,0.15)]
                      `
                      : `
                        border-border
                        text-muted-foreground
                        hover:text-white
                        hover:border-red-500/30
                        hover:bg-gradient-to-r
                        hover:from-blue-500/10
                        hover:to-red-500/10
                      `
                  }
                `}
              >
                <span className="absolute top-0 left-0 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
                <span className="absolute bottom-0 right-0 h-px w-0 bg-red-500 group-hover:w-full transition-all duration-500" />

                <span className="relative z-10">
                  {isEnglish
                    ? typeof w.week === "number"
                      ? `Week ${w.week}`
                      : w.week
                    : `Sem ${w.week}`}
                </span>
              </button>
            ))}
          </div>

          {/* Main card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm">

            {/* Ambient glows */}
            <div className="absolute -top-20 -left-20 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-red-500/10 blur-3xl rounded-full" />

            {/* Animated borders */}
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-blue-500/0 via-blue-500/60 to-red-500/0" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-red-500/0 via-red-500/60 to-blue-500/0" />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-4 px-7 py-6 border-b border-border">
              <div>
                <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-1.5">
                  {isEnglish
                    ? typeof current.week === "number"
                      ? `Week ${current.week}`
                      : current.week
                    : `${t.week} ${current.week}`}
                </p>

                <h3 className="font-serif text-2xl text-foreground">
                  {current.title}
                </h3>
              </div>

              <span
                className="
                  font-serif text-6xl leading-none select-none
                  bg-gradient-to-b from-blue-400/70 to-red-400/70
                  bg-clip-text text-transparent
                "
              >
                {current.week}
              </span>
            </div>

            {/* Body */}
            <div className="relative px-7 py-6">

              {/* Items */}
              <ul className="space-y-4 mb-8">
                {current.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group"
                  >
                    <span
                      className="
                        mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0
                        bg-gradient-to-r from-blue-500 to-red-500
                        transition-transform duration-300
                        group-hover:scale-125
                      "
                    />

                    <span
                      className="
                        text-sm text-muted-foreground leading-relaxed
                        transition-colors duration-300
                        group-hover:text-foreground/90
                      "
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Media */}
              {(current.images || current.videos) && (
                <div className="pt-6 border-t border-border">

                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    {t.visualDemo}
                  </p>

                  {/* Images */}
                  {current.images && current.images.length > 0 && (
                    <div
                      className={`grid gap-4 mb-4 ${
                        current.images.length === 1
                          ? "grid-cols-1"
                          : current.images.length === 2
                          ? "grid-cols-1 md:grid-cols-2"
                          : "grid-cols-1 md:grid-cols-3"
                      }`}
                    >
                      {current.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="
                            relative aspect-video overflow-hidden
                            rounded-xl border border-border
                            cursor-pointer group/image
                            bg-black
                            transition-all duration-500
                            hover:border-blue-500/40
                            hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                          "
                          onClick={() =>
                            setSelectedImage(image.src)
                          }
                        >
                          {/* Glow */}
                          <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-2xl" />
                          </div>

                          <img
                            src={image.src}
                            alt={image.alt}
                            className="
                              w-full h-full object-cover
                              transition-all duration-500
                              group-hover/image:scale-105
                              group-hover/image:brightness-110
                            "
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />

                          {/* Corners */}
                          <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-500 group-hover/image:w-full transition-all duration-500" />
                          <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-red-500 group-hover/image:w-full transition-all duration-500" />
                          <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 group-hover/image:h-full transition-all duration-500" />
                          <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-red-500 group-hover/image:h-full transition-all duration-500" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Videos */}
                  {current.videos &&
                    current.videos.length > 0 && (
                      <div
                        className={`grid gap-4 ${
                          current.videos.length === 1
                            ? "grid-cols-1"
                            : "grid-cols-1 md:grid-cols-2"
                        }`}
                      >
                        {current.videos.map(
                          (video, vidIndex) => (
                            <div
                              key={vidIndex}
                              className="
                                relative aspect-video overflow-hidden
                                rounded-xl border border-border
                                transition-all duration-300
                                hover:border-red-500/40
                                hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]
                              "
                            >
                              {video.isYoutube ? (
                                <iframe
                                  src={video.src}
                                  title={video.alt}
                                  className="w-full h-full"
                                  allowFullScreen
                                />
                              ) : (
                                <video
                                  src={video.src}
                                  className="w-full h-full object-cover"
                                  controls
                                />
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>
              )}
            </div>

            {/* Progress */}
            <div className="px-7 pb-7">
              <div className="h-[2px] w-full bg-border overflow-hidden rounded-full mb-2">
                <div
                  className="
                    h-full rounded-full
                    bg-gradient-to-r from-blue-500 via-white to-red-500
                    transition-all duration-500
                    shadow-[0_0_20px_rgba(59,130,246,0.5)]
                  "
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-[10px] font-mono text-muted-foreground text-right tracking-widest">
                {currentIndex + 1} / {total}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6 gap-4">

            {/* Prev */}
            <button
              onClick={() =>
                setCurrentIndex((p) => Math.max(0, p - 1))
              }
              disabled={currentIndex === 0}
              className="
                group relative overflow-hidden
                font-serif text-xs tracking-widest uppercase
                px-5 py-3 rounded-md border border-border
                text-muted-foreground
                transition-all duration-300
                hover:text-white
                hover:border-blue-500/40
                hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                disabled:opacity-30 disabled:cursor-not-allowed
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative z-10 flex items-center gap-2">
                ← {isEnglish ? "Previous" : "Anterior"}
              </span>
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setCurrentIndex((p) =>
                  Math.min(total - 1, p + 1)
                )
              }
              disabled={currentIndex === total - 1}
              className="
                group relative overflow-hidden
                font-serif text-xs tracking-widest uppercase
                px-5 py-3 rounded-md border border-border
                text-muted-foreground
                transition-all duration-300
                hover:text-white
                hover:border-red-500/40
                hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]
                disabled:opacity-30 disabled:cursor-not-allowed
              "
            >
              <span className="absolute inset-0 bg-gradient-to-l from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative z-10 flex items-center gap-2">
                {isEnglish ? "Next" : "Siguiente"} →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/90 backdrop-blur-sm
            flex items-center justify-center
            p-4 cursor-zoom-out
          "
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="
              max-h-[90vh] max-w-full rounded-xl
              border border-white/10
              shadow-[0_0_60px_rgba(59,130,246,0.2)]
            "
          />
        </div>
      )}
    </>
  )
}