"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function ReglasContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("principal")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header 
        activeSection={activeSection as "principal" | "bitacora" | "equipo"} 
        setActiveSection={setActiveSection as any} 
        language="es"
        setLanguage={() => {}}
      />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        {/* Spanish Content */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Reglas del Juego</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos es una experiencia narrativa de terror psicológico en la que encarnas a un joven que regresa a su hogar de la infancia y se adentra en un viaje por sus propios recuerdos traumáticos. Para vivir la experiencia tal como fue diseñada, te pedimos tener en cuenta las siguientes reglas y advertencias.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Mecánicas fundamentales</h2>
            <p className="text-muted-foreground">
              El juego no tiene combate. No puedes derrotar a la Sombra por la fuerza: la única forma de avanzar es explorar, resolver puzzles y aceptar el pasado del protagonista. Controlas dos entidades que representan los dos lados de la psique del protagonista: Lumen, que ilumina, revela pistas y resuelve mecanismos con precisión; y Vyre, que corre, empuja muebles y rompe obstáculos físicos. Cambiar de modo en el momento equivocado puede ponerte en peligro.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Advertencias de contenido</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos aborda temáticas de trauma infantil, abuso, culpa y duelo. Aunque el juego no muestra violencia gráfica explícita, sí contiene representaciones simbólicas de situaciones perturbadoras que pueden ser emocionalmente intensas. Si en algún momento sientes que el contenido del juego te genera malestar, te recomendamos tomar un descanso. Tu bienestar es más importante que completar el juego.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Condición de victoria</h2>
            <p className="text-muted-foreground">
              El juego se completa cuando el protagonista acepta su pasado en la habitación final, integrando a Lumen y Vyre en una sola entidad. No hay puntuaciones, ni vidas, ni temporizadores: el único objetivo es recorrer el camino emocional hasta el final.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Game Rules</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos is a psychological horror narrative experience in which you embody a young person who returns to their childhood home and embarks on a journey through their own traumatic memories. To experience the game as designed, we ask you to keep in mind the following rules and warnings.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Fundamental mechanics</h2>
            <p className="text-muted-foreground">
              The game has no combat. You cannot defeat the Shadow by force: the only way to advance is to explore, solve puzzles, and accept the protagonist's past. You control two entities that represent the two sides of the protagonist's psyche: Lumen, who illuminates, reveals clues, and solves mechanisms with precision; and Vyre, who runs, pushes furniture, and breaks physical obstacles. Switching modes at the wrong time can put you in danger.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Content warnings</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos addresses themes of childhood trauma, abuse, guilt, and mourning. Although the game does not show explicit graphic violence, it does contain symbolic representations of disturbing situations that can be emotionally intense. If at any point you feel that the game content causes you discomfort, we recommend taking a break. Your well-being is more important than completing the game.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Win condition</h2>
            <p className="text-muted-foreground">
              The game is completed when the protagonist accepts their past in the final room, integrating Lumen and Vyre into a single entity. There are no scores, no lives, no timers: the only objective is to travel the emotional path to the end.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ReglasPage() {
  return (
    <TranslationProvider>
      <ReglasContent />
    </TranslationProvider>
  )
}