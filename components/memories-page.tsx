"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const memories = [
  {
    id: 1,
    caption: "Ánh mắt đầu tiên",
    description: "Anh vẫn còn nhớ rỏ cảm xúc lần đầu gặp em, anh không dám nói là yêu từ cái nhìn đầu tiên nhưng chắc chắn là ánh mắt đó đã khắc sâu và tâm trí anh",
  },
  {
    id: 2,
    caption: "Nụ cười tỏa nắng",
    description: "Mỗi khi em cười, cả thế giới bừng sáng. Nụ cười ấy là nguồn năng lượng vô tận, giúp anh vượt qua mọi khó khăn.",
  },
  {
    id: 3,
    caption: "Bàn tay dịu dàng",
    description: "Bàn tay em luôn ở đó, luôn nắm chặt tay anh qua mọi khó khăn. Từ khi có em bên cạnh, anh thấy cuộc sống anh tốt lên rất nhiều",
  },
  {
    id: 4,
    caption: "Cẳm ơn mẹ em",
    description: "Mẹ anh sinh anh ra để ngắm nhìn thế giới, còn mẹ em lại mang cả thế giới đến bên anh.",
  },
  {
    id: 5,
    caption: "Tiểu thư nè",
    description: "Mỗi khoảnh khắc bên em anh đều rất trân trọng, và anh sẽ cố gắng để tạo ra thật nhiều kỷ niệm đẹp bên em, để em luôn cười tươi mổi ngày.",
  },
  {
    id: 6,
    caption: "13/10/2025",
    description: "Chúc mừng sinh nhật Embe của anh, chúc cho em tuổi mới luôn vui tươi như 'Tớ không biết buồn', chúc cho đôi ta ngày càng yêu hơn, và chúc cho tình yêu của chúng mình sẽ mãi bền lâu. Anh yêu Embe nhiều ❤️",
  },
  {
    id: 7,
    caption: "2/9",
    description: "Vi vu quốc khánh nè",
  },
  {
    id: 8,
    caption: "🤔",
    description: "đang làm gì vậy ?",
  },
  {
    id: 9,
    caption: "Cua chống",
    description: "Dưỡng thê",
  },
  {
    id: 10,
    caption: "Ngoan xink iu",
    description: "Metro",
  },
  {
    id: 11,
    caption: "Chill Girl",
    description: "Coffe bệt",
  },
]
/*
 { emoji: "✨", text: "Mãi bên nhau nhé" },
          ].map((item, index) => (
*/

export default function MemoriesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-24">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif text-primary text-center mb-12"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Cảm ơn em vì đã đến bên anh <span>❤️</span>
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary flex items-center justify-center">
               <img
                 src={`/em${currentIndex + 1}.jpg`}
                 alt={memories[currentIndex].caption}
                 className="w-full h-full object-cover"
                />
              </div>
              {/* Caption */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 text-balance">
                  {memories[currentIndex].caption}
                </h3>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-pretty">
                  {memories[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button
              onClick={prevSlide}
              size="icon"
              variant="secondary"
              className="pointer-events-auto rounded-full shadow-lg w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              size="icon"
              variant="secondary"
              className="pointer-events-auto rounded-full shadow-lg w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
