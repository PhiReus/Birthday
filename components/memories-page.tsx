"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const memories = [
  {
    id: 1,
    caption: "Lần đầu tiên chúng mình gặp nhau",
    description: "Ngày đó em cười thật tươi, và anh đã biết em là người đặc biệt",
  },
  {
    id: 2,
    caption: "Chuyến đi đầu tiên của chúng mình",
    description: "Biển xanh, cát trắng, và em bên cạnh anh - hoàn hảo!",
  },
  {
    id: 3,
    caption: "Sinh nhật em năm ngoái",
    description: "Anh sẽ không bao giờ quên nụ cười hạnh phúc của em",
  },
  {
    id: 4,
    caption: "Những buổi tối bên nhau",
    description: "Dù chỉ là những điều giản đơn, nhưng với anh đó là tất cả",
  },
  {
    id: 5,
    caption: "Kỷ niệm ngọt ngào",
    description: "Mỗi khoảnh khắc bên em đều đáng trân trọng",
  },
]

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
          Những kỷ niệm của chúng mình
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
                  src={`/romantic-couple-memory-.jpg?height=600&width=800&query=romantic couple memory ${memories[currentIndex].caption}`}
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
