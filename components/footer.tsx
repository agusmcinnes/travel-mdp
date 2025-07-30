import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-travel-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-travel-gold rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-36 translate-y-36"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image
                  src="/logo.png"
                  alt="Travel Group Mar del Plata"
                  width={200}
                  height={67}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
                Tu agencia de viajes de confianza desde 2015. Creamos experiencias únicas y memorables para que cada
                viaje sea una aventura inolvidable.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/p/Travel-Mar-Del-Plata-100063552577660/"
                  target="_blank"
                  className="bg-travel-gold hover:bg-travel-gold/80 p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-travel-blue" />
                </a>
                <a
                  href="https://www.instagram.com/travelgroupmardelplata/?hl=en"
                  target="_blank"
                  className="bg-travel-gold hover:bg-travel-gold/80 p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5 text-travel-blue" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-montserrat text-xl font-bold mb-6 text-travel-gold">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#inicio" className="text-blue-100 hover:text-travel-gold transition-colors duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#quienes-somos"
                    className="text-blue-100 hover:text-travel-gold transition-colors duration-300"
                  >
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#paquetes"
                    className="text-blue-100 hover:text-travel-gold transition-colors duration-300"
                  >
                    Paquetes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contacto"
                    className="text-blue-100 hover:text-travel-gold transition-colors duration-300"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-travel-gold transition-colors duration-300">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-montserrat text-xl font-bold mb-6 text-travel-gold">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-travel-gold mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Falucho 81, Mar del Plata, Buenos Aires</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-travel-gold flex-shrink-0" />
                  <span className="text-blue-100">0223-15-541-2702</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-travel-gold flex-shrink-0" />
                  <span className="text-blue-100">info@travelmardelplata.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-blue-900">
          <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-blue-100 text-sm">
                © {currentYear} Travel Group Mar del Plata. Todos los derechos reservados.
              </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
