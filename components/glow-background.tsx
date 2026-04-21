"use client"

import { useEffect, useState } from "react"

export function GlowBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Main glow - follows scroll with offset */}
      <div
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% ${50 + scrollY * 0.1}%, rgba(144, 213, 255, 0.06) 0%, transparent 60%)`,
        }}
      />
      {/* Secondary glow - subtle top accent */}
      <div
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% ${20 - scrollY * 0.05}%, rgba(144, 213, 255, 0.04) 0%, transparent 50%)`,
        }}
      />
      {/* Bottom accent glow */}
      <div
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(ellipse 100% 30% at 50% ${100 + scrollY * 0.03}%, rgba(144, 213, 255, 0.03) 0%, transparent 40%)`,
        }}
      />
    </div>
  )
}
