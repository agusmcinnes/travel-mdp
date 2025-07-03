"use client"

import Image from "next/image"
import { Heart, Globe, Star, Building2, ExternalLink, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { useState } from "react"

export function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    hotel1: 0,
    hotel2: 0,
    hotel3: 0,
    hotel4: 0,
    hotel5: 0,
    hotel6: 0
  })

  const hotelsData = [
    {
      id: 'hotel2',
      name: 'Hotel Palace 1',
      location: 'Canasvieiras, Brasil',
      images: [
        '/travel_pileta.webp',
        '/pileta_palace.webp',
        '/travel_grupal.webp'
      ],
      description: 'Elegancia y sofisticación en el corazón de Canasvieiras.',
      link: 'https://www.hotelpalace1.com',
      rating: 5
    },
        {
      id: 'hotel1',
      name: 'Lexus Beira mar',
      location: 'Canasvieiras, Brasil',
      images: [
        '/travel_pileta.webp',
        '/pileta_palace.webp',
        '/travel_grupal.webp'
      ],
      description: 'Lujo y confort frente al mar con vistas espectaculares al océano.',
      link: 'https://www.lexusbeiramar.com',
      rating: 5
    },
    {
      id: 'hotel3',
      name: 'Paraíso Palace',
      location: 'Canasvieiras, Brasil',
      images: [
        '/travel_pileta.webp',
        '/pileta_palace.webp',
        '/travel_grupal.webp'
      ],
      description: 'Un verdadero paraíso con servicios all-inclusive y entretenimiento.',
      link: 'https://www.paraisopalace.com',
      rating: 5
    },
    {
      id: 'hotel4',
      name: 'Palace 1',
      location: 'Canasvieiras, Brasil',
      images: [
        '/travel_pileta.webp',
        '/pileta_palace.webp',
        '/travel_grupal.webp'
      ],
      description: 'Experiencia única con atención personalizada y instalaciones premium.',
      link: 'https://www.palace1.com',
      rating: 4
    },
    {
      id: 'hotel5',
      name: 'Bora Bora Bombinhas',
      location: 'Bombinhas, Brasil',
      images: [
        '/travel_pileta.webp',
        '/pileta_palace.webp',
        '/travel_grupal.webp'
      ],
      description: 'Resort exclusivo en las hermosas playas de Bombinhas.',
      link: 'https://www.borabora-bombinhas.com',
      rating: 5
    },
    {
      id: 'hotel6',
      name: 'Boulevard Canasvieras',
      location: 'Canasvieiras, Brasil',
      images: [
        '/travel_pileta.webp',
        '/pileta_palace.webp',
        '/travel_grupal.webp'
      ],
      description: 'Moderno hotel boutique con vista al mar y servicios de primera clase.',
      link: 'https://www.boulevardcanasvieras.com',
      rating: 4
    }
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Desde 2008, Travel Mar del Plata ha sido el puente entre los sueños de viaje y las experiencias reales.
                Nacimos con la pasión de mostrar el mundo a través de los ojos de quienes lo aman.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada destino que ofrecemos ha sido cuidadosamente seleccionado y probado por nuestro equipo. No vendemos
                viajes, creamos memorias que duran toda la vida.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Heart className="h-8 w-8 text-travel-gold mx-auto mb-2" />
                <div className="font-bold text-2xl text-travel-blue">500+</div>
                <div className="text-sm text-gray-600">Familias Felices</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Globe className="h-8 w-8 text-travel-gold mx-auto mb-2" />
                <div className="font-bold text-2xl text-travel-blue">50+</div>
                <div className="text-sm text-gray-600">Destinos Únicos</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Star className="h-8 w-8 text-travel-gold mx-auto mb-2" />
                <div className="font-bold text-2xl text-travel-blue">15</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_grupal.webp"
                    alt="Equipo Travel Mar del Plata"
                    width={250}
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_comida.webp"
                    alt="Oficina Travel Mar del Plata"
                    width={250}
                    height={200}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_pileta.webp"
                    alt="Viajeros felices"
                    width={250}
                    height={300}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/travel_grupal-2.webp"
                    alt="Destinos increíbles"
                    width={250}
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
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

    {/* Hotels Section */}
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

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hotelsData.map((hotel, index) => (
            <div 
              key={hotel.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 ${
                hotel.id === 'hotel2' 
                  ? 'col-span-full border-4 border-travel-gold relative md:scale-105' 
                  : ''
              }`}
            >
              {/* Special Badge for Featured Hotel */}
              {hotel.id === 'hotel2' && (
                <div className="absolute left-1/2 top-2 sm:top-4 -translate-x-1/2 bg-travel-gold text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-10 text-nowrap">
                  🏆 HOTEL DESTACADO
                </div>
              )}

              {/* Image Carousel */}
              <div className={`relative overflow-hidden ${
                hotel.id === 'hotel2' 
                  ? 'h-64 sm:h-80 md:h-96' 
                  : 'h-64'
              }`}>
                <Image
                  src={hotel.images[currentImageIndex[hotel.id as keyof typeof currentImageIndex]]}
                  alt={hotel.name}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Carousel Controls */}
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

                {/* Image Indicators */}
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

                {/* Rating Badge */}
                <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 ${
                  hotel.id === 'hotel2' 
                    ? 'bg-gradient-to-r from-travel-gold to-yellow-500 text-white shadow-lg' 
                    : 'bg-travel-gold text-white'
                }`}>
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                  {hotel.rating}
                </div>
              </div>

              {/* Content */}
              <div className={`p-4 sm:p-6 md:p-8 ${hotel.id === 'hotel2' ? 'text-center' : ''}`}>
                <h3 className={`font-montserrat font-bold text-travel-blue mb-2 ${
                  hotel.id === 'hotel2' 
                    ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl' 
                    : 'text-xl sm:text-2xl'
                }`}>
                  {hotel.name}
                </h3>
                <div className={`flex items-center gap-2 mb-4 ${hotel.id === 'hotel2' ? 'justify-center' : ''}`}>
                  <MapPin className="h-4 w-4 text-travel-gold flex-shrink-0" />
                  <span className="text-gray-600 text-sm font-medium">{hotel.location}</span>
                </div>
                <p className={`text-gray-600 mb-6 leading-relaxed ${
                  hotel.id === 'hotel2' 
                    ? 'text-base sm:text-lg max-w-2xl mx-auto' 
                    : 'text-sm sm:text-base'
                }`}>
                  {hotel.description}
                </p>
                
                <div className={`flex items-center ${
                  hotel.id === 'hotel2' 
                    ? 'flex-col sm:flex-row justify-center gap-4 sm:gap-8' 
                    : 'justify-between'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className={`text-travel-gold fill-current ${
                          hotel.id === 'hotel2' 
                            ? 'h-4 w-4 sm:h-5 sm:w-5' 
                            : 'h-4 w-4'
                        }`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({hotel.rating}/5)</span>
                  </div>
                  
                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      hotel.id === 'hotel2' 
                        ? 'bg-gradient-to-r from-travel-gold to-yellow-500 hover:from-travel-gold/90 hover:to-yellow-500/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg' 
                        : 'bg-travel-blue hover:bg-travel-blue/90 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base'
                    }`}
                  >
                    Ver Hotel
                    <ExternalLink className="h-4 w-4 flex-shrink-0" />
                  </a>
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
            <button className="bg-travel-gold hover:bg-travel-gold/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Contactar Asesor
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-travel-gold/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-travel-blue/10 rounded-full animate-float-delayed"></div>
    </section>
    </>
  )
}
