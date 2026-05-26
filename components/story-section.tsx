import { useTranslation } from "@/lib/translations"

export function StorySection() {
  const { t } = useTranslation()

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
            STORY
          </p>

          <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
              {t.theStory}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-blue-500/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-white/50" />
            <div className="h-px w-12 bg-red-500/50" />
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="group relative">

            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div
              className="
                relative aspect-[4/3]
                rounded-2xl overflow-hidden
                border border-border
                bg-card
                transition-all duration-500
                hover:border-blue-500/30
                hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]
              "
            >

              {/* Animated borders */}
              <div className="absolute top-0 left-0 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-700 z-20" />
              <div className="absolute bottom-0 right-0 h-px w-0 bg-red-500 group-hover:w-full transition-all duration-700 z-20" />
              <div className="absolute top-0 right-0 w-px h-0 bg-blue-500 group-hover:h-full transition-all duration-700 z-20" />
              <div className="absolute bottom-0 left-0 w-px h-0 bg-red-500 group-hover:h-full transition-all duration-700 z-20" />

              <img
                src="/Casa.png"
                alt={t.storyImagePlaceholder}
                className="
                  w-full h-full object-cover
                  transition-all duration-700
                  group-hover:scale-105
                  group-hover:brightness-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">

            <div
              className="
                relative p-6 rounded-2xl
                border border-border
                bg-card/50 backdrop-blur-sm
                transition-all duration-500
                hover:border-blue-500/20
                hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]
              "
            >

              <div className="absolute top-0 left-0 h-px w-0 bg-blue-500 hover:w-full transition-all duration-700" />

              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t.storyParagraph1}
              </p>
            </div>

            <div
              className="
                relative p-6 rounded-2xl
                border border-border
                bg-card/50 backdrop-blur-sm
                transition-all duration-500
                hover:border-red-500/20
                hover:shadow-[0_0_40px_rgba(239,68,68,0.08)]
              "
            >

              <div className="absolute bottom-0 right-0 h-px w-0 bg-red-500 hover:w-full transition-all duration-700" />

              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t.storyParagraph2}
              </p>
            </div>

            {/* Quote */}
            <div
              className="
                relative overflow-hidden
                p-6 rounded-2xl
                border border-border
                bg-card
                transition-all duration-500
                hover:border-white/20
              "
            >

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-red-500/5" />

              <p className="relative text-lg md:text-xl italic font-serif leading-relaxed">
                <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
                  &ldquo;{t.storyQuote}&rdquo;
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div
            className="
              group relative
              rounded-2xl border border-border
              bg-card/70 backdrop-blur-sm
              p-7 overflow-hidden
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-500/30
              hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
            "
          >

            <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 left-0 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-700" />

            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
              <span className="text-blue-400 text-2xl">✦</span>
            </div>

            <h3 className="font-serif text-xl text-foreground mb-3">
              {t.theMystery}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.mysteryDesc}
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              group relative
              rounded-2xl border border-border
              bg-card/70 backdrop-blur-sm
              p-7 overflow-hidden
              transition-all duration-500
              hover:-translate-y-2
              hover:border-white/20
              hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]
            "
          >

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <span className="text-white text-2xl">◈</span>
            </div>

            <h3 className="font-serif text-xl text-foreground mb-3">
              {t.theNostalgia}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.nostalgiaDesc}
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              group relative
              rounded-2xl border border-border
              bg-card/70 backdrop-blur-sm
              p-7 overflow-hidden
              transition-all duration-500
              hover:-translate-y-2
              hover:border-red-500/30
              hover:shadow-[0_0_50px_rgba(239,68,68,0.15)]
            "
          >

            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-0 right-0 h-px w-0 bg-red-500 group-hover:w-full transition-all duration-700" />

            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
              <span className="text-red-400 text-2xl">◇</span>
            </div>

            <h3 className="font-serif text-xl text-foreground mb-3">
              {t.theDarkness}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.darknessDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}