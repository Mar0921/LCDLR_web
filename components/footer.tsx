export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <span className="text-primary font-serif text-sm">C</span>
            </div>
            <span className="font-serif text-lg text-foreground">La Casa de los Recuerdos</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 [Nombre del Equipo]</span>
            <span className="hidden md:inline text-border">|</span>
            <span>Proyecto de Videojuego</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground/60 italic font-serif">
            &ldquo;Los recuerdos son las estrellas que iluminan el cielo de nuestra memoria.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
