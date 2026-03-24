"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function ConductaContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Conducta y Reglas de la Comunidad</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos es una experiencia diseñada para generar reflexión, empatía y conversación sobre temas de salud mental y trauma. Esperamos que quienes forman parte de nuestra comunidad lo hagan con el mismo espíritu.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Comportamiento esperado</h2>
            <p className="text-muted-foreground">
              Al interactuar en cualquier espacio oficial relacionado con el juego (redes sociales, foros, plataformas de distribución), esperamos que los miembros de la comunidad se traten con respeto mutuo, compartan sus experiencias con honestidad sin hacer spoilers sin advertencia previa, y apoyen a otros jugadores que puedan estar procesando emociones difíciles vinculadas a los temas del juego.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Comportamiento prohibido</h2>
            <p className="text-muted-foreground">
              Queda estrictamente prohibido publicar contenido que banalice o ridiculice las temáticas de abuso, trauma o salud mental abordadas en el juego, acosar o insultar a otros miembros de la comunidad, publicar información falsa sobre el juego, sus creadores o sus colaboradores, y distribuir versiones modificadas o pirateadas del juego.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Consecuencias del incumplimiento</h2>
            <p className="text-muted-foreground">
              El incumplimiento de estas normas puede resultar en la eliminación del contenido infractor, la suspensión temporal o definitiva del acceso a los espacios oficiales de la comunidad, o el reporte a las autoridades competentes en casos de conducta delictiva.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Conduct and Community Rules</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos is an experience designed to generate reflection, empathy, and conversation about mental health and trauma topics. We hope that those who are part of our community do so with the same spirit.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Expected behavior</h2>
            <p className="text-muted-foreground">
              When interacting in any official space related to the game (social media, forums, distribution platforms), we expect community members to treat each other with mutual respect, share their experiences honestly without spoiling without prior warning, and support other players who may be processing difficult emotions related to the game's themes.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Prohibited behavior</h2>
            <p className="text-muted-foreground">
              It is strictly prohibited to publish content that trivializes or ridicules the themes of abuse, trauma, or mental health addressed in the game, harass or insult other community members, publish false information about the game, its creators or collaborators, and distribute modified or pirated versions of the game.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Consequences of non-compliance</h2>
            <p className="text-muted-foreground">
              Non-compliance with these rules may result in the removal of infringing content, temporary or permanent suspension of access to official community spaces, or reporting to competent authorities in cases of criminal conduct.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ConductaPage() {
  return (
    <TranslationProvider>
      <ConductaContent />
    </TranslationProvider>
  )
}