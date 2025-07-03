"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Star, MapPin, Users, ChevronDown, ChevronUp, Clock, Camera } from "lucide-react"
import Link from "next/link"

export function Packages() {
  const [expandedDates, setExpandedDates] = useState<{ [key: number]: boolean }>({})
  const [allExcursionsExpanded, setAllExcursionsExpanded] = useState<boolean>(false)

  const toggleDates = (packageId: number) => {
    setExpandedDates(prev => ({
      ...prev,
      [packageId]: !prev[packageId]
    }))
  }

  const toggleExcursionExpanded = () => {
    setAllExcursionsExpanded(!allExcursionsExpanded)
  }
  const packages = [
    {
      id: 1,
      name: "Río de Janeiro Maravilloso",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Descubre la ciudad maravillosa con sus playas icónicas, el Cristo Redentor y la vibrante cultura carioca. Una experiencia única entre montañas y mar.",
      price: "Desde $95.900",
      duration: "5 días / 4 noches",
      dates: ["15 Mar", "22 Mar", "05 Abr", "19 Abr", "22 abr", "03 May", "17 May", "31 May", "14 Jun", "28 Jun", "12 Jul", "26 Jul", "09 Ago", "23 Ago", "06 Sep", "20 Sep"],
      rating: 4.9,
      highlights: ["Hotel 4★", "Desayuno incluido", "City tour", "Traslados"],
      location: "Río de Janeiro, RJ",
      groupSize: "Máximo 25 personas",
    },
    {
      id: 2,
      name: "Salvador Histórico",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Sumérgete en la rica cultura afrobrasileña de Salvador, con su centro histórico colonial, capoeira y la deliciosa cocina bahiana.",
      price: "Desde $78.500",
      duration: "4 días / 3 noches",
      dates: ["08 Mar", "15 Mar", "29 Mar", "12 Abr"],
      rating: 4.8,
      highlights: ["Pelourinho", "Show de capoeira", "Traslados", "Gastronomía típica"],
      location: "Salvador, Bahía",
      groupSize: "Máximo 20 personas",
    },
    {
      id: 3,
      name: "Amazonas Selvático",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Vive una aventura única en el corazón de la selva amazónica, navegando por ríos, observando fauna y conociendo comunidades locales.",
      price: "Desde $115.200",
      duration: "6 días / 5 noches",
      dates: ["12 Mar", "26 Mar", "09 Abr", "23 Abr"],
      rating: 4.7,
      highlights: ["Lodge en la selva", "Navegación río", "Avistamiento fauna", "Cultura indígena"],
      location: "Manaos, Amazonas",
      groupSize: "Máximo 16 personas",
    },
    {
      id: 4,
      name: "Cataratas de Iguazú",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Maravíllate con una de las 7 maravillas naturales del mundo desde el lado brasileño, con vistas panorámicas espectaculares.",
      price: "Desde $88.800",
      duration: "3 días / 2 noches",
      dates: ["10 Mar", "17 Mar", "31 Mar", "14 Abr"],
      rating: 5.0,
      highlights: ["Lado brasileño", "Parque Nacional", "Paseo panorámico", "Trilha das Cataratas"],
      location: "Foz do Iguaçu, Paraná",
      groupSize: "Máximo 25 personas",
    },
    {
      id: 5,
      name: "Fernando de Noronha Paraíso",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Disfruta del paraíso tropical brasileño con aguas cristalinas, playas vírgenes y una biodiversidad marina excepcional.",
      price: "Desde $145.900",
      duration: "5 días / 4 noches",
      dates: ["20 Mar", "03 Abr", "17 Abr", "01 May"],
      rating: 4.9,
      highlights: ["Playas vírgenes", "Snorkel", "Reserva ecológica", "Delfines"],
      location: "Fernando de Noronha, PE",
      groupSize: "Máximo 12 personas",
    },
    {
      id: 6,
      name: "Florianópolis Mágica",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Relájate en la Isla de la Magia con sus 42 playas, lagunas cristalinas y la perfecta combinación de naturaleza y vida nocturna.",
      price: "Desde $68.700",
      duration: "4 días / 3 noches",
      dates: ["18 Mar", "25 Mar", "08 Abr", "22 Abr"],
      rating: 4.6,
      highlights: ["Playas paradisíacas", "Lagoa da Conceição", "Vida nocturna", "Gastronomía costera"],
      location: "Florianópolis, Santa Catarina",
      groupSize: "Máximo 20 personas",
    },
  ]

  const excursions = [
    {
      id: 1,
      name: "Cristo Redentor y Pan de Azúcar",
      image: "/placeholder.svg?height=400&width=600",
      description: "Visita los dos íconos más famosos de Río de Janeiro en un día completo. Sube al Cristo Redentor y disfruta de las vistas panorámicas desde el Pan de Azúcar.",
      price: "Desde $45.900",
      duration: "8 horas",
      rating: 4.9,
      highlights: ["Transporte incluido", "Guía bilingüe", "Teleférico", "Tren del Corcovado"],
      included: [
        "Transporte hotel-sitios-hotel",
        "Entradas a Cristo Redentor",
        "Teleférico Pan de Azúcar",
        "Guía certificado",
        "Seguro de viaje",
      ],
      location: "Río de Janeiro, RJ",
      difficulty: "Fácil",
    },
    {
      id: 2,
      name: "Navegación Bahía de Guanabara",
      image: "/placeholder.svg?height=400&width=600",
      description: "Descubre Río desde el agua con una navegación por la hermosa Bahía de Guanabara, con vistas únicas del Pan de Azúcar y el Cristo Redentor.",
      price: "Desde $35.500",
      duration: "3 horas",
      rating: 4.8,
      highlights: ["Catamarán", "Bebidas incluidas", "Vistas panorámicas", "Puesta de sol"],
      included: [
        "Navegación en catamarán",
        "Bebidas a bordo",
        "Aperitivos",
        "Guía náutico",
        "Chaleco salvavidas",
      ],
      location: "Marina da Glória, RJ",
      difficulty: "Fácil",
    },
    {
      id: 3,
      name: "Trilha Pedra da Gávea",
      image: "/placeholder.svg?height=400&width=600",
      description: "Aventura épica subiendo a la Pedra da Gávea, una de las rocas más altas del mundo junto al mar. Para aventureros experimentados.",
      price: "Desde $78.900",
      duration: "6 horas",
      rating: 4.7,
      highlights: ["Trekking extremo", "Vistas espectaculares", "Rappel opcional", "Certificado"],
      included: [
        "Guía especializado en montaña",
        "Equipo de seguridad",
        "Snack energético",
        "Agua",
        "Certificado de logro",
      ],
      location: "Barra da Tijuca, RJ",
      difficulty: "Difícil",
    },
    {
      id: 4,
      name: "City Tour Histórico Salvador",
      image: "/placeholder.svg?height=400&width=600",
      description: "Recorre el centro histórico de Salvador, Patrimonio de la Humanidad, conociendo el Pelourinho, iglesias coloniales y la rica cultura bahiana.",
      price: "Desde $28.700",
      duration: "4 horas",
      rating: 4.8,
      highlights: ["Pelourinho", "Iglesias históricas", "Mercado Modelo", "Elevador Lacerda"],
      included: [
        "Transporte con A/C",
        "Guía historiador",
        "Entradas a iglesias",
        "Degustación de dulces típicos",
        "Tiempo libre para compras",
      ],
      location: "Salvador, Bahía",
      difficulty: "Fácil",
    },
    {
      id: 5,
      name: "Safari Fotográfico Pantanal",
      image: "/placeholder.svg?height=400&width=600",
      description: "Explora la biodiversidad del Pantanal en un safari fotográfico, observando jaguares, caimanes y una increíble variedad de aves.",
      price: "Desde $125.900",
      duration: "12 horas",
      rating: 5.0,
      highlights: ["Jaguares", "Observación de aves", "Fotógrafo guía", "Almuerzo típico"],
      included: [
        "Transporte 4x4",
        "Guía fotógrafo profesional",
        "Almuerzo pantaneiro",
        "Equipo de observación",
        "Agua y snacks",
      ],
      location: "Pantanal, Mato Grosso",
      difficulty: "Moderado",
    },
    {
      id: 6,
      name: "Mergulho em Fernando de Noronha",
      image: "/placeholder.svg?height=400&width=600",
      description: "Descubre el paraíso submarino de Fernando de Noronha con inmersiones en aguas cristalinas llenas de vida marina tropical.",
      price: "Desde $89.500",
      duration: "6 horas",
      rating: 4.9,
      highlights: ["Buceo certificado", "Vida marina", "Aguas cristalinas", "Equipo completo"],
      included: [
        "Dos inmersiones",
        "Equipo completo de buceo",
        "Instructor certificado",
        "Transporte marítimo",
        "Refrigerio",
      ],
      location: "Fernando de Noronha, PE",
      difficulty: "Moderado",
    },
  ]

  return (
    <section id="paquetes" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-travel-gold rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-travel-blue rounded-full -translate-x-36 translate-y-36"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-travel-blue mb-4">
            Paquetes Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre Brasil con nuestros paquetes cuidadosamente diseñados para cada tipo de viajero
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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
              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="font-montserrat text-2xl font-bold text-travel-blue mb-2 group-hover:text-travel-gold transition-colors duration-300">
                  {pkg.name}
                </h3>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-travel-gold" />
                    {pkg.location}
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
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-travel-gold mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Próximas salidas:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(expandedDates[pkg.id] ? pkg.dates : pkg.dates.slice(0, 4)).map((date, index) => (
                      <span
                        key={index}
                        className="bg-travel-gold text-travel-blue text-xs font-semibold px-3 py-1 rounded-full hover:bg-travel-gold/80 transition-colors duration-300 cursor-pointer"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                  {pkg.dates.length > 4 && (
                    <button
                      onClick={() => toggleDates(pkg.id)}
                      className="mt-2 flex items-center text-xs text-travel-blue hover:text-travel-gold transition-colors duration-300 font-medium"
                    >
                      {expandedDates[pkg.id] ? (
                        <>
                          <ChevronUp className="h-3 w-3 mr-1" />
                          Mostrar menos
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-3 w-3 mr-1" />
                          Mostrar todas las salidas ({pkg.dates.length - 4} más)
                        </>
                      )}
                    </button>
                  )}
                </div>

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

      {/* Excursions Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-0 w-80 h-80 bg-travel-gold rounded-full -translate-x-40 -translate-y-20"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-travel-blue rounded-full translate-x-48 translate-y-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-travel-blue mb-4">
              Excursiones Populares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementa tu viaje con experiencias únicas, desde aventuras extremas hasta tours culturales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excursions.map((excursion) => (
              <div
                key={excursion.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={excursion.image || "/placeholder.svg"}
                    alt={excursion.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-travel-gold fill-current" />
                    <span className="text-sm font-semibold text-travel-blue">{excursion.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-travel-blue/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {excursion.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      excursion.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                      excursion.difficulty === 'Moderado' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {excursion.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="font-montserrat text-xl font-bold text-travel-blue mb-2 group-hover:text-travel-gold transition-colors duration-300">
                    {excursion.name}
                  </h3>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-travel-gold" />
                      {excursion.location}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{excursion.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {excursion.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-travel-blue text-xs px-2 py-1 rounded-full border border-blue-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* More Info Button */}
                  <div className="mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExcursionExpanded()}
                      className="text-travel-blue hover:text-travel-gold text-sm p-0 h-auto font-semibold"
                    >
                      {allExcursionsExpanded ? (
                        <>
                          Ver menos información <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Ver más información <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Expanded Content */}
                  {allExcursionsExpanded && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-montserrat font-bold text-travel-blue mb-3 flex items-center">
                        <Camera className="h-4 w-4 mr-2" />
                        Incluye:
                      </h4>
                      <ul className="space-y-1">
                        {excursion.included.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start">
                            <span className="text-travel-gold mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div>
                      <span className="text-xl font-bold text-travel-blue">{excursion.price}</span>
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

          <div className="text-center mt-12">
            <Link href="/paquetes">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Ver Todos los Paquetes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
