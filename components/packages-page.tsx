"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Star, ChevronDown, ChevronUp, MapPin, Users } from "lucide-react"

export function PackagesPage() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null)

  const packages = [
    {
      id: 1,
      name: "Río de Janeiro Maravilloso",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Descubre la cidade maravilhosa con sus icónicas playas de Copacabana e Ipanema, el Cristo Redentor y el carnaval más famoso del mundo. Una experiencia única en la ciudad que nunca duerme.",
      price: "Desde $95.900",
      duration: "5 días / 4 noches",
      dates: ["15 Mar", "22 Mar", "05 Abr", "19 Abr"],
      allDates: [
        "15 Mar",
        "22 Mar",
        "29 Mar",
        "05 Abr",
        "12 Abr",
        "19 Abr",
        "26 Abr",
        "03 May",
        "10 May",
        "17 May",
        "24 May",
        "31 May",
        "07 Jun",
        "14 Jun",
      ],
      rating: 4.9,
      highlights: ["Hotel 4★", "Desayuno incluido", "Cristo Redentor", "Pan de Azúcar"],
      included: [
        "Alojamiento en hotel 4 estrellas",
        "Desayunos buffet",
        "Excursión Cristo Redentor",
        "Teleférico Pan de Azúcar",
        "Traslados aeropuerto",
      ],
      location: "Río de Janeiro, Brasil",
      groupSize: "Máximo 25 personas",
    },
    {
      id: 2,
      name: "Salvador Bahía Cultural",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Sumérgete en la cultura afrobrasileña en el corazón de Bahía, con su música contagiosa, arquitectura colonial y playas paradisíacas. El alma de Brasil te espera.",
      price: "Desde $78.500",
      duration: "4 días / 3 noches",
      dates: ["08 Mar", "15 Mar", "29 Mar", "12 Abr"],
      allDates: [
        "08 Mar",
        "15 Mar",
        "22 Mar",
        "29 Mar",
        "05 Abr",
        "12 Abr",
        "19 Abr",
        "26 Abr",
        "03 May",
        "10 May",
        "17 May",
        "24 May",
        "31 May",
        "07 Jun",
      ],
      rating: 4.8,
      highlights: ["Pelourinho", "Capoeira", "Gastronomía bahiana", "Playas"],
      included: [
        "Hotel boutique en el centro histórico",
        "City tour Pelourinho",
        "Show de capoeira",
        "Degustación gastronómica",
        "Traslados incluidos",
      ],
      location: "Salvador, Bahía",
      groupSize: "Máximo 20 personas",
    },
    {
      id: 3,
      name: "Florianópolis Mágica",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Disfruta de la isla mágica con sus 42 playas paradisíacas, dunas, lagunas y la vibrante vida nocturna. El destino perfecto para relajarse y divertirse.",
      price: "Desde $72.200",
      duration: "6 días / 5 noches",
      dates: ["12 Mar", "26 Mar", "09 Abr", "23 Abr"],
      allDates: [
        "12 Mar",
        "19 Mar",
        "26 Mar",
        "02 Abr",
        "09 Abr",
        "16 Abr",
        "23 Abr",
        "30 Abr",
        "07 May",
        "14 May",
        "21 May",
        "28 May",
        "04 Jun",
        "11 Jun",
      ],
      rating: 4.7,
      highlights: ["42 playas", "Dunas de Joaquina", "Vida nocturna", "Gastronomía"],
      included: ["Hotel frente al mar", "Tour por las playas", "Excursión Lagoa da Conceição", "Sandboard en dunas", "Cena de mariscos"],
      location: "Florianópolis, Santa Catarina",
      groupSize: "Máximo 30 personas",
    },
    {
      id: 4,
      name: "Foz do Iguaçu Espectacular",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Maravíllate con las Cataratas del Iguazú desde el lado brasileño, el Parque das Aves y la represa de Itaipú. Una experiencia natural inolvidable.",
      price: "Desde $89.800",
      duration: "3 días / 2 noches",
      dates: ["10 Mar", "17 Mar", "31 Mar", "14 Abr"],
      allDates: [
        "10 Mar",
        "17 Mar",
        "24 Mar",
        "31 Mar",
        "07 Abr",
        "14 Abr",
        "21 Abr",
        "28 Abr",
        "05 May",
        "12 May",
        "19 May",
        "26 May",
        "02 Jun",
        "09 Jun",
      ],
      rating: 5.0,
      highlights: ["Cataratas brasileñas", "Parque das Aves", "Itaipú", "Marco das Três Fronteiras"],
      included: ["Hotel 4 estrellas", "Entradas a parques", "Tour Itaipú", "Parque das Aves", "Guía especializado"],
      location: "Foz do Iguaçu, Paraná",
      groupSize: "Máximo 25 personas",
    },
    {
      id: 5,
      name: "Búzios Sofisticado",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Descubre el encanto de la Península de Búzios con sus playas cristalinas, ambiente cosmopolita y la elegancia que conquistó a Brigitte Bardot.",
      price: "Desde $118.900",
      duration: "5 días / 4 noches",
      dates: ["20 Mar", "03 Abr", "17 Abr", "01 May"],
      allDates: [
        "20 Mar",
        "27 Mar",
        "03 Abr",
        "10 Abr",
        "17 Abr",
        "24 Abr",
        "01 May",
        "08 May",
        "15 May",
        "22 May",
        "29 May",
        "05 Jun",
        "12 Jun",
        "19 Jun",
      ],
      rating: 4.9,
      highlights: ["Rua das Pedras", "Playas paradisíacas", "Vida nocturna", "Gastronomía"],
      included: [
        "Pousada boutique",
        "Tour por las playas",
        "Paseo en escuna",
        "Cena en Rua das Pedras",
        "Excursión Arraial do Cabo",
      ],
      location: "Búzios, Río de Janeiro",
      groupSize: "Máximo 22 personas",
    },
    {
      id: 6,
      name: "Recife y Olinda Colonial",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Explora el patrimonio histórico de Olinda y las playas urbanas de Recife, con su rica cultura pernambucana, frevo y artesanías únicas.",
      price: "Desde $65.700",
      duration: "4 días / 3 noches",
      dates: ["18 Mar", "25 Mar", "08 Abr", "22 Abr"],
      allDates: [
        "18 Mar",
        "25 Mar",
        "01 Abr",
        "08 Abr",
        "15 Abr",
        "22 Abr",
        "29 Abr",
        "06 May",
        "13 May",
        "20 May",
        "27 May",
        "03 Jun",
        "10 Jun",
        "17 Jun",
      ],
      rating: 4.6,
      highlights: ["Centro histórico Olinda", "Playas de Boa Viagem", "Frevo", "Artesanías"],
      included: [
        "Hotel en Boa Viagem",
        "City tour Recife",
        "Excursión Olinda colonial",
        "Show de frevo",
        "Compras en Mercado São José",
      ],
      location: "Recife, Pernambuco",
      groupSize: "Máximo 18 personas",
    },
  ]

  const toggleExpanded = (packageId: number) => {
    setExpandedPackage(expandedPackage === packageId ? null : packageId)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-36 bg-travel-blue overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros Paquetes
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Descubre Brasil con experiencias únicas diseñadas especialmente para ti
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-travel-gold fill-current" />
                    <span className="text-sm font-semibold text-travel-blue">{pkg.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-travel-blue/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold">{pkg.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-montserrat text-2xl font-bold text-travel-blue mb-3 group-hover:text-travel-gold transition-colors duration-300">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-travel-gold" />
                      {pkg.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-travel-gold" />
                      {pkg.groupSize}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-travel-blue text-xs px-2 py-1 rounded-full border border-blue-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Dates */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 text-travel-gold mr-2" />
                      <span className="text-sm font-semibold text-gray-700">Próximas salidas:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(expandedPackage === pkg.id ? pkg.allDates : pkg.dates).map((date, index) => (
                        <span
                          key={index}
                          className="bg-travel-gold text-travel-blue text-xs font-semibold px-3 py-1 rounded-full hover:bg-travel-gold/80 transition-colors duration-300 cursor-pointer"
                        >
                          {date}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(pkg.id)}
                      className="text-travel-blue hover:text-travel-gold text-sm p-0 h-auto font-semibold"
                    >
                      {expandedPackage === pkg.id ? (
                        <>
                          Ver menos salidas <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Ver todas las salidas <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Expanded Content */}
                  {expandedPackage === pkg.id && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-montserrat font-bold text-travel-blue mb-3">Incluye:</h4>
                      <ul className="space-y-1">
                        {pkg.included.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start">
                            <span className="text-travel-gold mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-travel-blue">{pkg.price}</span>
                      <span className="text-sm text-gray-500 block">por persona</span>
                    </div>
                    <Button className="bg-travel-gold hover:bg-travel-gold/90 text-travel-blue font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md">
                      Consultar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
