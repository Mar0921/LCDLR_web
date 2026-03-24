"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function ArchivoContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Términos del Archivo</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos puede almacenar ciertos datos de tu experiencia de juego de forma local en tu dispositivo o en servidores remotos, con el fin de garantizar la continuidad de tu progreso y preservar los logros obtenidos durante la partida.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Qué se archiva</h2>
            <p className="text-muted-foreground">
              El sistema de archivo guarda tu progreso por niveles (El umbral, Lo que quedó, El niño que fui, La última puerta), los fragmentos de recuerdo que hayas recolectado, tus preferencias de configuración dentro del juego y el estado de desbloqueo del epílogo extendido.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Eliminación del archivo</h2>
            <p className="text-muted-foreground">
              Puedes eliminar tu archivo de guardado en cualquier momento desde el menú principal, en la sección Ajustes {'>'} Datos guardados {'>'} Eliminar archivo. Ten en cuenta que esta acción es irreversible y perderás todo el progreso acumulado, incluyendo los fragmentos de recuerdo y el epílogo desbloqueado.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Transferencia de datos</h2>
            <p className="text-muted-foreground">
              El equipo desarrollador no se responsabiliza de la pérdida de datos de juego causada por desinstalación del juego, fallo del dispositivo, pérdida del dispositivo o formateo del sistema. Te recomendamos activar la sincronización en la nube si tu plataforma lo permite.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Terms Archive</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos may store certain data from your gaming experience locally on your device or on remote servers, in order to ensure the continuity of your progress and preserve the achievements obtained during the game.
            </p>

            <h2 className="font-serif text-2xl text-foreground">What is archived</h2>
            <p className="text-muted-foreground">
              The archive system saves your progress by levels (The Threshold, What Remains, The Child I Was, The Last Door), the memory fragments you have collected, your in-game configuration preferences, and the unlock status of the extended epilogue.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Archive deletion</h2>
            <p className="text-muted-foreground">
              You can delete your save file at any time from the main menu, in the Settings {'>'} Saved Data {'>'} Delete File section. Keep in mind that this action is irreversible and you will lose all accumulated progress, including the memory fragments and the unlocked epilogue.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Data transfer</h2>
            <p className="text-muted-foreground">
              The development team is not responsible for the loss of game data caused by uninstalling the game, device failure, device loss, or system formatting. We recommend enabling cloud synchronization if your platform allows it.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ArchivoPage() {
  return (
    <TranslationProvider>
      <ArchivoContent />
    </TranslationProvider>
  )
}