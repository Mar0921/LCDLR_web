"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { CharactersSection } from "@/components/characters-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { BitacoraSection } from "@/components/bitacora-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState<"principal" | "bitacora">("principal")

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === "principal" ? (
        <main>
          <HeroSection />
          <StorySection />
          <CharactersSection />
          <ObjectivesSection />
        </main>
      ) : (
        <main>
          <BitacoraSection />
        </main>
      )}
      
      <Footer />
    </div>
  )
}
