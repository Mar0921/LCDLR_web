import { useTranslation } from "@/lib/translations"

const particles = [
  { left: 12, top: 8, delay: 0.2, duration: 3.5, color: "bg-blue-400/40" },
  { left: 85, top: 15, delay: 1.1, duration: 4.2, color: "bg-red-400/40" },
  { left: 45, top: 22, delay: 2.3, duration: 3.8, color: "bg-blue-500/30" },
  { left: 72, top: 35, delay: 0.7, duration: 4.5, color: "bg-red-500/30" },
  { left: 28, top: 42, delay: 1.8, duration: 3.2, color: "bg-blue-300/40" },
  { left: 92, top: 55, delay: 2.9, duration: 4.0, color: "bg-red-300/40" },
  { left: 18, top: 68, delay: 0.4, duration: 3.6, color: "bg-blue-400/30" },
  { left: 65, top: 75, delay: 1.5, duration: 4.3, color: "bg-red-400/30" },
]

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden bg-[#070b14]">

      {/* Fondo cinematográfico */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#090f1f] via-[#070b14] to-[#05070d]" />

        {/* Luces azules */}
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] rounded-full bg-blue-400/15 blur-[130px]" />

        {/* Luces rojas */}
        <div className="absolute top-[35%] right-[-150px] w-[400px] h-[400px] rounded-full bg-red-500/15 blur-[120px]" />

        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-red-400/10 blur-[120px]" />

        {/* Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent_35%)]" />

      </div>

      {/* Partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full animate-pulse ${particle.color}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow:
                particle.color.includes("blue")
                  ? "0 0 15px rgba(59,130,246,0.8)"
                  : "0 0 15px rgba(239,68,68,0.8)",
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 to-red-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative w-52 h-52 rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <img
                src="/logo.png"
                alt={t.gameLogo}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-red-500/10" />
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-200 via-white to-red-200 bg-clip-text text-transparent">
            {t.gameTitle}
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          {t.heroDescription}
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-40 relative z-20">

          <button className="group relative overflow-hidden px-8 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-white font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]">

            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            <span className="relative z-10">
              {t.discoverMore}
            </span>
          </button>

          <a
            href={t.teaserUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-8 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-white font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:border-red-400 hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]"
          >

            <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-400/20 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            <span className="relative z-10">
              {t.watchTeaser}
            </span>
          </a>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-[0.3em] uppercase">
            {t.scroll}
          </span>

          <div className="relative w-px h-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-red-500 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}