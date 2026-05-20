import { useTranslation } from "@/lib/translations"

export function StorySection() {
  const { t } = useTranslation()
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide">
            {t.theStory}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story image placeholder */}
          <div className="aspect-[4/3] border border-border rounded-lg overflow-hidden">
            <img
              src="/Casa.png"
              alt={t.storyImagePlaceholder}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {t.storyParagraph1}
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {t.storyParagraph2}
            </p>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-primary italic font-serif">
                &ldquo;{t.storyQuote}&rdquo;
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
            <h3 className="font-serif text-lg text-foreground mb-2">{t.theMystery}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.mysteryDesc}
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">◈</span>
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">{t.theNostalgia}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.nostalgiaDesc}
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">◇</span>
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">{t.theDarkness}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.darknessDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
