"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Heart className="w-24 h-24 md:w-32 md:h-32 fill-primary text-primary" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Heart className="w-24 h-24 md:w-32 md:h-32 fill-primary/30 text-primary/30" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 text-balance"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Dành tặng em yêu của anh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto text-pretty">
            Mỗi khoảnh khắc bên em đều là một kỷ niệm đẹp đẽ mà anh muốn lưu giữ mãi mãi. Trang web này là món quà nhỏ
            anh dành tặng em, người đã làm cuộc sống của anh thêm ý nghĩa và hạnh phúc.
          </p>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex items-center justify-center gap-2 text-accent"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Khám phá những kỷ niệm của chúng mình nhé</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { emoji: "💕", text: "Yêu em nhiều lắm" },
            { emoji: "🌸", text: "Em là hoa của anh" },
            { emoji: "✨", text: "Mãi bên nhau nhé" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <p className="text-sm font-medium text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
