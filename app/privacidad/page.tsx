"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function PrivacidadContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              El equipo de La Casa de los Recuerdos respeta tu privacidad. Esta Política describe qué datos recopilamos, cómo los usamos y cómo los protegemos.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Datos que recopilamos</h2>
            <p className="text-muted-foreground">
              Podemos recopilar datos técnicos sobre tu dispositivo y sistema operativo para mejorar el rendimiento del juego, así como información sobre tu progreso de juego (niveles completados, fragmentos de recuerdo recolectados) con el fin de garantizar el guardado correcto. No recopilamos datos sensibles como tu nombre real, dirección, ni información financiera a menos que optes voluntariamente por funciones adicionales que los requieran.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Uso de los datos</h2>
            <p className="text-muted-foreground">
              Los datos recopilados se usan exclusivamente para garantizar el funcionamiento correcto del juego, mejorar la experiencia del usuario en futuras actualizaciones y, de forma agregada y anonimizada, para análisis estadísticos de uso. Nunca venderemos tus datos a terceros.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cookies y tecnologías de seguimiento</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos puede utilizar cookies técnicas necesarias para el funcionamiento del juego. No utilizamos cookies publicitarias ni de rastreo de comportamiento sin tu consentimiento explícito.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Retención y eliminación de datos</h2>
            <p className="text-muted-foreground">
              Conservamos tus datos de juego mientras mantengas el juego instalado. Si solicitas la eliminación de tu cuenta o tus datos, los borraremos en un plazo máximo de 30 días, excepto cuando la ley nos obligue a conservarlos.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              The team of La Casa de los Recuerdos respects your privacy. This Policy describes what data we collect, how we use it, and how we protect it.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Data we collect</h2>
            <p className="text-muted-foreground">
              We may collect technical data about your device and operating system to improve game performance, as well as information about your game progress (completed levels, memory fragments collected) to ensure correct saving. We do not collect sensitive data such as your real name, address, or financial information unless you voluntarily opt for additional features that require them.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Use of data</h2>
            <p className="text-muted-foreground">
              The collected data is used exclusively to ensure the correct functioning of the game, improve the user experience in future updates, and in an aggregated and anonymized form for statistical usage analysis. We will never sell your data to third parties.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cookies and tracking technologies</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos may use technical cookies necessary for the game to function. We do not use advertising or behavioral tracking cookies without your explicit consent.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Data retention and deletion</h2>
            <p className="text-muted-foreground">
              We keep your game data as long as you have the game installed. If you request the deletion of your account or your data, we will delete it within a maximum of 30 days, except when the law requires us to keep it.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PrivacidadPage() {
  return (
    <TranslationProvider>
      <PrivacidadContent />
    </TranslationProvider>
  )
}