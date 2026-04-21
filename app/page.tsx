"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { CharactersSection } from "@/components/characters-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { BitacoraSection } from "@/components/bitacora-section"
import { EquipoSection } from "@/components/equipo-section"
import { Footer } from "@/components/footer"
import { TranslationProvider, useTranslation } from "@/lib/translations"
import { GlowBackground } from "@/components/glow-background"

function HomeContent() {
  const [activeSection, setActiveSection] = useState<"principal" | "bitacora" | "equipo">("principal")
  const { language, setLanguage } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Page entrance animation
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <GlowBackground />
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        language={language}
        setLanguage={setLanguage}
      />
      
      {activeSection === "principal" ? (
        <main>
          <HeroSection />
          <StorySection />
          <CharactersSection />
          <ObjectivesSection />
        </main>
      ) : activeSection === "bitacora" ? (
        <main>
          <BitacoraSection />
        </main>
      ) : (
        <main>
          <EquipoSection />
        </main>
      )}
      
      <Footer />
    </div>
  )
}

export default function Home() {
  return (
    <TranslationProvider>
      <HomeContent />
    </TranslationProvider>
  )
}
