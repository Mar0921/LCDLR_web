"use client"

import { useTranslation } from "@/lib/translations"
import { ScrollAnimation } from "@/components/scroll-animation"

export function StorySection() {
  const { t } = useTranslation()
  
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide">
              {t.theStory}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story image placeholder */}
          <ScrollAnimation delay={100}>
            <div className="aspect-[4/3] border border-dashed border-primary/30 rounded-lg bg-secondary/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{t.storyImagePlaceholder}</span>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t.storyParagraph1}
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t.storyParagraph2}
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary italic font-serif">
                  &ldquo;{t.storyQuote}&rdquo;
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Additional story elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <ScrollAnimation delay={100}>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl">✦</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{t.theMystery}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.mysteryDesc}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl">◈</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{t.theNostalgia}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.nostalgiaDesc}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl">◇</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{t.theDarkness}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.darknessDesc}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
