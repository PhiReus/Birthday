"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 16 + Math.random() * 16,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: "-50px",
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(heart.id) * 100],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Heart className="fill-primary text-primary" style={{ width: heart.size, height: heart.size }} />
        </motion.div>
      ))}
    </div>
  )
}
