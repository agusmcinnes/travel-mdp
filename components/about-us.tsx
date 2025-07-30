"use client"

import Image from "next/image"
import { Heart, Globe, Star } from "lucide-react"
import { Hotels } from "./hotels"

export function AboutUs() {
  return (
    <>
    <section id="quienes-somos" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z" fill="currentColor" className="text-travel-blue" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-travel-blue mb-6">
                Nuestra Historia
              </h2>
              <div className="flex flex-col gap-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Desde 2015, Travel Group Mar del Plata transforma sueños en experiencias inolvidables. Nacimos con la pasión de mostrar el mundo desde una mirada auténtica: la de quienes lo viven intensamente.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                      Contamos con un equipo altamente capacitado, conformado por asesores de viajes, ejecutivos de ventas y guías profesionales que te acompañan en cada paso, brindando una atención personalizada y de excelencia.

                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                      Trabajamos con hoteles de categoría superior, cuidadosamente seleccionados por nuestro equipo.
                      Elegimos únicamente aquellos que cumplen con los más altos estándares de calidad, ubicación y servicio, porque sabemos que el confort es parte fundamental de una gran experiencia.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                      Cada destino ha sido explorado, evaluado y validado por nosotros.
                      No vendemos viajes. Creamos momentos que se convierten en recuerdos para toda la vida.
                  </p>
              </div>

            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Heart className="h-8 w-8 text-travel-gold mx-auto mb-2" />
                <div className="font-bold text-2xl text-travel-blue">1500+</div>
                <div className="text-sm text-gray-600">Familias Felices</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Globe className="h-8 w-8 text-travel-gold mx-auto mb-2" />
                <div className="font-bold text-2xl text-travel-blue">50+</div>
                <div className="text-sm text-gray-600">Destinos Únicos</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Star className="h-8 w-8 text-travel-gold mx-auto mb-2" />
                <div className="font-bold text-2xl text-travel-blue">10</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_grupal.webp"
                    alt="Equipo Travel Mar del Plata"
                    width={200}
                    height={240}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_comida.webp"
                    alt="Oficina Travel Mar del Plata"
                    width={200}
                    height={160}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_pileta.webp"
                    alt="Viajeros felices"
                    width={200}
                    height={160}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_grupal-2.webp"
                    alt="Destinos increíbles"
                    width={200}
                    height={240}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-travel-gold/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-travel-blue/20 rounded-full animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
