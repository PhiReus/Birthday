"use client"

import { useState, useEffect, useRef } from "react"

import { motion } from "framer-motion"
import { Volume2, VolumeX, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const loveMessage = `Em yêu của anh,

Có những điều anh muốn nói với em, nhưng đôi khi lời nói không đủ để diễn tả hết tình cảm của anh.

Dù anh có thể không hoàn hảo, nhưng tình yêu anh dành cho em là chân thành và vô điều kiện.

Từ lần đầu gặp gỡ anh chưa từng nghĩ sẽ có ngày mình bên nhau như bây giờ, anh vẫn không thể diển ta được cảm xúc đó.

Từ ngày gặp em, cuộc sống của anh đã thay đổi hoàn toàn. Em là ánh sáng soi đường cho anh, là nguồn động lực để anh cố gắng mỗi ngày, là lý do khiến anh tin vào tình yêu đích thực.

Anh yêu nụ cười của em, yêu cách em quan tâm đến anh, yêu tất cả những gì làm nên con người em. Mỗi khoảnh khắc bên em đều là món quà quý giá mà anh trân trọng.

Anh biết đôi lúc anh vô tâm, làm em buồn , làm em phiền lòng không phải vì anh bớt yêu em, chỉ là cách anh thể hiện tình yêu có thể đôi khi làm em khó chịu, không vì vậy mà anh bớt yêu em đâu.

Nhiều lần em khóc vì anh, thấy em tủi thân anh thương lắm nên anh luôn lấy đó để làm động lực, để cố gắng sau này có thể chăm lo cho em.

Đừng bao giờ có suy nghĩ là anh sẽ bớt yêu em, hay là hết yêu em nhé vì cuộc sống này chúng ta đề bận rộn mà. Mổi ngày yêu thêm một chút để dành dành tỉnh cảm đong đầy không cần vội vã chúng mình cứ từ từ yêu và sẽ yêu mãi như vậy em nhé.

Anh hứa sẽ luôn lắng nghe, thấu hiểu và chia sẻ cùng em mọi niềm vui, nỗi buồn trong cuộc sống.

Anh hứa sẽ luôn ở bên em, yêu thương em, và làm mọi thứ để em luôn hạnh phúc. Vì em xứng đáng có được tất cả những điều tốt đẹp nhất trên đời.

Hôm nay là ngày đặc biệt mà, ngày mà thế giới của anh được sinh ra đời, chúc cho em luôn cười tươi, luôn hạnh phúc (tất nhiên người làm em cười tươi và hạnh phúc nhất chính là anh rồi đúng không nào hehe).

Chúc cho tình yêu của chúng mình sẽ mãi bền lâu, vượt qua mọi thử thách và khó khăn trong cuộc sống.

Anh yêu em rất nhiều, hơn cả những gì anh có thể diễn tả bằng lời.

- Yêu Em ❤️`

export default function MessagePage() {
  const [displayedText, setDisplayedText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < loveMessage.length) {
        setDisplayedText(loveMessage.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-24">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 border border-border relative overflow-hidden"
        >
          {/* Decorative hearts */}
          <div className="absolute top-4 right-4 opacity-10">
            <Heart className="w-32 h-32 fill-primary text-primary" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-10">
            <Heart className="w-24 h-24 fill-accent text-accent" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-serif text-primary text-center mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lời nhắn dành cho em
            </motion.h2>

            <div className="prose prose-lg max-w-none">
              <p className="whitespace-pre-wrap text-foreground/90 leading-relaxed text-pretty">
                {displayedText}
                {!isComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-block w-0.5 h-5 bg-primary ml-1"
                  />
                )}
              </p>
            </div>

            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex justify-center"
              >
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                    >
                      <Heart className="w-6 h-6 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Music control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Button onClick={toggleMusic} size="lg" variant="secondary" className="rounded-full shadow-lg gap-2">
           {isPlaying ? (
              <>
                <Volume2 className="w-5 h-5" />
                <span>Tắt nhạc</span>
              </>
            ) : (
              <>
                <VolumeX className="w-5 h-5" />
                <span>Bật nhạc nền</span>
              </>
            )}
          </Button>
        </motion.div>

        {/* Audio element - using a placeholder URL */}
        <audio
         ref={audioRef}
          loop 
          src="/happy-birthday.mp3"
          onError={() => console.log("[v0] Audio file not found - add your own music file")}
        />
      </div>
    </div>
  )
}
