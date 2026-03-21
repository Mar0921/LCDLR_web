export function BitacoraSection() {
  const weeks = [
    {
      week: 8,
      title: "Conceptualización Inicial",
      date: "Fecha placeholder",
      items: [
        "Definición del concepto principal del juego y la temática de la casa de los recuerdos",
        "Creación del primer boceto de la narrativa y estructura del mundo",
        "Investigación de referencias visuales y mecánicas de juegos similares",
        "Establecimiento del equipo de desarrollo y asignación de roles",
      ],
    },
    {
      week: 9,
      title: "Diseño de Personajes",
      date: "Fecha placeholder",
      items: [
        "Diseño conceptual de Lumen: paleta de colores, personalidad y habilidades",
        "Diseño conceptual de Vyre: estética oscura, motivaciones y poderes",
        "Creación de los primeros bocetos de los personajes principales",
        "Definición de la relación entre ambos protagonistas",
      ],
    },
    {
      week: 10,
      title: "Arquitectura del Juego",
      date: "Fecha placeholder",
      items: [
        "Diseño del mapa de la mansión y sus diferentes habitaciones",
        "Planificación del sistema de navegación y exploración",
        "Desarrollo del documento de diseño del juego (GDD)",
        "Definición de la mecánica principal de recolección de memorias",
      ],
    },
    {
      week: 11,
      title: "Prototipado",
      date: "Fecha placeholder",
      items: [
        "Creación del primer prototipo jugable con mecánicas básicas",
        "Implementación del sistema de movimiento del personaje",
        "Pruebas iniciales de la interfaz de usuario",
        "Ajustes basados en el feedback del equipo",
      ],
    },
    {
      week: 12,
      title: "Desarrollo Visual",
      date: "Fecha placeholder",
      items: [
        "Creación de assets visuales para la primera habitación",
        "Implementación del sistema de iluminación atmosférica",
        "Desarrollo de efectos visuales para las habilidades de los personajes",
        "Integración de los primeros elementos de UI definitivos",
      ],
    },
    {
      week: 13,
      title: "Sistema de Puzzles",
      date: "Fecha placeholder",
      items: [
        "Diseño de los primeros tres puzzles del juego",
        "Implementación del sistema de interacción con objetos",
        "Creación del inventario de memorias coleccionables",
        "Testing de dificultad y ajuste de mecánicas",
      ],
    },
    {
      week: 14,
      title: "Narrativa y Audio",
      date: "Fecha placeholder",
      items: [
        "Escritura de los diálogos principales del juego",
        "Selección y creación de la banda sonora ambiental",
        "Implementación del sistema de texto y narración",
        "Grabación de efectos de sonido para interacciones",
      ],
    },
    {
      week: 15,
      title: "Integración y Testing",
      date: "Fecha placeholder",
      items: [
        "Integración de todos los sistemas desarrollados",
        "Sesiones de playtesting con usuarios externos",
        "Corrección de bugs y problemas de rendimiento",
        "Ajustes de balance y dificultad basados en feedback",
      ],
    },
    {
      week: 16,
      title: "Pulido Final",
      date: "Fecha placeholder",
      items: [
        "Optimización general del rendimiento del juego",
        "Revisión final de todos los assets visuales",
        "Preparación de la documentación del proyecto",
        "Compilación de la versión final para presentación",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide mb-4">
            Bitácora de Desarrollo
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Registro semanal del progreso en el desarrollo de La Casa de los Recuerdos.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm text-muted-foreground">
            <span>Semana 8 - 16</span>
            <span className="text-border">|</span>
            <span>9 semanas de desarrollo</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-12">
            {weeks.map((week, index) => (
              <div key={index} className="relative pl-20">
                {/* Week indicator */}
                <div className="absolute left-0 top-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/40 flex flex-col items-center justify-center">
                    <span className="text-xs text-muted-foreground uppercase">Sem</span>
                    <span className="text-lg font-serif text-primary">{week.week}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="font-serif text-xl text-foreground">{week.title}</h3>
                    <span className="text-xs text-muted-foreground mt-1 md:mt-0">{week.date}</span>
                  </div>

                  <ul className="space-y-3">
                    {week.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary/60" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Image placeholder for weekly demo */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Demostración visual</p>
                    <div className="aspect-video bg-secondary/40 border border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2">
                      <svg 
                        className="w-10 h-10 text-muted-foreground/50" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
                        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
                        <path d="M21 15l-5-5L5 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs text-muted-foreground/60">[Imagen de avance - Semana {week.week}]</span>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Progreso de la semana</span>
                      <span className="text-primary">[Porcentaje placeholder]</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary/60 rounded-full"
                        style={{ width: `${Math.min(100, (index + 1) * 11)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 p-8 bg-secondary/20 border border-border rounded-lg text-center">
          <h3 className="font-serif text-2xl text-foreground mb-4">Estado del Proyecto</h3>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <span className="block text-3xl font-serif text-primary">9</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Semanas</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-primary">[%]</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Completado</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-primary">[#]</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Tareas</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            El desarrollo continúa según lo planificado. Próxima actualización: [Fecha placeholder]
          </p>
        </div>
      </div>
    </section>
  )
}
