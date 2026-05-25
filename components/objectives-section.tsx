import { useTranslation } from "@/lib/translations"

export function ObjectivesSection() {
  const { t } = useTranslation()
  const objectives = [
    {
      number: "01",
      title: t.objective1Title,
      description: t.objective1Desc,
    },
    {
      number: "02",
      title: t.objective2Title,
      description: t.objective2Desc,
    },
    {
      number: "03",
      title: t.objective3Title,
      description: t.objective3Desc,
    },
    {
      number: "04",
      title: t.objective4Title,
      description: t.objective4Desc,
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-4">
            {t.objectives}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.objectivesDesc}
          </p>
        </div>

        <div className="space-y-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
            >
              <div className="flex-shrink-0">
                <span className="font-serif text-4xl text-primary/30 group-hover:text-primary/60 transition-colors duration-300">
                  {objective.number}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {objective.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 border border-dashed border-primary/30 rounded-lg bg-secondary/20">
            <p className="text-muted-foreground mb-4">
              {t.readyToEnter}
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide transition-all duration-300 hover:bg-primary/90">
              {t.startAdventure}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
