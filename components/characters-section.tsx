"use client"

import { useTranslation } from "@/lib/translations"
import { ScrollAnimation } from "@/components/scroll-animation"

export function CharactersSection() {
  const { t } = useTranslation()
  
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-4">
              {t.protagonists}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t.protagonistsDesc}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Lumen */}
          <ScrollAnimation delay={100}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative p-8 border border-border rounded-lg bg-card">
                {/* Character image placeholder */}
                <div className="aspect-[3/4] mb-6 border border-dashed border-primary/40 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-muted-foreground text-sm block">{t.lumen} Illustration</span>
                    <span className="text-xs text-muted-foreground/60 mt-2 block">Light character</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <h3 className="font-serif text-2xl text-foreground">{t.lumen}</h3>
                  </div>
                  
                  <p className="text-sm text-primary/80 italic font-serif">
                    &ldquo;{t.lumenTitle}&rdquo;
                  </p>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t.lumenDesc}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.lumenAbilities}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">{t.illumination}</span>
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">{t.revelation}</span>
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">{t.healing}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Vyre */}
          <ScrollAnimation delay={200}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative p-8 border border-border rounded-lg bg-card">
                {/* Character image placeholder */}
                <div className="aspect-[3/4] mb-6 border border-dashed border-muted-foreground/40 rounded-lg bg-secondary/30 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-muted-foreground text-sm block">{t.vyre} Illustration</span>
                    <span className="text-xs text-muted-foreground/60 mt-2 block">Shadow character</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                    <h3 className="font-serif text-2xl text-foreground">{t.vyre}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic font-serif">
                    &ldquo;{t.vyreTitle}&rdquo;
                  </p>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t.vyreDesc}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.vyreAbilities}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{t.hiding}</span>
                      <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{t.protection}</span>
                      <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{t.transformation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Relationship indicator */}
        <ScrollAnimation delay={300}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-secondary/30 rounded-full border border-border">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">{t.lightAndShadow}</span>
              <span className="w-2 h-2 rounded-full bg-muted-foreground" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
