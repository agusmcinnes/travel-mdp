"use client"

import Image from "next/image"
import { Building2, ChevronLeft, ChevronRight, MapPin, Star, X } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function Hotels() {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    hotel1: 0,
    hotel2: 0,
    hotel3: 0,
    hotel4: 0,
    hotel5: 0,
    hotel6: 0
  })

  const [selectedHotel, setSelectedHotel] = useState<string | null>(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const hotelsData = [
    {
      id: 'hotel2',
      name: 'Hotel Palace 1',
      location: 'Canasvieiras, Brasil',
      images: [
        'pareja_palace.jpg',
        '/card_palace_3.webp',
        '/card_palace_2.webp',
        '/card_palace_1.webp',
        '/pileta_palace.webp',
      ],
      description: 'Elegancia y sofisticación en el corazón de Canasvieiras.',
      link: 'https://www.hotelpalace1.com',
      rating: 5
    },
    {
      id: 'hotel3',
      name: 'Paraíso Palace',
      location: 'Canasvieiras, Brasil',
      images: [
        '/paraisopalace.webp',
      ],
      description: 'Un verdadero paraíso con servicios all-inclusive y entretenimiento.',
      link: 'https://paraisopalacehotel.com.br/home-espanol/',
      rating: 5
    },
    {
      id: 'hotel5',
      name: 'Bora Bora Bombinhas',
      location: 'Bombinhas, Brasil',
      images: [
        '/borabora.webp',
      ],
      description: 'Resort exclusivo en las hermosas playas de Bombinhas.',
      link: 'https://www.boraborapousada.com.br/site/pt-br/home',
      rating: 5
    },
    {
      id: 'hotel6',
      name: 'Boulevard Canasvieras',
      location: 'Canasvieiras, Brasil',
      images: [
        '/boulevard.webp',
      ],
      description: 'Moderno hotel boutique con vista al mar y servicios de primera clase.',
      link: 'https://www.hoteisboulevard.com.br/',
      rating: 4
    },
    {
      id: 'hotel1',
      name: 'Lexus Beira mar',
      location: 'Canasvieiras, Brasil',
      images: [
        'residencial-lexus-beira.webp',
      ],
      description: 'Lujo y confort frente al mar con vistas espectaculares al océano.',
      link: 'https://lexus-beiramar.hotelflorianopolis.com/es/',
      rating: 5
    },
  ]

  const nextImage = (hotelId: string) => {
    const hotel = hotelsData.find(h => h.id === hotelId)
    if (hotel) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [hotelId]: (prev[hotelId as keyof typeof prev] + 1) % hotel.images.length
      }))
    }
  }

  const prevImage = (hotelId: string) => {
    const hotel = hotelsData.find(h => h.id === hotelId)
    if (hotel) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [hotelId]: prev[hotelId as keyof typeof prev] === 0 ? hotel.images.length - 1 : prev[hotelId as keyof typeof prev] - 1
      }))
    }
  }

  const openHotelModal = (hotelId: string) => {
    setSelectedHotel(hotelId)
    setModalImageIndex(0)
    setIsModalOpen(true)
  }

  const nextModalImage = () => {
    if (selectedHotel) {
      const hotel = hotelsData.find(h => h.id === selectedHotel)
      if (hotel) {
        setModalImageIndex(prev => (prev + 1) % hotel.images.length)
      }
    }
  }

  const prevModalImage = () => {
    if (selectedHotel) {
      const hotel = hotelsData.find(h => h.id === selectedHotel)
      if (hotel) {
        setModalImageIndex(prev => prev === 0 ? hotel.images.length - 1 : prev - 1)
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-travel-blue" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-travel-gold" />
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-travel-blue">
              Nuestros Hoteles
            </h2>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hemos seleccionado cuidadosamente los mejores hoteles para garantizar que su viaje sea una experiencia inolvidable. 
            Cada alojamiento ha sido probado por nuestro equipo para asegurar la máxima calidad y comodidad.
          </p>
        </div>

        {/* Featured Hotel - Hotel Palace 1 */}
        {(() => {
          const featuredHotel = hotelsData.find(h => h.id === 'hotel2')
          if (!featuredHotel) return null
          
          return (
            <div className="mb-16">
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                {/* Background Image */}
                <Image
                  src="/pareja_palace.jpg"
                  alt={featuredHotel.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="100vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
                
                {/* Special Badge */}
                <div className="absolute left-1/2 top-4 sm:top-6 -translate-x-1/2 bg-travel-gold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg z-10">
                  🏆 HOTEL DESTACADO
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-gradient-to-r from-travel-gold to-yellow-500 text-white px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold flex items-center gap-2 shadow-lg z-10">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  {featuredHotel.rating}
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-start p-6 sm:p-8 md:p-12 z-10">
                  <div className="max-w-2xl">
                    <h3 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                      {featuredHotel.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-travel-gold flex-shrink-0" />
                      <span className="text-white/90 text-lg sm:text-xl font-medium">{featuredHotel.location}</span>
                    </div>
                    <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                      {featuredHotel.description}
                    </p>
                    <button
                      onClick={() => openHotelModal(featuredHotel.id)}
                      className="bg-gradient-to-r from-travel-gold to-yellow-500 hover:from-travel-gold/90 hover:to-yellow-500/90 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      Ver Imágenes del Hotel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Other Hotels Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hotelsData.filter(hotel => hotel.id !== 'hotel2').map((hotel, index) => (
            <div 
              key={hotel.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 h-[500px] flex flex-col"
            >
              {/* Image Carousel */}
              <div className="relative overflow-hidden h-64 flex-shrink-0">
                <Image
                  src={hotel.images[currentImageIndex[hotel.id as keyof typeof currentImageIndex]]}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Carousel Controls - Solo mostrar si hay más de una imagen */}
                {hotel.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(hotel.id)}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-travel-blue" />
                    </button>
                    <button
                      onClick={() => nextImage(hotel.id)}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-travel-blue" />
                    </button>
                  </>
                )}

                {/* Image Indicators - Solo mostrar si hay más de una imagen */}
                {hotel.images.length > 1 && (
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {hotel.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [hotel.id]: imgIndex }))}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          imgIndex === currentImageIndex[hotel.id as keyof typeof currentImageIndex]
                            ? 'bg-white w-4 sm:w-6' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 bg-travel-gold text-white">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                  {hotel.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-travel-blue mb-2 text-xl sm:text-2xl">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-travel-gold flex-shrink-0" />
                    <span className="text-gray-600 text-sm font-medium">{hotel.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                    {hotel.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="text-travel-gold fill-current h-4 w-4" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({hotel.rating}/5)</span>
                  </div>
                  
                  <button
                    onClick={() => openHotelModal(hotel.id)}
                    className="bg-travel-blue hover:bg-travel-blue/90 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Ver Hotel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="font-montserrat text-2xl font-bold text-travel-blue mb-4">
              ¿Necesita ayuda para elegir?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de expertos está disponible para ayudarlo a encontrar el hotel perfecto para su viaje.
            </p>
            <button 
              onClick={() => window.open('https://wa.link/diii0m', '_blank')}
              className="bg-travel-gold hover:bg-travel-gold/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contactar Asesor
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-travel-gold/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-travel-blue/10 rounded-full animate-float-delayed"></div>

      {/* Hotel Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black">
          {selectedHotel && (() => {
            const hotel = hotelsData.find(h => h.id === selectedHotel)
            if (!hotel) return null
            
            return (
              <>
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/70 to-transparent p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <div className="text-white">
                      <DialogTitle className="font-montserrat text-xl sm:text-2xl font-bold mb-1 text-white">
                        {hotel.name}
                      </DialogTitle>
                      <div className="flex items-center gap-2 text-sm sm:text-base">
                        <MapPin className="h-4 w-4" />
                        <span>{hotel.location}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={hotel.images[modalImageIndex]}
                    alt={`${hotel.name} - Imagen ${modalImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />

                  {/* Navigation Arrows */}
                  {hotel.images.length > 1 && (
                    <>
                      <button
                        onClick={prevModalImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
                      >
                        <ChevronLeft className="h-6 w-6 text-gray-800" />
                      </button>
                      <button
                        onClick={nextModalImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
                      >
                        <ChevronRight className="h-6 w-6 text-gray-800" />
                      </button>
                    </>
                  )}
                </div>

                {/* Footer with Image Counter and Description */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm sm:text-base text-center sm:text-left max-w-2xl">
                      {hotel.description}
                    </p>
                    
                    {hotel.images.length > 1 && (
                      <div className="flex items-center gap-4">
                        <span className="text-white text-sm font-medium">
                          {modalImageIndex + 1} / {hotel.images.length}
                        </span>
                        <div className="flex gap-2">
                          {hotel.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setModalImageIndex(imgIndex)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                imgIndex === modalImageIndex
                                  ? 'bg-white w-6' 
                                  : 'bg-white/50 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )
          })()}
        </DialogContent>
      </Dialog>
    </section>
  )
}
