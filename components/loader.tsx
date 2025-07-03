"use client"

import { useEffect, useState } from "react"
import { Plane } from "lucide-react"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-travel-blue to-blue-600 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-travel-gold rounded-full flex items-center justify-center animate-pulse">
            <Plane className="h-10 w-10 text-travel-blue animate-bounce" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-travel-gold/30 rounded-full animate-ping"></div>
        </div>
        <h2 className="font-playfair text-2xl font-bold text-white mb-2">Travel Mar del Plata</h2>
        <p className="text-blue-100">Preparando tu próxima aventura...</p>
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-travel-gold rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-travel-gold rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-travel-gold rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
