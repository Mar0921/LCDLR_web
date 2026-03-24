"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function SoporteContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Centro de Soporte</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Bienvenido al centro de soporte de La Casa de los Recuerdos. Nuestro equipo está disponible para ayudarte con cualquier problema técnico, duda sobre el juego o inconveniente relacionado con tu experiencia de juego.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Cómo contactarnos</h2>
            <p className="text-muted-foreground">
              Para recibir asistencia puedes escribirnos a través del formulario de contacto disponible en el menú principal del juego, o enviarnos un correo electrónico a soporte@lacasadelosrecuerdos.com. Respondemos todas las solicitudes en un plazo máximo de 48 horas hábiles.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Problemas frecuentes</h2>
            <p className="text-muted-foreground">
              Si el juego no inicia correctamente, te recomendamos verificar que tu dispositivo cumple con los requisitos mínimos del sistema, que el sistema operativo esté actualizado y que el almacenamiento disponible sea suficiente. Si el problema persiste tras reiniciar el dispositivo, por favor contáctanos incluyendo el modelo de tu dispositivo y una descripción del error.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Progreso y guardado</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos guarda automáticamente tu progreso en cada transición entre zonas de la casa. Si experimentas pérdida de progreso, contáctanos indicando la plataforma en la que juegas y el nivel en el que te encontrabas.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Support Center</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Welcome to the support center for La Casa de los Recuerdos. Our team is available to help you with any technical issue, question about the game, or inconvenience related to your gaming experience.
            </p>

            <h2 className="font-serif text-2xl text-foreground">How to contact us</h2>
            <p className="text-muted-foreground">
              To receive assistance, you can write to us through the contact form available in the game's main menu, or send us an email at soporte@lacasadelosrecuerdos.com. We respond to all requests within a maximum of 48 business hours.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Frequently asked problems</h2>
            <p className="text-muted-foreground">
              If the game does not start correctly, we recommend verifying that your device meets the minimum system requirements, that the operating system is updated, and that there is sufficient storage. If the problem persists after restarting the device, please contact us including your device model and a description of the error.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Progress and saves</h2>
            <p className="text-muted-foreground">
              La Casa de los Recuerdos automatically saves your progress at each transition between areas of the house. If you experience progress loss, contact us indicating the platform you play on and the level you were at.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function SoportePage() {
  return (
    <TranslationProvider>
      <SoporteContent />
    </TranslationProvider>
  )
}