"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function EualaContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">EUALA – Acuerdo de Licencia de Usuario Final</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Este Acuerdo de Licencia de Usuario Final (EUALA, por sus siglas en inglés) es un contrato legal entre tú (el Usuario) y el equipo desarrollador de La Casa de los Recuerdos (el Licenciante). Al instalar o ejecutar el juego, aceptas todos los términos aquí descritos.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Concesión de licencia</h2>
            <p className="text-muted-foreground">
              El Licenciante te otorga una licencia limitada, no exclusiva, no sublicenciable, revocable e intransferible para instalar y usar el juego en un dispositivo personal de tu propiedad o bajo tu control, exclusivamente para uso personal y no comercial.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Propiedad intelectual</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos, incluyendo todos sus personajes (el Protagonista, Lumen, Vyre, la Sombra, el Padre y la Hermana), su narrativa, diseño visual, banda sonora, código fuente y elementos gráficos, es propiedad exclusiva del equipo desarrollador. Todos los derechos están reservados. Esta licencia no te transfiere ningún derecho de propiedad.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Restricciones</h2>
            <p className="text-muted-foreground">
              No puedes copiar, modificar, distribuir, vender, alquilar, sublicenciar, descompilar, aplicar ingeniería inversa ni crear obras derivadas del juego o de cualquiera de sus componentes sin autorización escrita previa del Licenciante.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Terminación</h2>
            <p className="text-muted-foreground">
              Esta licencia permanece vigente hasta su terminación. El Licenciante puede terminarla de forma inmediata si incumples cualquiera de sus términos. Al terminar la licencia, debes desinstalar y destruir todas las copias del juego en tu posesión.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Limitación de responsabilidad</h2>
            <p className="text-muted-foreground">
              El juego se proporciona 'tal como está'. El Licenciante no garantiza que el juego esté libre de errores o interrupciones. En la máxima medida permitida por la ley, el Licenciante no será responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso del juego.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">EULA – End User License Agreement</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              This End User License Agreement (EULA) is a legal contract between you (the User) and the development team of La Casa de los Recuerdos (the Licensor). By installing or running the game, you accept all the terms described here.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Grant of license</h2>
            <p className="text-muted-foreground">
              The Licensor grants you a limited, non-exclusive, non-sublicensable, revocable, and non-transferable license to install and use the game on a personal device owned or controlled by you, exclusively for personal and non-commercial use.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Intellectual property</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos, including all its characters (the Protagonist, Lumen, Vyre, the Shadow, the Father, and the Sister), its narrative, visual design, soundtrack, source code, and graphic elements, is the exclusive property of the development team. All rights are reserved. This license does not transfer any ownership rights to you.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Restrictions</h2>
            <p className="text-muted-foreground">
              You may not copy, modify, distribute, sell, rent, sublicense, decompile, reverse engineer, or create derivative works from the game or any of its components without prior written authorization from the Licensor.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Termination</h2>
            <p className="text-muted-foreground">
              This license remains in effect until terminated. The Licensor may terminate it immediately if you breach any of its terms. Upon termination of the license, you must uninstall and destroy all copies of the game in your possession.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Limitation of liability</h2>
            <p className="text-muted-foreground">
              The game is provided 'as is'. The Licensor does not guarantee that the game is free from errors or interruptions. To the maximum extent permitted by law, the Licensor will not be liable for indirect, incidental, special, or consequential damages arising from the use or inability to use the game.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function EualaPage() {
  return (
    <TranslationProvider>
      <EualaContent />
    </TranslationProvider>
  )
}