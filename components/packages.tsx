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

  const handlePackageAction = (pkg: any) => {
    if (pkg.type === "premium" && pkg.pdfUrl) {
      // Abrir PDF en nueva pestaña
      window.open(pkg.pdfUrl, '_blank')
    } else {
      // Para paquetes básicos, podrías agregar lógica de contacto aquí
      console.log('Consultar más información para:', pkg.name)
    }
  }
  const packages = [
    {
      id: 1,
      name: "Viaje grupal a Dubai y Abu Dhabi FIN DE AÑO",
      image: "/dubai.webp",
      description:
        "Vive una experiencia única de fin de año en los Emiratos Árabes Unidos. Descubre el lujo y la modernidad de Dubai junto con la cultura tradicional de Abu Dhabi.",
      price: "Consultar precios",
      duration: "14 días / 12 noches",
      dates: ["27 Dic 2025"],
      rating: 4.9,
      highlights: ["Viaje grupal", "Fin de año", "Dubai y Abu Dhabi", "Experiencia completa"],
      location: "Emiratos Árabes Unidos",
      groupSize: "Grupo organizado",
      type: "premium",
      pdfUrl: "/pdf/dubai.pdf",
    },
    {
      id: 2,
      name: "Salvador de Bahía con Palladium Imbassaí",
      image: "/salvador.webp",
      description:
        "Disfruta de la cultura bahiana y relájate en las hermosas playas de Imbassaí con el confort del hotel Palladium. Una experiencia única en Brasil.",
      price: "Consultar precios",
      duration: "10 días / 8 noches",
      dates: ["20 Sep 2025"],
      rating: 4.8,
      highlights: ["Hotel Palladium", "Playas de Imbassaí", "Cultura bahiana", "All Inclusive"],
      location: "Salvador de Bahía, Brasil",
      groupSize: "Grupo organizado",
      type: "premium",
      pdfUrl: "/pdf/salvador_bahia.pdf",
    },
    {
      id: 3,
      name: "Viaje grupal a Punta Cana + Bayahibe",
      image: "/punta_cana.webp",
      description:
        "Combina lo mejor de República Dominicana: las playas paradisíacas de Punta Cana y la belleza natural de Bayahibe en un solo viaje inolvidable.",
      price: "Consultar precios",
      duration: "11 días / 10 noches",
      dates: ["05 Ene 2026", "19 Ene 2026", "11 Mar 2026", "11 May 2026"],
      rating: 4.9,
      highlights: ["5 noches Punta Cana", "5 noches Bayahibe", "Playas paradisíacas", "Viaje grupal"],
      location: "República Dominicana",
      groupSize: "Grupo organizado",
      type: "premium",
      pdfUrl: "/pdf/rd-bayahibe.pdf",
    },
    {
      id: 4,
      name: "Viaje grupal a Río de Janeiro y Búzios",
      image: "/rio.webp",
      description:
        "Descubre la ciudad maravillosa de Río de Janeiro y relájate en las sofisticadas playas de Búzios. La combinación perfecta entre ciudad y playa.",
      price: "Consultar precios",
      duration: "11 días / 10 noches",
      dates: ["01 Oct 2025", "25 Nov 2025"],
      rating: 4.8,
      highlights: ["Cristo Redentor", "Playas de Búzios", "Pan de Azúcar", "Viaje grupal"],
      location: "Río de Janeiro y Búzios, Brasil",
      groupSize: "Grupo organizado",
      type: "premium",
      pdfUrl: "/pdf/rio_buzios.pdf",
    },
    {
      id: 5,
      name: "Cancún con Playa del Carmen y Panamá de Regalo",
      image: "/cancun.webp",
      description:
        "Disfruta del Caribe mexicano en Cancún y Playa del Carmen, más una increíble extensión a Panamá incluida en tu paquete.",
      price: "Consultar precios",
      duration: "12 días / 11 noches",
      dates: ["10 Mar 2026", "22 Abr 2026", "03 Jun 2026"],
      rating: 4.7,
      highlights: ["Cancún", "Playa del Carmen", "Panamá incluido", "Caribe mexicano"],
      location: "México y Panamá",
      groupSize: "Grupo organizado",
      type: "premium",
      pdfUrl: "/pdf/cancun.pdf",
    },
    {
      id: 6,
      name: "Cuba Sol y Playas con All Inclusive",
      image: "/cuba.webp",
      description:
        "Vive la auténtica experiencia cubana con sol, playas paradisíacas y la hospitalidad caribeña en un resort todo incluido.",
      price: "Consultar precios",
      duration: "11 días / 10 noches",
      dates: ["18 Oct 2025"],
      rating: 4.6,
      highlights: ["All Inclusive", "Playas caribeñas", "Cultura cubana", "Sol y relax"],
      location: "Cuba",
      groupSize: "Grupo organizado",
      type: "premium",
      pdfUrl: "/pdf/cuba.pdf",
    },
    {
      id: 7,
      name: "Viaje grupal a Perú con Machu Picchu",
      image: "/peru.webp",
      description:
        "Descubre las maravillas del Imperio Inca y visita la ciudadela sagrada de Machu Picchu en una experiencia cultural única e inolvidable.",
      price: "Consultar precios",
      duration: "10 días / 8 noches",
      dates: ["08 Oct 2025", "24 Oct 2025", "29 Nov 2025", "13 Ene 2026", "10 Feb 2026", "09 Mar 2026", "28 Mar 2026", "13 May 2026"],
      rating: 5.0,
      highlights: ["Machu Picchu", "Valle Sagrado", "Cusco", "Patrimonio UNESCO"],
      location: "Perú",
      groupSize: "Grupo organizado",
      type: "premium",
      pdfUrl: "/pdf/peru.pdf",
    },
    {
      id: 8,
      name: "Brasil | Florianópolis - Camboriu - Bombinhas",
      image: "/floripa.webp",
      description:
        "Descubre las mejores playas de Brasil en un viaje completo por Florianópolis, Camboriu y Bombinhas. Incluye hotel Palace, bus premium, piscina y excursiones.",
      price: "Desde $790 USD",
      duration: "10 días / 7 noches",
      dates: ["Sep 2025", "Oct 2025", "Nov 2025", "03 Ene 2026", "10 Ene 2026", "17 Ene 2026", "24 Ene 2026", "26 Feb 2026", "05 Mar 2026", "12 Mar 2026", "19 Mar 2026", "26 Mar 2026"],
      rating: 4.8,
      highlights: ["Hotel Palace", "Bus Mix Premium", "Piscina", "Desayuno y cena buffet", "Excursiones incluidas"],
      location: "Santa Catarina, Brasil",
      groupSize: "Grupo organizado",
      type: "basic",
      priceDetails: {
        "Sep-Nov 2025": "Desde $790 USD",
        "Enero 2026": "Desde $990 USD",
        "Febrero 2026": "Desde $990 USD", 
        "Marzo 2026": "Desde $890 USD"
      }
    },
    {
      id: 9,
      name: "Cataratas del Iguazú",
      image: "/cataratas.webp",
      description:
        "Vive la experiencia de las majestuosas Cataratas del Iguazú con bus premium, visita a los Saltos del Mocona, media pensión y compras en Ciudad del Este.",
      price: "Desde $450 USD",
      duration: "7 días / 4 noches",
      dates: ["26 Oct 2025"],
      rating: 4.9,
      highlights: ["Bus Mix Premium+", "Saltos del Mocona", "Media pensión", "Coordinador permanente", "Compras Ciudad del Este", "Piscina"],
      location: "Misiones, Argentina",
      groupSize: "Grupo organizado",
      type: "basic",
    },
    {
      id: 10,
      name: "Una Navidad Distinta en Florianópolis",
      image: "/navidad.webp",
      description:
        "Celebra una Navidad única en las hermosas playas de Florianópolis. Incluye hotel Palace, excursiones a Bombas, Bombinhas y Camboriú, más actividades especiales navideñas.",
      price: "Desde $890 USD",
      duration: "10 días / 7 noches",
      dates: ["20 Dic 2025"],
      rating: 4.8,
      highlights: ["Hotel Palace", "Bus Mix Premium", "3 excursiones incluidas", "Media pensión", "Piscina climatizada", "Coordinación permanente"],
      location: "Florianópolis, Brasil",
      groupSize: "Grupo organizado",
      type: "basic",
    },
    {
      id: 11,
      name: "Año Nuevo en Florianópolis",
      image: "/añonuevo.webp",
      description:
        "Recibe el 2026 en uno de los destinos más mágicos de Brasil. Fiesta de fin de año en la playa con fuegos artificiales, hotel Palace y excursiones incluidas.",
      price: "Desde $1.300 USD",
      duration: "10 días / 7 noches",
      dates: ["27 Dic 2025"],
      rating: 4.9,
      highlights: ["Fiesta Año Nuevo", "Hotel Palace", "Bus Mix Premium", "3 excursiones incluidas", "Fuegos artificiales", "Actividades especiales"],
      location: "Florianópolis, Brasil",
      groupSize: "Grupo organizado",
      type: "basic",
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
                  {pkg.price !== "Consultar precios" && (
                    <div>
                      <span className="text-2xl font-bold text-travel-blue">{pkg.price}</span>
                      <span className="text-sm text-gray-500 block">por persona</span>
                    </div>
                  )}
                  <Button 
                    onClick={() => handlePackageAction(pkg)}
                    className={`bg-travel-gold hover:bg-travel-gold/90 text-travel-blue font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${pkg.price === "Consultar precios" ? "ml-auto" : ""}`}
                  >
                    {pkg.type === "basic" ? "Consultar más información" : "Ver Itinerario y Precios"}
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
                    {excursion.price !== "Consultar precios" && (
                      <div>
                        <span className="text-xl font-bold text-travel-blue">{excursion.price}</span>
                        <span className="text-sm text-gray-500 block">por persona</span>
                      </div>
                    )}
                    <Button className={`bg-travel-gold hover:bg-travel-gold/90 text-travel-blue font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${excursion.price === "Consultar precios" ? "ml-auto" : ""}`}>
                      Ver Itinerario y Precios
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
