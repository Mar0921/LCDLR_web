"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Mail } from "lucide-react"

function ContactoContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("principal")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const contactsSpanish = [
    { type: "Soporte técnico", email: "soporte@lacasadelosrecuerdos.com", description: "Para problemas técnicos, errores del juego o pérdida de progreso. Incluye en tu mensaje el dispositivo que usas, la plataforma (PC, móvil, consola) y una descripción detallada del problema." },
    { type: "Privacidad y datos", email: "privacidad@lacasadelosrecuerdos.com", description: "Para solicitudes de acceso, corrección o eliminación de datos personales." },
    { type: "Denuncias y reportes", email: "denuncias@lacasadelosrecuerdos.com", description: "Para reportar contenido inapropiado o solicitar una revisión editorial." },
    { type: "Prensa y colaboraciones", email: "prensa@lacasadelosrecuerdos.com", description: "Para solicitudes de prensa, entrevistas o propuestas de colaboración." }
  ]

  const contactsEnglish = [
    { type: "Technical support", email: "soporte@lacasadelosrecuerdos.com", description: "For technical problems, game errors, or progress loss. Include in your message the device you use, the platform (PC, mobile, console), and a detailed description of the problem." },
    { type: "Privacy and data", email: "privacidad@lacasadelosrecuerdos.com", description: "For requests to access, correct, or delete personal data." },
    { type: "Reports and complaints", email: "denuncias@lacasadelosrecuerdos.com", description: "To report inappropriate content or request editorial review." },
    { type: "Press and collaborations", email: "prensa@lacasadelosrecuerdos.com", description: "For press requests, interviews, or collaboration proposals." }
  ]

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
          <h1 className="font-serif text-4xl text-foreground mb-8">Contáctanos</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Estamos disponibles para responder tus preguntas, escuchar tus comentarios y ayudarte con cualquier inconvenience relacionado con La Casa de los Recuerdos.
          </p>

          <div className="space-y-8">
            {contactsSpanish.map((contact, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card/50">
                <h2 className="font-serif text-xl text-foreground mb-3">
                  {contact.type}
                </h2>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground text-sm">
              Tiempo de respuesta estimado: 48 horas hábiles para soporte técnico, y hasta 30 días para solicitudes relacionadas con datos personales.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Contact Us</h1>

          <p className="text-lg text-muted-foreground mb-8">
            We are available to answer your questions, listen to your comments, and help you with any issues related to La Casa de los Recuerdos.
          </p>

          <div className="space-y-8">
            {contactsEnglish.map((contact, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card/50">
                <h2 className="font-serif text-xl text-foreground mb-3">
                  {contact.type}
                </h2>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground text-sm">
              Estimated response time: 48 business hours for technical support, and up to 30 days for requests related to personal data.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ContactoPage() {
  return (
    <TranslationProvider>
      <ContactoContent />
    </TranslationProvider>
  )
}