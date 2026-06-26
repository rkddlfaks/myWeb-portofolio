"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimateInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function AnimateIn({ children, delay = 0, direction = "up", className = "" }: AnimateInProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 1.0,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Premium Apple-like easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
