"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/pileta_palace.webp",
      title: "Descubrí el Paraíso Travel Group Mar del Plata",
      subtitle: "¡Viví la increíble experiencia!",
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated waves */}
      <div className="absolute inset-0">
        <Image
          src="/pileta_palace.webp"
          alt="Destinos increíbles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <MapPin className="h-12 w-12 text-transparent bg-gradient-to-r from-yellow-400 via-travel-gold to-amber-500 bg-clip-text mx-auto mb-4 animate-bounce" />
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.25rem, 7vw, 2.8rem)' }}>
            {slides[currentSlide].title}
            <span className="block text-travel-gold text-3xl md:text-5xl lg:text-6xl mt-2 font-bold" style={{ fontSize: 'clamp(1.375rem, 6vw, 1.75rem)' }}>
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Viaja y disfruta de nuestros paquetes completos 

          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="#paquetes">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-travel-gold to-amber-500 hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 text-travel-blue font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Paquetes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#quienes-somos">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-travel-blue font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Conocer Más
            </Button>
          </Link>
        </div>


      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-travel-gold/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-travel-gold/30 rounded-full animate-float"></div>
    </section>
  )
}
