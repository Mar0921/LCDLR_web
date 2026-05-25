"use client"

import { useTranslation } from "@/lib/translations"
import Link from "next/link"

export function Footer() {
  const { t, language } = useTranslation()
  
  const footerLinks = [
    { label: "Soporte", href: "/soporte" },
    { label: "Denunciar contenido/Solicitar datos", href: "/denunciar" },
    { label: "Condiciones de Uso", href: "/condiciones" },
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Reglas del Juego", href: "/reglas" },
    { label: "Configuración de cookies", href: "/cookies" },
    { label: "Términos del Archivo", href: "/archivo" },
    { label: "FAQ", href: "/faq" },
    { label: "EUALA", href: "/euala" },
    { label: "Conducta y Reglas", href: "/conducta" },
    { label: "Seguridad en Línea", href: "/seguridad" },
    { label: "Contáctanos", href: "/contacto" },
    { label: "Privacidad y Legal", href: "/privacidad-legal" },
    { label: "Acuerdo de Usuario", href: "/acuerdo-usuario" },
  ]

  const footerLinksEn = [
    { label: "Support", href: "/soporte" },
    { label: "Report content/Request data", href: "/denunciar" },
    { label: "Terms of Use", href: "/condiciones" },
    { label: "Privacy Policy", href: "/privacidad" },
    { label: "Game Rules", href: "/reglas" },
    { label: "Cookie Settings", href: "/cookies" },
    { label: "Terms Archive", href: "/archivo" },
    { label: "FAQ", href: "/faq" },
    { label: "EULA", href: "/euala" },
    { label: "Conduct Rules", href: "/conducta" },
    { label: "Online Safety", href: "/seguridad" },
    { label: "Contact Us", href: "/contacto" },
    { label: "Privacy & Legal", href: "/privacidad-legal" },
    { label: "User Agreement", href: "/acuerdo-usuario" },
  ]
  
  const links = language === "es" ? footerLinks : footerLinksEn
  
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <span className="text-primary font-serif text-sm">C</span>
            </div>
            <span className="font-serif text-lg text-foreground">{t.gameTitle}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2026 MAGO</span>
            <span className="hidden md:inline text-border">|</span>
            <span>{t.videoGameProject}</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground/60 italic font-serif mb-6">
            &ldquo;{t.footerQuote}&rdquo;
          </p>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/60">
            {links.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="hover:text-primary cursor-pointer transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
