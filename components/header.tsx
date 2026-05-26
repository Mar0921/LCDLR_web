"use client"

import Link from "next/link"

interface HeaderProps {
  activeSection: "principal" | "bitacora" | "equipo"
  setActiveSection: (section: "principal" | "bitacora" | "equipo") => void
  language: "es" | "en"
  setLanguage: (lang: "es" | "en") => void
}

export function Header({
  activeSection,
  setActiveSection,
  language,
  setLanguage,
}: HeaderProps) {
  const getLabel = (section: string) => {
    if (language === "es") {
      const labels: Record<string, string> = {
        principal: "Página Principal",
        bitacora: "Bitácora",
        equipo: "Equipo",
      }

      return labels[section]
    } else {
      const labels: Record<string, string> = {
        principal: "Home",
        bitacora: "Dev Log",
        equipo: "Team",
      }

      return labels[section]
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-2xl">
      
      {/* Glow line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-red-500/40" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_30%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <div className="group relative cursor-pointer">
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-red-500/40 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative w-11 h-11 rounded-full border border-white/10 bg-card/70 backdrop-blur-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/40">
                
                <span className="font-serif text-lg text-white bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
                  C
                </span>

                {/* Small shine */}
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
              </div>
            </div>
          </Link>

          <Link href="/">
            <h1 className="font-serif text-xl md:text-2xl tracking-wide text-white transition-all duration-300 hover:text-blue-200 cursor-pointer">
              <span className="bg-gradient-to-r from-white via-blue-200 to-red-200 bg-clip-text text-transparent">
                {language === "es"
                  ? "La Casa de los Recuerdos"
                  : "The House of Memories"}
              </span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          {(["principal", "bitacora", "equipo"] as const).map((section) => {
            const isActive = activeSection === section

            return (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`
                  relative px-5 py-2.5 rounded-xl overflow-hidden
                  font-serif text-sm tracking-wide transition-all duration-300
                  border
                  ${
                    isActive
                      ? "border-blue-500/40 bg-blue-500/10 text-white shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                      : "border-transparent text-muted-foreground hover:text-white hover:border-red-500/30 hover:bg-red-500/5"
                  }
                `}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-red-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                {/* Active line */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-blue-400 to-red-400" />
                )}

                <span className="relative z-10">
                  {getLabel(section)}
                </span>
              </button>
            )
          })}

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="
              ml-3 relative overflow-hidden
              px-4 py-2 rounded-xl
              border border-white/10
              bg-card/60 backdrop-blur-xl
              font-serif text-sm tracking-widest text-white
              transition-all duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/10
              hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
            "
          >
            <span className="relative z-10">
              {language === "es" ? "EN" : "ES"}
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </header>
  )
}