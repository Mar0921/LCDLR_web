import { useTranslation } from "@/lib/translations"

export function CharactersSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-blue-500 to-red-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/60" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-4">
            <span className="bg-gradient-to-r from-blue-200 via-white to-red-200 bg-clip-text text-transparent">
              {t.protagonists}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.protagonistsDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Lumen */}
          <div className="group relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-400/5 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-500" />

            <div className="relative p-8 border border-border rounded-2xl bg-card/80 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.18)]">

              {/* Shine */}
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative aspect-[3/4] mb-6 rounded-xl overflow-hidden border border-blue-500/20">
                <img
                  src="/lumenpj.png"
                  alt={t.lumen}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent opacity-80" />

                {/* Corners */}
                <div className="absolute top-0 left-0 w-10 h-10 border-l border-t border-blue-400/60" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-cyan-400/60" />
              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 blur-md opacity-70 animate-pulse rounded-full" />
                    <div className="relative w-3 h-3 rounded-full bg-blue-400" />
                  </div>

                  <h3 className="font-serif text-2xl text-foreground group-hover:text-blue-200 transition-colors duration-300">
                    {t.lumen}
                  </h3>
                </div>

                <p className="text-sm italic font-serif text-blue-300 tracking-wide">
                  &ldquo;{t.lumenTitle}&rdquo;
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t.lumenDesc}
                </p>

                <div className="pt-4 border-t border-blue-500/20">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">
                    {t.lumenAbilities}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200 transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                      {t.illumination}
                    </span>

                    <span className="px-3 py-1 text-xs rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 transition-all duration-300 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                      {t.revelation}
                    </span>

                    <span className="px-3 py-1 text-xs rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-100 transition-all duration-300 hover:bg-blue-400/20 hover:shadow-[0_0_20px_rgba(96,165,250,0.25)]">
                      {t.healing}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vyre */}
          <div className="group relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/15 to-orange-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/30 transition-all duration-500" />

            <div className="relative p-8 border border-border rounded-2xl bg-card/80 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(239,68,68,0.18)]">

              {/* Shine */}
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative aspect-[3/4] mb-6 rounded-xl overflow-hidden border border-red-500/20">
                <img
                  src="/vyrepj.png"
                  alt={t.vyre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-transparent opacity-80" />

                {/* Corners */}
                <div className="absolute top-0 left-0 w-10 h-10 border-l border-t border-red-400/60" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-orange-400/60" />
              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-400 blur-md opacity-70 animate-pulse rounded-full" />
                    <div className="relative w-3 h-3 rounded-full bg-red-400" />
                  </div>

                  <h3 className="font-serif text-2xl text-foreground group-hover:text-red-200 transition-colors duration-300">
                    {t.vyre}
                  </h3>
                </div>

                <p className="text-sm italic font-serif text-red-300 tracking-wide">
                  &ldquo;{t.vyreTitle}&rdquo;
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t.vyreDesc}
                </p>

                <div className="pt-4 border-t border-red-500/20">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-red-300/80 mb-3">
                    {t.vyreAbilities}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full border border-red-500/30 bg-red-500/10 text-red-200 transition-all duration-300 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]">
                      {t.hiding}
                    </span>

                    <span className="px-3 py-1 text-xs rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-200 transition-all duration-300 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]">
                      {t.protection}
                    </span>

                    <span className="px-3 py-1 text-xs rounded-full border border-red-400/30 bg-red-400/10 text-red-100 transition-all duration-300 hover:bg-red-400/20 hover:shadow-[0_0_20px_rgba(248,113,113,0.25)]">
                      {t.transformation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relationship */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-border/60 bg-card/60 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.03)]">

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-md opacity-70 rounded-full animate-pulse" />
              <span className="relative w-2 h-2 rounded-full bg-blue-400 block" />
            </div>

            <span className="text-sm tracking-wide text-muted-foreground">
              {t.lightAndShadow}
            </span>

            <div className="relative">
              <div className="absolute inset-0 bg-red-500 blur-md opacity-70 rounded-full animate-pulse" />
              <span className="relative w-2 h-2 rounded-full bg-red-400 block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}