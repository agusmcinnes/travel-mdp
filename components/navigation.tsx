"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useNavbar } from "@/contexts/navbar-context"

export function Navigation() {
  const { isOpen, setIsOpen } = useNavbar()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/#quienes-somos", label: "Quiénes Somos" },
    { href: "/paquetes", label: "Paquetes" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-12 md:px-0 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-0" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Travel Group Mar del Plata"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300 rounded-full shadow-travel-gold shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={` hover:text-blue-300 transition-colors duration-300 font-medium relative group ${
                  isScrolled ? "text-gray-900" : "text-gray-100"}`}>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-travel-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button 
              onClick={() => window.open('https://wa.link/diii0m', '_blank')}
              className="bg-gradient-to-r from-yellow-400 via-travel-gold to-amber-500 hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 text-travel-blue font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Consultar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu de navegación"
              onClick={() => setIsOpen(!isOpen)}
              className={`text-travel-blue hover:bg-travel-gold/20 p-2 ${isScrolled ? "text-travel-blue" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <div className="md:hidden animate-in slide-in-from-top-2 duration-300 relative z-50">
              <div className="mt-4 mb-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full">
                <div className="px-6 py-4 space-y-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-4 text-gray-700 hover:text-travel-blue hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-all duration-300 rounded-xl font-medium text-lg relative group"
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.label}
                      <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 via-travel-gold to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>
                  ))}
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <Button 
                    onClick={() => window.open('https://wa.link/diii0m', '_blank')}
                    className="w-full bg-gradient-to-r from-yellow-400 via-travel-gold to-amber-500 hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 text-travel-blue font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Consultar Ahora
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
