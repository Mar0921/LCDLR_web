"use client"

interface HeaderProps {
  activeSection: "principal" | "bitacora"
  setActiveSection: (section: "principal" | "bitacora") => void
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <span className="text-primary font-serif text-lg">C</span>
          </div>
          <h1 className="font-serif text-xl tracking-wide text-foreground">
            La Casa de los Recuerdos
          </h1>
        </div>
        
        <nav className="flex items-center gap-1">
          <button
            onClick={() => setActiveSection("principal")}
            className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 ${
              activeSection === "principal"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Página Principal
          </button>
          <button
            onClick={() => setActiveSection("bitacora")}
            className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 ${
              activeSection === "bitacora"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Bitácora
          </button>
        </nav>
      </div>
    </header>
  )
}
