"use client"

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-travel-blue" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-travel-blue mb-4">
            ¡Hablemos de tu próximo viaje!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para hacer realidad tus sueños de viaje. Contáctanos y comencemos a planificar juntos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="font-montserrat text-2xl font-bold text-travel-blue mb-6">Información de contacto</h3>
              <div className="flex flex-col space-y-10 h-full">
                <div className="flex items-start space-x-4">
                  <div className="bg-travel-gold/20 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-travel-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-travel-blue text-lg">Dirección</p>
                    <p className="text-gray-600">Falucho 98 - Mar del Plata</p>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-travel-gold/20 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-travel-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-travel-blue text-lg">Teléfono</p>
                    <p className="text-gray-600">+54 223 456-7890</p>
                    <p className="text-gray-600">WhatsApp: +54 9 223 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-travel-gold/20 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-travel-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-travel-blue text-lg">Email</p>
                    <p className="text-gray-600">info@travelmardelplata.com</p>
                    <p className="text-gray-600">ventas@travelmardelplata.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Hours */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="font-montserrat text-2xl font-bold text-travel-blue mb-6">Síguenos en redes</h3>
                <div className="flex space-x-4 mb-6">
                  <a
                    href="#"
                    className="bg-travel-gold hover:bg-travel-gold/80 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                  >
                    <Facebook className="h-6 w-6 text-travel-blue" />
                  </a>
                  <a
                    href="#"
                    className="bg-travel-gold hover:bg-travel-gold/80 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                  >
                    <Instagram className="h-6 w-6 text-travel-blue" />
                  </a>
                              </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-montserrat font-bold text-travel-blue mb-3">Horarios de atención</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-semibold">Lunes a Viernes:</span> 9:00 - 18:00
                    </p>
                    <p>
                      <span className="font-semibold">Sábados:</span> 9:00 - 13:00
                    </p>
                    <p>
                      <span className="font-semibold">Domingos:</span> Cerrado
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            
                  <div className="text-center">
                     <Image
                      src="/mapa_falucho.webp"
                      alt="Mapa de ubicación"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                      priority
                    />
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
