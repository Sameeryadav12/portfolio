import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
      life: number
      maxLife: number
      pulse: number
      connectionCount: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.random() * 80 + 180, // Blue to cyan range
      life: 0,
      maxLife: Math.random() * 300 + 150,
      pulse: Math.random() * Math.PI * 2,
      connectionCount: 0
    })

    // Initialize particles
    for (let i = 0; i < 120; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++
        particle.pulse += 0.02

        // Wrap around edges with smooth transition
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Enhanced life cycle with pulsing
        const lifeRatio = particle.life / particle.maxLife
        const pulseEffect = Math.sin(particle.pulse) * 0.3 + 0.7
        const alpha = Math.sin(lifeRatio * Math.PI) * particle.opacity * pulseEffect

        // Create advanced gradient with multiple color stops
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${alpha})`)
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 60%, 60%, ${alpha * 0.6})`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 40%, 50%, 0)`)

        // Draw particle with enhanced glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Add outer glow effect
        const outerGradient = ctx.createRadialGradient(
          particle.x, particle.y, particle.size,
          particle.x, particle.y, particle.size * 2
        )
        outerGradient.addColorStop(0, `hsla(${particle.hue}, 50%, 60%, ${alpha * 0.3})`)
        outerGradient.addColorStop(1, `hsla(${particle.hue}, 30%, 50%, 0)`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = outerGradient
        ctx.fill()

        // Reset particle when it dies
        if (particle.life > particle.maxLife) {
          Object.assign(particle, createParticle())
        }

        // Enhanced connection algorithm with dynamic distance
        particle.connectionCount = 0
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150 + Math.sin(particle.pulse) * 30

          if (distance < maxDistance) {
            particle.connectionCount++
            otherParticle.connectionCount++
            
            const connectionOpacity = (1 - distance / maxDistance) * alpha * 0.4
            const connectionHue = (particle.hue + otherParticle.hue) / 2
            
            // Create gradient line
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            )
            lineGradient.addColorStop(0, `hsla(${connectionHue}, 60%, 70%, ${connectionOpacity})`)
            lineGradient.addColorStop(0.5, `hsla(${connectionHue}, 50%, 60%, ${connectionOpacity * 0.8})`)
            lineGradient.addColorStop(1, `hsla(${connectionHue}, 40%, 50%, ${connectionOpacity * 0.6})`)

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 0.8 + Math.sin(particle.pulse) * 0.4
            ctx.stroke()
          }
        })

        // Add connection intensity indicator
        if (particle.connectionCount > 3) {
          const intensityGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 4
          )
          intensityGradient.addColorStop(0, `hsla(${particle.hue}, 70%, 80%, ${alpha * 0.2})`)
          intensityGradient.addColorStop(1, `hsla(${particle.hue}, 50%, 60%, 0)`)

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2)
          ctx.fillStyle = intensityGradient
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    />
  )
}