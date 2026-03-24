"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function DenunciarContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Denunciar Contenido / Solicitar Datos</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos se compromete a mantener un entorno seguro y respetuoso para todos sus jugadores. Si detectas contenido inapropiado, errores narrativos sensibles o cualquier elemento que consideres que vulnera las normas de la comunidad o las leyes aplicables, puedes reportarlo a través de los siguientes canales.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cómo denunciar contenido</h2>
            <p className="text-muted-foreground">
              Puedes enviar tu reporte a denuncias@lacasadelosrecuerdos.com, indicando la sección del juego donde encontraste el contenido, una descripción del problema y, si es posible, capturas de pantalla como evidencia. Analizaremos cada caso de forma confidencial y tomaremos las medidas oportunas.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Solicitud de datos personales</h2>
            <p className="text-muted-foreground">
              De conformidad con las leyes de protección de datos aplicables, tienes derecho a solicitar una copia de los datos personales que hemos recopilado sobre ti, solicitar su corrección o eliminación, y oponerte a su tratamiento. Para ejercer estos derechos, envía una solicitud escrita a privacidad@lacasadelosrecuerdos.com, adjuntando un documento que acredite tu identidad. Gestionaremos tu solicitud en un plazo máximo de 30 días hábiles.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Report Content / Request Data</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              La Casa de los Recuerdos is committed to maintaining a safe and respectful environment for all its players. If you detect inappropriate content, sensitive narrative errors, or any element that you believe violates community standards or applicable laws, you can report it through the following channels.
            </p>

            <h2 className="font-serif text-2xl text-foreground">How to report content</h2>
            <p className="text-muted-foreground">
              You can send your report to denuncias@lacasadelosrecuerdos.com, indicating the section of the game where you found the content, a description of the problem, and, if possible, screenshots as evidence. We will analyze each case confidentially and take appropriate measures.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Personal data request</h2>
            <p className="text-muted-foreground">
              In accordance with applicable data protection laws, you have the right to request a copy of the personal data we have collected about you, request its correction or deletion, and object to its processing. To exercise these rights, send a written request to privacidad@lacasadelosrecuerdos.com, attaching a document proving your identity. We will process your request within a maximum of 30 business days.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function DenunciarPage() {
  return (
    <TranslationProvider>
      <DenunciarContent />
    </TranslationProvider>
  )
}