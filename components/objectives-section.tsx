import { useTranslation } from "@/lib/translations"

export function ObjectivesSection() {
  const { t } = useTranslation()

  const objectives = [
    {
      number: "01",
      title: t.objective1Title,
      description: t.objective1Desc,
      color: "blue",
    },
    {
      number: "02",
      title: t.objective2Title,
      description: t.objective2Desc,
      color: "red",
    },
    {
      number: "03",
      title: t.objective3Title,
      description: t.objective3Desc,
      color: "blue",
    },
    {
      number: "04",
      title: t.objective4Title,
      description: t.objective4Desc,
      color: "red",
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/10 relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="flex justify-center mb-6">
            <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-red-500" />
          </div>

          <p className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground mb-3">
            OBJECTIVES
          </p>

          <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
              {t.objectives}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            {t.objectivesDesc}
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-blue-500/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-white/50" />
            <div className="h-px w-12 bg-red-500/50" />
          </div>
        </div>

        {/* Objectives */}
        <div className="space-y-6">

          {objectives.map((objective, index) => {
            const isBlue = objective.color === "blue"

            return (
              <div
                key={index}
                className={`
                  group relative overflow-hidden
                  flex flex-col md:flex-row gap-6
                  p-7 rounded-2xl
                  border border-border
                  bg-card/70 backdrop-blur-sm
                  transition-all duration-500
                  hover:-translate-y-1
                  ${
                    isBlue
                      ? "hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.12)]"
                      : "hover:border-red-500/30 hover:shadow-[0_0_50px_rgba(239,68,68,0.12)]"
                  }
                `}
              >

                {/* Glow background */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    ${
                      isBlue
                        ? "bg-gradient-to-r from-blue-500/5 to-transparent"
                        : "bg-gradient-to-l from-red-500/5 to-transparent"
                    }
                  `}
                />

                {/* Animated border */}
                <div
                  className={`
                    absolute top-0 left-0 h-px w-0
                    transition-all duration-700
                    group-hover:w-full
                    ${isBlue ? "bg-blue-500" : "bg-red-500"}
                  `}
                />

                {/* Number */}
                <div className="relative flex-shrink-0">

                  {/* Number glow */}
                  <div
                    className={`
                      absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40
                      transition-opacity duration-500
                      ${isBlue ? "bg-blue-500/20" : "bg-red-500/20"}
                    `}
                  />

                  <span
                    className={`
                      relative font-serif text-5xl md:text-6xl
                      transition-all duration-500
                      ${
                        isBlue
                          ? "text-blue-500/25 group-hover:text-blue-400/70"
                          : "text-red-500/25 group-hover:text-red-400/70"
                      }
                    `}
                  >
                    {objective.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex-1 space-y-3">

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        w-2 h-2 rounded-full animate-pulse
                        ${isBlue ? "bg-blue-500" : "bg-red-500"}
                      `}
                    />

                    <h3
                      className={`
                        font-serif text-xl md:text-2xl
                        transition-colors duration-300
                        ${
                          isBlue
                            ? "group-hover:text-blue-300"
                            : "group-hover:text-red-300"
                        }
                      `}
                    >
                      {objective.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>

                  {/* Bottom progress line */}
                  <div className="pt-3">
                    <div className="h-px w-full bg-border overflow-hidden rounded-full">

                      <div
                        className={`
                          h-full w-0 group-hover:w-full
                          transition-all duration-700
                          ${
                            isBlue
                              ? "bg-gradient-to-r from-blue-500 to-transparent"
                              : "bg-gradient-to-r from-red-500 to-transparent"
                          }
                        `}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating orb */}
                <div
                  className={`
                    absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-3xl
                    opacity-0 group-hover:opacity-20 transition-opacity duration-500
                    ${isBlue ? "bg-blue-500" : "bg-red-500"}
                  `}
                />
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">

          <div
            className="
              relative inline-block overflow-hidden
              p-10 rounded-2xl
              border border-border
              bg-card/70 backdrop-blur-sm
              transition-all duration-500
              hover:border-white/20
            "
          >

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-red-500/5" />

            {/* Animated borders */}
            <div className="absolute top-0 left-0 h-px w-0 bg-blue-500 hover:w-full transition-all duration-700" />
            <div className="absolute bottom-0 right-0 h-px w-0 bg-red-500 hover:w-full transition-all duration-700" />

            <div className="relative">

              <p className="text-muted-foreground mb-6 text-lg">
                {t.readyToEnter}
              </p>

              <button
                className="
                  group relative overflow-hidden
                  px-10 py-4 rounded-xl
                  font-medium tracking-wide
                  border border-white/10
                  bg-gradient-to-r from-blue-500 to-red-500
                  text-white
                  transition-all duration-500
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
                "
              >

                {/* Shine */}
                <span
                  className="
                    absolute inset-0
                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)]
                    translate-x-[-120%]
                    group-hover:translate-x-[120%]
                    transition-transform duration-1000
                  "
                />

                <span className="relative z-10">
                  {t.startAdventure}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}