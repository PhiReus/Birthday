"use client"

import { useState, useRef, useEffect } from "react"

import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import HomePage from "@/components/home-page"
import MemoriesPage from "@/components/memories-page"
import MessagePage from "@/components/message-page"

// Load FloatingHearts only on the client to avoid server-side "window" usage
const FloatingHearts = dynamic(() => import("@/components/floating-hearts"), { ssr: false })

export default function Page() {
  const [currentPage, setCurrentPage] = useState<"home" | "memories" | "message">("home")


  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 -z-10" />

      {/* Floating hearts animation */}
      <FloatingHearts />

      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Page content */}
      <div className="relative z-10">
        {currentPage === "home" && <HomePage />}
        {currentPage === "memories" && <MemoriesPage />}
        {currentPage === "message" && <MessagePage />}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-muted-foreground bg-background/50 backdrop-blur-sm z-20">
        <p className="font-serif">
          Made with <span className="text-primary animate-pulse">❤️</span> by <span className="font-semibold">Anh</span>{" "}
          dành tặng <span className="font-semibold">Em</span>
        </p>

      </footer>
    </main>
  )
}
