"use client"

import { motion } from "framer-motion"
import { Heart, ImageIcon, MessageCircle } from "lucide-react"

interface NavigationProps {
  currentPage: "home" | "memories" | "message"
  onPageChange: (page: "home" | "memories" | "message") => void
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: "home" as const, label: "Trang chủ", icon: Heart },
    { id: "memories" as const, label: "Sinh nhật", icon: ImageIcon },
    { id: "message" as const, label: "Lời nhắn", icon: MessageCircle },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
