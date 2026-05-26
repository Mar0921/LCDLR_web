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
    { label: "EULA", href: "/euala" },
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
    <footer className="relative overflow-hidden py-14 px-6 border-t border-border/60 bg-card/40 backdrop-blur-xl">

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-red-500/40" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex items-center gap-4 group">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-red-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-10 h-10 rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-500/15 to-red-500/15 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">

                {/* Shine */}
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <span className="relative text-foreground font-serif text-sm">
                  C
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl tracking-wide bg-gradient-to-r from-blue-200 via-white to-red-200 bg-clip-text text-transparent">
                {t.gameTitle}
              </h3>

              <div className="mt-1 h-px w-0 bg-gradient-to-r from-blue-500 to-red-500 group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          {/* Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground tracking-wide">
            <span className="text-blue-200/80">
              © 2026 MAGO
            </span>

            <span className="hidden md:block text-border">
              ✦
            </span>

            <span className="text-red-200/80">
              {t.videoGameProject}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Quote */}
        <div className="text-center mb-8">
          <p className="text-sm italic font-serif text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            &ldquo;{t.footerQuote}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gradient-to-br from-blue-500 to-red-500" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-red-500/50" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">

          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="
                group relative text-xs tracking-wide text-muted-foreground/70
                transition-all duration-300 hover:text-foreground
              "
            >
              <span className="relative z-10">
                {link.label}
              </span>

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300 group-hover:w-full" />

              {/* Glow */}
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Bottom detail */}
        <div className="mt-10 pt-6 border-t border-border/40 text-center">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-border/50 bg-background/40 backdrop-blur-md">

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-md opacity-70 rounded-full animate-pulse" />
              <span className="relative w-2 h-2 rounded-full bg-blue-400 block" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
              House of Memories
            </span>

            <div className="relative">
              <div className="absolute inset-0 bg-red-500 blur-md opacity-70 rounded-full animate-pulse" />
              <span className="relative w-2 h-2 rounded-full bg-red-400 block" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}