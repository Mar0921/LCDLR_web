"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function PrivacidadLegalContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Privacidad y Legal</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Esta sección resume los principales compromisos legales del equipo desarrollador de La Casa de los Recuerdos con respecto a la privacidad de sus usuarios y el cumplimiento normativo.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Marco legal aplicable</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos opera en cumplimiento con la legislación colombiana en materia de protección de datos (Ley 1581 de 2012 y Decreto 1377 de 2013), así como con los principios del Reglamento General de Protección de Datos (RGPD) de la Unión Europea, aplicables a usuarios ubicados en territorio europeo.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Responsable del tratamiento</h2>
            <p className="text-muted-foreground">
              El responsable del tratamiento de datos personales de los usuarios de La Casa de los Recuerdos es el equipo desarrollador del juego. Para cualquier consulta relacionada con el tratamiento de datos, puedes contactarnos en privacidad@lacasadelosrecuerdos.com.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Derechos del usuario</h2>
            <p className="text-muted-foreground">
              Como usuario, tienes derecho a conocer qué datos personales tenemos sobre ti, solicitar su rectificación si son inexactos, solicitar su eliminación cuando ya no sean necesarios, oponerte a su tratamiento, y solicitar la portabilidad de tus datos. Puedes ejercer estos derechos enviando una solicitud escrita a nuestra dirección de privacidad.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Propiedad intelectual</h2>
            <p className="text-muted-foreground">
              Todos los elementos del juego —incluyendo personajes, narrativa, código, música y arte— son propiedad intelectual de sus creadores y están protegidos por las leyes de derechos de autor aplicables. Cualquier uso no autorizado constituye una infracción sujeta a acciones legales.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Privacy & Legal</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              This section summarizes the main legal commitments of the development team of La Casa de los Recuerdos regarding user privacy and regulatory compliance.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Applicable legal framework</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos operates in compliance with Colombian data protection legislation (Law 1581 of 2012 and Decree 1377 of 2013), as well as with the principles of the European Union's General Data Protection Regulation (GDPR), applicable to users located in European territory.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Data controller</h2>
            <p className="text-muted-foreground">
              The data controller for personal data of La Casa de los Recuerdos users is the game development team. For any queries related to data processing, you can contact us at privacidad@lacasadelosrecuerdos.com.
            </p>

            <h2 className="font-serif text-2xl text-foreground">User rights</h2>
            <p className="text-muted-foreground">
              As a user, you have the right to know what personal data we have about you, request its rectification if inaccurate, request its deletion when no longer necessary, object to its processing, and request the portability of your data. You can exercise these rights by sending a written request to our privacy address.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Intellectual property</h2>
            <p className="text-muted-foreground">
              All elements of the game —including characters, narrative, code, music, and art— are intellectual property of their creators and are protected by applicable copyright laws. Any unauthorized use constitutes an infringement subject to legal action.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PrivacidadLegalPage() {
  return (
    <TranslationProvider>
      <PrivacidadLegalContent />
    </TranslationProvider>
  )
}