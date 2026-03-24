"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function AcuerdoUsuarioContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Acuerdo de Usuario</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Este Acuerdo de Usuario establece los términos y condiciones que rigen la relación entre tú, como usuario de La Casa de los Recuerdos, y el equipo desarrollador del juego. Al acceder o usar el juego, confirmas que has leído, entendido y aceptado este acuerdo en su totalidad.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Elegibilidad</h2>
            <p className="text-muted-foreground">
              Para usar La Casa de los Recuerdos debes tener al menos 17 años de edad, de acuerdo con la clasificación ESRB del juego. Si eres menor de 17 años, solo puedes jugar bajo la supervisión de un padre, madre o tutor legal que haya aceptado este acuerdo en tu nombre.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Modificaciones al acuerdo</h2>
            <p className="text-muted-foreground">
              El equipo desarrollador se reserva el derecho de modificar este Acuerdo de Usuario en cualquier momento. Las modificaciones serán notificadas a través de los canales oficiales del juego. El uso continuado del juego después de la notificación de cambios implica la aceptación de los nuevos términos.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Ley aplicable y jurisdicción</h2>
            <p className="text-muted-foreground">
              Este acuerdo se rige por las leyes de la República de Colombia. Cualquier disputa derivada de este acuerdo será sometida a la jurisdicción de los tribunales competentes de la ciudad de Cali, Valle del Cauca, Colombia.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Aceptación</h2>
            <p className="text-muted-foreground">
              Al instalar, descargar o ejecutar La Casa de los Recuerdos, confirmas que has leído y aceptado la totalidad de este Acuerdo de Usuario, las Condiciones de Uso, la Política de Privacidad y el EUALA descritos en este documento.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">User Agreement</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              This User Agreement establishes the terms and conditions that govern the relationship between you, as a user of La Casa de los Recuerdos, and the game development team. By accessing or using the game, you confirm that you have read, understood, and accepted this agreement in its entirety.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Eligibility</h2>
            <p className="text-muted-foreground">
              To use La Casa de los Recuerdos you must be at least 17 years old, according to the game's ESRB rating. If you are under 17, you may only play under the supervision of a parent, mother, or legal guardian who has accepted this agreement on your behalf.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Modifications to the agreement</h2>
            <p className="text-muted-foreground">
              The development team reserves the right to modify this User Agreement at any time. Modifications will be notified through official channels of the game. Continued use of the game after notification of changes implies acceptance of the new terms.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Applicable law and jurisdiction</h2>
            <p className="text-muted-foreground">
              This agreement is governed by the laws of the Republic of Colombia. Any dispute arising from this agreement will be subject to the jurisdiction of the competent courts of the city of Cali, Valle del Cauca, Colombia.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Acceptance</h2>
            <p className="text-muted-foreground">
              By installing, downloading, or running La Casa de los Recuerdos, you confirm that you have read and accepted the entirety of this User Agreement, the Terms of Use, the Privacy Policy, and the EULA described in this document.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function AcuerdoUsuarioPage() {
  return (
    <TranslationProvider>
      <AcuerdoUsuarioContent />
    </TranslationProvider>
  )
}