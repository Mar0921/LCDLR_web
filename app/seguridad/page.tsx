"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function SeguridadContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Seguridad en Línea</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos es principalmente una experiencia de un solo jugador. Sin embargo, entendemos que los jugadores interactúan en comunidades digitales relacionadas con el juego. Aquí compartimos recomendaciones para mantener tu seguridad en línea.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Protege tu información personal</h2>
            <p className="text-muted-foreground">
              No compartas datos personales sensibles (nombre completo, dirección, número de teléfono, información bancaria) en foros, grupos o chats relacionados con el juego. Ningún representante oficial del equipo de La Casa de los Recuerdos te pedirán esta información a través de canales informales.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cuidado con el phishing</h2>
            <p className="text-muted-foreground">
              Desconfía de correos electrónicos, mensajes o enlaces que afirmen provenir del equipo del juego y te soliciten credenciales, datos de pago o que descargues archivos adicionales. Nuestras comunicaciones oficiales siempre provienen del dominio @lacasadelosrecuerdos.com.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Salud mental y contenido sensible</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos aborda temas que pueden resonar de forma profunda y personal en algunos jugadores. Si durante o después de jugar experimentas emociones difíciles, te invitamos a hablar con alguien de confianza o acudir a un profesional de salud mental. No estás solo.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Online Safety</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos is primarily a single-player experience. However, we understand that players interact in digital communities related to the game. Here we share recommendations to keep you safe online.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Protect your personal information</h2>
            <p className="text-muted-foreground">
              Do not share sensitive personal data (full name, address, phone number, banking information) in forums, groups, or chats related to the game. No official representative of the La Casa de los Recuerdos team will ask for this information through informal channels.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Beware of phishing</h2>
            <p className="text-muted-foreground">
              Be wary of emails, messages, or links that claim to come from the game team and ask for credentials, payment data, or that you download additional files. Our official communications always come from the domain @lacasadelosrecuerdos.com.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Mental health and sensitive content</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos addresses themes that may resonate deeply and personally with some players. If during or after playing you experience difficult emotions, we invite you to talk with someone you trust or see a mental health professional. You are not alone.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function SeguridadPage() {
  return (
    <TranslationProvider>
      <SeguridadContent />
    </TranslationProvider>
  )
}