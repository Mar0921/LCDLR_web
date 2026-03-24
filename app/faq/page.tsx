"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function FAQContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("principal")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const faqsSpanish = [
    {
      question: "¿De qué trata La Casa de los Recuerdos?",
      answer: "Es un juego de terror psicológico narrativo en el que controlas a un joven de 18 años que regresa a la casa donde vivió su infancia. Al colapsar al entrar, despierta fragmentado en dos entidades —Lumen y Vyre— y debe recorrer la casa reviviendo sus recuerdos y enfrentando la sombra de su culpa para poder sanar."
    },
    {
      question: "¿Hay combate en el juego?",
      answer: "No. La Casa de los Recuerdos no tiene combate. La Sombra no puede ser derrotada por la fuerza. El juego se resuelve mediante puzzles, exploración y la aceptación emocional del pasado del protagonista."
    },
    {
      question: "¿Cuánto dura el juego?",
      answer: "Una partida estándar dura entre 4 y 5 horas. Si quieres recolectar los 12 fragmentos de recuerdo y desbloquear el epílogo extendido, el tiempo puede extenderse hasta 6 horas."
    },
    {
      question: "¿El juego tiene contenido perturbador?",
      answer: "Sí. La Casa de los Recuerdos aborda de manera simbólica temas como el trauma infantil, el abuso y la culpa. Aunque no hay violencia gráfica explícita, el contenido puede resultar emocionalmente intenso. El juego está clasificado para mayores de 17 años según la ESRB."
    },
    {
      question: "¿Se puede pausar el juego?",
      answer: "Sí. Puedes pausar en cualquier momento durante la exploración y los puzzles. Las escenas de persecución activa no se pueden pausar, ya que forman parte integral de la tensión narrativa."
    },
    {
      question: "¿Qué pasa si colecciono todos los fragmentos de recuerdo?",
      answer: "Recolectar los 12 fragmentos de recuerdo dispersos por la casa desbloquea el epílogo extendido, que amplía la narrativa del reencuentro entre el protagonista y su hermana."
    },
    {
      question: "¿El juego tiene múltiples finales?",
      answer: "El juego tiene un desenlace principal, pero el camino hacia él puede variar según las decisiones del jugador al alternar entre Lumen y Vyre. Los fragmentos de recuerdo recolectados enriquecen la narrativa y desbloquean el epílogo extendido."
    },
    {
      question: "¿Puedo jugar en varios idiomas?",
      answer: "Actualmente el juego está disponible en español. Se está trabajando en versiones en inglés y portugués para futuras actualizaciones."
    }
  ]

  const faqsEnglish = [
    {
      question: "What is La Casa de los Recuerdos about?",
      answer: "It is a narrative psychological horror game in which you control an 18-year-old young person who returns to the house where they lived their childhood. Upon collapsing upon entering, they wake up fragmented into two entities —Lumen and Vyre— and must traverse the house reliving their memories and facing the shadow of their guilt in order to heal."
    },
    {
      question: "Is there combat in the game?",
      answer: "No. La Casa de los Recuerdos has no combat. The Shadow cannot be defeated by force. The game is resolved through puzzles, exploration, and emotional acceptance of the protagonist's past."
    },
    {
      question: "How long is the game?",
      answer: "A standard playthrough lasts between 4 and 5 hours. If you want to collect all 12 memory fragments and unlock the extended epilogue, the time can extend to up to 6 hours."
    },
    {
      question: "Does the game have disturbing content?",
      answer: "Yes. La Casa de los Recuerdos symbolically addresses themes such as childhood trauma, abuse, and guilt. Although there is no explicit graphic violence, the content can be emotionally intense. The game is rated for ages 17+ according to the ESRB."
    },
    {
      question: "Can the game be paused?",
      answer: "Yes. You can pause at any time during exploration and puzzles. Active pursuit scenes cannot be paused, as they are an integral part of the narrative tension."
    },
    {
      question: "What happens if I collect all memory fragments?",
      answer: "Collecting the 12 memory fragments scattered throughout the house unlocks the extended epilogue, which expands the narrative of the reunion between the protagonist and their sister."
    },
    {
      question: "Does the game have multiple endings?",
      answer: "The game has a main ending, but the path to it can vary based on player decisions when switching between Lumen and Vyre. The memory fragments collected enrich the narrative and unlock the extended epilogue."
    },
    {
      question: "Can I play in multiple languages?",
      answer: "Currently the game is available in Spanish. Versions in English and Portuguese are being worked on for future updates."
    }
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Preguntas Frecuentes (FAQ)</h1>
          
          <div className="space-y-8">
            {faqsSpanish.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h2 className="font-serif text-xl text-foreground mb-3">
                  {faq.question}
                </h2>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Frequently Asked Questions (FAQ)</h1>
          
          <div className="space-y-8">
            {faqsEnglish.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h2 className="font-serif text-xl text-foreground mb-3">
                  {faq.question}
                </h2>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function FAQPage() {
  return (
    <TranslationProvider>
      <FAQContent />
    </TranslationProvider>
  )
}