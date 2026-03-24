"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TranslationProvider } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

function CondicionesContent() {
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
          <h1 className="font-serif text-4xl text-foreground mb-8">Condiciones de Uso</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Al descargar, instalar o ejecutar La Casa de los Recuerdos, aceptas de forma expresa las presentes Condiciones de Uso. Si no estás de acuerdo con alguna de ellas, te pedimos que no uses el juego.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Licencia de uso</h2>
            <p className="text-muted-foreground">
              El equipo desarrollador de La Casa de los Recuerdos te otorga una licencia personal, no exclusiva, intransferible y revocable para usar el juego exclusivamente con fines de entretenimiento personal. Esta licencia no incluye derechos de distribución, modificación, ingeniería inversa, reproducción comercial ni explotación de ningún elemento del juego.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Uso permitido</h2>
            <p className="text-muted-foreground">
              El juego está diseñado para ser utilizado en el contexto previsto por sus creadores: una experiencia narrativa de terror psicológico de un solo jugador. Está permitido hablar del juego en foros, redes sociales y plataformas de contenido, así como crear reseñas, streamings o videos de gameplay, siempre que se haga de forma honesta y sin alterar la obra.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Uso prohibido</h2>
            <p className="text-muted-foreground">
              Queda estrictamente prohibido descompilar, modificar, distribuir o vender el juego o cualquiera de sus elementos sin autorización escrita del equipo desarrollador. También está prohibido usar el juego para difundir mensajes de odio, violencia o discriminación, así como atribuirle declaraciones o posiciones que no correspondan a las intenciones de sus creadores.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Suspensión del servicio</h2>
            <p className="text-muted-foreground">
              El equipo desarrollador se reserva el derecho de suspender o interrumpir el acceso al juego en caso de incumplimiento de estas condiciones, sin necesidad de aviso previo y sin que ello genere derecho a compensación alguna por parte del usuario.
            </p>
          </div>
        </div>

        {/* English Content */}
        <div className="border-t border-border pt-12">
          <h1 className="font-serif text-4xl text-foreground mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              By downloading, installing, or running La Casa de los Recuerdos, you expressly accept these Terms of Use. If you do not agree with any of them, we ask that you do not use the game.
            </p>

            <h2 className="font-serif text-2xl text-foreground">License of use</h2>
            <p className="text-muted-foreground">
              The development team of La Casa de los Recuerdos grants you a personal, non-exclusive, non-transferable, and revocable license to use the game exclusively for personal entertainment purposes. This license does not include rights of distribution, modification, reverse engineering, commercial reproduction, or exploitation of any element of the game.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Permitted use</h2>
            <p className="text-muted-foreground">
              The game is designed to be used in the context intended by its creators: a single-player psychological horror narrative experience. It is allowed to talk about the game on forums, social media, and content platforms, as well as create reviews, streams, or gameplay videos, provided it is done honestly and without altering the work.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Prohibited use</h2>
            <p className="text-muted-foreground">
              It is strictly prohibited to decompile, modify, distribute, or sell the game or any of its elements without written authorization from the development team. It is also prohibited to use the game to spread messages of hate, violence, or discrimination, as well as to attribute statements or positions that do not correspond to the intentions of its creators.
            </p>

            <h2 className="font-serif text-2xl text-foreground">Service suspension</h2>
            <p className="text-muted-foreground">
              The development team reserves the right to suspend or interrupt access to the game in case of breach of these conditions, without prior notice and without this generating any right to compensation from the user.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function CondicionesPage() {
  return (
    <TranslationProvider>
      <CondicionesContent />
    </TranslationProvider>
  )
}