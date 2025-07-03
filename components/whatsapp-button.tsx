"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492234567890" // Replace with actual WhatsApp number
    const message = "¡Hola! Me interesa conocer más sobre sus paquetes de viaje."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-[60] bg-green-500 hover:bg-green-600 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  )
}
