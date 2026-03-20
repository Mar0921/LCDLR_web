export function ObjectivesSection() {
  const objectives = [
    {
      number: "01",
      title: "Explorar la Mansión",
      description: "Recorre cada habitación de La Casa de los Recuerdos. Cada estancia guarda fragmentos de historias olvidadas que deberás descubrir y conectar.",
    },
    {
      number: "02",
      title: "Descifrar los Acertijos",
      description: "Resuelve puzzles emocionales y mentales que te permitirán desbloquear nuevas áreas y revelar secretos ocultos en las paredes de la mansión.",
    },
    {
      number: "03",
      title: "Recolectar Memorias",
      description: "Encuentra y colecciona fragmentos de recuerdos dispersos. Cada memoria recuperada te acerca más a comprender la verdadera historia de la casa.",
    },
    {
      number: "04",
      title: "Equilibrar Luz y Sombra",
      description: "Aprende a utilizar las habilidades de Lumen y Vyre en armonía. Solo el balance entre ambas fuerzas te permitirá acceder a la verdad final.",
    },
    {
      number: "05",
      title: "Revelar el Secreto",
      description: "Descubre qué sucedió realmente en La Casa de los Recuerdos y decide el destino de las almas que aún habitan entre sus muros.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-4">
            Objetivos del Jugador
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tu misión en La Casa de los Recuerdos es restaurar el equilibrio entre la luz y la sombra.
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
              ¿Estás listo para adentrarte en los recuerdos?
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide transition-all duration-300 hover:bg-primary/90">
              Comenzar la aventura
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
