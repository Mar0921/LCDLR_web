"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function CookiesContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Configuración de Cookies</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos utiliza cookies y tecnologías similares para garantizar el correcto funcionamiento del juego y mejorar tu experiencia. A continuación te explicamos qué tipos de cookies utilizamos y cómo puedes gestionarlas.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cookies técnicas o esenciales</h2>
            <p className="text-muted-foreground">
              Son imprescindible para que el juego funcione correctamente. Permiten guardar tu progreso, mantener tus preferencias de configuración (como el volumen o el idioma) y garantizar la estabilidad de la sesión. No pueden desactivarse sin afectar el funcionamiento del juego.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cookies analíticas</h2>
            <p className="text-muted-foreground">
              Usamos cookies analíticas de forma anónima para entender cómo los jugadores interactúan con el juego: qué zonas generan más dificultad, dónde se abandona la partida con más frecuencia, o cuántos jugadores coleccionan todos los fragmentos de recuerdo. Esta información nos ayuda a mejorar futuras versiones. Puedes desactivar estas cookies desde el menú de ajustes del juego sin perder funcionalidad.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cómo gestionar tus preferencias</h2>
            <p className="text-muted-foreground">
              Puedes acceder a la configuración de cookies en cualquier momento desde el menú principal, en la sección Configuración {'>'} Privacidad. Desde allí podrás activar o desactivar las cookies no esenciales y consultar cuáles están activas en tu sesión.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Cookie Settings</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos uses cookies and similar technologies to ensure the correct functioning of the game and improve your experience. Below we explain what types of cookies we use and how you can manage them.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Technical or essential cookies</h2>
            <p className="text-muted-foreground">
              They are essential for the game to function correctly. They allow saving your progress, maintaining your configuration preferences (such as volume or language), and ensuring session stability. They cannot be deactivated without affecting the game's functionality.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Analytical cookies</h2>
            <p className="text-muted-foreground">
              We use analytical cookies anonymously to understand how players interact with the game: which areas generate more difficulty, where the game is abandoned most frequently, or how many players collect all memory fragments. This information helps us improve future versions. You can deactivate these cookies from the game's settings menu without losing functionality.
            </p>

            <h2 className="font-serif text-2xl text-foreground">How to manage your preferences</h2>
            <p className="text-muted-foreground">
              You can access cookie settings at any time from the main menu, in the Settings {'>'} Privacy section. From there you can activate or deactivate non-essential cookies and see which are active in your session.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function CookiesPage() {
  return (
    <TranslationProvider>
      <CookiesContent />
    </TranslationProvider>
  )
}