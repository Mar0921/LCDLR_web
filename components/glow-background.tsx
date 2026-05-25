"use client"

import { useEffect, useState } from "react"

export function GlowBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [stars, setStars] = useState<Array<{key: number; style: React.CSSProperties}>>([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate stars only on client to avoid hydration mismatch
  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, (_, i) => {
      // Use a seeded random approach that's deterministic
      const seed = i * 123.456
      const posX = Math.sin(seed) * 100
      const posY = Math.sin(seed * 1.7) * 100
      const size = Math.sin(seed * 2.3) * 0.5 + 0.5 // Between 0.5 and 1.0
      const duration = Math.sin(seed * 3.1) * 1 + 1.5 // Between 1.5 and 2.5
      const delay = Math.sin(seed * 4.7) * 2.5 // Between -2.5 and 2.5
      
      return {
        key: i,
        style: {
          left: `${posX}%`,
          top: `${posY}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "white",
          borderRadius: "50%",
          opacity: "0",
          animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
        }
      }
    })
    
    setStars(generatedStars)
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
      {/* Twinkling stars */}
      <div className="absolute w-full h-full">
        <div className="twinkling-stars" aria-hidden="true">
          {stars.map(star => (
            <div
              key={star.key}
              className="star"
              style={star.style}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
