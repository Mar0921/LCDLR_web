"use client"

import Link from "next/link"

interface HeaderProps {
  activeSection: "principal" | "bitacora" | "equipo"
  setActiveSection: (section: "principal" | "bitacora" | "equipo") => void
  language: "es" | "en"
  setLanguage: (lang: "es" | "en") => void
}

export function Header({ activeSection, setActiveSection, language, setLanguage }: HeaderProps) {
  const getLabel = (section: string) => {
    if (language === "es") {
      const labels: Record<string, string> = {
        principal: "Página Principal",
        bitacora: "Bitácora",
        equipo: "Equipo"
      }
      return labels[section]
    } else {
      const labels: Record<string, string> = {
        principal: "Home",
        bitacora: "Dev Log",
        equipo: "Team"
      }
      return labels[section]
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center cursor-pointer">
              <span className="text-primary font-serif text-lg">C</span>
            </div>
          </Link>
          <Link href="/">
            <h1 className="font-serif text-xl tracking-wide text-foreground hover:text-primary transition-colors cursor-pointer">
              {language === "es" ? "La Casa de los Recuerdos" : "The House of Memories"}
            </h1>
          </Link>
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveSection("principal")}
            className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 ${
              activeSection === "principal"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {getLabel("principal")}
          </button>
          <button
            onClick={() => setActiveSection("bitacora")}
            className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 ${
              activeSection === "bitacora"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {getLabel("bitacora")}
          </button>
          <button
            onClick={() => setActiveSection("equipo")}
            className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 ${
              activeSection === "equipo"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {getLabel("equipo")}
          </button>
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="ml-4 px-3 py-1.5 text-sm font-medium tracking-wider border border-border rounded-md transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </header>
  )
}
